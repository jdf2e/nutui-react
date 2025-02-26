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

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3APullToRefresh)

### Component Logs

- 🐛 fix(PullToRefresh): 修复PullToRefresh组件disabled属性在taro中无效的问题 ([#2538](https://github.com/jdf2e/nutui-react/pull/2538)) `v2.6.17`
- 🐛 fix(pulltorefresh): demo中下拉图标修改为joy logo ([#2084](https://github.com/jdf2e/nutui-react/pull/2084)) @irisSong `v2.4.2`
- ✨ feat(pulltorefresh): 增加 type 属性，支持深色背景设置 ([#2044](https://github.com/jdf2e/nutui-react/pull/2044)) @xiaoyatong `v2.4.1`
- 🐛 fix(pulltorefresh): 修复安卓小程序下拉卡顿问题 ([#1830](https://github.com/jdf2e/nutui-react/pull/1830)) @NickH `v2.3.5`
- 🐛 fix(pulltorefresh): icon 部分拆到demo中 ([#1812](https://github.com/jdf2e/nutui-react/pull/1812)) @xiaoyatong `v2.3.3`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=pulltorefresh&expanded=true)
