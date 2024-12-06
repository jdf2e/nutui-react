# Segmented

Used for switching content cards with page type distinctions, such as switching between main image videos and text with images.

## Import

```tsx
import { Segmented } from '@nutui/nutui-react'
```

## Demo

### Uncontrolled

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Controlled

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Icon

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## Segmented

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | Currently selected value | `string \| number` | `-` |
| defaultValue | Default selected value | `string \| number` | `-` |
| options | Set children optional | `string[] \| number[]\| SegmentedItem[]` | `-` |
| onChange | The callback function that is triggered when the state changes | `(value: string \| number) => void` | `-` |

### SegmentedItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| label | Display text for Segmented item | `ReactNode` | `-` |
| value | Value for Segmented item | `string \| number` | `-` |
| disabled | Disabled state of segmented item | `boolean` | `false` |
| icon | Display icon for Segmented item | `ReactNode` | `-` |
| className | The additional css class | `string` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-segmented-padding | Padding inside the segmented selector | `$spacing-xxxs` |
| \--nutui-segmented-radius | Border radius of the segmented selector | `$radius-xs` |
| \--nutui-segmented-background | Background color of the segmented selector | `$color-mask-part` |
| \--nutui-segmented-item-padding | Padding for options in the segmented selector | `$spacing-xxs $spacing-xs` |
| \--nutui-segmented-item-radius | Border radius for options in the segmented selector | `$spacing-xxs $spacing-xs` |
| \--nutui-segmented-item-fontsize | Font size for options in the segmented selector | `$font-size-s` |
| \--nutui-segmented-item-color | Text color for options in the segmented selector | `$color-primary-text` |
| \--nutui-segmented-active-background | Background color for selected options in the segmented selector | `$color-mask-part` |
| \--nutui-segmented-icon-margin-right | Spacing between options in the segmented selector | `$color-mask-part` |
