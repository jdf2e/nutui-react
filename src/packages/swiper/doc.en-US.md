# Swiper

Often used in a group of pictures or card rotation.

## Import

```tsx
import { Swiper } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

`Swiper` sets the user's operation behavior through the CSS `touch-action` attribute. If you need to slide the page vertically when sliding horizontally, you can set it through the `style` attribute of `Swiper`. For the CSS `touch-action` attribute, please refer to [https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action)
:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const App = () => {
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        autoPlay
        loop
        slideSize={300}
        indicator
        style={{
          '--nutui-indicator-color': '#426543',
          '--nutui-indicator-dot-color': '#426ddd',
        }}
      >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::
:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const App = () => {
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper loop slideSize={300} effect={{ name: 'focus', scale: 0.9 }}>
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

### 异步加载

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Swiper } from '@nutui/nutui-react'

const App = () => {
  const [asyncList, setAsyncList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      setAsyncList([
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
      ])
    }, 300)
  }, [])
  return (
    <div className="demo-box" style={{ height: 150 }}>
      {setAsyncList.length ? (
        <Swiper>
          {asyncList.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={list[index]} alt={list[index]} draggable={false} />
              </Swiper.Item>
            )
          })}
        </Swiper>
      ) : null}
    </div>
  )
}
export default App
```

:::

### Custom size

`width` Custom rotation size

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const App = () => {
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper slideSize={250}>
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

### Custom paging indicator

`indicator` Custom indicator

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const App = () => {
  const [current, setCurrent] = useState(1)
  const onChange = (e) => {
    setCurrent(e + 1)
  }
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        onChange={onChange}
        indicator={<div className="page"> {current}/4 </div>}
      >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

### Manual switching

You can manually switch through `ref` (`prev`, `next`)

:::demo

```tsx
import React, { useState, useRef } from 'react'
import { Swiper, Icon } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
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
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box" style={{ height: '150px', position: 'relative' }}>
      <Swiper
        ref={swiperRef}
        defaultValue={defaultValue6}
        onChange={(e) => setCurrent2(e + 1)}
        loop
        indicator={<div style={pageStyle}> {current2}/4 </div>}
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
export default App
```

:::

### Vertical direction

`direction` Custom rotation direction

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const App = () => {
  return (
    <div className="demo-box vertical-center" style={{ height: '150px' }}>
      <Swiper loop direction="vertical">
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

### Horizontal center display

`isCenter` means it can be centered, and `width` must be passed at the same time

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const App = () => {
  const [defaultValue8, setdefaultValue8] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box " style={{ height: '150px' }}>
      <Swiper loop style={{ '--swiper-offset': '6%' }} slideSize={300}>
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

### Vertically centered display

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const App = () => {
  const [defaultValue9, setdefaultValue9] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box vertical-center" style={{ height: '150px' }}>
      <Swiper
        loop
        direction="vertical"
        style={{ '--swiper-offset': '13%' }}
        slideSize={120}
      >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

## Swiper

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| slideSize | Size of rotation card | `string` \| `number` | `-` |
| direction | Rotation direction | `horizontal` \| `vertical` | `horizontal` |
| indicator | Whether the pagination indicator is displayed | `boolean` | `false` |
| loop | Whether to rotate | `boolean` | `true` |
| duration | Animation duration（Unit ms | `number` \| `string` | `500` |
| autoPlay | Automatic rotation duration, 0 means no automatic | `number` \| `string` | `0` |
| defaultValue | Initialize index value | `number` \| `string` | `0` |
| touchable | Is it possible to touch swipe | `boolean` | `true` |
| onChange | Callback after card switching | `(current: number) => void` | `-` |

### Ref

| Property | Description | Type |
| --- | --- | --- |
| prev | Switch to previous page | `()=>void` |
| next | Switch to next page | `()=>void` |
| to | Switch to the specified rotation | `(index: number)=>void` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | The distance from the bottom of the pager | `12px` |
| \--swiper-offset | Offset of the carouse | `0` |
