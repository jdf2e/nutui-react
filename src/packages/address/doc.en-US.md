# Address

Load on demand Load the Icon、Popup、Elevator dependent component

## Import

```tsx
import { Address } from '@nutui/nutui-react'
```

## Demo

### Choose Custom Address

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Choose City

If you want to select a province, you need to set the region ID in the order of province City county town in the model-value, and ensure that the data of the corresponding province can be queried

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Choose Custom Address2

:::demo

:::

### Choose Exist Address

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Icon

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom Or Exist

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Address

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to open address | `boolean` | `-` |
| defaultVisible | Initial open/close state of the address selection | `boolean` | - |
| type | Choose type: exist/custom | `string` | `custom` |
| existList | Exist address list data | `Array` | `[]` |
| defaultIcon | Exist address default icon | `ReactNode` | `-` |
| selectIcon | Exist address selected icon | `ReactNode` | `-` |
| closeIcon | Custom close button icon | `ReactNode` | `-` |
| backIcon | Custom back button icon | `ReactNode` | `-` |
| custom | Whether to change custom address | `boolean` \| `string` | `true` |
| onExistSelect | Emitted when to selected exist address | `(data: AddressList) => void` | `-` |
| onSwitch | Click to select another address or custom address to select the upper left corner of the return button triggered | `(data: { type: string }) => void` | `-` |
| onClose | Fired when the component is closed | `-` | `-` |

### Ref

You can get the Address instance and call instance methods through ref.

| Method | Description | Parameter |
| --- | --- | --- |
| open | Open address selection | `-` |
| close | Close address selection | `-` |

More properties in Cascader.
