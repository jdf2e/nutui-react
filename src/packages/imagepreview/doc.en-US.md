# ImagePreview

Support full screen preview videos and images, support functional call.

## Import

```tsx
import { ImagePreview } from '@nutui/nutui-react'
```

## Code demonstration

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Click on the thumbnail to switch

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### With Init No

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### with control

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### With Pagination

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### With Videos

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Close Icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## ImagePreview

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show preview | `boolean` | `false` |
| videos | Videos Array(Videos are before images) | `Array<Object>` | `[]` |
| images | Images array | `{ src: string; index?: number }[]` | `[]` |
| autoPlay | Autoplay time, zero means not autoplay | `number` \| `string` | `3000` |
| defaultValue | Init no | `number` | `1` |
| value | value,controlled | `number` | `1` |
| pagination | Whether to show pagination | `boolean` | `true` |
| indicator | Whether to show indicator | `boolean` | `false` |
| indicatorColor | indicator color | `string` | `#fff` |
| closeOnContentClick | Click image to exit preview | `boolean` | `false` |
| closeIcon | Close Icon | `boolean` \| `ReactNode` | `false` |
| closeIconPosition | Close Icon Position | `top-right` \| `top-left` \| `bottom` | `top-right` |
| onChange | Emitted when swiper changes | `(value:number) => void` | `-` |
| onClose | Emitted when closing ImagePreview | `() => void` | `-` |
