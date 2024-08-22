# Pagination

When the amount of data is too much, use pagination to separate the data.

## Import

```tsx
import { Pagination } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

When the current page number is bound by `value`, the component is in a controlled state, and the paging display depends on the incoming `value`, which is generally used with `onChange`. When it does not need to be controlled, the current page number can be specified through `defaultValue`

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Simple mode

Pagination can be switched to simple mode with simple mode attribute, and pagination cann't display specific page buttons.

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Lite Mode

Pagination can be switched to lite mode with lite mode attribute, and you can use when it's swiper and so on.

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Show ellipses

The ellipses button will display after with force-ellipses attribute, click it can jump quickly

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom Button

Pass in a custom method through itemRender, parameters: `{ number: "page number", text: "page text", active: "active page" }`

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Uncontrolled Mode

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Pagination

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | current page number, controlled value | `number` | `-` |
| defaultValue | default page number, uncontrolled value | `number` | `1` |
| mode | Display mode | `multi` \| `simple` \| `lite` | `multi` |
| prev | Customize previous page button content | `ReactNode` | `Previous` |
| next | Customize next page button content | `ReactNode` | `Next` |
| total | total | `number` | `50` |
| pageSize | records per page | `number` | `10` |
| itemSize | number of pages displayed | `number` | `5` |
| ellipse | Whether to show ellipsis | `boolean` | `false` |
| itemRender | Used to customize page number content | `(page: {number, text}) => ReactNode` | `-` |
| onChange | when the page number changes | `(value) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-pagination-color | font color | `$color-primary` |
| \--nutui-pagination-font-size | font size | `$font-size-base` |
| \--nutui-pagination-item-border-color | border color | `$color-border` |
| \--nutui-pagination-active-background-color | background color of current page | `$color-primary` |
| \--nutui-pagination-disable-color | disable color | `$color-text-disabled` |
| \--nutui-pagination-disable-background-color | disable background color | `#f7f8fa` |
| \--nutui-pagination-item-border-width | border width | `1px` |
| \--nutui-pagination-item-border-radius | border radius | `2px` |
| \--nutui-pagination-prev-next-padding | padding | `0 11px` |
| \--nutui-pagination-lite-width | lite mode width | `40px` |
| \--nutui-pagination-lite-height | lite mode height | `20px` |
| \--nutui-pagination-lite-radius | lite mode radius | `12px` |
| \--nutui-pagination-lite-background-color | lite mode background color | `var(--nutui-black-7)` |
| \--nutui-pagination-lite-active-background-color | lite mode background color of current page | `var(--nutui-black-5)` |
