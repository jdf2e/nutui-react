# BackTop

Provides a quick return to the top function for long pages.

## Import

```tsx
import { BackTop } from '@nutui/nutui-react'
```

## Code

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Threshold

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Style

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Scroll Inside Parent Element

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Click event

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### HarmonyOS version usage

Due to the lack of support for fixed positioning, it needs to be used in conjunction with ScrollView.

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

## BackTop

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| target | The listening element | `string` | `-` |
| threshold | How high to scroll the page vertically | `number` | `200` |
| zIndex | Set the component z-index | `number` | `900` |
| duration | Set animation duration | `number` | `1000` |
| scrollRes | Callback parameters of a ScrollView listener, mainly used for HarmonyOS | `PageScrollObejct` | `-` |
| onClick | Emitted when component is clicked | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-backtop-border-color | border color | `#e0e0e0` |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20BackTop)

### Component Logs

- 🐛 update backtop demos ([#2865](https://github.com/jdf2e/nutui-react/pull/2865)) `v2.7.5`
- 🐛 fix(backtop & menu): lint, code simplification, deprecated pageYOffset removed ([#2633](https://github.com/jdf2e/nutui-react/pull/2633)) `v2.6.22`
- ✨ feat(backtop): rtl ([#2051](https://github.com/jdf2e/nutui-react/pull/2051)) @xiaoyatong `v2.4.2`
- 🐛 fix(backtop): demo拆解与规范 ([#2025](https://github.com/jdf2e/nutui-react/pull/2025)) @Alex-huxiyang `v2.4.1`
- 💡 📖 docs(backtop): 文档可读性优化 ([#1909](https://github.com/jdf2e/nutui-react/pull/1909)) @Alex.huxiyang `v2.3.9`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=backtop&expanded=true)
