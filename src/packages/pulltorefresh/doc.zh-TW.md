# PullToRefresh 下拉刷新

在列表中通過手指下拉刷新加載新內容的交互操作。

## 引入

```tsx
import { PullToRefresh } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

同一個示例裡通過兩個按鈕演示：切換普通 / 反白模式，以及切換圖標內容（通用 / agent / 大促）。

組件內置了普通態與反白態兩套 gif 圖標，無需任何配置即可使用；需要換成其它主題時，通過 `renderIcon(status)` 返回任意圖片即可，支持 gif 動圖（注意反白模式固定使用內置的常規白色圖標）。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## PullToRefresh

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| canReleaseText | 釋放的提示文案 | `ReactNode` | `松手刷新` |
| disabled | 是否禁用下拉刷新 | `boolean` | `false` |
| headHeight | 頭部提示內容區的高度，單位為 px | `number` | `40` |
| pullingText | 下拉的提示文案 | `ReactNode` | `下拉刷新` |
| refreshingText | 刷新時的提示文案 | `ReactNode` | `刷新中` |
| renderIcon | 根據下拉狀態自定義加載圖標，直接返回 `<img>` 即可傳入圖片（支持 gif 動圖）；不傳時使用內置圖標 | `(status: PullStatus) => ReactNode` | 內置 gif 圖標 |
| renderText | 根據下拉狀態，自定義下拉提示文案 | `ReactNode` | `-` |
| threshold | 觸發刷新需要下拉多少距離，單位為 px | `number` | `60` |
| onRefresh | 觸發刷新時的處理函數 | `() => Promise<any>` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-pulltorefresh-icon-width | 下拉時icon寬度 | `32px` |
| \--nutui-pulltorefresh-icon-height | 下拉時icon高度 | `32px` |
| \--nutui-pulltorefresh-color-primary | 深色背景模式 | `$color-primay` |

<Contribution name="PullToRefresh" />
