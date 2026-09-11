# Pagination 分頁

當數據量較多時，採用分頁的形式分隔長列錶。

## 引入

```tsx
import { Pagination } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

通過 value 來綁定當前頁碼時，組件為受控狀態，分頁顯示取決於傳入的 value ，一般搭配 onChange 使用。 不需要受控時，可通過 defaultValue 指定當前頁碼

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 簡單模式

將 mode 設置為 "simple" 來切換到簡單模式，此時分頁器不會展示具體的頁碼按鈕。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 極簡模式

將 mode 設置為 "lite" 來切換到極簡模式，可用於主圖切換。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 膠囊數字型

將 mode 設置為 "lite" 且 indicatorType 為 "capsule"（默認），展示為白字加半透明遮罩背景的膠囊，常用於沉浸式圖片瀏覽場景，頁碼與滑動狀態實時同步。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 純文本型

將 indicatorType 設置為 "text"，展示為純文本頁碼（18px 加粗），常見於沉浸的頂部導航區內居中展示。

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 進度條指示型

將 indicatorType 設置為 "progress"，以等分進度條展示當前所處幀，當前幀高亮。配合 Swiper 的 loop 可實現自動輪播的首尾循環無縫切換。

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 膠囊數字型 & 進度條指示型

部分場景中，膠囊數字型與進度條指示型可同時存在。

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 顯示省略號

設置 force-ellipses 後會展示省略號按鈕，點擊後可以快速跳轉。

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義按鈕

通過itemRender傳入自定義方法，入參數為page:{ number:頁數, text:"文本", active:"選中狀態" }

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 非受控方式

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Pagination

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前頁碼，受控值，與 onChange 搭配使用 | `number` | `-` |
| defaultValue | 默認頁碼，非受控 | `number` | `1` |
| mode | 顯示模式 | `multi` \| `simple` \| `lite` | `multi` |
| indicatorType | 極簡模式（lite）下的指示符類型 | `capsule` \| `text` \| `progress` | `capsule` |
| loop | 是否首尾循環切換（自動輪播場景） | `boolean` | `false` |
| prev | 自定義上一頁按鈕內容 | `ReactNode` | `上一頁` |
| next | 自定義下一頁按鈕內容 | `ReactNode` | `下一頁` |
| total | 總記錄數 | `number` | `50` |
| pageSize | 每頁記錄數 | `number` | `10` |
| itemSize | 顯示的頁碼個數 | `number` | `5` |
| ellipse | 是否顯示省略號 | `boolean` | `false` |
| itemRender | 用於自定義頁碼的結構 | `(page: {number, text}) => ReactNode` | `-` |
| onChange | 頁碼改變時觸發 | `(value) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-pagination-color | 頁碼字色 | `$color-primary` |
| \--nutui-pagination-font-size | 頁碼字號 | `$font-size-base` |
| \--nutui-pagination-item-border-color | 邊框顏色 | `$color-border` |
| \--nutui-pagination-active-background-color | 當前頁碼的背景色 | `$color-primary` |
| \--nutui-pagination-disable-color | 不可用色 | `$color-text-disabled` |
| \--nutui-pagination-disable-background-color | 不可用背景色 | `#f7f8fa` |
| \--nutui-pagination-item-border-width | 邊框寬度 | `1px` |
| \--nutui-pagination-item-border-radius | 邊框圓角 | `2px` |
| \--nutui-pagination-prev-next-padding | padding 值 | `0 11px` |
| \--nutui-pagination-lite-width | lite模式下的寬度 | `40px` |
| \--nutui-pagination-lite-height | lite模式下的高度 | `20px` |
| \--nutui-pagination-lite-radius | lite模式下的圓角 | `12px` |
| \--nutui-pagination-lite-background-color | lite模式下的默認背景色 | `var(--nutui-black-7)` |
| \--nutui-pagination-lite-active-background-color | lite模式下的當前選中的背景色 | `var(--nutui-black-5)` |
| \--nutui-pagination-capsule-background-color | 膠囊數字型背景色 | `$color-mask-part` |
| \--nutui-pagination-capsule-color | 膠囊數字型文字色 | `$color-primary-text` |
| \--nutui-pagination-capsule-radius | 膠囊數字型圓角 | `$radius-xs` |
| \--nutui-pagination-capsule-padding | 膠囊數字型內邊距 | `4px 6px` |
| \--nutui-pagination-capsule-font-size | 膠囊數字型字號 | `$font-size-xs` |
| \--nutui-pagination-text-color | 純文本型文字色 | `$color-title` |
| \--nutui-pagination-text-font-size | 純文本型字號 | `$font-size-xl` |
| \--nutui-pagination-text-font-weight | 純文本型字重 | `600` |
| \--nutui-pagination-progress-height | 進度條指示型高度 | `2px` |
| \--nutui-pagination-progress-gap | 進度條指示型間距 | `$spacing-xxs` |
| \--nutui-pagination-progress-active-color | 進度條當前幀填充色 | `$color-primary-text` |
| \--nutui-pagination-progress-inactive-color | 進度條待切換幀填充色 | `var(--nutui-white-3)` |

<Contribution name="Pagination" />
