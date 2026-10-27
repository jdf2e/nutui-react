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

### 自定義文案與圖標

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

頁面到達底部閾值後觸發加載。組件在加載期間會阻止重複觸發，並保證加載態至少展示 200ms；`hasMore` 變為 `false` 後展示完成態並自動復位。組件內置了普通態與反白態兩套圖標（按 `type` 選擇）：加載中用 gif 動圖，沒有更多了用靜態圖。需要換成其它主題時通過 `renderIcon(status)` 返回任意圖片即可（支持 gif 動圖）。

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 主題類型 | `default`\| `primary` | `default` |
| hasMore | 是否還有更多數據 | `boolean` | `true` |
| threshold | 距離底部多遠加載 | `number` | `200` |
| capture | 是否使用捕獲模式 true 捕獲 false 冒泡 | `boolean` | `false` |
| target | 獲取監聽的目標元素 | `string` | `-` |
| pullUpText | 待加載狀態文案 | `ReactNode` | `上滑加載更多` |
| loadingText | 加載中狀態文案 | `ReactNode` | `加載中` |
| loadMoreText | 沒有更多數據時的完成態文案 | `ReactNode` | `沒有更多了` |
| minimumLoadingTime | 加載態最短展示時長，單位 ms | `number` | `200` |
| renderIcon | 自定義各狀態圖標，返回任意圖片即可替換內置圖標（支持 gif 動圖） | `(status: 'idle' \| 'loading' \| 'complete') => ReactNode` | 內置圖標（加載中為 gif 動圖，沒有更多了為靜態圖） |
| iconStyle | 圖標容器樣式，可通過 `--nutui-infiniteloading-icon-size` 調整圖標尺寸 | `CSSProperties` | `-` |
| pullRefresh | 是否開啟下拉刷新 | `boolean` | `false` |
| pullingText | 下拉刷新提示文案 | `ReactNode` | `鬆手刷新` |
| onRefresh | 下拉刷新事件回調 | `() => Promise<void>` | `-` |
| onLoadMore | 繼續加載的回調函數 | `() => Promise<void>` | `-` |
| onScroll | 實時監聽滾動高度 | `(param: number) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-infiniteloading-color | 狀態文字顏色 | `$color-text` |
| \--nutui-infiniteloading-icon-size | 圖標尺寸 | `20px` |

<Contribution name="InfiniteLoading" />
