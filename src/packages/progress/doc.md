# Progress 进度条

## 介绍

展示操作或任务的当前进度。

## 安装

```js
// react
import { Progress } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Progress percent={30} />
    </Cell>
  );
};
export default App;
```
:::

### 设置颜色与宽度

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Progress
        percent={30}
        color="rgba(250,44,25,0.47)"
        strokeWidth="20"
      />
    </Cell>
  );
};
export default App;
```
:::

### 显示百分比

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Progress percent={50} showText />
    </Cell>
  );
};
export default App;
```
:::

### 自定义显示内容

:::demo
```jsx
import  React from "react";
import { Progress, Image, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Progress percent={60}>
        <Image
          width="30px"
          height="30px"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
        />
      </Progress>
    </Cell>
  );
};
export default App;
```
:::

### 自定义尺寸

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Cell>
        <Progress percent={30} strokeWidth="5" />
      </Cell>
      <Cell>
        <Progress percent={50} strokeWidth="10" />
      </Cell>
      <Cell>
        <Progress percent={70} strokeWidth="15" />
      </Cell>
    </>
  );
};
export default App;
```
:::

### 设置状态显示

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';
import { Checked, Issue } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Cell>
        <Progress
          percent={30}
          color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          animated
        />
      </Cell>
      <Cell align="center">
        <Progress percent={100} />
        <Checked color="green" style={{ margin: '0 5px' }} />
      </Cell>
      <Cell align="center">
        <Progress
          percent={100}
          color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
          strokeWidth="15"
        />
        <Issue color="red" style={{ margin: '0 5px' }} />
      </Cell>
    </>
  );
};
export default App;
```
:::

### 动态改变

:::demo
```jsx
import  React, {useState} from "react";
import { Progress, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Cell align="center">
        <Progress percent={value} />
        <span style={{ margin: '0 5px' }}>{value}%</span>
      </Cell>
      <Cell>
        <Button
          type="default"
          style={{ margin: 8 }} 
          onClick={() => {
            let num = value;
            if (value <= 0) {
              return false;
            }
            num -= 10;
            setValue(num);
          }}
        >
          减少
        </Button>
        <Button 
          type="primary" 
          onClick={() => {
            let num = value;
            if (value >= 100) {
              return false;
            }
            num += 10;
            setValue(num);
          }}
        >
          增加
        </Button>
      </Cell>
    </>
  );
};
export default App;
```
:::

## Progress

### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| percent | 百分比 | `number` | `0`
| background | 进度条背景颜色 | `string` | `#f3f3f3`
| color | 进度条线条颜色 | `string` | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)`
| strokeWidth | 进度条宽度 | `string` | -
| showText | 是否显示进度条文字内容 | `boolean` | `false`
| animated | 进度条当前状态，`true`展示动画效果 | `boolean` | `false`

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-progress-height | `10px` |
| --nutui-progress-border-radius | `12px` |
| --nutui-progress-text-color | `$primary-text-color` |
| --nutui-progress-text-padding | `0 5px` |
| --nutui-progress-text-font-size | `9px` |
| --nutui-progress-text-position-top | `-4px`|
| --nutui-progress-text-position-bottom | `-4px`|
| --nutui-progress-text-border-radius | `5px` |
