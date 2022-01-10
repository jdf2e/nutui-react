# Overlay 遮罩层

### 介绍

创建一个遮罩层，通常用于阻止用户进行其他操作

### 安装


``` ts
import { OverLay } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

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
        显示遮罩层
      </Button>
      <Overlay visible={visible} onClick={onClose}></Overlay>
    </>
  )
}
export default App;
```

### 嵌套内容

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
        嵌套内容
      </Button>
      <Overlay visible={visible2} onClick={onClose2}>
        <div className="wrapper" style={WrapperStyle}>
          <div className="content" style={ContentStyle}>这里是正文</div>
        </div>
      </Overlay>
    </>
  )
}
export default App;
```

## API

### Props

| 参数                   | 说明             | 类型           | 默认值 |
| ---------------------- | ---------------- | -------------- | ------ |
| visible                   | 当前组件是否显示 | Boolean        | `false`  |
| zIndex                | 遮罩层级         | Number | 2000   |
| duration               | 动画时长，单位秒 | Number | 0.3    |
| overlayClass          | 自定义遮罩类名   | String         | -      |
| overlayStyle          | 自定义遮罩样式   | CSSProperties  | -      |
| lockScroll          | 背景是否锁定   | Boolean  | `false`     |
| closeOnClickOverlay | 是否点击遮罩关闭 | Boolean        | `true`   |

### Events

| 事件名 | 说明       | 回调参数     |
| ------ | ---------- | ------------ |
| onClick  | 点击时触发 | event: Event |
