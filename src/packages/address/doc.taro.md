# Address 地址

地址选择

## 引入

```tsx
import { Address } from '@nutui/nutui-react-taro'
```

## 示例代码

### 选择自定义地址

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 选中省市区

如果想选中某个省市区，同级联组件。

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 选择已有地址

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 自定义图标

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义地址与已有地址切换

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 非受控模式

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## Address

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否打开地址选择 | `boolean` | `-` |
| defaultVisible | 初始地址选择打开/关闭状态 | `boolean` | `-` |
| type | 地址选择类型 exist/custom | `string` | `custom` |
| existList | 已存在地址列表，每个地址对象中，必传值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解释见下） | `Array` | `[]` |
| defaultIcon | 已有地址列表默认图标，type='exist' 时生效 | `ReactNode` | `-` |
| selectIcon | 已有地址列表选中图标，type='exist' 时生效 | `ReactNode` | `-` |
| closeIcon | 自定义关闭弹框按钮图标 | `ReactNode` | `-` |
| backIcon | 自定义地址与已有地址切换时，自定义返回的按钮图标 | `ReactNode` | `-` |
| custom | 是否可以切换自定义地址选择，type='exist' 时生效 | `boolean` \| `string` | `true` |
| onExistSelect | 选择已有地址列表时触发 | `(data: AddressList) => void` | `-` |
| onSwitch | 点击'选择其他地址'或自定义地址选择左上角返回按钮触发 | `(data: { type: string }) => void` | `-` |
| onClose | 关闭弹框时触发 | `-` | `-` |

### Ref

通过 ref 可以获取到 Address 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| open | 打开地址选择 | `-` |
| close | 关闭地址选择 | `-` |

更多参数可参考 `Cascader` 组件。

## 贡献记录

### Issues

- Iconfont 设置 name 为图片地址时，修改颜色不生效 [#2333](https://github.com/jdf2e/nutui-react/issues/2333)

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Address)

### Component Logs

- 🐛 修复address组件onChange参数透传问题 ([#2110](https://github.com/jdf2e/nutui-react/pull/2110)) @DreamSeeker321 `v2.5.0`
- 🐛 fix(address): demo拆解与规范 ([#2068](https://github.com/jdf2e/nutui-react/pull/2068)) @Alex-huxiyang `v2.4.2`
- 💡 📖 docs: address and collapse doc icons ([#1692](https://github.com/jdf2e/nutui-react/pull/1692)) @xiaoyatong `v2.3.0`
- 🐛 address close icon cannot be customed ([#1685](https://github.com/jdf2e/nutui-react/pull/1685)) @xiaoyatong `v2.3.0`
- 🐛 picker 和 address 在 form 中使用，未阻止冒泡，导致取消和确认无法关闭 ([#1710](https://github.com/jdf2e/nutui-react/pull/1710)) @oasis-cloud `v2.3.0`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=address&expanded=true)
