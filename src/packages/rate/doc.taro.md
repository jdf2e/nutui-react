# Rate 评分

用于快速的评级操作，或对评价进行展示。

## 引入

```tsx
import { Rate } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 受控方式

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 半星

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 自定义 icon

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义数量

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 最少选中数量（支持半星）

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 自定义颜色

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 禁用状态

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 只读状态

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

### 绑定事件

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

### 滑动选择

:::demo

<CodeBlock src='taro/demo11.tsx'></CodeBlock>

:::

### 滑动事件

:::demo

<CodeBlock src='taro/demo12.tsx'></CodeBlock>

:::

## Rate

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 非受控的 star 默认值 | `number` | `0` |
| value | 受控的 star 数值 | `number` | `0` |
| count | star 总数 | `number` | `5` |
| min | 最少选中star数量 | `number` | `0` |
| uncheckedIcon | 使用图标(未选中) | `ReactNode` | `star-n` |
| checkedIcon | 使用图标(选中) | `ReactNode` | `star-n` |
| allowHalf | 是否半星 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| touchable | 是否允许滑动选择 ｜ `boolean` | `false` |
| onChange | 当前 star 数修改时触发 | `(value: number) => void` | `-` |
| onTouchEnd | touch 滑动结束时触发 | `(event: TouchEvent, value: number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-rate-item-margin | 间距 | `14px` |
| \--nutui-rate-icon-color | icon 激活颜色 | `$color-primary` |
| \--nutui-rate-icon-inactive-color | icon 未激活颜色 | `$color-text-disabled` |
