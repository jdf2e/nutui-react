# Range 区间选择器

滑动输入条，用于在给定的范围内选择一个值。

## 引入

```tsx
import { Range } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控方式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定义描述

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 双滑块

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 指定范围

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 设置步长

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 隐藏范围

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 隐藏标签

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 禁用

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 自定义样式

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 自定义按钮

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 垂直方向

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### 刻度标记

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## Range

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认进度百分比，非受控 | `number` \| `number[]` | `0` |
| value | 当前进度百分比，受控 | `number` \| `number[]` | `0` |
| range | 是否开启双滑块模式 | `boolean` | `false` |
| max | 最大值 | `number` | `100` |
| min | 最小值 | `number` | `0` |
| maxDescription | 最大值描述，传 `null` 表示隐藏 | `ReactNode` | `-` |
| minDescription | 最小值描述，传 `null` 表示隐藏 | `ReactNode` | `-` |
| currentDescription | 当前值描述，传 `null` 表示隐藏 | `((value) => ReactNode)` \| `null` | `-` |
| step | 步长 | `number` | `1` |
| disabled | 是否禁用滑块 | `boolean` | `false` |
| vertical | 是否竖向展示 | `boolean` | `false` |
| marks | 刻度标示 | `Object{key: number}` | `{}` |
| button | 自定义滑动按钮 | `ReactNode` | `-` |
| onChange | 进度实时变化，通常在受控方式中与 value 一起使用 | `(value) => void` | `-` |
| onStart | 开始拖动时触发 | `-` | `-` |
| onEnd | 结束拖动时触发 | `(value) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-range-color | 字体颜色 | `$color-title` |
| \--nutui-range-margin | 进度条外边距 | `15px` |
| \--nutui-range-height | 进度条的宽度 | `4px` |
| \--nutui-range-active-color | 激活颜色 | `$color-primary` |
| \--nutui-range-inactive-color | 未激活颜色 | `#fa958c` |
| \--nutui-range-button-background | 按钮背景 | `$white` |
| \--nutui-range-button-width | 按钮宽度 | `24px` |
| \--nutui-range-button-height | 按钮高度 | `24px` |
| \--nutui-range-button-border | 按钮边框 | `1px solid $color-primary` |
