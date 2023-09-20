# Swiper 輪播

## 介紹

常用於一組圖片或卡片輪播，當內容空間不足時，可以用走馬燈的形式進行收納，進行輪播展現。

## 安裝

```tsx
import { Swiper } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
]
const App = () => {
  const [defaultValue1, setdefaultValue1] = useState(0)
  const [height, setHeight] = useState<any>(150)
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        height={height}
        style={{
            '--nutui-indicator-color': '#426543',
            '--nutui-indicator-dot-color': '#426ddd',
          }}
        autoPlay="3000"
        defaultValue={defaultValue1}
        indicator
      >
        {list.map((item, index) => {
            return (
              <Swiper.Item key={item}>
                <img src={item} onClick={() => console.log(index)} alt="" />
              </Swiper.Item>
            )
          })}
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### 異步加載

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue1, setdefaultValue1] = useState(0)
  const [height, setHeight] = useState<any>(150)
  const [list, setList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      setList([
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ])
    }, 3000)
  }, [])
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        height={height}
        style={{
            '--nutui-indicator-color': '#426543',
            '--nutui-indicator-dot-color': '#426ddd',
          }}
        autoPlay="3000"
        defaultValue={defaultValue1}
        indicator
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### 動態加載

支持動態增加/刪除圖片

:::demo

```tsx
import React, { useState, useEffect } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue1, setdefaultValue1] = useState(0)
  const [height, setHeight] = useState(150)
  const [list, setList] = useState([
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ])
  useEffect(() => {
    setTimeout(() => {
      list.splice(1, 1)
      setList(list.splice(1, 1))
    }, 3000)
  }, [])
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        height={height}
        style={{
            '--nutui-indicator-color': '#426543',
            '--nutui-indicator-dot-color': '#426ddd',
          }}
        autoPlay="3000"
        defaultValue={defaultValue1}
        indicator
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### 自定義大小

`width` 自定義輪播大小 

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue2, setdefaultValue2] = useState(0)
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        width={300}
        height={150}
        defaultValue={defaultValue2}
      >
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </Swiper.Item>
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### 自定義分頁指示器

`indicator` 錶示自定義指示器

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue3, setdefaultValue3] = useState(0)
  const [current, setCurrent] = useState(1)
  const onChange3 = (e) => {
    setCurrent(e + 1)
  }
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper
        loop
        height={150}
        defaultValue={defaultValue3}
        onChange={onChange3}
        indicator={<div className="page"> {current}/4 </div>}
      >
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </Swiper.Item>
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### 手動切換

可通過 `ref`調用 `prev`,`next` 進行切換

:::demo

```tsx
import React, { useState, useRef } from 'react'
import { Swiper, Icon } from '@nutui/nutui-react';

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
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
    <div className="demo-box" style={{ height: '150px', position: 'relative' }}>
      <Swiper
        height={150}
        ref={swiperRef}
        loop
        defaultValue={defaultValue6}
        onChange={(e) => setCurrent2(e + 1)}
        indicator={<div style={ pageStyle } > {current2}/4 </div>}
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
export default App;
```

:::

### 垂直方嚮

`direction` 自定義輪播方嚮

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue4, setdefaultValue4] = useState(0)
  const [current, setCurrent] = useState(1)
  const onChange3 = (e) => {
    setCurrent(e + 1)
  }
  return (
    <div className="demo-box vertical-center" style={{ height: '150px' }}>
      <Swiper
        loop
        defaultValue={defaultValue4}
        direction="vertical"
        autoPlay="3000"
        height="150"
        indicator
      >
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
        </Swiper.Item>
        <Swiper.Item >
          <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
        </Swiper.Item>
      </Swiper>
    </div>
  )
}
export default App;
```

:::

### 水平居中展示

`center` 代錶可居中，同時必須傳 `width`

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue8, setdefaultValue8] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
   <div className="demo-box " style={{ height: '150px' }}>
      <Swiper
        defaultValue={defaultValue8}
        autoPlay="0"
        height="150"
        indicator
        width="280"
        center
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
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

`center` 代錶可居中，同時必須傳 `height`

:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const App = () => {
  const [defaultValue9, setdefaultValue9] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
   <div className="demo-box vertical-center" style={{ height: '150px' }}>
      <Swiper
        defaultValue={defaultValue9}
        direction="vertical"
        autoPlay="0"
        height="220"
        indicator
        center
        style={{ height: '280px' }}
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <img src={item} alt="" />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App;
```

:::

## Swiper

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| width | 輪播卡片的寬度 | `number` \| `string` | `window.innerWidth` |
| height | 輪播卡片的高度 | `number` \| `string` | `0` |
| direction | 輪播方嚮 | `horizontal` \| `vertical` | `horizontal` |
| indicator | 分頁指示器是否展示，可傳入自定義的 HTML 結構 | `ReactNode` | `false` |
| loop | 是否循環輪播 | `boolean` | `true` |
| duration | 動畫時長（單位是ms） | `number` \| `string` | `500` |
| autoPlay | 自動輪播時長，0錶示不會自動輪播 | `number` \| `string` | `0` |
| defaultValue | 初始化索引值 | `number` \| `string` | `0` |
| touchable | 是否可觸摸滑動 | `boolean` | `true` |
| preventDefault | 滑動過程中是否禁用默認事件 | `boolean` | `true` |
| stopPropagation | 滑動過程中是否禁止冒泡 | `boolean` | `true` |
| center | 是否居中展示，必須傳對應的`width` 和 `height` | `boolean` | `false` |
| onChange | 卡片切換後的回調 | `(current: number) => void` | `-` |

### Ref

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| prev | 切換到上一頁 | `()=>void` |
| next | 切換到下一頁 | `()=>void` |
| to | 切換到指定輪播 | `(index: number)=>void` |
| resize | 外層元素大小或組件顯示狀態變化時，可以調用此方法來觸發重繪 | `()=>void` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | 分頁器距離底部的距離 | `12px` |