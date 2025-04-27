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

### Support Jump

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Support Close

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Style

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Notify

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| distance | Distance from top/bottom | `number` | `8` |
| navHeight | Height of top navigation bar | `number` | `57` |
| closeable | Whether to enable the close mode | `boolean` | `false` |
| leftIcon | Left Icon | `ReactNode` | `-` |
| rightIcon | Right Icon | `ReactNode` | `-` |
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
| \--nutui-notify-padding | Inside margin of notify | `0 12px` |
| \--nutui-notify-border-radius | The rounded corners of the notify | `8px` |
| \--nutui-notify-box-shadow | Shadow of notify | `0px 4px 12px 0px rgba(0, 0, 0, 0.06)` |
| \--nutui-notify-z-index | ZIndex of notify | `1000` |
| \--nutui-notify-font-size | The font size of notify | `$font-size-base` |
| \--nutui-notify-text-color | The text color of notify | `$color-title` |
| \--nutui-notify-background-color | The background color of notify | `$white` |

<Contribution name="Notify" />
