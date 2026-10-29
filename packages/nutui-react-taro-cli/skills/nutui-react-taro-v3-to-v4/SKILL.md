---
name: nutui-react-taro-v3-to-v4
description: >
  当需要把项目从 NutUI React Taro v3（@nutui/nutui-react-taro 3.x，小程序 / 跨端）升级到 v4（4.x）时使用。触发场景如「把 NutUI React Taro 从 v3 升级到 v4」「nutui v3 迁移 v4」「升级 @nutui/nutui-react-taro 到 4.0」。升级涉及 Props 新增与移除、类型入口、枚举值、默认值、事件与布局行为、CSS 类名及 Design Token 等变化，需区分不兼容更新与兼容新增能力。本 skill 用离线 CLI 的 migrate / diff 命令定位受影响组件，以最新官方迁移文档为准逐处改写，不预设 API 是否变化，不遗漏运行时和视觉回归。
allowed-tools:
  - Bash(nutui-react-taro *)
  - Bash(npx -y @nutui/nutui-react-taro-cli *)
  - Bash(which nutui-react-taro)
  - Bash(grep *)
---

# NutUI React Taro v3 → v4 升级

你负责把项目从 `@nutui/nutui-react-taro` **3.x** 升级到 **4.x**（Taro 小程序 / 跨端）。

**以最新官方迁移文档为准，不预设 Props 或 API 的变化范围。** v3→v4 同时包含不兼容更新、兼容升级和新增能力，需逐组件核对以下维度：

1. **Props / 类型入口变化**——如 CountDown 移除 `millisecond`、新增 `refreshInterval`，Popover 新增 `type`，ResultPage 调整类型入口。新增能力不等于必须迁移，移除项则需清理。
2. **枚举值 / 默认值变化**——如 Empty 的 `size`、`status`，Popover 的 `theme`，Toast / Skeleton 的 `duration`。旧枚举可能触发类型错误，默认值变化通常不会；是否显式保留旧行为需结合业务判断。
3. **事件 / 运行时 / 布局行为变化**——如 CountDown 到零不再触发 `onPaused`，ActionSheet 的 `position` 开始生效，Cell 标题改为单行截断。
4. **CSS 类名 / DOM 结构变化**——如 Cell、ActionSheet 的类名调整及 Range 气泡结构变化，自定义覆盖可能失效。
5. **Design Token 变化**——CSS 变量的新增、移除与默认值调整。
6. **视觉规格调整**——间距、字号、图标尺寸、暗黑模式等；即使无需改代码，也需验证实际渲染。

先确认项目实际用法，再根据迁移说明和 API 差异决定改写范围。不要臆造改名，也不要把兼容新增能力当作必改项。

## 支撑工具

`@nutui/nutui-react-taro-cli` —— 离线、元数据随包分发。若不在 PATH 上用 npx 调用：

```bash
which nutui-react-taro || echo "use: npx -y @nutui/nutui-react-taro-cli <command>"
```

两个关键命令：

- `nutui-react-taro migrate 3 4` —— **官方迁移文档**（权威、手写、随 v4 逐组件补充）。这是改写的**主依据**。
- `nutui-react-taro diff 3 4 <Component>` —— **两版 meta 的 Props 实测差异**（Props 增删、枚举值、默认值、类型的精确 `旧→新`）。补齐文档没写到的 API/默认值级差异。

二者**互补**：migrate 讲“为什么改、怎么改”（含事件行为、样式、类名、token），diff 给“元数据记录的 API 差异”。改一个组件时两个都看，不能用 diff 无差异推断运行时行为未变。

