# InfiniteLoading 滾動加載

列錶滾動到底部自動加載更多數據。

## 引入

```tsx
import { InfiniteLoading } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 下拉刷新

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義加載文案

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### primary主题

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 基於window滾動

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## InfiniteLoading

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 主題類型 | `default`\| `primary` | `default` |
| hasMore | 是否還有更多數據 | `boolean` | `true` |
| threshold | 距離底部多遠加載 | `number` | `200` |
| capture | 是否使用捕獲模式 true 捕獲 false 冒泡 | `boolean` | `false` |
| target | 用於標識和區分頁面中多個組件實例的唯一標識符。注意，這個屬性並不是用於監聽 DOM 元素，而是用於在同一頁面上管理多個組件實例。 | `string` | `-` |
| loadMoreText | “沒有更多數據”展示文案 | `string` | `哎呀，這裏是底部了啦` |
| pullRefresh | 是否開啟下拉刷新 | `boolean` | `false` |
| pullingText | 下拉刷新提示文案 | `ReactNode` | `鬆手刷新` |
| loadingText | 上拉加載提示文案 | `ReactNode` | `加載中...` |
| onRefresh | 下拉刷新事件回調 | `() => Promise<void>` | `-` |
| onLoadMore | 繼續加載的回調函數 | `() => Promise<void>` | `-` |
| onScroll | 實時監聽滾動高度 | `(param: number) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-infiniteloading-color | 滑動到底部的文字顏色 | `$color-text-help` |
