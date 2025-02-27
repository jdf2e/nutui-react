# Divider

Separate content into multiple areas.

## Import

```tsx
import { Divider } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

Default render one horizontal divider line.

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### With Text

Insert text into divider with default slot.

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Content Position

Set Content Position with `contentPosition` attribute.

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Dashed

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom Style

User can custom divider style with `style` attribute.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Vertical Divider

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Divider

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| contentPosition | Content position | `left` \| `center` \| `right` | `center` |
| direction | The direction of divider | `horizontal` \| `vertical` | `horizontal` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-divider-margin | The margin value of the overall content of the dividing line | `16px 0` |
| \--nutui-divider-border-color | The border color of the divider | `$color-border` |
| \--nutui-divider-text-font-size | The font-size of the overall content of the dividing line | `$font-size-base` |
| \--nutui-divider-text-color | The color of the overall content of the dividing line | `$color-title` |
| \--nutui-divider-line-height | The row height of the dividing line | `1px` |
| \--nutui-divider-spacing | The spacing value between the dividing line of the text | `8px` |
| \--nutui-divider-vertical-height | The height of the vertical split line | `12px` |
| \--nutui-divider-vertical-margin | The margin value of the vertical split line | `0 8px` |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Divider)

### Component Logs

- 🐛 optimize vertical type syntax for divider ([#2664](https://github.com/jdf2e/nutui-react/pull/2664)) `v2.7.0`
- 🐛 fix(divider): demo拆解与规范 ([#2013](https://github.com/jdf2e/nutui-react/pull/2013)) @Alex-huxiyang `v2.4.1`
- 💡 🌈 style: divider css 修改, 修改部分css变量 ([#1669](https://github.com/jdf2e/nutui-react/pull/1669)) @xiaoyatong `v2.2.0`
- 💡 📖 docs: divider 组件的 styles 属性示例改为 style ([#1290](https://github.com/jdf2e/nutui-react/pull/1290)) @oasis-cloud `v2.0.11`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=divider&expanded=true)
