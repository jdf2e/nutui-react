# Radio 单选按钮

用于在一组备选项中进行单选

## 引入

```tsx
import { Radio } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### Group 模式下禁用某一项

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### Group 模式下禁用全部选项

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### Group 模式下禁用某一项

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### Group 模式下禁用全部选项

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

## 水平使用

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## 自定义尺寸

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

## 自定义图标

建议 `icon` `activeIcon` 一起修改

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

## 自定义图标，通过Group实现列表形式

建议 `icon` `activeIcon` 一起修改

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

## 触发事件

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

## 配置 options 渲染单选按钮

:::demo

<CodeBlock src='taro/demo11.tsx'></CodeBlock>

:::

## 设置形状

:::demo

<CodeBlock src='taro/demo12.tsx'></CodeBlock>

:::

## Radio

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | `boolean` | `-` |
| defaultChecked | 初始是否选中 | `boolean` | `-` |
| disabled | 是否禁用选择 | `boolean` | `false` |
| value | 携带的标识值，用于 Group 模式 | `string` \| `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| icon | <a href="#/icon">图标名称</a>，选中前(建议和`activeIcon`一起修改) | `ReactNode` | `'CheckNormal'` |
| activeIcon | <a href="#/icon">图标名称</a>，选中后(建议和`icon`一起修改) | `ReactNode` | `'CheckChecked'` |
| shape | 形状 | `button` \| `round` | `round` |
| onChange | 选中态变化时触发 | `(checked: boolean) => void` | `-` |

## Radio.Group

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中项的标识符 | `string` \| `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| disabled | 是否禁用 | `boolean` | `false` |
| shape | 形状 | `button` \| `round` | `-` |
| direction | 使用横纵方向 | `horizontal` \| `vertical` | `vertical` |
| options | 配置 options 渲染单选按钮 | `Array<{ label: string value: string disabled?: boolean }>` | `-` |
| onChange | 值变化时触发 | `(value: string \| number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-radio-icon-font-size | icon字号 | `18px` |
| \--nutui-radio-label-font-size | 字号 | `14px` |
| \--nutui-radio-label-color | 字体颜色 | `$color-title` |
| \--nutui-radio-label-margin-left | label 的左外边距 | `6px` |
| \--nutui-radio-button-font-size | shape为button的字号 | `12px` |
| \--nutui-radio-button-color | 字体颜色 | `$color-text` |
| \--nutui-radio-button-background | shape为button的背景色 | `$color-background` |
| \--nutui-radio-button-active-border | shape为button选中态的边框 | `1px solid $color-primary` |
| \--nutui-radio-button-padding | shape为button的内边距 | `5px 18px` |
| \--nutui-radio-button-border-radius | shape为button的圆角 | `15px` |
| \--nutui-radiogroup-radio-margin | Group模式下每个 radio 的右侧边距 | `20px` |
| \--nutui-radiogroup-radio-margin-bottom | Group模式下每个 radio 的底部边距 | `5px` |
| \--nutui-radiogroup-radio-label-margin | Group模式下每个 radio 中的 label 外边距 | `0 5px 0 5px` |
