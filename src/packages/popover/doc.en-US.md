# Popover

Click or hover the mouse on the element to pop up the floating layer of the bubble card.

## Import

```tsx
import { Popover } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Option Configuration

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Content and Color

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Location: multi datas

Use the location property to control where the bubble pops up. optional value

> Attention, the type of location is changed from 3.x, take a look at the `FullPosition` type in types file .

```
top           # Top middle
left          # Left middle
right         # Right middle
bottom        # Bottom middle
top-left      # Top left
top-right     # Top Right
left-top      # Left Top
left-bottom   # Left Bottom
right-top     # Right Top
right-bottom  # Right Bottom
bottom-left   # Bottom Left
bottom-right  # Bottom Right
```

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom Location: one data

Use the location property to control where the bubble pops up. optional value

:::demo

<CodeBlock src='h5/demo4-1.tsx'></CodeBlock>

:::

### Custom target element

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### In scrollable container

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Container setting position: fixed

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Popover

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| list | list of options | `PopoverList[]` | `[]` |
| visible | whether to show | `boolean` | `false` |
| location | The pop-up position, the specific parameter values ​​inside can refer to the above position customization example | `string` | `bottom` |
| offset | the offset of the occurrence position | `string[]` \| `number[]` | `[0, 12]` |
| arrowOffset | the offset of the arrow | `number` | `0` |
| showArrow | whether to show small arrows | `boolean` | `true` |
| closeOnActionClick | Whether to close when clicking action | `boolean` | `true` |
| closeOnOutsideClick | Whether to close when clicking outside | `boolean` | `true` |
| targetId | Custom target id | `string` | `-` |
| onClick | Click to toggle the popover display state | `() => void` | `() => {}` |
| onSelect | Fired when an option is clicked | `(item: PopoverList, index: number) => void` | `(item, index) => {}` |
| onOpen | Triggered when the menu is clicked | `() => void` | `() => {}` |
| onClose | Fired when the menu is closed | `() => void` | `() => {}` |

In addition, the `overlayStyle` `overlayClassName` `overlay` `closeOnOverlayClick` properties of the [Popup](#/zh-CN/component/popup) component are also supported.

### PopoverList

The PopoverList property is an array of objects, each object in the array is configured with a column, and the object can contain the following values:

| Key | Description | Type | Default |
| --- | --- | --- | --- |
| key | key value | `string` | `-` |
| name | option text | `string` | `-` |
| icon | @nutui/icons-react name | `ReactNode` | `-` |
| disabled | whether to disable | `boolean` | `false` |
| className | Add additional class names for corresponding options | `string` | `-` |
| action | Add additional actions for corresponding options | `{ icon?: React.ReactNode; onClick?: (e: any) => void }` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-popover-border-radius | The rounded corner value of the border of the popover content area | `8px` |
| \--nutui-popover-font-size | The font-size value of the popover content area | `12px` |
| \--nutui-popover-text-color | Text color of options area | `$color-title` |
| \--nutui-popover-content-background-color | The background color of the options area | `$white` |
| \--nutui-popover-divider-color | The bottom border color of the options area | `$color-border` |
| \--nutui-popover-disable-color | Option Disabled Colors | `$color-text-disabled` |
| \--nutui-popover-padding | The padding value of each item in the option area menu | `8px` |
| \--nutui-popover-item-width | The width value of each item in the options | `160px` |

<Contribution name="Popover" />
