# Progress 进度条

## 介绍

展示操作或任务的当前进度。

## 安装

```tsx
import { Progress } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```jsx
import React from "react";
import { Progress, Cell } from '@nutui/nutui-react-taro';

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
import React from "react";
import { Progress, Cell } from '@nutui/nutui-react-taro';

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

### 显示百分比

:::demo

```jsx
import React from "react";
import { Progress, Cell } from '@nutui/nutui-react-taro';

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
import React from "react";
import { Progress, Image, Cell } from '@nutui/nutui-react-taro';

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

### 自定义尺寸

:::demo

```jsx
import React from "react";
import { Progress, Cell } from '@nutui/nutui-react-taro';

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

### 设置状态显示

:::demo

```jsx
import React from "react";
import { Progress, Cell } from '@nutui/nutui-react-taro';
import { Checked, Issue } from '@nutui/icons-react-taro';

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
import React, {useState} from "react";
import { Progress, Cell, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <Cell.Group>
      <Cell align="center">
        <Progress percent={value} />
        <span style={{ margin: '0 5px' }}>{value}%</span>
      </Cell>
      <Cell align="center">
        <Button
          type="default"
          style={{ margin: 8 }}
          onClick={() => {
            if (value <= 0) {
              console.log('进度已为0')
            }
            setValue(Math.max(0, value - 10))
          }}
        >减少</Button>
        <Button
          type="primary"
          style={{ margin: 8 }}
          onClick={() => {
            if (value >= 100) {
              console.log('进度已为100%')
            }
            setValue(Math.min(100, value + 10))
          }}
        >增加</Button>
      </Cell>
    </Cell.Group>
  );
};
export default App;
```

:::

### 延迟加载数据

:::demo

```jsx
import React from "react";
import { Progress, Cell } from '@nutui/nutui-react-taro';

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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 百分比 | `number` | `0` |
| color | 进度条线条颜色 | `string` | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)` |
| background | 进度条背景颜色 | `string` | `#f3f3f3` |
| strokeWidth | 进度条宽度 | `string` | `-` |
| showText | 是否显示文字内容 | `boolean` | `false` |
| animated | 是否展示动画效果 | `boolean` | `false` |
| lazy | 每次进入可视区展示进度条动画 | `boolean` | `false` |
| delay | 延迟数据加载时长，单位 ms | `number` | `0` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-progress-height | 进度条宽度 | `10px` |
| \--nutui-progress-border-radius | 进度条边框圆角 | `12px` |
| \--nutui-progress-color | 进度条颜色 | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)` |
| \--nutui-progress-background | 进度条背景色 | `#f3f3f3` |
| \--nutui-progress-text-color | 文本颜色 | `$color-primary-text` |
| \--nutui-progress-text-padding | 文本内边距 | `0 5px` |
| \--nutui-progress-text-font-size | 文本字体大小 | `9px` |
| \--nutui-progress-text-position-top | 文本定位 top | `-4px` |
| \--nutui-progress-text-position-bottom | 文本定位 bottom | `-4px` |
| \--nutui-progress-text-border-radius | 文本边框圆角 | `5px` |
| \--nutui-progress-text-background | 文本背景颜色 | `$progress-color` |