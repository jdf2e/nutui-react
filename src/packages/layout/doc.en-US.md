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

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ALayout)

### Component Logs

- 🐛 fix(layout): demo拆解与规范 & 修复脚本在不同操作系统的正则匹配出错 ([#2016](https://github.com/jdf2e/nutui-react/pull/2016)) @Alex-huxiyang `v2.4.1`
- ✨ feat(noticebar): supports the center layout ([#1972](https://github.com/jdf2e/nutui-react/pull/1972)) @irisSong `v2.4.0`
- 💡 📖 docs(layout): 文档可读性优化 ([#1904](https://github.com/jdf2e/nutui-react/pull/1904)) @Alex.huxiyang `v2.3.9`
- ✨ feat(infiniteloading): 优化布局,添加css变量,增加demo ([#1760](https://github.com/jdf2e/nutui-react/pull/1760)) @xiaoyatong `v2.3.0`
- ✨ feat(navbar): 增加标题左对齐方式,优化左侧icon的布局,调整className类 名和css 变量 ([#1750](https://github.com/jdf2e/nutui-react/pull/1750)) @xiaoyatong `v2.3.0`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=layout&expanded=true)
