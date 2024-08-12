# Tag 标签

用于标记和分类的标签。

## 引入

```tsx
import { Tag } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 样式风格

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定义颜色

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 图文

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Tag

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 标签类型 | `primary` \| `default` \| `info` \| `success` \| `danger` \| `warning` | `default` |
| background | 标签颜色 | `string` | `-` |
| color | 文本颜色，优先级高于color属性 | `string` | `white` |
| plain | 是否为空心样式 | `boolean` | `false` |
| round | 是否为圆角样式 | `boolean` | `false` |
| mark | 是否为标记样式 | `boolean` | `false` |
| closeable | 是否为可关闭标签 | `boolean` | `false` |
| closeIcon | 关闭按钮 | `ReactNode` | `null` |
| onClick | 点击事件 | `(e: MouseEvent<HTMLDivElement>) => void` | `-` |
| onClose | 关闭事件 | `(e?: any) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-tag-padding | padding 值 | `0 2px` |
| \--nutui-tag-font-size | 字号 | `10px` |
| \--nutui-tag-border-radius | 圆角 | `2px` |
| \--nutui-tag-height | 高度 | `14px` |
| \--nutui-tag-color | 字色 | `#ffffff` |
| \--nutui-tag-border-width | 边宽 | `1px` |
| \--nutui-tag-background-color | 背景色 | `$color-title` |
| \--nutui-tag-primary-background-color | 主色背景色 | `$color-primary-gradient-1` |
| \--nutui-tag-success-background-color | 成功背景色 | `#4fc08d` |
| \--nutui-tag-info-background-color | 信息背景色 | `$color-info` |
| \--nutui-tag-warning-background-color | 警告背景色 | `#f3812e` |
| \--nutui-tag-danger-background-color | 危险背景色 | `$color-primary` |
| \--nutui-tag-round-border-radius | round模式下的圆角 | `8px` |
| \--nutui-tag-mark-border-radius | mark模式下的圆角 | `0 8px 8px 0` |
