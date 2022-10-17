
#  Sticky组件

### Intro

The effect is the same as position: sticky in CSS, which can be used for compatibility with low-end browsers

### Install
```tsx
import { Sticky } from '@nutui/nutui-react';

```



### Basic Usage
:::demo
```tsx
const App = () => {
import React, { useEffect, useRef, useState } from 'react'
import {Button,Cell, Sticky } from '@nutui/nutui-react'

 const handleChange = (val: boolean) => {
    console.log('The ceiling state has changed, and the current fixed is', val)
  }
return(
    <>
        <h2>Ceiling</h2>
        <Cell style={{ height: '300px' }}>
          <Sticky top={57} onChange={handleChange}>
            <Button type="primary">Ceiling button</Button>
          </Sticky>
        </Cell>
        <h2>Ceiling distance</h2>
        <Cell  style={{ height: '300px' }}>
          <Sticky top={120}>
            <Button type="primary">Ceiling distance 120px</Button>
          </Sticky>
        </Cell>
        <h2>Suction distance</h2>
        <Cell style={{ height: '64px' }}>
          <Sticky top={0} position="bottom">
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
const App = () => {
import React, { useEffect, useRef, useState } from 'react'
import {Button,Cell, Sticky } from '@nutui/nutui-react'

   return(
    <>
        <h2>Specify container</h2>
        <Cell>
          <div
            className="sticky-container"
            ref={containerTopRef}
            style={{ height: '300px' }}
          >
            <Sticky container={containerTopRef} top={57}>
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
            <Sticky position="bottom" container={containerRef} bottom={0}>
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



## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| position     | Adsorption position（top、bottom）| String | top             |
| top          | Ceiling distance                 | Number | 0               |
| bottom       | Suction distance                 | Number | 0               |
| z-index      | Level of adsorption              | Number | 2000            |
| container    | container ref                    | `React.RefObject<HTMLElement>` |

### Events

| 事件名 | 说明                                            | 回调参数     |
|--------|------------------------------------------------|--------------|
| onChange  | Triggered when the adsorption state changes   | val: Boolean |
