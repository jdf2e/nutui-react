# Swipe 

### introduce
It is often used for gesture operations such as sliding left and right to delete cells

### Install

```javascript
// react
import { Swipe } from '@nutui/nutui-react';

```

## Code demonstration

### Basic usage

:::demo

```tsx

import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Swipe
      rightAction={
        <Button type="primary" shape="square">
        delete
        </Button>
      }
    >
      <cell title= "left slide delete" />
    </Swipe>
  </>
}
export default App;
```
:::


### Control via instance method

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  const closeRef = useRef(null)
  const openRef = useRef(null)
  return <>
    <Swipe
      ref={openRef}
      rightAction={
        <Button shape="square" type="danger">
          Delete
        </Button>
      }
    >
      <Cell title='Click the button below to open or close' roundRadius={0} />
    </Swipe>
    <Button onClick={() => openRef.current?.open()}>
      Open
    </Button>
    <Button onClick={() => openRef.current?.close()}>
      Close
    </Button>
  </>
}
export default App;
```
:::

### Click to close

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  const closeRef = useRef(null)
  return <>
    <Swipe
      ref={openRef}
      rightAction={
        <Button shape="square" type="danger">
          Delete
        </Button>
      }
      onActionClick={() => {
        closeRef.current.close()
      }}
    >
      <Cell title='Click the right button to close' roundRadius={0} />
    </Swipe>
  </>
}
export default App;
```
:::

### Disable sliding

:::demo

```tsx

import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Swipe
      rightAction={
        <Button shape="square" type="danger">
          delete
        </Button>
      }
      disabled
    >
      <cell title= "disable sliding" />
    </Swipe>
  </>
}

export default App;
```
:::


### Event monitoring

:::demo

```tsx
import React from "react";
import { Swipe, Cell, Button, Toast } from '@nutui/nutui-react';

const App = () => {
  const handleChange = () => {
    Toast.text ('click ');
  }
  return <>
    <Swipe
      leftAction={
        <Button shape="square" type="success">
          choice
        </Button>
      }
      rightAction={
        <>
          <Button shape="square" type="danger">
            delete
          </Button>
          <Button shape="square" type="info">
            Collection
          </Button>
        </>
      }
      onActionClick={handleChange}
      onOpen={() => toast.text('open')}
      onClose={() => toast.text('close')}
    >
      <cell title= "event" />
    </Swipe>
  </>
}
export default App;
```
:::

### Asynchronous control

:::demo

```tsx

import React, { useRef } from "react";

import { Swipe, Cell, Button, Dialog } from '@nutui/nutui-react';
import { SwipeInstance } from '@/packages/Swipe'

const App = () => {
  const refDom = useRef<SwipeInstance>(null)
  const beforeClose = (postion: string) => {
    Dialog.alert({
      Title: 'prompt',
      content: postion === 'left' ? ' Are you sure to choose? ':' Are you sure to delete? ',
      onOk: () => {
        refDom. current && refDom.current.close()
      },
    })
  }
  return <>
    <Swipe
      ref={refDom}
      beforeClose={beforeClose}
      leftAction={
        <Button shape="square" type="success">
          choice
        </Button>
      }
      rightAction={
        <>
          <Button shape="square" type="danger">
            delete
          </Button>
        </>
      }
    >
      <cell title= "event" />
    </Swipe>
  </>
}
export default App;
```
:::


### Custom content

:::demo

```tsx
import React from "react";
import { Swipe, Cell, Button, InputNumber } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Swipe
      rightAction={
        <>
          <Button shape="square" type="danger">
          add to cart
          </Button>
        </>
      }
    >
      <Cell>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <span>Merchandise</span>
          <InputNumber style={{ float: 'right' }} />
        </div>
      </Cell>
    </Swipe>
  </>
}
export default App;
```
:::

## API

### Props


|Parameter | description | type | default value|
|--------------|----------------------------------|--------|------------------|
|name | identifier, which can be obtained in the event parameters |_number \| string_ | `''` |
|leftwidth | specifies the width of the left sliding area, in 'PX'|_number \| string_ | `0` |
|rightwidth | specifies the width of the sliding area on the right, in 'PX'|_number \| string_ | `0` |
|leftaction | contents of the left sliding area |_ReactNode_ | - |
|rightaction | content of right sliding area |_ReactNode_ | - |
|beforeclose | the callback function before closing returns `position` | _string_ | `left`|
|disabled | disable sliding |_boolean_ | `false` |

### Events

|Event name | description | callback parameters|
|--------|----------------|--------------|
|onOpen | open the cell sidebar |_name: string , position: `left \| right`_ |
|onClose | collapse the cell sidebar |_name: string , position: `left \| right`_ |
|onActionClick | triggered when clicking on the left or right |_event: Event , position: `left \| right`_ |
| onTouchStart`v1.4.7` | ontouchStart | _event: Event      |
| onTouchMove`v1.4.7`         | ontouchmove  | _event: Event     |
| onTouchEnd`v1.4.7`          | ontouchend   | _event: Event     |

## Swipe 实例方法

| API           | Description | Callback parameters |
|---------------|-------------| ----- |
| open | open swipe  | `left\|right` |
| close | close swipe    | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-swiper-pagination-item-background-color | `  #ddd` |
| --nutui-swiper-pagination-item-width | `  8px` |
| --nutui-swiper-pagination-item-height | `  3px` |
| --nutui-swiper-pagination-item-margin-right | `  7px` |
| --nutui-swiper-pagination-item-border-radius | `  2px` |
