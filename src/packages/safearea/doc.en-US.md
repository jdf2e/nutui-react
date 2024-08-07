# SafeArea

Provides adaptive margin adjustment in full screen.When the web page is displayed in full screen, automatic adaptation can be achieved with the help of the safe area.

## Import

```tsx
import { SafeArea } from '@nutui/nutui-react'
```

## Code

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## SafeArea

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| position | Position of the safe area | `'top' \| 'bottom'` | `-` |

## Theme

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-safe-area-multiple | Displayed multiple | `1` |
