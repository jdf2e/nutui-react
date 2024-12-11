# Badge

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

## Import

```tsx
import { Badge } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Max Size

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Color

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom context

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom CSS

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom Position

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Display Alone

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Fill Mode

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Badge

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | value to show, eg number、charctor and custom content | `ReactNode` | `-` |
| max | when value is number, it's the max size | `number` | `99` |
| dot | Is dotted, When `value` is a custom content, dot does not take effect | `boolean` | `false` |

| size | dot size, effective when dot is equal to `true` | `small` \| `normal` \| `large` | `large` |
| top | Up and down offset, can be set to: "0" or 0, etc. | `string` \| `number` | `0` |
| right | Left and right offset, can be set to: "0" or 0, etc. | `string` \| `number` | `0` |
| fill | Fill Mode | `solid` \| `outline` | `solid` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-badge-height | The height of the badge | `14px` |
| \--nutui-badge-background-color | badge background color | `$color-primary` |
| \--nutui-badge-color | badge content color value | `$color-primary-text)` |
| \--nutui-badge-font-size | badge content font size | `$font-size-xxs` |
| \--nutui-badge-border | badge border | `1px solid $color-primary-text` |
| \--nutui-badge-border-radius | badge border rounded corners | `14px` |
| \--nutui-badge-min-width | badge minimum width | `6px` |
| \--nutui-badge-padding | badge’s padding value | `1px 4px` |
| \--nutui-badge-icon-padding | The padding value when badge is a custom icon | `2px` |
| \--nutui-badge-icon-size | The size of badge when it is a custom icon | `10px` |
| \--nutui-badge-content-transform | badge content position | `translate(50%, -50%)` |
| \--nutui-badge-z-index | badge z-index when customizing the icon | `1` |
| \--nutui-badge-dot-width | When the badge is a dot, the size is equal to the width and height of normal | `6px` |
| \--nutui-badge-dot-small-width | When badge is a dot, size is equal to the width and height of small | `4px` |
| \--nutui-badge-dot-large-width | When the badge is a dot, size is equal to the width and height of large | `8px` |
| \--nutui-badge-dot-border | The border when the badge is a dot | `1px solid $color-primary-text` |
| \--nutui-badge-outline-color | The border when badge is outline text color value | `$color-primary` |
| \--nutui-badge-outline-border | The border when badge is outline fill mode | `1px solid $color-primary-text` |
