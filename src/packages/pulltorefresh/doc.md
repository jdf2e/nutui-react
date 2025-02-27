# PullToRefresh 下拉刷新

在列表中通过手指下拉刷新加载新内容的交互操作。

## 引入

```tsx
import { PullToRefresh } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 深色背景-反白模式:type='primary'

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## PullToRefresh

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| canReleaseText | 释放的提示文案 | `ReactNode` | `松手刷新` |
| completeText | 完成时的提示文案 | `ReactNode` | `刷新成功` |
| completeDelay | 完成后延迟消失的时间，单位为 ms | `number` | `500` |
| disabled | 是否禁用下拉刷新 | `boolean` | `false` |
| headHeight | 头部提示内容区的高度，单位为 px | `number` | `40` |
| pullingText | 下拉的提示文案 | `ReactNode` | `下拉刷新` |
| refreshingText | 刷新时的提示文案 | `ReactNode` | `刷新中` |
| renderIcon | 根据下拉状态，自定义下拉提示图标 | `ReactNode` | `<Loading />` |
| renderText | 根据下拉状态，自定义下拉提示文案 | `ReactNode` | `-` |
| threshold | 触发刷新需要下拉多少距离，单位为 px | `number` | `60` |
| onRefresh | 触发刷新时的处理函数 | `() => Promise<any>` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-pulltorefresh-icon-width | 下拉时icon宽度 | `36px` |
| \--nutui-pulltorefresh-icon-height | 下拉时icon高度 | `26px` |
| \--nutui-pulltorefresh-color-primary | 深色背景模式 | `$color-primay` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20PullToRefresh)

### Component Logs

- 🐛 fix(PullToRefresh): 修复PullToRefresh组件disabled属性在taro中无效的问题 ([#2538](https://github.com/jdf2e/nutui-react/pull/2538)) `v2.6.17`
- 🐛 fix(pulltorefresh): demo中下拉图标修改为joy logo ([#2084](https://github.com/jdf2e/nutui-react/pull/2084)) @irisSong `v2.4.2`
- ✨ feat(pulltorefresh): 增加 type 属性，支持深色背景设置 ([#2044](https://github.com/jdf2e/nutui-react/pull/2044)) @xiaoyatong `v2.4.1`
- 🐛 fix(pulltorefresh): 修复安卓小程序下拉卡顿问题 ([#1830](https://github.com/jdf2e/nutui-react/pull/1830)) @NickH `v2.3.5`
- 🐛 fix(pulltorefresh): icon 部分拆到demo中 ([#1812](https://github.com/jdf2e/nutui-react/pull/1812)) @xiaoyatong `v2.3.3`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=pulltorefresh&expanded=true)
