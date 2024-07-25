# NumberKeyboard

Virtual numeric keypad, used for scenarios where payment passwords are entered.

## Import

```tsx
import { NumberKeyboard } from '@nutui/nutui-react'
```

## Demo

### Default Keyboard

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Keyboard With Sidebar

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Random Key Order

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Show Keyboard With Title

You can use `rightActions` when you want to set the right actions on the title bar.The vuale of it is `Done`.

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Show IdNumber Keyboard

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Use Popup Props

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## NumberKeyboard

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show keyboard | `boolean` | `false` |
| title | Keyboard title | `ReactNode` | `-` |
| rightActions | Right actions at title bar | `ReactNode` | `-` |
| type | Keyboard type, default/rightColumn | `'default' \| 'rightColumn'` | `default` |
| random | Whether to shuffle the order of keys | `boolean` | `false` |
| custom | Content of bottom left key, Array form supports adding up to two | `string[]` | `-` |
| confirmText | Custom done button text, Such as "pay", "next", "submit", used by `rightColumn` | `string` | `done` |
| onChange | Emitted when a key is pressed | `(value: string) => void` | `-` |
| onDelete | Emitted when the delete key is pressed | `-` | `-` |
| onClose | Emitted when the close button or non-keyboard area is clicked is clicked | `-` | `-` |
| onConfirm | Emitted when confirm key is pressed | `-` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-numberkeyboard-padding | padding | `0 0 22px 0` |
| \--nutui-numberkeyboard-header-close-padding | header close padding | `0 16px` |
| \--nutui-numberkeyboard-header-close-color | header close color | `#576b95` |
| \--nutui-numberkeyboard-header-close-font-size | header close fontSize | `14px` |
| \--nutui-numberkeyboard-header-close-background-color | header close backgroundColor | `transparent` |
| \--nutui-numberkeyboard-key-background-color | key backgroundColor | `#fff` |
| \--nutui-numberkeyboard-key-active-background-color | key active backgroundColor | `#ebedf0` |
| \--nutui-numberkeyboard-wrapper-background-color | key wrapper backgroundColor | `$color-background-sunken` |
| \--nutui-numberkeyboard-key-border | key border | `none` |
| \--nutui-numberkeyboard-key-height | key height | `48px` |
| \--nutui-numberkeyboard-key-line-height | key lineHeight | `1.5` |
| \--nutui-numberkeyboard-key-border-radius | key borderRadius | `8px` |
| \--nutui-numberkeyboard-key-font-size | key fontSize | `28px` |
| \--nutui-numberkeyboard-key-font-color | key fontColor | `#333` |
| \--nutui-numberkeyboard-key-confirm-font-size | key confirm fontSize | `16px` |
| \--nutui-numberkeyboard-key-confirm-font-color | key confirm fontColor | `#fff` |
| \--nutui-numberkeyboard-key-confirm-background-color | key confirm backgroundColor | `$color-primary` |
| \--nutui-numberkeyboard-background-color | keyboard container backgroundColor | `$color-background` |
