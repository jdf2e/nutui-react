# SideNavBar组件

用于内容选择和切换

## 引入

```tsx
import {
  SideNavBar,
  SubSideNavBar,
  SideNavBarItem,
} from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 嵌套及回调

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

## SideNavBar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 组件是否显示 | `boolean` | `false` |
| title | 整体标题 | `string` | `-` |
| width | 遮罩宽度百分比 | `string` | `80%` |
| position | 弹出位置 | `left` \| `right` | `left` |
| indent | 缩进宽度 | `number` | `20` |
| onClose | 关闭遮罩时触发 | `-` | `-` |

## SubSideNavBar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 导航唯一标识 | `string` \| `number` | `-` |
| title | 整体标题 | `string` | `-` |
| open | 导航是否默认展开 | `boolean` | `true` |
| onClick | 导航点击 | `({title: string, value: string \| number, isShow: boolean}) => void` | `-` |

## SideNavBarItem

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 导航唯一标识 | `string` \| `number` | `-` |
| title | 整体标题 | `string` | `-` |
| onClick | 导航点击 | `({title: string, value: string \| number}) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-sidenavbar-content-bg-color | 侧边栏导航背景色 | `$white` |
| \--nutui-sidenavbar-item-height | 侧边栏每项的高度 | `40px` |
| \--nutui-sidenavbar-title-padding | 标题的内边距 | `10px 8px 10px 20px` |
| \--nutui-sidenavbar-title-background | 标题的背景色 | `$color-background` |
| \--nutui-sidenavbar-title-color | 标题的字体颜色 | `$color-title` |
| \--nutui-sidenavbar-sub-title-padding | 子标题的内边距 | `10px 8px 10px 35px` |
| \--nutui-sidenavbar-sub-title-background | 子标题背景色 | `$color-background-sunken` |
| \--nutui-sidenavbar-sub-title-color | 子标题字体颜色 | `$color-title` |
| \--nutui-sidenavbar-sub-list-background | 选项列表背景色 | `$color-background-sunken` |
| \--nutui-sidenavbar-sub-list-color | 选项列表字体颜色 | `$color-title` |
