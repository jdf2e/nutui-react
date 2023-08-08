# Overlay 遮罩层

## 介绍

创建一个遮罩层，通常用于阻止用户进行其他操作

## 安装

```tsx
import { OverLay } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState } from "react";
import { Button, Overlay } from '@nutui/nutui-react-taro';

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
      <Overlay
        visible={visible}
        onClick={onClose}
        style={{'--nutui-overlay-zIndex': 2020,}}
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
import { Button, Overlay } from '@nutui/nutui-react-taro';

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
        style={{
          backgroundColor: 'rgba(0, 0, 0, .2)',
          '--nutui-overlay-zIndex': 2000,
        }}
      />
    </>
  )
}
export default App;
```

:::

### 设置动画时间

:::demo

```tsx
import React, { useState } from "react";
import { Button, Overlay } from '@nutui/nutui-react-taro';

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
        设置动画时间
      </Button>
      <Overlay
        visible={visible}
        onClick={onClose}
        style={{ '--nutui-overlay-animation-duration': '2.5s' }}
        duration={2500}
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

### 不锁定背景滚动

:::demo

```tsx
import React, { useState } from "react";
import { Button, Overlay } from '@nutui/nutui-react-taro';

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
        不锁定背景滚动
      </Button>
      <Overlay visible={visible} onClick={onClose} lockScroll={false} />
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
import { Button, Overlay } from '@nutui/nutui-react-taro';

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
  const [visible, setVisible] = useState(false)
  const handleToggleShow2 = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Button type="success" onClick={handleToggleShow2}>
        嵌套内容
      </Button>
      <Overlay visible={visible} onClick={onClose}>
        <div className="wrapper" style={WrapperStyle}>
          <div className="content" style={ContentStyle}>这里是正文</div>
        </div>
      </Overlay>
    </>
  )
}
export default App;
```

:::

### 点击遮罩不关闭

:::demo

```tsx
import React, { useState } from "react";
import { Button, Overlay } from '@nutui/nutui-react-taro';

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
        点击遮罩不关闭
      </Button>
      <Overlay visible={visible} closeOnOverlayClick={false}>
        <div className="wrapper">
          <div className="content" onClick={onClose}>这里是正文</div>
        </div>
      </Overlay>
    </>
  )
}
export default App;
```

:::

## Overlay

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 当前组件是否显示 | `boolean` | `false` |
| duration | 动画时长，单位毫秒 | `number` | `300` |
| lockScroll | 背景是否锁定 | `boolean` | `true` |
| closeOnOverlayClick | 是否点击遮罩关闭 | `boolean` | `true` |
| onClick | 点击时触发 | `event: Event` | `-` |
| afterClose | 完全关闭后触发 | `() => void` | `-` |
| afterShow | 完全展示后触发 | `() => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-overlay-bg-color | 遮罩层背景颜色 | `$gray7` |
| \--nutui-overlay-zIndex | overlay 的 z-index | `1000` |
| \--nutui-overlay-content-bg-color | 遮罩层嵌套内容背景颜色 | `$gray6` |
| \--nutui-overlay-content-color | 遮罩层嵌套内容字体颜色 | `$gray1` |
| \--nutui-overlay-animation-duration| 遮罩层动画延时的时长 | `0.3s` |