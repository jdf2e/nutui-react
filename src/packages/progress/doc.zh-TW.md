# Progress 進度條

## 介紹

展示操作或任務的當前進度。

## 安裝

```tsx
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
      <Progress percent={30} />
    </Cell>
  );
};
export default App;
```

:::

### 設置顏色與寬度

:::demo

```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Progress
        percent={30}
        background="rgba(250,44,25,0.2)"
        color="rgba(250,44,25,0.9)"
        strokeWidth="15"
      />
    </Cell>
  );
};
export default App;
```

:::

### 顯示百分比

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

### 自定義顯示內容

:::demo

```jsx
import  React from "react";
import { Progress, Image, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Progress percent={60} showText>
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
        <Progress percent={30} strokeWidth="5" showText />
      </Cell>
      <Cell>
        <Progress percent={50} strokeWidth="10" showText />
      </Cell>
      <Cell>
        <Progress percent={70} strokeWidth="15" showText />
      </Cell>
    </>
  );
};
export default App;
```

:::

### 設置狀態顯示

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

### 動態改變

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
          減少
        </Button>
        <Button 
          type="primary"
          style={{ margin: 8 }}
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

### 延遲加載數據

:::demo

```jsx
import  React from "react";
import { Progress, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell align="center">
      <Progress percent={30} lazy delay={500} />
    </Cell>
  );
};
export default App;
```

:::

## Progress

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| percent | 百分比 | `number` | `0` |
| color | 進度條線條顏色 | `string` | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)` |
| background | 進度條背景顏色 | `string` | `#f3f3f3` |
| strokeWidth | 進度條寬度 | `string` | `-` |
| showText | 是否顯示文字內容 | `boolean` | `false` |
| animated | 是否展示動畫效果 | `boolean` | `false` |
| lazy | 每次進入可視區展示進度條動畫 | `boolean` | `false` |
| delay | 延遲數據加載時長，單位 ms | `number` | `0` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-progress-height | 進度條寬度 | `10px` |
| \--nutui-progress-border-radius | 進度條邊框圓角 | `12px` |
| \--nutui-progress-color | 進度條顏色 | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)` |
| \--nutui-progress-background | 進度條背景色 | `#f3f3f3` |
| \--nutui-progress-text-color | 文本顏色 | `$primary-text-color` |
| \--nutui-progress-text-padding | 文本內邊距 | `0 5px` |
| \--nutui-progress-text-font-size | 文本字體大小 | `9px` |
| \--nutui-progress-text-position-top | 文本定位 top | `-4px` |
| \--nutui-progress-text-position-bottom | 文本定位 bottom | `-4px` |
| \--nutui-progress-text-border-radius | 文本邊框圓角 | `5px` |
| \--nutui-progress-text-background | 文本背景顏色 | `$progress-color` |