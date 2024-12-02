# InfiniteLoading

Scrolling to the bottom of the list automatically loads more data.

## Import

```tsx
import { InfiniteLoading } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Pull down to refresh

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom loading text

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Primary theme

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Window scroll

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## InfiniteLoading

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Topic type | `default`\| `primary` | `default` |
| hasMore | Has more data | `boolean` | `true` |
| threshold | The loadMore event will be Emitted when the distance between the scrollbar and the bottom is less than threshold | `number` | `200` |
| capture | Whether to use capture mode | `boolean` | `false` |
| target | Identifies and distinguishes multiple component instances on a page. Not for listening to DOM elements. | `string` | `-` |
| loadMoreText | “No more” text | `string` | `Oops, here's the bottom` |
| pullRefresh | Enable pull refresh | `boolean` | `false` |
| pullingText | Pull refresh text | `ReactNode` | `Let go and refresh` |
| loadingText | Pull on loading text | `ReactNode` | `loading...` |
| onRefresh | Pull down refresh event callback | `() => Promise<void>` | `-` |
| onLoadMore | Callback function to continue loading | `() => Promise<void>` | `-` |
| onScroll | Monitor scroll height in real time | `(param: number) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-infiniteloading-color | Swipe to bottom text color | `$color-text-help` |
