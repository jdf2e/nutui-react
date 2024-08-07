# Image组件

增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。

## 引入

```tsx
import { Image } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 填充模式

通过 fit 属性可以设置图片填充模式，等同于原生的 object-fit 属性，可选值见下方表格。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 图片位置

通过 position 属性可以设置图片位置，结合 fit 属性使用，等同于原生的 object-position 属性。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 圆形图片

通过 radius 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 加载中提示

`Image` 组件提供了默认的加载中提示，支持通过 `loading` 自定义内容。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 加载失败

`Image` 组件提供了默认的加载失败提示，支持通过 `error` 自定义内容。

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Image + text 模式

`Image` 组件和文本组合。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 图片懒加载

`Image` 组件提供了懒加载图片功能，支持通过配置 `lazy` 来实现，默认不开启。

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Image

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | `string` | `-` |
| fit | 图片填充模式，等同于原生的 object-fit 属性 | `ImageFit` | `fill` |
| position | 图片位置，等同于原生的 object-position 属性 | `ImagePosition` | `center` |
| alt | 替代文本 | `string` | `-` |
| width | 宽度，默认单位`px` | `string` | `-` |
| height | 高度，默认单位`px` | `string` | `-` |
| radius | 圆角大小 | `string` \| `number` | `-` |
| error | 是否展示图片加载失败 | `boolean \| ReactNode` | `true` |
| loading | 是否展示加载中图片 | `boolean \| ReactNode` | `true` |
| lazy | 是否为懒加载图片 | `boolean` | `false` |
| onClick | 点击图片时触发 | `(e: MouseEvent) => void` | `-` |
| onLoad | 图片加载完后触发 | `() => void` | `-` |
| onError | 图片加载失败后触发 | `() => void` | `-` |

### ImageFit 图片填充模式

| 属性 | 说明 |
| --- | --- |
| contain | 保持宽高缩放图片，使图片的长边能完全显示出来 |
| cover | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill | 拉伸图片，使图片填满元素 |
| none | 保持图片原有尺寸 |
| scale-down | 取 none 或 contain 中较小的一个 |

### ImagePosition 图片位置

| 属性 | 说明 |
| --- | --- |
| center | 居中对齐 |
| top | 顶部对齐 |
| right | 右侧对齐 |
| bottom | 底部对齐 |
| left | 左侧对齐 |
