# FixedNav 悬浮导航

悬浮收齐体验交互，用于快捷导航

## 引入

```tsx
import { FixedNav } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 左侧效果

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 取消背景遮罩

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定义使用

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 支持拖拽

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## FixedNav

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否打开 | `boolean` | `false` |
| list | 悬浮列表内容数据 | `Array` | `[]` |
| activeText | 收起列表按钮文案 | `string` | `收起导航` |
| inactiveText | 展开列表按钮文案 | `string` | `快速导航` |
| type | 导航方向 | `left` \| `right` | `right` |
| overlay | 展开时是否显示遮罩 | `boolean` | `true` |
| position | fixed 垂直位置 | `object` | `{top: 'auto', bottom: 'auto'}` |
| content | 自定义按钮 | `ReactNode` | `-` |
| onChange | 展开收起按钮回调 | `value: boolean` | `-` |
| onSelect | 选择之后触发 | `item, event: MouseEvent` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-fixednav-background-color | 背景颜色 | `$white` |
| \--nutui-fixednav-color | 字体颜色 | `$color-title` |
| \--nutui-fixednav-button-background | button 的背景颜色 | `$color-primary-gradient-1` |
| \--nutui-fixednav-index | zIndex | `201` |
| \--nutui-fixednav-item-active-color | 激活颜色 | `$color-primary` |
