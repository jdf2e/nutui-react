# Sticky組件

## 介紹

效果同 css 中的 position: sticky,對低端瀏覽器可使用其做兼容

## 安裝

```tsx
import { Sticky } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useEffect, useRef, useState } from 'react'
import {Button,Cell, Sticky } from '@nutui/nutui-react'

const App = () => {
  const handleChange = (val: boolean) => {
    console.log('吸頂狀態發生了改變,當前fixed為', val)
  }
return(
    <>
        <h2>基礎用法</h2>
        <Cell style={{ height: '300px' }}>
          <Sticky threshold={57} onChange={handleChange}>
            <Button type="primary">吸頂</Button>
          </Sticky>
        </Cell>
        <h2>吸頂距離</h2>
        <Cell  style={{ height: '300px' }}>
          <Sticky threshold={120}>
            <Button type="primary">距離頂部120px</Button>
          </Sticky>
        </Cell>
        <h2>吸底距離</h2>
        <Cell style={{ height: '64px' }}>
          <Sticky threshold={0} position="bottom">
            <Button type="primary">距離底部0px</Button>
          </Sticky>
        </Cell>
    </>
)
   
}
export default App;
```

:::

### 指定容器內

:::demo

```tsx
import React, { useEffect, useRef, useState } from 'react'
import {Button,Cell, Sticky } from '@nutui/nutui-react'

const App = () => {
  const containerTopRef = useRef(null)
  const containerRef = useRef(null)

   return(
    <>
        <h2>指定容器內吸頂</h2>
        <Cell>
          <div
            className="sticky-container"
            ref={containerTopRef}
            style={{ height: '300px' }}
          >
            <Sticky container={containerTopRef} threshold={57}>
              <Button type="info">
                指定容器內吸頂
              </Button>
            </Sticky>
          </div>
        </Cell>
        <h2>指定容器吸底</h2>
        <Cell>
          <div
            className="sticky-container"
            ref={containerRef}
            style={{ height: '300px' }}
          >
            <Sticky position="bottom" container={containerRef} threshold={0}>
              <Button  type="info">
                指定容器吸底
              </Button>
            </Sticky>
          </div>
        </Cell>
      
    </>
   )
}
export default App;
```

:::

## Sticky

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| position | 吸附位置 | `top` \| `bottom` | `top` |
| threshold | 距離，當 position 為 top 時，設置的是 top | `number` | `0` |
| zIndex | 吸附時的層級 | `number` | `2000` |
| container | 容器的 ref | `React.RefObject<HTMLElement>` | `-` |
| onChange | 吸附狀態改變時觸發 | `(val: boolean) => void` | `-` |