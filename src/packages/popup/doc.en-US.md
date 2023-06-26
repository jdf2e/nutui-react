# Popup

## Intro

Popup layer container, used to display pop-up windows, information prompts, etc.

## Install

```tsx
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
        <Cell title="Show popup"  onClick={() => { setShowBasic(true) }}/>
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
        <Cell title="top pop"  onClick={() => { setShowTop(true) }}/>
        <Cell title="bottom pop"  onClick={() => { setShowBottom(true) }}/>
        <Cell title="pop up left"  onClick={() => { setShowLeft(true) }}/>
        <Cell title="pop up right"  onClick={() => { setShowRight(true) }}/>
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
import { Heart } from '@nutui/icons-react';

const App = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showIconPosition, setShowIconPosition] = useState(false);
  const [showIconDefine, setShowIconDefine] = useState(false);

  return (
    <>
        <Cell title="close icon"  onClick={() => { setShowIcon(true) }}/>
        <Cell title="Icon position"  onClick={() => { setShowIconPosition(true) }}/>
        <Cell title="custom icon"  onClick={() => { setShowIconDefine(true) }}/>
        <Popup closeable visible={ showIcon } style={{ height: '20%' }} position="bottom" onClose={ () => { setShowIcon(false) } } />
        <Popup closeable visible={ showIconPosition } style={{ height: '20%' }} closeIconPosition="top-left" position="bottom" onClose={ () => { setShowIconPosition(false) } } />
      <Popup visible={ showIconDefine } style={{ height: '20%' }} closeable closeIcon={<Heart />} position="bottom" onClose={ () => { setShowIconDefine(false) } } />
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
        <Cell title="Rounded popup"  onClick={() => { setShowBottomRound(true) }}/>
        <Popup closeable visible={ showBottomRound } style={{ height: '20%' }} position="bottom" round onClose={ () => { setShowBottomRound(false) } } />
    </>
  );
};
export default App;
```

:::

### Mount the specified node

:::demo

```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showMountNode, setShowMountNode] = useState(false);

  return (
    <>
        <Cell title="Mount the specified node"  onClick={() => { setShowMountNode(true) }}/>
        <Popup visible={showMountNode} style={{ padding: '30px 50px' }} portal={ document.body } onClose={() => { setShowMountNode(false) }}>
          body
        </Popup>
    </>
  );
};
export default App;
```

:::

### multi-layer stacking

:::demo

```tsx
import React, { useState } from "react";
import { Popup, Cell } from '@nutui/nutui-react';

const App = () => {
  const [showMutiple, setShowMutiple] = useState(false)
  const [showMutipleInner, setShowMutipleInner] = useState(false)

  return (
    <>
        <Cell title="multi-layer stacking"  onClick={() => { setShowMutiple(true) }}/>
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

## Popup

### Props

| Props | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether the current component is displayed | `boolean` | `false` |
| zIndex | mask level | `string` \| `number`  | `2000` |
| duration | Mask animation duration, in seconds | `number` | `0.3` |
| overlayClassName | custom mask class | `string` | `-` |
| overlayStyle | custom mask style | `CSSProperties` | `-` |
| lockScroll | Whether the background is locked | `boolean` | `true` |
| overlay | Whether to show the mask | `boolean` | `true` |
| closeOnOverlayClick | Whether to click the mask to close | `boolean` | `true` |
| position | popup location | `top` \| `bottom` \| `left` \| `right` \| `center` | `center` |
| transition | animation name | `string` | `-` |
| closeable | whether to show the close button | `boolean` | `false` |
| closeIconPosition | close button position | `top-left` \| `top-right` \| `bottom-left` \| `bottom-right` | `top-right` |
| closeIcon | Custom Icon | `ReactNode` | `close` |
| destroyOnClose | Whether to close after the component is destroyed | `boolean` | `false` |
| round | Whether to show rounded corners | `boolean` | `false` |
| portal | Mount the specified node | `HTMLElement` \| `(() => HTMLElement)` | null` | `null` |
| onClick | Triggered when the popup is clicked | `event: MouseEvent` | `-` |
| onCloseIconClick | Fired when the close icon is clicked | `event: MouseEvent` | `-` |
| onOpen | Triggered when the popup is opened | `-` | `-` |
| onClose | Fired when the popup is closed | `-` | `-` |
| afterShow | afterShow from `Overlay`, Fired when the mask opening animation ends | `event: HTMLElement` | `-` |
| afterClose | afterClose from `Overlay`, Fired when the mask closing animation ends | `event: HTMLElement` | `-` |
| onOverlayClick | Click on the mask to trigger | `event: MouseEvent` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-popup-border-radius | popup's border radius | `20px` |
| \--nutui-popup-close-icon-margin | the margin of the close icon | `16px` |
| \--nutui-popup-close-icon-color | close icon's color | `#969799` |
| \--nutui-popup-close-icon-size | close icon's size | `30px` |