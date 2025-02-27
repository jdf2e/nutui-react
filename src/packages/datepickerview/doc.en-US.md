# DatePicker

Used to select time, support date and time dimensions.

## Import

```tsx
import { DatePickerView } from '@nutui/nutui'
```

### Choose Date

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Choose Month-Day

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## DatePicker

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | Default date | `Date` | `null` |
| value | controlled date | `Date` | `null` |
| type | Can be set to date time year-month month-day datehour hour-minutes | `string` | `date` |
| minuteStep | Option minute step | `number` | `1` |
| showChinese | Show Chinese | `boolean` | `false` |
| startDate | Start date | `Date` | `Ten years ago on January 1` |
| endDate | End date | `Date` | `Ten years later on December 31` |
| formatter | Option text formatter | `(type: string, option: PickerOption) => PickerOption` | `-` |
| filter | Option filter | `(type: string, options: PickerOptions) => PickerOptions` | `-` |
| threeDimensional | Turn on 3D effects | `boolean` | `true` |
| onChange | Emitted when current option changed. | `(options, value, index) => void` | `-` |
