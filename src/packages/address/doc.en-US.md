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

## Contribution

### Issues

- [Iconfont 设置 name 为图片地址时，修改颜色不生效](https://github.com/jdf2e/nutui-react/issues/2333)

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AAddress)

### Component Logs

- 🐛 修复address组件onChange参数透传问题 ([#2110](https://github.com/jdf2e/nutui-react/pull/2110)) @DreamSeeker321 `v2.5.0`
- 🐛 fix(address): demo拆解与规范 ([#2068](https://github.com/jdf2e/nutui-react/pull/2068)) @Alex-huxiyang `v2.4.2`
- 💡 📖 docs: address and collapse doc icons ([#1692](https://github.com/jdf2e/nutui-react/pull/1692)) @xiaoyatong `v2.3.0`
- 🐛 address close icon cannot be customed ([#1685](https://github.com/jdf2e/nutui-react/pull/1685)) @xiaoyatong `v2.3.0`
- 🐛 picker 和 address 在 form 中使用，未阻止冒泡，导致取消和确认无法关闭 ([#1710](https://github.com/jdf2e/nutui-react/pull/1710)) @oasis-cloud `v2.3.0`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=address&expanded=true)
