# Menu

The menu list that pops down downwards.

## Import

```tsx
import { Menu } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Controlled

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Menu Content

Popup can be closed with toggle method in menu instance.

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Two Cols In One Line

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom Active Color

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom Icons

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Expand Directions

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Disable Menu

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Menu

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeColor | Active color of title and option | `string` | `#F2270C` |
| closeOnOverlayClick | Whether to close when overlay is clicked | `boolean` | `true` |
| lockScroll | Whether the background is locked | `boolean` | `true` |
| scrollFixed | Whether to fixed when window is scrolled, fixed position can be set | `boolean` \| `string` \| `number` | `true` |
| icon | Custome title icon | `React.ReactNode` | `-` |
| onOpen | menu 展开触发 | `(index: number, from: 'NORMAL' \| 'REF') => void` | `-` |
| onClose | menu 关闭触发 | `(index: number, from: 'NORMAL' \| 'REF') => void` | `-` |

## Menu.Item

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Item title | `string` | `Current selected value` |
| titleIcon | menu item icon | `React.ReactNode` | `ArrowUp/ArrowDown` |
| options | Options | `Array` | `-` |
| disabled | Whether to disable dropdown item | `boolean` | `false` |
| columns | Display how many options in one line | `number` | `1` |
| closeOnClickAway | Click on the blank space to close the menu | `boolean` | `true` |
| icon | Custome option icon | `React.ReactNode` | `Check` |
| direction | Expand direction, can be set to up | `string` | `down` |
| onChange | Emitted select option changed | `(event: any) => void` | `-` |

### Ref

| Property | Description | Parameters |
| --- | --- | --- |
| toggle | Toggle menu display status, true to show，false to hide, no param is negated | `show?: boolean` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-menu-scroll-fixed-top | Top distance in fixed state | `0` |
| \--nutui-menu-scroll-fixed-z-index | z-index of fixed state | `$mask-z-index` |
| \--nutui-menu-bar-line-height | The height of the menu title bar | `48px` |
| \--nutui-menu-bar-opened-z-index | z-index of opened state | `2001` |
| \--nutui-menu-bar-box-shadow | Shadow of menu title bar | `0 2px 12px rgba(89, 89, 89, 0.12)` |
| \--nutui-menu-title-padding | Padding of title | `0 8px` |
| \--nutui-menu-title-font-size | The font size of the title | `$font-size-base` |
| \--nutui-menu-title-color | Title color | `$color-title` |
| \--nutui-menu-container-z-index | zindex of container | `1000` |
| \--nutui-menu-content-padding | Padding of menu item container | `12px 24px` |
| \--nutui-menu-content-max-height | Maximum height of menu item container | `214px` |
| \--nutui-menu-content-background-color | Background color of menu item container | `$white` |
| \--nutui-menu-item-active-color | Open state color | `$color-primary` |
| \--nutui-menu-item-active-font-weight | The font weight of the selected state | `$font-weight-bold` |
| \--nutui-menu-item-disabled-color | Disabled state color | `$color-text-disabled` |
| \--nutui-menu-item-padding | padding for menu options | `12px 0` |
| \--nutui-menu-item-option-icon-margin | Distance between menu item text and icon | `6px` |
