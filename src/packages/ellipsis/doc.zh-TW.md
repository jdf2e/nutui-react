#  Ellipsis组件

### 介绍

展示空间不足时，隐去部分内容并用“...”替代。

### 安装

```js
// react
import { Ellipsis } from '@nutui/nutui-react';
```


## 代码演示

### 头部省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react';

const App = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
    <Ellipsis content={content} direction="start"/>
    </Cell>
  );
};
export default App;
```
:::

### 尾部省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react';

const App = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
    <Ellipsis content={content} direction="end"/>
    </Cell>
  );
};
export default App;
```
:::

### 中间省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react';

const App = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
    <Ellipsis content={content} direction="middle"/>
    </Cell>
  );
};
export default App;
```
:::

### 多行省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react';

const App = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
    <Ellipsis content={content} direction="start" rows="3"/>
    </Cell>
  );
};
export default App;
```
:::

### 展开收起

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react';

const App = () => {
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  return (
    <Cell>
        <Ellipsis
        content={content}
        direction="start"
        expandText="展开"
        collapseText="收起"
        />
    </Cell>
  );
};
export default App;
```
:::

## API

### Props

| 属性 | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| content         | 文本内容               | string | -                |
| direction         | 省略位置               | 'start' \| 'end' \| 'middle' | `end`               |
| rows         | 展示几行               | number | `1`              |
| expandText         | 展开操作的文案               | string | -              |
| collapseText         | 收起操作的文案               | string | -               |
| symbol         | 省略的符号     | string | `...`       |
| lineHeight          | 容器的行高     | string \| number | `20`       |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onClick  | 文本点击是触发 | -- |
| onChange  | 点击展开收起时触发 | -- |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-ellipsis-expand-collapse-color | `#3460fa` |
