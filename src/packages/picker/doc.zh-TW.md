# Picker 選擇器

提供多個選項集合供用戶選擇其中一項。

## 引入

```tsx
import { Picker } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 默認選中項

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 多列樣式

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 平鋪展示

通過設置 `threeDimensional` 取消 3D 展示效果，並且通過設置 `duration` 可以控製快速滾動的時長。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 多級聯動

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 異步獲取

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 自定義主題

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Picker

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否可見 | `boolean` | `false` |
| title | 設置標題 | `string` | `-` |
| options | 列表數據 | `Array` | `[]` |
| value | 選中值，受控 | `Array` | `[]` |
| defaultValue | 默認選中 | `Array` | `[]` |
| threeDimensional | 是否開啟3D效果 | `boolean` | `true` |
| duration | 快速滑動時慣性滾動的時長，單位 ms | `string` \| `number` | `1000` |
| popupProps | 透傳popup屬性 | `object` | `-` |
| closeOnOverlayClick | 是否點擊遮罩關閉 | `boolean` | `true` |
| onConfirm | 點擊確認按鈕時候回調 | `(options, value) => void` | `-` |
| onChange | 每一列值變更時調用 | `(options, value) => void` | `-` |
| onCancel | 點擊取消按鈕時觸發 | `() => void` | `-` |
| onClose | 確定和取消時，都觸發 | `(options, value) => void` | `-` |
| afterClose | 聯動時，關閉時回調 | `(options, value) => void` | `-` |

### options 數據結構

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| text | 選項的文字內容 | `string` \| `number` | `-` |
| value | 選項對應的值，且唯一 | `string` \| `number` | `-` |
| children | 用於級聯選項 | `Array` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-picker-title-cancel-color | 取消文案的色值 | `$text-color` |
| \--nutui-picker-title-cancel-font-size | 取消字號 | `14px` |
| \--nutui-picker-title-ok-color | 確認文案的色值 | `$color-primary` |
| \--nutui-picker-title-ok-font-size | 確認字號 | `14px` |
| \--nutui-picker-list-height | 面板高度 | `252px` |
| \--nutui-picker-item-height | 面板每一條數據高度 | `36px` |
| \--nutui-picker-item-text-color | 面板每一條數據的字色 | `$color-title` |
| \--nutui-picker-item-text-font-size | 面板每條數據字號 | `14px` |
| \--nutui-picker-item-active-line-border | 面板當前選中的border值 | `1px solid #d8d8d8` |
