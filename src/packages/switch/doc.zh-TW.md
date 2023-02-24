#  Switch 開關

### 介紹

用來打開或關閉選項。

### 安裝

```ts
// react
import { Switch } from '@nutui/nutui-react';

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


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-switch-close-bg-color | ` #ebebeb` |
| --nutui-switch-close--line-bg-color | `  #f0f0f0` |
| --nutui-switch-width | ` 36px` |
| --nutui-switch-height | ` 21px` |
| --nutui-switch-line-height | ` 21px` |
| --nutui-switch-border-radius | ` 21px` |
| --nutui-switch-inside-width | ` 13px` |
| --nutui-switch-inside-height | ` 13px` |
| --nutui-switch-inside-open-transform | ` translateX(146%)` |
| --nutui-switch-inside-close-transform | ` translateX(30%)` |