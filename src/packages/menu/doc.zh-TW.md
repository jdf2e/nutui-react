# Menu 菜單

### 介紹

向下彈出的菜單列表

### 安裝

``` javascript
// react
import { Menu, MenuItem } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, {useState } from 'react'
import { Menu, MenuItem } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value='a' />
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
import { Menu, MenuItem, Button } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} />
          <MenuItem title="篩選" ref={itemRef}>
            <div>自定義內容</div>
            <Button onClick={() => itemRef.current.toggle(false)}>確認</Button>
          </MenuItem>
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
import { Menu, MenuItem } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} columns={2} />
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
import { Menu, MenuItem } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value="a" />
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
import { Menu, MenuItem } from '@nutui/nutui-react';
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
        <Menu titleIcon={<TriangleDown />}>
          <MenuItem options={options} value={0} icon={<Success />} />
          <MenuItem options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 向上展開

:::demo

```tsx
import React, { useState } from 'react'
import { Menu, MenuItem } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} direction="up" />
          <MenuItem options={options1} value="a" direction="up" />
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
import { Menu, MenuItem } from '@nutui/nutui-react';

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
          <MenuItem options={options} value={0} disabled />
          <MenuItem options={options1} value="a" disabled />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

## API

### Menu Props

| 屬性 | 說明                           | 類型                    | 默認值  |
|---------------------|--------------------------------|-------------------------|---------|
| activeColor         | 選項的選中態圖標顏色           | string                  | `#F2270C` |
| closeOnClickOverlay | 是否在點擊遮罩層後關閉菜單     | boolean                 | `true`    |
| lockScroll          | 背景是否鎖定                   | boolean                 | `true`    |
| scrollFixed         | 滾動後是否固定，可設置固定位置                   | boolean \| string \| number                 | `true`    |
| titleIcon`v2.0.0`             | 自定義標題圖標                 | React.ReactNode                  | -       |

### MenuItem Props

| 屬性 | 說明                                    | 類型    | 默認值           |
|-------------------------------|-----------------------------------------|---------|------------------|
| title                         | 菜單項標題                              | string  | 當前選中項文字   |
| options                       | 選項數組                                | Array   | -                |
| disabled                      | 是否禁用菜單                            | boolean | `false`            |
| columns                          | 可以設置一行展示多少列 options          | number  | `1`                |
| optionsIcon`v2.0.0`          | 自定義選項圖標                          | React.ReactNode  | `Check`          |
| direction            | 菜單展開方向，可選值為up                | string  | `down`           |


### MenuItem Events

| 事件名      | 說明                 | 回調參數     |
|----------|----------------------|--------------|
| onChange | 選擇 option 之後觸發 | 選擇的 value |

### MenuItem API

| 事件名 | 说明                 | 回调参数     |
|-----|----------------------|--------------|
| toggle   | 切换菜单展示状态，传 true 为显示，false 为隐藏，不传参为取反 | `show?: boolean` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-menu-bar-line-height | `48px` |
| --nutui-menu-item-font-size | `$font-size-2` |
| --nutui-menu-item-text-color | `$title-color` |
| --nutui-menu-item-active-text-color | `$primary-color` |
| --nutui-menu-bar-border-bottom-color | `#eaf0fb` |
| --nutui-menu-bar-opened-z-index | `2001` |
| --nutui-menu-item-disabled-color | `#969799` |
| --nutui-menu-title-text-padding-left | `8px` |
| --nutui-menu-title-text-padding-right | `8px` |
| --nutui-menu-item-content-padding | `12px 24px` |
| --nutui-menu-item-content-max-height | `214px` |
| --nutui-menu-item-option-padding-top | `12px` |
| --nutui-menu-item-option-padding-bottom | `12px` |
| --nutui-menu-item-option-i-margin-right | `6px` |
| --nutui-menu-bar-box-shadow | `0 2px 12px rgba(89, 89, 89, 0.12)` |
| --nutui-menu-scroll-fixed-top | `0` |
| --nutui-menu-scroll-fixed-z-index | `$mask-z-index` |
| --nutui-menu-active-item-font-weight | `500` |
| --nutui-menu-item-content-bg-color | `$gray6` |
