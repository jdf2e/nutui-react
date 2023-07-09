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
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading type='circular' color='#fa2c19'/>
      <Loading type='spinner' color='#396aca'/>
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
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading type='circular' size='20'/>
      <Loading type='spinner' size={40}/>
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
      <Loading vertical>加載中</Loading>
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
import { Loading, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Loading textColor='#396aca'>加載中</Loading>
      <Loading textSize='20'>加載中</Loading>
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
      <Loading vertical icon={<Category width='30' height='30' color='red'/>}/>
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
          <Loading vertical>加載中</Loading>
        </div>
      </Overlay>   
    </> 
  );
};
export default App;
```

:::

## API

### Props

| 參數         | 說明                             | 類型   | 默認值           |
|--------------|----------------------------------|--------|------------------|
| type         | loading圖標的樣式                    | circular \| spinner | `circular`          |
| color        | loading圖標的顏色                    | String              | `#9EA9AF`           |
| size         | loading圖標的大小                    | String \| Number    | `32`                |
| textColor    | 文字的顏色                           | String              | `#9EA9AF`           |
| textSize     | 文字的大小                           | String \| Number    | `14`                |
| vertical     | loading圖標和文字是否豎向排列        |  Boolean            | `false`
| icon         | 自定義loading的圖標                  | JSX.Element         |  `-`
