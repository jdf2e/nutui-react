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

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AImagePreview)

### Component Logs

- 🐛 fix(imagepreview): 无法在预期情景正确关闭图片的异常 ([#2421](https://github.com/jdf2e/nutui-react/pull/2421)) @Alex-huxiyang `v2.6.13`
- ✨ add pagination whether to show pages in imagepreview ([#2411](https://github.com/jdf2e/nutui-react/pull/2411)) @xiaoyatong `v2.6.12`
- 🐛 fix(imagepreview): 阻止冒泡，防止点击图片关闭 ([#2281](https://github.com/jdf2e/nutui-react/pull/2281)) @Alex-huxiyang `v2.6.6`
- 🐛 fix(imagePreview): 阻止关闭预览事件对父结构的非必要影响 ([#2227](https://github.com/jdf2e/nutui-react/pull/2227)) @Alex-huxiyang `v2.6.4`
- 🐛 fix(imagepreview): demo拆解与规范 ([#2134](https://github.com/jdf2e/nutui-react/pull/2134)) @Alex-huxiyang `v2.5.1`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=imagepreview&expanded=true)
