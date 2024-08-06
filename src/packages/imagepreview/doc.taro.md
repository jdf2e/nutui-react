# ImagePreview组件

支持全屏预览视频和图片，可函数式调用

## 引入

```tsx
import { ImagePreview } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 点击缩略图切换

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 设置初始页码

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 受控模式

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 设置轮播指示器及颜色

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 视频、图片预览

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 关闭按钮

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

## ImagePreview

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否展示预览图片 | `boolean` | `false` |
| videos | 预览的视频数组（视频自动放到图片之前） | `Array<Object>` | `[]` |
| images | 预览图片数组 | `{ src: string; index?: number }[]` | `[]` |
| autoPlay | 自动轮播时长，0表示不会自动轮播 | `number` \| `string` | `3000` |
| defaultValue | 初始页码 | `number` | `1` |
| value | 页码，受控 | `number` | `1` |
| pagination | 分页是否展示 | `boolean` | `true` |
| indicator | 分页指示器是否展示 | `boolean` | `false` |
| indicatorColor | 分页指示器选中的颜色 | `string` | `#fff` |
| showMenuByLongpress | 开启长按图片显示识别小程序码菜单 | `boolean` | `false` |
| closeOnContentClick | 点击图片可以退出预览 | `boolean` | `false` |
| closeIcon | 关闭按钮 | `boolean` \| `ReactNode` | `false` |
| closeIconPosition | 关闭按钮位置 | `top-right` \| `top-left` \| `bottom` | `top-right` |
| onChange | 切换时触发 | `(value:number) => void` | `-` |
| onClose | 点击遮罩关闭图片预览时触发 | `() => void` | `-` |
