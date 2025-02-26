# PullToRefresh 下拉刷新

在列表中通過手指下拉刷新加載新內容的交互操作。

## 引入

```tsx
import { PullToRefresh } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 深色背景-反白模式:type='primary'

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## PullToRefresh

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| canReleaseText | 釋放的提示文案 | `ReactNode` | `松手刷新` |
| completeText | 完成時的提示文案 | `ReactNode` | `刷新成功` |
| completeDelay | 完成後延遲消失的時間，單位為 ms | `number` | `500` |
| disabled | 是否禁用下拉刷新 | `boolean` | `false` |
| headHeight | 頭部提示內容區的高度，單位為 px | `number` | `40` |
| pullingText | 下拉的提示文案 | `ReactNode` | `下拉刷新` |
| refreshingText | 刷新時的提示文案 | `ReactNode` | `刷新中` |
| renderIcon | 根據下拉狀態，自定義下拉提示圖標 | `ReactNode` | `<Loading />` |
| renderText | 根據下拉狀態，自定義下拉提示文案 | `ReactNode` | `-` |
| threshold | 觸發刷新需要下拉多少距離，單位為 px | `number` | `60` |
| onRefresh | 觸發刷新時的處理函數 | `() => Promise<any>` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-pulltorefresh-icon-width | 下拉時icon寬度 | `36px` |
| \--nutui-pulltorefresh-icon-height | 下拉時icon高度 | `26px` |
| \--nutui-pulltorefresh-color-primary | 深色背景模式 | `$color-primay` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3APullToRefresh)

### Component Logs

- 🐛 fix(PullToRefresh): 修复PullToRefresh组件disabled属性在taro中无效的问题 ([#2538](https://github.com/jdf2e/nutui-react/pull/2538)) `v2.6.17`
- 🐛 fix(pulltorefresh): demo中下拉图标修改为joy logo ([#2084](https://github.com/jdf2e/nutui-react/pull/2084)) @irisSong `v2.4.2`
- ✨ feat(pulltorefresh): 增加 type 属性，支持深色背景设置 ([#2044](https://github.com/jdf2e/nutui-react/pull/2044)) @xiaoyatong `v2.4.1`
- 🐛 fix(pulltorefresh): 修复安卓小程序下拉卡顿问题 ([#1830](https://github.com/jdf2e/nutui-react/pull/1830)) @NickH `v2.3.5`
- 🐛 fix(pulltorefresh): icon 部分拆到demo中 ([#1812](https://github.com/jdf2e/nutui-react/pull/1812)) @xiaoyatong `v2.3.3`

> 更多版本更新記錄請查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=pulltorefresh&expanded=true)
