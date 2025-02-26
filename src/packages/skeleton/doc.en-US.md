# Skeleton

Filling gray bitmap in the area to be loaded on the page is essentially the transition effect in the process of interface loading.

## Import

```tsx
import { Skeleton } from '@nutui/nutui-react'
```

## Code demonstration

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Incoming multiline

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Show Faces

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Title paragraph fillet style

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Display subcomponents

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Skeleton

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to display skeleton screen | `boolean` | `false` |
| animated | Whether to turn on skeleton screen animation | `boolean` | `false` |
| avatar | Show avatar | `boolean` | `false` |
| avatarShape | Avatar shape: square / round | `string` | `round` |
| avatarSize | Avatar size | `string` | `50px` |
| rows | Set the number of paragraph lines | `number` | `1` |
| title | Show paragraph titles | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-skeleton-background | background | `rgb(239, 239, 239)` |
| \--nutui-skeleton-line-width | line width | `100%` |
| \--nutui-skeleton-line-height | line height | `15px` |
| \--nutui-skeleton-line-border-radius | line borderRadius | `0` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ASkeleton)

### Component Logs

- 🐛 fix(skeleton): demo拆解与规范 ([#2047](https://github.com/jdf2e/nutui-react/pull/2047)) @wanglihuaya `v2.4.2`
- 💡 📖 docs: 删除了skeleton文档中无用的props(width,height) ([#1303](https://github.com/jdf2e/nutui-react/pull/1303)) @ivan-My `v2.0.13`
- 💡 🛠 refactor: Skeleton ([#1036](https://github.com/jdf2e/nutui-react/pull/1036)) @Eiinu `v2.0.0-alpha.11`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=skeleton&expanded=true)
