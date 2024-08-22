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
| activeColor | icon active color | `string` | `#1989fa` |
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
| \--nutui-tabbar-text-large-font-size | title fontSize when icon is null | `$font-size-large` |
| \--nutui-tabbar-text-large-font-weight | title fontWeight when icon is null | `$font-weight` |
| \--nutui-tabbar-text-line-height | title lineHeight | `initial` |
| \--nutui-tabbar-text-margin-top | title marginTop | `3px` |
