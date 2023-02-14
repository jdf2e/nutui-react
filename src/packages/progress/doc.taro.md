# Progress 进度条

### 介绍

展示操作或任务的当前进度。

### 安装

```js

import { Progress, Icon } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage="30"
      />
    </Cell>
  );
};
export default App;
```
:::

### 设置高度和颜色

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage="30"
        strokeColor="rgba(250,44,25,0.47)"
        strokeWidth="20"
        textColor="red"
      />
    </Cell>
  );
};
export default App;
```
:::

### 设置百分比不显示

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage="50"
        showText={false}
      />
    </Cell>
  );
};
export default App;
```
:::

### 设置百分比外显

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage="30"
      />
    </Cell>
  );
};
export default App;
```
:::

### 设置百分比内显

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage="60"
        textInside
      />
    </Cell>
  );
};
export default App;
```
:::

### 设置内显自定义内容

:::demo
```jsx
import  React from "react";
import { Progress, Icon, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage={60}
        textInside
      >
        <Icon
          size={30}
          name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
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
import { Progress, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
    <Cell>
      <Progress
        percentage="30"
        size="small"
        textInside
      />
    </Cell>
    <Cell>
      <Progress
        percentage="50"
        size="base"
        textInside
      />
    </Cell>
    <Cell>
      <Progress
        percentage="70"
        size="large"
        textInside
      />
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
import { Progress, Icon, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
    <Cell>
      <Progress
        percentage="30"
        strokeColor="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
        status
      />
    </Cell>
    <Cell>
      <Progress
        percentage="100" 
        textType="icon"
      />
    </Cell>
    <Cell>
      <Progress
        percentage="100"
        strokeColor="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
        strokeWidth="15"
        textType="icon"
        iconName="issue"
        iconColor="red"
      />
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
import { Progress, Cell, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <>
    <Cell>
      <Progress
        percentage={value}
      />
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

## API

### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| percentage | 百分比 | Number | 0
| isShowPercentage | 是否需要展示百分号 | Boolean | true
| fillColor | 进度条填充颜色 | String | #f3f3f3
| strokeColor | 进度条线条背景色 | String | linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)
| strokeWidth | 进度条宽度 | String | -
| size | 进度条及文字尺寸，可选值`small` `base` `large` | String | base
| showText | 是否显示进度条文字内容 | Boolean | true
| textInside | 进度条文字显示位置(`false`外显，`true`内显) | Boolean | false
| textColor | 进度条文字颜色设置 | String | 外显`#333` 内显`#fff`
| textWidth | 进度条文字宽度 | String | 35px
| textBackground | 进度条文字背景颜色设置 | String | 同进度条颜色
| textType | 进度条文字类型，`text`(展示文字)/`icon`(展示icon标签) | String | text
| status | 进度条当前状态，`true`展示动画效果 | Boolean | false
| iconName | Icon 名称 | String | checked
| iconColor | Icon 颜色 | String | #439422
| iconSize | Icon 大小 | String | 16px
| rounded `v1.4.7 废弃`| 是否圆角 | boolean｜String | true

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-progress-border-radius | ` 12px` |
| --nutui-progress-text-padding | ` 0 5px` |
| --nutui-progress-text-font-size | ` 13px` |
| --nutui-progress-text-color | ` $title-color` |
| --nutui-progress-text-inner-color | ` $gray6` |
| --nutui-progress-insidetext-position-top | ` -4px`|
| --nutui-progress-insidetext-position-bottom | ` -4px`|
| --nutui-progress-insidetext-border-radius | `  5px` |
| --nutui-progress-insidetext-background | `  $progress-inner-background-color` |
| --nutui-progress-outer-background-color | `  #f3f3f3` |
| --nutui-progress-outer-border-radius | `  12px` |
| --nutui-progress-insidetext-border-radius | `  5px` |
| --nutui-progress-insidetext-padding | `  3px 5px 3px 6px` |
| --nutui-progress-small-font-size | ` 7px` |
| --nutui-progress-small-padding | ` 0 4px` |
| --nutui-progress-small-height | ` 5px` |
| --nutui-progress-small-text-font-size | `  7px` |
| --nutui-progress-small-text-line-height | `  10px` |
| --nutui-progress-small-text-padding | `  2px 4px` |
| --nutui-progress-base-font-size | ` 9px` |
| --nutui-progress-base-padding | ` 0 5px` |
| --nutui-progress-base-height | ` 10px` |
| --nutui-progress-base-text-font-size | `  9px` |
| --nutui-progress-base-text-line-height | `  13px` |
| --nutui-progress-base-text-padding | `  $progress-insidetext-padding` |
| --nutui-progress-base-text-top | `  $progress-insidetext-top` |
| --nutui-progress-large-font-size | ` 13px` |
| --nutui-progress-large-padding | ` 0 5px` |
| --nutui-progress-large-height | ` 15px` |
| --nutui-progress-large-text-font-size | `  13px` |
| --nutui-progress-large-text-line-height | `  18px` |
| --nutui-progress-large-text-padding | `  $progress-insidetext-padding` |
| --nutui-progress-large-text-top | `  $progress-insidetext-top` |
