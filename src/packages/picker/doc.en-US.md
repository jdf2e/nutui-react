# Picker

The picker component is usually used with Popup Component.

## Import

```tsx
import { Picker } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Default Index

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Controlled

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Multiple Columns

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Tile

Cancel the 3D display effect by setting `threeDimensional`, and control the duration of fast scrolling by setting `duration`.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Cascade

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Async

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Custom Theme

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Picker

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Is Show | `boolean` | `false` |
| title | Toolbar title | `string` | `-` |
| options | Columns data | `Array` | `[]` |
| value | Controlled Value | `Array` | `[]` |
| defaultValue | Default Index | `Array` | `[]` |
| threeDimensional | Turn on 3D effects | `boolean` | `true` |
| duration | move animation duration, ms | `string` \| `number` | `1000` |
| popupProps | popup props | `object` | `-` |
| closeOnOverlayClick | Tap Mask off | `boolean` | `true` |
| onConfirm | Emitted when click confirm button. | `(options, value) => void` | `-` |
| onChange | Emitted when current option changed. | `(options, value) => void` | `-` |
| onCancel | Emitted when click cancel button. | `() => void` | `-` |
| onClose | Emitted when click confirm and cancel button. | `(options, value) => void` | `-` |
| afterClose | Emitted when cascade changed. | `(options, value) => void` | `-` |

### options

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| text | Text of column | `string` \| `number` | `-` |
| value | Value of column | `string` \| `number` | `-` |
| children | Cascader Option | `Array` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-picker-title-cancel-color | picker title cancel color | `$text-color` |
| \--nutui-picker-title-cancel-font-size | picker title cancel font size | `14px` |
| \--nutui-picker-title-ok-color | picker title confirm color | `$color-primary` |
| \--nutui-picker-title-ok-font-size | picker title confirm font size | `14px` |
| \--nutui-picker-list-height | picker pannel list height | `252px` |
| \--nutui-picker-item-height | picker pannel item height | `36px` |
| \--nutui-picker-item-text-color | picker pannel item text color | `$color-title` |
| \--nutui-picker-item-text-font-size | picker pannel item text font size | `14px` |
| \--nutui-picker-item-active-line-border | picker pannel item active line border | `1px solid #d8d8d8` |
