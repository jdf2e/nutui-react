# NoticeBar

Used to display a group of message notifications in a continuous loop.

## Import

```tsx
import { NoticeBar } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### The layout is centered and does not support scrolling

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Scrollable

Scrolling is automatically enabled when the content length of the notification bar overflows, which can be controlled through the scrollable property.

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Close Mode

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### wrap

When text is long, you can enable multi-line display by setting the wrap property.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom right content

Add Right mode to set more custom content.

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom Theme

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Vertical Scroll

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Vertical Scroll Custom Left Icon

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### Vertical Scroll Custom Style

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Vertical Scroll Custom Right Icon

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

## NoticeBar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| align | Layout mode. When the value is center, scrolling is not supported | `left` \| `center` | `left` |
| direction | Rolling direction | `string` | `horizontal` |
| content | Notice text content | `string` | `-` |
| closeable | Whether to enable the off mode | `boolean` | `false` |
| leftIcon | Left Icon | `ReactNode` | `-` |
| rightIcon | Right Icon | `ReactNode` | `-` |
| right | Different from rightIcon, it is the right custom area, used by mode of direction='horizontal' | `ReactNode` | `-` |
| delay | Delay time | `string` \| `number` | `1` |
| scrollable | Whether to scroll content | `boolean` | `true` |
| speed | Scrolling speed (px/s) | `number` | `50` |
| wrap | Whether to enable text wrap | `boolean` | `false` |
| onClick | Emitted when NoticeBar is clicked | `(event: any) => void` | `-` |
| onClose | Emitted when NoticeBar is closed | `(event: any) => void` | `-` |
| onItemClick | Emitted when the currently displayed information is clicked when scrolling multiple pieces of data vertically | `(event: any, value: any) => void` | `-` |

### Props（direction=vertical）

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| list | List | `Array` | `[]` |
| speed | Scrolling speed | `number` | `50` |
| duration | Show time(millisecond) | `number` | `1000` |
| height | height | `number` | `40` |
| closeable | Whether to enable the off mode | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-noticebar-height | noticebar height | `36px` |
| \--nutui-noticebar-background | noticebar background | `rgba(251, 248, 220, 1)` |
| \--nutui-noticebar-color | noticebar color | `#d9500b` |
| \--nutui-noticebar-font-size | noticebar font size | `$font-size-small` |
| \--nutui-noticebar-line-height | noticebar line height | `24px` |
| \--nutui-noticebar-box-padding | noticebar box padding | `0 16px` |
| \--nutui-noticebar-border-radius | noticebar border radius | `0` |
| \--nutui-noticebar-wrap-padding | noticebar wrap padding | `16px` |
| \--nutui-noticebar-icon-gap | gap of icon and text | `4px` |
| \--nutui-noticebar-left-icon-width | noticebar left icon width | `16px` |
| \--nutui-noticebar-right-icon-width | noticebar right icon width | `16px` |
