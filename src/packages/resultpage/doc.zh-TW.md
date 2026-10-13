# ResultPage組件

## 介紹

以頁面的形式向用戶反饋操作結果

## 安裝

```tsx
import { ResultPage } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 修改狀態

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 無標題

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 單按鈕

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 無按鈕

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 半彈層內嵌

適用於 Popup 半彈層場景，內容區縱向居中展示。

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 彈窗內嵌

適用於 Dialog 彈窗場景。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## ResultPage

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 標題 | `ReactNode` | `-` |
| description | 描述，最多展示兩行 | `ReactNode` | `-` |
| status | 狀態類型 | `success` \| `error` \| `warning` \| `info` \| `waiting` | `info` |
| icon | 自定義圖標 | `ReactNode` | `-` |
| actions | 底部操作按鈕 | `ResultPageAction[]` | `[]` |

### ResultPageAction

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| text | 按鈕文案 | `ReactNode` | `-` |
| type | 按鈕類型 | `UIType` | `default` |
| size | 按鈕尺寸 | `UISize` | `large` |
| fill | 填充模式 | `UIFill` | `outline` |
| disabled | 是否禁用 | `boolean` | `false` |
| onClick | 點擊回調 | `() => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-resultpage-width | 內容區域寬度 | `240px` |
| \--nutui-resultpage-icon-size | 圖標尺寸 | `36px` |
| \--nutui-resultpage-icon-margin-bottom | 圖標與內容間距 | `4px` |
| \--nutui-resultpage-title-margin-bottom | 標題與描述間距 | `4px` |
| \--nutui-resultpage-title-font-size | 標題字號 | `16px` |
| \--nutui-resultpage-title-line-height | 標題行高 | `24px` |
| \--nutui-resultpage-title-color | 標題顏色 | `$color-title` |
| \--nutui-resultpage-description-font-size | 描述字號 | `14px` |
| \--nutui-resultpage-description-color | 描述顏色 | `$color-text` |
| \--nutui-resultpage-description-line-height | 描述行高 | `22px` |
| \--nutui-resultpage-actions-margin-top | 描述與操作區間距 | `12px` |

<Contribution name="ResultPage" />
