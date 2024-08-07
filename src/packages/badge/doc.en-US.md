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
| top | Up and down offset, support unit setting, can be set to: "0" or 0, etc. | `string` \| `number` | `"0"` |
| right | Left and right offset, support unit setting, can be set to: "5" or 5, etc. | `string` \| `number` | `"5"` |
| color | background color,the default value is the theme primary color | `string` | `-` |
| fill | Fill Mode | `solid` \| `outline` | `solid` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-badge-height | badge height | `14px` |
| \--nutui-badge-background-color | badge background color | `linear-gradient(135deg, $color-primary 0%, $color-primary-stop-2 100%))` |
| \--nutui-badge-color | badge content color | `#fff` |
| \--nutui-badge-font-size | badge content font size | `$font-size-small` |
| \--nutui-badge-border | badge border | `0px solid $color-primary-text` |
| \--nutui-badge-border-radius | badge border-radius | `14px` |
| \--nutui-badge-min-width | badge min-width | `5px` |
| \--nutui-badge-padding | badge padding value | `0 5px` |
| \--nutui-badge-icon-padding | when badge is icon,badge padding | `2px` |
| \--nutui-badge-icon-size | when badge is icon,badge size | `12px` |
| \--nutui-badge-content-transform | badge content transform | `translateY(-50%) translateX(100%)` |
| \--nutui-badge-z-index | when badge is icon, badge z-index | `1` |
| \--nutui-badge-dot-width | when badge is dot, the dot width,height and border radius | `7px` |
| \--nutui-badge-dot-border | when badge is dot, the dot border | `0px solid $color-primary-text` |
