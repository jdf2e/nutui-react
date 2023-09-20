# Swiper 轮播

## 介绍

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

## 安装

```tsx
import { Swiper } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

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

### 异步加载

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

### 动态加载

支持动态增加/删除图片

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

### 自定义大小

`width` 自定义轮播大小 

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

### 自定义分页指示器

`indicator` 表示自定义指示器

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

### 手动切换

可通过 `ref`调用 `prev`,`next` 进行切换

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

### 垂直方向

`direction` 自定义轮播方向

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

### 水平居中展示

`center` 代表可居中，同时必须传 `width`

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

### 垂直居中展示

`center` 代表可居中，同时必须传 `height`

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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 轮播卡片的宽度 | `number` \| `string` | `window.innerWidth` |
| height | 轮播卡片的高度 | `number` \| `string` | `0` |
| direction | 轮播方向 | `horizontal` \| `vertical` | `horizontal` |
| indicator | 分页指示器是否展示，可传入自定义的 HTML 结构 | `ReactNode` | `false` |
| loop | 是否循环轮播 | `boolean` | `true` |
| duration | 动画时长（单位是ms） | `number` \| `string` | `500` |
| autoPlay | 自动轮播时长，0表示不会自动轮播 | `number` \| `string` | `0` |
| defaultValue | 初始化索引值 | `number` \| `string` | `0` |
| touchable | 是否可触摸滑动 | `boolean` | `true` |
| preventDefault | 滑动过程中是否禁用默认事件 | `boolean` | `true` |
| stopPropagation | 滑动过程中是否禁止冒泡 | `boolean` | `true` |
| center | 是否居中展示，必须传对应的`width` 和 `height` | `boolean` | `false` |
| onChange | 卡片切换后的回调 | `(current: number) => void` | `-` |

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| prev | 切换到上一页 | `()=>void` |
| next | 切换到下一页 | `()=>void` |
| to | 切换到指定轮播 | `(index: number)=>void` |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | `()=>void` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | 分页器距离底部的距离 | `12px` |