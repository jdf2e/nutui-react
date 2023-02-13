# Animate 动画/动效

### 介绍

给子元素添加动画效果

### 安装

```ts
// react
import { Animate } from '@nutui/nutui-react';

```

### 点击触发

:::demo

```tsx
import React from 'react'
import { Animate, Button } from '@nutui/nutui-react'

const AnimateDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>点击触发</h2>
        <div className="ani-demo-div">
          <Animate type="slide-right" action="click">
            <Button type="primary">由右向左划入</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-left" action="click">
            <Button type="primary">由左向右划入</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-top" action="click">
            <Button type="primary">由上至下划入</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-bottom" action="click">
            <Button type="primary">由下至上划入</Button>
          </Animate>
        </div>
      </div>
    </>
  )
}

export default AnimateDemo
```

:::


### 循环动画

:::demo

```tsx
import React from 'react'
import { Animate, Button } from '@nutui/nutui-react'

const AnimateDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>循环动画</h2>
        <div className="ani-demo-div">
          <Animate type="shake" loop={true}>
            <Button type="primary">shake-抖动</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="ripple" loop={true}>
            <Button type="primary">ripple-心跳</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="breath" loop={true}>
            <Button type="primary">breath-呼吸灯</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="twinkle" loop={true}>
            <Button type="primary">twinkle-水波</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="flicker" loop={true}>
            <Button type="primary">flicker-擦亮</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="jump" loop={true}>
            <Button type="primary">jump-跳跃</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="float" loop={true}>
            <Button type="primary">float-漂浮</Button>
          </Animate>
        </div>
      </div>
    </>
  )
}

export default AnimateDemo

```

:::


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type         | 动画类型，见下方type值说明               | String | 'shake'                |
| action         | 触发方式，'initial'--初始化执行;  'click'--点击执行              | String | 'initial'             |
| loop         | 是否循环执行。true-循环执行;false-执行一次              | Boolean | false               |

### Events

| 方法名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onClick  | 点击元素时触发 | event: Event |

### type值说明

|    序号  |    参数名称     |      参数说明     |
|:-------|:------- | :----------|
| 1|   shake  | 抖动，建议loop为true
| 2 |   ripple  | 不循环则是放大后缩小，循环则是心跳
|3 |   breath  | 呼吸灯，建议loop为true
|4 |   float  | 漂浮，建议loop为true
|5|   slide-right  | 由右向左划入
|6 |   slide-left  | 由左向右划入
|7|   slide-top  | 由上至下划入
| 8 |   slide-bottom  | 由下至上划入
|9 |   jump  | 跳跃，建议loop为true
|10 |   twinkle  | 水波，建议loop为true
|11 |   flicker  | 擦亮按钮，建议loop为true