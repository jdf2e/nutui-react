# Progress 进度条

展示操作或任务的当前进度。

## 引入

```tsx
import { Progress } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 设置颜色与宽度

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 显示百分比

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 自定义显示内容

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义尺寸

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 状态显示

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 动态改变

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 延迟加载数据

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

## Progress

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 百分比 | `number` | `0` |
| color | 进度条线条颜色 | `string` | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)` |
| background | 进度条背景颜色 | `string` | `#f3f3f3` |
| strokeWidth | 进度条宽度 | `string` | `-` |
| showText | 是否显示文字内容 | `boolean` | `false` |
| animated | 是否展示动画效果 | `boolean` | `false` |
| lazy | 每次进入可视区展示进度条动画 | `boolean` | `false` |
| delay | 延迟数据加载时长，单位 ms | `number` | `0` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-progress-height | 进度条宽度 | `10px` |
| \--nutui-progress-border-radius | 进度条边框圆角 | `12px` |
| \--nutui-progress-color | 进度条颜色 | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)` |
| \--nutui-progress-background | 进度条背景色 | `#f3f3f3` |
| \--nutui-progress-text-color | 文本颜色 | `$color-primary-text` |
| \--nutui-progress-text-padding | 文本内边距 | `0 5px` |
| \--nutui-progress-text-font-size | 文本字体大小 | `9px` |
| \--nutui-progress-text-position-top | 文本定位 top | `-4px` |
| \--nutui-progress-text-position-bottom | 文本定位 bottom | `-4px` |
| \--nutui-progress-text-border-radius | 文本边框圆角 | `5px` |
| \--nutui-progress-text-background | 文本背景颜色 | `$progress-color` |
