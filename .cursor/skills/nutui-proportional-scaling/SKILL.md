---
name: nutui-proportional-scaling
description: >-
  NutUI React proportional scaling on branch feat_resize: runtime --nut-scale-f /
  --nut-scale-font / --nut-scale-icon from scale-f.ts (H5) and scale-f.taro.ts
  (Taro), Sass helpers scale-px / scale-font-px / scale-icon-px and theme font
  tokens in variables.scss & theme-*.scss; npm run build / build:taro run
  scripts/px-to-scale-px-in-component-scss.cjs on component SCSS in memory; profiles standard / large / elderly;
  commit-backed rules e.g. never scale 0px. Use when implementing 多尺寸适配,
  等比适配, 大字版, 老年版, scale-px, viewport or native bridge scaling, or
  editing component SCSS for resize.
---

# NutUI React 等比适配

## 1. 运行时：谁在写 CSS 变量

- **H5**：`src/utils/scale-f.ts`
  - `initScaleF(profile?)`：首次计算缩放、`resize` 时 `refreshScaleF`。
  - `getScaleF`：优先 `jmfe.callNative('DongScreenAdapterPlugin','getScale')`，失败用视口规则。
  - 视口回退要点：`innerWidth >= 600` 视作 pad，基准乘 `1.2`；`375–600` 间按 `375` 比例，**上限 1.17**（与源码常量一致）。
- **Taro 侧复用同一套契约**：`src/utils/scale-f.taro.ts`，并从 `src/utils/index.taro.ts` 导出。
- 写入 `:root` 的变量（与 `variables.scss` 一致）：
  - `--nut-scale-f`：布局/通用 `scale-px`
  - `--nut-scale-font`：`scale-font-px`、主题 `--nutui-font-size-*`
  - `--nut-scale-icon`：`scale-icon-px`、图标相关

**档位 `ScaleProfile`**：`standard` | `large` | `elderly`（仅后两者生效额外倍率）。  
**场景倍率**（与 `getSceneRatio` 一致）：老年对 `font` / `icon` / `lego` × `1.3`；大字仅对 `font` × `1.15`。

**JS 里算像素**：`calcByProfile(baseValue, { scene, profile?, scale?, device? })` — 用于组件内联样式、画布尺寸等，与 Sass 的 `calc(...* var(--nut-scale-*))` 同一套语义。

---

## 2. 样式层：`variables.scss` 中的函数

```scss
// 根上默认值见 variables.scss :root
@function scale-px($size) {
  @return calc(#{$size} * var(--nut-scale-f, 1));
}
@function scale-font-px($size) {
  @return calc(#{$size} * var(--nut-scale-font, var(--nut-scale-f, 1)));
}
@function scale-icon-px($size) {
  @return calc(#{$size} * var(--nut-scale-icon, var(--nut-scale-f, 1)));
}
```

**主题字号档**（`theme-default.scss` / `theme-dark.scss`）：`--nutui-font-size-*` 使用 `calc(Npx * var(--nut-scale-font, var(--nut-scale-f, 1)))`，与 **大字/老年** 档位对齐。

### 2.1 `npm run build` / `npm run build:taro` 时的 px → `scale-px`

- 与 `package.json` 中顺序一致：先跑 **`scripts/replace-css-var.js`**，再 **`scripts/build.mjs`** 或 **`scripts/build-taro.mjs`**；上述脚本在读取 **`src/packages/**/\*.scss`（不含 demo）** 后，会经 **`scripts/px-to-scale-px-in-component-scss.cjs`** 在**内存**里把声明值中的裸 **`Npx`** 转为 **`scale-px(Npx)`**（规则见 §3），**不写回\*\*仓库文件。
- 源码里可继续手写 **`scale-px` / `scale-font-px` / `scale-icon-px`**；构建不会重复嵌套 `scale-px`。

---

## 3. 提交里固化的规范（务必遵守）

### 3.1 「0px 不转换」（`1a35d9b8`）

凡应为 **数值 0** 的尺寸，**不要**写 `scale-px(0px)`，一律 **`0`** 或 **`0px`**（如 padding 某一维、`box-shadow` 偏移、border 为 0、`margin: 0`）。  
否则会得到 `calc(0px * var(--nut-scale-f))`，在部分浏览器或亚像素场景下与纯 `0` 表现不一致。

### 3.2 `line-height`

- **比例行高**（如 `line-height: 1`）：不随系数变，用于挤压行盒、图标对齐等 — 与「等比 px」不同维度。
- **与设计稿 px 绑定的行高**：用与字号一致的档位，通常为 **`scale-font-px`**，或与同一变量体系。
- 参考历史修复：弹层标题等曾去掉不恰当的固定 `line-height` 以免与大字模式冲突 — 新增时不要给标题随意写死 `line-height: 20px` 类样式，除非走缩放函数或主题变量。

### 3.3 组件 SCSS 迁移模式（`dc4f1e28` / 后续 style 提交）

- 间距、圆角、`border` 粗细、固定宽高（非纯文字）：优先 **`scale-px`**。
- 纯字体大小：`scale-font-px` 或主题已有 `--nutui-font-size-*`。
- 图标占位：**`scale-icon-px`** 或已有 `--nut-icon-*`。
- 保持与 **无障碍/大屏** 相关提交协同：同一文件改尺度时，勿回退 `dialog` 等对大字兼容的改动。

---

## 4. 业务接入清单

1. **入口调用**：在应用入口（仅浏览器环境）调用 `initScaleF(可选档位)`；档位可随业务切换并依赖内部 `setScaleProfile` 刷新变量。
2. **Taro**：使用 `scale-f.taro` 导出，保证 H5 与小程序 WebView 行为一致（仍以仓库实现为准）。
3. **覆写主题**：通过 `--nutui-*` 或 `--nut-scale-*` 覆盖时，保持 `calc` 与变量回退链完整。
4. **验收**：切换标准/大字/老年、收窄与放宽视口、（如有）站内容器走原生 `getScale`，检查布局与字号是否同比变化且无「0px 被 scale」问题。

---

## 5. Agent 自检（改完缩放权相关代码时）

- [ ] 新增 **0** 尺寸未误用 `scale-px(0px)`。
- [ ] 字体/图标是否应走 **`scale-font-px` / `scale-icon-px`** 而非误用 `scale-px`。
- [ ] TS 侧改 `scale-f*` 已同步考虑 **Taro** 文件。
- [ ] 修改 `formatScaleValue` / 断点时，已通读 **视口与平板常量** 是否仍与文档、设计一致。

若与上游分支分歧，以**当前分支 `feat_resize` 最新提交**及 `src/utils/scale-f*.ts`、`src/styles/variables.scss` 为准。
