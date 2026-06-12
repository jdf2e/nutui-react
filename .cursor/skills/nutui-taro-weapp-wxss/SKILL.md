---
name: nutui-taro-weapp-wxss
description: >-
  NutUI React Taro 小程序 WXSS 编译超时修复：nutui-taro-demo 样式 bundle 合并、
  删除无效 renderingMode、app-origin.wxss 体积治理。Use when 微信小程序报
  [ WXSS 文件编译错误] something must be wrong、wcsc timeout、app-origin.wxss
  过大、predev:taro 重写 app.config、或修改 generate-nutui-taro.js /
  nutui.react.scss.taro.bundle.scss。
---

# NutUI Taro 小程序 WXSS 编译治理

## 1. 背景与根因

**现象**：`[ WXSS 文件编译错误] something must be wrong` + `Error: timeout`；偶发 `无效的 app.json ["renderingMode"]`。

**根因**：`app.ts` → `nutui.react.scss.taro.ts` 曾 **100+ 条**独立 `import` 组件 scss；Taro `sass.resource` 向**每个**文件注入 `variables.scss` + `theme-default.scss`（含 base64 `@font-face`）。

| 指标 | 修复前 | 修复后（bundle） |
| --- | --- | --- |
| `app-origin.wxss` | ~4MB | ~0.3–0.9MB |
| `@font-face` 重复 | ~216 | ~2–10 |

**不是**单个组件（如 `switch.scss`）的 bug，而是 **demo 全量样式打包方式** 导致。

**数据流（修复后）**：

```
app.ts → nutui.react.scss.taro.ts → nutui.react.scss.taro.bundle.scss
  ├─ variables + theme（各 1 次）
  └─ 全部组件 scss → dist/weapp/app-origin.wxss
```

---

## 2. 最小改动清单

| 文件 | 改动 |
| --- | --- |
| `scripts/taro/generate-nutui-taro.js` | 新增 `bundleScssStr`；遍历组件拼 `@import`；`nutui.react.scss.taro.ts` 改为单 import bundle；新增写 `nutui.react.scss.taro.bundle.scss` |
| `src/packages/nutui.react.scss.taro.bundle.scss` | variables/theme + 全部组件 `@import`（**自动生成，勿手改**） |
| `scripts/build-taro.mjs` | `buildCSS` / `buildHarmonyCSS` 的 glob 排除 `nutui.react.scss.taro.bundle.scss`，避免打进 npm 按组件发包 |
| `scripts/harmony/update-taro-entry.js` | 删除 `renderingMode: 'mixed'` |
| `scripts/taro/generate-taro-route.js` | 同上 |

- `nutui.react.scss.ts`（H5）**不变**，`generate-nutui.js` 仍生成 100+ 条 JS import
- **勿只改** `app.config.ts`：`predev:taro` 会跑 `update-taro-entry.js` 覆盖
- **不在最小集**：`config/index.js` minimize、各组件 scss calc 优化、`package.json` dev:weapp

### 边界说明（H5 / 发包）

| 场景 | 是否走 bundle | 说明 |
| --- | --- | --- |
| H5 文档站 `sites/mobile` + `nutui.react.scss.ts` | 否 | Vite `additionalData` 只注入 variables，theme 在 `main.tsx` 单独 import 一次，无 wcsc 超时问题 |
| Taro demo `dev:taro`（weapp / h5） | 是 | `app.ts` → `nutui.react.scss.taro.ts` → bundle |
| Taro 发包 `build:taro` | 否 | bundle 被 glob exclude；构建结束会删除 `nutui.react.scss.js`；业务方仍 `import '@nutui/nutui-react-taro/dist/es/packages/xxx/style'` |

---

## 3. 解决 / 好处 / 影响

**解决**：WXSS 超时；无效 `renderingMode` 警告；demo 可预览（需登录开发者工具 + 清缓存）。

**好处**：样式单入口；不改 `build:taro` 发包；新增组件仍由 `generate-nutui-taro.js` 写入 bundle。

| 命令 | 影响 |
| --- | --- |
| `dev:taro weapp` | 有 |
| `build:taro` / `build:taro:demo` | 无（bundle 已在 `build-taro.mjs` glob 中排除） |
| `prepare` / `generate:file:taro` | 有（再生 bundle） |
| `VITE_APP_PROJECT_ID=jmapp` | bundle 写死 default 主题，需另行验证 |

**已知限制**：`build:weapp` 生产压缩时 postcss-calc 可能破坏嵌套 `var+calc`（dev 无此问题）；游客模式 `webapi_getwxaasyncsecinfo:fail` 为环境问题。

---

## 4. 验证

```bash
pnpm run dev:taro weapp
wc -c packages/nutui-taro-demo/dist/weapp/app-origin.wxss
grep -c '@font-face' packages/nutui-taro-demo/dist/weapp/app-origin.wxss
```

期望：体积远小于 4MB；`@font-face` 为个位数。

---

## 5. 未采纳方案（备查）

| 方案 | 未采纳原因 |
| --- | --- |
| 各组件 scss 局部 CSS 变量 | 非主因，扩大 diff |
| `config/index.js` minimize(false) | dev 不需要 |
| `webpackImporter: false` | 引发 Module not found |
| sass.resource 置空 | 嵌套 @import（popup→overlay）缺变量 |
| 手改 app.config.ts | predev:taro 会覆盖 |

---

## 6. Agent 自检

- [ ] 只改生成脚本 + bundle + `build-taro.mjs` exclude，未扩大组件 scss diff？
- [ ] `build-taro.mjs` 已排除 `nutui.react.scss.taro.bundle.scss`？
- [ ] 两个生成脚本已去掉 `renderingMode`？
- [ ] 仍超时：查 `app-origin.wxss` 体积、游客模式、是否未重新 dev
