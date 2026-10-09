# NutUI React Taro v3 → v4 Upgrade

把项目从 NutUI React Taro v3（`@nutui/nutui-react-taro` 3.x，小程序 / 跨端）升级到 v4（4.x）。

与常见的大版本升级不同：v3→v4 **几乎没有 Props 增删或改名**，破坏性变更集中在**样式 / CSS 类名 / Design Token / 枚举值 / 默认值**（如 Empty 的 `size`/`status`、Popover 的 `theme` 默认值、Toast 的 `duration`）。这些变更**不会触发编译错误**，漏改会静默出错。本 skill 用离线 CLI 的 `migrate` / `diff` 命令定位真正需要改的组件，以官方迁移文档为准逐处改写，避免臆造 API 改名或漏掉默认值变更。

## 安装

运行时通过 `npx` 免安装调用 CLI，无需预装：

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-taro-v3-to-v4
```

## 适用场景

- **系统性完成 v3 → v4 升级**：按依赖升级 → 扫描盘点 → 逐组件改写 → 验证的流程，把 Taro 项目从 `@nutui/nutui-react-taro` 3.x 升到 4.x。
- **定位真正需要改的组件**：用 `nutui-react-taro migrate 3 4 --apply ./src` 扫描项目，只列出项目实际用到、且有破坏性变更的组件，避免对全部组件盲目排查。
- **精确核对 API 差异**：用 `nutui-react-taro diff 3 4 <Component>` 拿到两版 Props 的枚举值 / 默认值 / 类型的精确 `旧→新`，补齐迁移文档没写到的 API 级差异。
- **处理枚举值 / 默认值变更**：识别 Empty `size`/`status`、Popover `theme`、Toast `duration` 等默认值变更——它们不报编译错，必须改代码。
- **核对自定义样式覆盖**：grep 项目里针对 `.nut-*` 类名或 `--nutui-*` 变量的自定义样式，对照 CSS 类名 / token 变更逐处修正。

## 依赖的 CLI 命令

- `nutui-react-taro migrate 3 4 [--component X] [--apply ./src]` —— 官方迁移文档（按组件切分 / 项目扫描）。
- `nutui-react-taro diff 3 4 [Component]` —— 跨版本 Props 实测差异。
- `nutui-react-taro doc <C>` / `token <C>` —— 完整文档与 Design Token 交叉核对。

全部离线、随包分发、支持 `--format json`。
