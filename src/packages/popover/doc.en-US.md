# Popover

## Intro

Click or hover the mouse on the element to pop up the floating layer of the bubble card.

## Install

```tsx
import { Popover } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

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
          console.log('Fired when the menu is opened')
        }}
        onClose={() => {
          console.log('Fired when the menu is closed')
        }}
      >
        <Button type="primary" shape="square">
          Basic Usage
        </Button>
      </Popover>
    </>
  )
}

export default App
```

:::

### Option Configuration

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
    console.log('choose')
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
          display icon
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
          disabled option
        </Button>
      </Popover>
    </>
  )
}

export default App
```

:::

### Custom Content

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
          Custom Content
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

### Placement

Use the location property to control where the bubble pops up. optional value

```
top           # Top middle
left          # Left middle
right         # Right middle
bottom        # Bottom middle
top-start     # Top left
top-end       # Top right
left-start    # Left top
left-end      # Left bottom
right-start   # Right top
right-end     # Right bottom
bottom-start  # Bottom left
bottom-end    # Bottom right
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
        title="Click for more directions"
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
        className='custom-color'
        list={positionList}
        location={curPostion}
       />
    </>
  )
}

export default App
```

:::

### Custom target element

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
        Custom target element
      </Button>
    </>
  )
}

export default App
```

:::

### Custom Color

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
          Custom Color
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

| Property            | Description                                                                                                       | Type                                  | Default               |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------- |
| list                | list of options                                                                                                   | `List[]`                              | `[]`                  |
| visible             | whether to show                                                                                                   | `boolean`                             | `false`               |
| location            | The pop-up position, the specific parameter values ​​inside can refer to the above position customization example | `string`                              | `bottom`              |
| offset              | the offset of the occurrence position                                                                             | `string[] \| number[]`                | `[0, 12]`             |
| showArrow           | whether to show small arrows                                                                                      | `boolean`                             | `true`                |
| closeOnClickAction  | Whether to close when clicking action                                                                             | `boolean`                             | `true`                |
| closeOnClickOutside | Whether to close when clicking outside                                                                            | `boolean`                             | `true`                |
| targetId            | Custom target id                                                                                                  | `string`                              | `-`                   |
| onClick             | Click to toggle the popover display state                                                                         | `() => void`                          | `() => {}`            |
| onSelect            | Fired when an option is clicked                                                                                   | `(item: List, index: number) => void` | `(item, index) => {}` |
| onOpen              | Triggered when the menu is clicked                                                                                | `() => void`                          | `() => {}`            |
| onClose             | Fired when the menu is closed                                                                                     | `() => void`                          | `() => {}`            |

In addition, the `overlayStyle` `overlayClassName` `overlay` `closeOnOverlayClick` properties of the [Popup](#/zh-CN/component/popup) component are also supported.

### List data structure

The List property is an array of objects, each object in the array is configured with a column, and the object can contain the following values:

| Key | Description | Type | Default |
| --- | --- | --- | --- |
| key | key value | `string` | `-` |
| name | option text | `string` | `-` |
| icon | @nutui/icons-react name | `ReactNode` | `-` |
| disabled | whether to disable | `boolean` | `false` |
| className | Add additional class names for corresponding options | `string` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-popover-border-radius | The rounded corner value of the border of the popover content area | `8px` |
| \--nutui-popover-font-size | The font-size value of the popover content area | `14px` |
| \--nutui-popover-menu-item-hover-background-color | The background color of the finger click menu option | `#fff` |
| \--nutui-popover-menu-item-hover-text-color | Text color for finger click menu options | `#1a1a1a` |
| \--nutui-popover-primary-text-color | Text color of options area | `#ffffff` |
| \--nutui-popover-content-background-color | The background color of the options area | `#ffffff` |
| \--nutui-popover-white-background-color | Arrow colors for top, bottom, left and right | `#ffffff` |
| \--nutui-popover-border-bottom-color | The bottom border color of the options area | `rgba(229, 229, 229, 1)` |
| \--nutui-popover-disable-color | Option Disabled Colors | `rgba(154, 155, 157, 1)` |
| \--nutui-popover-menu-item-padding | The padding value of each item in the option area menu | `8px` |