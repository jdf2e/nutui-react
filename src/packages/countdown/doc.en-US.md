# CountDown

Used to display the countdown value in real time, and precision supports milliseconds.

## Import

```tsx
import { CountDown } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Remaining Time Usage

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom format

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Hundred-millisecond / Millisecond

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Server Time Prevails

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### End-Time of Asyn Update

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Controls start and pause countdowns

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Custom Presentation

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Manual Control

Paused and restarted the countdown with the paused attribute

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## CountDowm

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Display Type | `default`\|`primary`\|`text` | `default` |
| startTime | Start Time | `number` | `Date.now()` |
| endTime | End Time | `number` | `Date.now()` |
| remainingTime | Remaining time, unit milliseconds | `number` | `0` |
| paused | Paused | `boolean` | `false` |
| format | Format Time | `string` | `HH:mm:ss` |
| refreshInterval | Refresh step in ms; when set, floors by this value; otherwise by finest format unit | `number` | `-` |
| autoStart | Whether to auto start count down | `boolean` | `true` |
| time | Total time, unit milliseconds | `number` | `0` |
| destroy | destroy instance | `boolean` | `false` |
| onPaused | Emitted when count down paused | `onPaused: (restTime: number) => void` | `-` |
| onRestart | Emitted when count down restart | `onRestart: (restTime: number) => void` | `-` |
| onUpdate | Real-time update of the countdown data callback function | `onUpdate: (restTime: any) => void` | `-` |

### Format

| Name | Description |
| --- | --- |
| DD | Day |
| HH | Hour |
| mm | Minute |
| ss | Second |
| i | Hundred-millisecond, 1-digit (0–9); with `ss.i` rendered in the same block (e.g. `30.5`) |
| S | Millisecond, 1-digit |
| SS | Millisecond, 2-digits |
| SSS | Millisecond, 3-digits |

### Recommended formats (docs only; component does not auto-switch by duration)

`format` remains fully custom. The following are design recommendations based on remaining time:

| Remaining time | Recommended format | Notes |
| --- | --- | --- |
| ≥ 1 day | `DD天HH:mm:ss` | Prefer `type="text"` |
| 1–24 hours | `HH:mm:ss` or `HH:mm:ss.i` | Solid / outline styles both OK |
| < 1 hour | `mm:ss` or `mm:ss.i` | Solid / outline styles both OK |

Use hundred-millisecond (`i`) only within 24 hours for strong promo scenes; 1 digit (RAF-driven refresh).

### Ref

| Property | Description | Type |
| --- | --- | --- |
| start | Count Down Start | `() => void` |
| pause | Count Down Pause | `() => void` |
| reset | Count Down Reset | `() => void` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-countdown-display | Layout of countdown | `flex` |
| \--nutui-countdown-color | Countdown text color | `$color-primary` |
| \--nutui-countdown-font-size | Countdown font size (non-text) | `11px` |
| \--nutui-countdown-font-size-text | Font size when `type="text"` | `10px` |
| \--nutui-countdown-font-weight | Countdown font thickness | `400` |
| \--nutui-countdown-width | Countdown time area min-width | `16px` |
| \--nutui-countdown-number-ssi-min-width | Min-width of `ss.i` block (with hundred-ms); default / primary only, not text | `25px` |
| \--nutui-countdown-height | Countdown time area height (incl. border) | `16px` |
| \--nutui-countdown-number-padding | Countdown time area padding | `1px` |
| \--nutui-countdown-number-border-width | Physical `::after` border width (then `scale(1/3)`, ~0.33px visually) | `1px` |
| \--nutui-countdown-number-margin | Countdown time area margin | `0 1px` |
| \--nutui-countdown-number-border-radius | Countdown time area rounded angle size | `2px` |
| \--nutui-countdown-number-color | The text color of the countdown time area | `$color-primary` |
| \--nutui-countdown-background-color | Background color of the countdown time area | `$color-background-overlay` |
| \--nutui-countdown-number-border-color | Outline (default) number block border color | `$color-primary-disabled-special` |
| \--nutui-countdown-number-primary-color | When type is `primary`, the text color of the countdown time area | `$color-primary-text` |
| \--nutui-countdown-primary-background-color | When type is `primary`, the background color of the countdown time area | `$color-primary` |
| \--nutui-countdown-primary-border-color | When type is `primary`, the border color of the countdown time area | `$color-primary` |

<Contribution name="CountDown" />
