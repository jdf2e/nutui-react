# Skeleton 骨架屏組件

在頁面上待加載區域填充灰色的佔位圖，本質上是界面加載過程中的過渡效果。

## 引入

```tsx
import { Skeleton } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 傳入多行

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 顯示頭像

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 標題段落圓角風格

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 顯示子組件

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Skeleton

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否顯示骨架屏(true不顯示骨架屏，false顯示骨架屏) | `boolean` | `true` |
| animated | 是否開啟骨架屏動畫 | `boolean` | `false` |
| avatar | 是否顯示頭像 | `boolean` | `false` |
| avatarShape | 頭像形狀：正方形/圓形 | `string` | `round` |
| avatarSize | 頭像大小 | `string` | `50px` |
| rows | 設置段落行數 | `number` | `1` |
| title | 是否顯示段落標題 | `boolean` | `true` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-skeleton-background | 背景 | `rgb(239, 239, 239)` |
| \--nutui-skeleton-line-width | 線條寬度 | `100%` |
| \--nutui-skeleton-line-height | 線條高度 | `15px` |
| \--nutui-skeleton-line-border-radius | 線條邊框圓角 | `0` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ASkeleton)

### Component Logs

- 🐛 fix(skeleton): demo拆解与规范 ([#2047](https://github.com/jdf2e/nutui-react/pull/2047)) @wanglihuaya `v2.4.2`
- 💡 📖 docs: 删除了skeleton文档中无用的props(width,height) ([#1303](https://github.com/jdf2e/nutui-react/pull/1303)) @ivan-My `v2.0.13`
- 💡 🛠 refactor: Skeleton ([#1036](https://github.com/jdf2e/nutui-react/pull/1036)) @Eiinu `v2.0.0-alpha.11`

> 更多版本更新記錄請查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=skeleton&expanded=true)
