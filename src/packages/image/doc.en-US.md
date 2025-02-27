# Image

Enhanced img tag with multiple image fill modes, support for loading hint, loading failure hint.

## Import

```tsx
import { Image } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

The basic usage is the same as that of the native IMG tag. You can set the native attributes such as SRC, width, height, and Alt.

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Object Fill

The `fit` attribute is used to set the image filling mode, which is equivalent to the original `Object-fit` attribute.

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Object Position

The position property can be used to set the position of the picture, which is equivalent to the original Object-position property when combined with the FIT property.

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Round

The round attribute allows you to set the image to be round. Note that if the image is not contained and fit is contained or scale-down, a full circle cannot be contained.

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Loading

The Image component provides a default loading prompt and supports custom content through `slotLoading`.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Error

The Image component provides a default loading failure warning and supports custom content through `slotError`.

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Image + text

`Image` and text

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### LazyLoad

The Image component provides lazy loading of images, which can be realized by configuring `isLazy`, which is not enabled by default.

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Image

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| src | image link | `string` | `-` |
| fit | image fill mode, equivalent to the native object-fit property | `ImageFit` | `fill` |
| position | Image position, equivalent to the original object-position attribute | `ImagePosition` | `center` |
| alt | alternative text | `string` | `-` |
| width | width, default unit `px` | `string` | `-` |
| height | height, default unit `px` | `string` | `-` |
| radius | rounded corner size | `string` \| `number` | `-` |
| error | Whether to display image loading failure | `boolean \| ReactNode` | `true` |
| loading | Whether to show loading images | `boolean \| ReactNode` | `true` |
| lazy | Whether to lazy load images | `boolean` | `false` |
| onClick | Triggered when an image is clicked | `(e: MouseEvent) => void` | `-` |
| onLoad | Triggered after the image is loaded | `() => void` | `-` |
| onError | Triggered when the image fails to load | `() => void` | `-` |

### ImageFit

| Property | Description |
| --- | --- |
| contain | Keep aspect ratio, fully display the long side of the image |
| cover | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill | Stretch and resize image to fill the content box |
| none | Not resize image |
| scale-down | Take the smaller of none or contain |

### ImagePosition

| Property | Description |
| --- | --- |
| center | Align Center |
| top | Align Top |
| right | Align Right |
| bottom | Align Bottom |
| left | Align Left |

## Contribution

### Issues

- [Iconfont 设置 name 为图片地址时，修改颜色不生效](https://github.com/jdf2e/nutui-react/issues/2333)

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Image)

### Component Logs

- 🐛 imageSize=0无效 ([#2937](https://github.com/jdf2e/nutui-react/pull/2937)) `v2.7.7`
- 🐛 Uploade 组件无法预览图片 ([#2822](https://github.com/jdf2e/nutui-react/pull/2822)) `v2.7.2`
- ✨ feat(image-preview): 增加索引字段，用于预览内容排序 ([#2519](https://github.com/jdf2e/nutui-react/pull/2519)) `v2.6.17`
- 💡 🏡 chore(image): 官网taro的demo显示与h5不一致 ([#2244](https://github.com/jdf2e/nutui-react/pull/2244)) @Alex-huxiyang `v2.6.5`
- 💡 🏡 chore(image): demo代码风格优化 ([#2220](https://github.com/jdf2e/nutui-react/pull/2220)) @Alex-huxiyang `v2.6.4`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=image&expanded=true)
