# CountDown 倒计时

## 介绍

用于实时展示倒计时数值，支持毫秒精度。

## 安装

```tsx
import { CountDown } from '@nutui/nutui-react-taro'
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react-taro';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  const onEnd = () => {
    console.log('countdown: ended.')
  }
  return (
     <Cell>
        <CountDown endTime={stateRef.current.endTime} onEnd={onEnd} />
    </Cell>
  );
};
export default App;
```

:::

### 剩余时间用法

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react-taro';

const App = () => {
  const stateRef = useRef({
    remainingTime:  60 * 1000,
  })
  return (
     <Cell>
         <CountDown remainingTime={stateRef.current.remainingTime} />
    </Cell>
  );
};
export default App;
```

:::

### 自定义格式

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react-taro';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
     <Cell>
        <CountDown endTime={stateRef.current.endTime} format="DD 天 HH 时 mm 分 ss 秒"/>
    </Cell>
  );
};
export default App;
```

:::

### 毫秒级渲染

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react-taro';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
     <Cell>
        <CountDown endTime={stateRef.current.endTime} millisecond format="HH:mm:ss:SS"
        />
    </Cell>
  );
};
export default App;
```

:::

### 以服务端的时间为准

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react-taro';

const App = () => {
  const stateRef = useRef({
    serverTime: Date.now() - 20 * 1000,
    endTime: Date.now() + 60 * 1000,
  })
  return (
    <Cell>
        <CountDown startTime={stateRef.current.serverTime} endTime={stateRef.current.endTime} />
    </Cell>
  );
};
export default App;
```

:::

### 异步更新结束时间

:::demo

```tsx
import React, { useEffect, useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro';

const App = () => {
  const [asyncEnd, setAsyncEnd] = useState(0)
  const stateRef = useRef({
    timer: -1,
    endTime: Date.now() + 60 * 1000,
  })
  useEffect(() => {
    stateRef.current.timer = setTimeout(() => {
      setAsyncEnd(Date.now() + 30 * 1000)
    }, 3000)
    return () => {
      clearTimeout(stateRef.current.timer)
    }
  }, [])
  return (
    <Cell>
        <CountDown  endTime={asyncEnd} />
    </Cell>
  );
};
export default App;
```

:::

### 控制开始和暂停的倒计时

:::demo

```tsx
import React, {  useRef, useState } from 'react'
import { Cell, CountDown, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  const [paused, setPaused] = useState(false)
  const toggle = () => {
    console.log(paused)
    setPaused(!paused)
  }
  const onpaused = (v) => {
    console.log('paused: ', v)
  }
  const onrestart = (v) => {
    console.log('restart: ', v)
  }
  return (
    <Cell>
        <CountDown
            endTime={stateRef.current.endTime}
            paused={paused}
            onPaused={onpaused}
            onRestart={onrestart}
          />
          <div style={{ position: 'absolute', right: '10px', top: '9px' }}>
            <div onClick={() => toggle()}>
              <Button type="primary" size="small">
                {paused ? 'start' : 'stop'}
              </Button>
            </div>
          </div>
    </Cell>
  );
};
export default App;
```

:::

### 自定义展示

:::demo

```tsx
import React, {  useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro';

const partItemStyle = {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '25px',
    background: '#e8220e',
    color: '#fff',
    fontSize: '14px',
    borderRadius: '6px',
}
const partItemSymbolStyle = {
    margin: '0 5px',
}
const App = () => {
  const onUpdate = (v) => {
    setResetTime(v)
  }
  const [resetTime, setResetTime] = useState({
    d: '1',
    h: '00',
    m: '00',
    s: '00',
  })
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  
  return (
    <Cell>
        <span>
        <CountDown endTime={stateRef.current.endTime} onUpdate={onUpdate}>
            <div className="countdown-part-box" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="part-item-symbol" style={partItemSymbolStyle}>
                {resetTime.d}天
            </div>
            <div className="part-item h" style={partItemStyle}>
                {resetTime.h}
            </div>
            <span className="part-item-symbol" style={partItemSymbolStyle}>
                :
            </span>
            <div className="part-item m" style={partItemStyle}>
                {resetTime.m}
            </div>
            <span className="part-item-symbol" style={partItemSymbolStyle}>
                :
            </span>
            <div className="part-item s" style={partItemStyle}>
                {resetTime.s}
            </div>
            </div>
        </CountDown>
        </span>
    </Cell>
  );
};
export default App;
```

:::

### 手动控制

通过 ref 获取到组件实例后，可以调用 start、pause、reset 方法。在使用手动控制时，通过 time 属性实现倒计时总时长，单位为毫秒。startTime、endTime 属性失效。

:::demo

```tsx
import React, {  useRef } from 'react'
import { Cell, CountDown, Grid, GridItem, Button } from '@nutui/nutui-react-taro';

const App = () => {
  
  const countDownRef = useRef<countdownRefState>(null)
  const start = () => {
    console.log(countDownRef.current)
    countDownRef.current && countDownRef.current.start()
  }

  const pause = () => {
    countDownRef.current && countDownRef.current.pause()
  }

  const reset = () => {
    countDownRef.current && countDownRef.current.reset()
  }
  return (
    <>
    <Cell>
          <CountDown
            format="ss:SS"
            autoStart={false}
            time={20000}
            ref={countDownRef}
          />
        </Cell>
        <Grid columns="3">
          <GridItem>
            <Button type="primary" onClick={start}>
              开始
            </Button>
          </GridItem>
          <GridItem>
            <Button type="primary" onClick={pause}>
              暂停
            </Button>
          </GridItem>
          <GridItem>
            <Button type="primary" onClick={reset}>
              重置
            </Button>
          </GridItem>
        </Grid>
    </>
  );
};
export default App;
```

:::

## CountDown

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| startTime | 开始时间 | `number` | `Date.now()` |
| endTime | 结束时间 | `number` | `Date.now()` |
| remainingTime | 剩余时间，单位是毫秒 | `number` | `0` |
| paused | 是否暂停 | `boolean` | `false` |
| format | 时间格式 | `string` | `HH:mm:ss` |
| millisecond | 是否开启毫秒级渲染 | `boolean` | `false` |
| autoStart | 是否自动开始倒计时 | `boolean` | `true` |
| time | 倒计时显示时间，单位是毫秒。autoStart 为 false 时生效 | `number` | `0` |
| destroy | 销毁实例 | `boolean` | `false` |
| onEnd | 倒计时结束时回调函数 | `无` | `-` |
| onPaused | 暂停倒计时回调函数 | `onPaused: (restTime: number) => void` | `-` |
| onRestart | 重新开始倒计时回调函数 | `onRestart: (restTime: number) => void` | `-` |
| onUpdate | 自定义展示内容时，实时更新倒计时数据回调函数 | `onUpdate: (restTime: any) => void` | `-` |

### format 格式

| 格式 | 说明 |
| --- | --- |
| DD | 天数 |
| HH | 小时 |
| mm | 分钟 |
| ss | 秒数 |
| S | 毫秒（1位） |
| SS | 毫秒（2位） |
| SSS | 毫秒（3位） |

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| start | 开始倒计时 | `() => void` |
| pause | 暂停倒计时 | `() => void` |
| reset | 重设倒计时，若 auto-start 为 true，重设后会自动开始倒计时 | `() => void` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-countdown-display | 倒计时的布局方式 | `flex` |
| \--nutui-countdown-color | 倒计时的文字颜色 | `$gray1` |
| \--nutui-countdown-font-size | 倒计时的字体大小 | `14px` |