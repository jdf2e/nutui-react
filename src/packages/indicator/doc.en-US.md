# Indicator

Displays the progress of a task or process, often used for provisioning processes

## Import

```tsx
import { Indicator } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Custom Node

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Color and Size

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Vertical display

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Indicator

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| current | current step | `number` | `0` |
| total | step total size | `number` | `3` |
| direction | display directory,default is horizontal | `horizontal` \| `vertical` | `horizontal` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-indicator-color | indicator active color | `$color-primary` |
| \--nutui-indicator-dot-color | indicator default color | `$color-text-disabled` |
| \--nutui-indicator-dot-size | indicator dot size | `5px` |
| \--nutui-indicator-dot-active-size | indicator dot active size | `15px` |
| \--nutui-indicator-border-radius | indicator active border size | `3px` |
| \--nutui-indicator-dot-margin | when horizontal, indicator margin | `4px` |
