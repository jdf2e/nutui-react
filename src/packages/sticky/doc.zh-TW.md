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
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
  const handleChange = (val: boolean) => {
    console.log('吸頂狀態發生了改變,當前fixed為', val)
  }
  return(
      <>
        <Sticky threshold={57} onChange={(val: boolean) => handleChange(val)}>
          <Button type="primary">吸頂</Button>
        </Sticky>
      </>
  )
}
export default App;
```

:::

### 吸頂距離

:::demo

```tsx
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
  return(
      <>
        <Sticky threshold={120}>
          <Button type="primary">距离顶部120px</Button>
        </Sticky>
      </>
  )
}
export default App;
```

:::

### 指定容器內吸頂

:::demo

```tsx
import React, { useRef } from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
  const containerTopRef = useRef(null)
   return(
    <>
      <div
        ref={containerTopRef}
        style={{ height: '600px' }}
      >
        <Sticky container={containerTopRef} threshold={57}>
          <Button type="info" style={{ marginLeft: '100px' }}>
            指定容器內吸頂
          </Button>
        </Sticky>
      </div>
    </>
   )
}
export default App;
```

:::

### 吸底距離

:::demo

```tsx
import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react'

const App = () => {
   return(
    <>
      <Sticky threshold={0} position="bottom">
        <Button type="primary">距离底部0px</Button>
      </Sticky>
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
