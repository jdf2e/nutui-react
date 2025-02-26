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

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ASafeArea)

### Component Logs

- 🐛 fix(navbar): safearea displays abnormal when safeAreaInsetTop has been set true ([#2632](https://github.com/jdf2e/nutui-react/pull/2632)) `v2.6.22`
- 🐛 safearea for ac ([#2293](https://github.com/jdf2e/nutui-react/pull/2293)) @xiaoyatong `v2.6.8`
- 🐛 ActionSheet 增加安全区处理 ([#2286](https://github.com/jdf2e/nutui-react/pull/2286)) @xiaoyatong `v2.6.7`
- ✨ feat(safearea): 新增安全区组件 ([#1642](https://github.com/jdf2e/nutui-react/pull/1642)) @oasis-cloud `v2.1.0`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=safearea&expanded=true)
