# Swiper 轮播

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

## 引入

```tsx
import { Swiper } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

`Swiper` 通过 CSS 的 `touch-action` 属性设置用户的操作行为，如果需要在水平滑动时也可垂直滑动页面，可通过 `Swiper` 的 `style` 属性进行设置。CSS 的 `touch-action` 属性可参考 [https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action](https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action)

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

### 自定义大小

`width` 自定义轮播大小

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

### 自定义分页指示器

`indicator` 表示自定义指示器

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

### 手动切换

可通过 `ref`调用 `prev`,`next` 进行切换

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

### 垂直方向

`direction` 自定义轮播方向

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

### 水平居中展示

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

### 垂直居中展示

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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| slideSize | 轮播卡片的尺寸 | `number` \| `string` | `-` |
| direction | 轮播方向 | `horizontal` \| `vertical` | `horizontal` |
| indicator | 分页指示器是否展示，可传入自定义的 HTML 结构 | `ReactNode` | `false` |
| loop | 是否循环轮播 | `boolean` | `true` |
| duration | 动画时长（单位是ms） | `number` \| `string` | `500` |
| autoPlay | 自动轮播时长，0表示不会自动轮播 | `number` \| `string` | `0` |
| defaultValue | 初始化索引值 | `number` \| `string` | `0` |
| touchable | 是否可触摸滑动 | `boolean` | `true` |
| onChange | 卡片切换后的回调 | `(current: number) => void` | `-` |

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| prev | 切换到上一页 | `()=>void` |
| next | 切换到下一页 | `()=>void` |
| to | 切换到指定轮播 | `(index: number)=>void` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | 分页器距离底部的距离 | `12px` |
| \--swiper-offset | 轮播容器的偏移 | `0` |
