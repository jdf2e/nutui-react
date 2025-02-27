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

## Contribution

### Issues

- [DatePicker受控情况下，2月切换存在问题](https://github.com/jdf2e/nutui-react/issues/2924)

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20DatePicker)

### Component Logs

- 🐛 fix(datepicker): show zero on page ([#2582](https://github.com/jdf2e/nutui-react/pull/2582)) `v2.6.19`
- 🐛 fix(datepicker): 修复受控方式下选项联动更新问题 ([#2201](https://github.com/jdf2e/nutui-react/pull/2201)) @eiinu `v2.6.2`
- 🐛 fix(datepicker): 修复 datepicker 类型为hour-minutes/time时选中值无法回显的问题 ([#2141](https://github.com/jdf2e/nutui-react/pull/2141)) @yeyu98 `v2.5.1`
- 🐛 fix(DatePicker): demo拆解与规范 ([#2133](https://github.com/jdf2e/nutui-react/pull/2133)) @yeyu98 `v2.5.1`
- 💡 🐛 fix(datepicker): 未设置 value/defaultValue 时渲染 0 ([#1819](https://github.com/jdf2e/nutui-react/pull/1819)) @Ryan-CW-Code `v2.3.4`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=datepicker&expanded=true)
