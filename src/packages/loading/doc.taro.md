#  Loading 加载中

### 介绍

加载图标，用于显示正在加载中的状态

### 安装

```tsx
import { Loading } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react-taro';

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

### 自定义颜色

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react-taro';

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

### 自定义大小

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react-taro';

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

### 带文字

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Loading>加载中</Loading>
    </Cell>
  );
};
export default App;
```

:::

### 带文字(竖向排列)

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Loading vertical>加载中</Loading>
    </Cell>
  );
};
export default App;
```

:::

### 自定义文字颜色和大小

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Loading textColor='#396aca'>加载中</Loading>
      <Loading textSize='20'>加载中</Loading>
    </Cell>
  );
};
export default App;
```

:::

### 自定义图标

:::demo

```jsx
import  React from "react";
import { Loading, Cell } from '@nutui/nutui-react-taro';
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

### 与遮罩层结合

:::demo

```jsx
import React, { useState } from 'react'
import { Loading, Cell, Button, Overlay } from '@nutui/nutui-react-taro';

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
        <Button type="success" onClick={() => showOverlay()}>遮罩层loading(两秒后关闭)</Button>
      </Cell>
      <Overlay visible={visible}>
        <div className="wrapper" style={WrapperStyle}>
          <Loading vertical>加载中</Loading>
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

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type         | loading图标的样式                    | circular \| spinner | `circular`          |
| color        | loading图标的颜色                    | String              | `#9EA9AF`           |
| size         | loading图标的大小                    | String \| Number    | `32`                |
| textColor    | 文字的颜色                           | String              | `#9EA9AF`           |
| textSize     | 文字的大小                           | String \| Number    | `14`                |
| vertical     | loading图标和文字是否竖向排列        |  Boolean            | `false`
| icon         | 自定义loading的图标                  | JSX.Element         |  `-`
