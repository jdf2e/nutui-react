# PullToRefresh 下拉刷新

## 介紹

在列錶中通過手指下拉刷新加載新內容的交互操作。

## 安裝

```tsx
import { PullToRefresh } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, {useState} from "react";
import { PullToRefresh, Cell } from '@nutui/nutui-react'

const App = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  return (
    <>
      <div className="demo">
        <h2>基礎用法</h2>
        <PullToRefresh>
          {list.map((item) => (
            <Cell key={item}>{item}</Cell>
          ))}
        </PullToRefresh>
      </div>
    </>
  )
}

export default App
```

:::

## PullToRefresh

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| canReleaseText | 釋放的提示文案 | `ReactNode` | `釋放立即刷新` |
| completeText | 完成時的提示文案 | `ReactNode` | `刷新成功` |
| completeDelay | 完成後延遲消失的時間，單位為 ms | `number` | `500` |
| disabled | 是否禁用下拉刷新 | `boolean` | `false` |
| headHeight | 頭部提示內容區的高度，單位為 px | `number` | `40` |
| pullingText | 下拉的提示文案 | `ReactNode` | `下拉刷新` |
| refreshingText | 刷新時的提示文案 | `ReactNode` | `加載中……` |
| renderText | 根據下拉狀態，自定義下拉提示文案 | `ReactNode` | `-` |
| threshold | 觸發刷新需要下拉多少距離，單位為 px | `number` | `60` |
| onRefresh | 觸發刷新時的處理函數 | `() => Promise<any>` | `-` |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-pulltorefresh-top-icon-width | 下拉時icon寬度 | `36px` |
| \--nutui-pulltorefresh-top-icon-height | 下拉時icon高度 | `26px` |