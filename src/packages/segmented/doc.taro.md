# Segmented 组件

用于带页面类型区分的内容型卡片切换，如主图视频、图文切换。

## 引入

```tsx
import { Segmented } from '@nutui/nutui-react-taro'
```

## 示例代码

### 非受控

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 图标

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## Segmented

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 | `string \| number` | `-` |
| defaultValue | 默认值 | `string \| number` | `-` |
| options | 选项内容 | `string[] \| number[]\| SegmentedItem[]` | `-` |
| onChange | 选项变化时的回调函数 | `(value: string \| number) => void` | `-` |

### SegmentedItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 分段项的显示文本 | `ReactNode` | `-` |
| value | 分段项的值 | `string \| number` | `-` |
| disabled | 分段项的禁用状态 | `boolean` | `false` |
| icon | 分段项的显示图标 | `ReactNode` | `-` |
| className | 自定义类名 | `string` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-segmented-padding | 分段选择器内边距 | `$spacing-xxxs` |
| \--nutui-segmented-radius | 分段选择器圆角 | `$radius-xs` |
| \--nutui-segmented-background | 分段选择器背景色 | `$color-mask-part` |
| \--nutui-segmented-item-padding | 分段选择器选项内边距 | `$spacing-xxs $spacing-xs` |
| \--nutui-segmented-item-radius | 分段选择器选项圆角 | `$spacing-xxs $spacing-xs` |
| \--nutui-segmented-item-fontsize | 分段选择器选项字号 | `$font-size-s` |
| \--nutui-segmented-item-color | 分段选择器选项文本颜色 | `$color-primary-text` |
| \--nutui-segmented-active-background | 分段选择器选项选中的背景颜色 | `$color-mask-part` |
| \--nutui-segmented-icon-margin-right | 分段选择器选项选间距 | `$color-mask-part` |
