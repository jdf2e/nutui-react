# Button

Buttons are used to trigger an action, such as submitting a form.

## Import

```tsx
import { Button } from '@nutui/nutui-react'
```

## Demo

### Button type

The button supports six types: 'default', 'primary', 'info', 'warning', 'danger', 'success', which defaults to 'default'.

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Fill Button

The button supports four types: 'solid', 'outline', 'dashed', 'none', which defaults to 'solid'.

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Icon button

Set the button icon through the 'icon' property, and provide the 'rightIcon' property to display the icon on the right side.

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Disabled state

Disable the button through the 'disabled' attribute, which is not clickable.

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Button shape

Set the button shape through the 'shape' property, support circular, square buttons, and default to circle.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Load state

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Button size

Support 'xlarge', 'large', 'normal', 'small', 'mini' sizes, the default is 'normal'.

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Block-level elements

Buttons are inline block-level elements by default, and the 'block' attribute allows you to set the element type of the button to a block-level element, which is commonly used to implement banner buttons.

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Custom colors

The color property allows you to customize the color of the button.

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Button

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | button style | `default` \| `primary` \| `warning` \| `danger` \| `success` \| `info` | `default` |
| size | button size | `normal` \| `xlarge` \| `large` \| `small` | `normal` |
| shape | button shape | `square` \| `round` | `round` |
| color | Button color, supports linear-gradient gradient color. In outline and dashed modes, color is set. In other cases, background is set. It is recommended to use color configuration implemented by CSS variables. | `string` | `-` |
| fill | fill pattern | `solid` \| `outline` \| `dashed` \| `none` | `solid` |
| disabled | disable the button | `boolean` | `false` |
| block | block element | `boolean` | `false` |
| icon | icon | `ReactNode` | `-` |
| rightIcon | icon on the right | `ReactNode` | `-` |
| loading | loading status | `boolean` | `false` |
| nativeType | button nativeType | `submit` \| `reset` \| `button` | `button` |
| onClick | Triggered when the button is clicked | `(e: MouseEvent<HTMLButtonElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-button-border-radius | Button rounded corner settings | `8px` |
| \--nutui-button-border-width | The border width of the button | `1px` |
| \--nutui-button-normal-padding | padding value when size normal | `0px 12px` |
| \--nutui-button-default-height | The height of the button with type default | `32px` |
| \--nutui-button-default-color | The text color of the button with type default | `$color-title` |
| \--nutui-button-default-background-color | The background color of the button with type default | `transparent` |
| \--nutui-button-default-border-color | The border color of the button with type default | `$color-text` |
| \--nutui-button-default-disabled | Disabled color for buttons of type default | `$color-text-disabled` |
| \--nutui-button-default-disabled-color | Disabled text color for buttons of type default | `$color-text-help` |
| \--nutui-button-default-padding | Padding for buttons of type default | `0 12px` |
| \--nutui-button-default-font-size | The font size of the button with type default | `$font-size-s` |
| \--nutui-button-large-height | The height of the button with size large | `40px` |
| \--nutui-button-large-font-size | The font size of the button with size large | `$font-size-base` |
| \--nutui-button-large-border-radius | Rounded corners for buttons with size large | `12px` |
| \--nutui-button-small-padding | Padding for buttons of size small | `0 8px` |
| \--nutui-button-small-height | The height of the button with size small | `28px` |
| \--nutui-button-small-font-size | The font size of the button with size small | `$font-size-s` |
| \--nutui-button-small-border-radius | Rounded corners for buttons with size small | `8px` |
| \--nutui-button-mini-padding | Padding for buttons with size mini | `0 8px` |
| \--nutui-button-mini-height | size is the height of the mini button | `24px` |
| \--nutui-button-mini-font-size | The font size of the button with size mini | `$font-size-xs` |
| \--nutui-button-mini-border-radius | The rounded corners of the button with size mini | `6px` |
| \--nutui-button-text-icon-margin | Margin of text with icon button | `4px` |
