# NutUI React Taro v3 → v4 Upgrade

把项目从 NutUI React Taro v3（`@nutui/nutui-react-taro` 3.x，小程序 / 跨端）升级到 v4（4.x）。

v3→v4 同时包含**不兼容更新、兼容升级和新增能力**，涉及 **Props 增删 / 类型入口 / 枚举值 / 默认值 / 事件与布局行为 / CSS 类名与 DOM 结构 / Design Token / 视觉规格**。本 skill 用离线 CLI 的 `migrate` / `diff` 命令定位待核对组件，以最新官方迁移文档为准逐处改写，不预设 API 的变化范围，也不把兼容新增能力当作必改项。

移除 Props、旧枚举及类型入口问题可能触发类型错误；默认值、事件和布局变化通常不会。**编译通过不代表升级完成**，还需在项目支持的小程序 / H5 端分别构建，并通过真机 / 模拟器 / 浏览器验证运行时行为和视觉表现。

## 安装

运行时通过 `npx` 免安装调用 CLI，无需预装：

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-taro-v3-to-v4
```

## 适用场景

- **系统性完成 v3 → v4 升级**：按依赖升级 → 扫描盘点 → 逐组件改写 → 验证的流程，把项目从 `@nutui/nutui-react-taro` 3.x 升到 4.x。
- **定位待核对组件**：用 `nutui-react-taro migrate 3 4 --apply ./src --format json` 扫描项目，得到实际使用组件与随包迁移文档章节的交集；扫描不自动改写，也不保证每个匹配项都是不兼容变更。空清单仍需核对版本和扫描范围。
- **精确核对 API 差异**：用 `nutui-react-taro diff 3 4 <Component> --format json` 查看 Props 增删及枚举值 / 默认值 / 类型的精确 `旧→新`；无 API 差异不代表运行时行为未变。
- **清理移除项并核对事件**：如 CountDown 移除 `millisecond`，到零只触发 `onEnd`、不再触发 `onPaused`；同时检查 ResultPage 深层类型导入，勿照搬库内别名。
- **按业务处理枚举值 / 默认值**：迁移 Empty 旧枚举；Popover `theme`、Toast / Skeleton `duration` 等新默认值可接受，也可按需显式保留旧行为，并非全部必须恢复。
- **核对布局及自定义样式覆盖**：检查 ActionSheet `position` 开始生效与默认图标映射、Cell 标题截断及类名变化、Range 气泡结构，以及 `.nut-*` / `--nutui-*` 覆盖。
- **区分可选新增能力**：如 Price 新增尺寸和 `raw`、NavBar `subBar`、Cell `leading` / `content`，按需采用并验证启用后的布局影响。

## 依赖的 CLI 命令

- `nutui-react-taro migrate 3 4 [--component X] [--apply ./src]` —— 官方迁移文档（按组件切分 / 项目扫描）。
- `nutui-react-taro diff 3 4 [Component]` —— 跨版本 Props 实测差异。
- `nutui-react-taro doc <C>` / `token <C>` —— 完整文档与 Design Token 交叉核对。

全部离线、随包分发，使用时始终传 `--format json`。CLI 不实时拉取文档；以最新官方迁移说明为准，参见 [官方 v3 → v4 迁移文档](https://nutui.jd.com/taro/react/4x/#/zh-CN/guide/migrate-from-v3)。输出不一致时核对 CLI、文档及元数据版本。
