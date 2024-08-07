# DatePicker

Used to select time, support date and time dimensions, usually used with the Popup component.

## Import

```tsx
import { DatePicker } from '@nutui/nutui'
```

### Choose Date

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Choose Month-Day

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Choose DateTime

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Choose Time

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Selective time

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Option Formatter

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Option Steps

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Option Filter

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## DatePicker

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | Default date | `Date` | `null` |
| value | controlled date | `Date` | `null` |
| visible | Is Show | `boolean` | `false` |
| type | Can be set to date time year-month month-day datehour hour-minutes | `string` | `date` |
| minuteStep | Option minute step | `number` | `1` |
| showChinese | Show Chinese | `boolean` | `false` |
| title | Title | `string` | `null` |
| startDate | Start date | `Date` | `Ten years ago on January 1` |
| endDate | End date | `Date` | `Ten years later on December 31` |
| pickerProps | picker props | `object` | `-` |
| formatter | Option text formatter | `(type: string, option: PickerOption) => PickerOption` | `-` |
| filter | Option filter | `(type: string, option: PickerOption) => PickerOption[]` | `-` |
| threeDimensional | Turn on 3D effects | `boolean` | `true` |
| onConfirm | Emitted when click confirm button. | `(options, value) => void` | `-` |
| onCancel | Emitted when click cancel button. | `() => void` | `-` |
| onClose | Emitted when click confirm and cancel button. | `(options, value) => void` | `-` |
| onChange | Emitted when current option changed. | `(options, value, index) => void` | `-` |
