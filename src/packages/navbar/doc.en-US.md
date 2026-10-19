# Navbar

Provides navigation capabilities.

## Import

```tsx
import { NavBar } from '@nutui/nutui-react'
```

## Code Example

### iOS 26 and below / Android & HarmonyOS

#### Title

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

#### Navigation

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### iOS 26 and above

#### Title

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

#### Navigation

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Navbar

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| right | Right side content | `ReactNode` | `-` |
| left | The left content, rendered to the right of the return area | `ReactNode` | `-` |
| back | Returns the text of the area | `ReactNode` | `-` |
| title | Title | `ReactNode` | `-` |
| subBar | Second-level content, rendered below the title row | `ReactNode` | `-` |
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
| \--nutui-navbar-padding | The navbar's padding | `4px 8px` |
| \--nutui-navbar-subbar-padding | Padding of the navbar's second-level content | `8px 0` |
| \--nutui-navbar-side-maxwidth | Maximum width of the navbar's left/right content area | `108px` |
| \--nutui-navbar-side-padding | Padding of the navbar's left/right content area | `8px` |
| \--nutui-navbar-background | The navbar's background color | `transparent` |
| \--nutui-navbar-box-shadow | Shadow of navbar | `none` |
| \--nutui-navbar-color | navbar font color | `$color-title` |
| \--nutui-navbar-font-size | navbar font size | `$font-size-base` |
| \--nutui-navbar-title-font-size | The font size of the navbar's title | `$font-size-xl` |
| \--nutui-navbar-title-font-weight | The font weight of the navbar's title | `$font-weight-bold` |
| \--nutui-navbar-title-font-color | The font color of the navbar's title | `$color-title` |

<Contribution name="NavBar" />
