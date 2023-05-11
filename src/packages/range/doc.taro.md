# Range 区间选择器

## 介绍

滑动输入条，用于在给定的范围内选择一个值。

## 安装

```javascript
import { Range } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React from "react";
import { Range, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  };
  return <Cell style={cellStyle}>
    <Range defaultValue={40} onEnd={(val) => console.log(`${val}`)} />
  </Cell>
};
export default App;
```

:::

### 受控方式

:::demo

```tsx
import React from "react";
import { Range, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  };
  const [value, setValue] = useState(40)
  return <Cell style={{cellStyle}}>
    <Range value={value} onChange={(val) => setValue(val)} />
  </Cell>
};
export default App;
```

:::

### 自定义描述

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  };
  return <Cell style={cellStyle}>
    <Range
      defaultValue={40}
      minDescription="0%"
      maxDescription="100%"
      currentDescription={(value) => `${value}%`}
      onEnd={(val) => console.log(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 双滑块

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={[20, 80]}
      range
      onEnd={(val) => console.log(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 指定范围

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={0}
      max={10}
      min={-10}
      onEnd={(val) => console.log(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 设置步长

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={30}
      step={5}
      onEnd={(val) => console.log(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 隐藏范围

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={30}
      maxDescription={null}
      minDescription={null}
      onEnd={(val) => console.log(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::


### 隐藏标签

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={20}
      currentDescription={null}
      onEnd={(val) => console.log(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::


### 禁用

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range defaultValue={50} disabled />
  </Cell>
};
export default App;
```

:::

### 自定义样式

:::demo

```tsx
import React, {useState} from "react";
import { Range, ConfigProvider, Cell} from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell
    style={{
      ...cellStyle,
      display: 'block',
    }}
  >
    <ConfigProvider
      theme={{
        [`--nutui-range-button-border`]: '1px solid rgba(52,96,250,1)',
        [`--nutui-range-active-color`]:
          'linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)',
        [`--nutui-range-inactive-color`]: 'rgba(163,184,255,1)',
      }}
    >
      <Range
        className="test-range"
        defaultValue={40}
        style={{ color: 'red' }}
        marks={{
          10: 10,
          20: 20,
        }}
      />
    </ConfigProvider>
  </Cell>
};
export default App;
```

:::


### 自定义按钮

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  const [value, setValue] = useState(60)
  return <Cell style={cellStyle}>
    <Range
      value={value}
      button={<div className="range-custom-button">{value}</div>}
      onChange={(val) => setValue(val)}
      onEnd={(val) => console.log(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 垂直方向

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const verticalStyle = {
    height: '180px',
    padding: '10px',
  }
  return <Cell style={verticalStyle}>
    <div style={{ width: '150px', height: '100%' }}>
      <Range
        defaultValue={20}
        vertical
        onEnd={(val) => console.log(`${val}`)}
      />
    </div>
    <div style={{ width: '150px', height: '100%' }}>
      <Range
        defaultValue={[20, 80]}
        vertical
        range
        onEnd={(val) => console.log(`${val}`)}
      />
    </div>
  </Cell>
};
export default App;
```

:::

### 刻度标记

:::demo

```tsx
import React, {useState} from "react";
import { Range, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  const verticalStyle = {
    height: '180px',
    padding: '10px',
  }
  return <>
    <Cell style={cellStyle}>
      <Range
        defaultValue={60}
        maxDescription={null}
        minDescription={null}
        marks={marks}
        onEnd={(val) => console.log(`${val}`)}
      />
    </Cell>
    <Cell style={cellStyle}>
      <Range
        defaultValue={[20, 80]}
        marks={marks}
        range
        onEnd={(val) => console.log(`${val}`)}
      />
    </Cell>
    <Cell style={verticalStyle}>
      <Range
        defaultValue={60}
        vertical
        maxDescription={null}
        minDescription={null}
        marks={marks}
        onEnd={(val) => console.log(`${val}`)}
      />
      <Range
        defaultValue={[20, 80]}
        vertical
        marks={marks}
        range
        onEnd={(val) => console.log(`${val}`)}
      />
    </Cell>
  </>
};
export default App;
```

:::

## Range

### Props

| 参数          | 说明                 | 类型             | 默认值                   |
| ------------- | ------------------- | ---------------- | ------------------------ |
| defaultValue | 默认进度百分比，非受控 | `number \| [number, number]` | `0` |
| value | 当前进度百分比，受控 | `number \| [number, number]` | `0` |
| range | 是否开启双滑块模式 | `boolean` | `false` |
| max | 最大值 | `number`   | `100` |
| min | 最小值 | `number`   | `0` |
| maxDescription | 最大值描述，传 `null` 表示隐藏 | `ReactNode` | - |
| minDescription | 最小值描述，传 `null` 表示隐藏 | `ReactNode` | - |
| currentDescription | 当前值描述，传 `null` 表示隐藏 | `((value) => ReactNode) | null` | - |
| step | 步长 | `number` | `1` |
| disabled | 是否禁用滑块  `boolean` | `false` |
| vertical | 是否竖向展示 | `boolean` | `false` |
| marks | 刻度标示| `Object{key: number}` | `{}` |
| button | 自定义滑动按钮 | `ReactNode` | - |
| onChange | 进度实时变化，通常在受控方式中与 value 一起使用 | `(value) => void` | - |
| onStart | 开始拖动时触发 | - | - |
| onEnd | 结束拖动时触发 | `(value) => void` | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 描述 | 默认值 |
| --- | --- | --- |
| --nutui-range-font-color | 字体颜色 | `$gray1` |
| --nutui-range-active-color | 激活颜色 | `$primary-color` |
| --nutui-range-inactive-color | 未激活颜色 | `#fa958c` |
| --nutui-range-button-background | 按钮背景 | `$white` |
| --nutui-range-button-width | 按钮宽度 | `24px` |
| --nutui-range-button-height | 按钮高度 | `24px` |
| --nutui-range-button-border | 按钮边框 | `1px solid $primary-color` |
