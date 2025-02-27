# Space

Maintain the same width in the arrangement of elements.

## Import

```tsx
import { Space } from '@nutui/nutui-react'
```

## Code

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Wrap

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Direction

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Gap

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### MainAxis alignment

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### CrossAxis alignment

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Space

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| direction | space direction | `vertical \| horizontal` | `horizontal` |
| align | space align | `start \| end \|center \| baseline` | `-` |
| justify | space justify | `start \| end \| center \| between \| around \| evenly \| stretch` | `-` |
| wrap | space wrap，Only valid when horizontal | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer
to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-space-gap | `8px` | spacing size |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Space)

### Component Logs

- 🐛 fix(space): demo拆解与规范 ([#2021](https://github.com/jdf2e/nutui-react/pull/2021)) @Alex-huxiyang `v2.4.1`
- 🐛 fix(space): 主/交叉轴的 demo 与国际化改进 ([#1867](https://github.com/jdf2e/nutui-react/pull/1867)) @Alex.huxiyang `v2.3.7`
- ✨ feat(space): update demos and docs of justify and align ([#1856](https://github.com/jdf2e/nutui-react/pull/1856)) @Alex.huxiyang `v2.3.6`
- ✨ 提取 Taro 的 Demo 到 workspace ([#1302](https://github.com/jdf2e/nutui-react/pull/1302)) @oasis-cloud `v2.0.13`
- 🐛 space 版本号修改为 2.0 ([#1265](https://github.com/jdf2e/nutui-react/pull/1265)) @oasis-cloud `v2.0.9`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=space&expanded=true)
