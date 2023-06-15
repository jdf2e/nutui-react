# Popover 气泡弹出框

## 介绍

点击或在元素上悬停鼠标，弹出气泡卡片浮层。

## 安装

```tsx
import { Popover } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState, useRef } from 'react'
import { Popover, Button } from '@nutui/nutui-react'

const App = () => {
  const [basic, setBasic] = useState(false)
  const itemList = [
    {
      key: 'key1',
      name: 'option1',
    },
    {
      key: 'key2',
      name: 'option2',
    },
    {
      key: 'key3',
      name: 'option3',
    },
  ]
  return (
    <>
      <Popover
        visible={basic}
        list={itemList}
        location="bottom-start"
        style={{ marginRight: '30px' }}
        onClick={() => {
          basic ? setBasic(false) : setBasic(true)
        }}
        onOpen={() => {
          console.log('打开菜单时触发')
        }}
        onClose={() => {
          console.log('关闭菜单时触发')
        }}
      >
        <Button type="primary" shape="square">
          基础用法
        </Button>
      </Popover>
    </>
  )
}

export default App
```

:::

### 选项配置

:::demo

```tsx
import React, { useState, useRef } from 'react'
import { Popover, Button } from '@nutui/nutui-react'
import { My2, Cart2, Location2 } from '@nutui/icons-react'

const App = () => {
  const [showIcon, setShowIcon] = useState(false)
  const [disableAction, setDisableAction] = useState(false)
  const iconItemList = [
    {
      key: 'key1',
      name: 'option1',
      icon: <My2 color="rgba(250, 44, 25, 1)" style={{ marginRight: '8px' }} />,
    },
    {
      key: 'key2',
      name: 'option2',
      icon: <Cart2 style={{ marginRight: '8px' }} />,
    },
    {
      key: 'key3',
      name: 'option3',
      icon: <Location2 style={{ marginRight: '8px' }} />,
    },
  ]
  const itemListDisabled = [
    {
      key: 'key1',
      name: 'option1',
      disabled: true,
    },
    {
      key: 'key2',
      name: 'option2',
      disabled: true,
    },
    {
      key: 'key3',
      name: 'option3',
    },
  ]
  const chooseHandle = (item: List, index: number) => {
    console.log('选择')
  }
  return (
    <>
      <Popover
        visible={showIcon}
        location="bottom-start"
        onClick={() => {
          showIcon ? setShowIcon(false) : setShowIcon(true)
        }}
        list={iconItemList}
        style={{ marginRight: '30px' }}
      >
        <Button type="primary" shape="square">
          展示图标
        </Button>
      </Popover>
      <Popover
        visible={disableAction}
        onClick={() => {
          disableAction ? setDisableAction(false) : setDisableAction(true)
        }}
        list={itemListDisabled}
        location="right"
        onSelect={chooseHandle}
      >
        <Button type="primary" shape="square">
          禁用选项
        </Button>
      </Popover>
    </>
  )
}

export default App
```

:::

### 自定义内容

:::demo

```tsx
import React, { useState, useRef } from 'react'
import { Popover, Button } from '@nutui/nutui-react'
import {
  Service,
  Notice,
  Location,
  Category,
  Scan2,
  Message,
} from '@nutui/icons-react'

const App = () => {
  const [customized, setCustomized] = useState(false)
  const selfContent = [
    {
      key: 'key1',
      name: <Service />,
      description: 'option1',
    },
    {
      key: 'key2',
      name: <Notice />,
      description: 'option2',
    },
    {
      key: 'key3',
      name: <Location />,
      description: 'option3',
    },
    {
      key: 'key4',
      name: <Category />,
      description: 'option4',
    },
    {
      key: 'key5',
      name: <Scan2 />,
      description: 'option5',
    },
    {
      key: 'key6',
      name: <Message />,
      description: 'option6',
    },
  ]

  const selfContentStyle = {
    width: '195px',
    display: 'flex',
    flexWrap: 'wrap',
  } as any
  const selfContentItem = {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  } as any
  const selfContentDesc = {
    marginTop: '5px',
    width: '60px',
    fontSize: '10px',
    textAlign: 'center',
  } as any

  return (
    <>
      <Popover
        visible={customized}
        onClick={() => {
          customized ? setCustomized(false) : setCustomized(true)
        }}
        location="top-start"
        className="customClass"
      >
        <Button type="primary" shape="square">
          自定义内容
        </Button>
        {customized ? (
          <div className="self-content" style={selfContentStyle}>
            {selfContent.map((item: any) => {
              return (
                <div
                  className="self-content-item"
                  key={item.key}
                  style={selfContentItem}
                >
                  {item.name ? item.name : null}
                  <div
                    className="self-content-description"
                    style={selfContentDesc}
                  >
                    {item.description}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          ''
        )}
      </Popover>
    </>
  )
}

export default App
```

