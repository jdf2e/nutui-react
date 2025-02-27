# Picker

The picker component is usually used with Popup Component.

## Import

```tsx
import { Picker } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Default Index

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Controlled

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Multiple Columns

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Tile

Cancel the 3D display effect by setting `threeDimensional`, and control the duration of fast scrolling by setting `duration`.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Cascade

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Async

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Custom Theme

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Picker

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Is Show | `boolean` | `false` |
| title | Toolbar title | `string` | `-` |
| options | Columns data | `Array` | `[]` |
| value | Controlled Value | `Array` | `[]` |
| defaultValue | Default Index | `Array` | `[]` |
| threeDimensional | Turn on 3D effects | `boolean` | `true` |
| duration | move animation duration, ms | `string` \| `number` | `1000` |
| popupProps | popup props | `object` | `-` |
| closeOnOverlayClick | Tap Mask off | `boolean` | `true` |
| onConfirm | Emitted when click confirm button. | `(options, value) => void` | `-` |
| onChange | Emitted when current option changed. | `(options, value) => void` | `-` |
| onCancel | Emitted when click cancel button. | `() => void` | `-` |
| onClose | Emitted when click confirm and cancel button. | `(options, value) => void` | `-` |
| afterClose | Emitted when cascade changed. | `(options, value) => void` | `-` |

### options

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| text | Text of column | `string` \| `number` | `-` |
| value | Value of column | `string` \| `number` | `-` |
| children | Cascader Option | `Array` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-picker-title-cancel-color | picker title cancel color | `$text-color` |
| \--nutui-picker-title-cancel-font-size | picker title cancel font size | `14px` |
| \--nutui-picker-title-ok-color | picker title confirm color | `$color-primary` |
| \--nutui-picker-title-ok-font-size | picker title confirm font size | `14px` |
| \--nutui-picker-list-height | picker pannel list height | `252px` |
| \--nutui-picker-item-height | picker pannel item height | `36px` |
| \--nutui-picker-item-text-color | picker pannel item text color | `$color-title` |
| \--nutui-picker-item-text-font-size | picker pannel item text font size | `14px` |
| \--nutui-picker-item-active-line-border | picker pannel item active line border | `1px solid #d8d8d8` |

## Contribution

### Issues

- [DatePicker受控情况下，2月切换存在问题](https://github.com/jdf2e/nutui-react/issues/2924)
- [[FR]: 缺少Indexes 索引选择器组件。 TaroUI有，NutUI缺少](https://github.com/jdf2e/nutui-react/issues/2945)

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3APicker)

### Component Logs

- 🐛 fix(picker): 函数调用之前检查 locale 是否已经定义 ([#2259](https://github.com/jdf2e/nutui-react/pull/2259)) @Alex-huxiyang `v2.6.8`
- 🐛 fix(picker): 修复连续多次打开 picker 时显示值错误 ([#2222](https://github.com/jdf2e/nutui-react/pull/2222)) @eiinu `v2.6.4`
- 💡 🏡 chore(picker): demo拆解与规范 ([#2157](https://github.com/jdf2e/nutui-react/pull/2157)) @Alex-huxiyang `v2.6.0`
- 🐛 fix(picker): 优化 options 的 text 属性的判空逻辑 ([#1837](https://github.com/jdf2e/nutui-react/pull/1837)) @oasis-cloud `v2.3.5`
- 🐛 fix(picker): 修复 safari 下 mask 样式问题 ([#1843](https://github.com/jdf2e/nutui-react/pull/1843)) @Eiinu `v2.3.5`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=picker&expanded=true)
