# SearchBar

The input box component used to search the scene.

## Import

```tsx
import { SearchBar } from '@nutui/nutui-react'
```

## Demo

### Basic usage

`SearchBar`'s `placeholder` 'attribute supports customization.

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Search box shape and maximum length

`SearchBar`'s `shape` Attribute supports defining fillet right angles，`maxLength` Can control the maximum length of input characters。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Background settings inside and outside the search box

`SearchBar`'s CSS variable

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Search box text settings

`SearchBar`’s `left` Property to set the text on the left side of the search box，`right` Property to set the right side

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Customize icon settings

`SearchBar`'s `left` `right` `rightIn` Property can set the customize the content

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Customize settings

`SearchBar`'s `leftIn` Property can set the customize the content

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Data change monitoring

`SearchBar`'s `onChange` You can get the input content.

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## SearchBar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | current input value | `string` | `-` |
| placeholder | input box default dark texture | `string` | `Please enter` |
| shape | search box shape, the optional value is 'round ' | `string` | `square` |
| disabled | whether to disable the input box | `boolean` | `false` |
| readOnly | the input box is read-only | `boolean` | `false` |
| maxLength | maximum input length | `number` | `9999` |
| clearable | whether to display the clear button | `boolean` | `true` |
| autoFocus | auto focus | `boolean` | `false` |
| backable | whether to display the back button | `boolean` | `false` |
| leftIn | input box, left in area | `ReactNode` | `<Search width="12" height="12" />` |
| rightIn | input box, right in area | `ReactNode` | `-` |
| left | outside the input box, left | `ReactNode` | `-` |
| right | outside the input box, right | `ReactNode` | `-` |
| onChange | triggered when entering content | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | `-` |
| onFocus | triggered when focusing | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onBlur | triggered when out of focus | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onClear | triggered when clicking clear | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |
| onSearch | trigger when confirming search | `(val: string) => void` | `-` |
| onInputClick | triggered when clicking the input area | `(event: MouseEvent<HTMLInputElement>) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-searchbar-width | searchbar width | `100%` |
| \--nutui-searchbar-padding | searchbar padding | `6px 16px` |
| \--nutui-searchbar-background | searchbar background | `$color-background` |
| \--nutui-searchbar-color | searchbar font color | `$color-title` |
| \--nutui-searchbar-gap | searchbar gap | `16px` |
| \--nutui-searchbar-font-size | searchbar font size | `$font-size-base` |
| \--nutui-searchbar-content-padding | searchbar content padding | `0px 12px` |
| \--nutui-searchbar-content-background | searchbar content background | `$color-background-overlay` |
| \--nutui-searchbar-content-border-radius | searchbar content border radius | `4px` |
| \--nutui-searchbar-content-round-border-radius | searchbar content border radius when mode is round | `18px` |

| \--nutui-searchbar-input-height | searchbar input height | `32px` |
| \--nutui-searchbar-input-padding | searchbar input padding | `0 4px` |
| \--nutui-searchbar-input-text-color | searchbar input text color | `$color-title` |
| \--nutui-searchbar-input-curror-color | searchbar input curror color | `$color-title` |
| \--nutui-searchbar-input-text-align | searchbar input text align | `left` |
