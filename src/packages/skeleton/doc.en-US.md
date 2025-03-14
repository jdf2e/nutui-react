# Skeleton

Filling gray bitmap in the area to be loaded on the page is essentially the transition effect in the process of interface loading.

## Import

```tsx
import { Skeleton } from '@nutui/nutui-react'
```

## Code demonstration

### Title

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Paragraph

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Mock Avatar

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Heading Paragraph

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Show subcomponents

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Skeleton

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | 是否显示骨架屏(true不显示骨架屏，false显示骨架屏) | `boolean` | `true` |
| animated | 是否开启骨架屏动画 | `boolean` | `false` |
| size | 指定使用的内置高度 | `'small' \| 'normal' \| 'large'` | `normal` |
| shape | 设置形状 | `'square' \| 'round' \| 'circle'` | `round` |
| duration | 动画时长 | `number` | `0.6` |
| rows | 设置行数 | `number` | `1` |
| width | 设置宽度，优先级高于 `size` 属性 | `string\|number` | `-` |
| height | 设置高度，优先级高于 `size` 属性 | `string\|number` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-skeleton-background | 背景 | `rgb(239, 239, 239)` |
| \--nutui-skeleton-line-width | 线条宽度 | `100%` |
| \--nutui-skeleton-line-small-height | 线条高度 | `16px` |
| \--nutui-skeleton-line-normal-height | 线条高度 | `24px` |
| \--nutui-skeleton-line-large-height | 线条高度 | `32px` |
| \--nutui-skeleton-line-border-radius | 线条边框圆角 | `4px` |

<Contribution name="Skeleton" />
