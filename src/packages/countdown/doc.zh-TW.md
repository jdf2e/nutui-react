#  CountDown组件

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

### 安装

```javascript
import { CountDown } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 50 * 1000,
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

### 显示天

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 50 * 1000,
  })
  return (
     <Cell>
        <CountDown endTime={stateRef.current.endTime} showDays />
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
import { Cell, CountDown } from '@nutui/nutui-react';

const App = () => {
  const stateRef = useRef({
    serverTime: Date.now() - 30 * 1000,
    endTime: Date.now() + 50 * 1000,
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

### 显示为天时分秒

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 50 * 1000,
  })
  return (
     <Cell>
        <CountDown showDays showPlainText endTime={stateRef.current.endTime} />
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
import { Cell, CountDown } from '@nutui/nutui-react';

const App = () => {
  const [asyncEnd, setAsyncEnd] = useState(0)
  const stateRef = useRef({
    timer: null,
    endTime: Date.now() + 50 * 1000,
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
        <CountDown showPlainText endTime={asyncEnd} />
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
import { Cell, CountDown } from '@nutui/nutui-react';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 50 * 1000,
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
import { Cell, CountDown } from '@nutui/nutui-react';

const [resetTime, setResetTime] = useState({
    d: '1',
    h: '00',
    m: '00',
    s: '00',
})
const stateRef = useRef({
    endTime: Date.now() + 50 * 1000,
})
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


## API

### Props

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| startTime | 开始时间 | String, Number | Date.now()
| endTime | 结束时间 | String, Number | Date.now()
| showDays | 是否显示天 | Boolean | false
| showPlainText | 显示为纯文本 | Boolean | false
| paused | 是否暂停 | Boolean | false


### Event

| 字段 | 说明 | 回调参数
| ----- | ----- | ----- 
| onEnd | 倒计时结束时回调函数 | 无
| onPaused | 暂停倒计时回调函数 | 剩余时间戳
| onRestart | 重新开始倒计时回调函数 | 剩余时间戳
| onUpdate | 自定义展示内容时，实时更新倒计时数据回调函数 | 倒计时实时数据


