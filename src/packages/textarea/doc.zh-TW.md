# TextArea 文本域

文本框內輸入或編輯文字，支持限制輸入數量。

## 引入

```tsx
import { TextArea } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控方式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 顯示字數統計

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義行數，設置自動高度

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義字數統計樣式

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 只讀

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>
:::

### 禁用

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 文本位置

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## TextArea

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 輸入框內容，受控 | `string` | `-` |
| defaultValue | 初始默認值，非受控 | `string` | `-` |
| placeholder | 設置佔位提示文字 | `string` | `請輸入內容` |
| maxLength | 限制最長輸入字符，-1 錶示無限制 | `number` | `140` |
| rows | textarea 的行數 | `number` | `2` |
| showCount | textarea 是否展示輸入字符。須配合`maxLength`使用 | `boolean` | `false` |
| autoSize | 高度是否可拉伸 | `boolean` | `false` |
| readOnly | 只讀屬性 | `boolean` | `false` |
| disabled | 禁用屬性 | `boolean` | `false` |
| onChange | 輸入內容時觸發 | `(value) => void` | `-` |
| onFocus | 聚焦時觸發 | `(event) => void` | `-` |
| onBlur | 失焦時觸發 | `(event) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-textarea-font | 字體大小 | `$font-size-base` |
| \--nutui-textarea-padding | 內邊距 | `10px 25px` |
| \--nutui-textarea-limit-color | 字數統計顏色 | `$color-text` |
| \--nutui-textarea-text-color | 文本顏色 | `$color-title` |
| \--nutui-textarea-text-curror-color | 光標顏色 | `$color-title` |
| \--nutui-textarea-disabled-color | 禁用顏色 | `$color-text-disabled` |
| \--nutui-textarea-limit-align | 對齊方式 | `right` |
