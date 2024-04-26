# Swiper

## Intro

Often used in a group of pictures or card rotation.

## Install

```tsx
import { Swiper } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Asynchronous loading

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::


### Custom size

`width` Custom rotation size

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom paging indicator

`indicator` Custom indicator

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Manual switching

You can manually switch through `ref` (`prev`, `next`)

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Vertical direction

`direction` Custom rotation direction

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Horizontal center display

`isCenter` means it can be centered, and `width` must be passed at the same time

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Vertically centered display

`isCenter` means that it can be centered, and `height` must be passed

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Many datas in a frame

`center` 代表可居中，同时必须传 `height`

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Swiper

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| width | Width of rotation car | `number` \| `string` | `-` |
| height | Height of rotation card | `string` \| `number`  | `-` |
| direction | Rotation direction | `horizontal` \| `vertical` | `horizontal` |
| indicator | Whether the pagination indicator is displayed | `boolean` | `false` |
| loop | Whether to rotate | `boolean` | `true` |
| duration | Animation duration（Unit ms | `number` \| `string` | `500` |
| autoPlay | Automatic rotation duration, 0 means no automatic | `number` \| `string` | `0` |
| initPage | Initialize index value | `number` \| `string` | `0` |
| touchable | Is it possible to touch swipe | `boolean` | `true` |
| preventDefault | Whether to disable default events during swipe | `boolean` | `true` |
| stopPropagation | Whether to prohibit bubbling during sliding | `boolean` | `true` |
| center | Whether to display in the center, the corresponding `width` and `height` must be passed | `boolean` | `false` |
| onChange | Callback after card switching | `(current: number) => void` | `-` |

### Ref

| Property | Description | Type |
| --- | --- | --- |
| prev | Switch to previous page | `()=>void` |
| next | Switch to next page | `()=>void` |
| to | Switch to the specified rotation | `(index: number)=>void` |
| resize | This method can be called to trigger redraw when the size of the outer element or the display state of the component changes | `()=>void` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | The distance from the bottom of the pager | `12px` |