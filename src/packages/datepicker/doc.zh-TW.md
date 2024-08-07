# DatePicker 日期選擇器

時間選擇器，支持日期、年月、時分等維度，通常與彈出層組件配合使用。

## 引入

```tsx
import { DatePicker } from '@nutui/nutui'
```

## 示例代碼

### 選擇日期

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 選擇月日

DatetimePicker 通過 type 屬性來定義需要選擇的時間類型。將 type 設置為 year-month 即可選擇年份和月份，設置為 month-day 即可選擇月份和日期。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 選擇年月日時分

將 type 設置為 datetime 即可選擇完整的時間。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 選擇時分秒

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 選擇時分

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 格式化選項

通過傳入 formatter 函數，可以對選項文字進行格式化處理。 showChinese 屬性同樣是也為選項後面添加文案，但 formatter 函數的優先級高於 showChinese 屬性。

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 分鐘數遞增步長設置

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 過濾選項

通過 filter 函數可以對選項數組進行過濾，實現自定義時間間隔。

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## DatePicker

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultValue | 初始值 | `Date` | `null` |
| value | 受控 | `Date` | `null` |
| visible | 是否可見 | `boolean` | `false` |
| type | 類時間類型，可選值 date time year-month month-day datehour datetime hour-minutes | `string` | `date` |
| minuteStep | 分鐘步進值 | `number` | `1` |
| showChinese | 每列是否展示中文 | `boolean` | `false` |
| title | 設置標題 | `string` | `null` |
| startDate | 開始日期 | `Date` | `十年前` |
| endDate | 結束日期 | `Date` | `十年後` |
| formatter | 選項格式化函數 | `(type: string, option: PickerOption) => PickerOption` | `-` |
| pickerProps | 透传 picker 屬性 | `object` | `-` |
| filter | 選項過濾函數 | `(type: string, option: PickerOption) => PickerOption[]` | `-` |
| threeDimensional | 是否開啟3D效果 | `boolean` | `true` |
| onConfirm | 點擊確定按鈕時觸發 | `(options, value) => void` | `-` |
| onCancel | 點擊取消按鈕時觸發 | `() => void` | `-` |
| onClose | 確定和取消時，都觸發 | `(options, value) => void` | `-` |
| onChange | 選項改變時觸發 | `(options, value, index) => void` | `-` |
