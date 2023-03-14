#  Rate 

### introduce

Use for quick rating actions, or to showcase reviews.

### Install

```ts
// react
import { Rate } from '@nutui/nutui-react';
```

## Code demonstration

### Basic usage

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
        
### half star  

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
### customize icon   

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
### custom quantity  

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
### Select the minimum quantity (support half star)  

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
### custom color 

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
### disabled state  

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
### readonly state  

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
### bind event  

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
### custom iconSize 35px  

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

| field           | explain                                 | type    | default    |
|----------------|-------------------------------------------|---------|-------------|
| modelValue     | The current number of stars <= count     | number   | -           |
| count          | total number of stars                    | number | `5`           |
| minimizeValue  | At least the number of STAR              | number | `0`           |
| iconSize      | size of star                              | number | `18`          |
| activeColor   | Icon selection color                      | string  | `#fa200c`     |
| voidColor     | Icon unselected color                    | string  | `#ccc`        |
| uncheckedIcon `v2.0.0 Abandon` | Use icon (unchecked) | string  | `star-n`      |
| checkedIcon   | Use icon (checked) | `ReactNode`  | - |
| allowHalf     | Half star or not                         | boolean | `false`       |
| readonly       |Read only                              | boolean | `false`       |
| disabled       | Disable or not                          | boolean | `false`       |
| spacing        | spacing                                  | number | `20`          |

## Event
| field   | explain                                          | Callback Arguments  |
|--------|----------------------------|----------|
| onChange `v1.3.3` | Event triggered when the current score is modified | Current value   |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-rate-icon-color | `$primary-color` |
| --nutui-rate-icon-void-color | `$disable-color` |
