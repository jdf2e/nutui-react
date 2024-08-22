# ActionSheet 動作面闆

從底部彈出的動作菜單面闆。

## 引入

```tsx
import { ActionSheet } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 展示取消按鈕

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 展示描述信息

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 選項狀態

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義內容

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義key

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## ActionSheet

### Props

| 屬性 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| visible | 遮罩層可見 | `boolean` | `false` |
| title | 設定列錶面闆標題 | `string` | \- |
| description | 設定列錶面闆副標題/描述 | `string` | \- |
| options | 列錶項 | `Array` | `[]` |
| optionKey | 列錶項的自定義設定 | `{ [key: string]: string }` | `-` |
| cancelText | 取消文案 | `string` | `取消` |
| onSelect | 選擇之後觸發 | `(item: any, index: number) => void` | `-` |
| onCancel | 點選取消文案時觸發 | `() => void` | `-` |

### options

| 屬性 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| name | 列錶項的標題key值 | `string` | \- |
| description | 列錶項的描述key值 | `string` | \- |
| danger | 高亮顏色 | `string` | `$color-primary` |
| disabled | 禁用狀態 | `string` | `$disabled-color` |

## 主題定制

### 樣式變數

組件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 預設值 |
| --- | --- | --- |
| \--nutui-actionsheet-background-color | 背景色 | `$color-background-overlay` |
| \--nutui-actionsheet-border-radius | 列錶和取消按鈕圓角 | `0` |
| \--nutui-actionsheet-border-color | 標題和取消位置的border色值 | `#f6f6f6` |
| \--nutui-actionsheet-item-text-align | 列錶項的文字對齊方式 | center |
| \--nutui-actionsheet-item-border-bottom | 列錶項的底部border | `none` |
| \--nutui-actionsheet-item-line-height | 列錶項行高 | `24px` |
| \--nutui-actionsheet-item-color | 列錶項字色 | `$color-title` |
| \--nutui-actionsheet-item-danger | 列錶項danger字色 | `$color-primary` |
