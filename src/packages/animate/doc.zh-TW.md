# Animate 動畫/動效

## 介紹

給子元素添加動畫效果

## 安裝

```tsx
import { Animate } from '@nutui/nutui-react';
```

## 代碼演示

### 點擊觸發

:::demo

```tsx
import React from 'react'
import { Animate, Button } from '@nutui/nutui-react'

const AnimateDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>點擊觸發</h2>
        <div className="ani-demo-div">
          <Animate type="slide-right" action="click">
            <Button type="primary">由右嚮左劃入</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-left" action="click">
            <Button type="primary">由左嚮右劃入</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-top" action="click">
            <Button type="primary">由上至下劃入</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-bottom" action="click">
            <Button type="primary">由下至上劃入</Button>
          </Animate>
        </div>
      </div>
    </>
  )
}

export default AnimateDemo
```

:::

### 循環動畫

:::demo

```tsx
import React from 'react'
import { Animate, Button } from '@nutui/nutui-react'

const AnimateDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>循環動畫</h2>
        <div className="ani-demo-div">
          <Animate type="shake" loop>
            <Button type="primary">shake-抖動</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="ripple" loop>
            <Button type="primary">ripple-心跳</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="breath" loop>
            <Button type="primary">breath-呼吸燈</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="twinkle" loop>
            <Button type="primary">twinkle-水波</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="flicker" loop>
            <Button type="primary">flicker-擦亮</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="jump" loop>
            <Button type="primary">jump-跳躍</Button>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="float" loop>
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

## Animate

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 動畫類型，見下方type值說明 | `AnimateType` | `shake` |
| action | 觸發方式，'initial'初始化執行; 'click'點擊執行 | `initial` \| `click` | `initial` |
| loop | 是否循環執行。true循環執行;false執行一次 | `boolean` | `false` |
| onClick | 點擊元素時觸發 | `event: Event` | `-` |

### AnimateType值說明

| 序號 | 參數名稱 | 參數說明 |
| --- | --- | --- |
| 1 | shake | 抖動，建議loop為true |
| 2 | ripple | 不循環則是放大後縮小，循環則是心跳 |
| 3 | breath | 呼吸燈，建議loop為true |
| 4 | float | 漂浮，建議loop為true |
| 5 | slide-right | 由右嚮左劃入 |
| 6 | slide-left | 由左嚮右劃入 |
| 7 | slide-top | 由上至下劃入 |
| 8 | slide-bottom | 由下至上劃入 |
| 9 | jump | 跳躍，建議loop為true |
| 10 | twinkle | 水波，建議loop為true |
| 11 | flicker | 擦亮按鈕，建議loop為true |