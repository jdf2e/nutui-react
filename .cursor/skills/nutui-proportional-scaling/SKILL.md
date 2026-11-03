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
  editing component SCSS for resize; SCSS: prefer calc($token + Npx) over
  #{} in calc, use outer calc() when mixing tokens that compile to
  var(--nutui-*).
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

### 2.1 构建与本地开发（Dev & Build）时的 px → `scale-px` 自动转换

- **无需手动在组件 SCSS 源码书写 `scale-px()`**：
  - 源码（`src/packages/*/*.scss`）直接书写设计稿的标准裸 `px`（例如 `padding: 12px 16px; margin-top: 8px; border-radius: 4px;`）。
  - **生产构建（`build.mjs` / `build-taro.mjs`）**：在内存中经由 `scripts/px-to-scale-px-in-component-scss.cjs` 将裸 `px` 自动包裹为 `scale-px(Npx)`，不污染磁盘上的源码。
  - **本地开发（`vite.config.mts`）**：开发服务器的 SCSS 加载钩子中已接入该转换逻辑，本地 `pnpm dev` 同样实时生效，所见即所得。
- **变量兜底必须显式书写**：`src/styles/variables*.scss` 不被自动脚本处理，其默认值声明必须显式包裹 `scale-px()`。
- **特定场景专用函数**：字号/行高使用 `scale-font-px()`，图标使用 `scale-icon-px()`。

---

## 3. 提交里固化的规范（务必遵守）

### 3.1 「0px 不转换」（`1a35d9b8`）

凡应为 **数值 0** 的尺寸，**严禁**写 `scale-px(0px)`，一律 **`0`** 或 **`0px`**（如 padding 某一维、`box-shadow` 偏移、border 为 0、`margin: 0`）。  
否则会得到 `calc(0px * var(--nut-scale-f))`，在部分浏览器或亚像素场景下与纯 `0` 表现不一致。

### 3.2 「细边框物理像素保护」（`border ≤ 1px`）

- 对于 `border` 与 `outline` 属性上数值 `≤ 1px`（如 `1px`、`0.5px`）的细线条，AST 转换器会进行物理像素保护，**不会且不应缩放**。
- 避免在 Retina 屏幕上被放大到 `1.17px` / `1.2px` 导致亚像素模糊、粗细不均或断线。

### 3.3 `line-height`

- **比例行高**（如 `line-height: 1`）：不随系数变，用于挤压行盒、图标对齐等 — 与「等比 px」不同维度。
- **与设计稿 px 绑定的行高**：用与字号一致的档位，通常为 **`scale-font-px`**，或与同一变量体系。
- 参考历史修复：弹层标题等曾去掉不恰当的固定 `line-height` 以免与大字模式冲突 — 新增时不要给标题随意写死 `line-height: 20px` 类样式，除非走缩放函数或主题变量。

### 3.4 组件 SCSS 书写模式

- 间距、圆角、固定宽高（非纯文字）：直接写标准设计稿裸 `px`，由构建/dev 工具链内存转换。
- 纯字体大小：`scale-font-px` 或主题已有 `--nutui-font-size-*`。
- 图标占位：**`scale-icon-px`** 或已有 `--nut-icon-*`。
- 保持与 **无障碍/大屏** 相关提交协同：同一文件改尺度时，勿回退 `dialog` 等对大字兼容的改动。

### 3.5 组件 `.tsx` 图标尺寸治理（props → class → 变量）

- 对 `@nutui/icons-react` / `@nutui/icons-react-taro`：尽量避免在组件上写死 `size={12}`、`width={16}`、`height={16}`。
- **推荐模式**：在 `.tsx` 里只加语义化 `className`，到对应 `.scss` 里用变量控制尺寸（优先 `$icon-size-*` 阶梯，或组件专用变量）。
- 若是内联 `<svg>`（非 NutUI 图标组件）也遵循同一规则：移除 `width/height` 字面量，改为 class，并在 SCSS 用变量（可新增如 `$xxx-icon-size`，默认 `scale-icon-px(Npx)`）。
- 新增尺寸档优先沉淀到 `variables.scss`（如 `$icon-size-11`、`$icon-size-16`），避免同一像素值在多个组件重复散落。

### 3.4 `calc()`、Sass 变量与 `#{}`（与 `variables.scss` / 主题 token 一致）

- **推荐**：在 `calc()` 里直接写 Sass 变量，如 **`calc($steps-vertical-head-icon-size + 1px)`**、**`calc($rate-item-margin / 2)`**，而不是 **`calc(#{$steps-vertical-head-icon-size} + 1px)`**。`#{}` 只在需要把值**硬插成无引号 CSS 片段**、或要避免 Sass 对单位做提前合并时再考虑；普通设计 token 用 **`$var` 作为 `calc` 的操作数**即可。
- **与 `var(--nutui-*)` 一起运算时**：许多 token 会展开为 **`var(--nutui-…, calc(Npx * var(--nut-scale-f, 1)))`**。此时**不要**指望纯 Sass 括号在声明值里做「减法 + 固定 px」，例如  
  **`margin: 0 ($switch-height - $switch-border-width + 3px) 0 7px`**  
  会在编译结果里拼成 **`var(...)var(...)`** 一类**缺少运算符**的非法片段。应写成 **`margin: 0 calc($switch-height - $switch-border-width + 3px) 0 7px`**，让整条长度在**一个** CSS `calc()` 里由浏览器解析。
- **`100%` 与长度相减**：用 **`calc(100% - Npx)`** 一层即可，避免出现 **`100% - calc(...)`** 这类单位不合法的组合（历史上有过 postcss / 手工替换导致的损坏，以当前组件 SCSS 为准）。

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
- [ ] 含 **`$token` 与裸 `px` 的混合运算**：若 token 会变成 **`var(--nutui-*)`**，是否已用 **`calc($a - $b + Npx)`**，而不是 **`($a - $b + Npx)`** 写在 `margin` / `width` 等非纯编译期长度位置。
- [ ] `calc()` 内对设计 token 是否优先 **`calc($var + 1px)`**，避免无必要的 **`#{}`**。
- [ ] 组件 `.tsx` 是否仍有写死图标尺寸（`size/width/height`）；如有，是否已改为 **class + SCSS 变量**（内联 `svg` 同理）。
- [ ] TS 侧改 `scale-f*` 已同步考虑 **Taro** 文件。
- [ ] 修改 `formatScaleValue` / 断点时，已通读 **视口与平板常量** 是否仍与文档、设计一致。

若与上游分支分歧，以**当前分支 `feat_resize` 最新提交**及 `src/utils/scale-f*.ts`、`src/styles/variables.scss` 为准。