**CLI 离线输出对应已安装包随附的文档和元数据，不是实时拉取；本技能的组件变更摘要也不是完整或固定清单。** 统一以最新 [官方 v3 → v4 迁移文档](https://nutui.jd.com/taro/react/4x/#/zh-CN/guide/migrate-from-v3) 为准；若 CLI 输出或摘要与其不一致，核对 CLI、随包文档及元数据版本。

**始终传 `--format json` 解析结构化输出，不要正则抓文本。**

## 升级流程

按序执行。不要跳过扫描——它用于缩小核对范围，仍需对照最新迁移文档补查遗漏。

### 阶段 0 —— 依赖升级（先做）

1. 升级依赖到 v4（执行安装前先征求用户同意）：
   - `@nutui/nutui-react-taro@^4`
   - 图标包 `@nutui/icons-react-taro`（v4 配套版本）——若项目用到图标
2. 确认锁文件更新、`node_modules` 重装。

### 阶段 1 —— 扫描盘点

用 `--apply` 扫描项目，得到项目使用的组件与迁移文档章节的交集（扫描不自动改写代码）：

```bash
nutui-react-taro migrate 3 4 --apply ./src --format json
```

输出里关注三个字段：

- `matchedComponents` —— **项目用到、且匹配到迁移说明章节的组件**。这是待核对清单，不代表每项都有不兼容变更。
- `componentsWithoutBreakingChanges` —— 项目用到、但当前随包迁移文档未列出章节的组件；字段名不等于“已证明无变化”。
- `steps[].guide` —— 每个待核对组件的迁移说明原文，需区分必改项、保留旧行为的可选调整、兼容新增能力及视觉复核项。

若 `matchedComponents` 为空：先确认 CLI 文档版本及扫描范围，并对照最新官方迁移文档；不能仅凭空清单断言无需改代码。确认无遗漏后再进入阶段 3。

补充扫描：如果项目有**自定义 CSS 覆盖**（针对 `.nut-*` 类名或 `--nutui-*` 变量），grep 出来，它们是类名/token 变更的高风险点：

```bash
grep -rn --include='*.css' --include='*.scss' --include='*.less' -- '\.nut-' src
grep -rn --include='*.css' --include='*.scss' --include='*.less' -- '--nutui-' src
```

### 阶段 2 —— 逐组件改写

对 `matchedComponents` 里的**每个**组件，以及对照最新文档补查发现的受影响组件：

```bash
# 1. 读官方迁移说明（API、事件行为、样式、类名、token）
nutui-react-taro migrate 3 4 --component Empty --format json

# 2. 看 API 层精确差异（Props 增删、枚举值、默认值、类型）
nutui-react-taro diff 3 4 Empty --format json

# 3. 需要时查完整文档 / token 交叉核对
nutui-react-taro doc Empty --format json
nutui-react-taro token Empty --format json
```

按项目实际用法逐处改写：清理已移除的 Props / 类型引用 / CSS 变量，迁移旧枚举和类名，核对事件与布局行为；仅在需要保留旧体验时显式覆盖新默认值。兼容新增能力按需采用，不强制添加；Props 改名必须有文档或 API 差异依据。

### 阶段 3 —— 验证

- 运行项目已有的类型检查、目标端构建及相关测试（如 `taro build --type weapp` / `taro build --type h5`），检查移除 Props、旧枚举及类型入口问题。
- **编译通过 ≠ 视觉/行为正确**——默认值、事件触发和布局变化通常不会触发编译错误。核对所有受影响用法，包括未改代码但依赖默认值的组件。
- 在项目实际支持的小程序 / H5 端分别验证；小程序使用真机 / 模拟器，H5 使用浏览器。重点验证 CountDown 结束回调、ActionSheet 弹出位置与图标布局、Cell 长标题与右侧内容，并复核样式覆盖及暗黑模式，不将仅 H5 的变更泛化到小程序。
- 报告：已改组件、选择保留或接受的新默认行为、未采用的可选能力，以及仍需真机 / 模拟器 / 浏览器确认的项目。

## 参考资料

逐组件核对时，按需阅读 [已知不兼容更新与兼容升级](references/migration-changes.md) 中的对应章节；摘要不能替代最新官方迁移说明。

## 核心规则

1. **先扫描，再逐组件查。** 扫描结果是待核对清单，逐个读取迁移说明和 API 差异并对照最新官方文档。
2. **不预设 Props / API 是否变化。** 同时核对增删、类型、枚举、默认值、事件、布局、类名和 token，不臆造改名。
3. **区分必改与可选。** 移除项需清理；默认值按业务选择接受或显式保留旧行为；兼容新增能力不强制使用。
4. **始终 `--format json`。** CLI 为离线随包数据，输出可能落后于最新官方文档。
5. **不要用 `nutui-codemod` 做 v3→v4** —— 那个包的规则是 v2→v3 的（组件/Props 改名），与 v3→v4 不匹配，跑了会误改。
6. **构建通过不代表升级完成** —— 验证所有受影响组件的行为和渲染，包括未修改但依赖默认行为的用法。
