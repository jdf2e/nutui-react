# Popup 彈出層

### 介绍

彈出層容器，用於展示彈窗、信息提示等內容

### 安裝

``` javascript
// react
import { Popup } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎用法

`visible` 控製顯示/隱藏

:::demo
```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <>
        <Cell title="展示彈出層" isLink onClick={() => { setShowBasic(true) }}/>
        <Popup visible={ showBasic } style={{ padding: '30px 50px' }} onClose={ () => { setShowBasic(false) } }>正文</Popup>
    </>
  );
};
export default App;

```
:::

### 彈出位置

:::demo
```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  return (
    <>
        <Cell title="頂部彈出" isLink onClick={() => { setShowTop(true) }}/>
        <Cell title="底部彈出" isLink onClick={() => { setShowBottom(true) }}/>
        <Cell title="左側彈出" isLink onClick={() => { setShowLeft(true) }}/>
        <Cell title="右側彈出" isLink onClick={() => { setShowRight(true) }}/>
        <Popup visible={ showTop } style={{ height: '20%' }} position="top" onClose={ () => { setShowTop(false) } } />
        <Popup visible={ showBottom } style={{ height: '20%' }} position="bottom" onClose={ () => { setShowBottom(false) } } />
        <Popup visible={ showLeft } style={{ width: '20%', height: '100%' }} position="left" onClose={ () => { setShowLeft(false) } } />
        <Popup visible={ showRight } style={{ width: '20%', height: '100%' }} position="right" onClose={ () => { setShowRight(false) } } />
    </>
  );
};
export default App;

```
:::

### 圖標

:::demo
```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showIconPosition, setShowIconPosition] = useState(false);
  const [showIconDefine, setShowIconDefine] = useState(false);

  return (
    <>
        <Cell title="關閉圖標" isLink onClick={() => { setShowIcon(true) }}/>
        <Cell title="圖標位置" isLink onClick={() => { setShowIconPosition(true) }}/>
        <Cell title="自定義圖標" isLink onClick={() => { setShowIconDefine(true) }}/>
        <Popup closeable visible={ showIcon } style={{ height: '20%' }} position="bottom" onClose={ () => { setShowIcon(false) } } />
        <Popup closeable visible={ showIconPosition } style={{ height: '20%' }} closeIconPosition="top-left" position="bottom" onClose={ () => { setShowIconPosition(false) } } />
        <Popup closeable visible={ showIconDefine } style={{ height: '20%' }} closeIcon="heart" position="bottom" onClose={ () => { setShowIconDefine(false) } } />
    </>
  );
};
export default App;


```
:::

### 圓角彈框

:::demo
```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showBottomRound, setShowBottomRound] = useState(false);

  return (
    <>
        <Cell title="圓角彈框" isLink onClick={() => { setShowBottomRound(true) }}/>
        <Popup closeable visible={ showBottomRound } style={{ height: '20%' }} position="bottom" round onClose={ () => { setShowBottomRound(false) } } />
    </>
  );
};
export default App;
```
:::

### 指定節點掛載

:::demo
```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showMountNode, setShowMountNode] = useState(false);

  return (
    <>
        <Cell title="指定節點掛載" isLink onClick={() => { setShowMountNode(true) }}/>
        <Popup visible={showMountNode} style={{ padding: '30px 50px' }} teleport={ document.body } onClose={() => { setShowMountNode(false) }}>
          body
        </Popup>
    </>
  );
};
export default App;
```
:::

### 多層堆疊

:::demo
```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showMutiple, setShowMutiple] = useState(false)
  const [showMutipleInner, setShowMutipleInner] = useState(false)

  return (
    <>
        <Cell title="多層堆疊" isLink onClick={() => { setShowMutiple(true) }}/>
        <Popup
          visible={showMutiple}
          style={{ padding: '30px 50px' }}
          onClose={() => {
            setShowMutiple(false)
          }}
        >
          <span onClick={ () => { setShowMutipleInner(true) } }>Click It</span>
        </Popup>
        <Popup
          visible={showMutipleInner}
          style={{ padding: '30px 50px' }}
          onClose={() => {
            setShowMutipleInner(false)
          }}
        >
          <span onClick={ () => { setShowMutipleInner(false) } }>close</span>
        </Popup>
    </>
  );
};
export default App;
```
:::

## API

### Props

| 參數                   | 說明                                                        | 類型           | 默認值        |
|------------------------|-------------------------------------------------------------|----------------|---------------|
| visible                | 當前組件是否顯示 | Boolean        | `false`       |
| zIndex                | 遮罩層級 | String、Number | `2000`        |
| duration               | 遮罩動畫時長，單位秒 | Number | `0.3`         |
| overlayClass          | 自定義遮罩類名 | String         | -             |
| overlayStyle          | 自定義遮罩樣式 | CSSProperties  | -             |
| lockScroll            | 背景是否鎖定 | Boolean        | `true`       |
| overlay                | 是否顯示遮罩 | Boolean        | `true`        |
| closeOnClickOverlay | 是否點擊遮罩關閉 | Boolean        | `true`        |
| position               | 彈出位置（top,bottom,left,right,center） | String         | `"center"`    |
| transition             | 動畫名 | String         | -             |
| style                  | 自定義彈框樣式 | CSSProperties  | -             |
| popClass              | 自定義彈框類名 | String         | -             |
| closeable              | 是否顯示關閉按鈕 | Boolean        | `false`        |
| closeIconSize`v1.4.7` | 关闭按钮大小 | string | `"12px"` |
| closeIconPosition    | 關閉按鈕位置（top-left,top-right,bottom-left,bottom-right） | String         | `"top-right"` |
| closeIcon | 自定義 Icon | String         | `"close"`     |
| destroyOnClose | 組件銷毀後是否關閉 | Boolean        | `true`        |
| round | 是否顯示圓角 | Boolean        | `false`       |
| teleport | 指定節點掛載 | HTMLElement、(() => HTMLElement) 、null        | `null`       |

### Events

| 事件名           | 說明                   | 回調參數       |
|------------------|------------------------|----------------|
| onClick            | 點擊彈框時觸發         | `event: MouseEvent` |
| onClickCloseIcon | 點擊關閉圖標時觸發     | `event: MouseEvent` |
| onOpen             | 打開彈框時觸發         | -              |
| onClose            | 關閉彈框時觸發         | -              |
| onOpend            | 遮罩打開動畫結束時觸發 | `event: HTMLElement` |
| onClosed           | 遮罩關閉動畫結束時觸發 | `event: HTMLElement` |
| onClickOverlay    | 點擊遮罩觸發           | `event: MouseEvent` |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-popup-close-icon-margin | ` 16px` |
| --nutui-popup-border-radius | ` 20px` |
| --nutui-popup-close-icon-color | ` #969799`|
| --nutui-popup-close-icon-size | ` 30px` |
