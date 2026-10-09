# Popover

Click or hover the mouse on the element to pop up the floating layer of the bubble card.

## Import

```tsx
import { Popover } from '@nutui/nutui-react'
```

## Demo

### Bubble Types

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
| type | Bubble type: `status` (icon + text + close) or `description` (text only) | `status` \| `description` | `status` |
| list | list of options | `PopoverList[]` | `[]` |
| visible | whether to show | `boolean` | `false` |
| theme | Theme style: default `dark` is the design-spec bubble; `light` is the bright style (white bg, dark text) | `light` \| `dark` | `dark` |
| location | The pop-up position, the specific parameter values ​​inside can refer to the above position customization example | `FullPosition` | `bottom` |
| offset | the offset of the occurrence position | `string[]` \| `number[]` | `[0, 8]` |
| arrowOffset | the offset of the arrow | `number` | `20` |
| showArrow | whether to show small arrows | `boolean` | `true` |
| closeOnActionClick | Whether to close when clicking action | `boolean` | `true` |
| closeOnOutsideClick | Whether to close when clicking outside | `boolean` | `true` |
| autoShow | Whether to show automatically on mount; update `visible` in `onOpen` | `boolean` | `false` |
| duration | Auto-close duration (ms); `0` disables auto-close | `number` | `0` |
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
| \--nutui-popover-border-radius | Border radius of popover content | `6px` |
| \--nutui-popover-font-size | Font size of popover content | `12px` |
| \--nutui-popover-text-color | Text color | `$color-primary-text` |
| \--nutui-popover-content-background-color | Background color | `$color-mask` |
| \--nutui-popover-divider-color | Divider color between items | `rgba(255, 255, 255, 0.12)` |
| \--nutui-popover-disable-color | Disabled option color | `$color-text-disabled` |
| \--nutui-popover-padding-horizontal | Horizontal padding | `8px` |
| \--nutui-popover-padding-vertical | Vertical padding | `6px` |
| \--nutui-popover-height | Bubble height | `28px` |
| \--nutui-popover-icon-size | Icon size | `12px` |
| \--nutui-popover-icon-color | Icon color (80% opacity) | `rgba(255, 255, 255, 0.8)` |
| \--nutui-popover-status-max-width | Max width for status type | `240px` |
| \--nutui-popover-description-max-width | Max width for description type | `208px` |
| \--nutui-popover-action-hotspot-size | Close button touch hotspot size | `36px` |
| \--nutui-popover-light-content-background-color | Light theme background color | `#ffffff` |
| \--nutui-popover-light-text-color | Light theme text color | `$color-mask` |
| \--nutui-popover-light-icon-color | Light theme icon color (80% opacity) | `rgba(17, 20, 26, 0.8)` |
| \--nutui-popover-light-divider-color | Light theme divider color | `$color-border` |
| \--nutui-popover-padding | Legacy horizontal padding alias | `8px` |
| \--nutui-popover-item-width | Legacy item width alias (same as status max width) | `240px` |

<Contribution name="Popover" />
