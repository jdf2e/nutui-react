# Radio

Used to single select in a set of alternatives

## Import

```tsx
import { Radio } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Disable an item in Group mode

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Disable all options in Group mode

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Disable an item in Group mode

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Disable all options in Group mode

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Horizontal use

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Custom size

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Custom Icon

It is recommended that 'icon' and 'activeIcon' be modified together

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Custom Icon, render list in Group mode

It is recommended that 'icon' and 'activeIcon' be modified together

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Trigger Event

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## Render radios by configuring options

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

## Set shape

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## Radio

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| checked | specifies whether it is currently checked | `boolean` | `-` |
| defaultChecked | Initially checked or not | `boolean` | `-` |
| disabled | Whether to disable selection | `boolean` | `false` |
| value | The identification value carried, used in Group mode | `string` \| `number` | `-` |
| labelPosition | The position of the text | `left` \| `right` | `right` |
| icon | <a href="#/icon">icon name</a>, before selection (it is recommended to modify it together with `activeIcon`) | `ReactNode` | `'CheckNormal'` |
| activeIcon | <a href="#/icon">icon name</a>, after selected (it is recommended to modify it together with `icon`) | `ReactNode` | `'CheckChecked'` |
| shape | shape | `button` \| `round` | `round` |
| onChange | Triggered when the checked state changes | `(checked: boolean) => void` | `-` |

## Radio.Group

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | identifier of the currently selected item | `string` \| `number` | `-` |
| labelPosition | The position of the text | `left` \| `right` | `right` |
| disabled | Whether to disable | `boolean` | `false` |
| shape | shape | `button` \| `round` | `-` |
| direction | use landscape orientation | `horizontal` \| `vertical` | `vertical` |
| options | Configure options to render radio buttons | `Array<{ label: string value: string disabled?: boolean }>` | `-` |
| onChange | Triggered when the value changes | `(value: string \| number) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS Variables, which can be used for custom styles, please refer to [ConfigProvider Components](#/zh-CN/component/configprovider) for usage methods.

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-radio-icon-font-size | icon font size | `18px` |
| \--nutui-radio-label-font-size | font size | `14px` |
| \--nutui-radio-label-color | font color | `$color-title` |
| \--nutui-radio-label-margin-left | left margin of label | `6px` |
| \--nutui-radio-button-font-size | shape is the font size of the button | `12px` |
| \--nutui-radio-button-color | button font color | `$color-text` |
| \--nutui-radio-button-background | shape is the background color of the button | `$color-background` |
| \--nutui-radio-button-active-border | The shape is the border of the active button | `1px solid $color-primary` |
| \--nutui-radio-button-padding | The shape is the padding of the button | `5px 18px` |
| \--nutui-radio-button-border-radius | The shape is the rounded corner of the button | `15px` |
| \--nutui-radiogroup-radio-margin | Margin Right of each radio in Group mode | `20px` |
| \--nutui-radiogroup-radio-margin-bottom | Margin Bottom of each radio in Group mode | `5px` |
| \--nutui-radiogroup-radio-label-margin | Label margin in each radio in Group mode | `0 5px 0 5px` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ARadio)

### Component Logs

- 🐛 fix(radio): lint fixed ([#2635](https://github.com/jdf2e/nutui-react/pull/2635)) `v2.6.22`
- 💡 🏡 chore(radio): demo拆解与规范 ([#2158](https://github.com/jdf2e/nutui-react/pull/2158)) @3042503122 `v2.6.0`
- 🐛 fix(radio): 样式变量修复(issue) ([#2149](https://github.com/jdf2e/nutui-react/pull/2149)) @Alex.huxiyang `v2.5.2`
- 💡 style(radio): 优化css变量和样式 ([#1756](https://github.com/jdf2e/nutui-react/pull/1756)) @xiaoyatong `v2.3.0`
- 💡 🚀 perf: radio reverse and demos ([#1631](https://github.com/jdf2e/nutui-react/pull/1631)) @xiaoyatong `v2.1.0`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=radio&expanded=true)
