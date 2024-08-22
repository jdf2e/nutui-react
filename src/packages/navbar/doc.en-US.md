# Navbar

Provides navigation capabilities.

## Import

```tsx
import { NavBar } from '@nutui/nutui-react'
```

## Code Example

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Title Align

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Multi-tab Switching Navigation

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## Navbar

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| right | Right side content | `ReactNode` | `-` |
| left | The left content, rendered to the right of the return area | `ReactNode` | `-` |
| back | Returns the text of the area | `ReactNode` | `-` |
| titleAlign | Title align, optional value center、left | `string` | `center` |
| fixed | Is it fixed | `boolean` | `false` |
| safeAreaInsetTop | Whether it is suitable for the safe area | `boolean` | `false` |
| placeholder | When fixed to the top, whether to generate a placeholder element of equal height at the label position | `boolean` | `false` |
| zIndex | Navigation Bar Hierarchy | `number` \| `string` | `10` |
| onBackClick | Click the callback after the return area | `onBackClick:(event: Event)=>void` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-navbar-width | The width of the navbar | `100%` |
| \--nutui-navbar-height | The height of the navbar | `44px` |
| \--nutui-navbar-margin-bottom | Bottom margin of the navbar | `20px` |
| \--nutui-navbar-background | The navbar's background color | `$white` |
| \--nutui-navbar-box-shadow | Shadow of navbar | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-navbar-color | navbar font color | `$color-text` |
| \--nutui-navbar-font-size | navbar font size | `$font-size-base` |
| \--nutui-navbar-title-font-size | The font size of the navbar's title | `$font-size-base` |
| \--nutui-navbar-title-font-weight | The font weight of the navbar's title | `0` |
| \--nutui-navbar-title-font-color | The font color of the navbar's title | `$color-title` |
