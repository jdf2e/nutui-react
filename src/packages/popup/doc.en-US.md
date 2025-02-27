# Popup

Popup layer container, used to display pop-up windows, information prompts, etc.

## Import

```tsx
import { Popup } from '@nutui/nutui-react'
```

## code demo

### Basic usage

`visible` Control show/hide

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### popup location

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Close Icon

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Stop close

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Rounded popup

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Mount the specified node

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### multi-layer stacking

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Popup

### Props

| Props | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether the current component is displayed | `boolean` | `false` |
| zIndex | mask level | `string` \| `number` | `2000` |
| duration | Mask animation duration, in ms | `number` | `300` |
| overlayClassName | custom mask class | `string` | `-` |
| overlayStyle | custom mask style | `CSSProperties` | `-` |
| lockScroll | Whether the background is locked ,strict is used to support iOS12 | `boolean\|strict` | `true` |
| overlay | Whether to show the mask | `boolean` | `true` |
| closeOnOverlayClick | Whether to click the mask to close | `boolean` | `true` |
| position | popup location | `top` \| `bottom` \| `left` \| `right` \| `center` | `center` |
| transition | animation name | `string` | `-` |
| closeable | whether to show the close button | `boolean` | `false` |
| closeIconPosition | close button position | `top-left` \| `top-right` \| `bottom-left` \| `bottom-right` | `top-right` |
| closeIcon | Custom Icon | `ReactNode` | `close` |
| left | The left of title | `ReactNode` | `-` |
| title | The center of title | `ReactNode` | `-` |
| description | The subtitle/description | `ReactNode` | `-` |
| destroyOnClose | Whether to close after the component is destroyed | `boolean` | `false` |
| round | Whether to show rounded corners | `boolean` | `false` |
| portal | Mount the specified node | `HTMLElement` \| `(() => HTMLElement)` | null` | `null` |
| onClick | Triggered when the popup is clicked | `event: MouseEvent` | `-` |
| onCloseIconClick | Fired when the close icon is clicked | `event: MouseEvent` | `-` |
| onOpen | Triggered when the popup is opened | `-` | `-` |
| onClose | Fired when the popup is closed | `-` | `-` |
| afterShow | afterShow from `Overlay`, Fired when the mask opening animation ends | `event: HTMLElement` | `-` |
| afterClose | afterClose from `Overlay`, Fired when the mask closing animation ends | `event: HTMLElement` | `-` |
| onOverlayClick | Click on the mask to trigger | `event: MouseEvent` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-popup-border-radius | popup's border radius | `24px` |
| \--nutui-popup-icon-size | popup's title icon size | `18px` |
| \--nutui-popup-title-padding | popup's title padding | `16px` |
| \--nutui-popup-title-font-size | popup's title font size | `18px` |
| \--nutui-popup-description-font-size | popup's subtitle/description font size | `10px` |
| \--nutui-popup-title-height | popup's title height | `50px` |
| \--nutui-popup-title-border-bottom | popup's title border-bottom | `0` |
| \--nutui-popup-animation-duration | lose icon's animation duration | `0.3s` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3APopup)

### Component Logs

- 💡 📖 docs: popup 使用说明描述优化([#2943](https://github.com/jdf2e/nutui-react/pull/2943)) `v2.7.7`
- 🐛 fix(popup): display should not trigger the scrollview to update ([#2773](https://github.com/jdf2e/nutui-react/pull/2773)) `v2.7.1`
- ✨ feat(popup): lockscroll 增加可选值 strict, 用于支持 iOS12 ([#2629](https://github.com/jdf2e/nutui-react/pull/2629)) `v2.6.22`
- ✨ demos for popup & dialog ([#2574](https://github.com/jdf2e/nutui-react/pull/2574)) `v2.6.18`
- 🐛 fix(popup): demo拆解与规范 ([#2122](https://github.com/jdf2e/nutui-react/pull/2122)) @ZissyW `v2.5.1`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=popup&expanded=true)
