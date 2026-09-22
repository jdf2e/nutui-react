# ActionSheet 动作面板

从顶部或底部弹出的动作菜单面板。

## 引入

```tsx
import { ActionSheet } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

底部弹出时以列表展示。当 `options` 中存在 `icon` 字段时，列表自动切换为左对齐的图标列表布局。

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 展示取消按钮

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 展示描述信息

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 选项状态

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义内容

通过 `children` 自定义面板内容。此处复用 `Checkbox` 实现清空筛选的多选列表，支持勾选框居左、居右两种布局，点击标题「清空筛选」可清空已选项。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义key

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 顶部弹出

通过 `position="top"` 从顶部弹出，内容以网格形式展示，`options` 支持 `icon` 字段（字符串使用 `Image` 渲染，也可传入自定义节点）。网格布局也可通过 `layout="grid"` 用于底部弹出；`columns` 仅支持 `4` 或 `5`，为 `4` 时左右间距更宽。

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

## ActionSheet

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 遮罩层可见 | `boolean` | `false` |
| title | 设置列表面板标题 | `ReactNode` | `-` |
| titleAlign | 标题对齐方式，`left` \| `center`，仅 `center` 时 `description` 生效 | `string` | `center` |
| description | 设置列表面板副标题/描述 | `ReactNode` | `-` |
| headerLeft | 头部左侧自定义内容 | `ReactNode` | `-` |
| headerRight | 头部右侧自定义内容 | `ReactNode` | `-` |
| position | 弹出位置，`top` \| `bottom`，`top` 时以网格展示 | `string` | `bottom` |
| layout | 内容布局方式，不传时按 `position` 推导（`top`→`grid`、`bottom`→`list`） | `grid` \| `list` | `-` |
| options | 列表项 | `Array` | `[]` |
| optionKey | 列表项的自定义设置 | `{ [key: string]: string }` | `-` |
| columns | 网格列数，仅支持 `4` 或 `5` | `4` \| `5` | `5` |
| cancelText | 取消文案，`top` 时渲染为「点击收起」按钮 | `ReactNode` | `取消` |
| closeable | 是否显示关闭按钮 | `boolean` | `false` |
| onSelect | 选择之后触发 | `(item: any, index: number) => void` | `-` |
| onCancel | 点击取消文案时触发 | `() => void` | `-` |

### options

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 列表项的标题key值 | `string` | `-` |
| description | 列表项的描述key值 | `string` | `-` |
| icon | 列表项的图标key值，顶部网格与底部列表均支持，底部列表存在 `icon` 时自动切换为图标列表布局 | `ReactNode` \| `string` | `-` |
| danger | 高亮颜色 | `string` | `$color-primary` |
| disabled | 禁用状态 | `string` | `$disabled-color` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-actionsheet-background-color | 背景色 | `$color-background-overlay` |
| \--nutui-actionsheet-border-radius | 列表和取消按钮圆角 | `0` |
| \--nutui-actionsheet-item-text-align | 列表项的文字对齐方式 | `center` |
| \--nutui-actionsheet-item-border-bottom | 列表项的底部border | `$color-border` |
| \--nutui-actionsheet-item-line-height | 列表项行高 | `24px` |
| \--nutui-actionsheet-item-color | 列表项字色 | `$color-title` |
| \--nutui-actionsheet-item-danger | 列表项danger字色 | `$color-primary` |
| \--nutui-actionsheet-header-padding | 头部内边距 | `16px` |
| \--nutui-actionsheet-title-color | 头部标题字色 | `$color-title` |
| \--nutui-actionsheet-title-font-size | 头部标题字号 | `$font-size-xl` |
| \--nutui-actionsheet-description-color | 头部描述字色 | `$color-text-help` |
| \--nutui-actionsheet-description-font-size | 头部描述字号 | `$font-size-s` |
| \--nutui-actionsheet-grid-padding | 网格容器内边距 | `16px` |
| \--nutui-actionsheet-grid-gap | 网格项间距 | `16px` |
| \--nutui-actionsheet-grid-item-width | 网格项宽度 | `50px` |
| \--nutui-actionsheet-grid-text-color | 网格文字字色 | `$color-text` |
| \--nutui-actionsheet-grid-text-font-size | 网格文字字号 | `12px` |
| \--nutui-actionsheet-grid-text-line-height | 网格文字行高 | `18px` |

<Contribution name="ActionSheet" />
