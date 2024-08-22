# Menu 菜单

向下弹出的菜单列表

## 引入

```tsx
import { Menu } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定义菜单内容

使用实例上的 toggle 方法可以手动关闭弹框。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 一行两列

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定义选中态颜色

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定义图标

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 向上展开

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 禁用菜单

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Menu

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeColor | 选项的选中态图标颜色 | `string` | `#F2270C` |
| closeOnOverlayClick | 是否在点击遮罩层后关闭菜单 | `boolean` | `true` |
| lockScroll | 背景是否锁定 | `boolean` | `true` |
| scrollFixed | 滚动后是否固定，可设置固定位置 | `boolean` \| `string` \| `number` | `true` |
| icon | 自定义标题图标 | `React.ReactNode` | `-` |
| onOpen | menu 展开触发 | `(index: number, from: 'NORMAL' \| 'REF') => void` | `-` |
| onClose | menu 关闭触发 | `(index: number, from: 'NORMAL' \| 'REF') => void` | `-` |

## Menu.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 菜单项标题 | `string` | `当前选中项文字` |
| titleIcon | 菜单项 icon | `React.ReactNode` | `ArrowUp/ArrowDown` |
| options | 选项数组 | `array` | `-` |
| disabled | 是否禁用菜单 | `boolean` | `false` |
| columns | 可以设置一行展示多少列 options | `number` | `1` |
| closeOnClickAway | 点击空白处关闭菜单 | `boolean` | `true` |
| icon | 自定义选项图标 | `React.ReactNode` | `Check` |
| direction | 菜单展开方向，可选值为up | `string` | `down` |
| onChange | 选择 option 之后触发 | `(event: any) => void` | `-` |

### Ref

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| toggle | 切换菜单展示状态，传 true 为显示，false 为隐藏，不传参为取反 | `show?: boolean` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-menu-scroll-fixed-top | fix 状态的顶部距离 | `0` |
| \--nutui-menu-scroll-fixed-z-index | fix 状态的z-index | `$mask-z-index` |
| \--nutui-menu-bar-line-height | menu标题栏的行高 | `48px` |
| \--nutui-menu-bar-opened-z-index | 打开状态的 z-index | `2001` |
| \--nutui-menu-bar-box-shadow | 菜单标题栏的阴影 | `0 2px 12px rgba(89, 89, 89, 0.12)` |
| \--nutui-menu-title-padding | 标题的内边距 | `8px` |
| \--nutui-menu-title-font-size | 标题的字号 | `$font-size-base` |
| \--nutui-menu-title-color | 标题的颜色 | `$color-title` |
| \--nutui-menu-container-z-index | 菜单选项容器的zindex | `1000` |
| \--nutui-menu-content-padding | 菜单选项容器的内边距 | `12px 24px` |
| \--nutui-menu-content-max-height | 菜单选项容器的最大高度 | `214px` |
| \--nutui-menu-content-background-color | 菜单选项容器的背景色 | `$white` |
| \--nutui-menu-item-active-color | 打开状态的颜色 | `$color-primary` |
| \--nutui-menu-item-active-font-weight | 选中状态的字重 | `$font-weight-bold` |
| \--nutui-menu-item-disabled-color | 禁用状态的颜色 | `$color-text-disabled` |
| \--nutui-menu-item-padding | 菜单选项的内边距 | `12px 0` |
| \--nutui-menu-item-icon-margin | 菜单选项文本与icon的距离 | `8px` |
