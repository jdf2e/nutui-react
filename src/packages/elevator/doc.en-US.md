# Elevator

It is used to quickly locate the list and display the index

## Import

```tsx
import { Elevator } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Custom index

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Right navigation is not displayed

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Index ceiling

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom Content

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Elevator

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| height | Height of elevator area | `number` \| `string` | `200px` |
| floorKey | Index key value | `string` | `title` |
| list | Index list | `Array（item needs to contain id and name attributes, and name supports passing in html structure）` | `[{id: 0, name: ''}]` |
| sticky | Whether the index is ceiling | `boolean` | `false` |
| showKeys | Show right navigation | `boolean` | `true` |
| spaceHeight | Up and down spacing of right anchor point | `number` | `23` |
| titleHeight | Height of left index | `number` | `35` |
| onItemClick | Click content | `onItemClick:(key: string, item: { id: number, name: string })=>void` | `false` |
| onIndexClick | Click index | `onIndexClick:(key: string)=>void` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-elevator-list-bg-color | Floor area background color | `$white` |
| \--nutui-elevator-list-font-size | Floor area list item font size | `$font-size-small` |
| \--nutui-elevator-list-color | Floor area list item font color | `$color-title` |
| \--nutui-elevator-list-item-padding | Floor area list item inside margin | `0 20px` |
| \--nutui-elevator-list-item-name-height | Height of floor area list item | `30px` |
| \--nutui-elevator-list-item-name-line-height | Floor area list item row height | `30px` |
| \--nutui-elevator-list-item-code-font-size | Floor area list item heading font size | `$font-size-base` |
| \--nutui-elevator-list-item-code-color | Floor area list item heading color | `$color-title` |
| \--nutui-elevator-list-item-code-font-weight | Floor area list item heading font size | `$font-weight-bold` |
| \--nutui-elevator-list-item-code-height | Floor area list item heading height | `35px` |
| \--nutui-elevator-list-item-code-line-height | Floor area list item header row height | `35px` |
| \--nutui-elevator-list-item-code-border-bottom | Width of bottom border of floor area list item heading | `1px solid $color-border` |
| \--nutui-elevator-list-item-code-background-color | background color of floor area list item heading | `inherit` |
| \--nutui-elevator-list-item-code-current-bg-color | Elevator cue background color | `#fff` |
| \--nutui-elevator-list-item-code-current-border-radius | Elevator cue border radius | `50%` |
| \--nutui-elevator-list-item-code-current-width | Elevator cue width | `45px` |
| \--nutui-elevator-list-item-code-current-height | Lift indication height | `45px` |
| \--nutui-elevator-list-item-code-current-line-height | The lift indicates the height | `45px` |
| \--nutui-elevator-list-item-code-current-right | Elevator prompt position back right edge | `60px` |
| \--nutui-elevator-list-item-code-current-top | Elevator prompt position back top edge | `50%` |
| \--nutui-elevator-list-item-code-current-text-align | Elevator prompt text alignment | `center` |
| \--nutui-elevator-bars-right | Position on the back right edge of elevator floor | `10px` |
| \--nutui-elevator-bars-top | Position on the back top edge of elevator floor | `50%` |
| \--nutui-elevator-bars-transform | Transform of elevator floor | `translateY(-50%)` |
| \--nutui-elevator-bars-padding | Elevator floor inside margin | `15px 0` |
| \--nutui-elevator-bars-background-color | Elevator floor background color | `#eeeff2` |
| \--nutui-elevator-bars-border-radius | Elevator floor fillet size | `6px` |
| \--nutui-elevator-bars-active-color | The elevator floor highlights the text color | `$color-primary` |
| \--nutui-elevator-bars-z-index | Elevator level | `1` |
| \--nutui-elevator-bars-inner-item-padding | Inside margin of elevator floor identification item | `3px` |
| \--nutui-elevator-bars-font-size | Elevator floor identification item font size | `10px` |
| \--nutui-elevator-list-fixed-color | Ceiling floor text color | `$color-primary` |
| \--nutui-elevator-list-fixed-bg-color | Ceiling floor background color | `$white` |
| \--nutui-elevator-list-fixed-box-shadow | Ceiling floor shadow | `0 0 10px #eee` |
