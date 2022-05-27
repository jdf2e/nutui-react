# Overlay 遮罩層

### 介紹

創建一個遮罩層，通常用於阻止用戶進行其他操作

### 安裝


``` ts
import { OverLay } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo
```tsx
import React, { useState } from "react";
import { Button, Overlay } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Button type="primary" onClick={handleToggleShow}>
        顯示遮罩層
      </Button>
      <Overlay visible={visible} onClick={onClose} />
    </>
  )
}
export default App;
```
:::

### 嵌套内容

:::demo
```tsx
import React, { useState } from "react";
import { Button, Overlay } from '@nutui/nutui-react';

const WrapperStyle = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center'
}
const ContentStyle = {
  display: 'flex',
  width: '150px',
  height: '150px',
  background: '#fff',
  borderRadius: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'red'
}
const App = () => {
  const [visible2, setVisible2] = useState(false)
  const handleToggleShow2 = () => {
    setVisible2(true)
  }
  const onClose2 = () => {
    setVisible2(false)
  }
  return (
    <>
      <Button type="success" onClick={handleToggleShow2}>
        嵌套內容
      </Button>
      <Overlay visible={visible2} onClick={onClose2}>
        <div className="wrapper" style={WrapperStyle}>
          <div className="content" style={ContentStyle}>這裡是正文</div>
        </div>
      </Overlay>
    </>
  )
}
export default App;
```
:::

## API

### Props

| 參數                   | 說明             | 類型           | 預設值 |
| ---------------------- | ---------------- | -------------- | ------ |
| visible                   | 當前元件是否顯示 | Boolean        | `false`  |
| zIndex                | 遮罩層級         | Number | 2000   |
| duration               | 動畫時長，單位秒 | Number | 0.3    |
| overlayClass          | 自定義遮罩類名   | String         | -      |
| overlayStyle          | 自定義遮罩樣式   | CSSProperties  | -      |
| lockScroll          | 背景是否鎖定   | Boolean  | `false`     |
| closeOnClickOverlay | 是否點擊遮罩關閉 | Boolean        | `true`   |

### Events

| 事件名 | 說明       | 回調參數     |
| ------ | ---------- | ------------ |
| onClick  | 點擊時觸發 | event: Event |
