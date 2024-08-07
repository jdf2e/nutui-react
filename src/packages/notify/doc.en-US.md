# Notify

Show message tips at the top of the page

## Import

```tsx
import { Notify } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Notify Type

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Style

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Duration

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Notify

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Display Type（primary,success ,danger,warning） | `string` | `danger` |
| duration | Display duration (ms),value is 0 ,notify not disappear | `string` | `3000` |
| position | Custom Position (top, bottom) | `string` | `top` |
| onClick | Emitted when notify is clicked | `onClick: () => void` | `-` |
| onClose | Emitted when notify is closed | `onClose: () => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-notify-height | Height of notify | `40px` |
| \--nutui-notify-padding | Inside margin of notify | `0 10px` |
| \--nutui-notify-font-size | The font size of notify | `$font-size-base` |
| \--nutui-notify-text-color | The text color of notify | `$white` |
| \--nutui-notify-base-background-color | The background color of notify | `$color-primary-gradient-1` |
| \--nutui-notify-primary-background-color | The main notify background color | `$color-info` |
| \--nutui-notify-success-background-color | Background color of successful notify | `linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)` |
| \--nutui-notify-danger-background-color | Danger notify background color | `$color-primary` |
| \--nutui-notify-warning-background-color | Warning notify background color | `$color-warning` |
