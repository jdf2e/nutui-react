# Cell

The cell is a single display item in the list.

## Import

```tsx
import { Cell } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Customize Content

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Customize the title area

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Customize the right area

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Vertical Center

You can align the left and right contents of the cell vertically through the 'center' attribute.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Link | Cell.Group Usage

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Grouping usage

The 'divider' property allows you to keep the lower edge from being displayed between cells.

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Cell.Group

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `ReactNode` | `-` |
| description | ReactNode | `string` | `-` |
| divider | Whether there are dividers between cells | `boolean` | `true` |

## Cell

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `ReactNode` | `-` |
| description | Description | `ReactNode` | `-` |
| extra | Extra | `ReactNode` | `-` |
| radius | Corner radius | `string` | `6px` |
| align | Alignment in the vertical direction | `flex-start` \| `center` \| `flex-end` | `flex-start` |
| clickable | click style feedback | `boolean` | `false` |
| onClick | Emitted when cell is clicked | `onClick: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-cell-title-color | The cell title the font color | `$color-title` |
| \--nutui-cell-title-font-size | The cell title the font size | `$font-size-base` |
| \--nutui-cell-description-color | The cell describes the font color | `$color-text` |
| \--nutui-cell-description-font-size | The cell describes the font size | `$font-size-small` |
| \--nutui-cell-extra-color | The right side of the cell describes the font color | `$color-text` |
| \--nutui-cell-extra-font-size | The right side of the cell describes the font size | `$font-size-base` |
| \--nutui-cell-border-radius | The rounded corner size of the cell | `6px` |
| \--nutui-cell-padding | Inside margins of cells | `13px 16px` |
| \--nutui-cell-line-height | The row height of the cell | `20px` |
| \--nutui-cell-divider-left | Left margin of cell divider | `16px` |
| \--nutui-cell-divider-right | ArrowRight margin of cell divider | `16px` |
| \--nutui-cell-divider-border-bottom | Border bottom of cell divider | `2px solid #f5f6f7` |
| \--nutui-cell-background-color | The background color of the cell | `$white` |
| \--nutui-cell-box-shadow | The shadow of the cell | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-cell-group-title-padding | The padding of the title of the cell group | `0 10px` |
| \--nutui-cell-group-title-color | The title font color of the cell group | `#909ca4` |
| \--nutui-cell-group-title-font-size | The title font size of the cell group | `$font-size-base` |
| \--nutui-cell-group-title-line-height | The title row height of the cell group | `20px` |
| \--nutui-cell-group-description-padding | The description padding for cell groups | `0 10px` |
| \--nutui-cell-group-description-color | The description color of the cell group | `#909ca4` |
| \--nutui-cell-group-description-font-size | The description font size of the cell group | `$font-size-small` |
| \--nutui-cell-group-description-line-height | The description row height of cell group | `16px` |
| \--nutui-cell-group-background-color | The background color of the cell group | `$white` |
| \--nutui-cell-group-wrap-margin | The margin of the cell group wrap | `10px 0` |
