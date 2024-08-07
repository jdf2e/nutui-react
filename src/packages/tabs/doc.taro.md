# Tabs 选项卡切换

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式

## 引入

```tsx
import { Tabs } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 基础用法-微笑曲线

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 基础用法-简约模式

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 基础用法-卡片模式

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 基础用法-按钮模式

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 基础用法-分割线模式

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### Title 左对齐

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 左对齐-卡片模式

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 左对齐-按钮模式

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

### 左对齐-分割线模式

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

### 通过 value 匹配

:::demo

<CodeBlock src='taro/demo11.tsx'></CodeBlock>

:::

### 滑动切换

:::demo

<CodeBlock src='taro/demo12.tsx'></CodeBlock>

:::

### CSS 粘性布局

通过设置tab的style 例如：`tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}` ，来实现Css的粘性布局，注意：在微信小程序里组件外层元素不能存在 overflow 为 `hidden`、`auto`、`scroll`的设置。

:::demo

<CodeBlock src='taro/demo13.tsx'></CodeBlock>

:::

### Tabpane 自动高度

自动高度。设置为 true 时，nut-tabs 和 nut-tabs\_\_content 会随着当前 nut-tabpane 的高度而发生变化。

:::demo

<CodeBlock src='taro/demo14.tsx'></CodeBlock>

:::

### 数据异步渲染 3s

:::demo

<CodeBlock src='taro/demo15.tsx'></CodeBlock>

:::

### 数量多,滚动操作

:::demo

<CodeBlock src='taro/demo16.tsx'></CodeBlock>

:::

### 数量多,滚动操作 2

:::demo

<CodeBlock src='taro/demo17.tsx'></CodeBlock>

:::

### 左右布局

:::demo

<CodeBlock src='taro/demo18.tsx'></CodeBlock>

:::

### 左右布局-微笑曲线

:::demo

<CodeBlock src='taro/demo19.tsx'></CodeBlock>

:::

### 嵌套布局

:::demo

<CodeBlock src='taro/demo20.tsx'></CodeBlock>

:::

### 嵌套布局 2

:::demo

<CodeBlock src='taro/demo21.tsx'></CodeBlock>

:::

### Title 字体尺寸: 20px 12px

:::demo

<CodeBlock src='taro/demo22.tsx'></CodeBlock>

:::

### 自定义标签栏

:::demo

<CodeBlock src='taro/demo23.tsx'></CodeBlock>

:::

## Tabs

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前激活 tab 面板的值 | `number` \| `string` | `0` |
| defaultValue | 初始化激活 tab 的值 | `number` \| `string` | `0` |
| activeColor | 标签选中色 | `string` | `#1a1a1a` |
| direction | 使用横纵方向 | `horizontal` \| `vertical` | `horizontal` |
| activeType | 选中底部展示样式 可选值 `line`、`smile`、`simple`、`card`、`button`、`divider` | `line` \| `smile` \| `simple` \| `card` \| `button`\| `divider` | `line` |
| duration | 切换动画时长,单位 ms 0 代表无动画 | `number` \| `string` | `300` |
| title | 自定义导航区域 | `() => JSX.Element[]` | `-` |
| align | 标题对齐方式 | `left` \| `right` | `-` |
| autoHeight | 自动高度。设置为 true 时，nut-tabs 和 nut-tabs\_\_content 会随着当前 nut-tabpane 的高度而发生变化。 | `boolean` | `false` |
| tabStyle | 标签栏样式 | `CSSProperties` | `{}` |
| onClick | 点击标签时触发 | `(index: string\| number) => void` | `-` |
| onChange | 当前激活的标签改变时触发 | `(index: string \| number) => void` | `-` |

## Tabs.Tabpane

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | `-` |
| value | 标签 Key , 匹配的标识符, 默认为索引值 | `string` \| `number` | `-` |
| disabled | 是否禁用标签 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-tabs-titles-height | 水平方向标题的高度 | `44px` |
| \--nutui-tabs-titles-background-color | Tab 标题的背景色 | `$color-background` |
| \--nutui-tabs-title-gap | Tab 标题的左右 margin | `0px` |
| \--nutui-tabs-titles-font-size | Tab 标题的字号 | `$font-size-base` |
| \--nutui-tabs-titles-item-min-width | 水平方向标题的最小宽度 | `50px` |
| \--nutui-tabs-titles-item-color | Tab 标题的字色 | `$color-title` |
| \--nutui-tabs-titles-item-active-color | Tab 选中标题的字色 | `$color-primary` |
| \--nutui-tabs-titles-item-active-font-weight | Tab 选中标题的字重 | `$font-weight-bold` |
| \--nutui-tabs-titles-item-active-font-size | Tab 选中标题的字号 | `$font-size-large` |
| \--nutui-tabs-titles-item-active-background-color | 水平方向激活选项卡标题的背景色 | `$color-background-overlay` |
| \--nutui-tabs-tab-line-width | 水平方向激活选项卡线条的宽度 | `12px` |
| \--nutui-tabs-tab-line-height | 水平方向激活选项卡线条的高度 | `2px` |
| \--nutui-tabs-tab-line-color | 水平方向线条颜色 | `$color-primary` |
| \--nutui-tabs-line-bottom | 水平方向线条距离 | `15%` |
| \--nutui-tabs-line-border-radius | 水平方向线的圆角 | `2px` |
| \--nutui-tabs-tab-line-opacity | 水平方向线的透明度 | `1` |
| \--nutui-tabs-vertical-titles-width | 垂直方向标题的宽度 | `100px` |
| \--nutui-tabs-vertical-titles-item-height | 垂直方向标题的高度 | `40px` |
| \--nutui-tabs-vertical-tab-line-color | 垂直方向线条颜色 | `linear-gradient(180deg, $color-primary 0%, rgba(#fa2c19, 0.15) 100%)` |
| \--nutui-tabs-vertical-tab-line-width | 垂直方向标题线条的宽度 | `3px` |
| \--nutui-tabs-vertical-tab-line-height | 垂直方向标题线条的高度 | `12px` |
| \--nutui-tabs-tabpane-padding | Tabpane 的内边距 | `24px 20px` |
| \--nutui-tabs-tabpane-backgroundColor | Tabpane 的背景色 | `#fff` |
