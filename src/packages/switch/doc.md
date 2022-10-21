#  Switch 开关

### 介绍

用来打开或关闭选项。

### 安装

```ts
import { Switch } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch checked />
    </>
  );
};  
export default App;

```
:::


### 禁用状态

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch checked disable />
    </>
  );
};  
export default App;

```
:::

### onChange事件

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  const onChange = (value: boolean, event: Event) => {
    alert(`触发了onChange事件，开关状态：${value}`)
  }
  return ( 
    <>   
    <Switch onChange={(value, event) => onChange(value, event)} />
    </>
  );
};  
export default App;

```
:::
### 异步控制

:::demo
```tsx
import  React, { useState } from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  
  const onChangeAsync = (value: boolean, event: Event) => {
    alert(`2秒后异步触发 ${value}`)
    setTimeout(() => {
      setCheckedAsync(value)
    }, 2000)
  }
  return ( 
    <>   
    <Switch
      checked={checkedAsync}
      isAsync
      onChange={(value, event) => onChangeAsync(value, event)}
     />
    </>
  );
};  
export default App;

```
:::
### 自定义颜色

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch activeColor="blue" />
    </>
  );
};  
export default App;

```
:::
### 支持文字

:::demo
```tsx
import  React from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Switch activeText="开" inactiveText="关" />
    </>
  );
};  
export default App;

```
:::




## API

### Props

| 参数           | 说明             | 类型    | 默认值                |
|----------------|------------------|---------|-----------------------|
| checked        | 开关状态         | Boolean | `false`               |
| disable        | 禁用状态         | Boolean | `false`               |
| activeColor   | 打开时的背景颜色 | String  | `#fa2c19`    |
| inactiveColor | 关闭时的背景颜色 | String  | `#ebebeb` |
| activeText    | 打开时文字描述   | String  | -                     |
| inactiveText  | 关闭时文字描述   | String  | -                     |
| isAsync  | 开关状态是否异步修改   | Boolean  | `false`                     |


### Events

| 事件名 | 说明           | 回调参数                      |
|--------|----------------|-------------------------------|
| onChange `v1.3.8` | 切换开关时触发 | (value: boolean,event: Event) |
