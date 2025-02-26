# Notify

Show message tips at the top of the page

## Import

```tsx
import { Notify } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Notify Type

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Style

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Duration

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Notify

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Display Type（primary,success ,danger,warning） | `string` | `danger` |
| duration | Display duration (ms),value is 0 ,notify not disappear | `string` | `3000` |
| position | Custom Position (top, bottom) | `string` | `top` |
| onClick | Emitted when notify is clicked | `onClick: () => void` | `-` |
| onClose | Emitted when notify is closed | `onClose: () => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-notify-height | Height of notify | `40px` |
| \--nutui-notify-padding | Inside margin of notify | `0 10px` |
| \--nutui-notify-font-size | The font size of notify | `$font-size-base` |
| \--nutui-notify-text-color | The text color of notify | `$white` |
| \--nutui-notify-base-background-color | The background color of notify | `$color-primary` |
| \--nutui-notify-primary-background-color | The main notify background color | `$color-info` |
| \--nutui-notify-success-background-color | Background color of successful notify | `$color-success` |
| \--nutui-notify-danger-background-color | Danger notify background color | `$color-primary` |
| \--nutui-notify-warning-background-color | Warning notify background color | `$color-warning` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ANotify)

### Component Logs

- 💡 🏡 chore(notify): demo拆解与规范 ([#2151](https://github.com/jdf2e/nutui-react/pull/2151)) @Alex-huxiyang `v2.6.0`
- 💡 style(notify): 优化样式布局 ([#1762](https://github.com/jdf2e/nutui-react/pull/1762)) @xiaoyatong `v2.3.0`
- 🐛 fix(Notify): type NotifyType incorrectly spelling warning as waring ([#1441](https://github.com/jdf2e/nutui-react/pull/1441)) @Katz `v2.0.18`
- ✨ feat(notify): 支持函数调用的展开和关闭 ([#1271](https://github.com/jdf2e/nutui-react/pull/1271)) @oasis-cloud `v2.0.9`
- 💡 🛠 refactor: notify ([#983](https://github.com/jdf2e/nutui-react/pull/983)) @拧巴的猫 `v2.0.0-alpha.9`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=notify&expanded=true)