:::

### 位置自定义

通过 location 属性来控制气泡的弹出位置。可选值

```
top           # 顶部中间位置
left          # 左侧中间位置
right         # 右侧中间位置
bottom        # 底部中间位置
```

自起新增

```
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```

:::demo

```tsx
import React, { useState, useRef } from 'react'
import { Popover, Button, Cell, Picker } from '@nutui/nutui-react'

const App = () => {
  const [baseDesc, setBaseDesc] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [customPositon, setCustomPosition] = useState(false)
  const [curPostion, setCurPostion] = useState('')

  const columns = [
    { text: 'top', value: 'top' },
    { text: 'top-start', value: 'top-start' },
    { text: 'top-end', value: 'top-end' },
    { text: 'right', value: 'right' },
    { text: 'right-start', value: 'right-start' },
    { text: 'right-end', value: 'right-end' },
    { text: 'bottom', value: 'bottom' },
    { text: 'bottom-start', value: 'bottom-start' },
    { text: 'bottom-end', value: 'bottom-end' },
    { text: 'left', value: 'left' },
    { text: 'left-start', value: 'left-start' },
    { text: 'left-end', value: 'left-end' },
  ]
  const positionList = [
    {
      key: 'key1',
      name: 'option1',
    },
    {
      key: 'key2',
      name: 'option2',
    },
  ]

  const handlePicker = () => {
    setShowPicker(true)
    setTimeout(() => {
      setCustomPosition(true)
    }, 500)
  }

  return (
    <>
      <Cell
        title="点击查看更多方向"
        description={baseDesc}
        onClick={handlePicker}
       />
      <Picker
        visible={showPicker}
        options={columns}
        duration="500"
        title=""
        onConfirm={(list) => {
          let description = ''
          list.forEach((option: any) => {
            description += ` ${option.text}`
          })
          setBaseDesc(description)
        }}
        onChange={(options: PickerOption[]) => {
          if (options[0]?.value) {
            setCurPostion(options[0].value as string)
          }
        }}
        onClose={() => {
          setShowPicker(false)
          setCustomPosition(false)
        }}
      >
        <div className="brickBox">
          <div className="brick" id="pickerTarget" />
        </div>
      </Picker>
      <Popover
        className='custom-color'
        visible={customPositon}
        targetId="pickerTarget"
        list={positionList}
        location={curPostion}
       />
    </>
  )
}

export default App
```

:::

### 自定义目标元素

:::demo

```tsx
import React, { useState, useRef } from 'react'
import { Popover, Button } from '@nutui/nutui-react'
import { My2, Cart2, Location2 } from '@nutui/icons-react'

const App = () => {
  const [customTarget, setCustomTarget] = useState(false)
  const iconItemList = [
    {
      key: 'key1',
      name: 'option1',
      icon: <My2 color="rgba(250, 44, 25, 1)" style={{ marginRight: '8px' }} />,
    },
    {
      key: 'key2',
      name: 'option2',
      icon: <Cart2 style={{ marginRight: '8px' }} />,
    },
    {
      key: 'key3',
      name: 'option3',
      icon: <Location2 style={{ marginRight: '8px' }} />,
    },
  ]

  const clickCustomHandle = () => {
    setCustomTarget(!customTarget)
  }
  return (
    <>
      <Popover
        visible={customTarget}
        targetId="popid"
        list={iconItemList}
        location="top-start"
        onClick={() => {
          setCustomTarget(false)
        }}
       />
      <Button
        type="primary"
        shape="square"
        id="popid"
        onClick={clickCustomHandle}
      >
        自定义目标元素
      </Button>
    </>
  )
}

export default App
```

