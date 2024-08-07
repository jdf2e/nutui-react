# Input 输入框

用户可以在文本框里输入内容。

## 引入

```tsx
import { Input } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 非受控

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定义类型

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 禁用和只读

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 显示清除图标

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 受控下的清除

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 字数统计

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 带密码可见

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 格式化输入内容

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 对齐方式

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 事件

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### 布局

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

### 边框

:::demo

<CodeBlock src='h5/demo14.tsx'></CodeBlock>

:::

## Input

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 初始默认值 | `string` | `-` |
| value | 初始默认值 | `string` | `-` |
| type | 输入框类型，支持原生 `input` 标签的所有 `type` 属性，另外还支持 `number` `digit` | `string` | `text` |
| name | 组件名字，用于表单提交获取数据 | `string` | `-` |
| placeholder | 输入框为空时占位符 | `string` | `-` |
| align | 输入框内容对齐方式，可选值 `left`、`center`、`right` | `string` | `left` |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| autoFocus | 是否自动获得焦点，iOS 系统不支持该属性 | `boolean` | `false` |
| maxLength | 限制最长输入字符 | `string` \| `number` | `-` |
| clearable | 展示清除 Icon | `boolean` | `false` |
| clearIcon | 清除图标 Icon <a href="#/icon">可参考 Icon </a> | `ReactNode` | `MaskClose` |
| formatter | 输入内容格式化函数 | `(val: string) => string` | `-` |
| formatTrigger | 格式化函数触发的时机，可选值为 `onChange`、`onBlur` | `string` | `-` |
| onChange | 输入框内容变化时触发 | `(value: string) => void` | `-` |
| onBlur | 失去焦点后触发 | `(value: string) => void` | `-` |
| onFocus | 获得焦点后触发 | `(value: string) => void` | `-` |
| onClear | 点击清空按钮时触发 | `(value: string) => void` | `-` |
| onClick | 点击 input 容器触发 | `(value: MouseEvent<HTMLDivElement>) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-input-border-bottom | 边框颜色 | `#eaf0fb` |
| \--nutui-input-border-bottom-width | 边框宽度 | `0px` |
| \--nutui-input-color | 文本颜色 | `$color-title` |
| \--nutui-input-disabled-color | 禁用的文本颜色 | `#c8c9cc` |
| \--nutui-input-background-color | 输入框背景颜色 | `$color-background-overlay` |
| \--nutui-input-border-radius | 输入框圆角 | `0` |
| \--nutui-input-font-size | 文本字号 | `$font-size-base` |
| \--nutui-input-padding | 输入框容器的内边距 | `10px 25px` |
