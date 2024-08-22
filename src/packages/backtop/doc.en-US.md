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

## BackTop

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| target | The listening element | `string` | `-` |
| threshold | How high to scroll the page vertically | `number` | `200` |
| zIndex | Set the component z-index | `number` | `900` |
| duration | Set animation duration | `number` | `1000` |
| onClick | Emitted when component is clicked | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-backtop-border-color | border color | `#e0e0e0` |
