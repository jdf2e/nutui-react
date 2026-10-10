# PullToRefresh

An interaction to load new content with a finger pull-to-refresh in a list.

## Import

```tsx
import { PullToRefresh } from '@nutui/nutui-react'
```

## Demo

### Basic usage

The single demo shows both switches through two buttons: default / reverse mode, and the icon content (common / agent / promotion).

The component ships with a built-in GIF icon for both the default and the reverse theme, so it works without any configuration. To use another theme, return any image from `renderIcon(status)` — animated GIFs are supported. Note that the reverse mode always uses the built-in regular-white icon.

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## PullToRefresh

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| canReleaseText | Release prompt text | `ReactNode` | `Release immediate refresh` |
| disabled | Whether to disable pull-to-refresh | `boolean` | `false` |
| headHeight | The height of the head tip content area, in px | `number` | `40` |
| pullingText | Pull down text | `ReactNode` | `Pull to refresh` |
| refreshingText | Refresh text when refreshing | `ReactNode` | `Loading` |
| renderIcon | Customize the loading icon according to the pull state; return an `<img>` to pass an image (GIF supported), otherwise the built-in icon is used | `(status: PullStatus) => ReactNode` | built-in GIF icon |
| renderText | Customize the drop-down prompt text according to the drop-down state | `ReactNode` | `-` |
| threshold | How far to pull down to trigger refresh, the unit is px | `number` | `60` |
| onRefresh | the handler function for triggering a refresh | `() => Promise<any>` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-pulltorefresh-icon-width | Swipe to icon width | `32px` |
| \--nutui-pulltorefresh-icon-height | Swipe to icon height | `32px` |
| \--nutui-pulltorefresh-color-primary | When background is deep | `$color-primay` |

<Contribution name="PullToRefresh" />
