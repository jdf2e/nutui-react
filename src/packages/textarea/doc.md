# TextArea 文本域

用于输入或编辑可换行的长文本，支持字符统计和超限提示。

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
| maxLength | 字数校验阈值，超出后仍可输入，-1 表示无限制 | `number` | `140` |
| rows | textarea 的行数 | `number` | `2` |
| showCount | textarea 是否展示输入字符。须配合`maxLength`使用 | `boolean` | `false` |
| autoSize | 高度是否可拉伸 | `boolean` | `false` |
| readOnly | 只读属性 | `boolean` | `false` |
| disabled | 禁用属性 | `boolean` | `false` |
| plain | 是否使用纯文本型；为 `true` 时忽略 `containerType` | `boolean` | `false` |
| containerType | 容器型背景类型 | `gray / white` | `gray` |
| status | 文本域状态，可标记为 默认状态 和 错误状态 | `default /\ error` | `default` |
| onChange | 输入内容时触发 | `(value) => void` | `-` |
| onFocus | 聚焦时触发 | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `-` |
| onBlur | 失焦时触发 | `(event: FocusEvent<HTMLTextAreaElement>) => void` | `-` |

### Ref

通过 ref 可以获取到 Textarea 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| clear | 清除容器中的数据 | `-` |
| focus | 使容器获取焦点 | `-` |
| blur | 使容器失去焦点 | `-` |
| nativeElement | 获取当前容器 | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-textarea-plain-min-height | 纯文本型最小高度 | `44px` |
| \--nutui-textarea-container-min-height | 容器型最小高度 | `60px` |
| \--nutui-textarea-padding | 容器型内边距 | `8px 12px` |
| \--nutui-textarea-container-gray-background-color | 灰底容器背景色 | `color-background-component` |
| \--nutui-textarea-container-white-background-color | 白底容器背景色 | `$color-background-overlay` |
| \--nutui-textarea-limit-error-color | 超限字数颜色 | `$color-error` |
| \--nutui-textarea-text-color | 文本颜色 | `$color-title` |
| \--nutui-textarea-text-curror-color | 光标颜色 | `$color-primary` |

<Contribution name="TextArea" />
