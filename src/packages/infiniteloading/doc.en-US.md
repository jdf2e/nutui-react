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

### Custom text and icon

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

Loading starts when the page reaches the configured bottom threshold. Duplicate triggers are blocked while loading, and the loading state remains visible for at least 200ms. When `hasMore` becomes `false`, the component shows its completed state and resets automatically. The component ships with built-in icons for the default and the reverse theme, selected by `type`: an animated GIF while loading, and a static image for the no-more state. Return any image from `renderIcon(status)` to use another theme (animated GIFs supported).

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Topic type | `default`\| `primary` | `default` |
| hasMore | Has more data | `boolean` | `true` |
| threshold | The loadMore event will be Emitted when the distance between the scrollbar and the bottom is less than threshold | `number` | `200` |
| capture | Whether to use capture mode | `boolean` | `false` |
| target | Get the target element to monitor | `string` | `-` |
| pullUpText | Idle state text | `ReactNode` | `Swipe up to load more` |
| loadingText | Loading state text | `ReactNode` | `Loading` |
| loadMoreText | Completed state text | `ReactNode` | `No more data` |
| minimumLoadingTime | Minimum loading-state duration in milliseconds | `number` | `200` |
| renderIcon | Customize the icon for each state; return any image to replace the built-in one (GIF supported) | `(status: 'idle' \| 'loading' \| 'complete') => ReactNode` | built-in icons (GIF while loading, static for the no-more state) |
| iconStyle | Icon container styles; use `--nutui-infiniteloading-icon-size` to resize the icon | `CSSProperties` | `-` |
| pullRefresh | Enable pull refresh | `boolean` | `false` |
| pullingText | Pull refresh text | `ReactNode` | `Let go and refresh` |
| onRefresh | Pull down refresh event callback | `() => Promise<void>` | `-` |
| onLoadMore | Callback function to continue loading | `() => Promise<void>` | `-` |
| onScroll | Monitor scroll height in real time | `(param: number) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-infiniteloading-color | Status text color | `$color-text` |
| \--nutui-infiniteloading-icon-size | Icon size | `20px` |

<Contribution name="InfiniteLoading" />
