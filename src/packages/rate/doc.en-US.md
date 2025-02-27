# Rate

Use for quick rating actions, or to showcase reviews.

## Import

```tsx
import { Rate } from '@nutui/nutui-react'
```

## Code

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Controlled Mode

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Half Star

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Icon

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom Quantity

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Set Minimum Quantity (Support Half Star)

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom Color

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Disabled State

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### ReadOnly State

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### OnChange Event

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Touch to Select

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### Touch Event

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## Rate

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| size | Score size | `large` \| `normal` \| `small` | `normal` |
| showScore | Show Score | `boolean` | `false` |
| defaultValue | Uncontrolled star value | `number` | `0` |
| value | Controlled star value | `number` | `0` |
| count | total number of stars | `number` | `5` |
| min | At least the number of STAR | `number` | `0` |
| uncheckedIcon | Use icon (unchecked) | `ReactNode` | `star-n` |
| checkedIcon | Use icon (checked) | `ReactNode` | `star-n` |
| allowHalf | Half star or not | `boolean` | `false` |
| readOnly | Read only | `boolean` | `false` |
| disabled | Disable or not | `boolean` | `false` |
| touchable | Enable touch to select ｜ `boolean` | `false` |
| onChange | Event triggered when the current score is modified | `(value: number) => void` | `-` |
| onTouchEnd | Event triggered when touch end | `(event: TouchEvent, value: number) => void` | `-` |

## Theme

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-rate-item-margin | spacing | `4px` |
| \--nutui-rate-icon-color | icon activation color | `$color-primary-icon` |
| \--nutui-rate-icon-inactive-color | icon inactive color | `$color-primary-icon-disabled` |
| \--nutui-rate-icon-size | icon size | `12px` |
| \--nutui-rate-font-color | Rating font color | `$color-primary-icon` |
| \--nutui-rate-font-size | Rating font size | `12px` |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Rate)

### Component Logs

- 💡 🏡 chore: migrate to v3 `v2.7.2`
- 🐛 fix(rate): demo拆解与规范 ([#2045](https://github.com/jdf2e/nutui-react/pull/2045)) @sandra66888 `v2.4.2`
- 💡 test: migrate jest to vitest ([#2057](https://github.com/jdf2e/nutui-react/pull/2057)) @eiinu `v2.4.2`
- ✨ generate stylesheets containing RTL-related styles ([#1889](https://github.com/jdf2e/nutui-react/pull/1889)) @oasis-cloud `v2.3.9`
- ✨ feat(rate): 新增 touchable 属性支持滑动选择 ([#1880](https://github.com/jdf2e/nutui-react/pull/1880)) @Eiinu `v2.3.8`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=rate&expanded=true)
