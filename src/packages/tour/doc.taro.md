# Tour 引导

### 介绍

用于引导用户了解产品功能的气泡组件。

## 安装

```tsx
import { Tour } from '@nutui/nutui-react-taro';
```

## 代码演示
### 基础用法

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Switch, Tour } from '@nutui/nutui-react-taro';

const App = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: '70+ 高质量组件，覆盖移动端主流场景',
      target: 'target',
    },
  ]

  return (
    <>
      <Cell
        title="点击试试"
        extra={
          <Switch
            id="target"
            onChange={() => {
              setShowTour(true)
            }}
          />
        }
      />
      <Tour
        className="nut-custom-tour nut-customword-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        type="tile"
        location="bottom-end"
      />
    </>
  )
}
export default App;
```

:::

### 自定义样式

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Switch, Tour } from '@nutui/nutui-react-taro';

const App = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: '70+ 高质量组件，覆盖移动端主流场景',
      target: 'target',
    },
  ]

  return (
    <>
      <Cell
        title="点击试试"
        extra={
          <Switch
            id="target"
            onChange={() => {
              setShowTour(true)
            }}
          />
        }
      />
      <Tour
        className="nut-custom-tour nut-customword-tour nut-customstyle-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        type="tile"
        location="bottom-end"
        style={{
          '--nutui-popover-content-background-color': 'rgb(255, 0, 0)',
          '--nutui-popover-primary-text-color': 'rgb(255, 255, 255)',
          '--nutui-popover-white-background-color': 'rgb(255, 0, 0)',
        }}
        offset={[0, 0]}
        maskWidth={50}
        maskHeight={50}
      />
    </>
  )
}
export default App;
```

:::

### 设置偏移量

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Switch, Tour } from '@nutui/nutui-react-taro';

const App = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: '支持一套代码同时开发多端小程序+H5',
      target: 'target',
      popoverOffset: [40, 12],
      arrowOffset: -36,
    },
  ]

  return (
    <>
      <Cell
        title="点击试试"
        extra={
          <div className="tour-demo-img">
            <img
              id="target2"
              src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
              alt=""
            />
            <img
              src="https://img10.360buyimg.com/imagetools/jfs/t1/31842/40/20385/1762/63998e3eE594254bb/98ff51da635ead4a.png"
              alt=""
            />
            <img
              src="https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png"
              alt=""
            />
          </div>
        }
      />
      <Tour
        className="nut-custom-tour nut-customword-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        type="tile"
        location="bottom-end"
        style={{
          '--nutui-popover-content-background-color': 'rgb(255, 0, 0)',
          '--nutui-popover-primary-text-color': 'rgb(255, 255, 255)',
          '--nutui-popover-white-background-color': 'rgb(255, 0, 0)',
        }}
        offset={[8, 8]}
      />
    </>
  )
}
export default App;
```

:::

### 自定义内容

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Switch, Tour, Divider } from '@nutui/nutui-react-taro';

const App = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      target: 'target',
    },
  ]

  return (
    <>
      <Cell
        title="点击试试"
        extra={
          <Switch
            id="target"
            onChange={() => {
            setShowTour3(true)
            }}
          />
        }
      />
      <Tour
        className="nut-custom-tour nut-customword-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        type="tile"
        location="bottom-end"
        style={{
          '--nutui-popover-content-background-color': 'rgb(75, 76, 77)',
          '--nutui-popover-primary-text-color': 'rgb(255, 255, 255)',
          '--nutui-popover-white-background-color': 'rgb(75, 76, 77)',
        }}
        closeOnOverlayClick={false}
      >
        <div className="tour-demo-custom-content">
          <div>nutui 4.x 即将发布，敬请期待</div>
          <Divider direction="vertical" />
          <div
            onClick={() => {
              setShowTour(false)
            }}
          >
            知道了
          </div>
        </div>
      </Tour>
    </>
  )
}
export default App;
```

:::

### 步骤引导

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Tour, Tabbar } from '@nutui/nutui-react-taro';

