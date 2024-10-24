# Cell 单元格

列表项，可组成列表。

## 引入

```tsx
import { Cell } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定义内容

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定义标题区域

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定义右侧区域

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 垂直居中

通过 `align` 属性可以让 Cell 的左右内容都垂直居中。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 链接 | 分组用法

使用 `nut-cell-group` 支持 `title` 和 `description`

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 分组用法

通过 `divider` 属性可以让单元格之间不显示下边线。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Cell.Group

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 分组标题 | `ReactNode` | `-` |
| description | 分组描述 | `ReactNode` | `-` |
| divider | 单元格之间是否有分割线 | `boolean` | `true` |

## Cell

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `ReactNode` | `-` |
| description | 描述 | `ReactNode` | `-` |
| extra | 右侧描述 | `ReactNode` | `-` |
| radius | 圆角半径 | `string` | `6px` |
| align | 纵轴方向上的对齐方式 | `flex-start` \| `center` \| `flex-end` | `flex-start` |
| clickable | 点击的样式反馈 | `boolean` | `false` |
| onClick | 点击事件 | `onClick: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-cell-title-color | 单元格标题字体颜色 | `$color-title` |
| \--nutui-cell-title-font-size | 单元格标题字体大小 | `$font-size-base` |
| \--nutui-cell-description-color | 单元格描述字体颜色 | `$color-text` |
| \--nutui-cell-description-font-size | 单元格描述字体大小 | `$font-size-small` |
| \--nutui-cell-extra-color | 单元格右侧描述字体颜色 | `$color-text` |
| \--nutui-cell-extra-font-size | 单元格右侧描述字体大小 | `$font-size-base` |
| \--nutui-cell-border-radius | 单元格圆角大小 | `6px` |
| \--nutui-cell-padding | 单元格内边距 | `13px 16px` |
| \--nutui-cell-line-height | 单元格行高 | `20px` |
| \--nutui-cell-divider-left | 单元格分割线左边距 | `16px` |
| \--nutui-cell-divider-right | 单元格分割线右边距 | `16px` |
| \--nutui-cell-divider-border-bottom | 单元格分割线下边框 | `2px solid #f5f6f7` |
| \--nutui-cell-background-color | 单元格背景颜色 | `$white` |
| \--nutui-cell-box-shadow | 单元格阴影 | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-cell-group-title-padding | 单元格分组的标题内边距 | `0 10px` |
| \--nutui-cell-group-title-color | 单元格分组的标题字体颜色 | `#909ca4` |
| \--nutui-cell-group-title-font-size | 单元格分组的标题字体大小 | `$font-size-base` |
| \--nutui-cell-group-title-line-height | 单元格分组的标题行高 | `20px` |
| \--nutui-cell-group-description-padding | 单元格分组的描述内边距 | `0 10px` |
| \--nutui-cell-group-description-color | 单元格分组的描述颜色 | `#909ca4` |
| \--nutui-cell-group-description-font-size | 单元格分组的描述字体大小 | `$font-size-small` |
| \--nutui-cell-group-description-line-height | 单元格分组的描述行高 | `16px` |
| \--nutui-cell-group-background-color | 单元格分组的背景颜色 | `$white` |
| \--nutui-cell-group-wrap-margin | 单元格分组容器的外边距 | `10px 0` |
