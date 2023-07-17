# CountDown 倒計時

## 介紹

用於實時展示倒計時數值，支持毫秒精度。

## 安裝

```tsx
import { CountDown } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

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

### 剩余時間用法

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

### 自定義格式

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
        <CountDown endTime={stateRef.current.endTime} format="DD 天 HH 時 mm 分 ss 秒"/>
    </Cell>
  );
};
export default App;
```

:::

### 毫秒級渲染

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

### 以服務端的時間為準

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

### 異步更新結束時間

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

### 控製開始和暫停的倒計時

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

### 自定義展示

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

### 手動控製

通過 ref 獲取到組件實例後，可以調用 start、pause、reset 方法。在使用手動控製時，通過 time 屬性實現倒計時總時長，單位為毫秒。startTime、endTime 屬性失效。

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
              開始
            </Button>
          </GridItem>
          <GridItem>
            <Button type="primary" onClick={pause}>
              暫停
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| startTime | 開始時間 | `number` | `Date.now()` |
| endTime | 結束時間 | `number` | `Date.now()` |
| remainingTime | 剩余時間，單位是毫秒 | `number` | `0` |
| paused | 是否暫停 | `boolean` | `false` |
| format | 時間格式 | `string` | `HH:mm:ss` |
| millisecond | 是否開啟毫秒級渲染 | `boolean` | `false` |
| autoStart | 是否自動開始倒計時 | `boolean` | `true` |
| time | 倒計時顯示時間，單位是毫秒。autoStart 為 false 時生效 | `number` | `0` |
| destroy | 銷毀實例 | `boolean` | `false` |
| onEnd | 倒計時結束時回調函數 | `無` | `-` |
| onPaused | 暫停倒計時回調函數 | `onPaused: (restTime: number) => void` | `-` |
| onRestart | 重新開始倒計時回調函數 | `onRestart: (restTime: number) => void` | `-` |
| onUpdate | 自定義展示內容時，實時更新倒計時數據回調函數 | `onUpdate: (restTime: any) => void` | `-` |

### format 格式

| 格式 | 說明 |
| --- | --- |
| DD | 天數 |
| HH | 小時 |
| mm | 分鐘 |
| ss | 秒數 |
| S | 毫秒（1位） |
| SS | 毫秒（2位） |
| SSS | 毫秒（3位） |

### Ref

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| start | 開始倒計時 | `() => void` |
| pause | 暫停倒計時 | `() => void` |
| reset | 重設倒計時，若 auto-start 為 true，重設後會自動開始倒計時 | `() => void` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-countdown-display | 倒計時的布局方式 | `flex` |
| \--nutui-countdown-color | 倒計時的文字顏色 | `$title-color` |
| \--nutui-countdown-font-size | 倒計時的字體大小 | `14px` |