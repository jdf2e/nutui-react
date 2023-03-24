# Progress 進度條

### 介紹

展示操作或任務的當前進度。

### 安裝

```js
// react
import { Progress } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

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

### 線形進度條-設置顏色高度

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

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

### 百分比不顯示

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

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

### 百分比外顯

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

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

### 百分比內顯

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

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

### 百分比內顯自定義

:::demo
```jsx
import  React from "react";
import { Progress, Image, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Progress
        percentage={60}
        textInside
      >
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

### 自定義尺寸

:::demo
```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

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

### 狀態顯示

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
        icon={<Issue color="red" />}
      />
    </Cell>
    </>
  );
};
export default App;
```
:::

### 動態改變

:::demo
```jsx
import  React, {useState} from "react";
import { Progress, Cell, Button } from '@nutui/nutui-react';

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
        減少
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

| 屬性 | 說明 | 類型 | 預設值
|----- | ----- | ----- | -----
| percentage | 百分比 | number | `0`
| isShowPercentage | 是否需要展示百分号 | boolean | `true`
| fillColor | 进度条填充颜色 | string | `#f3f3f3`
| strokeColor | 进度条线条背景色 | string | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)`
| strokeWidth | 进度条宽度 | string | -
| size | 进度条及文字尺寸，可选值`small` `base` `large` | string | `base`
| showText | 是否显示进度条文字内容 | boolean | `true`
| textInside | 进度条文字显示位置(`false`外显，`true`内显) | boolean | `false`
| textColor | 进度条文字颜色设置 | string | 外显`#333` 内显`#fff`
| textWidth | 进度条文字宽度 | string | `35px`
| textBackground | 进度条文字背景颜色设置 | string | 同进度条颜色
| textType | 进度条文字类型，`text`(展示文字)/`icon`(展示icon标签) | string | `text`
| status | 进度条当前状态，`true`展示动画效果 | boolean | `false`
| icon`v2.0.0` | 自定义图标 | ReactNode | `<Checked width={16} height={16} color="#439422"/>`
| iconName`v2.0.0 废弃` | Icon 名称 | string | `checked`
| iconColor`v2.0.0 废弃` | Icon 颜色 | string | `#439422`
| iconSize`v2.0.0 废弃` | Icon 大小 | string | `16px`
| rounded `v1.4.7 废弃`| 是否圆角 | boolean \| string | `true`

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
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
