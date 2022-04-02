# Navbar 头部导航

### 介绍 


提供导航功能。

### 安装

```ts
import { NavBar } from '@nutui/nutui-react';
```

### 代码示例

### 基本用法

:::demo
```tsx
import  React from "react";
import { NavBar } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <NavBar
      title="订单详情"
      icon="share"
      leftShow
      onClickTitle={(e) => alert('标题')}
      onClickBack={(e) => alert('返回')}
      onClickIcon={(e) => alert('icon')}
     />
    </>
  );
};  
export default App;

```
:::

:::demo
```tsx
import  React from "react";
import { NavBar } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <NavBar
      title="浏览记录"
      desc="清空"
      leftShow
      onClickTitle={(e) => alert('标题')}
      onClickBack={(e) => alert('返回')}
      onClickClear={(e) => alert('清空')}
     />
    </>
  );
};  
export default App;

```
:::

:::demo
```tsx
import  React from "react";
import { NavBar } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <NavBar
      title="购物车"
      icon="more"
      desc="编辑"
      titIcon="locationg3"
      onClickTitle={(e) => alert('标题')}
      onClickBack={(e) => alert('返回')}
      onClickClear={(e) => alert('编辑')}
      onClickIcon={(e) => alert('icon')}
     />
    </>
  );
};  
export default App;

```
:::

### Prop  

| 字段            | 说明                                                                                           | 类型    | 默认值  |
|-----------------|------------------------------------------------------------------------------------------------|---------|---------|
| title           | 标题名称                                                                                       | String  | -       |
| desc            | 右侧描述                                                                                       | String  | -       |
| leftShow        | 是否展示左侧箭头                                                                              | Boolean | false   |
| icon            | 左侧 [图标名称](#/icon) 或图片链接                                                             | String  | -       |
| titIcon         | 标题带icon                                                         | String  | -       |                                          

### Event
| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| onClickTitle | 点击页面标题事件 | event:Event |
| onClickClear | 点击右侧文案事件 | event:Event |
| onClickBack | 点击返回上一页事件 | event:Event |
| onClickIcon | 点击右侧icon事件 | event:Event |