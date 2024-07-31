---
sidebar_class_name: hasIcon
---

# CountDown 倒计时

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用于实时展示倒计时数值，支持毫秒精度。

## 引入

```tsx
import { CountDown } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  const onEnd = () => {
    console.log('countdown: ended.')
  }
  return (
    <>
      <Cell>
        <CountDown endTime={stateRef.current.endTime} onEnd={onEnd} />
      </Cell>
      <Cell>
        <CountDown
          endTime={stateRef.current.endTime}
          type="primary"
          onEnd={onEnd}
        />
      </Cell>
    </>
  )
}
export default Demo1
```

### 剩余时间用法

```tsx
import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const stateRef = useRef({
    remainingTime: 60 * 1000,
  })
  return (
    <Cell>
      <CountDown remainingTime={stateRef.current.remainingTime} />
    </Cell>
  )
}
export default Demo2
```

### 自定义格式

```tsx
import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
    <Cell>
      <CountDown endTime={stateRef.current.endTime} format="DD天HH时mm分ss秒" />
    </Cell>
  )
}
export default Demo3
```

### 毫秒级渲染

```tsx
import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
    <Cell>
      <CountDown
        endTime={stateRef.current.endTime}
        millisecond
        format="HH:mm:ss:SS"
      />
    </Cell>
  )
}
export default Demo4
```

### 以服务端的时间为准

```tsx
import React, { useRef } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const stateRef = useRef({
    serverTime: Date.now() - 20 * 1000,
    endTime: Date.now() + 60 * 1000,
  })
  return (
    <Cell>
      <CountDown
        startTime={stateRef.current.serverTime}
        endTime={stateRef.current.endTime}
      />
    </Cell>
  )
}
export default Demo5
```

### 异步更新结束时间

```tsx
import React, { useEffect, useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [asyncEnd, setAsyncEnd] = useState(0)
  const stateRef = useRef({
    timer: -1,
    endTime: Date.now() + 60 * 1000,
  })
  useEffect(() => {
    stateRef.current.timer = window.setTimeout(() => {
      setAsyncEnd(Date.now() + 30 * 1000)
    }, 3000)
    return () => {
      clearTimeout(stateRef.current.timer)
    }
  }, [])
  return (
    <Cell>
      <CountDown endTime={asyncEnd} />
    </Cell>
  )
}
export default Demo6
```

### 控制开始和暂停的倒计时

```tsx
import React, { useRef, useState } from 'react'
import { Cell, CountDown, Button } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  const [paused, setPaused] = useState(false)
  const toggle = () => {
    console.log(paused)
    setPaused(!paused)
  }
  const onpaused = (v: number) => {
    console.log('paused: ', v)
  }
  const onrestart = (v: number) => {
    console.log('restart: ', v)
  }
  return (
    <Cell
      align="center"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <CountDown
        endTime={stateRef.current.endTime}
        paused={paused}
        onPaused={onpaused}
        onRestart={onrestart}
      />
      <Button type="primary" size="small" onClick={() => toggle()}>
        {paused ? 'start' : 'stop'}
      </Button>
    </Cell>
  )
}
export default Demo7
```

### 自定义展示

```tsx
import React, { useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const partItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fa2c19',
  color: '#fff',
  ...{
    width: pxTransform(20),
    height: pxTransform(25),
    fontSize: pxTransform(14),
    borderRadius: pxTransform(6),
  },
}
const partItemSymbolStyle = {
  marginLeft: pxTransform(5),
  marginRight: pxTransform(5),
}

const Demo8 = () => {
  const onUpdate = (v: any) => {
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
      <CountDown endTime={stateRef.current.endTime} onUpdate={onUpdate}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={partItemStyle}>{resetTime.d}</View>
          <View style={partItemSymbolStyle}>天</View>
          <View style={partItemStyle}>{resetTime.h}</View>
          <View style={partItemSymbolStyle}>:</View>
          <View style={partItemStyle}>{resetTime.m}</View>
          <View style={partItemSymbolStyle}>:</View>
          <View style={partItemStyle}>{resetTime.s}</View>
        </View>
      </CountDown>
    </Cell>
  )
}
export default Demo8
```

### 手动控制

通过 ref 获取到组件实例后，可以调用 start、pause、reset 方法。在使用手动控制时，通过 time 属性实现倒计时总时长，单位为毫秒。startTime、endTime 属性失效。

```tsx
import React, { useRef } from 'react'
import { Cell, CountDown, Button, Grid } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

interface countdownRefState {
  start: () => void
  pause: () => void
  reset: () => void
}
const Demo9 = () => {
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

      <Grid columns={3} style={{ marginBottom: pxTransform(5) }}>
        <Grid.Item>
          <Button type="primary" onClick={start}>
            开始
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button type="primary" onClick={pause}>
            暂停
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button type="primary" onClick={reset}>
            重置
          </Button>
        </Grid.Item>
      </Grid>
    </>
  )
}
export default Demo9
```

## CountDown

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
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
| :--- | :--- |
| DD | 天数 |
| HH | 小时 |
| mm | 分钟 |
| ss | 秒数 |
| S | 毫秒（1位） |
| SS | 毫秒（2位） |
| SSS | 毫秒（3位） |

### Ref

| 属性 | 说明 | 类型 |
| :--- | :--- | :--- |
| start | 开始倒计时 | `() => void` |
| pause | 暂停倒计时 | `() => void` |
| reset | 重设倒计时，若 auto-start 为 true，重设后会自动开始倒计时 | `() => void` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-countdown-display | 倒计时的布局方式 | `flex` |
| \--nutui-countdown-color | 倒计时的文字颜色 | `$color-primary` |
| \--nutui-countdown-font-size | 倒计时的字体大小 | `10px` |
| \--nutui-countdown-font-weight | 倒计时的字体粗细 | `400` |
| \--nutui-countdown-width | 倒计时的时间区域宽度 | `20px` |
| \--nutui-countdown-height | 倒计时的时间区域高度 | `14px` |
| \--nutui-countdown-number-padding | 倒计时的时间区域padding | `0 1px` |
| \--nutui-countdown-number-margin | 倒计时的时间区域margin | `0 2px` |
| \--countdown-number-border-radius | 倒计时的时间区域圆角大小 | `2px` |
| \--nutui-countdown-color | 倒计时的时间区域的文字颜色 | `$color-primary-light` |
| \--nutui-countdown-background-color | 倒计时的时间区域的背景颜色 | `$color-primary` |
| \--nutui-countdown-border-color | 倒计时的时间区域的边框颜色颜色 | `$color-primary` |
| \--nutui-countdown-primary-color | type为`primary`时，倒计时的时间区域的文字颜色 | `#FFFFFF` |
| \--nutui-countdown-primary-background-color | type为`primary`时，倒计时的时间区域的背景颜色 | `$color-primary` |
| \--nutui-countdown-primary-border-color | type为`primary`时，倒计时的时间区域的边框颜色颜色 | `$color-primary` |
