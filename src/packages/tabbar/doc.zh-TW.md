# Tabbar 標簽欄

底部導航常用場景。導航背板左右各留 12px、內部四周留 4px，使用 16px 圓角；元件外層保持透明。

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

圖標內容支援紅點、數字和文字招手。設計標註以圖標左下角為基準：紅點的左/下偏移為 19/14 DP，數字與文字為 15/14 DP。外框向四周各擴 1px 後，CSS 外框偏移分別為 18/13 和 14/13 DP，保持原視覺位置。紅點內部為 6×6px、含邊框外徑為 8×8px；數字與文字標籤外高 14px（含上下各 1px 邊框）、字號 9px、行高 12px、圓角 8px、左右內邊距各 3px。橫向佈局下，文字盒寬、高各增加 1px，標籤外高相應為 15px，並保持與內容水平置中。逛一逛的文字招手示例使用最多四個字。

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

同一組示例展示營銷圖片上的紅點、數字和文字招手。設計標註以圖片左下角為基準：紅點的左/下偏移為 28/32 DP，數字與文字為 24/32 DP；扣除外框各側 1px 後，CSS 外框偏移分別為 27/31 和 23/31 DP。圖片下方不顯示文案。圖片徽標的位置由示例專用樣式 `badge-demo.scss` 控制，切換圖片與圖標時按選中態調整樣式。

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

`fixed` 或 `safeArea` 開啟時，底部安全區使用系統 `env(safe-area-inset-bottom)`。元件總高為 52px 加裝置實際安全區，不固定為 69px 或 74px。

此示例沿用固定底部導覽。示例頁將目前頁面捲動位置傳入 `demo9`；捲動超過 160px（僅為示範門檻）且首頁已選取時，首頁圖示切換為返頂圖示。從其他項目首次點擊首頁只切換選取，再次點擊目前首頁才讓同一頁面容器平滑回到頂部。呼叫方組合 `icon(active)`、`onActiveClick` 與頁面捲動狀態，無須新增 Tabbar 屬性。「首頁」是示例文字。

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### addonBefore 前置入口

透過 `addonBefore` 傳入圖片或自訂節點。元件提供預設 52×52px 定位容器，右上角和右下角為全圓角，超出容器的內容會被裁切；圖片、外觀與點擊行為由呼叫方負責。`addonBefore` 不參與一般標籤的索引，也不觸發 `onSwitch`。示例使用設計稿 `1545:72` 匯出的 132×132px 透明 PNG，圖片置中覆蓋來源容器並包含陰影，點擊只列印控制台訊息。

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 毛玻璃材質

Tabbar 預設使用 `MaterialView` 的 `bottom-bar` 材質作為 52px 導航背板：3px 模糊、80% 明暗疊色，可見背板為全圓角。明暗跟隨 `MaterialView` 的系統主題處理。外層與 SafeArea 保持透明，頁面背景應延伸至安全區。示例在直向彩色背景圖上展示 `addonBefore` 內容與半透明背板。各端實際視覺效果以 `MaterialView` 的目標執行環境能力為準。

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 換膚背板

傳入 `skinBackground` 後，背板內容取代預設的 `MaterialView` 材質。元件負責背板裁切、全圓角與導航項層級；示例圖片、圖示選中態和專屬定位均在 demo 中實作。`icon(active)` 可依選中狀態切換圖片。

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## Tabbar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultValue | 默認選中的標簽的索引值 | `number` | `0` |
| value | 選中的標簽的索引值 | `number` | `-` |
| fixed | 是否固定在頁面底部，為 true 時默認開啟 safeArea | `boolean` | `false` |
| activeColor | icon激活的顏色 | `string` | `#0073ff` |
| inactiveColor | icon未激活的顏色 | `string` | `#7d7e80` |
| safeArea | 是否開啟iphone繫列全面屏底部安全區適配 | `boolean` | `false` |
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
| onActiveClick | 用於處理當元素處於焦點時，再次點擊時可增加自定義事件。 | `() => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-tabbar-height | 導航層高度 | `52px` |
| \--nutui-tabbar-addon-before-source-size | `addonBefore` 定位容器尺寸 | `52px` |
| \--nutui-tabbar-addon-before-gap | `addonBefore` 與導航背板間距 | `8px` |
| \--nutui-tabbar-addon-before-outset | `addonBefore` 向外側抽縮距離 | `16px` |
| \--nutui-tabbar-content-height | 內容層高度 | `44px` |
| \--nutui-tabbar-horizontal-padding | 導航層左右間距 | `12px` |
| \--nutui-tabbar-content-padding | 導航背板內邊距 | `4px` |
| \--nutui-tabbar-border-radius | 導航背板圓角 | 全圓角（跟隨導航高度） |
| \--nutui-tabbar-active-background | 選中項背景 | `var(--nutui-color-background-component)` |
| \--nutui-tabbar-active-border-radius | 子項圓角 | 全圓角（跟隨子項高度） |
| \--nutui-tabbar-active-color | 選中顏色 | `$color-primary` |
| \--nutui-tabbar-inactive-color | 未選中顏色 | `$color-title` |
| \--nutui-tabbar-border-top | 上邊框 | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | 下邊框 | `1px solid #eee` |
| \--nutui-tabbar-box-shadow | 陰影 | `none` |
| \--nutui-tabbar-text-font-size | 標題字體大小 | `$font-size-xxs` |
| \--nutui-tabbar-text-large-font-size | 無圖標時標題字體大小 | `$font-size-l` |
| \--nutui-tabbar-text-large-font-weight | 無圖標時標題字體粗細 | `$font-weight` |
| \--nutui-tabbar-text-line-height | 字體行高 | `initial` |
| \--nutui-tabbar-text-margin-top | 標題上外邊距 | `4px` |

<Contribution name="Tabbar" />
