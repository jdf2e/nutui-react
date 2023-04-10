#  Rate 评分

### 介绍

用于快速的评级操作，或对评价进行展示。

### 安装

```ts
import { Rate } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-taro';

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
import { Rate } from '@nutui/nutui-react-taro';

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
### 自定义 icon   

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-taro';
import { HeartFill1 } from '@nutui/icons-react-taro';

const App = () => {
  return ( 
    <Rate checkedIcon={<HeartFill1 />} modelValue="3" />
  );
};  
export default App;

```
:::
### 自定义数量  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-taro';

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
### 最少选中数量（支持半星）  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-taro';

const App = () => {
  return ( 
    <>   
    <Rate count="5" modelValue="2" min="3"/>
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
import { Rate } from '@nutui/nutui-react-taro';

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
### 禁用状态  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-taro';

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
### 只读状态  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-taro';

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
### 绑定事件  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-taro';

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
### 自定义尺寸 35px  

:::demo
```tsx
import  React from "react";
import { Rate } from '@nutui/nutui-react-taro';

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

| 字段                     | 说明                                      | 类型    | 默认值      |
|------------------------|-------------------------------------------|---------|-------------|
| modelValue             | 当前 star 数不能大于count | number | -           |
| count                  | star 总数                                 | number | `5`           |
| min  | 最少选中star数量                           | number | `0`           |
| iconSize               | star 大小                                 | number | `18`          |
| activeColor            | 图标选中颜色                              | string  | `#fa200c`     |
| voidColor              | 图标未选中颜色                            | string  | `#ccc`        |
| uncheckedIcon `v2.0.0 废弃` | 使用图标(未选中) | string  | `star-n`      |
| checkedIcon            | 使用图标(选中) | `ReactNode`  | - |
| allowHalf              | 是否半星                                  | boolean | `false`       |
| readonly               | 是否只读                                  | boolean | `false`       |
| disabled               | 是否禁用                                  | boolean | `false`       |
| spacing                | 间距                                      | number | `20`          |

## Event
| 字段   | 说明                       | 回调参数 |
|--------|----------------------------|----------|
| onChange `v1.3.3` | 当前分值修改时时触发的事件 | 当前值   |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-rate-icon-color | `$primary-color` |
| --nutui-rate-icon-void-color | `$disable-color` |
