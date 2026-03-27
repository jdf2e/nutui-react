在這裡輸入要轉換的內容# QuickEnter 快捷入口

## 介紹

快捷入口組件，底部彈出的快捷導航列表。

## 引入

```tsx
import { QuickEnter } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

```tsx
import React, { useState } from 'react'
import { QuickEnter, Cell, Toast } from '@nutui/nutui-react'
import {
  Message,
  Home,
  Search,
  Cart,
  Edit,
  Shop,
  Del,
} from '@nutui/icons-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    { title: '消息', icon: <Message /> },
    { title: '首頁', icon: <Home /> },
    { title: '蒐索', icon: <Search /> },
    { title: '購物車', icon: <Cart /> },
    { title: '功能反饋', icon: <Edit /> },
    { title: '我的常購', icon: <Shop /> },
    { title: '訂單回收站', icon: <Del /> },
  ]

  const onChange = (item: any) => {
    Toast.show(`Clicked: ${item.title}`)
  }

  return (
    <>
      <Cell title="點擊查看快捷入口" onClick={() => setVisible(true)} />
      <QuickEnter
        visible={visible}
        options={options}
        onClose={() => setVisible(false)}
        onChange={onChange}
      />
    </>
  )
}
export default Demo
```

### 自定義關閉圖標

```tsx
import React, { useState } from 'react'
import { QuickEnter, Cell } from '@nutui/nutui-react'
import { Message, Home, Search, Cart, ArrowUp } from '@nutui/icons-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    { title: '消息', icon: <Message />, badge: 8 },
    { title: '首頁', icon: <Home /> },
    { title: '蒐索', icon: <Search /> },
    { title: '購物車', icon: <Cart /> },
  ]

  return (
    <>
      <Cell title="自定義關閉圖標" onClick={() => setVisible(true)} />
      <QuickEnter
        visible={visible}
        options={options}
        style={{ '--nutui-quickenter-bg-color': '#fff' }}
        closeIcon={<ArrowUp width={12} height={12} />}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo
```

## QuickEnter

### Props

| 屬性 | 説明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否可見 | `boolean` | `false` |
| title | 標題 | `ReactNode` | `快捷入口` |
| options | 選項列表 | `QuickEnterOption[]` | `[]` |
| closeIcon | 自定義關閉圖標 | `ReactNode` | `-` |
| popupProps | 透傳給 Popup 組件的屬性 | `PopupProps` | `{}` |
| closeOnOverlayClick | 是否在點擊遮罩層後關閉 | `boolean` | `true` |

### Events

| 事件名 | 説明 | 回調參數 |
| --- | --- | --- |
| onClose | 關閉時觸髮 | `-` |
| onChange | 點擊選項時觸髮 | `item: QuickEnterOption, index: number` |

### QuickEnterOption 數據結構

| 參數 | 説明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 選項標題 | `string` | `-` |
| icon | 選項圖標 | `ReactNode` | `-` |
| type | 選項類型 | `string` | `-` |
| url | 跳轉鏈接 | `string` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，詳情請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-quickenter-bg-color | `$f5f5f5` |
| --nutui-quickenter-max-height | `256px` |
| --nutui-quickenter-title-font-size | `$font-size-base` |
| --nutui-quickenter-title-color | `$color-title` |
| --nutui-quickenter-item-title-font-size | `$font-size-s` |
| --nutui-quickenter-item-title-color | `$color-title` |
| --nutui-quickenter-item-icon-bg-color | `$white` |
| --nutui-quickenter-item-icon-color | `$color-title` |
| --nutui-quickenter-close-icon-size | `12px` |
| --nutui-quickenter-close-icon-color | `#808080` |
| --nutui-quickenter-box-shadow | `0px 8px 16px rgba(141, 153, 167, 0.2), 0px -0.5px 0px rgba(0, 0, 0, 0.05) inset` |
