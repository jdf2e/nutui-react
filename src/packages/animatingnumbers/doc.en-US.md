# AnimatingNumbers

Digital animation collection

## Import

```tsx
import { AnimatingNumbers } from '@nutui/nutui-react'
```

## Demo

### AnimatingNumbers.CountUp - Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### AnimatingNumbers.CountUp - Custom styles to dynamically modify data (maximum number of bits required)

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## AnimatingNumbers.CountUp

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| length | Set the maximum display length, the number of bits is not enough, the number of bits before the zero | `number` | `0` |
| value | The end value, | `string` | `number` |
| delay | Wait time for animation execution, in ms | `number` | `300` |
| duration | Animation execution time, in s | `number` | `1` |
| thousands | Whether there are thousands separators | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-countup-width | width of countup item | `auto` |
| \--nutui-countup-height | height of countup item | `32px` |
| \--nutui-countup-base-size | countup font size | `18px` |
| \--nutui-countup-border-radius | border radius of item | `4px` |
| \--nutui-countup-lr-margin | margin of item | `0` |
| \--nutui-countup-bg-color | background color of item | `inherit` |
| \--nutui-countup-color | color of item | `$color-title` |
| \--nutui-countup-separator-color | The font color of the separator | `$color-title` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AAnimatingNumbers)

### Component Logs

- 🐛 usecallback to fix render too many times, button,animatingnumbers,avatar,audio; and fix avatargroup when length > maxsize ([#2628](https://github.com/jdf2e/nutui-react/pull/2628)) `v2.6.22`
- 🐛 fix(animatingnumbers): demo拆解与规范 ([#2109](https://github.com/jdf2e/nutui-react/pull/2109)) @Alex-huxiyang `v2.5.0`
- ✨ feat(animatingNumbers): support rtl ([#1985](https://github.com/jdf2e/nutui-react/pull/1985)) @irisSong `v2.4.0`
- 🐛 fix(animatingnumbers): 修复单元测试问题 ([#1878](https://github.com/jdf2e/nutui-react/pull/1878)) @Eiinu `v2.3.7`
- 💡 🛠 refactor: animatingNumbers ([#1048](https://github.com/jdf2e/nutui-react/pull/1048)) @拧巴的猫 `v2.0.0-alpha.13`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=animatingnumbers&expanded=true)
