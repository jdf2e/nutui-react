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
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
  const handleChange = (val: boolean) => {
    console.log('The ceiling state has changed, and the current fixed is', val)
  }
  return(
    <>
        <Sticky threshold={57} onChange={(val: boolean) => handleChange(val)}>
          <Button type="primary">Ceiling effect</Button>
        </Sticky>
      </>
  )
}
export default App;
```

:::

### Ceiling distance

:::demo

```tsx
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
  return(
      <>
        <Sticky threshold={120}>
          <Button type="primary">120px from top</Button>
        </Sticky>
      </>
  )
}
export default App;
```

:::

### Ceiling in specified container

:::demo

```tsx
import React, { useRef } from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
  const containerTopRef = useRef(null)
   return(
    <>
      <div
        ref={containerTopRef}
        style={{ height: '600px' }}
      >
        <Sticky container={containerTopRef} threshold={57}>
          <Button type="info" style={{ marginLeft: '100px' }}>
            Ceiling in specified container
          </Button>
        </Sticky>
      </div>
    </>
   )
}
export default App;
```

:::

### Bottom suction distance

:::demo

```tsx
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
   return(
    <>
      <Sticky threshold={0} position="bottom">
        <Button type="primary">0px from bottom</Button>
      </Sticky>
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
