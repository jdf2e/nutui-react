# Barrage

## Intro

It is used for the rotation display of words and phrases, which is suitable for video or other similar needs.

## Install

```ts
// react
import { Barrage } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

```tsx
import React, { useRef } from 'react'
import { Cell, Button, Barrage } from '@nutui/nutui-react'

const barrageStyle = {
  padding: '20px 0',
  height: '150px',
  boxSizing: 'border-box',
}
const App = () => {
  const barrageList = [
    'beautiful painting',
    'Unconsciously',
    'Super Plus enjoy',
    'male silent female tears',
    'Tired of not loving',
    'cool-',
  ]
  const barrageRef = useRef(null)
  const addBarrage = () => {
    const n = Math.random()
    if (barrageRef.current) {
      barrageRef.current.add(`random——${String(n).substr(2, 10)}`)
    }
  }
  return (
    <div className="demo">
      <h2>Basic usage</h2>
      <Cell className="barrage-demo-wrap" style={barrageStyle}>
        <Barrage
          className="barrage-demo"
          ref={barrageRef}
          list={barrageList}
          style={barrageStyle}
        />
      </Cell>
      <div className="test" style={{ textAlign: 'center' }}>
        <Button type="danger" onClick={addBarrage}>
          add randomly
        </Button>
      </div>
    </div>
  )
}
export default App
```

:::

## API

### Props

| Property    | Description                                                                 | Type    | Default |
| ----------- | --------------------------------------------------------------------------- | ------- | ------- |
| list | Barrage list data                                                           | `Array<string>`   | `[]`    |
| interval   | The time interval between the occurrence of each barrage in the visual area | `number`  | `500`   |
| duration      | Rolling time of each barrage                                                | `number`  | `3000`  |
| rows        | The number of bullet screen lines is displayed in several lines             | `number`  | `1`     |
| gapY         | Vertical distance of barrage                                                | `number`  | `10`    |
| loop        | Loop play                                                                   | `boolean` | `true`  |

### Ref

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| add   | Add data    | `(word: string) => void`         |

