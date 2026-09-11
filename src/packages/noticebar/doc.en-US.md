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

### Vertical Scroll Custom Style， Dynamic Content Updates

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Vertical Scroll Custom Right Icon

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### Tag & Action Button

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### Custom Image

:::demo

<CodeBlock src='h5/demo14.tsx'></CodeBlock>

:::

### Auto Close

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## NoticeBar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| align | Layout mode. When the value is center, scrolling is not supported | `left` \| `center` | `left` |
| direction | Rolling direction | `string` | `horizontal` |
| content | Notice text content | `string` | `-` |
| description | Sub text content, displayed below the main text | `ReactNode` | `-` |
| tag | Info tag icon, displayed next to the text, size 12×12 | `ReactNode` | `-` |
| action | Action button area, supports weak action (text link) and strong action (button), max width 99px | `ReactNode` | `-` |
| closeable | Whether to enable the off mode | `boolean` | `false` |
| autoClose | Auto close delay (milliseconds), 0 or unset means manual close | `number` | `0` |
| leftIcon | Left Icon | `ReactNode` | `-` |
| rightIcon | Right Icon, defaults to `<MaskClose />` in closeable mode | `ReactNode` | `-` |
| right | ~~Deprecated, use action instead~~ Right custom area, used by mode of direction='horizontal' | `ReactNode` | `-` |
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
| \--nutui-noticebar-height | noticebar height | `40px` |
| \--nutui-noticebar-background | noticebar background | `$color-background-overlay` |
| \--nutui-noticebar-color | noticebar text color | `$color-title` |
| \--nutui-noticebar-icon-color | noticebar icon color | `$color-primary` |
| \--nutui-noticebar-font-size | noticebar font size | `$font-size-base` |
| \--nutui-noticebar-line-height | noticebar line height | `20px` |
| \--nutui-noticebar-box-padding | noticebar box padding | `2px 8px` |
| \--nutui-noticebar-border-radius | noticebar border radius | `0` |
| \--nutui-noticebar-wrap-padding | noticebar wrap padding | `9px 8px` |
| \--nutui-noticebar-icon-gap | gap of icon and text | `6px` |
| \--nutui-noticebar-left-icon-width | noticebar left icon width | `24px` |
| \--nutui-noticebar-left-icon-wrap-width | left icon width in wrap mode | `32px` |
| \--nutui-noticebar-right-icon-width | noticebar right icon width | `16px` |
| \--nutui-noticebar-close-size | close button size | `20px` |
| \--nutui-noticebar-tag-size | info tag size | `12px` |
| \--nutui-noticebar-tag-gap | info tag gap | `4px` |
| \--nutui-noticebar-action-max-width | action button max width | `99px` |
| \--nutui-noticebar-action-gap | action button gap | `12px` |
| \--nutui-noticebar-action-font-size | action button font size | `$font-size-xs` |
| \--nutui-noticebar-description-font-size | description font size | `11px` |
| \--nutui-noticebar-description-color | description color | `$color-text` |
| \--nutui-noticebar-description-line-height | description line height | `16px` |
| \--nutui-noticebar-left-icon-border-radius | left icon border radius | `4px` |
| \--nutui-noticebar-close-color | close button color | `$color-text-help` |
| \--nutui-noticebar-close-icon-size | close icon size | `10px` |
| \--nutui-noticebar-close-ring-color | countdown ring progress color | `$color-text-help` |
| \--nutui-noticebar-close-ring-shadow-color | countdown ring track color | `$color-border` |

<Contribution name="NoticeBar" />
