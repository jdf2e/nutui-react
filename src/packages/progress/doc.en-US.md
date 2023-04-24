# Progress

## Intro

Used to show the current progress of the operation.

## Install

```js
// react
import { Progress } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

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

### Custom Style

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

### Show Percentage

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

## Custom Size

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

### Status Display

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

### Dynamic Change

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

| Property | Description | Type | Default
|----- | ----- | ----- | -----
| percent | percent | `number` | `0`
| background | Progress bar background color | `string` | `#f3f3f3`
| color | Stroke color | `string` | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)`
| strokeWidth | Stroke width | `string` | -
| showText | Whether to show text | `boolean` | `false`
| animated | The current state of the progress bar, `true`展示动画效果 | `boolean` | `false`

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-progress-height | `10px` |
| --nutui-progress-border-radius | `12px` |
| --nutui-progress-text-color | `$primary-text-color` |
| --nutui-progress-text-padding | `0 5px` |
| --nutui-progress-text-font-size | `9px` |
| --nutui-progress-text-position-top | `-4px`|
| --nutui-progress-text-position-bottom | `-4px`|
| --nutui-progress-text-border-radius | `5px` |
