# Swipe组件

常用于单元格左右滑删除等手势操作

## 引入

```tsx
import { Swipe } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <Swipe
        rightAction={
          <Button type="primary" shape="square">
            删除
          </Button>
        }
      >
        <Cell title="左滑删除" radius={0} />
      </Swipe>
    </>
  )
}
export default App
```

:::

### 卡片场景

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'
import { Del } from '@nutui/icons-react'

const divNode = (text: string, style: any) => {
  return (
    <div
      style={{
        width: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      <Del style={{ marginBottom: '8px' }} />
      <>{text}</>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Swipe
        style={{ height: '104px' }}
        rightAction={
          <div
            style={{
              height: 'inherit',
              width: '240px',
              display: 'flex',
              fontSize: '12px',
            }}
          >
            <>
              {divNode('设置常买', {
                background: '#F8F8F8',
                color: '#1A1A1A',
              })}
              {divNode('移入收藏', {
                background: '#ffcc00',
                color: '#FFF',
              })}
              {divNode('看相似', {
                background: '#FF860D',
                color: '#FFF',
              })}
              {divNode('删除', {
                background: '#FA2C19',
                color: '#FFF',
              })}
            </>
          </div>
        }
      >
        <Cell title={`${translated.leftDel}+Icon`} radius={0} />
      </Swipe>
    </>
  )
}
export default App
```

### 通过实例方法控制

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'

const App = () => {
  const closeRef = useRef(null)
  const openRef = useRef(null)
  return (
    <>
      <Swipe
        ref={openRef}
        rightAction={
          <Button shape="square" type="danger">
            删除
          </Button>
        }
      >
        <Cell title="点击下方按钮打开或关闭" radius={0} />
      </Swipe>
      <Button
        onClick={() => openRef.current?.open()}
        type="primary"
        size="small"
      >
        打开
      </Button>
      <Button onClick={() => openRef.current?.close()}>关闭</Button>
    </>
  )
}
export default App
```

:::

### 点击关闭

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'

const App = () => {
  const closeRef = useRef(null)
  return (
    <>
      <Swipe
        ref={openRef}
        rightAction={
          <Button shape="square" type="danger">
            删除
          </Button>
        }
        onActionClick={() => {
          closeRef.current.close()
        }}
      >
        <Cell title="点击右侧按钮关闭" radius={0} />
      </Swipe>
    </>
  )
}
export default App
```

:::

### 禁用滑动

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <Swipe
        rightAction={
          <Button shape="square" type="danger">
            删除
          </Button>
        }
        disabled
      >
        <Cell title="禁用滑动" radius={0} />
      </Swipe>
    </>
  )
}
export default App
```

:::

### 事件监听

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button, Toast } from '@nutui/nutui-react'

const App = () => {
  const handleChange = () => {
    Toast.show('点击')
  }
  return (
    <>
      <Swipe
        leftAction={
          <Button shape="square" type="success">
            选择
          </Button>
        }
        rightAction={
          <>
            <Button shape="square" type="danger">
              删除
            </Button>
            <Button shape="square" type="info">
              收藏
            </Button>
          </>
        }
        onActionClick={handleChange}
        onOpen={() => Toast.show('打开')}
        onClose={() => Toast.show('关闭')}
      >
        <Cell title="事件" />
      </Swipe>
    </>
  )
}
export default App
```

:::

### 异步控制

:::demo

```tsx
import React, { useRef } from 'react'
import { Swipe, Cell, Button, Dialog } from '@nutui/nutui-react'
import { SwipeInstance } from '@/packages/Swipe'

const App = () => {
  const refDom = useRef<SwipeInstance>(null)
  const beforeClose = (position: string) => {
    Dialog.alert({
      title: '提示',
      content: position === 'left' ? '确定选择吗？' : '确定删除吗？',
      onConfirm: () => {
        refDom.current && refDom.current.close()
      },
    })
  }
  return (
    <>
      <Swipe
        ref={refDom}
        beforeClose={beforeClose}
        leftAction={
          <Button shape="square" type="success">
            选择
          </Button>
        }
        rightAction={
          <>
            <Button shape="square" type="danger">
              删除
            </Button>
          </>
        }
      >
        <Cell title="事件" />
      </Swipe>
    </>
  )
}
export default App
```

:::

### 自定义内容

:::demo

```tsx
import React from 'react'
import { Swipe, Cell, Button, InputNumber } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <Swipe
        rightAction={
          <>
            <Button shape="square" type="danger">
              加入购物车
            </Button>
          </>
        }
      >
        <Cell>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <span>商品</span>
            <InputNumber style={{ float: 'right' }} />
          </div>
        </Cell>
      </Swipe>
    </>
  )
}
export default App
```

:::

## Swipe

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识符，可以在事件参数中获取到 | `number` \| `string` | `-` |
| leftAction | 左侧滑动区域的内容 | `ReactNode` | `-` |
| rightAction | 右侧滑动区域的内容 | `ReactNode` | `-` |
| beforeClose | 关闭前的回调函数，返回滑动区域所在方向 `position` | `(position: 'left \| 'right') => void` | `-` |
| disabled | 是否禁用滑动 | `boolean` | `false` |
| onOpen | 打开单元格侧边栏 | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-` |
| onClose | 收起单元格侧边栏 | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-` |
| onActionClick | 点击左侧或者右侧时触发 | `(event: MouseEvent<HTMLDivElement>, position: 'left' \| 'right') => void` | `-` |
| onTouchStart | 开始触碰时触发 | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |
| onTouchMove | 滑动时触发 | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |
| onTouchEnd | 结束触碰时触发 | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |

### Ref

| 属性 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 打开单元格侧边栏，`side`参数默认为`right` | `(side?: 'left' \| 'right') => void` |
| close | 收起单元格侧边栏 | `() => void` |
