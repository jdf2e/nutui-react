# Tour 引导

#

用于引导用户了解产品功能的气泡组件。

## 引入

```tsx
import { Tour } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定义样式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 设置偏移量

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定义内容

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 步骤引导

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Tour

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否展示引导弹出层 | `boolean` | `false` |
| type | 引导类型 | `step` \| `tile` | `step` |
| list | 引导步骤内容 | `TourList[]` | `-` |
| offset | 镂空遮罩相对于目标元素的偏移量 | `number[]` | `[8, 10]` |
| location | 弹出层位置,同 Popopver 的[location 属性](https://nutui.jd.com/h5/react/2x/#/zh-CN/component/popover) | `string` | `bottom` |
| next | 下一步按钮文案 | `ReactNode` | `''` |
| prev | 上一步按钮文案 | `ReactNode` | `''` |
| complete | 完成按钮文案 | `ReactNode` | `''` |
| mask | 是否显示镂空遮罩 | `boolean` | `true` |
| maskWidth | 镂空遮罩层宽度 | `number` \| `string` | `''` |
| maskHeight | 镂空遮罩层高度 | `number` \| `string` | `''` |
| closeOnOverlayClick | 是否在点击镂空遮罩层后关闭,同 Popopver 的[closeOnClickOverlay 属性](https://nutui.jd.com/h5/react/2x/#/zh-CN/component/popover) | `boolean` | `true` |
| showPrev | 是否展示上一步按钮 | `boolean` | `true` |
| title | 是否展示标题栏 | `ReactNode` | `''` |
| onClose | 气泡层关闭时触发 | `(e: MouseEvent<HTMLDivElement>) => void` | `-` |
| onChange | 切换步骤时触发 | `(value: number) => void` | `-` |

### TourList

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 目标对象 | `Element` \| `string` | `-` |
| content | 气泡层内容 | `string` | `-` |
| location | 弹出层位置 | `string` | `-` |
| popoverOffset | 气泡层偏移量 | `number[]` | `-` |
| arrowOffset | 小箭头的偏移量 | `number` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-tour-mask-border-radius | 遮罩层的border-radius值 | `10px` |
| \--nutui-tour-content-min-width | 内容区的min-width值 | `200px` |
| \--nutui-tour-content-padding | 内容区的padding值 | `10px 12px` |
| \--nutui-tour-content-inner-margin | 内容区内部的margin值 | `10px 0px` |
| \--nutui-tour-content-inner-font-size | 内容区内部的font-size值 | `14px` |
| \--nutui-tour-content-bottom-margin-top | 内容区底部的margin-top值 | `10px` |
| \--nutui-tour-content-bottom-btn-margin-left | 内容区底部按钮的margin-left值 | `4px` |
| \--nutui-tour-content-bottom-btn-padding | 内容区底部按钮的padding值 | `2px 4px` |
| \--nutui-tour-content-bottom-btn-font-size | 内容区底部按钮的font-size值 | `12px` |
| \--nutui-tour-content-bottom-btn-border-radius | 内容区底部按钮的border-radius值 | `4px` |
