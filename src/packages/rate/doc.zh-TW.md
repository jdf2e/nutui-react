#  Rate 評分

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
    <>   
    <Rate modelValue={3} />
    </>
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
    <>   
    <Rate allowHalf modelValue="3.5" />
    </>
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
    <Rate checkedIcon={<HeartFill1 />} modelValue="3" />
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
    <>   
    <Rate count="6" modelValue="3" />
    </>
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
    <>   
    <Rate count="5" modelValue="2" minimizeValue="3"/>
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
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Rate activeColor="#FFC800" modelValue="3" />
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
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Rate disabled modelValue="3" />
    </>
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
    <>   
    <Rate modelValue="3" readonly />
    </>
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
    <>   
    <Rate modelValue="3" onChange={onChange} />
    </>
  );
};  
export default App;

```
:::
### 自定義尺寸 35px  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react';

const App = () => {
  return ( 
    <>   
    <Rate modelValue="3" iconSize="35" />
    </>
  );
};  
export default App;

```
:::

## API

## Prop

| 字段           | 說明                                      | 類型    | 默認值      |
|----------------|-------------------------------------------|---------|-------------|
| modelValue        | 當前 star 數不能大於count | number | -           |
| count          | star 總數                                 | number | `5`           |
| minimizeValue  | 最少選中star數量                          | number | `0`           |
| iconSize      | star 大小                                 | number | `18`          |
| activeColor   | 圖標選中顏色                              | string  | `#fa200c`     |
| voidColor     | 圖標未選中顏色                          | string  | `#ccc`        |
| uncheckedIcon `v2.0.0 废弃` | 使用圖標(未選中) | string  | `star-n`      |
| checkedIcon            | 使用圖標(選中)  | `ReactNode`  | - |
| allowHalf     | 是否半星                                  | boolean | `false`       |
| readonly       | 是否只讀                                 | boolean | `false`       |
| disabled       | 是否禁用                                  | boolean | `false`       |
| spacing        | 間距                                      | number | `20`          |

## Event
| 字段   | 說明                       | 回調參數 |
|--------|----------------------------|----------|
| onChange `v1.3.3`| 當前分值修改時時觸發的事件 | 當前值   |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-rate-icon-color | `$primary-color` |
| --nutui-rate-icon-void-color | `$disable-color` |
