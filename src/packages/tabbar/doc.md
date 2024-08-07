# Tabbar 标签栏

底部导航常用场景

## 引入

```tsx
import { Tabbar } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定义选中

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 只配图标

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 无图标

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 徽标提示

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 红点

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定义颜色

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 可自定义icon个数的tabbar

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 固定底部

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Tabbar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的标签的索引值 | `number` | `0` |
| value | 选中的标签的索引值 | `number` | `-` |
| fixed | 是否固定在页面底部，为 true 时默认开启 safeArea | `boolean` | `false` |
| activeColor | icon激活的颜色 | `string` | `#1989fa` |
| inactiveColor | icon未激活的颜色 | `string` | `#7d7e80` |
| safeArea | 是否开启iphone系列全面屏底部安全区适配 | `boolean` | `false` |
| onSwitch | 切换页签时触发事件 | `(value) => void` | `-` |

## Tabbar.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标签页的标题 | `ReactNode` | `-` |
| icon | 自定义图标 | `ReactNode` | `-` |
| value | 徽标中显示的内容，支持数字、字符和自定义内容 | `ReactNode` | `-` |
| max | value 为数值时，最大值 | `number` | `99` |
| dot | 徽标是否为小点 | `boolean` | `false` |
| top | 徽标的上下偏移量，支持单位设置，可设置为：5 等 | `number` | `0` |
| right | 徽标的左右偏移量，支持单位设置，可设置为：5 等 | `number` | `0` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-tabbar-height | 高度 | `50px` |
| \--nutui-tabbar-active-color | 选中颜色 | `$color-primary` |
| \--nutui-tabbar-inactive-color | 未选中颜色 | `$color-title` |
| \--nutui-tabbar-border-top | 上边框 | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | 下边框 | `1px solid #eee` |
| \--nutui-tabbar-box-shadow | 阴影 | `none` |
| \--nutui-tabbar-text-font-size | 标题字体大小 | `$font-size-xs` |
| \--nutui-tabbar-text-large-font-size | 无图标时标题字体大小 | `$font-size-large` |
| \--nutui-tabbar-text-large-font-weight | 无图标时标题字体粗细 | `$font-weight` |
| \--nutui-tabbar-text-line-height | 字体行高 | `initial` |
| \--nutui-tabbar-text-margin-top | 标题上外边距 | `3px` |
