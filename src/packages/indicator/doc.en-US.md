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

## Indicator

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| current | current step | `number` | `0` |
| total | step total size | `number` | `3` |
| direction | display directory,default is horizontal | `horizontal` \| `vertical` | `horizontal` |
| color | color | `primary` \| `white` | `primary` |
| type | interactivity Type | `anchor` \| `slide` | `anchor` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-indicator-color | indicator active color | `$color-primary` |
| \--nutui-indicator-dot-color | indicator default color | `$color-text-disabled` |
| \--nutui-indicator-dot-size | indicator dot size | `3px` |
| \--nutui-indicator-dot-active-size | indicator dot active size | `6px` |
| \--nutui-indicator-border-radius | indicator active border size | `$radius-xxs` |
| \--nutui-indicator-dot-margin | when horizontal, indicator margin | `$spacing-xxxs` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AIndicator)

### Component Logs

- 🐛 fix(indicator): demo拆解与规范 ([#2090](https://github.com/jdf2e/nutui-react/pull/2090)) @eiinu `v2.4.2`
- 🐛 fix(indicator): 修订样式名称和样式变量 ([#1712](https://github.com/jdf2e/nutui-react/pull/1712)) @xiaoyatong `v2.3.0`
- 🐛 picker and datepicker theme config at taro and indicator css at taro ([#1615](https://github.com/jdf2e/nutui-react/pull/1615)) @xiaoyatong `v2.1.0`
- 🐛 swiper indicator zindex at taro ([#1586](https://github.com/jdf2e/nutui-react/pull/1586)) @xiaoyatong `v2.0.24`
- 🐛 indicator 超长换行 ([#1486](https://github.com/jdf2e/nutui-react/pull/1486)) @oasis-cloud `v2.0.19`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=indicator&expanded=true)
