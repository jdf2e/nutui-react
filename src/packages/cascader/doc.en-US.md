# Cascader

The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities.

## Import

```tsx
import { Cascader } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

Pass in the `options` list

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Custom attribute name

use `optionKey` Specify the property name.

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Async loading

Use `lazy` to identify whether data needs to be obtained dynamically. At this time, not transmitting `options` means that all data needs to be loaded through `lazyload` . The first loading is distinguished by the `root` attribute. When a non leaf node is encountered, the `lazyload` method will be called. The parameters are the current node and the `resolve` method. Note that the `resolve` method must be called. If it is not transmitted to a child node, it will be treated as a leaf node.

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Async loading of partial data

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Automatic data conversion

If your data is a flat structure that can be converted into a tree structure, you can tell the component that automatic conversion is required through `format`, `format` accepts four parameters, `topid` is the parent ID of the top-level node, `idkey` is the unique ID of the node, `pidkey` is the attribute name pointing to the parent node ID, and if there is a `sortkey`, `Array.prototype.sort()` to sort at the same level.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Customize CSS

Use configprovider to set custom CSS

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Cascader

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | Selected value,Controlled | `(number \| string)[]` | `-` |
| defaultValue | Default selected value | `(number \| string)[]` |
| options | Cascade data | `Array` | `-` |
| popup | Whether to display the pop-up window status | `boolean` | `true` |
| visible | Cascading show hidden states | `boolean` | `false` |
| activeColor | Check the active color | `string` | `-` |
| activeIcon | Checked Item Icon | `string` | `ReactNode` |
| lazy | Whether to enable dynamic loading | `boolean` | `false` |
| optionKey | Customize `options` structure | `object` | `-` |
| format | When options is a flat structure that can be converted into a tree structure, configure the conversion rules | `object` | `-` |
| title | Title | `string` | `-` |
| closeIconPosition | Cancel the button position and inherit the popup component | `string` | `top-right` |
| closeIcon | Customize the close button and inherit the popup component | `ReactNode` | `close` |
| closeable | Whether to display the close button and inherit the popup component | `boolean` | `true` |
| onLoad | Dynamic loading callback, which takes effect when dynamic loading is enabled | `(node: any, resolve: any) => void` | `-` |
| onChange | Triggered when the selected value changes | `(value: CascaderValue, params?: any) => void` | `-` |
| onPathChange | Triggered when the selected item changes | `(value: CascaderValue, params: any) => void` | `-` |

### Ref

| Method | Description | Parameter |
| --- | --- | --- |
| open | show Cascader | `() => void` |
| close | Close Cascader | `() => void` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-cascader-font-size | cascader font size | `$font-size-base` |
| \--nutui-cascader-pane-height | cascader pane height | `342px` |
| \--nutui-cascader-tabs-item-padding | cascader tabs item padding | `0 10px` |
| \--nutui-cascader-item-height | cascader item height | `40px` |
| \--nutui-cascader-item-padding | cascader item padding | `10px 20px` |
| \--nutui-cascader-item-margin | cascader item margin | `0px` |
| \--nutui-cascader-item-border-bottom | cascader item border bottom | `0px solid #ddd` |
| \--nutui-cascader-item-color | cascader item color | `$color-title` |
| \--nutui-cascader-item-font-size | cascader item font size | `$font-size-base` |
| \--nutui-cascader-item-active-color | cascader item active color | `$color-primary` |
