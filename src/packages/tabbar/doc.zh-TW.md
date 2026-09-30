# Tabbar 標簽欄

底部導航常用場景。導航背板左右各留 12px、內部四周留 4px，以 16px 圓角矩形和懸浮陰影承載內容；組件外層保持透明。

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

### Agent 組合入口

透過 `agent` 傳入圖片或自訂節點。元件只提供 52×52px 定位容器，圖片、外觀與點擊行為由呼叫方負責；Agent 不參與一般標籤的索引，也不觸發 `onSwitch`。示例使用設計稿 `1545:72` 匯出的 132×132px 透明 PNG，圖片置中覆蓋來源容器並包含陰影，點擊只列印控制台訊息。

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 靈動島與 Agent 聯動

`island` 是獨立內容插槽，不佔一般標籤索引。`islandVariant` 的一般與大促外框分別為 131×44px、144×52px；示例內圖文、點擊及展開狀態由呼叫方提供。`islandExpanded` 隱藏一般標籤選中底色；同時傳入 Agent 時，Agent 外移由 16px 變為 28px，導航背板同步移動。示例共 5 個坑位：中央是靈動島，左右各有 2 個一般標籤。窄螢幕仍需檢查圖文可讀性。大促紅包圖取自設計稿；一般商品及營運活動圖示僅為示意，正式業務圖片或 GIF 由呼叫方提供。非零安全區下的大促底距、紅色禁放區與目標端視覺仍待設計量測確認。

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 毛玻璃材質

H5 與 Taro H5 在瀏覽器支援 `backdrop-filter` 時，僅對 52px 高的導航背板套用 3px 模糊及 80% 明暗疊色；不支援時使用 `--nutui-tabbar-background` 實色。外層與 SafeArea 保持透明，頁面背景應延伸至安全區。示例在直向彩色背景圖上展示 Agent 與半透明背板，並跟隨頁面頂部的暗黑模式切換。Taro iOS 可選 iOS 26+ 液態玻璃；設定、舊版降級與 Android 取樣來源配對見 [Taro 文件](./doc.taro.md)。原生視覺效果仍需在目標環境驗收。

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### 換膚背景與雙狀態圖示

傳入 `skinBackground` 後，背板使用業務提供的實色、漸層或弱紋理背景，H5/Taro H5 關閉整板 `backdrop-filter`；Taro 原生端不再傳 iOS 玻璃/漸層模糊、Android 取樣模糊或 Harmony 模糊參數。未傳入時維持上述材質規則。背景節點僅覆蓋 52px 背板，不參與標籤索引及點擊；業務須提供資源失敗時的替代圖。下方示例接入一套換膚素材：240×52px 背板圖鋪滿 375px 畫布下的 351×52px 背板，五項在兩種狀態都顯示「文案」，第一與第五項預設態共用一張圖片。

每個圖片標籤可用 `icon(active)` 在 `normal/pressed` 兩張透明 PNG 間切換，並在圖片或包裝節點上設定 `nut-tabbar-skin-icon` 類別。192×195PX 原稿等比縮至 48px 高，切圖盒距背板底部 7px；透明畫布可越過背板頂部 3px，可見裝飾越界不得超過 3px。標題仍由 `title` 獨立呈現。每套五項由業務提供五對圖片，單圖符合設計「50K 以內」要求；正式配色及背板圖片由業務提供。新增的高度與底距變數可覆寫，背板沿用 16px 圓角。

示例在選中人物圖示下方單獨疊放 120×120px 原稿的漸層底圖，與 192×195px 圖示畫布同比例顯示為 29.4×29.4px，距圖示盒頂部 5.8px；預設選中托底設為透明，「文案」由獨立標題節點呈現，不包含在漸層圖中。圖片直接使用業務提供的 HTTPS 連結，不內建於元件。

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

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
| skinBackground | 換膚背板節點；傳入後關閉預設整板模糊材質 | `ReactNode` | `-` |
| agent | 獨立 Agent 入口內容，圖片與點擊由呼叫方提供 | `ReactNode` | `-` |
| island | 獨立靈動島內容，圖文及點擊由呼叫方提供 | `ReactNode` | `-` |
| islandVariant | 島尺寸：一般 131×44px，大促 144×52px | `regular` \| `promotion` | `regular` |
| islandExpanded | 隱藏一般標籤選中底色並連動 Agent 位置 | `boolean` | `false` |
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
| \--nutui-tabbar-agent-source-size | Agent 定位容器尺寸 | `52px` |
| \--nutui-tabbar-agent-gap | Agent 與導航背板間距 | `8px` |
| \--nutui-tabbar-agent-outset | Agent 向外側抽縮距離 | `16px` |
| \--nutui-tabbar-agent-expanded-outset | 展開期間 Agent 外移距離 | `28px` |
| \--nutui-tabbar-island-regular-width | 一般島寬度 | `131px` |
| \--nutui-tabbar-island-regular-height | 一般島高度 | `44px` |
| \--nutui-tabbar-island-promotion-width | 大促島寬度 | `144px` |
| \--nutui-tabbar-island-promotion-height | 大促島高度 | `52px` |
| \--nutui-tabbar-content-height | 內容層高度 | `44px` |
| \--nutui-tabbar-horizontal-padding | 導航層左右間距 | `12px` |
| \--nutui-tabbar-content-padding | 導航背板內邊距 | `4px` |
| \--nutui-tabbar-background | 無模糊時的導航實色背景 | 淺色 `#FFFFFF`；暗色 `#14171A` |
| \--nutui-tabbar-material-tint | 模糊可用時的背板疊色 | 淺色 `rgba(255, 255, 255, 0.8)`；暗色 `rgba(20, 23, 26, 0.8)` |
| \--nutui-tabbar-material-blur | H5/Taro H5 背板模糊半徑 | `3PX` |
| \--nutui-tabbar-skin-icon-height | 換膚切圖盒高度 | `48px` |
| \--nutui-tabbar-skin-icon-bottom | 切圖盒距背板底邊 | `7px` |
| \--nutui-tabbar-border-radius | 導航背板圓角 | `16px` |
| \--nutui-tabbar-active-background | 選中項背景 | `#F0F2F7` |
| \--nutui-tabbar-active-border-radius | 選中項圓角 | `12px` |
| \--nutui-tabbar-active-color | 選中顏色 | `$color-primary` |
| \--nutui-tabbar-inactive-color | 未選中顏色 | `$color-title` |
| \--nutui-tabbar-border-top | 上邊框 | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | 下邊框 | `1px solid #eee` |
| \--nutui-tabbar-box-shadow | 導航背板陰影 | `0 0 6px 0 rgba(0, 0, 0, 0.1)` |
| \--nutui-tabbar-text-font-size | 標題字體大小 | `$font-size-xxs` |
| \--nutui-tabbar-text-large-font-size | 無圖標時標題字體大小 | `$font-size-l` |
| \--nutui-tabbar-text-large-font-weight | 無圖標時標題字體粗細 | `$font-weight` |
| \--nutui-tabbar-text-line-height | 字體行高 | `initial` |
| \--nutui-tabbar-text-margin-top | 標題上外邊距 | `4px` |

<Contribution name="Tabbar" />
