# Swipe組件

## 介紹

常用於單元格左右滑刪除等手勢操作

## 安裝

```tsx
import { Swipe } from '@nutui/nutui-react';
```

## 代碼演示

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
          刪除
        </Button>
      }
    >
      <Cell title="左滑刪除" radius={0} />
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
          刪除
        </Button>
      }
    >
      <Cell title='點擊下方按鈕打開或關閉' radius={0} />
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
          刪除
        </Button>
      }
      onActionClick={() => {
        closeRef.current.close()
      }}
    >
      <Cell title='點擊右側按鈕關閉' radius={0} />
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
          刪除
        </Button>
      }
      disabled
    >
      <Cell title="禁用滑動" radius={0} />
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
    Toast.show('點擊');
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
            刪除
          </Button>
          <Button shape="square" type="info">
            收藏
          </Button>
        </>
      }
      onActionClick={handleChange}
      onOpen={() => Toast.show('打開')}
      onClose={() => Toast.show('關閉')}
    >
      <Cell title="事件" />
    </Swipe>
  </>
}
export default App;
```

:::

### 異步控制

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
      content: postion === 'left' ? '確定選擇嗎？' : '確定刪除嗎？',
      onConfirm: () => {
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
            刪除
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

## Swipe

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| name | 標識符，可以在事件參數中獲取到 | `number` \| `string` | `-` |
| leftAction | 左側滑動區域的內容 | `ReactNode` | `-` |
| rightAction | 右側滑動區域的內容 | `ReactNode` | `-` |
| beforeClose | 關閉前的回調函數，返回滑動區域所在方嚮 `position` | `(position: 'left \| 'right') => void` | `-` |
| disabled | 是否禁用滑動 | `boolean` | `false` |
| onOpen | 打開單元格側邊欄 | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-` |
| onClose | 收起單元格側邊欄 | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-` |
| onActionClick | 點擊左側或者右側時觸發 | `(event: Event, position: 'left' \| 'right') => void` | `-` |
| onTouchStart | onTouchStart | `(event: Event) => void` | `-` |
| onTouchMove | onTouchMove | `(event: Event) => void` | `-` |
| onTouchEnd | onTouchEnd | `(event: Event) => void` | `-` |

### Ref

| 屬性 | 說明 | 回調參數 |
| --- | --- | --- |
| open | 打開單元格側邊欄，`side`參數默認為`right` | `(side?: 'left' \| 'right') => void` |
| close | 收起單元格側邊欄 | `() => void` |