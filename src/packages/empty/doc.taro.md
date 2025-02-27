# Empty组件

空状态时的占位提示

## 引入

```tsx
import { Empty } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### Size 为 small 时，可用于半屏

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义内容大小

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 图片类型，内置 3 个

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义图片

> 如果您是京东站内相关项目的开发，我们特意为您提供了一系列的缺省状态的图片链接，您可通过内部群获取。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 底部内容

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

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
| actions | 可用于处理操作的一组数据 | `Array` | `[]` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-empty-padding | Empty组件图片的padding值 | `32px 40px` |
| \--nutui-empty-image-size | Empty组件图片的尺寸大小 | `160px` |
| \--nutui-empty-image-small-size | size 为 small 时，Empty组件图片的尺寸大小 | `120px` |
| \--nutui-empty-title-margin-top | Empty组件图片标题margin-top的值 | `0px` |
| \--nutui-empty-title-line-height | Empty组件图片标题行高 | `$font-size-l` |
| \--nutui-empty-description-line-height | Empty组件图片描述行高 | `1` |
| \--nutui-empty-background-color | Empty组件背景色 | `#fff` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AEmpty)

### Component Logs

- 🐛 fix(empty): actions add support for events ([#2854](https://github.com/jdf2e/nutui-react/pull/2854)) `v2.7.3`
- ✨ feat(empty): add css variable nutui-empty-background-color ([#2451](https://github.com/jdf2e/nutui-react/pull/2451)) @Alex-huxiyang `v2.6.14`
- 🐛 fix(Empty): 调整默认图片为jd图片 ([#2032](https://github.com/jdf2e/nutui-react/pull/2032)) @xiaoyatong `v2.4.1`
- ✨ feat(empty): 图片变更 ([#1988](https://github.com/jdf2e/nutui-react/pull/1988)) @xiaoyatong `v2.4.0`
- 🐛 fix(empty): fix import at taro ([#1839](https://github.com/jdf2e/nutui-react/pull/1839)) @xiaoyatong `v2.3.5`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=empty&expanded=true)
