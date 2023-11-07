# Popover 氣泡彈出框

## 介紹

點擊或在元素上懸停鼠標，彈出氣泡卡片浮層。

## 安裝

```tsx
import { Popover } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

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
          console.log('打開菜單時觸發')
        }}
        onClose={() => {
          console.log('關閉菜單時觸發')
        }}
      >
        <Button type="primary" shape="square">
          基礎用法
        </Button>
      </Popover>
    </>
  )
}

export default App
```

:::

### 選項配置

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
    console.log('選擇')
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
          展示圖標
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
          禁用選項
        </Button>
      </Popover>
    </>
  )
}

export default App
```

:::

### 自定義內容

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
          自定義內容
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

### 位置自定義

通過 location 屬性來控制氣泡的彈出位置。可選值

```
top           # 頂部中間位置
left          # 左側中間位置
right         # 右側中間位置
bottom        # 底部中間位置
```

自起新增

```
top-start     # 頂部左側位置
top-end       # 頂部右側位置
left-start    # 左側上方位置
left-end      # 左側下方位置
right-start   # 右側上方位置
right-end     # 右側下方位置
bottom-start  # 底部左側位置
bottom-end    # 底部右側位置
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
        title="點擊查看更多方嚮"
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
        visible={customPositon}
        targetId="pickerTarget"
        background="#1a1a1a"
        color="rgb(255, 255, 255)"
        list={positionList}
        location={curPostion}
       />
    </>
  )
}

export default App
```

:::

### 自定義目標元素

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
        自定義目標元素
      </Button>
    </>
  )
}

export default App
```

:::

### 自定義顏色

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
        visible={customColor}
        list={itemList}
        location="right-start"
        background="#f00"
        color="rgb(255, 255, 255)"
        onClick={() => {
          customColor ? setCustomColor(false) : setCustomColor(true)
        }}
      >
        <Button type="primary" shape="square">
          自定義顏色
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| list | 選項列錶 | `List[]` | `[]` |
| visible | 是否展示氣泡彈出層 | `boolean` | `false` |
| location | 彈出位置，裏面具體的參數值可以參考上面的位置自定義例子 | `string` | `bottom` |
| offset | 出現位置的偏移量 | `string[]` \| `number[]` | `[0, 12]` |
| showArrow | 是否顯示小箭頭 | `boolean` | `true` |
| duration | 動畫時長，單位秒 | `string \| number` | `0.3` |
| overlay | 是否顯示遮罩層 | `boolean` | `false` |
| overlayClassName | 自定義遮罩層類名 | `string` | `-` |
| overlayStyle | 自定義遮罩層樣式 | `React.CSSProperties` | `{}` |
| closeOnOverlayClick | 是否在點擊遮罩層後關閉菜單 | `boolean` | `true` |
| closeOnActionClick | 是否在點擊選項後關閉 | `boolean` | `true` |
| closeOnOutsideClick | 是否在點擊外部元素後關閉菜單 | `boolean` | `true` |
| background | 自定義背景色 | `string` | `-` |
| color | 自定義選項文字顏色 | `string` | `-` |
| targetId | 自定義目標元素 id | `string` | `-` |
| onClick | 點擊切換 popover 展示狀態 | `() => void` | `() =&amp;gt; {}` |
| onSelect | 點擊選項時觸發 | `(item: List, index: number) => void` | `(item, index) =&amp;gt; {}` |
| onOpen | 點擊菜單時觸發 | `() => void` | `() =&amp;gt; {}` |
| onClose | 關閉菜單時觸發 | `() => void` | `() =&amp;gt; {}` |

### List 數據結構

List 屬性是一個由對象構成的數組，數組中的每個對象配置一列，對象可以包含以下值：

| 鍵名 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| key | 選項 key 值 | `string` | `-` |
| name | 選項文字 | `string` | `-` |
| icon | 參考 Icon 組件 | `ReactNode` | `-` |
| disabled | 是否為禁用狀態 | `boolean` | `false` |
| className | 為對應選項添加額外的類名 | `string` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-popover-border-radius | popover 內容區的 border 的圓角值 | `8px` |
| \--nutui-popover-font-size | popover 內容區的 font-size 值 | `14px` |
| \--nutui-popover-menu-item-hover-background-color | 手指點擊菜單選項的背景顏色 | `#fff` |
| \--nutui-popover-menu-item-hover-text-color | 手指點擊菜單選項的文字顏色 | `#1a1a1a` |
| \--nutui-popover-primary-text-color | 選項區的文字顏色 | `#ffffff` |
| \--nutui-popover-content-background-color | 選項區的背景顏色 | `#ffffff` |
| \--nutui-popover-white-background-color | top、bottom、left 和 right 的箭頭顏色 | `#ffffff` |
| \--nutui-popover-border-bottom-color | 選項區的底部 border 顏色 | `rgba(229, 229, 229, 1)` |
| \--nutui-popover-disable-color | 選項禁用的顏色 | `rgba(154, 155, 157, 1)` |
| \--nutui-popover-menu-item-padding | 選項區菜單每一項的 padding 值 | `8px` |