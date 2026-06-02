# Button 按钮

接收用户的点击或触摸操作，触发对应的功能或指令。帮助用户完成提交、确认、取消、跳转、删除等关键行为，是最基础、最直接的交互入口。

## 引入

```tsx
import { Button } from '@nutui/nutui-react'
```

## 示例代码

### 按钮类型

按钮支持 `default`、`primary`、`info`、`warning`、`danger`、`success`、`service` 七种类型，默认为 `default`。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 填充模式

按钮支持 `solid`、 `outline`、 `dashed`、`none`四种类型，默认为 `solid`。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 图标按钮

通过 `icon` 属性来设置按钮图标，并提供`rightIcon`属性使图标在右侧显示。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 按钮形状

通过 `shape` 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 加载状态

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>
:::

### 按钮尺寸

支持外部开源的语义化尺寸 `xlarge`、 `large`、`normal`、`small`、`mini`，以及京东内部设计规范的数字尺寸体系 `48`、`44`、`40`、`36`、`32`、`28`、`24`，默认为 `normal`。

| 尺寸类别 | 京东内部数字尺寸 | 外部开源语义尺寸 | 高度 (Height) | 内边距 (Padding) | 字号 (Font-Size) | 适用场景说明 |
| --- | --- | --- | --- | --- | --- | --- |
| 特定大按钮 | `48` | `xlarge` | 48px | 0 16px | 15px | 页面底部吸底操作 |
| 页面主按钮 | `44` | **(无)** | 44px | 0 16px | 15px | 页面级主要提交、确认操作 |
| 区块主按钮 | `40` | `large` | 40px | 0 16px | 15px | 页面局部区块内的主要操作 |
| 常规按钮 | `36` | **(无)** | 36px | 0 12px | 14px | 常规列表或表单使用 |
| 默认按钮 | `32` | `normal` | 32px | 0 12px | 12px | 默认的基础组件操作 |
| 次级按钮 | `28` | `small` | 28px | 0 8px | 12px | 页面内的次级辅助操作或标签 |
| 极小按钮 | `24` | `mini` | 24px | 0 8px | 11px | 极小空间内的特殊操作 |

> [!NOTE]
> `xlarge`、`large`、`normal`、`small`、`mini` 属于外部开源组件库通用的语义化尺寸。数字体系尺寸旨在精准贴合京东内部最新的 V16 设计规范，两者在底层互相兼容并完美复用。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 自定义颜色

通过 color 属性可以自定义按钮的颜色。

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Button

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮的样式 | `default` \| `primary` \| `warning` \| `danger` \| `success` \| `info` \| `service` | `default` |
| size | 按钮的尺寸 | `normal` \| `xlarge` \| `large` \| `small` \| `mini` \| `48` \| `44` \| `40` \| `36` \| `32` \| `28` \| `24` | `normal` |
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

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-button-border-radius | 按钮的圆角设置 | `$button-border-radius` |
| \--nutui-button-border-width | 按钮的边框宽度 | `1px` |
| \--nutui-button-normal-padding | size normal时的padding值 | `0px 12px` |
| \--nutui-button-default-height | type 为 default 的按钮的高度 | `32px` |
| \--nutui-button-default-color | type 为 default 的按钮的文本色 | `$color-title` |
| \--nutui-button-default-background-color | type 为 default 的按钮的背景色 | `transparent` |
| \--nutui-button-default-border-color | type 为 default 的按钮的边框色 | `$color-text` |
| \--nutui-button-default-disabled | type 为 default 的按钮的禁用色 | `$color-text-disabled` |
| \--nutui-button-default-disabled-color | type 为 default 的按钮的禁用文本色 | `$color-text-help` |
| \--nutui-button-default-padding | type 为 default 的按钮的内边距 | `0 12px` |
| \--nutui-button-default-font-size | type 为 default 的按钮的字号 | `$font-size-s` |
| \--nutui-button-xlarge-height | size 为 xlarge 的按钮的高度 | `48px` |
| \--nutui-button-xlarge-font-size | size 为 lxarge 的按钮的字号 | `$font-size-xl` |
| \--nutui-button-xlarge-border-radius | size 为 xlarge 的按钮的圆角 | `$button-xlarge-border-radius` |
| \--nutui-button-large-height | size 为 large 的按钮的高度 | `40px` |
| \--nutui-button-large-font-size | size 为 large 的按钮的字号 | `$font-size-base` |
| \--nutui-button-large-border-radius | size 为 large 的按钮的圆角 | `$button-large-border-radius` |
| \--nutui-button-small-padding | size 为 small 的按钮的内边距 | `0 8px` |
| \--nutui-button-small-height | size 为 small 的按钮的高度 | `28px` |
| \--nutui-button-small-font-size | size 为 small 的按钮的字号 | `$font-size-s` |
| \--nutui-button-small-border-radius | size 为 small 的按钮的圆角 | `$button-small-border-radius` |
| \--nutui-button-mini-padding | size 为 mini 的按钮的内边距 | `0 8px` |
| \--nutui-button-mini-height | size 为 mini 的按钮的高度 | `24px` |
| \--nutui-button-mini-font-size | size 为 mini 的按钮的字号 | `$font-size-xs` |
| \--nutui-button-mini-border-radius | size 为 mini 的按钮的圆角 | `$button-mini-border-radius` |
| \--nutui-button-text-icon-margin | 带 icon按钮的文本的边距 | `4px` |

<Contribution name="Button" />
