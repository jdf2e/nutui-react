# Empty

Placeholder prompt when empty

## Import

```tsx
import { Empty } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Size is small

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom content size

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Picture type, 3 built-in

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom image

> If you are inner user in JD, you can get the image links from us for default types.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Bottom content

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Actions

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Empty

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| image | Image type, supports incoming image URLs | `ReactNode` | `-` |
| imageSize | Image size, the unit of number type is px | `number` \| `string` | `-` |
| title | Title below the image | `ReactNode` | `-` |
| description | Description below the image | `ReactNode` | `-` |
| size | Size of component,used by full screen or half screen | `small` \| `base` | `base` |
| status | The Default error type | `empty` \| `error` \| `network` | `empty` |
| actions | Actions of operation | `Array<EmptyAction>` | `[]` |

### EmptyAction

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| text | text | `ReactNode` | `-` |
| className | The class name of the Button component | `string` | `-` |
| style | style of Button component | `CSSProperties` | `-` |
| type | type of Button component | `ButtonType` | `-` |
| size | The size of the Button component | `ButtonSize` | `-` |
| fill | fill property of Button component | `ButtonFill` | `-` |
| disabled | Whether to disable | `boolean` | `false` |
| onClick | onClick of Button component | `() => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-empty-padding | The padding value of the Empty component image | `32px 40px` |
| \--nutui-empty-image-size | The size of the Empty component image | `160px` |
| \--nutui-empty-image-small-size | The size of the Empty component image when the size is small | `120px` |
| \--nutui-empty-title-margin-top | Empty component image title margin-top value | `0px` |
| \--nutui-empty-title-margin-top | Empty component image title margin-top value | `8px` |
| \--nutui-empty-title-line-height | Empty component image title row height | `$font-size-base` |
| \--nutui-empty-description-margin-top | Empty component image description margin-top value | `4px` |
| \--nutui-empty-description-line-height | Empty component image description row height | `1.2` |
| \--nutui-empty-background-color | Empty component background color | `#fff` |
