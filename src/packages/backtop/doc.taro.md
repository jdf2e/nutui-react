# BackTop 返回顶部

提供较长的页面快捷返回顶部功能。

## 引入

```tsx
import { BackTop } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 设置出现位置

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义样式

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### click事件

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 鸿蒙端使用

由于不支持 fixed 定位，需配合 ScrollView 进行使用。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 有底部导航栏的情况

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## BackTop

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| threshold | 页面垂直滚动多高后出现 | `number` | `200` |
| zIndex | 设置组件页面层级 | `number` | `900` |
| duration | 设置动画持续时间，为 0 时表示无动画 | `number` | `1000` |
| tabbarHeight | 底部导航条高度，用于适配底部导航栏遮挡场景 | `number` | `-` |
| icon | 自定义图标 | `ReactNode` | `-` |
| scrollRes | 被监听容器滚动时的回调参数 | `PageScrollObject` | `-` |
| onClick | 按钮点击时触发事件 | `(event: ITouchEvent) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-backtop-border-color | 边框颜色 | `$color-border` |
| \--nutui-backtop-background-color | 背景颜色 | `$color-background-overlay` |
| \--nutui-backtop-size | 按钮尺寸 | `40px` |
| \--nutui-backtop-right | 距离右侧距离 | `10px` |
| \--nutui-backtop-bottom | 距离底部距离 | `20px` |

<Contribution name="BackTop" />
