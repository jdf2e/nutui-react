# Tabbar 標簽欄

Tabbar 用於底部導航。預設使用相容原有設定和樣式的一般材質；示例透過 `material="frosted"` 展示懸浮圓角毛玻璃背板。

## 引入

```tsx
import { Tabbar } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 徽標提示

透過 `dot` 或 `value` 可以在標籤圖標上展示紅點、數字或文字徽標，普通圖標使用元件預設定位，營銷圖片可透過業務樣式調整徽標位置。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 只配圖標

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 只配文字

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 首坑品牌+營銷態

此示例展示營銷圖片上的紅點、數字和文字徽標，透過 `title(active)` 控制圖片下方的文案，並使用 `badge-demo.scss` 調整圖片徽標的位置。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義顏色+數量

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 再次點擊目前項目支援回調

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 固定底部與返頂

`fixed` 用於固定底部導航，傳入 `fixed` 或 `safeArea` 時會渲染底部安全區；一般材質的導航層預設高度為 46px（JMAPP/JRKF 主題為 50px），毛玻璃材質為 52px，安全區高度取 `env(safe-area-inset-bottom)`，並可透過 `--nutui-safe-area-multiple` 調整。

返頂示例在首頁選中且捲動達到 160px 後切換圖標，再次點擊首頁時由呼叫方透過 `onActiveClick` 捲動目前容器；`icon(active)` 和捲動狀態也由呼叫方控制，無須新增 Tabbar 屬性。

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### addonBefore 前置入口

透過 `addonBefore` 傳入圖片或自訂節點，元件預設提供右側兩角為全圓角的 52×52px 定位容器，並裁切超出容器的內容。

圖片、外觀與點擊行為由呼叫方實作；`addonBefore` 不占用標籤索引，點擊時不會觸發 `onSwitch`。

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 毛玻璃材質

設定 `material="frosted"` 後，Tabbar 使用 `MaterialView` 的 `bottom-bar` 場景作為導航背板，設定 3px 模糊和透明度為 80% 的疊加色；背板為全圓角，元件外層和底部安全區保持透明。不傳 `material` 時沿用一般材質的全寬背景、舊版布局類別和主題變數。

H5 背板的明暗由 `.nut-theme-dark` 主題類控制，頁面背景建議延伸到安全區；實際模糊效果取決於瀏覽器支援。

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 換膚背板

傳入 `skinBackground` 後，自訂內容優先於 `material`，取代內建背板；元件負責背板裁切、全圓角和導航項層級，圖片及專屬定位由呼叫方實作。

可以透過 `icon(active)` 依選中狀態切換圖標圖片。

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## Tabbar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultValue | 默認選中的標簽的索引值 | `number` | `0` |
| value | 選中的標簽的索引值 | `number` | `-` |
| fixed | 是否固定在頁面底部，開啟時會渲染底部安全區 | `boolean` | `false` |
| activeColor | 選中項顏色，留空時由主題樣式決定 | `string` | `''` |
| inactiveColor | 未選中項顏色，留空時由主題樣式決定 | `string` | `''` |
| direction | 排列方向，恰好兩個標籤時可設為橫向 | `'vertical' \| 'horizontal'` | `'vertical'` |
| safeArea | 是否開啟iphone繫列全面屏底部安全區適配 | `boolean` | `false` |
| material | 背板材質；一般材質保留舊版布局，毛玻璃使用懸浮圓角背板 | `'standard' \| 'frosted'` | `'standard'` |
| skinBackground | 自訂換膚背板內容，傳入時取代預設材質 | `ReactNode` | `-` |
| addonBefore | 前置入口內容，圖片與點擊由呼叫方提供 | `ReactNode` | `-` |
| onSwitch | 切換頁簽時觸發事件 | `(value) => void` | `-` |

## Tabbar.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 標簽頁的標題 | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| icon | 自定義圖標 | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| value | 徽標中顯示的內容，支持數字、字符和自定義內容 | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| max | value 為數值時，最大值 | `number` | `99` |
| dot | 徽標是否為小點 | `boolean` | `false` |
| top | 徽標的上下偏移量，支持單位設置，可設置為：5 等 | `number` | `0` |
| right | 徽標的左右偏移量，支持單位設置，可設置為：5 等 | `number` | `0` |
| onActiveClick | 再次點擊目前選中項時觸發 | `() => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。一般材質沿用原有顏色、邊框、陰影和高度變量；內容層、間距、圓角和選中項背景變量用於毛玻璃及換膚背板。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-tabbar-height | 導航層高度 | 一般材質 `46px`（JMAPP/JRKF `50px`）；毛玻璃 `52px` |
| \--nutui-tabbar-addon-before-source-size | `addonBefore` 定位容器尺寸 | `52px` |
| \--nutui-tabbar-addon-before-gap | `addonBefore` 與導航背板間距 | `8px` |
| \--nutui-tabbar-addon-before-outset | `addonBefore` 向外側抽縮距離 | `16px` |
| \--nutui-tabbar-content-height | 內容層高度 | `44px` |
| \--nutui-tabbar-horizontal-padding | 導航層左右間距 | `12px` |
| \--nutui-tabbar-content-padding | 導航背板內邊距 | `4px` |
| \--nutui-tabbar-border-radius | 導航背板圓角 | 全圓角（跟隨導航高度） |
| \--nutui-tabbar-active-background | 選中項背景 | `var(--nutui-mask-2)` |
| \--nutui-tabbar-active-border-radius | 子項圓角 | 全圓角（跟隨子項高度） |
| \--nutui-tabbar-active-background-duration | 選中背景滑動與回彈時長 | `300ms` |
| \--nutui-tabbar-active-background-easing | 選中背景滑動緩動 | `cubic-bezier(0.38, 0, 0.24, 1)` |
| \--nutui-tabbar-active-background-scale-easing | 選中背景回彈緩動 | `cubic-bezier(0.8, 0, 0.24, 1)` |
| \--nutui-tabbar-active-color | 選中顏色 | `$color-primary` |
| \--nutui-tabbar-inactive-color | 未選中顏色 | `$color-title` |
| \--nutui-tabbar-border-top | 上邊框 | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | 下邊框 | `1px solid #eee` |
| \--nutui-tabbar-box-shadow | 陰影 | `none` |
| \--nutui-tabbar-text-font-size | 標題字體大小 | `$font-size-xxs` |
| \--nutui-tabbar-text-large-font-size | 無圖標時標題字體大小 | `$font-size-l` |
| \--nutui-tabbar-text-large-font-weight | 無圖標時標題字體粗細 | `$font-weight` |
| \--nutui-tabbar-text-line-height | 字體行高 | 跟隨標題字體大小 |
| \--nutui-tabbar-text-margin-top | 標題上外邊距 | `4px` |

<Contribution name="Tabbar" />
