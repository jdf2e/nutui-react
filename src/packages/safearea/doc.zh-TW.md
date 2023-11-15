# SafeArea 安全区

## 介紹

在全面屏下提供自适应的边距调整。当网页被全屏展示时，可借助安全区实现自动适配。

## 安装

```tsx
import { SafeArea } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React from 'react'
import { SafeArea } from '@nutui/nutui-react'

function generateRandomTextArray(count) {
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  const textArray = []
  for (let j = 0; j < count; j++) {
    const randomLength = Math.floor(Math.random() * 5) + 4
    let randomText = ''
    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomText += characters.charAt(randomIndex)
    }
    textArray.push(randomText)
  }
  return textArray
}
const App = () => {
  return (
    <>
      <div>{generateRandomTextArray(900).join(' ')}</div>
      <SafeArea position="bottom" />
    </>
  )
}
export default App

```

:::


## SafeArea

### Props

| 属性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| position | 安全区的位置 | `'top' \| 'bottom'` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-safe-area-multiple | 显示的倍数 | `1` |