# Overlay 遮罩層

### 介紹

創建一個遮罩層，通常用於阻止用戶進行其他操作

### 安裝


``` ts
// react
import { OverLay } from '@nutui/nutui-react';
```

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
      <Overlay
        visible={visible}
        onClick={onClose}
        zIndex={2020}
        lockScroll
        afterShow={() => {
          console.log('afterShow')
        }}
      />
    </>
  )
}
export default App;
```
:::

### 遮罩样式

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
        遮罩样式
      </Button>
      <Overlay
        visible={visible}
        onClick={onClose}
        zIndex={2000}
        style={{
          backgroundColor: 'rgba(0, 0, 0, .2)',
        }}
      />
    </>
  )
}
export default App;
```
:::

### 設置動畫時間

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
        設置動畫時間
      </Button>
      <Overlay
        visible={visible}
        onClick={onClose}
        duration={2.5}
        afterShow={() => {
          console.log('afterShow')
        }}
        afterClose={() => {
          console.log('afterClose')
        }}
      />
    </>
  )
}
export default App;
```
:::

### 不鎖定背景滾動

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
        不鎖定背景滾動
      </Button>
      <Overlay visible={visible} onClick={onClose} lockScroll={false} />
    </>
  )
}
export default App;
```
:::

### 嵌套內容

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

### 點擊遮罩不關閉

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
        點擊遮罩不關閉
      </Button>
      <Overlay visible={visible} closeOnOverlayClick={false}>
        <div className="wrapper">
          <div className="content" onClick={onClose}>這裡是正文</div>
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
| visible                   | 當前元件是否顯示 | boolean        | `false`  |
| zIndex                | 遮罩層級         | number | `2000`   |
| duration               | 動畫時長，單位秒 | number | `0.3`    |
| lockScroll          | 背景是否鎖定   | boolean  | `true`     |
| closeOnOverlayClick | 是否點擊遮罩關閉 | boolean        | `true`   |
| onClick  | 點擊時觸發 | `event: Event` |
| afterClose | 完全關閉後觸發 | () => void        | `-`   |
| afterShow | 完全展示後觸發 | () => void        | `-`   |



## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| --nutui-overlay-bg-color | 遮罩層背景顏色 | `$gray7` |
| --nutui-overlay-content-bg-color | 遮罩層嵌套內容背景顏色 |`$gray6` |
| --nutui-overlay-content-color | 遮罩層嵌套內容字體顏色 | `$gray1` |

