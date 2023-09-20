# Swiper

## Intro

Often used in a group of pictures or card rotation.

## Install

```tsx
import { Swiper } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
]
const App = () => {
  const [defaultValue1, setdefaultValue1] = useState(0)
  const [height, setHeight] = useState<any>(150)
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        height={height}
        style={{
            '--nutui-indicator-color': '#426543',
            '--nutui-indicator-dot-color': '#426ddd',
          }}
        autoPlay="3000"
        defaultValue={defaultValue1}
        indicator
      >
        {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={item} onClick={() => console.log(index)} alt="" />
              </Swiper.Item>
            )
          })}
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### Asynchronous loading

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue1, setdefaultValue1] = useState(0)
  const [height, setHeight] = useState<any>(150)
  const [list, setList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      setList([
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ])
    }, 3000)
  }, [])
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        height={height}
        style={{
            '--nutui-indicator-color': '#426543',
            '--nutui-indicator-dot-color': '#426ddd',
          }}
        autoPlay="3000"
        defaultValue={defaultValue1}
        indicator
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### Dynamic loading

Support dynamic addition / deletion of pictures

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue1, setdefaultValue1] = useState(0)
  const [height, setHeight] = useState(150)
  const [list, setList] = useState([
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ])
  useEffect(() => {
    setTimeout(() => {
      list.splice(1, 1)
      setList(list.splice(1, 1))
    }, 3000)
  }, [])
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        height={height}
        style={{
            '--nutui-indicator-color': '#426543',
            '--nutui-indicator-dot-color': '#426ddd',
          }}
        autoPlay="3000"
        defaultValue={defaultValue1}
        indicator
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### Custom size

`width` Custom rotation size

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue2, setdefaultValue2] = useState(0)
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        width={300}
        height={150}
        defaultValue={defaultValue2}
      >
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </Swiper.Item>
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### Custom paging indicator

`indicator` Custom indicator

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue3, setdefaultValue3] = useState(0)
  const [current, setCurrent] = useState(1)
  const onChange3 = (e) => {
    setCurrent(e + 1)
  }
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        loop
        height={150}
        defaultValue={defaultValue3}
        onChange={onChange3}
        indicator={<div className="page"> {current}/4 </div>}
      >
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </Swiper.Item>
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### Manual switching

You can manually switch through `ref` (`prev`, `next`)

:::demo

```tsx
import React, { useState, useRef } from 'react'
import { Swiper, Icon } from '@nutui/nutui-react';

const App = () => {
  const swiperRef = React.useRef<any>(null)
  const [defaultValue6, setdefaultValue6] = useState(0)
  const [current2, setCurrent2] = useState(1)
  
  const onChange3 = (e) => {
    setCurrent(e + 1)
  }
  const handlePrev = () => {
    swiperRef.current.prev()
  }
  const handleNext = () => {
    swiperRef.current.next()
  }
  const pageStyle = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '46px',
    height: '22px',
    background: 'rgba(0, 0, 0, 0.33)',
    borderRadius: '22px',
    textAlign: 'center',
    color: '#fff',
    fontSize: '14px',
  }
  const btnsStyle = {
    width: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-15px)',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    height: '0px',
  }
  const spanStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  }
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
    <div className="demo-box" style={{ height: '150px', position: 'relative' }}>
      <Swiper
        height={150}
        ref={swiperRef}
        loop
        defaultValue={defaultValue6}
        onChange={(e) => setCurrent2(e + 1)}
        indicator={<div style={ pageStyle } > {current2}/4 </div>}
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
          )
        })}
      </Swiper>
      <div style={btnsStyle}>
        <span style={spanStyle} onClick={(e) => handlePrev()}>
          <Icon name="left" />
        </span>
        <span style={spanStyle} onClick={(e) => handleNext()}>
          <Icon name="right" />
        </span>
      </div>
    </div>
  )
}
export default App;
```

:::

### Vertical direction

`direction` Custom rotation direction

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue4, setdefaultValue4] = useState(0)
  const [current, setCurrent] = useState(1)
  const onChange3 = (e) => {
    setCurrent(e + 1)
  }
  return (
    <div className="demo-box vertical-center" style={{ height: '150px' }}>
      <Swiper
        loop
        defaultValue={defaultValue4}
        direction="vertical"
        autoPlay="3000"
        height="150"
        indicator
      >
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </Swiper.Item>
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### Horizontal center display

`isCenter` means it can be centered, and `width` must be passed at the same time

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue8, setdefaultValue8] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
   <div className="demo-box " style={{ height: '150px' }}>
      <Swiper
        defaultValue={defaultValue8}
        autoPlay="0"
        height="150"
        indicator
        width="280"
        center
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### Vertically centered display

`isCenter` means that it can be centered, and `height` must be passed

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue9, setdefaultValue9] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
    <div className="demo-box vertical-center" style={{ height: '150px' }}>
      <Swiper
        defaultValue={defaultValue9}
        direction="vertical"
        autoPlay="0"
        height="220"
        indicator
        center
        style={{ height: '280px' }}
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App;
```

:::

## Swiper

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| width | Width of rotation car | `number` \| `string` | `window.innerWidth` |
| height | Height of rotation card | `string` \| `number`  | `0` |
| direction | Rotation direction | `horizontal` \| `vertical` | `horizontal` |
| indicator | Whether the pagination indicator is displayed | `boolean` | `false` |
| loop | Whether to rotate | `boolean` | `true` |
| duration | Animation duration（Unit ms | `number` \| `string` | `500` |
| autoPlay | Automatic rotation duration, 0 means no automatic | `number` \| `string` | `0` |
| initPage | Initialize index value | `number` \| `string` | `0` |
| touchable | Is it possible to touch swipe | `boolean` | `true` |
| preventDefault | Whether to disable default events during swipe | `boolean` | `true` |
| stopPropagation | Whether to prohibit bubbling during sliding | `boolean` | `true` |
| center | Whether to display in the center, the corresponding `width` and `height` must be passed | `boolean` | `false` |
| onChange | Callback after card switching | `(current: number) => void` | `-` |

### Ref

| Property | Description | Type |
| --- | --- | --- |
| prev | Switch to previous page | `()=>void` |
| next | Switch to next page | `()=>void` |
| to | Switch to the specified rotation | `(index: number)=>void` |
| resize | This method can be called to trigger redraw when the size of the outer element or the display state of the component changes | `()=>void` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | The distance from the bottom of the pager | `12px` |