# DatePickerView 日期选择器视图

时间选择器，支持日期、年月、时分等维度。

## 引入

```tsx
import { DatePickerView } from '@nutui/nutui'
```

## 示例代码

### 选择日期

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 选择月日

通过 type 属性来定义需要选择的时间类型。将 type 设置为 year-month 即可选择年份和月份，设置为 month-day 即可选择月份和日期。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## DatePickerView

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 初始值 | `Date` | `null` |
| value | 受控 | `Date` | `null` |
| type | 类时间类型，可选值 date time year-month month-day datehour datetime hour-minutes | `string` | `date` |
| minuteStep | 分钟步进值 | `number` | `1` |
| showChinese | 每列是否展示中文 | `boolean` | `false` |
| startDate | 开始日期 | `Date` | `十年前` |
| endDate | 结束日期 | `Date` | `十年后` |
| formatter | 选项格式化函数 | `(type: string, option: PickerOption) => PickerOption` | `-` |
| filter | 选项过滤函数 | `(type: string, options: PickerOptions) => PickerOptions` | `-` |
| threeDimensional | 是否开启3D效果 | `boolean` | `true` |
| onChange | 选项改变时触发 | `(options, value, index) => void` | `-` |
