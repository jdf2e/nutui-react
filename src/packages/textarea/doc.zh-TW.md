# TextArea 文本域

用於輸入或編輯可換行的長文本，支持字符統計和超限提示。

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

### 錯誤狀態

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## TextArea

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 輸入框內容，受控 | `string` | `-` |
| defaultValue | 初始默認值，非受控 | `string` | `-` |
| placeholder | 設置佔位提示文字 | `string` | `請輸入內容` |
| maxLength | 字數校驗閾值，超出後仍可輸入，-1 表示無限制 | `number` | `140` |
| rows | textarea 的行數 | `number` | `2` |
| showCount | textarea 是否展示輸入字符。須配合`maxLength`使用 | `boolean` | `false` |
| autoSize | 高度是否可拉伸 | `boolean` | `false` |
| readOnly | 只讀，禁止編輯和聚焦 | `boolean` | `false` |
| disabled | 禁用屬性 | `boolean` | `false` |
| plain | 是否使用純文本型；為 `true` 時忽略 `containerType` | `boolean` | `false` |
| containerType | 容器型背景類型 | `gray / white` | `gray` |
| status | 文本域狀態，可標記為 默認狀態 和 錯誤狀態 | `default /\ error` | `default` |
| description | 錯誤提示文字，僅 `status="error"` 時顯示，位於文本域下方 | `ReactNode` | `-` |
| onChange | 輸入內容時觸發 | `(value) => void` | `-` |
| onFocus | 聚焦時觸發 | `(event) => void` | `-` |
| onBlur | 失焦時觸發 | `(event) => void` | `-` |

### Ref

通過 ref 可以獲取到 Textarea 實例並調用實例方法。

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| clear | 清除容器中的數據 | `-` |
| focus | 使容器獲取焦點 | `-` |
| blur | 使容器失去焦點 | `-` |
| nativeElement | 獲取當前容器 | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-textarea-plain-min-height | 純文本型最小高度 | `44px` |
| \--nutui-textarea-container-min-height | 容器型最小高度 | `60px` |
| \--nutui-textarea-padding | 容器型內邊距 | `8px 12px` |
| \--nutui-textarea-container-gray-background-color | 灰底容器背景色 | `color-background-component` |
| \--nutui-textarea-container-white-background-color | 白底容器背景色 | `$color-background-overlay` |
| \--nutui-textarea-limit-error-color | 超限字數顏色 | `$color-error` |
| \--nutui-textarea-error-color | 錯誤提示文字顏色 | `$color-error` |
| \--nutui-textarea-text-color | 文本顏色 | `$color-title` |
| \--nutui-textarea-text-line-height | 輸入內容行高 | `20px` |
| \--nutui-textarea-text-curror-color | 光標顏色 | `$color-title` |

<Contribution name="TextArea" />
