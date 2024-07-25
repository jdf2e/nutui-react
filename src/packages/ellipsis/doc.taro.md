# Ellipsis组件

展示空间不足时，隐去部分内容并用“...”替代。

## 引入

```tsx
import { Ellipsis } from '@nutui/nutui-react-taro'
```

## 示例代码

### 头部省略

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 尾部省略

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 中间省略

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 多行省略

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 展开收起

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义宽度

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## Ellipsis

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 文本内容 | `string` | `-` |
| direction | 省略位置 | `start` \| `end` \| `middle` | `end` |
| rows | 展示几行 | `number` | `1` |
| expandText | 展开操作的文案 | `string` | `-` |
| collapseText | 收起操作的文案 | `string` | `-` |
| symbol | 省略的符号 | `string` | `...` |
| lineHeight | 容器的行高 | `string` \| `number` | `20` |
| onClick | 文本点击是触发 | `() => void` | `-` |
| onChange | 点击展开收起时触发 | `(type: string) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-ellipsis-expand-collapse-color | 展示和收起的按钮颜色 | `#3460fa` |
