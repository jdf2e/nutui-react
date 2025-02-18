# PickerView 選擇器視圖

PickerView 是 Picker 的內容區域。

## 引入

```tsx
import { PickerView } from '@nutui/nutui-react-taro'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義高度

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 多列

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 平鋪

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 級聯

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## PickerView

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| options | 列錶數據 | `PickerOptions[]` | `[]` |
| value | 選中值，受控 | `PickerValue[]` | `[]` |
| defaultValue | 默認選中 | `PickerValue[]` | `[]` |
| threeDimensional | 是否開啟3D效果 | `boolean` | `true` |
| duration | 快速滑動時慣性滾動的時長，單位 ms | `string` \| `number` | `1000` |
| onChange | 每一列值變更時調用 | `({value, index, selectedOptions}) => void` | `-` |

### PickerOptionItem

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| label | 選項的文字內容 | `string` \| `number` | `-` |
| value | 選項對應的值，且唯一 | `string` \| `number` | `-` |
| children | 用於級聯選項 | `PickerOptionItem[]` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-picker-item-height | 面闆每條數據高度 | `36px` |
| \--nutui-picker-item-text-color | 面闆每條數據的字色 | `$color-title` |
| \--nutui-picker-item-text-font-size | 面闆每條數據的字號 | `$font-size-base` |
| \--nutui-picker-item-active-line-border | 面闆當前選中的border值 | `1px solid $color-border` |
| \--nut-picker-mask-background | 面闆遮擋區漸變值 | `linear-gradient(180deg, var(--nutui-white-12), var(--nutui-white-7)),linear-gradient(0deg, var(--nutui-white-12), var(--nutui-white-7))` |
