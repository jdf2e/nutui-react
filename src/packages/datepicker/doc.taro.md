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

## 贡献记录

### Issues

- DatePicker受控情况下，2月切换存在问题 [#2924](https://github.com/jdf2e/nutui-react/issues/2924)

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20DatePicker)

### Component Logs

- 🐛 fix(datepicker): show zero on page ([#2582](https://github.com/jdf2e/nutui-react/pull/2582)) `v2.6.19`
- 🐛 fix(datepicker): 修复受控方式下选项联动更新问题 ([#2201](https://github.com/jdf2e/nutui-react/pull/2201)) @eiinu `v2.6.2`
- 🐛 fix(datepicker): 修复 datepicker 类型为hour-minutes/time时选中值无法回显的问题 ([#2141](https://github.com/jdf2e/nutui-react/pull/2141)) @yeyu98 `v2.5.1`
- 🐛 fix(DatePicker): demo拆解与规范 ([#2133](https://github.com/jdf2e/nutui-react/pull/2133)) @yeyu98 `v2.5.1`
- 💡 🐛 fix(datepicker): 未设置 value/defaultValue 时渲染 0 ([#1819](https://github.com/jdf2e/nutui-react/pull/1819)) @Ryan-CW-Code `v2.3.4`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=datepicker&expanded=true)
