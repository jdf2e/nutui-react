# BackTop 返回頂部

## 介紹

提供較長的頁面快捷返回頂部功能。

## 安裝

```tsx
import { BackTop } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{height: '100vh'}}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是測試數據{index}</Cell>
      })}
      <BackTop target="target" />
    </div>
  )
}
export default App;
```

:::

### 設置出現位置

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{height: '100vh'}}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是測試數據{index}</Cell>
      })}
      <BackTop target="target" threshold={200} bottom={50} />
    </div>
  )
}
export default App;
```

:::

### 自定義樣式

:::demo

```tsx
import React from "react";
import { Top } from '@nutui/icons-react';
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{height: '100vh'}}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是測試數據{index}</Cell>
      })}
      <BackTop threshold={100} bottom={110}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Top width={12} height={12} />
          <div style={{ fontSize: '12px' }}>頂部</div>
        </div>
      </BackTop>
    </div>
  )
}
export default App;
```

:::

### 父級元素內滾動

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{ height: '800px', overflowY: 'auto' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是測試數據{index}</Cell>
      })}
      <BackTop target="target" threshold={100} bottom={50} />
    </div>
  );
};
export default App;
```

:::

### click 事件

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  const handleClick = () => {
    console.log('觸發返回頂部')
  }
  return (
    <div id="target" style={{ height: '1000px', overflowY: 'auto' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是測試數據{index}</Cell>
      })}
      <BackTop threshold={100} bottom={50} onClick={handleClick} />
    </div>
  );
};
export default App;
```

:::

## BackTop

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| target | 獲取監聽的目標元素 | `string` | `-` |
| threshold | 頁面垂直滾動多高後出現 | `number` | `200` |
| zIndex | 設置組件頁面層級 | `number` | `10` |
| duration | 設置動畫持續時間，為 0 時表示無動畫 | `number` | `1000` |
| onClick | 按鈕點擊時觸發事件 | `(event: MouseEvent) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-backtop-border-color | 邊框顏色 | `#e0e0e0` |