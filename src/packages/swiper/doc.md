# Swiper 轮播

### 介绍

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

### 安装

```javascript
import { Swiper,SwiperItem } from '@nutui/nutui-react';
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
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage1, setInitPage1] = useState(0)
  const [height, setHeight] = useState<any>(150)
  const onChange = (e) => {
    // do something
  }
  return (
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
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage2, setInitPage2] = useState(0)
  return (
    <Swiper
      width={300}
      initPage={initPage2}
      loop={false}
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
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage3, setInitPage3] = useState(0)
  const [current, setCurrent] = useState(1)
  const onChange3 = (e) => {
    setCurrent(e + 1)
  }
  return (
    <Swiper
      initPage={initPage3}
      loop
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
import { Swiper,SwiperItem } from '@nutui/nutui-react';

const App = () => {
  const [initPage4, setInitPage4] = useState(0)
  const [current, setCurrent] = useState(1)
  const onChange3 = (e) => {
    setCurrent(e + 1)
  }
  return (
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
  )
}
export default App;
```
:::

## API

### Props

| 参数              | 说明                                   | 类型                      | 默认值            |
| ----------------- | -------------------------------------- | ------------------------- | ----------------- |
| width             | 轮播卡片的宽度                         | Number \| String          | window.innerWidth |
| height            | 轮播卡片的高度                         | String \| Number          | 0                 |
| direction         | 轮播方向,可选值`horizontal`,`vertical` | String                    | 'horizontal'      |
| paginationVisible | 分页指示器是否展示                     | Boolean                   | false             |
| paginationColor   | 分页指示器选中的颜色                   | String                    | '#fff'            |
| loop              | 是否循环轮播                           | Boolean                   | true              |
| duration          | 动画时长（单位是ms）                   | Number \| String          | 500               |
| autoPlay          | 自动轮播时长，0表示不会自动轮播        | Number \| String          | 0                 |
| initPage          | 初始化索引值                           | Number \| String          | 0                 |
| touchable         | 是否可触摸滑动                         | Boolean                   | true              |
| pageContent       | 自定义指示器                           | String \| React.ReactNode | -                 |
| isPreventDefault  | 滑动过程中是否禁用默认事件             | Boolean                   | true              |
| isStopPropagation | 滑动过程中是否禁止冒泡                 | Boolean                   | true              |



### Events

| 事件名   | 说明             | 回调参数        |
| -------- | ---------------- | --------------- |
| onChange | 卡片切换后的回调 | 当前索引值index |



### API

| 事件名 | 说明           | 参数         |
| ------ | -------------- | ------------ |
| prev   | 切换到上一页   | -            |
| next   | 切换到下一页   | -            |
| to     | 切换到指定轮播 | index:number |