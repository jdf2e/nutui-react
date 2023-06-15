# Sticky组件

## Intro

The effect is the same as position: sticky in CSS, which can be used for compatibility with low-end browsers

## Install

```tsx
import { Sticky } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import React, { useEffect, useRef, useState } from 'react'
import {Button,Cell, Sticky } from '@nutui/nutui-react'

const App = () => {
  const handleChange = (val: boolean) => {
    console.log('The ceiling state has changed, and the current fixed is', val)
  }
  return(
    <>
        <h2>Ceiling</h2>
        <Cell style={{ height: '300px' }}>
          <Sticky threshold={57} onChange={handleChange}>
            <Button type="primary">Ceiling button</Button>
          </Sticky>
        </Cell>
        <h2>Ceiling distance</h2>
        <Cell  style={{ height: '300px' }}>
          <Sticky threshold={120}>
            <Button type="primary">Ceiling distance 120px</Button>
          </Sticky>
        </Cell>
        <h2>Suction distance</h2>
        <Cell style={{ height: '64px' }}>
          <Sticky threshold={0} position="bottom">
            <Button type="primary">Suction distance 0px</Button>
          </Sticky>
        </Cell>
    </>
  )
}
export default App;
```

:::

### 指定容器内

:::demo

```tsx
import React, { useEffect, useRef, useState } from 'react'
import {Button,Cell, Sticky } from '@nutui/nutui-react'

const App = () => {
  const containerTopRef = useRef(null)
  const containerRef = useRef(null)
  return(
    <>
        <h2>Specify container</h2>
        <Cell>
          <div
            className="sticky-container"
            ref={containerTopRef}
            style={{ height: '300px' }}
          >
            <Sticky container={containerTopRef} threshold={57}>
              <Button type="info">
                Ceiling of designated container
              </Button>
            </Sticky>
          </div>
        </Cell>
        <h2>Suction distance of designated container</h2>
        <Cell>
          <div
            className="sticky-container"
            ref={containerRef}
            style={{ height: '300px' }}
          >
            <Sticky position="bottom" container={containerRef} threshold={0}>
              <Button  type="info">
                Suction distance of designated container
              </Button>
            </Sticky>
          </div>
        </Cell>
    </>
  )
}
export default App;
```

:::

## Sticky

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| position | adsorption position| `top` \| `bottom` | `top` |
| threshold | distance, when position is top, set top | `number` | `0` |
| zIndex | The level when snapping | `number` | `2000` |
| container | the container's ref | `React.RefObject<HTMLElement>` | `-` |
| onChange | Triggered when the snap state changes |  `(val: boolean) => void` | `-` |