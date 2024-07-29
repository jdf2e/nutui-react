# CalendarCard

CalendarCard

## Import

```tsx
import { CalendarCard } from '@nutui/nutui-react'
```

## Demo

### Select a single date

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Select multiple dates

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Select a range

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Select a week

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Controlled mode

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom day information

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom week start day

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Custom selection range

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Custom prohibition date selection

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### Use with Popup

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Use ref

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

## CalendarCard

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type, single date `single`, multiple dates `multiple`, date range `range`, week selection `week` | `string` | `single` |
| defaultValue | Default value, choose string format for date, choose Array format for interval | `Date \| Date[]` | `-` |
| startDate | Limit range start date | `Date` | `-` |
| endDate | Limit range end date | `Date` | `-` |
| firstDayOfWeek | Set the starting day of the week, 0 is Sunday, 1 is Monday | `0-6` | `1` |
| disableDay | Set disable date | `(day: CalendarCardDay) => boolean` | `-` |
| renderDay | Date information | `(date: CalendarCardDay) => ReactNode` | `-` |
| renderDayTop | Date top information | `(date: CalendarCardDay) => ReactNode` | `-` |
| renderDayBottom | Date bottom information | `(date: CalendarCardDay) => ReactNode` | `-` |
| value | Value in controlled mode, used with onChange | `Date \| Date[]` | `-` |
| onDayClick | Triggered after click | `(day: CalendarCardDay) => void` | `-` |
| onPageChange | Triggered when switching months | `(val: { year, month }) => void` | `-` |
| onChange | Triggered when value update | `(val: Date | Date[]) => void` | `-` |

### CalendarCardDay

| Property | Type | Description |
| --- | --- | --- |
| year | `number` | year |
| month | `number` | month |
| date | `number` | date |
| type | `prev \| current \| next` | - |

### Ref

Through ref, you can get the CalendarCard instance and call the instance method.

| Name | Description | Arguments |
| --- | --- | --- |
| jump | Advance or retreat months from the current basis, positive forward, negative rigid | `step: number` |
| jumpTo | Jump to a specific year and month | `year: number, month: number` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | calendar active background color | `$color-primary` |
| \--nutui-calendar-choose-background-color | calendar choose background color | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-disable-color | calendar disable color | `#d1d0d0` |
| \--nutui-calendar-base-font-size | calendar base font size | `$font-size-large` |
| \--nutui-calendar-day-width | calendar day width | `14.28%` |
| \--nutui-calendar-choose-color | calendar choose color | `$color-primary` |
| \--nutui-calendar-day-active-border-radius | calendar day active border radius | `4px` |
