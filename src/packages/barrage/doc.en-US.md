# Barrage 

### Intro

It is used for the rotation display of words and phrases, which is suitable for video or other similar needs.

### Install

``` ts
import { Barrage } from '@nutui/nutui-react';
```

## Code demonstration

### Basic usage

:::demo
```tsx
import React, { useRef } from "react";
import { Cell, Button, Barrage } from '@nutui/nutui-react';

const barrageStyle = {
  padding: '20px 0',
  height: '150px',
  boxSizing: 'border-box'
}
const App = () => {
  const list = ['beautiful painting', 'Unconsciously', 'Super Plus enjoy', 'male silent female tears', 'Tired of not loving', 'cool-']
  const barrageRef = useRef(null)
  const addBarrage = () => {
    const n = Math.random()
    if (barrageRef.current) {
      barrageRef.current.add(`random——${  String(n).substr(2, 10)}`)
    }
  }
  return (
    <div className="demo">
      <h2>Basic usage</h2>
      <Cell className="barrage-demo-wrap" style={barrageStyle}>
        <Barrage className="barrage-demo" ref={barrageRef} barrageList={list} style={barrageStyle} />
      </Cell>
      <div className="test" style={{ textAlign: 'center' }}>
        <Button type="danger" onClick={addBarrage}>
          add randomly
        </Button>
      </div>
    </div>
  )
}
export default App;
```
:::


## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| barrageList         | Barrage list data               | Array | []              |
| frequency        | The time interval between the occurrence of each barrage in the visual area                         | Number | 500               |
| speeds         | Rolling time of each barrage | Number |  2000               |
| rows  | The number of bullet screen lines is displayed in several lines     | Number | 1 |
| top  | Vertical distance of barrage    | Number | 10 |
| loop  | Loop play     | Boolean | true |

### Events API

| Event | Description           | Arguments     |
|--------|----------------|--------------|
| add  | Add data | - |