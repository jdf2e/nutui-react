# CircleProgress 環形進度條

## 介紹

展示操作或任務的當前進度。

## 安裝

```tsx
import { CircleProgress } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <CircleProgress percent={20} />
      <CircleProgress percent={60}>60%</CircleProgress>
    </>
  )
}
export default App;
```

:::

### 環形進度條自定義樣式

:::demo

```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <CircleProgress percent={50} strokeWidth={2} />
      <CircleProgress percent={60} strokeWidth={10} background='#e5e9f2'/>
    </>
  )
}
export default App;
```

:::

### 環形進度條自定義顏色(支持漸變色)

:::demo

```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const gradientColor = {
  '0%': '#FF5E5E',
  '100%': '#FFA062'
};
const App = () => {
  return (
    <>
      <CircleProgress percent={50} color="var(--nutui-brand-link-color)">
        50%
      </CircleProgress>
      <CircleProgress percent={100} color={gradientColor}>
        100%
      </CircleProgress>
    </>
  )
}
export default App;
```

:::

### 環形進度條自定義大小

:::demo

```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';


const App = () => {
  return (
    <>
      <CircleProgress percent={50} radius={60}>
        50%
      </CircleProgress>
    </>
  )
}
export default App;
```

:::

### 環形進度條自定義內容

:::demo

```tsx
import React from "react";
import { CircleProgress } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <CircleProgress percent={50} radius={60}>
        <> 
          <div>3000</div>
          <div style={{ fontSize: '12px', color: 'var(--nutui-gray-2)' }}>步</div>
        </>
      </CircleProgress>
    </>
  )
}
export default App;
```

:::

### 動態改變環形進度條的進度

:::demo

```tsx
import React, { useState } from "react";
import { Button, CircleProgress } from '@nutui/nutui-react';

const App = () => {
  const [percent, setPercent] = useState(30)
  
  const setReduceVal = () => {
    if (percent - 10 <= 0) {
      setPercent(0)
      return
    }
    setPercent(percent - 10)
  }
  const setAddVal = () => {
    if (percent >= 100) {
      return
    }
    setPercent(percent + 10)
  }

  return (
    <>
      <div className="demo__piece">
        <CircleProgress percent={percent}>{percent}%</CircleProgress>
      </div>
      <div className="demo__btn">
        <Button type="primary" onClick={setReduceVal} style={{ marginRight: '10px' }}>
          減少
        </Button>
        <Button type="primary" onClick={setAddVal}>
          增加
        </Button>
      </div>
    </>
  )
}
export default App;
```

:::

## CircleProgress

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| percent | 百分比 | `number` \| `string` | `必傳項，無默認值` |
| strokeWidth | 圓弧的寬度 | `number` \| `string` | `5` |
| radius | 半徑 | `number` \| `string` | `50` |
| color | 圓環進度條顏色，傳入對象格式可以定義漸變色 | `object \| string` | `-` |
| background | 圓環軌道顏色 | `string` | `#d9d9d9` |
| strokeLinecap | 圓環進度條端點形狀 | `butt` \| `round` \| `square` \| `inherit` | `round` |
| clockwise | 是否順時針展示 | `boolean` | `true` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-circleprogress-primary-color | 環形進度條填充部分的顏色 | `$primary-color` |
| \--nutui-circleprogress-path-color | 環形進度條軌道的顏色 | `#e5e9f2` |
| \--nutui-circleprogress-text-color | 環形進度條軌道內容區的顏色 | `$title-color` |
| \--nutui-circleprogress-text-size | 環形進度條軌道內容區的大小 | `$font-size-3` |