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

### White

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Type

Supports three types: anchor indicator (anchor, 2-6 pages), slide indicator (slide, 2-11 pages), dual-screen indicator (dualScreen, fixed 2 pages).

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

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

### Placement

Supports placing the indicator outside or inside the content module at different positions. For inside placement (inside-\*), the parent container must have `position: relative`.

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Indicator

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| current | current step | `number` | `0` |
| total | step total size | `number` | `2` |
| direction | display directory, default is horizontal | `horizontal` \| `vertical` | `horizontal` |
| color | color | `primary` \| `default` | `primary` |
| type | interactivity type | `anchor` \| `slide`\| `dualScreen` | `anchor` |
| placement | placement layout | `outside` \| `inside-top-right` \| `inside-bottom-center` \| `inside-bottom-left` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-indicator-color | indicator active color | `$color-primary` |
| \--nutui-indicator-dot-color | indicator default color | `$color-border` |
| \--nutui-indicator-dot-size | indicator dot size | `4px` |
| \--nutui-indicator-dot-active-size | indicator dot active size | `8px` |
| \--nutui-indicator-border-radius | indicator active border size | `$radius-xxs` |
| \--nutui-indicator-dot-margin | when horizontal, indicator margin | `$spacing-xxs` |
| \--nutui-indicator-dot-border | indicator inner border | `0.33px solid $color-border` |
| \--nutui-indicator-dot-inactive-color | indicator inactive fill color | `var(--nutui-color-background-component, #f0f2f7)` |
| \--nutui-indicator-track-width | slide indicator track width | `24px` |
| \--nutui-indicator-slider-width | slide indicator slider width | `8px` |
| \--nutui-indicator-dual-screen-inactive-width | dual-screen indicator inactive width | `16px` |
| \--nutui-indicator-placement-gap | placement gap to content | `8px` |
| \--nutui-indicator-placement-safe-gap | outside placement safe gap below | `12px` |

<Contribution name="Indicator" />
