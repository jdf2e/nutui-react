#  Swipe组件

### 介绍

常用于单元格左右滑删除等手势操作

### 安装

```javascript

import { Swipe } from '@nutui/nutui-react-taro';
```


## 代码演示

### 基础用法

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react-taro';

const App = () => {
  return <>
    <Swipe
      rightAction={
        <Button type="primary" shape="square">
          删除
        </Button>
      }
    >
      <Cell title="左滑删除" roundRadius={0} />
    </Swipe>
  </>
}
export default App;
```
:::


### 通过实例方法控制

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const closeRef = useRef(null)
  const openRef = useRef(null)
  return <>
    <Swipe
      ref={openRef}
      rightAction={
        <Button shape="square" type="danger">
          删除
        </Button>
      }
    >
      <Cell title='点击下方按钮打开或关闭' roundRadius={0} />
    </Swipe>
    <Button onClick={() => openRef.current?.open()}>
      打开
    </Button>
    <Button onClick={() => openRef.current?.close()}>
      关闭
    </Button>
  </>
}
export default App;
```
:::

### 点击关闭

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const closeRef = useRef(null)
  return <>
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
      <Cell title='点击右侧按钮关闭' roundRadius={0} />
    </Swipe>
  </>
}
export default App;
```
:::

### 禁用滑动

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button } from '@nutui/nutui-react-taro';

const App = () => {
  return <>
    <Swipe
      rightAction={
        <Button shape="square" type="danger">
          删除
        </Button>
      }
      disabled
    >
      <Cell title="禁用滑动" roundRadius={0} />
    </Swipe>
  </>
}
export default App;
```
:::

### 事件监听

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button, Toast } from '@nutui/nutui-react-taro';

const App = () => {
  const handleChange = () => {
    Toast.text('点击');
  }
  return <>
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
      onOpen={() => Toast.text('打开')}
      onClose={() => Toast.text('关闭')}
    >
      <Cell title="事件" />
    </Swipe>
  </>
}
export default App;
```
:::

### 异步控制

:::demo
```tsx
import React, { useRef } from "react";
import { Swipe, Cell, Button, Dialog } from '@nutui/nutui-react-taro';
import { SwipeInstance } from '@/packages/Swipe'

const App = () => {
  const refDom = useRef<SwipeInstance>(null)
  const pRef = useRef('left')
  const [showDialog, setShowDialog] = useState(false)
  
  const beforeClose = (postion: string) => {
    Dialog.alert({
      title: '提示',
      content: postion === 'left' ? '确定选择吗？' : '确定删除吗？',
      onOk: () => {
        refDom.current && refDom.current.close()
      },
    })
  }
  return <>
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
    <Dialog visible={showDialog} title="提示"
            onOk={() => {
              refDom.current && refDom.current.close();
              setShowDialog(false)
            }}>{postion === 'left' ? '确定选择吗？' : '确定删除吗？'}</Dialog>
  </>
}
export default App;
```
:::

### 自定义内容

:::demo
```tsx
import React from "react";
import { Swipe, Cell, Button, InputNumber } from '@nutui/nutui-react-taro';

const App = () => {
  return <>
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
}
export default App;
```
:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name | 标识符，可以在事件参数中获取到 | _number \| string_ | `''` |
| leftWidth | 指定左侧滑动区域宽度，单位为 `px` | _number \| string_ | `0` |
| rightWidth | 指定右侧滑动区域宽度，单位为 `px` | _number \| string_ | `0` |
| leftAction | 左侧滑动区域的内容 | _ReactNode_ | - |
| rightAction | 右侧滑动区域的内容 | _ReactNode_ | - |
| beforeClose | 关闭前的回调函数，返回 `position` | _string_ | `left` |
| disabled | 是否禁用滑动 | _boolean_ | `false` |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onOpen   | 打开单元格侧边栏 | _name: string , position: `left \| right`_      |
| onClose  | 收起单元格侧边栏 | _name: string , position: `left \| right`_    |
| onActionClick  | 点击左侧或者右侧时触发 | _event: Event , position: `left \| right`_     |
| onTouchStart`v1.4.7` | ontouchStart | _event: Event      |
| onTouchMove`v1.4.7`         | ontouchmove  | _event: Event     |
| onTouchEnd`v1.4.7`          | ontouchend   | _event: Event     |

## Swipe 实例方法

| 方法名   | 说明 | 参数 |
|-------|--| ----- |
| open | 打开 | `left\|right` |
| close | 关闭 | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-swiper-pagination-item-background-color | `  #ddd` |
| --nutui-swiper-pagination-item-width | `  8px` |
| --nutui-swiper-pagination-item-height | `  3px` |
| --nutui-swiper-pagination-item-margin-right | `  7px` |
| --nutui-swiper-pagination-item-border-radius | `  2px` |
