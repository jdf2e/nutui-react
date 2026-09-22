# ActionSheet

Action menu panel that pops up from the top or bottom.

## Import

```tsx
import { ActionSheet } from '@nutui/nutui-react'
```

## Demo

### Basic usage

Displayed as a list when popping up from the bottom. When any item in `options` has an `icon` field, the list switches to a left-aligned icon-list layout.

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Show Cancel Button

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Display Description Information

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Option Status

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom content

Customize the panel content via `children`. Here `Checkbox` is reused to build a multi-select filter list, supporting both checkbox-left and checkbox-right layouts. Click the "清空筛选" title to clear the current selection.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom key

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Top Popup

Pop up from the top via `position="top"`. Content is displayed as a grid, and `options` support an `icon` field (a string is rendered with `img`, or a custom node can be passed). The grid layout can also be used for bottom popups via `layout="grid"`; `columns` only supports `4` or `5`, and `4` gives wider horizontal spacing.

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## ActionSheet

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Mask layer visible | `boolean` | `false` |
| title | Set panel title | `ReactNode` | `-` |
| titleAlign | Title alignment, `left` \| `center`; `description` only takes effect when `center` | `string` | `center` |
| description | Set panel subtitle/description | `ReactNode` | `-` |
| headerLeft | Custom content on the left of the header | `ReactNode` | `-` |
| headerRight | Custom content on the right of the header | `ReactNode` | `-` |
| position | Popup position, `top` \| `bottom`; displayed as a grid when `top` | `string` | `bottom` |
| layout | Content layout; inferred from `position` when omitted (`top`→`grid`, `bottom`→`list`) | `grid` \| `list` | `-` |
| cancelText | Cancel Text, rendered as a "collapse" button when `top` | `ReactNode` | `Cancel` |
| options | Menu Item | `Array` | `[]` |
| optionKey | Menu Item Custom key | `{ [key: string]: string }` | `-` |
| columns | Grid columns, only supports `4` or `5` | `4` \| `5` | `5` |
| closeable | Whether to show the close button | `boolean` | `false` |
| onSelect | Triggered after selection | `(item: any, index: number) => void` | `-` |
| onCancel | Triggered when onCancel copy is clicked | `() => void` | `-` |

### options

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | Title key of the menu item | `string` | `-` |
| description | Description key of the menu item | `string` | `-` |
| icon | Icon key of the menu item, supported in both top grid and bottom list; the bottom list switches to icon-list layout when `icon` is present | `ReactNode` \| `string` | `-` |
| danger | Highlight color | `string` | `$color-primary` |
| disabled | Disabled status | `string` | `$disabled-color` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-actionsheet-background-color | the backgroundColor of actionsheet panel | `$color-background-overlay` |
| \--nutui-actionsheet-border-radius | the borderRadius of list and cancel button | `0` |
| \--nutui-actionsheet-item-text-align | item text align | `center` |
| \--nutui-actionsheet-item-border-bottom | item border bottom | `$color-border` |
| \--nutui-actionsheet-item-line-height | item line height | `24px` |
| \--nutui-actionsheet-item-color | item color | `$color-title` |
| \--nutui-actionsheet-item-danger | item danger color | `$color-primary` |
| \--nutui-actionsheet-header-padding | header padding | `16px` |
| \--nutui-actionsheet-title-color | header title color | `$color-title` |
| \--nutui-actionsheet-title-font-size | header title font size | `$font-size-xl` |
| \--nutui-actionsheet-description-color | header description color | `$color-text-help` |
| \--nutui-actionsheet-description-font-size | header description font size | `$font-size-s` |
| \--nutui-actionsheet-grid-padding | grid container padding | `16px` |
| \--nutui-actionsheet-grid-gap | grid item gap | `16px` |
| \--nutui-actionsheet-grid-item-width | grid item width | `50px` |
| \--nutui-actionsheet-grid-text-color | grid text color | `$color-text` |
| \--nutui-actionsheet-grid-text-font-size | grid text font size | `12px` |
| \--nutui-actionsheet-grid-text-line-height | grid text line height | `18px` |

<Contribution name="ActionSheet" />
