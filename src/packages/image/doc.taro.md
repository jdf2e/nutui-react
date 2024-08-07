# Image 图片

增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。

## 引入

```tsx
import { Image } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

借助 Taro Image 标签实现，可以透传使用 Taro Image 的属性。

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 圆形图片

通过 radius 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 加载中提示

`Image` 组件提供了默认的加载中提示，支持通过 `loading` 自定义内容。

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 加载失败

`Image` 组件提供了默认的加载失败提示，支持通过 `error` 自定义内容。

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### Image + text 模式

`Image` 组件和文本组合。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 填充模式

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 图片位置

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 图片懒加载

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

## Image

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | `string` | `-` |
| width | 宽度，默认单位`px` | `string` | `-` |
| height | 高度，默认单位`px` | `string` | `-` |
| radius | 圆角大小 | `string` \| `number` | `-` |
| error | 是否展示图片加载失败 | `boolean \| ReactNode` | `true` |
| loading | 是否展示加载中图片 | `boolean \| ReactNode` | `true` |
| onLoad | 图片加载完后触发 | `() => void` | `-` |
| onError | 图片加载失败后触发 | `() => void` | `-` |

### 直接使用 Taro 现有 Image 组件开发 [参考文档](https://taro-docs.jd.com/docs/components/media/image)
