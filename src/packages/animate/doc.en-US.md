# Animate

## Intro

Add animation effects to child elements

## Install

```tsx
import { Animate } from '@nutui/nutui-react';
```

## Demo

### Clicking to trigger

:::demo

```tsx
import React from 'react'
import { Animate, Button } from '@nutui/nutui-react'

const AnimateDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>Clicking to trigger</h2>
        <div className="ani-demo-div">
          <Animate type="slide-right" action="click">
            <Button type="primary">From right to left</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-left" action="click">
            <Button type="primary">From left to right</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-top" action="click">
            <Button type="primary">From top to bottom</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-bottom" action="click">
            <Button type="primary">From bottom to top</Button>
          </Animate>
        </div>
      </div>
    </>
  )
}

export default AnimateDemo
```

:::

### Loop animation

:::demo

```tsx
import React from 'react'
import { Animate, Button } from '@nutui/nutui-react'

const AnimateDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>Loop animation</h2>
        <div className="ani-demo-div">
          <Animate type="shake" loop>
            <Button type="primary">shake</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="ripple" loop>
            <Button type="primary">ripple</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="breath" loop>
            <Button type="primary">breath</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="twinkle" loop>
            <Button type="primary">twinkle</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="flicker" loop>
            <Button type="primary">flicker</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="jump" loop>
            <Button type="primary">jump</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="float" loop>
            <Button type="primary">float</Button>
          </Animate>
        </div>
      </div>
    </>
  )
}

export default AnimateDemo

```

:::

## Animate

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | For animation type, see the description of type value below | `AnimateType` | `shake` |
| action | Triggering method,'initial'-- initialization execution; ' Click'-- Click to execute | `initial` \| `click` | `initial` |
| loop | Whether to execute circularly. True： loop execution; False： execute once | `boolean` | `false` |
| onClick | Triggered when an element is clicked | `event: Event` | `-` |

### AnimateType value description

| Order | Type name | Description |
| --- | --- | --- |
| 1 | shake | shake，It is recommended that loop be true |
| 2 | ripple | ripple |
| 3 | breath | breath，It is recommended that loop be true |
| 4 | float | float，It is recommended that loop be true |
| 5 | slide-right | From right to left |
| 6 | slide-left | From left to right |
| 7 | slide-top | From top to bottom |
| 8 | slide-bottom | From bottom to top |
| 9 | jump | jump，It is recommended that loop be true |
| 10 | twinkle | twinkle，It is recommended that loop be true |
| 11 | flicker | Polish button，It is recommended that loop be true |