#  Loading 加載中

### 介紹

加載圖標，用於顯示正在加載中的狀態

### 安裝

```tsx
import { Loading } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading type='circular'/>
      <Loading type='spinner'/>
    </Cell>
  );
};
export default App;
```

:::

### 自定義顏色

:::demo

```jsx
import  React from "react";
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingIconColor: '#fa2c19' }}>
        <Loading type='circular' />
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingIconColor: '#396aca' }}>
        <Loading type="spinner" />
      </ConfigProvider>      
    </Cell>
  );
};
export default App;
```

:::

### 自定義大小

:::demo

```jsx
import  React from "react";
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingIconSize: '20px' }}>
        <Loading type="circular" />
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingIconSize: '40px' }}>
        <Loading type="spinner" />
      </ConfigProvider>
    </Cell>
  );
};
export default App;
```

:::

### 帶文字

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading>加載中</Loading>
    </Cell>
  );
};
export default App;
```

:::

### 帶文字(豎向排列)

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading direction="vertical">加載中</Loading>
    </Cell>
  );
};
export default App;
```

:::

### 自定義文字顏色和大小

:::demo

```jsx
import  React from "react";
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingTextColor: '#396aca' }}>
        <Loading>加载中</Loading>
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingTextSize: '20px' }}>
        <Loading>加载中</Loading>
      </ConfigProvider>
    </Cell>
  );
};
export default App;
```

:::

### 自定義圖標

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react';
import { Category } from '@nutui/icons-react'

const App = () => {
  return (
    <Cell>
      <Loading direction="vertical" icon={<Category width='30' height='30' color='red'/>}/>
    </Cell>
  );
};
export default App;
```

:::

### 與遮罩層結合

:::demo

```jsx
import React, { useState } from 'react'
import { Loading, Cell, Button, Overlay } from '@nutui/nutui-react';

const App = () => {

  const [visible, setVisible] = useState(false)

  const WrapperStyle = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }

  function showOverlay() {
    setVisible(true);
    setTimeout(()=>{
      setVisible(false);
    }, 2000)
  }  

  return (
    <>
      <Cell>
        <Button type="success" onClick={() => showOverlay()}>遮罩層loading(兩秒後關閉)</Button>
      </Cell>
      <Overlay visible={visible}>
        <div className="wrapper" style={WrapperStyle}>
          <Loading direction="vertical">加載中</Loading>
        </div>
      </Overlay>   
    </> 
  );
};
export default App;
```

:::

## Loading

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type         | loading图标的样式                    | circular \| spinner | `circular`          |
| direction    | loading图标和文字的排列方式           | horizontal \| vertical | `horizontal`     |     
| icon         | 自定义loading的图标                  | JSX.Element         |  `-` |
