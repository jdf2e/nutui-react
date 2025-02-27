# Ellipsis

isplay space is insufficient, hidden part of the content and "..." Alternative.

## Import

```tsx
import { Ellipsis } from '@nutui/nutui-react'
```

## Demo

### Leading

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Tailing

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Middle

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Multi-line

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Expand & Collapse

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Ellipsis

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | Content | `string` | `-` |
| direction | Direction | `start` \| `end` \| `middle` | `end` |
| rows | Rows | `number` | `1` |
| expandText | Expand text | `string` | `-` |
| collapseText | Collapse text | `string` | `-` |
| symbol | Symbol | `string` | `...` |
| lineHeight | the row height of the container | `string` \| `number` | `20` |
| onClick | Emitted when the content is clicked | `() => void` | `-` |
| onChange | Emitted when expand or collapse is clicked | `(type: string) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-ellipsis-expand-collapse-color | 展示和收起的按钮颜色 | `#3460fa` |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Ellipsis)

### Component Logs

- 🐛 fix(ellipsis): 部分场景下的ref报错 ([#2200](https://github.com/jdf2e/nutui-react/pull/2200)) @Alex-huxiyang `v2.6.2`
- ✨ feat(ellipsis): rtl ([#2128](https://github.com/jdf2e/nutui-react/pull/2128)) @irisSong `v2.5.1`
- 🐛 fix(Ellipsis): 修复小程序环境下给Ellipsis设置字号后工作不正常的问题 ([#2078](https://github.com/jdf2e/nutui-react/pull/2078)) @FPG-Alan `v2.5.0`
- 🐛 fix(ellipsis): 修复设置行数超过内容高度时只显示一行内容的问题 ([#2028](https://github.com/jdf2e/nutui-react/pull/2028)) @boiboif `v2.4.1`
- 🐛 fix(ellipsis): 修复小程序文本省略问题 ([#1888](https://github.com/jdf2e/nutui-react/pull/1888)) @Eiinu `v2.3.8`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=ellipsis&expanded=true)
