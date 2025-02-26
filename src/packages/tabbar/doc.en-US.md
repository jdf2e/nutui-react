# Tabbar

Bottom Navigation Common Scenarios

## Import

```tsx
import { Tabbar } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Custom DefaultValue

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Only Icon

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### No Icon

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Logo Tips

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Dot

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom Color

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Tabbar With Custom Number Of Icons

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Fixed Bottom

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Tabbar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | The default index value of the selected label | `number` | `0` |
| value | The index value of the selected label | `number` | `-` |
| fixed | Whether it is fixed at the bottom of the page | `boolean` | `false` |
| activeColor | icon active color | `string` | `#0073ff` |
| inactiveColor | Icon inactive color | `string` | `#7d7e80` |
| safeArea | Whether to enable the full screen bottom safety zone adaptation of the iphone series | `boolean` | `false` |
| onSwitch | Trigger an event when switching tabs | `(value) => void` | `-` |

## Tabbar.Item

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | the title of the tab | `ReactNode` | `-` |
| icon | Custom icon | `ReactNode` | `-` |
| value | value to show in Badge, eg number、charctor and custom content | `ReactNode` | `-` |
| max | when value is number, it's the max size | `number` | `99` |
| dot | Whether Badge is dotted | `boolean` | `false` |
| top | Up and down offset of Badge, support unit setting, can be set to: 5, etc. | `number` | `0` |
| right | Left and right offset of Badge, support unit setting, can be set to: 5, etc. | `number` | `0` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-tabbar-height | tabbar height | `50px` |
| \--nutui-tabbar-active-color | active color | `$color-primary` |
| \--nutui-tabbar-inactive-color | default color | `$color-title` |
| \--nutui-tabbar-border-top | borderTop | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | borderBottom | `1px solid #eee` |
| \--nutui-tabbar-box-shadow | boxShadow | `none` |
| \--nutui-tabbar-text-font-size | title fontSize | `$font-size-xs` |
| \--nutui-tabbar-text-large-font-size | title fontSize when icon is null | `$font-size-l` |
| \--nutui-tabbar-text-large-font-weight | title fontWeight when icon is null | `$font-weight` |
| \--nutui-tabbar-text-line-height | title lineHeight | `initial` |
| \--nutui-tabbar-text-margin-top | title marginTop | `3px` |

## Contribution

### Issues

- [Tabbar增加onSwitch调用函数，switchTab时跳转与Tabbar.Item选中不同步](https://github.com/jdf2e/nutui-react/issues/2170)

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ATabbar)

### Component Logs

- 🐛 fix(tabbar): demo拆解与规范&脚本增强 ([#2059](https://github.com/jdf2e/nutui-react/pull/2059)) @Alex-huxiyang `v2.4.2`
- 💡 📖 docs(tabbar): 文档可读性优化 ([#1921](https://github.com/jdf2e/nutui-react/pull/1921)) @Alex.huxiyang `v2.3.9`
- 💡 🐛 fix(tabbar): fix icon color ([#1816](https://github.com/jdf2e/nutui-react/pull/1816)) @xiaoyatong `v2.3.4`
- 🐛 fix(tabbaritem): 将 clone 子元素的方法，改为 context 的方式，隐藏内部使用的 props，精简对外暴露的 props 类型 ([#1811](https://github.com/jdf2e/nutui-react/pull/1811)) @oasis-cloud `v2.3.3`
- 💡 style(tabbar): add css variable ([#1742](https://github.com/jdf2e/nutui-react/pull/1742)) @xiaoyatong `v2.3.0`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=tabbar&expanded=true)
