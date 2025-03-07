# DatePickerView 日期选择器視圖

時間選擇器，支持日期、年月、時分等維度。

## 引入

```tsx
import { DatePickerView } from '@nutui/nutui'
```

## 示例代碼

### 選擇日期

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 選擇月日

通過 type 屬性來定義需要選擇的時間類型。將 type 設置為 year-month 即可選擇年份和月份，設置為 month-day 即可選擇月份和日期。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## DatePicker

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultValue | 初始值 | `Date` | `null` |
| value | 受控 | `Date` | `null` |
| type | 類時間類型，可選值 date time year-month month-day datehour datetime hour-minutes | `string` | `date` |
| minuteStep | 分鐘步進值 | `number` | `1` |
| showChinese | 每列是否展示中文 | `boolean` | `false` |
| startDate | 開始日期 | `Date` | `十年前` |
| endDate | 結束日期 | `Date` | `十年後` |
| formatter | 選項格式化函數 | `(type: string, option: PickerOption) => PickerOption` | `-` |
| filter | 選項過濾函數 | `(type: string, options: PickerOptions) => PickerOptions` | `-` |
| threeDimensional | 是否開啟3D效果 | `boolean` | `true` |
| onChange | 選項改變時觸發 | `(options, value, index) => void` | `-` |
