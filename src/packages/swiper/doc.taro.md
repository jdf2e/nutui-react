# Swiper 轮播

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

## 引入

```tsx
import { Swiper } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 异步加载

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义大小

`width` 自定义轮播大小

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 自定义分页指示器

`pageContent` 表示自定义指示器

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 手动切换

可通过 `API`(`prev`,`next`)进行手动切换

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 垂直方向

`direction` 自定义轮播方向

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 水平居中展示

`isCenter` 代表可居中，同时必须传 `width`

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 垂直居中展示

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 一屏多个数据时

`center` 代表可居中，同时必须传 `height`

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

## Swiper

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 轮播卡片的宽度 | `number` | `-` |
| height | 轮播卡片的高度 | `number` | `-` |
| direction | 轮播方向 | `horizontal` \| `vertical` | `horizontal` |
| indicator | 分页指示器是否展示 | `boolean` | `false` |
| loop | 是否循环轮播 | `boolean` | `true` |
| autoPlay | 自动轮播 | `boolean` | `false` |
| defaultValue | 初始化索引值 | `number` | `0` |
| onChange | 卡片切换后的回调 | `CommonEventFunction<TaroSwiperProps.onChangeEventDetail>` | `-` |

> Swiper 是对 Taro Swiper 进行的封装，可以支持 Taro Swiper 属性的透传。具体支持属性可参考[https://taro-docs.jd.com/docs/components/viewContainer/swiper](https://taro-docs.jd.com/docs/components/viewContainer/swiper)

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| prev | 切换到上一页 | `()=>void` |
| next | 切换到下一页 | `()=>void` |
| to | 切换到指定轮播 | `(index: number)=>void` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | 分页器距离底部的距离 | `12px` |
