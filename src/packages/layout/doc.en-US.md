# Layout

for quick layout

## Import

```tsx
import { Row, Col } from '@nutui/nutui-react'
```

## Demo

### Basic layout

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Column interval

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Flex layout

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## Row

### props

| Field | Description | Type | Default Value |
| --- | --- | --- | --- |
| type | Layout mode, optional value is flex | `string` | `-` |
| gutter | The spacing between column elements (in px) | `string` \| `number` | `0` |
| justify | Flex main axis alignment, optional value is start end center space-around space-between | `string` | `start` |
| align | Flex cross-axis alignment, optional value is flex-start center flex-end | `string` | `flex-start` |
| wrap | Whether Flex wraps, the optional value is nowrap wrap reverse | `string` | `nowrap` |
| onClick | Fired when clicked | `event: MouseEvent, type: 'row' \| 'col'` | `-` |

## Col

### Props

| Field | Description | Type | Default Value |
| --- | --- | --- | --- |
| span | Column element width (divided into 24 parts, for example, if a row is set to 3, then the span value is 8) | `string` \| `number` | `24` |
| offset | Column element offset distance | `string` \| `number` | `0` |
| onClick | Fired when clicked | `event: MouseEvent, type: 'row' \| 'col'` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-col-default-margin-bottom | col margin-bottom | `15px` |
