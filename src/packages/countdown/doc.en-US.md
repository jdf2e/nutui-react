# CountDown

## Intro

Used to display the countdown value in real time, and precision supports milliseconds.

## Install

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

### Millisecond

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
| startTime | Start Time | `number` | `Date.now()` |
| endTime | End Time | `number` | `Date.now()` |
| remainingTime | Remaining time, unit milliseconds | `number` | `0` |
| paused | Paused | `boolean` | `false` |
| format | Format Time | `string` | `HH:mm:ss` |
| millisecond | Whether to enable millisecond render | `boolean` | `false` |
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
| S | Millisecond, 1-digit |
| SS | Millisecond, 2-digits |
| SSS | Millisecond, 3-digits |

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
| \--nutui-countdown-display | 倒计时的布局方式 | `flex` |
| \--nutui-countdown-color | Countdown text color | `$color-primary` |
| \--nutui-countdown-font-size | Countdown font size | `10px` |
| \--nutui-countdown-font-weight | Countdown font weight | `400` |
| \--nutui-countdown-width | Time area width of the countdown | `14px` |
| \--nutui-countdown-height | Time area height of the countdown | `14px` |
| \--nutui-countdown-number-padding | Countdown time area padding | `0 1px` |
| \--nutui-countdown-number-margin | Countdown time area margin | `0 2px` |
| \countdown-number-border-radius | Countdown time area border radius | `2px` |
| \--nutui-countdown-color | Countdown time area text color | `$color-primary-light` |
| \--nutui-countdown-background-color | Countdown time area background color | `$color-primary` |
| \--nutui-countdown-border-color | Countdown time area border color color | `$color-primary` |
| \--nutui-countdown-primary-color | When type is primary, the text color of the countdown time area | `#FFFFFF` |
| \--nutui-countdown-primary-background-color | When type is primary, the background color of the countdown time area | `$color-primary` |
| \--nutui-countdown-primary-border-color | When type is primary, the border color of the countdown time area is the color | `$color-primary` |