# Picker 选择器

提供多个选项集合供用户选择其中一项。

## 引入

```tsx
import { Picker } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 默认选中项

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 多列样式

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 平铺展示

通过设置 `threeDimensional` 取消 3D 展示效果，并且通过设置 `duration` 可以控制快速滚动的时长。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 多级联动

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 异步获取

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 自定义主题

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

## Picker

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否可见 | `boolean` | `false` |
| title | 设置标题 | `string` | `-` |
| options | 列表数据 | `Array` | `[]` |
| value | 选中值，受控 | `Array` | `[]` |
| defaultValue | 默认选中 | `Array` | `[]` |
| threeDimensional | 是否开启3D效果 | `boolean` | `true` |
| duration | 快速滑动时惯性滚动的时长，单位 ms | `string` \| `number` | `1000` |
| popupProps | 透传popup属性 | `object` | `-` |
| closeOnOverlayClick | 是否点击遮罩关闭 | `boolean` | `true` |
| onConfirm | 点击确认按钮时候回调 | `(options, value) => void` | `-` |
| onChange | 每一列值变更时调用 | `(options, value) => void` | `-` |
| onCancel | 点击取消按钮时触发 | `() => void` | `-` |
| onClose | 确定和取消时，都触发 | `(options, value) => void` | `-` |
| afterClose | 联动时，关闭时回调 | `(options, value) => void` | `-` |

### options 数据结构

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 选项的文字内容 | `string` \| `number` | `-` |
| value | 选项对应的值，且唯一 | `string` \| `number` | `-` |
| children | 用于级联选项 | `Array` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-picker-title-cancel-color | 取消文案的色值 | `$text-color` |
| \--nutui-picker-title-cancel-font-size | 取消字号 | `14px` |
| \--nutui-picker-title-ok-color | 確認文案的色值 | `$color-primary` |
| \--nutui-picker-title-ok-font-size | 确认字号 | `14px` |
| \--nutui-picker-list-height | 面板高度 | `252px` |
| \--nutui-picker-item-height | 面板每一条数据高度 | `36px` |
| \--nutui-picker-item-text-color | 面板每一条数据的字色 | `$color-title` |
| \--nutui-picker-item-text-font-size | 面板每条数据字号 | `14px` |
| \--nutui-picker-item-active-line-border | 面板当前选中的border值 | `1px solid #d8d8d8` |
