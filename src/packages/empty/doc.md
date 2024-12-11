# Empty组件

空状态时的占位提示

## 引入

```tsx
import { Empty } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Size 为 small 时，可用于半屏

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定义内容大小

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 图片类型，内置 3 个

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定义图片

> 如果您是京东站内相关项目的开发，我们特意为您提供了一系列的缺省状态的图片链接，您可通过内部群获取。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 底部内容

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定义操作

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Empty

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片,支持传入图片 URL | `ReactNode` | `-` |
| imageSize | 图片大小，number 类型单位为 px | `number` \| `string` | `-` |
| title | 图片下方的标题 | `ReactNode` | `-` |
| description | 图片下方的描述文字 | `ReactNode` | `-` |
| size | 组件整体大小，适配于全屏或半屏 | `small` \| `base` | `base` |
| status | 默认图片错误类型 | `empty` \| `error` \| `network` | `empty` |
| actions | 可用于处理操作的一组数据 | `Array<EmptyAction>` | `[]` |

### EmptyAction

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文本 | `ReactNode` | `-` |
| className | Button 组件的类名 | `string` | `-` |
| style | Button 组件的 style | `CSSProperties` | `-` |
| type | Button 组件的 type | `ButtonType` | `-` |
| size | Button 组件的 size | `ButtonSize` | `-` |
| fill | Button 组件的 fill 属性 | `ButtonFill` | `-` |
| disabled | 是否禁用 | `boolean` | `false` |
| onClick | Button 组件的 onClick | `() => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-empty-padding | Empty组件图片的padding值 | `32px 40px` |
| \--nutui-empty-image-size | Empty组件图片的尺寸大小 | `160px` |
| \--nutui-empty-image-small-size | size 为 small 时，Empty组件图片的尺寸大小 | `120px` |
| \--nutui-empty-title-margin-top | Empty组件图片标题margin-top的值 | `0px` |
| \--nutui-empty-title-margin-top | Empty组件图片标题margin-top的值 | `8px` |
| \--nutui-empty-title-line-height | Empty组件图片标题行高 | `$font-size-base` |
| \--nutui-empty-description-margin-top | Empty组件图片描述margin-top的值 | `4px` |
| \--nutui-empty-description-line-height | Empty组件图片描述行高 | `1.2` |
| \--nutui-empty-background-color | Empty组件背景色 | `#fff` |
