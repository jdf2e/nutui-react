# Steps

Split and display the steps of a process, guide users to complete tasks according to the process, or show users the current status.

## Import

```tsx
import { Steps } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Basic Usage: Dot

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Title and description information

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Step Bar

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom Step Bar: Dot

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom Step Bar: Dot + icon

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Vertical step bar

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Point step and vertical direction

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Steps

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Show direction | `horizontal` \| `vertical` | `horizontal` |
| current | Current step | `number` | `0` |
| dot | Dot step bar | `boolean` | `false` |

## Step

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title of the process step | `string` | `-` |
| description | Descriptive text of process steps (supporting HTML structure) | `string` | `-` |
| icon | Icon | `ReactNode` | `-` |
| value | Index of process steps | `number` | `0` |
| onStepClick | Fired when the title or icon of a step is clicked | `(index: number) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-steps-base-icon-width | width of icon container | `25px` |
| \--nutui-steps-base-icon-height | height of icon container | `25px` |
| \--nutui-steps-base-icon-line-height | The line height of the icon container | `25px` |
| \--nutui-steps-base-icon-margin-bottom | The bottom margin of the icon container | `12px` |
| \--nutui-steps-base-icon-font-size | The font size of the icon container | `$font-size-small` |
| \--nutui-steps-base-line-width | The width of the dividing line | `100%` |
| \--nutui-steps-base-line-background | The background color of the dividing line | `$color-text-help` |
| \--nutui-steps-base-title-font-size | The font size of the title | `$font-size-base` |
| \--nutui-steps-base-title-color | Title color | `$color-title` |
| \--nutui-steps-base-title-margin-bottom | Title bottom margin | `10px` |
| \--nutui-steps-base-description-font-size | The font size of the description text | `$font-size-small` |
| \--nutui-steps-base-description-color | The font color of description text | `$color-text` |
| \--nutui-steps-wait-icon-bg-color | Background color of icon container in waiting state | `$color-text-help` |
| \--nutui-steps-wait-icon-color | font color of icon container in waiting state | `$white` |
| \--nutui-steps-wait-title-color | wait state title font color | `$color-title` |
| \--nutui-steps-wait-description-color | wait state description font color | `$color-text` |
| \--nutui-steps-process-icon-bg-color | Process icon container background color | `$color-primary` |
| \--nutui-steps-process-icon-color | Process icon container font color | `$white` |
| \--nutui-steps-process-title-color | Process title font color | `$color-primary` |
| \--nutui-steps-process-title-font-size | Process title font size | `$font-size-base` |
| \--nutui-steps-process-title-font-weight | Process title font weight | `$font-weight-bold` |
| \--nutui-steps-process-description-color | Process description font color | `$color-text` |
| \--nutui-steps-finish-icon-bg-color | background color of finish status icon container | `$color-primary-text` |
| \--nutui-steps-finish-icon-color | font color of finish status icon container | `$color-primary` |
| \--nutui-steps-finish-title-color | Font color of finish status title | `$color-primary` |
| \--nutui-steps-finish-description-color | Font color of finish state description | `$color-text` |
| \--nutui-steps-finish-line-background | The color of the finishing line | `$color-primary` |
| \--nutui-steps-dot-icon-width | Width of dot progress bar dots | `6px` |
| \--nutui-steps-dot-icon-height | Height of dot icon progress bar | `6px` |
| \--nutui-steps-dot-icon-border | Dot progress bar dot border | `2px solid $color-primary-text` |
| \--nutui-steps-dot-head-margin | Dot progress bar dot margin | `7px 0 0 0` |
| \--nutui-steps-process-icon-before-bg-color | The color of the outer border of the dot progress bar in progress | `$color-primary-stop-2` |
