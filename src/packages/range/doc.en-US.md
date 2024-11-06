# Range

Slide the input bar to select a value within a given range.

## Import

```tsx
import { Range } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Controlled

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Range Desc

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Dual thumb

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Range

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Step Size

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Hidden Range

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Hidden Tag

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Disabled

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### Custom Style

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Custom Button

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### Vertical

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### Marks

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## Range

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | default percentage, uncontrolled | `number` \| `number[]` | `0` |
| value | current percentage, controlled | `number` \| `number[]` | `0` |
| range | Whether to enable dual slider mode | `boolean` | `false` |
| max | maximum | `number` | `100` |
| min | minimum | `number` | `0` |
| maxDescription | maximum description, `null` to hidden | `ReactNode` | `-` |
| minDescription | minimum description, `null` to hidden | `ReactNode` | `-` |
| currentDescription | current progress percentage description, `null` to hidden | `((value) => ReactNode)` | `-` |
| step | step size | `number` | `1` |
| disabled | Whether to disable the slider | `boolean` | `false` |
| vertical | Whether to display vertically | `boolean` | `false` |
| marks | scale mark | `Object{key: number}` | `{}` |
| button | custom slide button | `ReactNode` | `-` |
| onChange | Triggered when the progress changes | `(value) => void` | `-` |
| onStart | Triggered when dragging starts | `-` | `-` |
| onEnd | Triggered when the drag is over | `(value) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-range-color | font color | `$color-title` |
| \--nutui-range-margin | margin | `15px` |
| \--nutui-range-height | stroke width | `4px` |
| \--nutui-range-active-color | active color | `$color-primary` |
| \--nutui-range-inactive-color | inactive color | `#fa958c` |
| \--nutui-range-button-background | button background | `$white` |
| \--nutui-range-button-width | button width | `24px` |
| \--nutui-range-button-height | button height | `24px` |
| \--nutui-range-button-border | button border | `1px solid $color-primary` |
