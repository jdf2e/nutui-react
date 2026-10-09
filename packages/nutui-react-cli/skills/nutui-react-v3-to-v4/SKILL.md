---
name: nutui-react-v3-to-v4
description: >
  当需要把项目从 NutUI React v3（@nutui/nutui-react 3.x）升级到 v4（4.x）时使用。触发场景如「把 NutUI React 从 v3 升级到 v4」「nutui v3 迁移 v4」「升级 @nutui/nutui-react 到 4.0」。与常见的大版本升级不同：v3→v4 几乎没有 Props 增删或改名，破坏性变更集中在**样式 / CSS 类名 / Design Token / 枚举值 / 默认值**（如 Empty 的 size/status、Popover 的 theme）。本 skill 用离线 CLI 的 migrate / diff 命令定位真正需要改的组件，以官方迁移文档为准逐处改写，避免臆造 API 改名或漏掉默认值变更。
allowed-tools:
  - Bash(nutui-react *)
  - Bash(npx -y @nutui/nutui-react-cli *)
  - Bash(which nutui-react)
  - Bash(grep *)
---

# NutUI React v3 → v4 升级

你负责把项目从 `@nutui/nutui-react` **3.x** 升级到 **4.x**。

**先记住这个反直觉的事实**：v3→v4 **几乎没有 Props 增删 / 改名**——大多数组件的 API 在两版之间完全一致。真正的破坏性变更集中在四个维度：

1. **枚举值 / 默认值变更**（最需要改代码）——如 Empty 的 `size`、`status`，Popover 的 `theme` 默认值。这些**不会自动兼容**，且编译器不会报错，漏改会静默出错。
2. **CSS 类名变更**——如果项目里有针对 `.nut-xxx` 类名的自定义样式覆盖，类名变了样式就失效。
3. **Design Token 变更**——`var(--nutui-*)` 变量的新增 / 移除 / 默认值调整。
4. **视觉规格调整**——间距、字号、图标尺寸等，通常无需改代码，但需构建后人工核对。

所以：**不要假设升级 = 改 import 或改 Props 名。** 要靠 CLI 查出每个组件到底改了什么维度，再逐处改。

## 支撑工具

`@nutui/nutui-react-cli` —— 离线、元数据随包分发。若不在 PATH 上用 npx 调用：

```bash
which nutui-react || echo "use: npx -y @nutui/nutui-react-cli <command>"
```

两个关键命令：

- `nutui-react migrate 3 4` —— **官方迁移文档**（权威、手写、随 v4 逐组件补充）。这是改写的**主依据**。
- `nutui-react diff 3 4 <Component>` —— **两版 meta 的 Props 实测差异**（枚举值、默认值、类型的精确 `旧→新`）。补齐文档没写到的 API/默认值级差异。

二者**互补**：migrate 讲"为什么改、怎么改"（含样式/类名/token），diff 给"API 层精确差了什么"。改一个组件时两个都看。

**始终传 `--format json` 解析结构化输出，不要正则抓文本。**

## 升级流程

按序执行。不要跳过扫描——它决定了你只需处理哪几个组件。

### 阶段 0 —— 依赖升级（先做）

1. 升级依赖到 v4（执行安装前先征求用户同意）：
   - `@nutui/nutui-react@^4`
   - 图标包 `@nutui/icons-react`（v4 配套版本）——若项目用到图标
2. 确认锁文件更新、`node_modules` 重装。

### 阶段 1 —— 扫描盘点

用 `--apply` 扫描项目，一步得到"哪些组件有破坏性变更需要处理"：

```bash
nutui-react migrate 3 4 --apply ./src --format json
```

输出里关注三个字段：

- `matchedComponents` —— **项目用到、且有破坏性变更的组件**。这是你的工作清单。
- `componentsWithoutBreakingChanges` —— 项目用到、但迁移文档未列破坏性变更的组件（多数组件在此，通常无需改）。
- `steps[].guide` —— 每个待处理组件的迁移说明原文。

若 `matchedComponents` 为空：按当前迁移文档，项目所用组件无需改代码——直接进阶段 3 验证即可（仍建议核对样式）。

补充扫描：如果项目有**自定义 CSS 覆盖**（针对 `.nut-*` 类名或 `--nutui-*` 变量），grep 出来，它们是类名/token 变更的高风险点：

