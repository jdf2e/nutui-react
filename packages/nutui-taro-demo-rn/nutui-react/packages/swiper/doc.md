# Swiper 轮播

## 介绍

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

## 安装

```tsx
import { Swiper } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 异步加载

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定义大小

`width` 自定义轮播大小

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定义分页指示器

`indicator` 表示自定义指示器

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 手动切换

可通过 `ref`调用 `prev`,`next` 进行切换

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 垂直方向

`direction` 自定义轮播方向

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 水平居中展示

`center` 代表可居中，同时必须传 `width`

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 垂直居中展示

`center` 代表可居中，同时必须传 `height`

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 一屏多个数据时

`center` 代表可居中，同时必须传 `height`

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Swiper

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 轮播卡片的宽度 | `number` \| `string` | `-` |
| height | 轮播卡片的高度 | `number` \| `string` | `-` |
| direction | 轮播方向 | `horizontal` \| `vertical` | `horizontal` |
| indicator | 分页指示器是否展示，可传入自定义的 HTML 结构 | `ReactNode` | `false` |
| loop | 是否循环轮播 | `boolean` | `true` |
| duration | 动画时长（单位是ms） | `number` \| `string` | `500` |
| autoPlay | 自动轮播时长，0表示不会自动轮播 | `number` \| `string` | `0` |
| defaultValue | 初始化索引值 | `number` \| `string` | `0` |
| touchable | 是否可触摸滑动 | `boolean` | `true` |
| preventDefault | 滑动过程中是否禁用默认事件 | `boolean` | `true` |
| stopPropagation | 滑动过程中是否禁止冒泡 | `boolean` | `true` |
| center | 是否居中展示，必须传对应的`width` 和 `height` | `boolean` | `false` |
| onChange | 卡片切换后的回调 | `(current: number) => void` | `-` |

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| prev | 切换到上一页 | `()=>void` |
| next | 切换到下一页 | `()=>void` |
| to | 切换到指定轮播 | `(index: number)=>void` |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | `()=>void` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | 分页器距离底部的距离 | `12px` |
