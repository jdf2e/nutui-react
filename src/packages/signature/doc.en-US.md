# Signature

Signature component based on canvas.

## Import

```tsx
import { Signature } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Modify color and signature thickness

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## Signature

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| lineWidth | Width of line | `number` | `3` |
| strokeStyle | Drawing stroke color | `string` | `#000` |
| type | Picture format | `string` | `png` |
| unsupported | Display copy without canvas | `ReactNode` | `sorry, the current browser doesn't support canvas, so we can't use this control!` |
| onConfirm | Click the confirm button to trigger the event callback function | `onConfirm: (canvas: HTMLCanvasElement, dataurl: string, isSigned?: boolean) => void` | `-` |
| onClear | Clicking the reschedule button triggers the event callback function | `onClear: () => void` | `-` |

### Ref

| Property | Description | Type |
| --- | --- | --- |
| confirm | Confirmation of signature | `() => void` |
| clear | Clear signature | `() => void` |

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-signature-border-height | Signature area height | `10rem` |
| \--nutui-signature-border-color | Signature border color | `$color-border` |
| \--nutui-signature-border-width | Signature border width | `1px` |
| \--nutui-signature-background-color | Signature background color | `$white` |
| \--nutui-signature-font-size | Signature text size | `$font-size-base` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ASignature)

### Component Logs

- ✨ 签名组件增加当没有签名或已清空的情况下的参数暴露 ([#2288](https://github.com/jdf2e/nutui-react/pull/2288)) @xiaoyatong `v2.6.7`
- 🐛 fix(signature): 调整清空时机并更新demo ([#2190](https://github.com/jdf2e/nutui-react/pull/2190)) @Alex-huxiyang `v2.6.2`
- 🐛 fix(signature): demo拆解与规范 ([#2099](https://github.com/jdf2e/nutui-react/pull/2099)) @Alex-huxiyang `v2.5.0`
- 🐛 signature组件提取样式变量+修复taro h5 demo签字时滚动问题 ([#1220](https://github.com/jdf2e/nutui-react/pull/1220)) @songsong `v2.0.4`
- 🐛 修复signature小程序下demo签字时页面跟随滚动问题 ([#1225](https://github.com/jdf2e/nutui-react/pull/1225)) @songsong `v2.0.4`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=signature&expanded=true)
