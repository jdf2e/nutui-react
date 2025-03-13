# Calendar

Calendar, tileable/pop-up display

## Import

```tsx
import { Calendar } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Interval selection

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### select multiple dates

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Select Week

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Disable Date

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Calendar & Datepicker

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### quick selection

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Quick selection - Interval selection

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Custom Calendar - Custom Time Copy

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### Custom Calendar - Custom Button

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Tiled display

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

## Calendar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Is it visible | `boolean` | `false` |
| type | type, 'single' and 'range' | `string` | `single` |
| viewMode `v2.7.10` | view mode | `day` \| `month` \| `quarter` | `day` |
| popup | Whether to display the pop-up status | `boolean` | `true` |
| autoBackfill | Automatic backfill | `boolean` | `false` |
| title | show title | `string` | `日期选择` |
| defaultValue | defaultValue, string for date, and Array for range | `string` \| `Array` | `-` |
| startDate | the start date | `string` | `今天` |
| endDate | the end date | `string` | `距离今天 365 天` |
| showToday | whether to show today mark | `boolean` | `true` |
| startText | start text for range | `ReactNode` | `开始` |
| endText | end text for range | `ReactNode` | `结束` |
| confirmText | confirm text at footer | `ReactNode` | `确认` |
| showTitle | whether to show title for calendar | `boolean` | `true` |
| showSubTitle | whether to show sub title for calendar | `boolean` | `true` |
| scrollAnimation | whether to start scroll animation | `boolean` | `true` |
| firstDayOfWeek | first day of week | `0-6` | `0` |
| closeIcon | Custom Icon | `ReactNode` | `close` |
| disableDate | set disable date | `(date: CalendarDay) => boolean` | `-` |
| renderHeaderButtons | custom buttons, under the title but above the subtitle | `() => string` \| `JSX.Element` | `-` |
| renderBottomButton | Custom calendar bottom button | `() => string` \| `JSX.Element` | `-` |
| renderDay | day info | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| renderDayTop | something above day | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| renderDayBottom | something under day | `(date: CalendarDay) => string` \| `JSX.Element` | `-` |
| onDayClick | trigger when click the day element | `(data: string) => {}` | `-` |
| onPageChange | page change ,one month makes as a page | `(param: string) => {}` | `-` |
| onConfirm | trigger when click the confirm button, or after the click when it is not popup | `(param: string) => {}` | `-` |
| onClose | trigger close | `() => {}` | `-` |

### CalendarDay

| Property | Description |
| --- | --- |
| day | `string` \| `number` |
| type | `string` |

### Ref

Through ref, you can get the Calendar instance and call the instance method.

| Name | Description | Arguments |
| --- | --- | --- |
| scrollToDate | Scroll to the month of the specified date:'2023-06-30' | `string` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | calendar active background color | `$color-primary` |
| \--nutui-calendar-choose-background-color | calendar choose background color | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-choose-color | calendar choose color | `$color-primary` |
| \--nutui-calendar-choose-disable-background-color | calendar choose but disable background color | `rgba(191, 191, 191, 0.09)` |
| \--nutui-calendar-disable-color | calendar disable color | `#d1d0d0` |
| \--nutui-calendar-base-font-size | calendar base font size | `$font-size-large` |
| \--nutui-calendar-title-font-size | calendar title font size | `$font-size-xl` |
| \--nutui-calendar-title-font-weight | calendar title font weight | `500` |
| \--nutui-calendar-sub-title-font-size | calendar sub title font size | `$font-size-base` |
| \--nutui-calendar-day67-color | calendar day67 color | `$color-primary` |
| \--nutui-calendar-header-height | calendar header height | `24px` |
| \--nutui-calendar-day-width | calendar day width | `14.28%` |
| \--nutui-calendar-day-height | calendar day height | `60px` |
| \--nutui-calendar-day-font-weight | calendar day font weight | `500` |
| \--nutui-calendar-day-active-border-radius | calendar day active border radius | `4px` |