const App = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: '70+ 高质量组件，覆盖移动端主流场景',
      target: 'target4',
    },
    {
      content: '支持一套代码同时开发多端小程序+H5',
      target: 'target5',
    },
    {
      content: '基于京东APP 10.0 视觉规范',
      target: 'target6',
      location: 'top-end',
    },
    {
      content: '支持定制主题，内置 700+ 个主题变量',
      target: 'target7',
      location: 'top-end',
    },
  ]

  return (
    <>
      <Cell
        title="点击试试"
        onClick={() => {
          setShowTour(true)
        }}
      />
      <Tabbar fixed>
        <Tabbar.Item id="target4" title='首页' />
        <Tabbar.Item id="target5" title='分类' />
        <Tabbar.Item id="target6" title='购物车' />
        <Tabbar.Item id="target7" title='我的' />
      </Tabbar>
      <Tour
        className="nut-custom-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        location="top-start"
        offset={[0, 0]}
        maskWidth={60}
        maskHeight={50}
      />
    </>
  )
}
export default App;
```

:::


## Tour

### Props


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否展示引导弹出层 | `boolean` | `false` |
| type | 引导类型 | `step` \| `tile` | `step` |
| list | 引导步骤内容 | `ListOptions[]` | `-` |
| offset | 镂空遮罩相对于目标元素的偏移量 | `number[]` | `[8, 10]` |
| location | 弹出层位置,同 Popopver 的[location 属性](https://nutui.jd.com/h5/react/2x/#/zh-CN/component/popover) | `string` | `bottom` |
| next | 下一步按钮文案 | `ReactNode` | `''` |
| prev | 上一步按钮文案 | `ReactNode` | `''` |
| complete | 完成按钮文案 | `ReactNode` | `''` |
| mask | 是否显示镂空遮罩 | `boolean` | `true` |
| maskWidth | 镂空遮罩层宽度 | `number` \| `string` | `''` |
| maskHeight | 镂空遮罩层高度 | `number` \| `string` | `''` |
| closeOnOverlayClick | 是否在点击镂空遮罩层后关闭,同 Popopver 的[closeOnClickOverlay 属性](https://nutui.jd.com/h5/react/2x/#/zh-CN/component/popover) | `boolean` | `true` |
| showPrev | 是否展示上一步按钮 | `boolean` | `true` |
| title | 是否展示标题栏 | `ReactNode` | `''` |
| onClose | 气泡层关闭时触发 | `(e: MouseEvent<HTMLDivElement>) => void` | `-` |
| onChange | 切换步骤时触发 | `(value: number) => void` | `-` |

### ListOptions


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 目标对象 | `Element` \| `string` | `-` |
| content | 气泡层内容 | `string` | `-` |
| location | 弹出层位置 | `string` | `-` |
| popoverOffset | 气泡层偏移量 | `number[]` | `-` |
| arrowOffset | 小箭头的偏移量 | `number` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-tour-mask-border-radius | 遮罩层的border-radius值 | `10px` |
| \--nutui-tour-content-min-width | 内容区的min-width值 | `200px` |
| \--nutui-tour-content-padding | 内容区的padding值 | `10px 12px` |
| \--nutui-tour-content-inner-margin | 内容区内部的margin值 | `10px 0px` |
| \--nutui-tour-content-inner-font-size | 内容区内部的font-size值 | `14px` |
| \--nutui-tour-content-bottom-margin-top | 内容区底部的margin-top值 | `10px` |
| \--nutui-tour-content-bottom-btn-margin-left | 内容区底部按钮的margin-left值 | `4px` |
| \--nutui-tour-content-bottom-btn-padding | 内容区底部按钮的padding值 | `2px 4px` |
| \--nutui-tour-content-bottom-btn-font-size | 内容区底部按钮的font-size值 | `12px` |
| \--nutui-tour-content-bottom-btn-border-radius | 内容区底部按钮的border-radius值 | `4px` |





