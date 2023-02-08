#  Ellipsis

### Intro

isplay space is insufficient, hidden part of the content and "..." Alternative.

### Install

```js
// react
import { Ellipsis } from '@nutui/nutui-react';

```


## Code

### Leading

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

### Tailing

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

### Middle

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

### Multi-line

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

### Expand & Collapse

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

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| content         | Content               | String | -                |
| direction         | Direction                | 'start' | 'end' | 'middle' | 'end'               |
| rows         | Rows               | Number | 1              |
| expandText         | Expand text               | String | ''              |
| collapseText         | Collapse text               | String | ''               |
| symbol         | Symbol     | String | '...'       |
| lineHeight         | the row height of the container     | String、Number | 20       |

### Events

| Event  | Description     | Arguments    |
|--------|----------------|--------------|
| onClick  | Emitted when the content is clicked | -- |
| onChange  | Emitted when expand or collapse is clicked | -- |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-ellipsis-expand-collapse-color | `  #3460fa` |
