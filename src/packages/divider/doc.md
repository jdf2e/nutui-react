# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 安装

```js
import { Divider } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

默认渲染一条水平分割线。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Divider />
    </>
  );
};
export default App;
```
:::


### 展示文本

通过插槽在可以分割线中间插入内容。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
        <Divider>文本</Divider>
    </>
  );
};
export default App;
```
:::


### 内容位置

通过 contentPosition 指定内容所在位置。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
        <Divider contentPosition="left">文本</Divider>
        <Divider contentPosition="right">文本</Divider>
    </>
  );
};
export default App;
```
:::


### 虚线

添加 dashed 属性使分割线渲染为虚线。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
        <Divider dashed>文本</Divider>
    </>
  );
};
export default App;
```
:::


### 自定义样式

可以直接通过 styles 属性设置分割线的样式。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
        <Divider styles={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}>文本</Divider>
    </>
  );
};
export default App;
```
:::

### 垂直分割线

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <div>
        文本
        <Divider direction="vertical" />
        <a href="#" style={{ color: '#1989fa' }}>链接</a>
        <Divider direction="vertical" />
        <a href="#" style={{ color: '#1989fa' }}>链接</a>
    </div>
    </>
  );
};
export default App;
```
:::


## API

### Props

| 参数              | 说明                          | 类型    | 默认值 |
|-----------------| ----------------------------- | ------- | ------ |
| dashed          | 是否使用虚线                  | Boolean | false  |
| hairline        | 是否使用 0.5px 线             | Boolean | true   |
| contentPosition | 内容位置，可选值为 left right | String  | center |
| styles          | 修改自定义样式                | CSS     | -      |
| direction`v1.2.0`   | 水平还是垂直类型,可选值为 horizontal vertical               | String     | 'horizontal'      |

### Slots

| 名称    | 说明 |
| ------- | ---- |
| default | 内容 |
