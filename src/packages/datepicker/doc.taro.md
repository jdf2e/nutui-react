# DatePicker 日期选择器

时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。

## 引入

```tsx
import { DatePicker } from '@nutui/nutui-taro'
```

## 示例代码

### 选择日期

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 选择月日

DatetimePicker 通过 type 属性来定义需要选择的时间类型。将 type 设置为 year-month 即可选择年份和月份，设置为 month-day 即可选择月份和日期。

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 选择年月日时分

将 type 设置为 datetime 即可选择完整的时间。

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 选择时分秒

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 选择时分

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 格式化选项

通过传入 formatter 函数，可以对选项文字进行格式化处理。 showChinese 属性同样是也为选项后面添加文案，但 formatter 函数的优先级高于 showChinese 属性。

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 分钟数递增步长设置

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 过滤选项

通过 filter 函数可以对选项数组进行过滤，实现自定义时间间隔。

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

## DatePicker

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 初始值 | `Date` | `null` |
| value | 受控 | `Date` | `null` |
| visible | 是否可见 | `boolean` | `false` |
| type | 类时间类型，可选值 date time year-month month-day datehour datetime hour-minutes | `string` | `date` |
| minuteStep | 分钟步进值 | `number` | `1` |
| showChinese | 每列是否展示中文 | `boolean` | `false` |
| title | 设置标题 | `string` | `null` |
| startDate | 开始日期 | `Date` | `十年前` |
| endDate | 结束日期 | `Date` | `十年后` |
| formatter | 选项格式化函数 | `(type: string, option: PickerOption) => PickerOption` | `-` |
| pickerProps | 透传picker属性 | `object` | `-` |
| filter | 选项过滤函数 | `(type: string, option: PickerOption) => PickerOption[]` | `-` |
| threeDimensional | 是否开启3D效果 | `boolean` | `true` |
| onConfirm | 点击确定按钮时触发 | `(options, value) => void` | `-` |
| onCancel | 点击取消按钮时触发 | `() => void` | `-` |
| onClose | 确定和取消时，都触发 | `(options, value) => void` | `-` |
| onChange | 选项改变时触发 | `(options, value, index) => void` | `-` |
