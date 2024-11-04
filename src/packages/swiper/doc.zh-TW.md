# Swiper 輪播

常用於一組圖片或卡片輪播，當內容空間不足時，可以用走馬燈的形式進行收納，進行輪播展現。

## 引入

```tsx
import { Swiper } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

`Swiper` 透過 CSS 的 `touch-action` 屬性設定使用者的操作行為，如果需要在水平滑動時也可垂直滑動頁面，可透過 `Swiper` 的 `style` 屬性進行設定。 CSS 的`touch-action` 屬性可參考[https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action](https://developer.mozilla.org/zh-CN/ docs/Web/CSS/touch-action)

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const App = () => {
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        autoPlay
        loop
        slideSize={300}
        indicator
        style={{
          '--nutui-indicator-color': '#426543',
          '--nutui-indicator-dot-color': '#426ddd',
        }}
      >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::
:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const App = () => {
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper loop slideSize={300} effect={{ name: 'focus', scale: 0.9 }}>
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

### 異步加載

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Swiper } from '@nutui/nutui-react'

const App = () => {
  const [asyncList, setAsyncList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      setAsyncList([
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
      ])
    }, 300)
  }, [])
  return (
    <div className="demo-box" style={{ height: 150 }}>
      {setAsyncList.length ? (
        <Swiper>
          {asyncList.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={list[index]} alt={list[index]} draggable={false} />
              </Swiper.Item>
            )
          })}
        </Swiper>
      ) : null}
    </div>
  )
}
export default App
```

:::

### 自定義大小

`width` 自定義輪播大小

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const App = () => {
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper slideSize={250}>
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

### 自定義分頁指示器

`indicator` 錶示自定義指示器

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const App = () => {
  const [current, setCurrent] = useState(1)
  const onChange = (e) => {
    setCurrent(e + 1)
  }
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        onChange={onChange}
        indicator={<div className="page"> {current}/4 </div>}
      >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

### 手動切換

可通過 `ref`調用 `prev`,`next` 進行切換

:::demo

```tsx
import React, { useState, useRef } from 'react'
import { Swiper, Icon } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const App = () => {
  const swiperRef = React.useRef<any>(null)
  const [defaultValue6, setdefaultValue6] = useState(0)
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
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box" style={{ height: '150px', position: 'relative' }}>
      <Swiper
        ref={swiperRef}
        defaultValue={defaultValue6}
        onChange={(e) => setCurrent2(e + 1)}
        loop
        indicator={<div style={pageStyle}> {current2}/4 </div>}
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
export default App
```

:::

### 垂直方嚮

`direction` 自定義輪播方嚮

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const App = () => {
  return (
    <div className="demo-box vertical-center" style={{ height: '150px' }}>
      <Swiper loop direction="vertical">
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

### 水平居中展示

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const App = () => {
  const [defaultValue8, setdefaultValue8] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box " style={{ height: '150px' }}>
      <Swiper loop style={{ '--swiper-offset': '6%' }} slideSize={300}>
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

### 垂直居中展示

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react'

const App = () => {
  const [defaultValue9, setdefaultValue9] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box vertical-center" style={{ height: '150px' }}>
      <Swiper
        loop
        direction="vertical"
        style={{ '--swiper-offset': '13%' }}
        slideSize={120}
      >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App
```

:::

## Swiper

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| slideSize | 輪播卡的尺寸 | `number` \| `string` | `-` |
| direction | 輪播方向 | `horizontal` \| `vertical` | `horizo​​ntal` |
| indicator | 分頁指示器是否展示，可傳入自訂的 HTML 結構 | `ReactNode` | `false` |
| loop | 是否循環輪播 | `boolean` | `true` |
| duration | 動畫時長（單位是ms） | `number` \| `string` | `500` |
| autoPlay | 自動輪播時長，0表示不會自動輪播 | `number` \| `string` | `0` |
| defaultValue | 初始化索引值 | `number` \| `string` | `0` |
| touchable | 是否可觸碰滑動 | `boolean` | `true` |
| onChange | 卡片切換後的回呼 | `(current: number) => void` | `-` | ### Ref |

### Ref

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| prev | 切换到上一页 | `()=>void` |
| next | 切换到下一页 | `()=>void` |
| to | 切换到指定轮播 | `(index: number)=>void` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | 分頁器距離底部的距離 | `12px` |
| \--swiper-offset | 輪播容器的偏移 | `0` |
