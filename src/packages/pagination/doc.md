# Pagination 分页

当数据量较多时，采用分页的形式分隔长列表。

## 引入

```tsx
import { Pagination } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

通过 value 来绑定当前页码时，组件为受控状态，分页显示取决于传入的 value ，一般搭配 onChange 使用。 不需要受控时，可通过 defaultValue 指定当前页码

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 简单模式

将 mode 设置为 "simple" 来切换到简单模式，此时分页器不会展示具体的页码按钮。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 极简模式

将 mode 设置为 "lite" 来切换到极简模式，可用于主图切换。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 胶囊数字型

将 mode 设置为 "lite" 且 indicatorType 为 "capsule"（默认），展示为白字加半透明遮罩背景的胶囊，常用于沉浸式图片浏览场景。配合 Swiper 使用，通过 Swiper 的 onChange 同步 value，页码与滑动状态实时同步。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 纯文本型

将 indicatorType 设置为 "text"，展示为纯文本页码（18px 加粗），常见于沉浸的顶部导航区内居中展示。

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 进度条指示型

将 indicatorType 设置为 "progress"，以等分进度条展示当前所处帧，当前帧高亮。配合 Swiper 的 loop 可实现自动轮播的首尾循环无缝切换。

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 胶囊数字型 & 进度条指示型

部分场景中，胶囊数字型与进度条指示型可同时存在。

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 显示省略号

设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定义按钮

通过itemRender传入自定义方法，入参数为`page:{ number:页数, text:"文本", active:"选中状态" }`

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 非受控方式

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Pagination

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前页码，受控值，与 onChange 搭配使用 | `number` | `-` |
| defaultValue | 默认页码，非受控 | `number` | `1` |
| mode | 显示模式 | `multi` \| `simple` \| `lite` | `multi` |
| indicatorType | 极简模式（lite）下的指示符类型 | `capsule` \| `text` \| `progress` | `capsule` |
| loop | 是否首尾循环切换（自动轮播场景） | `boolean` | `false` |
| prev | 自定义上一页按钮内容 | `ReactNode` | `上一页` |
| next | 自定义下一页按钮内容 | `ReactNode` | `下一页` |
| total | 总记录数 | `number` | `50` |
| pageSize | 每页记录数 | `number` | `10` |
| itemSize | 显示的页码个数 | `number` | `5` |
| ellipse | 是否显示省略号 | `boolean` | `false` |
| itemRender | 用于自定义页码的结构 | `(page: {number, text}) => ReactNode` | `-` |
| onChange | 页码改变时触发 | `(value) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-pagination-color | 页码字色 | `$color-primary` |
| \--nutui-pagination-font-size | 页码字号 | `$font-size-base` |
| \--nutui-pagination-item-border-color | 边框颜色 | `$color-border` |
| \--nutui-pagination-active-background-color | 当前页码的背景色 | `$color-primary` |
| \--nutui-pagination-disable-color | 不可用色 | `$color-text-disabled` |
| \--nutui-pagination-disable-background-color | 不可用背景色 | `#f7f8fa` |
| \--nutui-pagination-item-border-width | 边框宽度 | `1px` |
| \--nutui-pagination-item-border-radius | 边框圆角 | `2px` |
| \--nutui-pagination-prev-next-padding | padding 值 | `0 11px` |
| \--nutui-pagination-lite-width | lite模式下的宽度 | `40px` |
| \--nutui-pagination-lite-height | lite模式下的高度 | `20px` |
| \--nutui-pagination-lite-radius | lite模式下的圆角 | `12px` |
| \--nutui-pagination-lite-background-color | lite模式下的默认背景色 | `var(--nutui-black-7)` |
| \--nutui-pagination-lite-active-background-color | lite模式下的当前选中的背景色 | `var(--nutui-black-5)` |
| \--nutui-pagination-capsule-background-color | 胶囊数字型背景色 | `$color-mask-part` |
| \--nutui-pagination-capsule-color | 胶囊数字型文字色 | `$color-primary-text` |
| \--nutui-pagination-capsule-radius | 胶囊数字型圆角 | `$radius-xs` |
| \--nutui-pagination-capsule-padding | 胶囊数字型内边距 | `4px 6px` |
| \--nutui-pagination-capsule-font-size | 胶囊数字型字号 | `$font-size-xs` |
| \--nutui-pagination-text-color | 纯文本型文字色 | `$color-title` |
| \--nutui-pagination-text-font-size | 纯文本型字号 | `$font-size-xl` |
| \--nutui-pagination-text-font-weight | 纯文本型字重 | `600` |
| \--nutui-pagination-progress-height | 进度条指示型高度 | `2px` |
| \--nutui-pagination-progress-gap | 进度条指示型间距 | `$spacing-xxs` |
| \--nutui-pagination-progress-active-color | 进度条当前帧填充色 | `$color-primary-text` |
| \--nutui-pagination-progress-inactive-color | 进度条待切换帧填充色 | `var(--nutui-white-3)` |

<Contribution name="Pagination" />
