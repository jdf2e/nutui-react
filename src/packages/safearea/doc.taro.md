# SafeArea 安全区

## 介绍

在全面屏下提供自适应的边距调整。当网页被全屏展示时，可借助安全区实现自动适配。

## 安装

```tsx
import { SafeArea } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React from 'react'
import { SafeArea } from '@nutui/nutui-react-taro'

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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- |-----|
| position | 安全区的位置 | `'top' \| 'bottom'` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-safe-area-multiple | 显示的倍数 | `1` |