#  Switch 開關

### 介紹

用來打開或關閉選項。

### 安裝

```ts
// react
import { Switch } from '@nutui/nutui-react';
// taro
import { Switch } from '@nutui/nutui-react-taro';
```

## 代碼演示

### 基礎用法

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


### 禁用狀態

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
    alert(`觸發了onChange事件，開關狀態：${value}`)
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
### 異步控制

:::demo
```tsx
import  React, { useState } from "react";
import { Switch } from '@nutui/nutui-react';

const App = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  
  const onChangeAsync = (value: boolean, event: Event) => {
    alert(`2秒後異步觸發 ${value}`)
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
### 自定義顏色

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
    <Switch activeText="開" inactiveText="關" />
    </>
  );
};  
export default App;

```
:::




## API

### Props

| 參數           | 說明             | 類型    | 默認值                |
|----------------|------------------|---------|-----------------------|
| checked        | 開關狀態         | Boolean | `false`               |
| disable        | 禁用狀態         | Boolean | `false`               |
| activeColor   | 打開時的背景顏色 | String  | `#fa2c19`    |
| inactiveColor | 關閉時的背景顏色 | String  | `#ebebeb` |
| activeText    | 打開時文字描述   | String  | -                     |
| inactiveText  | 關閉時文字描述   | String  | -                     |
| isAsync  | 開關狀態是否異步修改   | Boolean  | `false`                     |


### Events

| 事件名 | 說明           | 回調參數                      |
|--------|----------------|-------------------------------|
| onChange `v1.3.8`| 切換開關時觸發 | (value: boolean,event: Event) |
