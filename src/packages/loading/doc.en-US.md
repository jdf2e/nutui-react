# Loading

#

A loading icon, Used to show the loading state

### Import

```tsx
import { Loading } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Custom Color

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Size

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### With Text

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### With Text(Vertical)

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom Text Color and Size

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom Icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### With Overlay

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Loading

### Props

| Property | Description | type | default |
| --- | --- | --- | --- |
| type | loading icon type | circular | spinner | `circular` |
| direction | direction of icon and text | horizontal | vertical | `horizontal` |
| icon | custom loading icon | tsx.Element | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-loading-icon-color | icon color | `$color-text-help` |
| \--nutui-loading-icon-size | icon size | `$font-size-small` |
| \--nutui-loading-color | font color | `$color-text-help` |
| \--nutui-loading-font-size | font size | `$font-size-small` |
