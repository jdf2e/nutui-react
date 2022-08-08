# Popup

### introduce

Popup layer container, used to display pop-up windows, information prompts, etc.

### Install

``` javascript
import { Popup } from '@nutui/nutui-react';
```

## code demo

### Basic usage

`visible` Control show/hide

:::demo
```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <>
        <Cell title="Show popup" isLink onClick={() => { setShowBasic(true) }}/>
        <Popup visible={ showBasic } style={{ padding: '30px 50px' }} onClose={ () => { setShowBasic(false) } }>text</Popup>
    </>
  );
};
export default App;

```
:::

### popup location

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
        <Cell title="top pop" isLink onClick={() => { setShowTop(true) }}/>
        <Cell title="bottom pop" isLink onClick={() => { setShowBottom(true) }}/>
        <Cell title="pop up left" isLink onClick={() => { setShowLeft(true) }}/>
        <Cell title="pop up right" isLink onClick={() => { setShowRight(true) }}/>
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

### Icon

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
        <Cell title="close icon" isLink onClick={() => { setShowIcon(true) }}/>
        <Cell title="Icon position" isLink onClick={() => { setShowIconPosition(true) }}/>
        <Cell title="custom icon" isLink onClick={() => { setShowIconDefine(true) }}/>
        <Popup closeable visible={ showIcon } style={{ height: '20%' }} position="bottom" onClose={ () => { setShowIcon(false) } } />
        <Popup closeable visible={ showIconPosition } style={{ height: '20%' }} closeIconPosition="top-left" position="bottom" onClose={ () => { setShowIconPosition(false) } } />
        <Popup closeable visible={ showIconDefine } style={{ height: '20%' }} closeIcon="heart" position="bottom" onClose={ () => { setShowIconDefine(false) } } />
    </>
  );
};
export default App;


```
:::

### Rounded popup

:::demo
```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showBottomRound, setShowBottomRound] = useState(false);

  return (
    <>
        <Cell title="Rounded popup" isLink onClick={() => { setShowBottomRound(true) }}/>
        <Popup closeable visible={ showBottomRound } style={{ height: '20%' }} position="bottom" round onClose={ () => { setShowBottomRound(false) } } />
    </>
  );
};
export default App;
```
:::

## API

### Props

| Props                   | Description                                      | Type           | Default        |
|------------------------|-------------------------------------------------------------|----------------|---------------|
| visible                | Whether the current component is displayed                | Boolean        | `false`       |
| zIndex                | mask level                                                    | String、Number | `2000`        |
| duration               | Mask animation duration, in seconds                                 | Number | `0.3`         |
| overlayClass          | custom mask class name                                              | String         | -             |
| overlayStyle          | custom mask style                                              | CSSProperties  | -             |
| lockScroll            | Whether the background is locked                                                | Boolean        | `true`       |
| overlay                | Whether to show the mask                                                | Boolean        | `true`        |
| closeOnClickOverlay | Whether to click the mask to close                                            | Boolean        | `true`        |
| position               | popup location（top,bottom,left,right,center）                    | String         | `"center"`    |
| transition             | animation name                                                      | String         | -             |
| style                  | Custom popup style                                              | CSSProperties  | -             |
| popClass              | Custom popup class name                                              | String         | -             |
| closeable              | whether to show the close button                                            | Boolean        | `false`        |
| closeIconPosition    | close button position（top-left,top-right,bottom-left,bottom-right） | String         | `"top-right"` |
| closeIcon             | Custom Icon                                                 | String         | `"close"`     |
| destroyOnClose       | Whether to close after the component is destroyed                                          | Boolean        | `true`        |
| round                  | Whether to show rounded corners                                                | Boolean        | `false`       |

### Events

| Event           | Description                   | Callback parameters       |
|------------------|------------------------|----------------|
| onClick            | Triggered when the popup is clicked         | `event: MouseEvent` |
| onClickCloseIcon | Fired when the close icon is clicked     | `event: MouseEvent` |
| onOpen             | Triggered when the popup is opened         | -              |
| onClose            | Fired when the popup is closed         | -              |
| onOpend            | Fired when the mask opening animation ends | `event: HTMLElement` |
| onClosed           | Fired when the mask closing animation ends | `event: HTMLElement` |
| onClickOverlay    | Click on the mask to trigger           | `event: MouseEvent` |
