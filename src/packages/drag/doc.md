# Drag 拖拽

### 介绍

实现可拖拽的任意元素

### 安装

```javascript
import { Drag } from '@nutui/nutui-react'
```

## 代码演示



## 基本用法

:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react';

const App = () => {
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  return (
    <Drag>
        <div className="touch-dom" style={btnStyle}>触摸移动</div>
    </Drag>
 );
};
export default App;
```

:::

## 限制拖拽方向

:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react';

const App = () => {
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  return (
    <>
    <Drag direction="x" style={{ top: '200px', left: '8px' }}>
        <span style={btnStyle}>只能X轴拖拽</span>
      </Drag>
      <Drag direction="y" style={{ top: '200px', right: '50px' }}>
        <span style={btnStyle}>只能Y轴拖拽</span>
      </Drag>
    </>
 );
};
export default App;
```

:::

## 自动吸边

:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react';

const App = () => {
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  return (
    <Drag direction="x" attract>
      <div className="touch-dom" style={btnStyle}>按钮</div>
    </Drag>
 );
};
export default App;
```

:::

## 限制拖拽边界
:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react';

const App = () => {
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  
    const right = () => {
    return document.documentElement.clientWidth - 300 - 9
    }
    const bottom = () => {
        return document.documentElement.clientHeight - 202
    }
    return (
    <>
    <div
        className="drag-boundary"
        style={{
          position: 'absolute',
          top: '0px',
          left: '8px',
          width: '300px',
          height: '200px',
          border: '1px solid red',
        }}
       />
      <Drag
        boundary={{ top: 1, left: 9, bottom: bottom(), right: right() }}
        style={{ top: '40px', left: '50px' }}
      >
        <span style={btnStyle}>限制拖拽边界</span>
      </Drag>
    </>
   );
};
export default App;
```

:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --------------- | ----------------------------- | ------- | ------ |
| attract | 是否开启自动吸边 | Boolean | false |
| direction | 拖拽元素的拖拽方向限制，x、y、all三选一 | String |'all' |
| boundary | 拖拽元素的拖拽边界 | Object | {top: 0,left: 0,right: 0,bottom: 0} |
