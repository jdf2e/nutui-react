# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容

### 安装

``` javascript
import { Popup } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

`visible` 控制显示/隐藏

:::demo
```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <>
        <Cell title="展示弹出层" isLink onClick={() => { setShowBasic(true) }}/>
        <Popup visible={ showBasic } style={{ padding: '30px 50px' }} onClose={ () => { setShowBasic(false) } }>正文</Popup>
    </>
  );
};
export default App;

```
:::

### 弹出位置

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
        <Cell title="顶部弹出" isLink onClick={() => { setShowTop(true) }}/>
        <Cell title="底部弹出" isLink onClick={() => { setShowBottom(true) }}/>
        <Cell title="左侧弹出" isLink onClick={() => { setShowLeft(true) }}/>
        <Cell title="右侧弹出" isLink onClick={() => { setShowRight(true) }}/>
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

### 图标

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
        <Cell title="关闭图标" isLink onClick={() => { setShowIcon(true) }}/>
        <Cell title="图标位置" isLink onClick={() => { setShowIconPosition(true) }}/>
        <Cell title="自定义图标" isLink onClick={() => { setShowIconDefine(true) }}/>
        <Popup closeable visible={ showIcon } style={{ height: '20%' }} position="bottom" onClose={ () => { setShowIcon(false) } } />
        <Popup closeable visible={ showIconPosition } style={{ height: '20%' }} closeIconPosition="top-left" position="bottom" onClose={ () => { setShowIconPosition(false) } } />
        <Popup closeable visible={ showIconDefine } style={{ height: '20%' }} closeIcon="heart" position="bottom" onClose={ () => { setShowIconDefine(false) } } />
    </>
  );
};
export default App;


```
:::

### 圆角弹框

:::demo
```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showBottomRound, setShowBottomRound] = useState(false);

  return (
    <>
        <Cell title="圆角弹框" isLink onClick={() => { setShowBottomRound(true) }}/>
        <Popup closeable visible={ showBottomRound } style={{ height: '20%' }} position="bottom" round onClose={ () => { setShowBottomRound(false) } } />
    </>
  );
};
export default App;
```
:::

## API

### Props

| 参数                   | 说明                                                        | 类型           | 默认值        |
|------------------------|-------------------------------------------------------------|----------------|---------------|
| visible                | 当前组件是否显示                                            | Boolean        | `false`       |
| zIndex                | 遮罩层级                                                    | String、Number | `2000`        |
| duration               | 遮罩动画时长，单位秒                                            | Number | `0.3`         |
| overlayClass          | 自定义遮罩类名                                              | String         | -             |
| overlayStyle          | 自定义遮罩样式                                              | CSSProperties  | -             |
| lockScroll            | 背景是否锁定                                                | Boolean        | `true`       |
| overlay                | 是否显示遮罩                                                | Boolean        | `true`        |
| closeOnClickOverlay | 是否点击遮罩关闭                                            | Boolean        | `true`        |
| position               | 弹出位置（top,bottom,left,right,center）                    | String         | `"center"`    |
| transition             | 动画名                                                      | String         | -             |
| style                  | 自定义弹框样式                                              | CSSProperties  | -             |
| popClass              | 自定义弹框类名                                              | String         | -             |
| closeable              | 是否显示关闭按钮                                            | Boolean        | `false`        |
| closeIconPosition    | 关闭按钮位置（top-left,top-right,bottom-left,bottom-right） | String         | `"top-right"` |
| closeIcon             | 自定义 Icon                                                 | String         | `"close"`     |
| destroyOnClose       | 组件销毁后是否关闭                                          | Boolean        | `true`        |
| round                  | 是否显示圆角                                                | Boolean        | `false`       |

### Events

| 事件名           | 说明                   | 回调参数       |
|------------------|------------------------|----------------|
| onClick            | 点击弹框时触发         | `event: MouseEvent` |
| onClickCloseIcon | 点击关闭图标时触发     | `event: MouseEvent` |
| onOpen             | 打开弹框时触发         | -              |
| onClose            | 关闭弹框时触发         | -              |
| onOpend            | 遮罩打开动画结束时触发 | `event: HTMLElement` |
| onClosed           | 遮罩关闭动画结束时触发 | `event: HTMLElement` |
| onClickOverlay    | 点击遮罩触发           | `event: MouseEvent` |
