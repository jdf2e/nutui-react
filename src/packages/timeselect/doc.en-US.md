# TimeSelect

For delivery time selection

## Import

```tsx
import { TimeSelect } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Custom optionKey

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Multiple Mode

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Usage

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## TimeSelect

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | whether to display popup | `boolean` | `false` |
| title | title | `ReactNode` | `Pickup Time` |
| multiple | multiple | `boolean` | `false` |
| defaultValue | default value, uncontrolled | `DateType[]` | `-` |
| options | data | `DateType[]` | `-` |
| optionKey | key of options, `valueKey`, `textKey`, `childrenKey` | `{valueKey: 'value', textKey: 'text', childrenKey: 'children'}` | `-` |
| onSelect | trigger when close popup | `(value: DateType[]) => void` | `-` |
| onDateChange | trigger when click date | `(date: DateType, value: DateType[]) => void` | `-` |
| onTimeChange | trigger when click time | `(time: TimeType, value: DateType[]) => void` | `-` |

### DateType

Default keys as follows. They will be replaced by optionKey.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier, required | `string` | `-` |
| text | display text, required | `string` | `-` |
| children | chidren list, required | `TimeType[]` | `-` |

### TimeType

Default keys as follows. They will be replaced by optionKey.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier, required | `string` | `-` |
| text | display text, required | `string` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-timeselect-date-width | date width | `140px` |
| \--nutui-timeselect-date-height | date height | `40px` |
| \--nutui-timeselect-date-active-color | date active color | `$color-title` |
| \--nutui-timeselect-time-width | time width | `100px` |
| \--nutui-timeselect-time-height | time height | `50px` |
| \--nutui-timeselect-time-margin | time margin | `0 10px 10px 0` |
| \--nutui-timeselect-time-background | time background | `$color-background` |
