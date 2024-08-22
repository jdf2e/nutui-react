# Watermark

Add specific words or patterns on the page to prevent information theft.

## Import

```tsx
import { WaterMark } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

Support Text, multi-line text, and image.

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Part Usage

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## WaterMark

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| width | Width of watermark | `number` | `120` |
| height | Height of watermark | `number` | `64` |
| rotate | Rotation angle when drawing watermark | `number` | `-22` |
| image | Image source, it is recommended to export 2x or 3x images, and the image rendering watermark is preferred | `string` | `-` |
| imageWidth | Width of image | `number` | `120` |
| imageHeight | Height of image | `number` | `64` |
| zIndex | Z-index of the appended watermark element | `number` | `2000` |
| content | Watermark text content | `string` | `-` |
| color | Watermark text color | `string` | `rgba(0, 0, 0, .15)` |
| fontSize | Watermark text font size | `string` \| `number` | `16` |
| gapX | Horizontal spacing between watermarks | `number` | `24` |
| gapY | Vertical spacing between watermarks | `number` | `48` |
| startX | Horizontal start | `number` | `0` |
| startY | Vertical start | `number` | `0` |
| fullPage | Overwrite entire page | `boolean` | `true` |
| fontFamily | Watermark text font family | `string` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-watermark-z-index | zIndex | `$mask-content-z-index` |
