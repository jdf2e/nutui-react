# Button 按钮

按钮用于触发一个操作，如提交表单。

## 引入

```tsx
import { Button } from '@nutui/nutui-react-taro'
```

## 示例代码

### 设置 open-type

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 按钮类型

按钮支持 `default`、`primary`、`info`、`warning`、`danger`、`success` 六种类型，默认为 `default`。

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 填充模式

按钮支持 `solid`、 `outline`、 `dashed`、`none`四种类型，默认为 `solid`。

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 图标按钮

通过 `icon` 属性来设置按钮图标，并提供`rightIcon`属性使图标在右侧显示。

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 按钮形状

通过 `shape` 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 加载状态

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 按钮尺寸

支持 `xlarge` 、 `large`、`normal`、`small`、`mini` 尺寸，默认为 `normal`。

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

### 自定义颜色

通过 color 属性可以自定义按钮的颜色。

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

## Button

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮的样式 | `default` \| `primary` \| `warning` \| `danger` \| `success` \| `info` | `default` |
| size | 按钮的尺寸 | `normal` \|`xlarge` \| `large` \| `small` \| `mini` | `normal` |
| shape | 按钮的形状 | `square` \| `round` | `round` |
| color | 按钮颜色，支持传入 linear-gradient 渐变色, outline 和 dashed 模式下设置的是 color，其他情况设置的是background，建议使用CSS变量实现的颜色配置 | `string` | `-` |
| fill | 填充模式 | `solid` \| `outline` \| `dashed` \| `none` | `solid` |
| disabled | 是否禁用按钮 | `boolean` | `false` |
| block | 是否为块级元素 | `boolean` | `false` |
| icon | 按钮图标 | `ReactNode` | `-` |
| rightIcon | 右侧按钮图标 | `ReactNode` | `-` |
| loading | 按钮loading状态 | `boolean` | `false` |
| nativeType | 按钮原始类型 | `submit` \| `reset` \| `button` | `button` |
| onClick | 点击按钮时触发 | `(e: MouseEvent<HTMLButtonElement>) => void` | `-` |

### 支持小程序API能力

如果你是需要使用原生小程序 `Button` 组件能力的用户，关于原生小程序 `Button` 组件的详细API请前往[查阅更多文档](https://taro-docs.jd.com/docs/components/forms/button)

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-button-border-radius | 按钮的圆角设置 | `24px` |
| \--nutui-button-border-width | 按钮的边框宽度 | `1px` |
| \--nutui-button-normal-padding | size normal时的padding值 | `0px 16px` |
| \--nutui-button-default-height | type 为 default 的按钮的高度 | `32px` |
| \--nutui-button-default-color | type 为 default 的按钮的文本色 | `$color-title` |
| \--nutui-button-default-background-color | type 为 default 的按钮的背景色 | `$white` |
| \--nutui-button-default-border-color | type 为 default 的按钮的边框色 | `$color-text` |
| \--nutui-button-default-disabled | type 为 default 的按钮的禁用色 | `$color-text-disabled` |
| \--nutui-button-default-disabled-color | type 为 default 的按钮的禁用文本色 | `$color-text-help` |
| \--nutui-button-default-padding | type 为 default 的按钮的内边距 | `0 16px` |
| \--nutui-button-default-font-size | type 为 default 的按钮的字号 | `$font-size-base` |
| \--nutui-button-default-font-weight | type 为 default 的按钮的字重 | `$font-weight` |
| \--nutui-button-large-height | size 为 large 的按钮的高度 | `40px` |
| \--nutui-button-large-font-size | size 为 large 的按钮的字号 | `$font-size-base` |
| \--nutui-button-large-border-radius | size 为 large 的按钮的圆角 | `24px` |
| \--nutui-button-small-padding | size 为 small 的按钮的内边距 | `0 12px` |
| \--nutui-button-small-height | size 为 small 的按钮的高度 | `28px` |
| \--nutui-button-small-font-size | size 为 small 的按钮的字号 | `$font-size-small` |
| \--nutui-button-small-border-radius | size 为 small 的按钮的圆角 | `24px` |
| \--nutui-button-mini-padding | size 为 mini 的按钮的内边距 | `0 12px` |
| \--nutui-button-mini-height | size 为 mini 的按钮的高度 | `24px` |
| \--nutui-button-mini-font-size | size 为 mini 的按钮的字号 | `$font-size-small` |
| \--nutui-button-mini-border-radius | size 为 mini 的按钮的圆角 | `24px` |
| \--nutui-button-text-icon-margin | 带 icon按钮的文本的边距 | `4px` |
