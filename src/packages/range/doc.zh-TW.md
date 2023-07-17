# Range 區間選擇器

## 介紹

滑動輸入條，用於在給定的範圍內選擇一個值。

## 安裝

```tsx
import { Range } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  };
  return <Cell style={cellStyle}>
    <Range defaultValue={40} onEnd={(val) => Toast.show(`${val}`)} />
  </Cell>
};
export default App;
```

:::

### 受控方式

:::demo

```tsx
import React, { useState } from "react";
import { Range, Cell } from '@nutui/nutui-react';

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

### 自定義描述

:::demo

```tsx
import React from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

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
      onEnd={(val) => Toast.show(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 雙滑塊

:::demo

```tsx
import React from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={[20, 80]}
      range
      onEnd={(val) => Toast.show(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 指定範圍

:::demo

```tsx
import React from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={0}
      max={10}
      min={-10}
      onEnd={(val) => Toast.show(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 設置步長

:::demo

```tsx
import React from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={30}
      step={5}
      onEnd={(val) => Toast.show(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 隱藏範圍

:::demo

```tsx
import React from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={30}
      maxDescription={null}
      minDescription={null}
      onEnd={(val) => Toast.show(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 隱藏標簽

:::demo

```tsx
import React from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  return <Cell style={cellStyle}>
    <Range
      defaultValue={20}
      currentDescription={null}
      onEnd={(val) => Toast.show(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 禁用

:::demo

```tsx
import React from "react";
import { Range, Cell } from '@nutui/nutui-react';

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

### 自定義樣式

:::demo

```tsx
import React from "react";
import { Range, ConfigProvider, Cell, Toast } from '@nutui/nutui-react';

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
        nutuiRangeButtonBorder: '1px solid rgba(52,96,250,1)',
        nutuiRangeActiveColor:
          'linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)',
        nutuiRangeInactiveColor: 'rgba(163,184,255,1)',
        nutuiRangeMargin: '20px',
        nutuiRangeHeight: '6px',
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

### 自定義按鈕

:::demo

```tsx
import React, { useState } from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    padding: '40px 18px',
  }
  const buttonStyle = {
    width: '26px',
    color: 'white',
    fontSize: '10px',
    lineHeight: '18px',
    textAlign: 'center',
    backgroundColor: 'red',
    borderRadius: '10px',
  }
  const [value, setValue] = useState(60)
  return <Cell style={cellStyle}>
    <Range
      value={value}
      button={<div style={buttonStyle}>{value}</div>}
      onChange={(val) => setValue(val)}
      onEnd={(val) => console.log(`${val}`)}
    />
  </Cell>
};
export default App;
```

:::

### 垂直方嚮

:::demo

```tsx
import React from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

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
        onEnd={(val) => Toast.show(`${val}`)}
      />
    </div>
    <div style={{ width: '150px', height: '100%' }}>
      <Range
        defaultValue={[20, 80]}
        vertical
        range
        onEnd={(val) => Toast.show(`${val}`)}
      />
    </div>
  </Cell>
};
export default App;
```

:::

### 刻度標記

:::demo

```tsx
import React from "react";
import { Range, Cell, Toast } from '@nutui/nutui-react';

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
        onEnd={(val) => Toast.show(`${val}`)}
      />
    </Cell>
    <Cell style={cellStyle}>
      <Range
        defaultValue={[20, 80]}
        marks={marks}
        range
        onEnd={(val) => Toast.show(`${val}`)}
      />
    </Cell>
    <Cell style={verticalStyle}>
      <Range
        defaultValue={60}
        vertical
        maxDescription={null}
        minDescription={null}
        marks={marks}
        onEnd={(val) => Toast.show(`${val}`)}
      />
      <Range
        defaultValue={[20, 80]}
        vertical
        marks={marks}
        range
        onEnd={(val) => Toast.show(`${val}`)}
      />
    </Cell>
  </>
};
export default App;
```

:::

## Range

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultValue | 默認進度百分比，非受控 | `number` \| `number[]` | `0` |
| value | 當前進度百分比，受控 | `number` \| `number[]` | `0` |
| range | 是否開啟雙滑塊模式 | `boolean` | `false` |
| max | 最大值 | `number` | `100` |
| min | 最小值 | `number` | `0` |
| maxDescription | 最大值描述，傳 `null` 錶示隱藏 | `ReactNode` | `-` |
| minDescription | 最小值描述，傳 `null` 錶示隱藏 | `ReactNode` | `-` |
| currentDescription | 當前值描述，傳 `null` 錶示隱藏 | `((value) => ReactNode)` \| `null` | `-` |
| step | 步長 | `number` | `1` |
| disabled | 是否禁用滑塊 | `boolean` | `false` |
| vertical | 是否豎嚮展示 | `boolean` | `false` |
| marks | 刻度標示 | `Object{key: number}` | `{}` |
| button | 自定義滑動按鈕 | `ReactNode` | `-` |
| onChange | 進度實時變化，通常在受控方式中與 value 一起使用 | `(value) => void` | `-` |
| onStart | 開始拖動時觸發 | `-` | `-` |
| onEnd | 結束拖動時觸發 | `(value) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-range-color | 字體顏色 | `$gray1` |
| \--nutui-range-margin | 進度條外邊距 | `15px` |
| \--nutui-range-height | 進度條的寬度 | `4px` |
| \--nutui-range-active-color | 激活顏色 | `$primary-color` |
| \--nutui-range-inactive-color | 未激活顏色 | `#fa958c` |
| \--nutui-range-button-background | 按鈕背景 | `$white` |
| \--nutui-range-button-width | 按鈕寬度 | `24px` |
| \--nutui-range-button-height | 按鈕高度 | `24px` |
| \--nutui-range-button-border | 按鈕邊框 | `1px solid $primary-color` |