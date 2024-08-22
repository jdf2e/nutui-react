# Badge 徽标

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

## 引入

```tsx
import { Badge } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 最大值

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义颜色

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 自定义徽标内容

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义徽标样式

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义位置

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 独立展示

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 填充模式

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

## Badge

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 显示的内容，支持数字、字符和自定义内容 | `ReactNode` | `-` |
| max | value 为数值时，最大值 | `number` | `99` |
| dot | 是否为小点，当`value`值为自定义内容时，dot不生效 | `boolean` | `false` |
| top | 上下偏移量，支持单位设置，可设置为："0"或0 等 | `string` \| `number` | `"0"` |
| right | 左右偏移量，支持单位设置，可设置为："5"或5 等 | `string` \| `number` | `"5"` |
| color | 徽标背景颜色 | `string` | `-` |
| fill | 填充模式 | `solid` \| `outline` | `solid` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-badge-height | badge 的高度 | `14px` |
| \--nutui-badge-background-color | badge 背景色 | `linear-gradient(135deg, $color-primary 0%, $color-primary-stop-2 100%))` |
| \--nutui-badge-color | badge 内容色值 | `#fff` |
| \--nutui-badge-font-size | badge 内容字号 | `$font-size-small` |
| \--nutui-badge-border | badge 边框 | `0px solid $color-primary-text` |
| \--nutui-badge-border-radius | badge 边框圆角 | `14px` |
| \--nutui-badge-min-width | badge 最小宽度 | `5px` |
| \--nutui-badge-padding | badge 的padding值 | `0 5px` |
| \--nutui-badge-icon-padding | badge 为自定义icon时 的 padding值 | `2px` |
| \--nutui-badge-icon-size | badge 为自定义icon时 的 size | `12px` |
| \--nutui-badge-content-transform | badge 内容位置 | `translateY(-50%) translateX(100%)` |
| \--nutui-badge-z-index | badge 自定义icon时的z-index | `1` |
| \--nutui-badge-dot-width | badge 为圆点时的宽度、高度、圆角 | `7px` |
| \--nutui-badge-dot-border | badge 为圆点时的边框 | `0px solid $color-primary-text` |
