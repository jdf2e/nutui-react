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

## ResultPage

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 標題 | `ReactNode` | `-` |
| description | 描述，最多展示兩行 | `ReactNode` | `-` |
| status | 狀態類型 | `success` \| `error` \| `warning` \| `info` \| `waiting` | `info` |
| icon | 自定義 `icon` | `ReactNode` | `-` |
| actions | 可用於處理操作的一組數據 | `Array` | `[]` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-resultpage-width | 內容區域寬度 | `240px` |
| \--nutui-resultpage-icon-size | icon的寬高 | `36px` |
| \--nutui-resultpage-icon-margin-bottom | icon的margin-bottom值 | `12px` |
| \--resultpage-title-margin-bottom | 標題的margin-top值 | `12px` |
| \--nutui-resultpage-title-font-size | 標題的字體大小 | `$font-size-xl` |
| \---nutui-resultpage-title-color | 標題的文字顏色 | `$color-title` |
| \--nutui-resultpage-description-font-size | 描述的字體大小 | `$font-size-base` |
| \--nutui-resultpage-description-color | 描述的文字顏色 | `$color-text` |
| \--nutui-resultpage-description-line-height | 描述的行高 | `20px` |
| \--nutui-resultpage-actions-margin-topt | 操作區域的margin-top值 | `16px` |
