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
import { HeartFill1 } from '@nutui/icons-react-taro';

const App = () => {
  return ( 
    <>   
      <Rate
        modelValue="3"
        checkedIcon={<HeartFill1 color="red" />}
        uncheckedIcon={<HeartFill1 color="yellow" />}
      />
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
    <Rate modelValue="3" readOnly />
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

## API

## Prop

| 字段                     | 说明                                      | 类型    | 默认值      |
|------------------------|-------------------------------------------|---------|-------------|
| modelValue             | 当前 star 数不能大于count | number | -           |
| count                  | star 总数                                 | number | `5`           |
| min  | 最少选中star数量                           | number | `0`           |
| uncheckedIcon | 使用图标(未选中) | ReactNode  | `star-n`      |
| checkedIcon            | 使用图标(选中) | ReactNode  | `star-n` |
| allowHalf              | 是否半星                                  | boolean | `false`       |
| readOnly               | 是否只读                                  | boolean | `false`       |
| disabled               | 是否禁用                                  | boolean | `false`       |
| onChange | 当前 star 数修改时触发 | (val: number) => void | - |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-rate-item-spacing | `14px` |
| --nutui-rate-icon-color | `$primary-color` |
| --nutui-rate-icon-void-color | `$disable-color` |
