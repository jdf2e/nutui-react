# PullToRefresh 下拉刷新

在列表中通过手指下拉刷新加载新内容的交互操作。

## 引入

```tsx
import { PullToRefresh } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

同一个示例里通过两个按钮演示：切换普通 / 反白模式，以及切换图标内容（通用 / agent / 大促）。

组件内置了普通态与反白态两套 gif 图标，无需任何配置即可使用；需要换成其它主题时，通过 `renderIcon(status)` 返回任意图片即可，支持 gif 动图（注意反白模式固定使用内置的常规白色图标）。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## PullToRefresh

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| canReleaseText | 释放的提示文案 | `ReactNode` | `松手刷新` |
| disabled | 是否禁用下拉刷新 | `boolean` | `false` |
| headHeight | 头部提示内容区的高度，单位为 px | `number` | `40` |
| pullingText | 下拉的提示文案 | `ReactNode` | `下拉刷新` |
| refreshingText | 刷新时的提示文案 | `ReactNode` | `刷新中` |
| renderIcon | 根据下拉状态自定义加载图标，直接返回 `<img>` 即可传入图片（支持 gif 动图）；不传时使用内置图标 | `(status: PullStatus) => ReactNode` | 内置 gif 图标 |
| renderText | 根据下拉状态，自定义下拉提示文案 | `ReactNode` | `-` |
| threshold | 触发刷新需要下拉多少距离，单位为 px | `number` | `60` |
| onRefresh | 触发刷新时的处理函数 | `() => Promise<any>` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-pulltorefresh-icon-width | 下拉时icon宽度 | `32px` |
| \--nutui-pulltorefresh-icon-height | 下拉时icon高度 | `32px` |
| \--nutui-pulltorefresh-color-primary | 深色背景模式 | `$color-primay` |

<Contribution name="PullToRefresh" />
