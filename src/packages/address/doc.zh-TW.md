# Address 地址

地址選擇，在2.0中，地址改用級聯組件實現。截止當前版本，只支持級聯，不支持級聯+電梯模式，開發中。

## 引入

```tsx
import { Address } from '@nutui/nutui-react'
```

## 示例代碼

### 選擇自定義地址

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 選中省市區

如果想選中某個省市區，同級聯組件。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 選擇已有地址

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義圖標

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義地址與已有地址切換

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Address

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否打開地址選擇 | `boolean` | `-` |
| defaultVisible | 初始地址選擇打開/關閉狀態 | `boolean` | - |
| type | 地址選擇類型 exist/custom | `string` | `custom` |
| existList | 已存在地址列錶，每個地址對象中，必傳值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解釋見下） | `Array` | `[]` |
| defaultIcon | 已有地址列錶默認圖標，type='exist' 時生效 | `ReactNode` | `-` |
| selectIcon | 已有地址列錶選中圖標，type='exist' 時生效 | `ReactNode` | `-` |
| closeIcon | 自定義關閉彈框按鈕圖標 | `ReactNode` | `-` |
| backIcon | 自定義地址與已有地址切換時，自定義返回的按鈕圖標 | `ReactNode` | `-` |
| custom | 是否可以切換自定義地址選擇，type='exist' 時生效 | `boolean` \| `string` | `true` |
| onExistSelect | 選擇已有地址列錶時觸發 | `(data: AddressList) => void` | `-` |
| onSwitch | 點擊'選擇其他地址'或自定義地址選擇左上角返回按鈕觸發 | `(data: { type: string }) => void` | `-` |
| onClose | 關閉彈框時觸發 | `-` | `-` |

### Ref

透過 ref 可以獲取到 Address 實例並調用實例方法。

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| open | 打開地址選擇 | `-` |
| close | 關閉地址選擇 | `-` |

更多參數可參考 `Cascader` 組件。

## 貢獻記錄

### Issues

- [Iconfont 设置 name 为图片地址时，修改颜色不生效](https://github.com/jdf2e/nutui-react/issues/2333)

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Address)

### Component Logs

- 🐛 修复address组件onChange参数透传问题 ([#2110](https://github.com/jdf2e/nutui-react/pull/2110)) @DreamSeeker321 `v2.5.0`
- 🐛 fix(address): demo拆解与规范 ([#2068](https://github.com/jdf2e/nutui-react/pull/2068)) @Alex-huxiyang `v2.4.2`
- 💡 📖 docs: address and collapse doc icons ([#1692](https://github.com/jdf2e/nutui-react/pull/1692)) @xiaoyatong `v2.3.0`
- 🐛 address close icon cannot be customed ([#1685](https://github.com/jdf2e/nutui-react/pull/1685)) @xiaoyatong `v2.3.0`
- 🐛 picker 和 address 在 form 中使用，未阻止冒泡，导致取消和确认无法关闭 ([#1710](https://github.com/jdf2e/nutui-react/pull/1710)) @oasis-cloud `v2.3.0`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=address&expanded=true)
