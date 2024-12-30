# SideBar组件

用于侧边内容选择和切换

## 引入

```tsx
import { SideBar } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 禁用选项

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 根据value匹配

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 多个标题

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 设置滚动动画时长

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

## SideBar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前激活的`item`的key | `string \| number` | `-` |
| defaultValue | 未设置value时，`item`的key的默认值 | `string \| number` | `-` |
| contentDuration | 内容滚动动画时长 | `number` | `0` |
| sidebarDuration | 侧栏滚动动画时长 | `number` | `0` |
| onClick | 点击标签时触发 | `(index: string \| number) => void` | `-` |
| onChange | 当前激活的标签改变时触发 | `(index: string \| number) => void` | `-` |

## SideBar.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | `-` |
| value | 标签 Key , 匹配的标识符, 默认为索引值 | `string` \| `number` | `-` |
| disabled | 是否禁用标签 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-sidebar-background-color | 侧边栏导航背景色 | `$color-background` |
| \--nutui-sidebar-border-radius | 侧边栏的圆角 | `0` |
| \--nutui-sidebar-width | 侧边栏宽度 | `104px` |
| \--nutui-sidebar-max-width | 侧边栏最大宽度 | `128` |
| \--nutui-sidebar-title-height | 侧边栏标题高度 | `52px` |
| \--nutui-sidebar-inactive-font-size | 普通状态下的字体大小 | `$font-size-base` |
| \--nutui-sidebar-active-font-size | 激活状态下的字体大小 | `$font-size-l` |
| \--nutui-sidebar-active-font-weight | 激活状态下的字重 | `$font-weight-bold` |
| \--nutui-sidebar-active-color | 激活状态下的字体颜色 | `$color-primary` |
| \--nutui-sidebar-item-background | 内容区域的背景色 | `$white` |
| \--nutui-sidebar-item-padding | 内容区域的内边距 | `24px 20px` |
