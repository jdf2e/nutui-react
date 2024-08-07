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
