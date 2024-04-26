# Drag 拖拽

## 介紹

實現可拖拽的任意元素

## 安裝

```tsx
import { Drag } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react';

const App = () => {
  return (
    <Drag>
        <div className="touch-dom">觸摸移動</div>
    </Drag>
 );
};
export default App;
```

:::

### 限製拖拽方向

:::demo

```tsx
import  React from "react";
import { Drag, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Drag direction="x" style={{ top: '200px', left: '8px' }}>
        <Button type="primary">只能X軸拖拽</Button>
      </Drag>
      <Drag direction="y" style={{ top: '200px', right: '50px' }}>
        <Button type="primary">只能Y軸拖拽</Button>
      </Drag>
    </>
 );
};
export default App;
```

:::

### 自動吸邊

:::demo

```tsx
import  React from "react";
import { Drag } from '@nutui/nutui-react';

const App = () => {
  return (
    <Drag direction="x" attract>
      <div className="touch-dom">按鈕</div>
    </Drag>
 );
};
export default App;
```

:::

### 限製拖拽邊界

:::demo

```tsx
import  React from "react";
import { Drag,Button } from '@nutui/nutui-react';

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
        <Button type="primary">限製拖拽邊界</Button>
      </Drag>
    </>
   );
};
export default App;
```

:::

## Drag

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| attract | 是否開啟自動吸邊 | `boolean` | `false` |
| direction | 拖拽元素的拖拽方向限製 | `x` \| `y` \| `all` | `all` |
| boundary | 拖拽元素的拖拽邊界 | `Object` | `{top: 0, left: 0, right: 0, bottom: 0}` |