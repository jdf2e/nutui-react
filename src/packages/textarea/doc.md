# TextArea 文本域

文本框内输入或编辑文字，支持限制输入数量。

## 引入

```tsx
import { TextArea } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控方式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 显示字数统计

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定义行数，设置自动高度

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定义字数统计样式

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 只读

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 禁用

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 文本位置

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## TextArea

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框内容，受控 | `string` | `-` |
| defaultValue | 初始默认值，非受控 | `string` | `-` |
| placeholder | 设置占位提示文字 | `string` | `请输入内容` |
| maxLength | 限制最长输入字符，-1 表示无限制 | `number` | `140` |
| rows | textarea 的行数 | `number` | `2` |
| showCount | textarea 是否展示输入字符。须配合`maxLength`使用 | `boolean` | `false` |
| autoSize | 高度是否可拉伸 | `boolean` | `false` |
| readOnly | 只读属性 | `boolean` | `false` |
| disabled | 禁用属性 | `boolean` | `false` |
| onChange | 输入内容时触发 | `(value) => void` | `-` |
| onFocus | 聚焦时触发 | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `-` |
| onBlur | 失焦时触发 | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-textarea-font | 字体大小 | `$font-size-base` |
| \--nutui-textarea-padding | 内边距 | `10px 25px` |
| \--nutui-textarea-limit-color | 字数统计颜色 | `$color-text` |
| \--nutui-textarea-text-color | 文本颜色 | `$color-title` |
| \--nutui-textarea-text-curror-color | 光标颜色 | `$color-title` |
| \--nutui-textarea-disabled-color | 禁用颜色 | `$color-text-disabled` |
| \--nutui-textarea-limit-align | 对齐方式 | `right` |