:::

### 自定义颜色

:::demo

```tsx
import React, { useState, useRef } from 'react'
import { Popover, Button } from '@nutui/nutui-react'

const App = () => {
  const [customColor, setCustomColor] = useState(false)
  const itemList = [
    {
      key: 'key1',
      name: 'option1',
    },
    {
      key: 'key2',
      name: 'option2',
    },
    {
      key: 'key3',
      name: 'option3',
    },
  ]
  return (
    <>
      <Popover
        className='custom-color'
        visible={customColor}
        list={itemList}
        location="right-start"
        onClick={() => {
          customColor ? setCustomColor(false) : setCustomColor(true)
        }}
      >
        <Button type="primary" shape="square">
          自定义颜色
        </Button>
      </Popover>
    </>
  )
}

export default App
```

:::

## Popover

### Props

| 属性                | 说明                                                   | 类型                                  | 默认值                |
| ------------------- | ------------------------------------------------------ | ------------------------------------- | --------------------- |
| list                | 选项列表                                               | `List[]`                              | `[]`                  |
| visible             | 是否展示气泡弹出层                                     | `boolean`                             | `false`               |
| location            | 弹出位置，里面具体的参数值可以参考上面的位置自定义例子 | `string`                              | `bottom`              |
| offset              | 出现位置的偏移量                                       | `string[] \| number[]`                | `[0, 12]`             |
| showArrow           | 是否显示小箭头                                         | `boolean`                             | `true`                |
| closeOnClickAction  | 是否在点击选项后关闭                                   | `boolean`                             | `true`                |
| closeOnClickOutside | 是否在点击外部元素后关闭菜单                           | `boolean`                             | `true`                |
| targetId            | 自定义目标元素 id                                      | `string`                              | `-`                   |
| onClick             | 点击切换 popover 展示状态                              | `() => void`                          | `() => {}`            |
| onSelect            | 点击选项时触发                                         | `(item: List, index: number) => void` | `(item, index) => {}` |
| onOpen              | 点击菜单时触发                                         | `() => void`                          | `() => {}`            |
| onClose             | 关闭菜单时触发                                         | `() => void`                          | `() => {}`            |


    此外，还支持Popup组件的overlayStyle、overlayClassName、overlay、closeOnOverlayClick属性。  
### List 数据结构

List 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 选项 key 值 | `string` | `-` |
| name | 选项文字 | `string` | `-` |
| icon | 参考 Icon 组件 | `ReactNode` | `-` |
| disabled | 是否为禁用状态 | `boolean` | `false` |
| className | 为对应选项添加额外的类名 | `string` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                             | 说明                                  | 默认值                    |
| ------------------------------------------------ | ------------------------------------- | ------------------------- |
| --nutui-popover-border-radius                    | popover 内容区的 border 的圆角值      | ` 8px`                    |
| --nutui-popover-font-size                        | popover 内容区的 font-size 值         | `14px`                    |
| --nutui-popover-menu-item-hover-background-color | 手指点击菜单选项的选中的背景颜色            | `#fff`                    |
| --nutui-popover-menu-item-hover-text-color       | 手指点击菜单选项的选中的文字颜色            | `#1a1a1a`                 |
| --nutui-popover-primary-text-color               | 选项区的文字颜色                      | `#ffffff`                 |
| --nutui-popover-content-background-color         | 选项区的背景颜色                      | `#ffffff`                 |
| --nutui-popover-white-background-color           | top、bottom、left 和 right 的箭头颜色 | `#ffffff`                 |
| --nutui-popover-border-bottom-color              | 选项区的底部 border 颜色              | ` rgba(229, 229, 229, 1)` |
| --nutui-popover-disable-color                    | 选项禁用的颜色                        | ` rgba(154, 155, 157, 1)` |
| --nutui-popover-menu-item-padding                | 选项区菜单每一项的 padding 值         | `8px`                     |
