# PickerView

The PickerView is the content area of the Picker.

## Import

```tsx
import { PickerView } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Controlled

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Adjust Height

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Multi Column

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Tiled

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Cascade

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## PickerView

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| options | Tabular data | `PickerOptions[]` | `[]` |
| value | Selected value, controlled | `PickerValue[]` | `[]` |
| defaultValue | Default value | `PickerValue[]` | `[]` |
| threeDimensional | Whether to enable 3D effect | `boolean` | `true` |
| duration | The duration of inertial rolling during rapid sliding, in ms | `string` \| `number` | `1000` |
| onChange | Called when the value of each column changes | `({value, index, selectedOptions}) => void` | `-` |

### PickerOption

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| label | Text of column | `string` \| `number` | `-` |
| value | Value of column | `string` \| `number` | `-` |
| children | Cascader Option | `PickerOptions` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-picker-item-height | Height of each data item on the panel | `36px` |
| \--nutui-picker-item-text-color | The color of each piece of data in the panel | `$color-title` |
| \--nutui-picker-item-text-font-size | The font size of each piece of data in the panel | `$font-size-base` |
| \--nutui-picker-item-active-line-border | The border value currently selected by the panel | `1px solid $color-border` |
| \--nut-picker-mask-background | Panel shade gradient value | `linear-gradient(180deg, var(--nutui-white-12), var(--nutui-white-7)),linear-gradient(0deg, var(--nutui-white-12), var(--nutui-white-7))` |

<Contribution name="PickerView" />
