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
| \--nutui-button-border-radius | Rounded corners of the button | `24px` |
| \--nutui-button-border-width | Button border width | `1px` |
| \--nutui-button-normal-padding | The padding of the button whose size is normal | `0px 16px` |
| \--nutui-button-default-height | The height of the button whose type is default | `32px` |
| \--nutui-button-default-color | The text color of the button whose type is default | `$color-title` |
| \--nutui-button-default-background-color | The background color of the button whose type is default | `$white` |
| \--nutui-button-default-border-color | The border color of the button whose type is default | `$color-text` |
| \--nutui-button-default-disabled | The color of the button whose type is default and whose status is disable | `$color-text-disabled` |
| \--nutui-button-default-disabled-color | The text color of the button whose type is default and whose status is disable | `$color-text-help` |
| \--nutui-button-default-padding | padding of buttons with type default | `0 16px` |
| \--nutui-button-default-font-size | The font size of the button whose type is default | `$font-size-base` |
| \--nutui-button-default-font-weight | The font weight of the button whose type is default | `$font-weight` |
| \--nutui-button-large-height | The height of the button whose size is large | `40px` |
| \--nutui-button-large-font-size | The font size of buttons whose size is large | `$button-default-font-size` |
| \--nutui-button-small-border-radius | The border radius of buttons whose size is large | `24px` |
| \--nutui-button-small-padding | Padding for small buttons | `0 12px` |
| \--nutui-button-small-height | The height of the button whose size is small | `28px` |
| \--nutui-button-small-font-size | The font size of the button whose size is small | `$font-size-small` |
| \--nutui-button-small-border-radius | The border radius of buttons whose size is small | `24px` |
| \--nutui-button-mini-padding | Padding for buttons with size mini | `0 12px` |
| \--nutui-button-mini-height | The height of the button whose size is mini | `24px` |
| \--nutui-button-mini-font-size | The font size of the button whose size is mini | `$font-size-small` |
| \--nutui-button-mini-border-radius | The border radius of buttons whose size is mini | `24px` |
| \--nutui-button-text-icon-margin | margin of text with icon button | `4px` |
