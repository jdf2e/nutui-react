# Swiper

### Intro

Often used in a group of pictures or card rotation.

### Install

```javascript
import { Swiper,SwiperItem } from '@nutui/nutui-react';
```


### Basic Usage

`autoPlay` Duration of automatic rotation
`initPage` Initial index value
`paginationVisible` Show paging indicator
`paginationColor` Indicator color customization
`onChange` When the card changes

:::demo
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage1, setInitPage1] = useState(0)
  const [height, setHeight] = useState<any>(150)
  const onChange = (e) => {
    // do something
  }
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        height={height}
        paginationColor="#426543"
        autoPlay="3000"
        initPage={initPage1}
        paginationVisible
        onChange={onChange}
      >
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </SwiperItem>
      </Swiper>
    </div>
  )
}
export default App;
```
:::
### Asynchronous loading

:::demo
``` tsx
import React, { useState, useEffect } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage1, setInitPage1] = useState(0)
  const [height, setHeight] = useState<any>(150)
  const [list, setList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      const arr: string[] = [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ]
      setList(arr)
    }, 3000)
  }, [])
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        height={height}
        paginationColor="#426543"
        autoPlay="3000"
        initPage={initPage1}
        paginationVisible
      >
        {list.map((item) => {
          return (
            <SwiperItem key={item}>
              <img src={item} alt="" />
            </SwiperItem>
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
``` tsx
import React, { useState, useEffect } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage1, setInitPage1] = useState(0)
  const [height, setHeight] = useState<any>(150)
  const [list, setList] = useState<string[]>([
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ])
  useEffect(() => {
    setTimeout(() => {
      const arr = list.slice()
      arr.splice(1, 1)
      setList(arr)
    }, 3000)
  }, [])
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        height={height}
        paginationColor="#426543"
        autoPlay="3000"
        initPage={initPage1}
        paginationVisible
      >
        {list.map((item) => {
          return (
            <SwiperItem key={item}>
              <img src={item} alt="" />
            </SwiperItem>
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
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage2, setInitPage2] = useState(0)
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        width={300}
        initPage={initPage2}
        loop={false}
        height={150}
      >
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </SwiperItem>
      </Swiper>
    </div>
  )
}
export default App;
```
:::

### Custom paging indicator

`pageContent` Custom indicator

:::demo
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage3, setInitPage3] = useState(0)
  const [current, setCurrent] = useState(1)
  const onChange3 = (e) => {
    setCurrent(e + 1)
  }
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        initPage={initPage3}
        loop
        height={150}
        onChange={onChange3}
        pageContent={<div className="page"> {current}/4 </div>}
      >
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </SwiperItem>
      </Swiper>
    </div>
  )
}
export default App;
```
:::

### Manual switching

You can manually switch through `api` (`prev`, `next`)

:::demo
``` tsx
import React, { useState, useRef } from 'react'
import { Swiper, SwiperItem, Icon } from '@nutui/nutui-react';

const App = () => {
  const swiperRef = React.useRef<any>(null)
  const [initPage6, setInitPage6] = useState(0)
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
        initPage={initPage6}
        onChange={(e) => setCurrent2(e + 1)}
        pageContent={<div style={ pageStyle } > {current2}/4 </div>}
      >
        {list.map((item) => {
          return (
            <SwiperItem key={item}>
              <img src={item} alt="" />
            </SwiperItem>
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
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage4, setInitPage4] = useState(0)
  const [current, setCurrent] = useState(1)
  const onChange3 = (e) => {
    setCurrent(e + 1)
  }
  return (
    <div className="demo-box vertical-center" style={{ height: '150px' }}>
      <Swiper
        loop
        initPage={initPage4}
        direction="vertical"
        autoPlay="3000"
        height="150"
        paginationVisible
      >
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </SwiperItem>
        <SwiperItem >
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </SwiperItem>
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
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage8, setInitPage8] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
   <div className="demo-box " style={{ height: '150px' }}>
      <Swiper
        loop={false}
        initPage={initPage8}
        autoPlay="0"
        height="150"
        paginationVisible
        width="280"
        isCenter
      >
        {list.map((item) => {
          return (
            <SwiperItem key={item}>
              <img src={item} alt="" />
            </SwiperItem>
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
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage9, setInitPage9] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
    <div className="demo-box vertical-center" style={{ height: '150px' }}>
      <Swiper
        loop={false}
        initPage={initPage9}
        direction="vertical"
        autoPlay="0"
        height="220"
        paginationVisible
        isCenter
        style={{ height: '280px' }}
      >
        {list.map((item) => {
          return (
            <SwiperItem key={item}>
              <img src={item} alt="" />
            </SwiperItem>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App;
```
:::

## API

### Props

| Attribute                   | Description          | Type           | Default      |
| ----------------- | -------------------------------------- | ------------------------- | ----------------- |
| width             | Width of rotation car                         | Number \| String          | window.innerWidth |
| height            | Height of rotation card                         | String \| Number          | 0                 |
| direction         | Rotation direction, optional value：`horizontal`,`vertical` | String                    | 'horizontal'      |
| paginationVisible | Whether the pagination indicator is displayed                     | Boolean                   | false             |
| paginationColor   | Pagination indicator selected color                   | String                    | '#fff'            |
| loop              | Whether to rotate                             | Boolean                   | true              |
| duration          | Animation duration（Unit ms                 | Number \| String          | 500               |
| autoPlay          | Automatic rotation duration, 0 means no automatic        | Number \| String          | 0                 |
| initPage          | Initialize index value                          | Number \| String          | 0                 |
| touchable         | Is it possible to touch swipe                         | Boolean                   | true              |
| pageContent       | Custom indicator                           | String \| React.ReactNode | -                 |
| isPreventDefault  | Whether to disable default events during swipe             | Boolean                   | true              |
| isStopPropagation | Whether to prohibit bubbling during sliding                 | Boolean                   | true              |
| isCenter | Whether to display in the center, the corresponding `width` and `height` must be passed                 | Boolean                   | false              |



### Events

| Event           | Description                   | Arguments     |
| -------- | ---------------- | --------------- |
| onChange | Callback after card switching | Current index value |



### API

| Event           | Description                   | Arguments     |
| ------ | -------------- | ------------ |
| prev   | Switch to previous page   | -            |
| next   | Switch to next page    | -            |
| to     | Switch to the specified rotation | index:number |