# Swipe

It is often used for gesture operations such as sliding left and right to delete cells

## Import

```tsx
import { Swipe } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <Swipe
        rightAction={
          <Button type="primary" shape="square">
            delete
          </Button>
        }
      >
        <cell title="left slide delete" />
      </Swipe>
    </>
  )
}
export default App
```

:::

### Card Mode

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'
import { Del } from '@nutui/icons-react'

const divNode = (text: string, style: any) => {
  return (
    <div
      style={{
        width: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      <Del style={{ marginBottom: '8px' }} />
      <>{text}</>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Swipe
        style={{ height: '104px' }}
        rightAction={
          <div
            style={{
              height: 'inherit',
              width: '240px',
              display: 'flex',
              fontSize: '12px',
            }}
          >
            <>
              {divNode('AlwaysBuy', {
                background: '#F8F8F8',
                color: '#1A1A1A',
              })}
              {divNode('Collected', {
                background: '#ffcc00',
                color: '#FFF',
              })}
              {divNode('Liked', {
                background: '#FF860D',
                color: '#FFF',
              })}
              {divNode('Delete', {
                background: '#FA2C19',
                color: '#FFF',
              })}
            </>
          </div>
        }
      >
        <Cell title={`${translated.leftDel}+Icon`} radius={0} />
      </Swipe>
    </>
  )
}
export default App
```

### Control via instance method

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'

const App = () => {
  const closeRef = useRef(null)
  const openRef = useRef(null)
  return (
    <>
      <Swipe
        ref={openRef}
        rightAction={
          <Button shape="square" type="danger">
            Delete
          </Button>
        }
      >
        <Cell title="Click the button below to open or close" radius={0} />
      </Swipe>
      <Button
        onClick={() => openRef.current?.open()}
        type="primary"
        size="small"
      >
        Open
      </Button>
      <Button onClick={() => openRef.current?.close()}>Close</Button>
    </>
  )
}
export default App
```

:::

### Click to close

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'

const App = () => {
  const closeRef = useRef(null)
  return (
    <>
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
        <Cell title="Click the right button to close" radius={0} />
      </Swipe>
    </>
  )
}
export default App
```

:::

### Disable sliding

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <Swipe
        rightAction={
          <Button shape="square" type="danger">
            delete
          </Button>
        }
        disabled
      >
        <cell title="disable sliding" />
      </Swipe>
    </>
  )
}

export default App
```

:::

### Event monitoring

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button, Toast } from '@nutui/nutui-react'

const App = () => {
  const handleChange = () => {
    Toast.show('click ')
  }
  return (
    <>
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
        onOpen={() => Toast.show('open')}
        onClose={() => Toast.show('close')}
      >
        <cell title="event" />
      </Swipe>
    </>
  )
}
export default App
```

:::

### Asynchronous control

:::demo

```tsx
import React, { useRef } from 'react'

import { Swipe, Cell, Button, Dialog } from '@nutui/nutui-react'
import { SwipeInstance } from '@/packages/Swipe'

const App = () => {
  const refDom = useRef<SwipeInstance>(null)
  const beforeClose = (postion: string) => {
    Dialog.alert({
      Title: 'prompt',
      content:
        postion === 'left'
          ? ' Are you sure to choose? '
          : ' Are you sure to delete? ',
      onConfirm: () => {
        refDom.current && refDom.current.close()
      },
    })
  }
  return (
    <>
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
        <cell title="event" />
      </Swipe>
    </>
  )
}
export default App
```

:::

### Custom content

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button, InputNumber } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
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
  )
}
export default App
```

:::

## Swipe

### Props

| Props | Description | Type | Default |
| --- | --- | --- | --- |
| name | identifier, which can be obtained in the event parameters | `number` \| `string` | `-` |
| leftAction | contents of the left sliding area | `ReactNode` | `-` |
| rightAction | content of right sliding area | `ReactNode` | `-` |
| beforeClose | the callback function before closing returns `position` which is the direction of the sliding area | `(position: 'left \|'right') => void` | `-` |
| disabled | disable sliding | `boolean` | `false` |
| onOpen | open the cell sidebar | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-` |
| onClose | collapse the cell sidebar | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-` |
| onActionClick | triggered when clicking on the left or right | `(event: MouseEvent<HTMLDivElement>, position: 'left' \|'right') => void` | `-` |
| onTouchStart | triggered when starting to touch | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |
| onTouchMove | triggered when starting to move | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |
| onTouchEnd | triggered when finishing to touch | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |

### Ref

| 属性 | 说明 | 回调参数 |
| --- | --- | --- |
| open | open the cell sidebar, the default value of `side` is `right` | `(side?: 'left' \| 'right') => void` |
| close | collapse the cell sidebar | `() => void` |
