# Indicator 指示器

显示一个任务或流程的进度，常用于开通流程。

## 引入

```tsx
import { Indicator } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 自定义节点

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义颜色大小

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 竖向展示

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

## Indicator

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前步骤 | `number` | `0` |
| total | 步骤长度 | `number` | `3` |
| direction | 展示方向，默认为水平方向 | `horizontal` \| `vertical` | `horizontal` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-indicator-color | 指示器焦点时色值 | `$color-primary` |
| \--nutui-indicator-dot-color | 指示器默认色值 | `$color-text-disabled` |
| \--nutui-indicator-dot-size | 指示器尺寸 | `5px` |
| \--nutui-indicator-dot-active-size | 指示器焦点时尺寸 | `15px` |
| \--nutui-indicator-border-radius | 指示器焦点时的border值 | `3px` |
| \--nutui-indicator-dot-margin | 指示器横向时的margin值 | `4px` |
