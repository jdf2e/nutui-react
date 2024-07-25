# Collapse 折叠面板

将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。

## 引入

```tsx
import { Collapse } from 'nutui-react-taro'
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

### 无icon样式，绑定点击事件

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 手风琴模式

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义折叠图标

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义title图标

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 动态改变数据

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

## Collapse

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultActiveName | 默认展开面板的 name，非受控 | `Array<string>` \| `string` | `-` |
| activeName | 当前展开面板的 name，受控 | `Array<string>` \| `string` | `-` |
| accordion | 是否开启手风琴模式 | `boolean` | `false` |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | `string` \| `number` | `180` |
| expandIcon | 自定义展开图标 | `ReactNode` | `-` |

## Collapse.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 唯一标识符，必填 | `string` | `-` |
| title | 标题栏左侧内容 | `ReactNode` | `-` |
| disabled | 标题栏是否禁用 | `boolean` | `false` |
| extra | 标题栏副标题 | `ReactNode` | `-` |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | `string` \| `number` | `180` |
| expandIcon | 自定义展开图标 | `ReactNode` | `-` |
| onChange | 切换面板时触发 | `(activeName, name, status) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-collapse-item-padding | 内边距 | `13px 26px` |
| \--nutui-collapse-item-font-size | 字体大小 | `$font-size-base` |
| \--nutui-collapse-item-line-height | 行高 | `24px` |
| \--nutui-collapse-item-color | 字体颜色 | `#666666` |
| \--nutui-collapse-item-disabled-color | 禁用颜色 | `$color-text-disabled` |
| \--nutui-collapse-item-extra-color | Extra 字体颜色 | `#666666` |
| \--nutui-collapse-item-border-bottom | Item 底部边框 | `none` |
| \--nutui-collapse-item-header-border-bottom | Item header 底部边框 | `1px solid $color-border` |
| \--nutui-collapse-wrapper-content-background-color | 背景颜色 | `$white` |
| \--nutui-collapse-wrapper-content-color | 内容字体颜色 | `#666666` |
| \--nutui-collapse-wrapper-content-font-size | 内容字体大小 | `$font-size-base` |
| \--nutui-collapse-wrapper-content-line-height | 内容行高 | `1.5` |
| \--nutui-collapse-wrapper-content-padding | 内容内边距 | `12px 26px` |
