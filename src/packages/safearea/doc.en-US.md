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

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20SafeArea)

### Component Logs

- 🐛 safearea for ac ([#2293](https://github.com/jdf2e/nutui-react/pull/2293)) @xiaoyatong `v2.6.8`
- ✨ feat(safearea): 新增安全区组件 ([#1642](https://github.com/jdf2e/nutui-react/pull/1642)) @oasis-cloud `v2.1.0`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=safearea&expanded=true)
