# Table

Used for displaying basic tables.

## Import

```tsx
import { Table } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Whether To Display Border And Align Text

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Show Summary Bar

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Stripes, Alternating Light And Shade

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Hide Table Header

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Default Display When No Data, Supports Customization

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom Cell

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Supports Asynchronous Rendering(See the effect after 5s)

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Supports Sorting

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### Supports Replacing Sorting ICON

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Sticky Header

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### Sticky Left Column

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### Sticky Right Column

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## Table

### Props

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| bordered | Whether to show borders | `boolean` | `true` |
| columns | Header data | `TableColumnProps[]` | `[]` |
| data | Table data | `Object[]` | `[]` |
| summary | Whether to show summary | `ReactNode` | `-` |
| striped | Whether stripes are alternating light and dark | `boolean` | `false` |
| showHeader | Whether to show the header | `boolean` | `true` |
| noData | Customize when no data | `ReactNode` | `-` |
| onSort | Triggered when the sort button is clicked | `item: TableColumnProps, data: Array<any>` | `-` |
| sorterIcon | Sorting icon | `ReactNode` | `<ArrowDown />` |

### TableColumnProps

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| key | Unique identifier for the column | `string` | `-` |
| title | Header title | `string` | `-` |
| align | Alignment of the column | `left` \| `center` \| `right` | `left` |
| sorter | Sorting, optional values are true, function, default, where default indicates that it may rely on an interface after clicking, function can return a specific sorting function, default indicates using the default sorting algorithm | `boolean` \| `Function` \| `string` | `-` |
| render | Custom rendering of column data, priority is high | `Function(record)` | `-` |
| width | Column width | `number` | `auto` |
| fixed | Fixed position | `left` \| `right` | `-` |

## Theme Customization

### Style Variables

The component provides the following CSS variables, which can be used for custom styling. For how to use, please refer to [ConfigProvider component](#/zh-CN/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-table-border-color | Border color of the table | `#ececec` |
| \--nutui-table-cols-padding | Padding value of table columns | `10px` |
| \--nutui-table-tr-even-background-color | Background color of even table rows | `$color-background` |
| \--nutui-table-tr-odd-background-color | Background color of odd table rows | `$white` |
| \--nutui-table-sticky-left-shadow | Shadow on the fixed left side of the table | `4px 0 8px 0 rgba(0, 0, 0, 0.1)` |
| \--nutui-table-sticky-right-shadow | Shadow on the fixed right side of the table | `-4px 0 8px 0 rgba(0, 0, 0, 0.1)` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ATable)

### Component Logs

- 🐛 fix(Table): 给个默认背景色，解决在小程序中固定列与滚动内列混合 ([#2789](https://github.com/jdf2e/nutui-react/pull/2789)) `v2.7.2`
- 💡 🏡 chore(demo): display bound dispatchSetState in demo8 of table demos ([#2626](https://github.com/jdf2e/nutui-react/pull/2626)) `v2.6.22`
- 💡 🏡 chore: run md-table-format when git commit changes ([#2484](https://github.com/jdf2e/nutui-react/pull/2484)) @Alex-huxiyang `v2.6.15`
- 💡 🪵 refactor: table ([#2473](https://github.com/jdf2e/nutui-react/pull/2473)) @zanyuki-jd `v2.6.15`
- ✨ feat(table): table新增自定义行 ([#2390](https://github.com/jdf2e/nutui-react/pull/2390)) @zanyuki-jd `v2.6.11`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=table&expanded=true)
