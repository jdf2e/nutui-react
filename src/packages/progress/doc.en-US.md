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
        textColor="red"
      />
    </Cell>
  );
};
export default App;
```
:::

### Don't Show Percentage

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Progress percent={30} showText={false} />
    </Cell>
  );
};
export default App;
```
:::

### Text Inside

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Progress percent={60} textInside />
    </Cell>
  );
};
export default App;
```
:::

### Custom Content

:::demo
```jsx
import  React from "react";
import { Progress, Image, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Cell>
      <Progress
        percent={60}
        textInside
      >
        <Image
          width="30px"
          height="30px"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
        />
      </Progress>
    </Cell>
    </>
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
      <Progress
        percent={30}
        size="small"
        textInside
      />
    </Cell>
    <Cell>
      <Progress
        percent={50}
        size="base"
        textInside
      />
    </Cell>
    <Cell>
      <Progress
        percent={70}
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

### Status Display

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';
import { Issue } from '@nutui/icons-react';

const App = () => {
  return (
    <>
    <Cell>
      <Progress
        percent={30}
        color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
        status
      />
    </Cell>
    <Cell>
      <Progress percent={100}  textType="icon" />
    </Cell>
    <Cell>
      <Progress
        percent={100}
        color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
        strokeWidth="15"
        textType="icon"
        icon={<Issue color="red" />}
      />
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
    <Cell>
      <Progress percent={value} />
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
| fillColor | Progress bar background color | `string` | `#f3f3f3`
| color | Stroke color | `string` | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)`
| strokeWidth | Stroke width | `string` | -
| size | Progress bar and text size, eg `small` `base` `large` | `string` | `base`
| showText | Whether to show text | `boolean` | `true`
| textInside | Progress bar text display position(`false`外显，`true`内显) | `boolean` | `false`
| textColor | Progress bar text color setting | `string` | 外显`#333` 内显`#fff`
| textWidth | Progress bar text width setting | `string` | `35px`
| textBackground | Progress bar text background color setting | `string` | 同进度条颜色
| textType | Progress bar text type setting，`text`(展示文字)/`icon`(展示icon标签) | `string` | `text`
| status | The current state of the progress bar, `true`展示动画效果 | `boolean` | `false`
| icon | Custom Icon | `ReactNode` | `<Checked width={16} height={16} color="#439422"/>`


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-progress-border-radius | `12px` |
| --nutui-progress-text-padding | `0 5px` |
| --nutui-progress-text-font-size | `13px` |
| --nutui-progress-text-color | `$title-color` |
| --nutui-progress-text-inner-color | `$gray6` |
| --nutui-progress-insidetext-position-top | `-4px`|
| --nutui-progress-insidetext-position-bottom | `-4px`|
| --nutui-progress-insidetext-border-radius | `5px` |
| --nutui-progress-insidetext-background | `$progress-inner-background-color` |
| --nutui-progress-outer-background-color | `#f3f3f3` |
| --nutui-progress-outer-border-radius | `12px` |
| --nutui-progress-insidetext-border-radius | `5px` |
| --nutui-progress-insidetext-padding | `3px 5px 3px 6px` |
| --nutui-progress-small-font-size | `7px` |
| --nutui-progress-small-padding | `0 4px` |
| --nutui-progress-small-height | `5px` |
| --nutui-progress-small-text-font-size | `7px` |
| --nutui-progress-small-text-line-height | `10px` |
| --nutui-progress-small-text-padding | `2px 4px` |
| --nutui-progress-base-font-size | `9px` |
| --nutui-progress-base-padding | `0 5px` |
| --nutui-progress-base-height | `10px` |
| --nutui-progress-base-text-font-size | `9px` |
| --nutui-progress-base-text-line-height | `13px` |
| --nutui-progress-base-text-padding | `$progress-insidetext-padding` |
| --nutui-progress-base-text-top | `$progress-insidetext-top` |
| --nutui-progress-large-font-size | `13px` |
| --nutui-progress-large-padding | `0 5px` |
| --nutui-progress-large-height | `15px` |
| --nutui-progress-large-text-font-size | `13px` |
| --nutui-progress-large-text-line-height | `18px` |
| --nutui-progress-large-text-padding | `$progress-insidetext-padding` |
| --nutui-progress-large-text-top | `$progress-insidetext-top` |
