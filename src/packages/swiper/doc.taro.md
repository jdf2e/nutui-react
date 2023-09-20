# Swiper 轮播

## 介绍

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

## 安装

```tsx
import { Swiper } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react-taro';

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
]
const App = () => {
  return (
    <Swiper
      defaultValue={0}
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
  )
}
export default App;
```

:::

### 异步加载

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Swiper } from '@nutui/nutui-react-taro';

const App = () => {
  const [initPage1, setInitPage1] = useState(0)
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
        defaultValue={initPage1}
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
import { Swiper } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Swiper width={300} height={150} defaultValue={0}>
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
  )
}
export default App;
```

:::

### 自定义分页指示器

`pageContent` 表示自定义指示器

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react-taro';

const App = () => {
  const [current, setCurrent] = useState(0)
  const onChange3 = (e) => {
    setCurrent(e.detail.current)
  }
  return (
      <Swiper
        defaultValue={0}
        onChange={onChange3}
        pageContent={<div className="page"> {current + 1}/4 </div>}
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
  )
}
export default App;
```

:::

### 手动切换

可通过 `API`(`prev`,`next`)进行手动切换

:::demo

```tsx
import React, { useState, useRef } from 'react'
import { Swiper, Icon } from '@nutui/nutui-react-taro';

const App = () => {
  const swiperRef = React.useRef<any>(null)
  const [current2, setCurrent2] = useState(0)
  
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
        ref={swiperRef}
        defaultValue={initPage6}
        onChange={(e) => setCurrent2(e.detail.current)}
        indicator={<div style={ pageStyle } >{current2}/4</div>}
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
import { Swiper } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <div className="demo-box vertical-center" style={{ height: '150px' }}>
      <Swiper
        defaultValue={0}
        direction="vertical"
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

`isCenter` 代表可居中，同时必须传 `width`

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react-taro';

const App = () => {
  const [initPage8, setInitPage8] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
    <Swiper defaultValue={0} loop previousMargin="20px" nextMargin="20px">
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
  )
}
export default App;
```

:::

### 垂直居中展示

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react-taro';

const App = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
    <Swiper
        height={220}
        defaultValue={0}
        direction="vertical"
        previousMargin="20px"
        nextMargin="20px"
      >
      {list.map((item) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
  )
}
export default App;
```

:::

## Swiper

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 轮播卡片的宽度 | `number` | `-` |
| height | 轮播卡片的高度 | `number` | `-` |
| direction | 轮播方向 | `horizontal` \| `vertical` | `horizontal` |
| indicator | 分页指示器是否展示 | `boolean` | `false` |
| loop | 是否循环轮播 | `boolean` | `true` |
| autoPlay | 自动轮播 | `boolean` | `false` |
| defaultValue | 初始化索引值 | `number` | `0` |
| onChange | 卡片切换后的回调 | `(current: number) => void` | `-` |

> Swiper 是对 Taro Swiper 进行的封装，可以支持 Taro Swiper 属性的透传。具体支持属性可参考[https://taro-docs.jd.com/docs/components/viewContainer/swiper](https://taro-docs.jd.com/docs/components/viewContainer/swiper)

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