# Navbar

Provides navigation capabilities.

## Import

```tsx
import { NavBar } from '@nutui/nutui-react'
```

## Code Example

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Title Align

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Multi-tab Switching Navigation

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## Navbar

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| right | Right side content | `ReactNode` | `-` |
| left | The left content, rendered to the right of the return area | `ReactNode` | `-` |
| back | Returns the text of the area | `ReactNode` | `-` |
| title | Title | `ReactNode` | `-` |
| fixed | Is it fixed | `boolean` | `false` |
| safeAreaInsetTop | Whether it is suitable for the safe area | `boolean` | `false` |
| placeholder | When fixed to the top, whether to generate a placeholder element of equal height at the label position | `boolean` | `false` |
| zIndex | Navigation Bar Hierarchy | `number` \| `string` | `10` |
| onBackClick | Click the callback after the return area | `onBackClick:(event: Event)=>void` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-navbar-width | The width of the navbar | `100%` |
| \--nutui-navbar-height | The height of the navbar | `44px` |
| \--nutui-navbar-margin-bottom | Bottom margin of the navbar | `20px` |
| \--nutui-navbar-background | The navbar's background color | `$white` |
| \--nutui-navbar-box-shadow | Shadow of navbar | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-navbar-color | navbar font color | `$color-text` |
| \--nutui-navbar-font-size | navbar font size | `$font-size-base` |
| \--nutui-navbar-title-font-size | The font size of the navbar's title | `$font-size-base` |
| \--nutui-navbar-title-font-weight | The font weight of the navbar's title | `0` |
| \--nutui-navbar-title-font-color | The font color of the navbar's title | `$color-title` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ANavBar)

### Component Logs

- 🐛 fix(navbar): safearea displays abnormal when safeAreaInsetTop has been set true ([#2632](https://github.com/jdf2e/nutui-react/pull/2632)) `v2.6.22`
- 🐛 fix(navbar): demo拆解与规范 ([#2055](https://github.com/jdf2e/nutui-react/pull/2055)) @Alex-huxiyang `v2.4.2`
- 🐛 fix(sideNavBar): demo拆解与规范 ([#2058](https://github.com/jdf2e/nutui-react/pull/2058)) @Alex-huxiyang `v2.4.2`
- 💡 📖 docs(navbar): 文档可读性优化 ([#1915](https://github.com/jdf2e/nutui-react/pull/1915)) @Alex.huxiyang `v2.3.9`
- 💡 📖 docs(sidenavbar): 文档可读性优化 ([#1920](https://github.com/jdf2e/nutui-react/pull/1920)) @Alex.huxiyang `v2.3.9`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=navbar&expanded=true)
