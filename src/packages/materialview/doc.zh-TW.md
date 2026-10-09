# MaterialView 材質視圖

跨端毛玻璃 / 材質視圖組件。基於 CSS `backdrop-filter` 實現細膩的毛玻璃、疊加色與內發光高光，參數可由 `scene` 自動查表預設，也可通過自定義屬性微調。

## 引入

```tsx
import { MaterialView } from '@nutui/nutui-react'
```

## 示例代碼

### 各材質場景一覽

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 底部導航背板（bottom-bar）

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 沉浸式與懸浮購買欄

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## MaterialView Props

| 屬性 | 說明 | 類型 | 必填 | 默認值 |
| --- | --- | --- | --- | --- |
| scene | 材質場景，7 種見 MaterialScene | `MaterialScene` | 否 | — |
| targetId | 模糊標識/ID | `string` | 否 | — |
| darkMode | 強制指定暗色模式（`true`: 暗色 / `false`: 亮色），未傳時自動跟隨系統 | `boolean` | 否 | 自動跟隨系統 |
| frostedGlass | 自定義毛玻璃配置 | `FrostedGlassConfig` | 否 | — |
| gradientBlur | 自定義漸變模糊配置 | `GradientBlurConfig` | 否 | — |
| overlayColor | 自定義疊加顏色（支持 rgba / hex） | `string` | 否 | — |
| style | 自定義行內樣式，組件自動補充未設置的圓角、背景色等 | `CSSProperties` | 否 | — |
| className | 追加類名 | `string` | 否 | — |

## MaterialScene 取值

| 值 | 語義說明 | 對應設計規範 | 典型用途 |
| --- | --- | --- | --- |
| `top-solid` | 帶底色懸浮容器（淺白 / 暗黑） | FG-Light / FG-Dark | 搜索框、膠囊導航（帶背景底色 + 內發光） |
| `top-plain` | 無底色高透懸浮容器 | FG-Clear（高透） | 輕量透明浮層、高透水晶膠囊 |
| `top-bar` | 吸頂通欄背板 | 純色背板 | 頂部吸頂通欄導航條 |
| `promotion-fair` | 淺色換膚懸浮容器 | FG-Skin-L | 淺色皮膚活動頁浮層 |
| `promotion-deep` | 深色換膚懸浮容器 | FG-Skin-D | 深色皮膚活動頁浮層 |
| `immersive` | 沉浸式懸浮容器（強制暗色） | FG-Dark | 視頻 / 沉浸頁浮層 |
| `bottom-bar` | 底部導航背板 | 漸變背景 | 底部 Tab 欄 |
