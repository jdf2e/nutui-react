# InputNumber 数字输入框

通过点击按钮控制数字增减。

## 引入

```tsx
import { InputNumber } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

初始化一个默认值

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 步长设置

设置步长 `step` 5

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 限制输入范围

`min` 和 `max` 属性分别表示最小值和最大值

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 禁用状态

`disabled` 禁用状态下无法点击按钮或修改输入框。

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 只读禁用输入框

`readOnly` 设置只读禁用输入框输入行为

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 设置按钮样式

可使用`ConfigProvider`组件来设置按钮样式。

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 支持小数点

设置步长 `step` 0.1 `decimal-places` 小数保留1位

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 支持异步修改

通过 `change` 事件和 `model-value` 进行异步修改

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 支持formatter

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 支持取消文本全选中

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## InputNumber

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowEmpty | 是否允许内容为空 | `boolean` | `false` |
| defaultValue | 默认值 | `string` \| `number` | `0` |
| value | 当前值，受控值 | `string` \| `number` | `-` |
| min | 最小值限制 | `string` \| `number` | `1` |
| max | 最大值限制 | `string` \| `number` | `9999` |
| step | 步长 | `string` \| `number` | `1` |
| digits | 设置保留的小数位 | `string` \| `number` | `0` |
| disabled | 禁用所有功能 | `boolean` | `false` |
| readOnly | 只读状态禁用输入框操作行为 | `boolean` | `false` |
| async | 支持异步修改 | `boolean` | `false` |
| select | 支持取消文本全选中 | `boolean` | `true` |
| formatter | 指定输入框展示值的格式 | `function(value: number \| string): string` | `-` |
| onPlus | 点击增加按钮时触发 | `(e: MouseEvent) => void` | `-` |
| onMinus | 点击减少按钮时触发 | `(e: MouseEvent) => void` | `-` |
| onOverlimit | 点击不可用的按钮时触发 | `(e: MouseEvent) => void` | `-` |
| onChange | 值改变时触发 | `(param: string \| number, e: MouseEvent \| ChangeEvent<HTMLInputElement>) => void` | `-` |
| onFocus | 输入框获得焦点时触发 | `(e: FocusEvent<HTMLInputElement>) => void` | `-` |
| onBlur | 输入框失去焦点时触发 | `(e: ChangeEvent<HTMLInputElement>) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-inputnumber-input-width | 数字输入框中input的宽度 | `40px` |
| \--nutui-inputnumber-input-height | 数字输入框中input的高度 | `24px` |
| \--nutui-inputnumber-input-background-color | 数字输入框中input的背景颜色 | `$color-background` |
| \--nutui-inputnumber-input-font-color | 数字输入框中input的字号颜色 | `$color-title` |
| \--nutui-inputnumber-input-font-size | 数字输入框中input的字号大小 | `14px` |
| \--nutui-inputnumber-input-border | 数字输入框中input的border值 | `0` |
| \--nutui-inputnumber-input-border-radius | 数字输入框中input的圆角 | `6px` |
| \--nutui-inputnumber-input-margin | 数字输入框中input的margin值 | `0` |
| \--nutui-inputnumber-button-width | 数字输入框左右按钮的宽度 | `14px` |
| \--nutui-inputnumber-button-height | 数字输入框左右按钮的高度 | `16px` |
| \--nutui-inputnumber-button-border-radius | 数字输入框左右按钮的圆角 | `30px` |
| \--nutui-inputnumber-button-background-color | 数字输入框左右按钮的背景色 | `transparent` |
| \--nutui-inputnumber-icon-color | 数字输入框中icon的颜色 | `$color-text` |
| \--nutui-inputnumber-icon-size | 数字输入框中icon的大小 | `8px` |
| \--nutui-inputnumber-disabled-color | 数字输入框禁用色 | `$color-text-disabled` |
