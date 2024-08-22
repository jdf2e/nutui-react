# Tabs

It is often used for the storage and display of large blocks of content in the level area, and supports the form of embedded tags and rendering loop data.

## Import

```tsx
import { Tabs } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Basic Usage-Smile Curve

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Basic Usage-Simple Mode

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Basic Usage-Card Mode

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Basic Usage-Button Mode

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Basic Usage-Divider Mode

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Title Left Align

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Title Left Align-Card Mode

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Title Left Align-Button Mode

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### Title Left Align-Divider Mode

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Match By Value

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### Slide To Switch

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### CSS Sticky

By setting the style of the tab, for example: `tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}` , realize the sticky layout of CSS. Note: In the WeChat applet, the outer elements of the component cannot have overflow. Settings for hidden, auto, and scroll.

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

### Tabpane Auto Height

When autoHeight is set to true, nut-tabs and nut-tabs\_\_content will change with the current height of nut-tabpane.

:::demo

<CodeBlock src='h5/demo14.tsx'></CodeBlock>

:::

### Data Is Rendered Asynchronously For 3s

:::demo

<CodeBlock src='h5/demo15.tsx'></CodeBlock>

:::

### A Large Number Of Scrolling Operations

:::demo

<CodeBlock src='h5/demo16.tsx'></CodeBlock>

:::

:::

### A Large Number Of Scrolling Operations 2

:::demo

<CodeBlock src='h5/demo17.tsx'></CodeBlock>

:::

### Left And Right Layout

:::demo

<CodeBlock src='h5/demo18.tsx'></CodeBlock>

:::

### Left And Right Layout-Smile Curve

:::demo

<CodeBlock src='h5/demo19.tsx'></CodeBlock>

:::

### Tabs In Tabs

:::demo

<CodeBlock src='h5/demo20.tsx'></CodeBlock>

:::

### Tabs In Tabs 2

:::demo

<CodeBlock src='h5/demo21.tsx'></CodeBlock>

:::

### Title FontSize: 20px 12px

:::demo

<CodeBlock src='h5/demo22.tsx'></CodeBlock>

:::

### Custom Tab Bar

:::demo

<CodeBlock src='h5/demo23.tsx'></CodeBlock>

:::

## Tabs

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | The value of the currently active tab panel | `number` \| `string` | `0` |
| defaultValue | Initialize the value of the active tab | `number` \| `string` | `0` |
| activeColor | Label selected color | `string` | `#1a1a1a` |
| direction | Use horizontal and vertical directions | `horizontal` \| `vertical` | `horizontal` |
| activeType | Select the bottom display style Optional values `line`、`smile`、`simple`、`card`、`button`、`divider` | `line` \| `smile` \| `simple` \| `card` \| `button`\| `divider` | `line` |
| duration | Switch animation duration, unit ms 0 means no animation | `number` \| `string` | `300` |
| title | custom navigation area | `() => JSX.Element[]` | `-` |
| align | title alignment | `left` \| `right` | `-` |
| autoHeight | Auto height. When set to true, nut-tabs and nut-tabs\_\_content will change with the height of the current nut-tabpane. | `boolean` | `false` |
| tabStyle | tab bar style | `CSSProperties` | `{}` |
| onClick | Triggered when the label is clicked | `(index: string \| number) => void` | `-` |
| onChange | Triggered when the currently active tab changes | `(index: string \| number) => void` | `-` |

## Tabs.Tabpane

### Props

| Property | Description | type | Default |
| --- | --- | --- | --- |
| title | title | `string` | `-` |
| value | tag Key , matching identifier, default is index value | `string` \| `number` | `-` |
| disabled | Whether to disable the label | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-tabs-titles-height | height of titles in horizontal direction | `44px` |
| \--nutui-tabs-titles-background-color | Tab title background color | `$color-background` |
| \--nutui-tabs-title-gap | Tab title margin | `0px` |
| \--nutui-tabs-titles-font-size | Tab title font size | `$font-size-base` |
| \--nutui-tabs-titles-item-min-width | Minimum width of horizontal titles | `50px` |
| \--nutui-tabs-titles-item-color | Tab titles font color | `$color-title` |
| \--nutui-tabs-titles-item-active-color | Tab selected titles font color | `$color-primary` |
| \--nutui-tabs-titles-item-active-font-weight | Tab selected titles font weight | `$font-weight-bold` |
| \--nutui-tabs-titles-item-active-font-size | Tab selected titles font size | `$font-size-large` |
| \--nutui-tabs-titles-item-active-background-color | Background color of active tab titles in horizontal direction | `$color-background-overlay` |
| \--nutui-tabs-tab-line-width | Horizontal active tab line width | `12px` |
| \--nutui-tabs-tab-line-height | Height of active tabs line in horizontal direction | `2px` |
| \--nutui-tabs-tab-line-color | Horizontal line color | `$color-primary` |
| \--nutui-tabs-line-bottom | Horizontal line distance | `15%` |
| \--nutui-tabs-line-border-radius | rounded corners for horizontal lines | `2px` |
| \--nutui-tabs-tab-line-opacity | Opacity of horizontal tabs | `1` |
| \--nutui-tabs-vertical-titles-width | Width of vertical titles | `100px` |
| \--nutui-tabs-vertical-titles-item-height | height of vertical titles | `40px` |
| \--nutui-tabs-vertical-tab-line-color | vertical line color | `linear-gradient(180deg, $color-primary 0%, rgba(#fa2c19, 0.15) 100%)` |
| \--nutui-tabs-vertical-tab-line-width | Vertical title line width | `3px` |
| \--nutui-tabs-vertical-tab-line-height | The height of the vertical title line | `12px` |
| \--nutui-tabs-tabpane-padding | Padding of the Tabpane content | `24px 20px` |
| \--nutui-tabs-tabpane-backgroundColor | BackgroundColor of the Tabpane content | `#fff` |
