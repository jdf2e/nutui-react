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
| name |識別字，可以在事件參數中獲取到| number \| string | - |
| leftWidth |指定左側滑動區域寬度，組織為`px` | number \| string | `0` |
| rightWidth |指定右側滑動區域寬度，組織為`px` | number \| string | `0` |
| leftAction |左側滑動區域的內容| ReactNode | - |
| rightAction |右側滑動區域的內容| ReactNode | - |
| beforeClose |關閉前的回呼函數，返回`position` | string | `left` |
| disabled |是否禁用滑動| boolean | `false` |

### Events

| 事件名                 | 說明           |回檔參數|
|---------------------|--------------|--------------|
| onOpen              | 打開儲存格側邊欄     | `name: string, position: 'left' \| 'right'` |
| onClose             | 收起儲存格側邊欄     | `name: string, position: 'left' \| 'right'` |
| onActionClick       | 點擊左側或者右側時觸發  | `event: Event, position: 'left' \| 'right'` |
| onTouchStart`v1.4.7` | onTouchStart | `event: Event`      |
| onTouchMove`v1.4.7`         | onTouchMove  | `event: Event`     |
| onTouchEnd`v1.4.7`          | onTouchEnd   | `event: Event`     |
