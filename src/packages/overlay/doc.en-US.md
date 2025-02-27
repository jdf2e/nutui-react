# Overlay

Create a mask layer that is typically used to prevent users from doing other things

## Import

```tsx
import { Overlay } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Custom mask style

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Set animation time

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Do not lock background scrolling

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Nested content

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Click the mask not to close

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Overlay

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether the current component is displayed | `boolean` | `false` |
| duration | Animation duration, in ms | `number` | `300` |
| lockScroll | Whether the background is locked ,strict is used to support iOS12 | `boolean\|strict` | `true` |
| zIndex | Set component page level | `number` | `1000` |
| closeOnOverlayClick | Tap Mask off | `boolean` | `true` |
| onClick | Triggered when the button is clicked | `event: Event` | `-` |
| afterClose | Triggered after complete shutdown | `() => void` | `-` |
| afterShow | Trigger after complete display | `() => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-overlay-bg-color | Overlay background color | `$color-mask` |
| \--nutui-overlay-zIndex | z-index | `1000` |
| \--nutui-overlay-content-bg-color | Mask layer nested content background color | `$white` |
| \--nutui-overlay-content-color | Mask layer nested content font color | `$color-title` |
| \--nutui-overlay-animation-duration | Mask layer nested content animation duration | `0.3s` |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Overlay)

### Component Logs

- 🐛 fix(overlay): tour position offset in tour.taro ([#2631](https://github.com/jdf2e/nutui-react/pull/2631)) `v2.6.23`
- 💡 📖 docs(overlay): fix typo @eiinu `v2.5.0`
- 🐛 fix(overlay): demo拆解与规范 ([#2012](https://github.com/jdf2e/nutui-react/pull/2012)) @Alex-huxiyang `v2.4.1`
- 🐛 fix(overlay): 文档可读性优化 ([#1894](https://github.com/jdf2e/nutui-react/pull/1894)) @Alex.huxiyang `v2.3.8`
- 💡 📖 docs(overlay): 文档优化 ([#1706](https://github.com/jdf2e/nutui-react/pull/1706)) @xiaoyatong `v2.3.0`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=overlay&expanded=true)
