# TrendArrow

A percentage number with an arrow indicating the trend of the indicator

## Import

```tsx
import { TrendArrow } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Change text color

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Specify decimal places

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Arrow ahead

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Show sign

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Show zero or not

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom color

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Custom icon

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## TrendArrow

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | Value, arrow up if greater than zero, arrow down if less than zero | `number` | `-` |
| digits | Decimal precision | `number` | `2` |
| symbol | Whether to display plus and minus signs | `boolean` | `false` |
| zero | Show zero or not | `boolean` | `false` |
| left | Whether to show an arrow to the left of the number | `boolean` | `false` |
| sync | Whether the text color is in sync with the arrow | `boolean` | `true` |
| color | Text color | `string` | `#333333` |
| riseColor | Rise arrow color | `string` | `#FF0F23` |
| dropColor | Down arrow color | `string` | `#64b578` |
| riseIcon | Custom Rise arrow icon | `string` | `<TriangleUp/>` |
| dropIcon | Custom down arrow icon | `string` | `<TriangleDown/>` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-trendarrow-font-size | Trend arrow text size | `14px` |
| \--nutui-trendarrow-icon-margin | Trend arrow Specifies the spacing between text and icon | `4px` |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20TrendArrow)

### Component Logs

- 🐛 fix(trendarrow): demo拆解与规范 ([#2075](https://github.com/jdf2e/nutui-react/pull/2075)) @sunlanda `v2.4.2`
- 💡 style(trendarrow): 修订className类名 ([#1716](https://github.com/jdf2e/nutui-react/pull/1716)) @xiaoyatong `v2.3.0`
- 🐛 优化 TrendArrow 组件 props ([#1150](https://github.com/jdf2e/nutui-react/pull/1150)) @songsong `v2.0.0-beta.2`
- 💡 🛠 refactor: trendArrow ([#1066](https://github.com/jdf2e/nutui-react/pull/1066)) @拧巴的猫 `v2.0.0-alpha.13`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=trendarrow&expanded=true)
