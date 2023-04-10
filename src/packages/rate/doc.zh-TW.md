# Rate 評分

### 介紹

用於快速的評級操作，或對評價進行展示。

### 安裝

```ts
// react
import { Rate } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate defaultValue={3} />
  );
};  
export default App;

```
:::

### 受控方式

:::demo

```tsx
import React, { useState } from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  const [state, setState] = useState(2);
  return (
    <Rate value={score} onChange={(value) => setScore(value)} />
  );
};  
export default App;
```

:::

### 半星  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate allowHalf defaultValue={3.5} />
  );
};  
export default App;

```
:::
### 自定義 icon   

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';
import { HeartFill1 } from '@nutui/icons-react';

const App = () => {
  return (
    <Rate checkedIcon={<HeartFill1 />} defaultValue={3} />
  );
};  
export default App;

```
:::
### 自定義數量 

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate count="6" defaultValue={3} />
  );
};  
export default App;

```
:::
### 最少選中數量（支持半星）  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate count={5} defaultValue={2} min={3}/>
  );
};  
export default App;

```
:::
### 自定義顏色

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';
import { HeartFill1 } from '@nutui/icons-react';

const App = () => {
  return (
    <Rate
      defaultValue={3}
      checkedIcon={<HeartFill1 color="red" />}
      uncheckedIcon={<HeartFill1 color="yellow" />}
    />
  );
};  
export default App;

```
:::
### 禁用狀態  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate disabled defaultValue={3} />
  );
};  
export default App;

```
:::
### 只讀狀態  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return (
    <Rate defaultValue={3} readOnly />
  );
};  
export default App;

```
:::
### 綁定事件

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  const onChange = (val: any) => {
    alert(val)
  }
  return (
    <Rate defaultValue={3} onChange={onChange} />
  );
};  
export default App;

```

## API

## Prop

| 字段           | 說明                                      | 類型    | 默認值      |
|----------------|-------------------------------------------|---------|-------------|
| defaultValue             | 非受控的 star 默認值 | number | `0`           |
| value             | 受控的 star 數值 | number | `0`           |
| count          | star 總數                                 | number | `5`           |
| min  | 最少選中star數量                          | number | `0`           |
| uncheckedIcon | 使用圖標(未選中) | ReactNode  | `star-n`      |
| checkedIcon            | 使用圖標(選中)  | ReactNode  | `star-n` |
| allowHalf     | 是否半星                                  | boolean | `false`       |
| readOnly       | 是否只讀                                 | boolean | `false`       |
| disabled       | 是否禁用                                  | boolean | `false`       |
| onChange | 当前 star 数修改时触发 | (value: number) => void | - |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| --nutui-rate-item-margin | 間距 | `14px` |
| --nutui-rate-icon-color | icon 激活顏色 | `$primary-color` |
| --nutui-rate-icon-void-color | icon 未激活顏色 | `$disable-color` |
