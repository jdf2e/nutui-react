# Steps

Split and display the steps of a process, guide users to complete tasks according to the process, or show users the current status.

## Import

```tsx
import { Steps } from '@nutui/nutui-react'
```

## Demo

### Horizontal layout with single line text

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Horizontal layout with double line text

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Horizontal layout with icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Vertical layout with dot, icon and text

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Mixed horizontal layout: dot + icon

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom icon in horizontal layout

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom step bar

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Vertical dot layout

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Mixed vertical layout: dot + icon

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Steps

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Display direction of the step bar | `horizontal` \| `vertical` | `horizontal` |
| value | Current step | `number` | `0` |
| status | Display status of the step bar | `default` \| `business` \| `dynamic` \| `enhanced` | `default` |
| type | Type of the step bar | `text` \| `dot` \| `icon` | `text` |
| layout | Layout mode of the step bar | `single` \| `double` | `single` |
| icon | Custom icon | `ReactNode` | `-` |
| onStepClick | Triggered when switching steps | `(index: number) => void` | `-` |

## Step

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title of the process step | `ReactNode` | `-` |
| description | Descriptive text of process steps | `ReactNode` | `-` |
| icon | Icon | `ReactNode` | `-` |
| value | Index of process steps | `number` | `0` |
| type | Step type | `text` \| `dot` \| `icon` | `text` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-steps-background-color | Steps background color | `$white` |
| \--nutui-steps-base-head-height | Head height | `14px` |
| \--nutui-steps-base-head-background-color | Head background color | `$color-background` |
| \--nutui-steps-base-head-border | Head border | `none` |
| \--nutui-steps-base-head-text-size | Head text size | `12px` |
| \--nutui-steps-base-head-size | Head icon size | `$font-size-xxs` |
| \--nutui-steps-base-head-color | Head color | `$color-text` |
| \--nutui-steps-base-head-dot-size | Head dot size | `6px` |
| \--nutui-steps-base-head-dot-background-color | Head dot background color | `$color-text-disabled` |
| \--nutui-steps-base-head-icon-size | Head icon size | `16px` |
| \--nutui-steps-double-head-icon-size | Double line head icon size | `20px` |
| \--nutui-steps-vertical-head-icon-size | Vertical head icon size | `20px` |
| \--nutui-steps-base-line-height | Divider height | `1px` |
| \--nutui-steps-base-line-background | Divider background color | `$color-border` |
| \--nutui-steps-base-title-font-size | Title font size | `$font-size-s` |
| \--nutui-steps-base-title-color | Title color | `$color-title` |
| \--nutui-steps-base-description-margin-top | Description top margin | `2px` |
| \--nutui-steps-base-description-font-size | Description font size | `$font-size-xxs` |
| \--nutui-steps-base-description-color | Description color | `$color-text-help` |
| \--nutui-steps-base-head-border-color | Head border color | `$color-border` |
| \--nutui-steps-process-head-background-color | Processing head background color | `$color-primary` |
| \--nutui-steps-process-color | Processing color | `$white` |
| \--nutui-steps-process-title-color | Processing title color | `$color-primary` |
| \--nutui-steps-process-description-color | Processing description color | `$color-primary` |
| \--nutui-steps-wait-icon-color | Waiting state icon color | `$color-text-help` |
| \--nutui-steps-wait-title-color | Waiting state title color | `$color-title` |
| \--nutui-steps-wait-description-color | Waiting state description color | `$color-text` |
| \--nutui-steps-finish-icon-color | Finish state icon color | `$color-text-help` |
| \--nutui-steps-business-title-color | Business state title color | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-description-color | Business state description color | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-text-color | Business state head text color | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-dot-background-color | Business state head dot background color | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-icon-color | Business state head icon color | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-background-color | Business state head background color | `var(--nutui-color-service)` |
| \--nutui-steps-enhanced-finish-head-background-color | Enhanced finish state head background color | `$color-primary-light-pressed` |
| \--nutui-steps-enhanced-finish-head-dot-background-color | Enhanced finish state head dot background color | `$color-primary-disabled-special` |
| \--nutui-steps-enhanced-finish-head-icon-color | Enhanced finish state head icon color | `$color-primary-stop-1` |
| \--nutui-steps-enhanced-finish-head-text-color | Enhanced finish state head text color | `$color-primary-stop-1` |
| \--nutui-steps-horizontal-item-padding-right | Horizontal item right padding | `28px` |
| \--nutui-steps-horizontal-item-line-padding | Horizontal item divider padding | `0 8px` |
| \--nutui-steps-horizontal-item-special-padding-right | Special horizontal item right padding | `22px` |
| \--nutui-steps-horizontal-item-special-3-padding-right | 3 items special horizontal item right padding | `9px` |
| \--nutui-steps-vertical-item-padding-bottom | Vertical item bottom padding | `13px` |
| \--nutui-steps-vertical-title-font-size | Vertical title font size | `$font-size-l` |
| \--nutui-steps-vertical-title-margin-bottom | Vertical title bottom margin | `4px` |
| \--nutui-steps-vertical-line-height | Vertical line height | `18px` |
| \--nutui-steps-vertical-description-font-size | Vertical description font size | `$font-size-base` |
| \--nutui-steps-vertical-description-margin | Vertical description margin | `0 0 1px` |

<Contribution name="Steps" />
