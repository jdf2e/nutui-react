# Checkbox

The multi-select button is used for selection. The component supports 4 states: unchecked, checked, forced unchecked (disabled unchecked), and forced checked (disabled checked).

## Import

```tsx
import { Checkbox } from '@nutui/nutui-react'
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

### Basic Usage

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Half-selected state

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Disabled State

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom Size

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom Icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Click Trigger Event

When the value changes, the change event will be fired

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Checkbox.Group

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Checkbox.Group Disabled

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## Select All/Cancel

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

## Used by checkboxGroup, limit the maximum number of options (3), minimum number of options (1)

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## Select All/Select/Cancel

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## Configure Options To Render Check Buttons

:::demo

<CodeBlock src='h5/demo14.tsx'></CodeBlock>

:::

## List

:::demo

<CodeBlock src='h5/demo15.tsx'></CodeBlock>

:::

## Checkbox

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| checked | Whether checked | `boolean` | `false` |
| defaultChecked | Initially checked or not | `boolean` | `false` |
| disabled | Whether to disable selection | `boolean` | `false` |
| indeterminate | Half-selected state | `boolean` | `false` |
| labelPosition | The position of the text | `left` \| `right` | `right` |
| icon | Icon before selection | `ReactNode` | `'CheckNormal'` |
| activeIcon | Icon after selection | `ReactNode` | `'Checked'` |
| indeterminateIcon | Half-selected state icon | `ReactNode` | `'CheckDisabled'` |
| label | Text content of the checkbox | `ReactNode` | `-` |
| value | Identification value, used in Group mode | `string` \| `number` | `-` |
| shape | Shape | `button` \| `round` | `round` |
| onChange | Triggered when the value changes | `(value: boolean) => void` | `-` |

## Checkbox.Group

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | Identifier array of the currently selected items | `string[]` | `-` |
| defaultValue | Identifier array of the initially selected items | `string[]` | `-` |
| disabled | Whether to disable selection, applies to all checkboxes within it | `boolean` | `false` |
| max | Limit the maximum number of choices | `number` | `-` |
| min | Limit the minimum number of choices | `number` | `-` |
| labelPosition | The position of the text | `left` \| `right` | `right` |
| direction | Layout direction, optional values: `horizontal`, `vertical` | `horizontal` \| `vertical` | `vertical` |
| options | Configure options to render check buttons | `CheckboxGroupOption[]` | `[]` |
| list | List layout mode | `boolean` | `false` |
| onChange | Triggered when the value changes | `(value: string[]) => void` | `-` |
| onLimit | Triggered when reaching max/min selection limits | `(type: 'max' \| 'min') => void` | `-` |

### CheckboxGroupOption

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| label | Text content of checkbox | `string` | `-` |
| value | Identification value of checkbox | `string` | `-` |
| disabled | Whether to disable | `boolean` | `false` |
| onChange | Triggered when option state changes | `(state: boolean, label: string) => void` | `-` |

### Ref

| Property | Description | Parameters |
| --- | --- | --- |
| toggle | Select all / deselect all (supports both options and children) | Pass `true` to select all, pass `false` to deselect all |
| reverse | Invert selection (supports both options and children) | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-checkbox-label-color | Text color of label | `$color-title` |
| \--nutui-checkbox-label-disable-color | Disabled text color of label | `#999` |
| \--nutui-checkbox-icon-disable-color | Disabled color of icon | `#d6d6d6` |
| \--nutui-checkbox-label-margin-left | Left margin of label | `$spacing-xxs` |
| \--nutui-checkbox-label-font-size | Font size of label | `14px` |
| \--nutui-checkbox-icon-font-size | Font size of icon | `18px` |
| \--nutui-checkbox-button-font-size | Font size when shape is button | `12px` |
| \--nutui-checkbox-button-color | Font color when shape is button | `$color-text` |
| \--nutui-checkbox-button-background | Background color when shape is button | `$color-background` |
| \--nutui-checkbox-button-active-border | Border when shape is button and active | `1px solid $color-primary` |
| \--nutui-checkbox-button-padding | Padding when shape is button | `5px 18px` |
| \--nutui-checkbox-button-border-radius | Rounded corner when shape is button | `15px` |
| \--nutui-checkbox-button-disabled-active-color | Font color when shape is button and active disabled | `$white` |
| \--nutui-checkbox-list-background-color | List background color | `$white` |
| \--nutui-checkbox-list-item-border | List item border | `1px solid $color-border` |
| \--nutui-checkbox-list-padding | List padding | `0 0 0 12px` |
| \--nutui-checkbox-list-item-padding | Padding of list item | `12px 12px 12px 0` |
| \--nutui-checkboxgroup-checkbox-margin | Right margin of checkbox in horizontal group | `20px` |
| \--nutui-checkboxgroup-checkbox-margin-bottom | Bottom margin of checkbox in vertical group | `5px` |
| \--nutui-checkboxgroup-checkbox-label-margin | RTL margin of label in checkbox group | `0 5px` |

<Contribution name="Checkbox" />
