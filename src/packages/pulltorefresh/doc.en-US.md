# PullToRefresh

An interaction to load new content with a finger pull-to-refresh in a list.

## Import

```tsx
import { PullToRefresh } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### type="primary"

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## PullToRefresh

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| canReleaseText | Release prompt text | `ReactNode` | `Release immediate refresh` |
| completeText | Prompt text when complete | `ReactNode` | `Refresh successful` |
| completeDelay | The time for the delay to disappear after completion, in ms | `number` | `500` |
| disabled | Whether to disable pull-to-refresh | `boolean` | `false` |
| headHeight | The height of the head tip content area, in px | `number` | `40` |
| pullingText | Pull down text | `ReactNode` | `Pull to refresh` |
| refreshingText | Refresh text when refreshing | `ReactNode` | `Loading` |
| renderIcon | Customize the drop-down prompt icon according to the drop-down state | `ReactNode` | `<Loading />` |
| renderText | Customize the drop-down prompt text according to the drop-down state | `ReactNode` | `-` |
| threshold | How far to pull down to trigger refresh, the unit is px | `number` | `60` |
| onRefresh | the handler function for triggering a refresh | `() => Promise<any>` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-pulltorefresh-icon-width | Swipe to icon width | `36px` |
| \--nutui-pulltorefresh-icon-height | Swipe to icon height | `26px` |
| \--nutui-pulltorefresh-color-primary | When background is deep | `$color-primay` |
