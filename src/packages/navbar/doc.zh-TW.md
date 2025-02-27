# Navbar 頭部導航

提供導航功能。

## 引入

```tsx
import { NavBar } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 標題位置

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 多tab切換導航

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## Navbar

### Props

| 属性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| right | 右側內容 | `ReactNode` | `-` |
| left | 左側內容，渲染在返回區域的右側 | `ReactNode` | `-` |
| back | 返回區域的文字 | `ReactNode` | `-` |
| title | 標題 | `ReactNode` | `-` |
| fixed | 是否固定 | `boolean` | `false` |
| safeAreaInsetTop | 是否適配安全區 | `boolean` | `false` |
| placeholder | 固定在頂部時，是否在標簽位置生成一個等高的佔位元素 | `boolean` | `false` |
| zIndex | 導航欄層級 | `number` \| `string` | `10` |
| onBackClick | 點擊返回區域後的回調 | `onBackClick:(event: Event)=>void` | `false` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-navbar-width | 頭部導航的寬度 | `100%` |
| \--nutui-navbar-height | 頭部導航的高度 | `44px` |
| \--nutui-navbar-margin-bottom | 頭部導航的下邊距 | `20px` |
| \--nutui-navbar-background | 頭部導航的背景顏色 | `$white` |
| \--nutui-navbar-box-shadow | 頭部導航的陰影 | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-navbar-color | 頭部導航的字體顏色 | `$color-text` |
| \--nutui-navbar-font-size | 頭部導航的字體大小 | `$font-size-base` |
| \--nutui-navbar-title-font-size | 頭部導航標題的字體大小 | `$font-size-base` |
| \--nutui-navbar-title-font-weight | 頭部導航標題的字體粗細 | `0` |
| \--nutui-navbar-title-font-color | 頭部導航標題的字體顏色 | `$color-title` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ANavBar)

### Component Logs

- 🐛 fix(navbar): safearea displays abnormal when safeAreaInsetTop has been set true ([#2632](https://github.com/jdf2e/nutui-react/pull/2632)) `v2.6.22`
- 🐛 fix(navbar): demo拆解与规范 ([#2055](https://github.com/jdf2e/nutui-react/pull/2055)) @Alex-huxiyang `v2.4.2`
- 💡 📖 docs(navbar): 文档可读性优化 ([#1915](https://github.com/jdf2e/nutui-react/pull/1915)) @Alex.huxiyang `v2.3.9`
- ✨ feat(navbar): title区域自适应宽度 ([#1891](https://github.com/jdf2e/nutui-react/pull/1891)) @songsong `v2.3.8`
- 💡 📖 docs(navbar): showtoas 改为 showToast ([#1826](https://github.com/jdf2e/nutui-react/pull/1826)) @minghui `v2.3.4`

> 更多版本更新記錄請查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=navbar&expanded=true)
