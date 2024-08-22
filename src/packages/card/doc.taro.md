# Card 商品卡片

商品卡片，用于展示商品的图片、价格等信息

## 引入

```tsx
import { Card, Price, Tag } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 自定义商品标签

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 价格后自定义标签

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 自定义店铺介绍

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义右下角内容

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 不显示价格和店铺

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## Card

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 左侧图片 Url | `string` | `-` |
| title | 标题 | `string` | `-` |
| price | 商品价格 | `string` | `-` |
| vipPrice | 会员价格 | `string` | `-` |
| shopDescription | 店铺介绍 | `string` | `-` |
| delivery | 配送方式 | `string` | `-` |
| shopName | 店铺名称 | `string` | `-` |
| description | 自定义商品介绍 | `ReactNode` | `-` |
| priceTag | 价格后方自定义内容 | `ReactNode` | `-` |
| tag | 店铺介绍自定义 | `ReactNode` | `-` |
| extra | 右下角内容自定义 | `ReactNode` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-card-border-radius | 卡片、图片的圆角大小 | `4px` |
