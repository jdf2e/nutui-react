# Checkbox 复选按钮

多选按钮用于选择。

## 引入

```tsx
import { Checkbox } from '@nutui/nutui-react-taro'
```

## 示例代码

### 非受控

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 基础用法

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

## 半选状态

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

## 禁用状态

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

## 自定义尺寸

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## 自定义图标

这里建议同时设置 `icon` 和 `activeIcon` 属性

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

## change事件

值发生变化时，将触发change事件

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

## Checkbox.Group 使用

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

## Checkbox.Group 禁用

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

## Checkbox.Group 全选/取消

:::demo

<CodeBlock src='taro/demo11.tsx'></CodeBlock>

:::

## checkboxGroup使用，限制最大可选数（3个）, 至少选择数（1个）

:::demo

<CodeBlock src='taro/demo12.tsx'></CodeBlock>

:::

## 全选/半选/取消

:::demo

<CodeBlock src='taro/demo13.tsx'></CodeBlock>

:::

## 配置 options 渲染复选按钮

:::demo

<CodeBlock src='taro/demo14.tsx'></CodeBlock>

:::

## 列表

:::demo

<CodeBlock src='taro/demo15.tsx'></CodeBlock>

:::

## Checkbox

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否选中 | `boolean` | `false` |
| defaultChecked | 初始是否选中 | `boolean` | `false` |
| disabled | 是否禁用选择 | `boolean` | `false` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| icon | 选中前 | `ReactNode` | `'CheckNormal'` |
| activeIcon | 选中后 | `ReactNode` | `'Checked'` |
| indeterminateIcon | 半选状态 | `ReactNode` | `'CheckDisabled'` |
| label | 复选框的文本内容 | `string` | `-` |
| value | 标识值，用于 Group 模式 | `string` \| `number` | `-` |
| shape | 形状 | `button` \| `round` | `round` |
| onChange | 值变化时触发 | `(value: boolean) => void` | `-` |

## Checkbox.Group

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中项的标识符 | `string` \| `number` | `-` |
| defaultValue | 初始选中项的标识符 | `string` \| `number` | `-` |
| disabled | 是否禁用选择,将用于其下的全部复选框 | `boolean` | `false` |
| max | 限制最大可选数 | `number` | `-` |
| min | 限制至少选择数 | `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| direction | 使用横纵方向 可选值 horizontal、vertical | `string` | `vertical` |
| options | 配置 options 渲染复选按钮 | `Array<{ label: string value: string disabled?: boolean }>` | `-` |
| list | 列表模式 | `boolean` | `false` |
| onChange | 值变化时触发 | `(value: string[]) => void` | `-` |

### Ref

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| toggle | 全选/取消 | 传 `true`,表示全选，传 `false`,表示取消全选 |
| reverse | 反选 | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-checkbox-label-color | label 的文本颜色 | `$color-title` |
| \--nutui-checkbox-label-margin-left | label 的左边距 | `15px` |
| \--nutui-checkbox-label-font-size | label 的字号 | `14px` |
| \--nutui-checkbox-button-font-size | shape为button的字号 | `12px` |
| \--nutui-checkbox-button-color | 字体颜色 | `$color-text` |
| \--nutui-checkbox-button-background | shape为button的背景色 | `$color-background` |
| \--nutui-checkbox-label-button-border-color | shape为button的边框颜色 | `$color-primary` |
| \--nutui-checkbox-button-active-border | shape为button选中态的边框 | `1px solid $color-primary` |
| \--nutui-checkbox-button-padding | shape为button的内边距 | `5px 18px` |
| \--nutui-checkbox-button-border-radius | shape为button的圆角 | `15px` |
| \--nutui-checkbox-list-background-colors | 列表背景色 | `15px` |
| \--nutui-checkbox-list-item-border | 列表项的边框 | `15px` |
| \--nutui-checkbox-list-padding | 列表的padding | `15px` |
| \--nutui-checkbox-list-item-padding | 列表项的padding | `15px` |
