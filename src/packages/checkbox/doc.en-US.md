# Checkbox

多选按钮用于选择。

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

### props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| checked | whether checked | `boolean` | `false` |
| defaultChecked | Initially checked or not | `boolean` | `false` |
| disabled | Whether to disable selection | `boolean` | `false` |
| labelPosition | The position of the text | `left` \| `right` | `right` |
| icon | before selection | `ReactNode` | `'CheckNormal'` |
| activeIcon | after selection | `ReactNode` | `'Checked'` |
| indeterminateIcon | half-selected state | `ReactNode` | `'CheckDisabled'` |
| label | text content of the checkbox | `string` | `-` |
| value | identification value, used in Group mode | `string` \| `number` | `-` |
| shape | shape | `button` \| `round` | `round` |
| onChange | Triggered when the value changes | `(value: boolean) => void` | `-` |

## Checkbox.Group

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | identifier of the currently selected item | `string` \| `number` | `-` |
| defaultValue | Identifier of the initially selected item | `string` \| `number` | `-` |
| disabled | Whether to disable selection, will be used for all checkboxes under it | `boolean` | `false` |
| max | limit the maximum number of options | `number` | `-` |
| min | Limit the number of choices to at least | `number` | `-` |
| labelPosition | The position of the text | `left` \| `right` | `right` |
| direction | Use horizontal and vertical directions Optional values horizontal、vertical | `string` | `vertical` |
| options | Configure options to render check buttons | `Array<{ label: string value: string disabled?: boolean }>` | `-` |
| list | List model | `boolean` | `false` |
| onChange | Triggered when the value changes | `(value: string[]) => void` | `-` |

### Ref

| Property | Description | Parameters |
| --- | --- | --- |
| toggle | Select All/Cancel | Pass `true` to select all, pass `false` to cancel all selection |
| reverse | reverse election | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-checkbox-label-color | text color of label | `$color-title` |
| \--nutui-checkbox-label-margin-left | left margin of label | `15px` |
| \--nutui-checkbox-label-font-size | font size of label | `14px` |
| \--nutui-checkbox-button-font-size | shape is the font size of the button | `12px` |
| \--nutui-checkbox-button-color | button font color | `$color-text` |
| \--nutui-checkbox-button-background | shape is the background color of the button | `$color-background` |
| \--nutui-checkbox-label-button-border-color | shape is the border color of the button | `$color-primary` |
| \--nutui-checkbox-button-active-border | The shape is the border of the active button | `1px solid $color-primary` |
| \--nutui-checkbox-button-padding | The shape is the padding of the button | `5px 18px` |
| \--nutui-checkbox-button-border-radius | The shape is the rounded corner of the button | `15px` |
| \--nutui-checkbox-list-background-colors | List background color | `15px` |
| \--nutui-checkbox-list-item-border | List item border | `15px` |
| \--nutui-checkbox-list-padding | list padding | `15px` |
| \--nutui-checkbox-list-item-padding | padding of list items | `15px` |
