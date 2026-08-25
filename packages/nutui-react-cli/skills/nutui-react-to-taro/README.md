# NutUI React to Taro Migration

`nutui-react-to-taro` 是把项目从 NutUI React（`@nutui/nutui-react`，H5）迁移到 NutUI React Taro（`@nutui/nutui-react-taro`，小程序 / 跨端）的 skill，面向 AI 编程智能体。两个包由同一套 codebase 构建，几乎每个组件在两端都同名、Props 也大体一致，因此迁移高度规则化。skill 借助源端与目标端两个离线 CLI 交叉核对 Props，把迁移拆成包名 / import 改写、原生标签 → Taro 组件替换、样式单位修正等机械步骤，并对少数两端 Props 不同的组件做人工判断，避免盲目查找替换产出在小程序上悄悄失效的代码。

## 安装

本 skill 同时依赖源端（H5）与目标端（Taro）两个 CLI，运行时通过 `npx` 免安装调用，无需预装：

```bash
npx skills add jdf2e/nutui-react --skill nutui-react-to-taro
```

## 适用场景

- **把 H5 项目迁移到小程序 / 跨端**：需要把使用 `@nutui/nutui-react` 的 H5 项目或页面整体迁移到 Taro（`@nutui/nutui-react-taro`）运行时时，按扫描盘点 → 机械改写 → 语义改写 → 验证的流程，系统性完成包名、import、标签与样式的替换。
- **配置 Taro + NutUI 运行环境**：迁移前先准备项目——安装 `@nutui/nutui-react-taro` 等依赖、在 `config/index.js` 开启 `@tarojs/plugin-html` 并设置设计尺寸、在应用入口引入全局样式，确保迁移后的代码能在 Taro 编译运行。
- **交叉核对两端组件 Props 差异**：改写每个组件前，用源端与目标端两个 CLI 对比 Props（如 Uploader、Image、InputNumber 等两端不一致的组件），删除或重映射 Taro 端不接受的属性，避免产出在小程序上悄悄失效的代码。
- **改写 Web-only API 与原生 DOM 逻辑**：把 `window` / `document` / `localStorage` / canvas 等浏览器专有写法逐处映射到 `@tarojs/taro` 或组件自身能力，识别 Taro 端无对应的组件（如 `Audio`），并对无法安全自动迁移处标记出来交用户复核。
- **替换原生标签与样式单位**：将 `<div>` / `<span>` / `<img>` 等原生 HTML 标签替换为 `@tarojs/components`（`View` / `Text` / `Image`），修正裸 px、逻辑属性（如 `marginInlineStart`）与触摸事件类型，必要时用 `pxTransform` 做跨设备缩放。
