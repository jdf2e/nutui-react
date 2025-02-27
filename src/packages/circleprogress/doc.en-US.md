# CricleProgress

Circular progress bar component

## Import

```tsx
import { CircleProgress } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Ring progress bar custom style

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Customize the color of the circular progress bar (support deformation color)

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Ring progress bar custom size

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Ring progress bar custom content

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Dynamically change the progress of the circular progress bar

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## CircleProgress

## Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| percent | Progress Rate | `number` \| `string` | `Required, no default value` |
| strokeWidth | Stroke width | `number` \| `string` | `5` |
| radius | radius | `number` \| `string` | `50` |
| color | Progress color, passing object to render gradient | `Record<string, string> \| string` | `#FF0F23` |
| background | Circle track color | `string` | `#d9d9d9` |
| strokeLinecap | Stroke linecap | `butt` \| `round` \| `square` \| `inherit` | `round` |
| clockwise | Whether to be clockwise | `boolean` | `true` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-circleprogress-primary-color | The color of the filled part of the circular progress bar | `$color-primary` |
| \--nutui-circleprogress-path-color | The color of the circular progress bar track | `#e5e9f2` |
| \--nutui-circleprogress-text-color | The color of the track content area of ​​the circular progress bar | `$color-title` |
| \--nutui-circleprogress-text-size | The size of the track content area of ​​the circular progress bar | `$font-size-l` |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20CircleProgress)

### Component Logs

- 🐛 fix(circleprogress): update demo ([#2260](https://github.com/jdf2e/nutui-react/pull/2260)) @eiinu `v2.6.5`
- 🐛 fix(circleprogress): demo拆解与规范 ([#2091](https://github.com/jdf2e/nutui-react/pull/2091)) @Alex-huxiyang `v2.5.0`
- 💡 🛠 refactor(circleprogress): optimize animation duration ([#1861](https://github.com/jdf2e/nutui-react/pull/1861)) @oasis-cloud `v2.3.7`
- 💡 style(circleprogress): docs 优化，修订 css 变量 ([#1699](https://github.com/jdf2e/nutui-react/pull/1699)) @xiaoyatong `v2.3.0`
- 🐛 fix(circleprogress): 计算出现 NaN 导致组件展示为 100% 的情况 ([#1602](https://github.com/jdf2e/nutui-react/pull/1602)) @oasis-cloud `v2.0.24`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=circleprogress&expanded=true)
