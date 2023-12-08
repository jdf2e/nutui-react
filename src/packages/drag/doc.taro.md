# Drag 拖拽

## 介绍

实现可拖拽的任意元素

## 安装

```tsx
import { Drag } from '@nutui/nutui-react-taro'
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Drag>
        <div className="touch-dom">触摸移动</div>
    </Drag>
 );
};
export default App;
```

:::

### 限制拖拽方向

:::demo

```tsx
import  React from "react";
import { Drag, Button } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
    <Drag direction="x" style={{ top: '200px', left: '8px' }}>
        <Button type="primary">只能X轴拖拽</Button>
      </Drag>
      <Drag direction="y" style={{ top: '200px', right: '50px' }}>
        <Button type="primary">只能Y轴拖拽</Button>
      </Drag>
    </>
 );
};
export default App;
```

:::

### 自动吸边

:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Drag direction="x" attract>
      <div className="touch-dom" >按钮</div>
    </Drag>
 );
};
export default App;
```

:::

### 限制拖拽边界

:::demo

```tsx
import  React from "react";
import { Drag, Button } from '@nutui/nutui-react-taro';

const App = () => {
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
        <Button type="primary">限制拖拽边界</Button>
      </Drag>
    </>
   );
};
export default App;
```

:::

## Drag

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| attract | 是否开启自动吸边 | `boolean` | `false` |
| direction | 拖拽元素的拖拽方向限制 | `x` \| `y` \| `all` | `all` |
| boundary | 拖拽元素的拖拽边界 | `Object` | `{top: 0, left: 0, right: 0, bottom: 0}` |