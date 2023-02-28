# Swiper 轮播

### 介绍

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

### 安装

```javascript
import { Swiper, SwiperItem } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

`autoPlay` 自动轮播的时长
`initPage` 初始索引值
`paginationVisible` 是否显示分页指示器
`paginationColor` 指示器颜色自定义
`onChange` 当卡片发生变化

:::demo
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react-taro';

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
### 异步加载

:::demo
``` tsx
import React, { useState, useEffect } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react-taro';

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

### 动态加载

支持动态增加/删除图片

:::demo
``` tsx
import React, { useState, useEffect } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react-taro';

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

### 自定义大小

`width` 自定义轮播大小
:::demo
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react-taro';

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

### 自定义分页指示器

`pageContent` 表示自定义指示器

:::demo
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react-taro';

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

### 手动切换

可通过 `API`(`prev`,`next`)进行手动切换

:::demo
``` tsx
import React, { useState, useRef } from 'react'
import { Swiper, SwiperItem, Icon } from '@nutui/nutui-react-taro';

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

### 垂直方向

`direction` 自定义轮播方向

:::demo
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react-taro';

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


### 水平居中展示

`isCenter` 代表可居中，同时必须传 `width`

:::demo
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react-taro';

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
### 垂直居中展示

`isCenter` 代表可居中，同时必须传 `height`

:::demo
``` tsx
import React, { useState } from 'react'
import { Swiper,SwiperItem } from '@nutui/nutui-react-taro';

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

| 参数              | 说明                                   | 类型                      | 默认值            |
| ----------------- | -------------------------------------- | ------------------------- | ----------------- |
| width             | 轮播卡片的宽度                         | number \| string          | `window.innerWidth` |
| height            | 轮播卡片的高度                         | string \| number          | `0`                 |
| direction         | 轮播方向,可选值`horizontal`,`vertical` | string                    | `horizontal`      |
| paginationVisible | 分页指示器是否展示                     | boolean                   | `false`             |
| paginationColor   | 分页指示器选中的颜色                   | string                    | `#fff`            |
| loop              | 是否循环轮播                           | boolean                   | `true`              |
| duration          | 动画时长（单位是ms）                   | number \| string          | `500`               |
| autoPlay          | 自动轮播时长，0表示不会自动轮播        | number \| string          | `0`                 |
| initPage          | 初始化索引值                           | number \| string          | `0`                 |
| touchable         | 是否可触摸滑动                         | boolean                   | `true`              |
| pageContent       | 自定义指示器                           | string \| ReactNode | -                 |
| isPreventDefault  | 滑动过程中是否禁用默认事件             | boolean                   | `true`              |
| isStopPropagation | 滑动过程中是否禁止冒泡                 | boolean                   | `true`              |
| isCenter`v1.3.0` | 是否居中展示，必须传对应的`width` 和 `height`                  | boolean                   | `false`              |



### Events

| 事件名   | 说明             | 回调参数        |
| -------- | ---------------- | --------------- |
| onChange | 卡片切换后的回调 | 当前索引值index |



### API

| 事件名 | 说明           | 参数         |
| ------ | -------------- | ------------ |
| prev   | 切换到上一页   | -            |
| next   | 切换到下一页   | -            |
| to     | 切换到指定轮播 | `index: number` |
| resize`1.4.7`     | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-swiper-pagination-bottom | `12px`|
| --nutui-swiper-pagination-item-background-color | `#ddd` |
| --nutui-swiper-pagination-item-width | `8px` |
| --nutui-swiper-pagination-item-height | `3px` |
| --nutui-swiper-pagination-item-margin-right | `7px` |
| --nutui-swiper-pagination-item-border-radius | `2px` |
