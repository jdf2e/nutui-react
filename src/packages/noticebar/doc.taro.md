# NoticeBar 公告栏

用于循环播放展示一组消息通知。

## 引入

```tsx
import { NoticeBar } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 居中布局，不支持滚动

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，可通过 scrollable 属性可以控制该行为

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 关闭模式

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 多行展示

文字较长时，可以通过设置 wrap 属性来开启多行展示。默认为不滚动，可以通过设置 scrollable 控制为滚动。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义右侧内容

增加自定义右侧区域，区分rightIcon，更灵活配置。

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 自定义主题

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 垂直滚动

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 纵向模式：自定义左侧图标

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

### 纵向模式：自定义滚动内容

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

### 纵向模式：自定义右侧图标

:::demo

<CodeBlock src='taro/demo11.tsx'></CodeBlock>

:::

## NoticeBar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 布局方式, 值为`center`时，不支持滚动 | `left` \| `center` | `left` |
| direction | 滚动的方向，可选 horizontal、vertical | `string` | `horizontal` |
| content | 提示的信息 | `string` | `-` |
| closeable | 是否启用关闭模式 | `boolean` | `false` |
| leftIcon | 左边的 icon，closeable 模式下默认为空 | `ReactNode` | `-` |
| rightIcon | closeable 模式下，默认为 `<Close />` | `ReactNode` | `-` |
| right | 区别于rightIcon，为右边自定义区域，仅用于 direction='horizontal' 模式 | `ReactNode` | `-` |
| delay | 延时多少秒 | `string` \| `number` | `1` |
| scrollable | 是否可以滚动 | `boolean` | `true` |
| speed | 滚动速率 (px/s) | `number` | `50` |
| wrap | 是否开启文本换行 | `boolean` | `false` |
| onClick | 外层点击事件回调 | `(event: any) => void` | `-` |
| onClose | 关闭通知栏时触发 | `(event: any) => void` | `-` |
| onItemClick | 垂直滚动多条数据时，点击当前展示的信息时触发 | `(event: any, value: any) => void` | `-` |

### Props（direction=vertical）

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 纵向滚动数据列表 | `Array` | `[]` |
| speed | 滚动的速度 | `number` | `50` |
| duration | 停留时间(毫秒) | `number` | `1000` |
| height | 每一个滚动列的高度(px) | `number` | `40` |
| closeable | 是否启用右侧关闭图标，可以通过 rightIcon 自定义图标 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-noticebar-height | 高度 | `36px` |
| \--nutui-noticebar-background | 背景色 | `rgba(251, 248, 220, 1)` |
| \--nutui-noticebar-color | 文字色 | `#d9500b` |
| \--nutui-noticebar-font-size | 字号 | `$font-size-small` |
| \--nutui-noticebar-line-height | 行高 | `24px` |
| \--nutui-noticebar-box-padding | padding值 | `0 16px` |
| \--nutui-noticebar-border-radius | 圆角 | `0` |
| \--nutui-noticebar-wrap-padding | 多行展示的padding值 | `8px 16px` |
| \--nutui-noticebar-icon-gap | icon、text间距 | `4px` |
| \--nutui-noticebar-left-icon-width | 左侧icon的宽度和高度的设定 | `16px` |
| \--nutui-noticebar-right-icon-width | 右侧icon的宽度和高度的设定 | `16px` |
