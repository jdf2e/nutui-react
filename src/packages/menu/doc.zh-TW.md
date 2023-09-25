# Menu 菜單

## 介紹

嚮下彈出的菜單列錶

## 安裝

```tsx
import { Menu } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu
          onClose={(i: number) => console.log('onClose', i)}
          onOpen={(i: number) => console.log('onOpen', i)}
        >
          <Menu.Item options={options} value={0} />
          <Menu.Item options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 受控

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  const [stateOne, setStateOne] = useState(0)
  const [stateTwo, setStateTwo] = useState('a')
  return (
    <>
      <div className="demo full">
        <Menu>
          <Menu.Item options={options} value={stateOne} onChange={(v) => setStateOne(v.value)} />
          <Menu.Item options={options1} value={stateTwo} onChange={(v) => setStateTwo(v.value)} />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 自定義菜單內容

使用實例上的 toggle 方法可以手動關閉彈框。

:::demo

```tsx
import React, { useRef, useState } from 'react'
import { Menu, Button } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  const itemRef = useRef(null)
  return (
    <>
      <div className="demo full">
        <Menu>
          <Menu.Item options={options} value={0} />
          <Menu.Item title="篩選" ref={itemRef}>
            <div>自定義內容</div>
            <Button onClick={() => itemRef.current.toggle(false)}>確認</Button>
          </Menu.Item>
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 一行兩列

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])

  return (
    <>
      <div className="demo full">
        <Menu>
          <Menu.Item options={options} value={0} columns={2} />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 自定義選中態顏色

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu activeColor="green">
          <Menu.Item options={options} value={0} />
          <Menu.Item options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 自定義圖標

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';
import { TriangleDown, Success } from '@nutui/icons-react'

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu icon={<TriangleDown />}>
          <Menu.Item options={options} value={0} icon={<Success />} />
          <Menu.Item options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 嚮上展開

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <Menu.Item options={options} value={0} direction="up" />
          <Menu.Item options={options1} value="a" direction="up" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 禁用菜單

:::demo

```tsx
import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <Menu.Item options={options} value={0} disabled />
          <Menu.Item options={options1} value="a" disabled />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

## Menu

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| activeColor | 選項的選中態圖標顏色 | `string` | `#F2270C` |
| closeOnOverlayClick | 是否在點擊遮罩層後關閉菜單 | `boolean` | `true` |
| lockScroll | 背景是否鎖定 | `boolean` | `true` |
| scrollFixed | 滾動後是否固定，可設置固定位置 | `boolean` \| `string` \| `number` | `true` |
| icon | 自定義標題圖標 | `React.ReactNode` | `-` |
| onOpen | menu 展开触发 | `(index: number, from: 'NORMAL' \| 'REF') => void` | `-` |
| onClose | menu 关闭触发 | `(index: number, from: 'NORMAL' \| 'REF') => void` | `-` |

## Menu.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 菜單項標題 | `string` | `當前選中項文字` |
| options | 選項數組 | `array` | `-` |
| disabled | 是否禁用菜單 | `boolean` | `false` |
| columns | 可以設置一行展示多少列 options | `number` | `1` |
| closeOnClickAway | 点击空白处关闭菜单 | `boolean` | `true` |
| icon | 自定義選項圖標 | `React.ReactNode` | `Check` |
| direction | 菜單展開方嚮，可選值為up | `string` | `down` |
| onChange | 選擇 option 之後觸發 | `(event: any) => void` | `-` |

### Ref

| 事件名 | 說明 | 回調參數 |
| --- | --- | --- |
| toggle | 切換菜單展示狀態，傳 true 為顯示，false 為隱藏，不傳參為取反 | `show?: boolean` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-menu-bar-line-height | menu標題欄的行高 | `48px` |
| \--nutui-menu-item-font-size | 標題的字號 | `$font-size-2` |
| \--nutui-menu-item-text-color | 標題的顏色 | `$title-color` |
| \--nutui-menu-item-active-text-color | 打開狀態的顏色 | `$primary-color` |
| \--nutui-menu-bar-opened-z-index | 打開狀態的 z-index | `2001` |
| \--nutui-menu-item-disabled-color | 禁用狀態的顏色 | `#969799` |
| \--nutui-menu-title-text-padding-left | 標題的左內邊距 | `8px` |
| \--nutui-menu-title-text-padding-right | 標題的右內邊距 | `8px` |
| \--nutui-menu-item-content-padding | 菜單選項容器的內邊距 | `12px 24px` |
| \--nutui-menu-item-content-max-height | 菜單選項容器的最大高度 | `214px` |
| \--nutui-menu-item-option-padding-top | 菜單選項的頂部內邊距 | `12px` |
| \--nutui-menu-item-option-padding-bottom | 菜單選項的底部內邊距 | `12px` |
| \--nutui-menu-item-option-i-margin-right | 菜單選項文本與icon的距離 | `6px` |
| \--nutui-menu-bar-box-shadow | 菜單標題欄的陰影 | `0 2px 12px rgba(89, 89, 89, 0.12)` |
| \--nutui-menu-scroll-fixed-top | fix 狀態的頂部距離 | `0` |
| \--nutui-menu-scroll-fixed-z-index | fix 狀態的z-index | `$mask-z-index` |
| \--nutui-menu-active-item-font-weight | 選中狀態的字重 | `500` |
| \--nutui-menu-item-content-bg-color | 菜單選項容器的背景色 | `$gray6` |