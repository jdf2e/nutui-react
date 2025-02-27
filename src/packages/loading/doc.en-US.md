# Loading

A loading icon, Used to show the loading state

### Import

```tsx
import { Loading } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Custom Color

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Size

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### With Text

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### With Text(Vertical)

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom Text Color and Size

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom Icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### With Overlay

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Loading

### Props

| Property | Description | type | default |
| --- | --- | --- | --- |
| type | loading icon type | circular | spinner | `circular` |
| direction | direction of icon and text | horizontal | vertical | `horizontal` |
| icon | custom loading icon | tsx.Element | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-loading-icon-color | icon color | `$color-text-help` |
| \--nutui-loading-icon-size | icon size | `$font-size-s` |
| \--nutui-loading-color | font color | `$color-text-help` |
| \--nutui-loading-font-size | font size | `$font-size-s` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ALoading)

### Component Logs

- 💡 📖 docs(loading): 主题变量修正 ([#3008](https://github.com/jdf2e/nutui-react/pull/3008)) `v2.7.9`
- 💡 🏡 chore(loading): demo拆解与规范 ([#2155](https://github.com/jdf2e/nutui-react/pull/2155)) @Alex-huxiyang `v2.6.0`
- 💡 style(loading): 修订css变量名,补充css变量文档 ([#1721](https://github.com/jdf2e/nutui-react/pull/1721)) @xiaoyatong `v2.3.0`
- ✨ loading 组件 ([#1204](https://github.com/jdf2e/nutui-react/pull/1204)) @mike8625 `v2.0.10`
- 🐛 loading 组件导出 props 类型 ([#1278](https://github.com/jdf2e/nutui-react/pull/1278)) @oasis-cloud `v2.0.10`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=loading&expanded=true)
