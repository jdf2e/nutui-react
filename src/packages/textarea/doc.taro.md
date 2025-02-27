# TextArea 文本域

文本框内输入或编辑文字，支持限制输入数量。

## 引入

```tsx
import { TextArea } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 受控方式

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 显示字数统计

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 自定义行数，设置自动高度

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义字数统计样式

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 只读

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 禁用

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 文本位置

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

## TextArea

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框内容，受控 | `string` | `-` |
| defaultValue | 初始默认值，非受控 | `string` | `-` |
| placeholder | 设置占位提示文字 | `string` | `请输入内容` |
| maxLength | 限制最长输入字符，-1 表示无限制 | `number` | `140` |
| rows | textarea 的行数（仅支持H5） | `number` | `2` |
| showCount | textarea 是否展示输入字符。须配合`maxLength`使用 | `boolean` | `false` |
| autoSize | 高度是否可拉伸 | `boolean` | `false` |
| readOnly | 只读属性 | `boolean` | `false` |
| disabled | 禁用属性 | `boolean` | `false` |
| plain | 标记文本域的容器类型，false 为容器型 `container`, true 为 `纯文本型` | `boolean` | `false` |
| status | 文本域状态，可标记为 默认状态 和 错误状态 | `default /\ error` | `default` |
| onChange | 输入内容时触发 | `(value) => void` | `-` |
| onFocus | 聚焦时触发 | `(event) => void` | `-` |
| onBlur | 失焦时触发 | `(event) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-textarea-padding | 内边距 | `10px 25px` |
| \--nutui-textarea-text-color | 文本颜色 | `$color-title` |
| \--nutui-textarea-text-curror-color | 光标颜色 | `$color-title` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20TextArea)

### Component Logs

- 🐛 fix(textarea): 字数限制文本遮挡输入框的内容 ([#2910](https://github.com/jdf2e/nutui-react/pull/2910)) `v2.7.5`
- 🐛 fix(textarea): handle undefined placeholder explicitly ([#2748](https://github.com/jdf2e/nutui-react/pull/2748)) `v2.7.1`
- 🐛 fix(textarea): demo拆解与规范 ([#2132](https://github.com/jdf2e/nutui-react/pull/2132)) @Amylee9712 `v2.5.1`
- 🐛 fix(textarea): 修复maxlength=-1时无法输入字符的情况 ([#1910](https://github.com/jdf2e/nutui-react/pull/1910)) @xiaoyatong `v2.3.9`
- 🐛 fix(Textarea): 文档demo中props拼写错误修改 ([#1874](https://github.com/jdf2e/nutui-react/pull/1874)) @songsong `v2.3.7`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=textarea&expanded=true)