```bash
grep -rn "\.nut-" src --include=*.css --include=*.scss --include=*.less
grep -rn -- "--nutui-" src --include=*.css --include=*.scss --include=*.less
```

### 阶段 2 —— 逐组件改写

对 `matchedComponents` 里的**每个**组件：

```bash
# 1. 读官方迁移说明（为什么改、样式/类名/token 怎么变）
nutui-react migrate 3 4 --component Empty --format json

# 2. 看 API 层精确差异（枚举值、默认值、类型的 旧→新）
nutui-react diff 3 4 Empty --format json

# 3. 需要时查完整文档 / token 交叉核对
nutui-react doc Empty --format json
nutui-react token Empty --format json
```

然后按迁移说明逐处改写。以**枚举值 / 默认值 / 类名 / token** 为主，不要臆造 Props 改名。

### 阶段 3 —— 验证

- 构建项目确认编译通过。
- **编译通过 ≠ 视觉/行为正确**——枚举值/默认值变更不会报编译错。逐个核对阶段 1/2 改过的组件的实际渲染。
- 报告：哪些组件已改、哪些自定义样式覆盖需复核、哪些建议用户在真机/浏览器里目视确认。

## 已知破坏性变更（截至当前文档，务必以 `migrate` 命令实时输出为准）

迁移文档随 v4 beta 持续补充，以下为当前已覆盖的组件与要点。**始终跑 `migrate 3 4` 拿最新清单，不要只依赖下表。**

### Empty —— 枚举值 + 默认值 + 类名，全部不兼容

- `size`：移除 `base`/`small`，改为 `full`/`half`/`partial`；**默认值 `base` → `half`**。
  - `size="base"` → 整页用 `full`、局部用 `partial`；`size="small"` → `half`。
- `status`：移除 `empty`/`error`；**默认值 `empty` → `network`**。
  - `status="empty"` → `search`（或按场景选枚举）；`status="error"` → `network`（或用 `image` 传自定义插图）。
- CSS 类名：`.nut-empty-base`/`.nut-empty-small` → `.nut-empty--full`/`--half`/`--partial`；插图容器 → `.nut-empty-image`。
- token：旧 `--nutui-empty-image-size` 等已移除，改用分尺寸变量。

### Popover —— 默认值 + 类名，不兼容

- 新增 `type`（`status`/`description`），默认 `status`。
- **`theme` 默认值 `light` → `dark`**：v3 默认明亮风格的，需显式加 `theme="light"`；v3 写 `theme="dark"` 的可移除该属性。
- CSS 类名：移除 `.nut-popover-dark`（深色已是默认）；明亮风格用 `.nut-popover-light`。
- token：多个 `--nutui-popover-*` 默认值调整。

### Toast —— 默认值 + 类名

- **默认 `duration` `2s` → `3s`**：要维持 2s 显式传 `duration: 2` 或全局 `Toast.config({ duration: 2 })`。
- 移除拼错的辅助类名 `.nut-toast-inner-descrption`（**无替代类名**，若有针对它的样式覆盖需删除/改到 `.nut-toast-inner`）。

### Radio / Checkbox —— 纯样式

- Radio：无文本时热区调整（新增 `.nut-radio-nolabel`）、去除选中投影。
- Checkbox：暗黑模式色彩修复。
- 一般无需改代码，但如有相关样式覆盖需核对。

## 核心规则

1. **先扫描，再逐组件查。** `migrate 3 4 --apply ./src` 给工作清单，逐个 `migrate --component X` + `diff 3 4 X` 再改。
2. **破坏性变更主要在样式/类名/token/枚举/默认值，不在 Props 名。** 不要臆造 API 改名。
3. **枚举值/默认值变更必须改代码且不报编译错**——Empty `size`/`status`、Popover `theme`、Toast `duration` 是重灾区，漏改会静默出错。
4. **始终 `--format json`。**
5. **不要用 `nutui-codemod` 做 v3→v4** —— 那个包的规则是 v2→v3 的（组件/Props 改名），与 v3→v4 不匹配，跑了会误改。
6. **构建通过不代表升级完成** —— 对改过的组件目视核对渲染，把需人工确认处交给用户。
