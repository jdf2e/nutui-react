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

### With Bottom Navigation Bar

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

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
| tabbarHeight | Height of the bottom navigation bar, used to avoid occlusion by the tab bar | `number` | `-` |
| icon | Custom icon | `ReactNode` | `-` |
| scrollRes | Callback parameters of a ScrollView listener, mainly used for HarmonyOS | `PageScrollObject` | `-` |
| onClick | Emitted when component is clicked | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-backtop-border-color | border color | `$color-border` |
| \--nutui-backtop-background-color | background color | `$color-background-overlay` |
| \--nutui-backtop-size | button size | `40px` |
| \--nutui-backtop-right | distance to right edge | `8px` |
| \--nutui-backtop-bottom | distance to bottom edge | `60px` |
| \--nutui-backtop-icon-size | icon size | `20px` |

<Contribution name="BackTop" />
