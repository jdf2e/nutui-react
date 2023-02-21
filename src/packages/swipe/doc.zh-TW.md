# Swipe組件

### 介紹

常用於儲存格左右滑删除等手勢操作

### 安裝

```javascript
// react
import { Swipe } from '@nutui/nutui-react';

```

## 程式碼演示

### 基礎用法

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Swipe
      rightAction={
        <Button type="primary" shape="square">
          删除
        </Button>
      }
    >
      <Cell title="左滑删除" roundRadius={0} />
    </Swipe>
  </>
}
export default App;
```
:::


### 通過實例方法控制

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  const closeRef = useRef(null)
  const openRef = useRef(null)
  return <>
    <Swipe
      ref={openRef}
      rightAction={
        <Button shape="square" type="danger">
          删除
        </Button>
      }
    >
      <Cell title='點擊下方按鈕打開或關閉' roundRadius={0} />
    </Swipe>
    <Button onClick={() => openRef.current?.open()}>
      打開
    </Button>
    <Button onClick={() => openRef.current?.close()}>
      關閉
    </Button>
  </>
}
export default App;
```
:::

### 點擊關閉

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  const closeRef = useRef(null)
  return <>
    <Swipe
      ref={openRef}
      rightAction={
        <Button shape="square" type="danger">
          删除
        </Button>
      }
      onActionClick={() => {
        closeRef.current.close()
      }}
    >
      <Cell title='點擊右側按鈕關閉' roundRadius={0} />
    </Swipe>
  </>
}
export default App;
```
:::

### 禁用滑動

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Swipe
      rightAction={
        <Button shape="square" type="danger">
          删除
        </Button>
      }
      disabled
    >
      <Cell title="禁用滑动" roundRadius={0} />
    </Swipe>
  </>
}
export default App;
```
:::

### 事件監聽

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button, Toast } from '@nutui/nutui-react';

const App = () => {
  const handleChange = () => {
    Toast.text('點擊');
  }
  return <>
    <Swipe
      leftAction={
        <Button shape="square" type="success">
          選擇
        </Button>
      }
      rightAction={
        <>
          <Button shape="square" type="danger">
            删除
          </Button>
          <Button shape="square" type="info">
            收藏
          </Button>
        </>
      }
      onActionClick={handleChange}
      onOpen={() => Toast.text('打開')}
      onClose={() => Toast.text('關閉')}
    >
      <Cell title="事件" />
    </Swipe>
  </>
}
export default App;
```
:::

### 非同步控制

:::demo
```tsx
import React, { useRef } from "react";
import { Swipe, Cell, Button, Dialog } from '@nutui/nutui-react';
import { SwipeInstance } from '@/packages/Swipe'

const App = () => {
  const refDom = useRef<SwipeInstance>(null)
  const beforeClose = (postion: string) => {
    Dialog.alert({
      title: '提示',
      content: postion === 'left' ? '確定選擇嗎？' : '確定删除嗎？',
      onOk: () => {
        refDom.current && refDom.current.close()
      },
    })
  }
  return <>
    <Swipe
      ref={refDom}
      beforeClose={beforeClose}
      leftAction={
        <Button shape="square" type="success">
          選擇
        </Button>
      }
      rightAction={
        <>
          <Button shape="square" type="danger">
            删除
          </Button>
        </>
      }
    >
      <Cell title="事件" />
    </Swipe>
  </>
}
export default App;
```
:::

### 自定義內容

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button, InputNumber } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Swipe
      rightAction={
        <>
          <Button shape="square" type="danger">
            加入購物車
          </Button>
        </>
      }
    >
      <Cell>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <span>商品</span>
          <InputNumber style={{ float: 'right' }} />
        </div>
      </Cell>
    </Swipe>
  </>
}
export default App;
```
:::

## API

### Props

|參數|說明|類型|預設值|
|--------------|----------------------------------|--------|------------------|
| name |識別字，可以在事件參數中獲取到| _number \| string_ | `''` |
| leftWidth |指定左側滑動區域寬度，組織為`px` | _number \| string_ | ` 0` |
| rightWidth |指定右側滑動區域寬度，組織為`px` | _number \| string_ | ` 0` |
| leftAction |左側滑動區域的內容| _ReactNode_ | - |
| rightAction |右側滑動區域的內容| _ReactNode_ | - |
| beforeClose |關閉前的回呼函數，返回`position` | _string_ | `left` |
| disabled |是否禁用滑動| _boolean_ | ` false` |

### Events

| 事件名                 | 說明           |回檔參數|
|---------------------|--------------|--------------|
| onOpen              | 打開儲存格側邊欄     | _name: string，position: `left \| right`_ |
| onClose             | 收起儲存格側邊欄     | _name: string，position: `left \| right`_ |
| onActionClick       | 點擊左側或者右側時觸發  | _event: Event，position: `left \| right`_ |
| onTouchStart`v1.4.7` | ontouchStart | _event: Event      |
| onTouchMove`v1.4.7`         | ontouchmove  | _event: Event     |
| onTouchEnd`v1.4.7`          | ontouchend   | _event: Event     |

## Swipe 实例方法

| 方法名   | 說明 | 回檔參數 |
|-------|--| ----- |
| open | 打開 | `left\|right` |
| close | 關閉 | - |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-swiper-pagination-item-background-color | `  #ddd` |
| --nutui-swiper-pagination-item-width | `  8px` |
| --nutui-swiper-pagination-item-height | `  3px` |
| --nutui-swiper-pagination-item-margin-right | `  7px` |
| --nutui-swiper-pagination-item-border-radius | `  2px` |
