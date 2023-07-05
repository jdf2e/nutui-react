# CountDown

## Intro

Used to display the countdown value in real time, and precision supports milliseconds.

## Install

```tsx
import { CountDown } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react';

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

### Remaining Time Usage

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react';

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

### Custom format

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
     <Cell>
        <CountDown endTime={stateRef.current.endTime} format="DD Day HH : mm : ss" />
    </Cell>
  );
};
export default App;
```

:::

### Millisecond

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react';

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

### Server Time Prevails

:::demo

```tsx
import  React, {useRef }from "react";
import { Cell, CountDown } from '@nutui/nutui-react';

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

### End-Time of Asyn Update

:::demo

```tsx
import React, { useEffect, useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react';

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

### Controls start and pause countdowns

:::demo

```tsx
import React, {  useRef, useState } from 'react'
import { Cell, CountDown, Button } from '@nutui/nutui-react';

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

### Custom Presentation

:::demo

```tsx
import React, {  useRef, useState } from 'react'
import { Cell, CountDown } from '@nutui/nutui-react';

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

### Manual Control

Paused and restarted the countdown with the paused attribute

:::demo

```tsx
import React, {  useRef } from 'react'
import { Cell, CountDown, Grid, GridItem, Button } from '@nutui/nutui-react';

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
              start
            </Button>
          </GridItem>
          <GridItem>
            <Button type="primary" onClick={pause}>
              paused
            </Button>
          </GridItem>
          <GridItem>
            <Button type="primary" onClick={reset}>
              reset
            </Button>
          </GridItem>
        </Grid>
    </>
  );
};
export default App;
```

:::

## CountDowm

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| startTime | Start Time | `number` | `Date.now()` |
| endTime | End Time | `number` | `Date.now()` |
| remainingTime | Remaining time, unit milliseconds | `number` | `0` |
| paused | Paused | `boolean` | `false` |
| format | Format Time | `string` | `HH:mm:ss` |
| millisecond | Whether to enable millisecond render | `boolean` | `false` |
| autoStart | Whether to auto start count down | `boolean` | `true` |
| time | Total time, unit milliseconds | `number` | `0` |
| destroy | destroy instance | `boolean` | `false` |
| onPaused | Emitted when count down paused | `onPaused: (restTime: number) => void` | `-` |
| onRestart | Emitted when count down restart | `onRestart: (restTime: number) => void` | `-` |
| onUpdate | Real-time update of the countdown data callback function | `onUpdate: (restTime: any) => void` | `-` |

### Format

| Name | Description |
| --- | --- |
| DD | Day |
| HH | Hour |
| mm | Minute |
| ss | Second |
| S | Millisecond, 1-digit |
| SS | Millisecond, 2-digits |
| SSS | Millisecond, 3-digits |

### Ref

| Property | Description | Type |
| --- | --- | --- |
| start | Count Down Start | `() => void` |
| pause | Count Down Pause | `() => void` |
| reset | Count Down Reset | `() => void` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-countdown-display | display mode of countdown | `flex` |
| \--nutui-countdown-color | Countdown text color | `$gray1` |
| \--nutui-countdown-font-size | The font size of the countdown | `14px` |