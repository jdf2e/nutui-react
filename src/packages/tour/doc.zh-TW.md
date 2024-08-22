# Tour 引導

#

用於引導用戶了解產品功能的氣泡組件。

## 引入

```tsx
import { Tour } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定義樣式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 設置偏移量

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義內容

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 步驟引導

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Tour

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否展示引導彈出層 | `boolean` | `false` |
| type | 引導類型 | `step` \| `tile` | `step` |
| list | 引導步驟內容 | `TourList[]` | `-` |
| offset | 鏤空遮罩相對於目標元素的偏移量 | `number[]` | `[8, 10]` |
| location | 彈出層位置,同 Popopver 的[location 屬性](https://nutui.jd.com/h5/react/2x/#/zh-CN/component/popover) | `string` | `bottom` |
| next | 下一步按鈕文案 | `ReactNode` | `''` |
| prev | 上一步按鈕文案 | `ReactNode` | `''` |
| complete | 完成按鈕文案 | `ReactNode` | `''` |
| mask | 是否顯示鏤空遮罩 | `boolean` | `true` |
| maskWidth | 鏤空遮罩層寬度 | `number` \| `string` | `''` |
| maskHeight | 鏤空遮罩層高度 | `number` \| `string` | `''` |
| closeOnOverlayClick | 是否在點擊鏤空遮罩層後關閉,同 Popopver 的[closeOnClickOverlay 屬性](https://nutui.jd.com/h5/react/2x/#/zh-CN/component/popover) | `boolean` | `true` |
| showPrev | 是否展示上一步按鈕 | `boolean` | `true` |
| title | 是否展示標題欄 | `ReactNode` | `''` |
| onClose | 氣泡層關閉時觸發 | `(e: MouseEvent<HTMLDivElement>) => void` | `-` |
| onChange | 切換步驟時觸發 | `(value: number) => void` | `-` |

### TourList

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| target | 目標對象 | `Element` \| `string` | `-` |
| content | 氣泡層內容 | `string` | `-` |
| location | 彈出層位置 | `string` | `-` |
| popoverOffset | 氣泡層偏移量 | `number[]` | `-` |
| arrowOffset | 小箭頭的偏移量 | `number` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-tour-mask-border-radius | 遮罩層的border-radius值 | `10px` |
| \--nutui-tour-content-min-width | 內容區的min-width值 | `200px` |
| \--nutui-tour-content-padding | 內容區的padding值 | `10px 12px` |
| \--nutui-tour-content-inner-margin | 內容區內部的margin值 | `10px 0px` |
| \--nutui-tour-content-inner-font-size | 內容區內部的font-size值 | `14px` |
| \--nutui-tour-content-bottom-margin-top | 內容區底部的margin-top值 | `10px` |
| \--nutui-tour-content-bottom-btn-margin-left | 內容區底部按鈕的margin-left值 | `4px` |
| \--nutui-tour-content-bottom-btn-padding | 內容區底部按鈕的padding值 | `2px 4px` |
| \--nutui-tour-content-bottom-btn-font-size | 內容區底部按鈕的font-size值 | `12px` |
| \--nutui-tour-content-bottom-btn-border-radius | 內容區底部按鈕的border-radius值 | `4px` |
