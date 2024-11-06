# Tag

Label for labeling and classification.

## Import

```tsx
import { Tag } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### style

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom color

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### image-text

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Tag

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Label type | `primary` \| `default` \| `info` \| `success` \| `danger` \| `warning` | `default` |
| background | Label background | `string` | `-` |
| color | Text color, priority is higher than the color attribute | `string` | `white` |
| plain | Whether it is hollow | `boolean` | `false` |
| round | Whether it is a rounded style | `boolean` | `false` |
| mark | Whether it is a tag style | `boolean` | `false` |
| closeable | Whether it can be closed label | `boolean` | `false` |
| closeIcon | close icon | `ReactNode` | `null` |
| onClick | Click event | `(e: MouseEvent) => void` | `-` |
| onClose | Close event | `(e?: any) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-tag-padding | padding | `0 2px` |
| \--nutui-tag-font-size | font size | `10px` |
| \--nutui-tag-border-radius | border radius | `2px` |
| \--nutui-tag-height | height | `14px` |
| \--nutui-tag-color | color | `#ffffff` |
| \--nutui-tag-border-width | border width | `1px` |
| \--nutui-tag-background-color | background color | `$color-title` |
| \--nutui-tag-primary-background-color | primary background color | `$color-primary-gradient-1` |
| \--nutui-tag-success-background-color | success background color | `#4fc08d` |
| \--nutui-tag-info-background-color | info background color | `$color-info` |
| \--nutui-tag-warning-background-color | warn background color | `#f3812e` |
| \--nutui-tag-danger-background-color | danger background color | `$color-primary` |
| \--nutui-tag-round-border-radius | round border radius | `8px` |
| \--nutui-tag-mark-border-radius | mark border radius | `0 8px 8px 0` |
