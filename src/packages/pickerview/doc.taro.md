# PickerView 选择器视图

PickerView 是 Picker 的内容区域。

## 引入

```tsx
import { PickerView } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义高度

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 多列

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 平铺

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 级联

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## PickerView

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 列表数据 | `PickerOptions[]` | `[]` |
| value | 选中值，受控 | `PickerValue[]` | `[]` |
| defaultValue | 默认选中 | `PickerValue[]` | `[]` |
| threeDimensional | 是否开启3D效果 | `boolean` | `true` |
| duration | 快速滑动时惯性滚动的时长，单位 ms | `string` \| `number` | `1000` |
| onChange | 每一列值变更时调用 | `({value, index, selectedOptions}) => void` | `-` |

### PickerOption

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 选项的文字内容 | `string` \| `number` | `-` |
| value | 选项对应的值，且唯一 | `string` \| `number` | `-` |
| children | 用于级联选项 | `PickerOptions` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-picker-item-height | 面板每条数据高度 | `36px` |
| \--nutui-picker-item-text-color | 面板每条数据的字色 | `$color-title` |
| \--nutui-picker-item-text-font-size | 面板每条数据的字号 | `$font-size-base` |
| \--nutui-picker-item-active-line-border | 面板当前选中的border值 | `1px solid $color-border` |
| \--nut-picker-mask-background | 面板遮挡区渐变值 | `linear-gradient(180deg, var(--nutui-white-12), var(--nutui-white-7)),linear-gradient(0deg, var(--nutui-white-12), var(--nutui-white-7))` |
