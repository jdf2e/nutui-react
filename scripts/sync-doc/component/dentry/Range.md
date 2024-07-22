# Range 区间选择器

滑动输入条，用于在给定的范围内选择一个值。

## 引入

```tsx
import { Range } from '@dongdesign/ui';
```

## 示例代码

### 基础用法



```tsx
import React, { useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo1 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={cellStyle}>
        <Range defaultValue={40} onEnd={(val) => showToast(`${val}`)} />
      </Cell>
      <Cell style={cellStyle}>
        <Range
          defaultValue={40}
          marks={[
            { value: 0, label: 'start' },
            { value: 100, label: 'end' },
          ]}
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo1

```


### 受控方式



```tsx
import React, { useMemo, useState } from 'react'
import { Range, Cell } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo2 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])
  const [value, setValue] = useState(40)
  return (
    <Cell style={cellStyle}>
      <Range value={value} onChange={(val: any) => setValue(val)} />
    </Cell>
  )
}
export default Demo2

```


### 自定义描述



```tsx
import React, { useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo3 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={cellStyle}>
        <Range
          defaultValue={40}
          minDescription="0%"
          maxDescription="100%"
          currentDescription={(value) => `${value}%`}
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo3

```


### 双滑块



```tsx
import React, { useState, useMemo } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo4 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={cellStyle}>
        <Range
          defaultValue={[20, 80]}
          range
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo4

```


### 指定范围



```tsx
import React, { useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo5 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={cellStyle}>
        <Range
          defaultValue={0}
          max={10}
          min={-10}
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo5

```


### 设置步长



```tsx
import React, { useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo6 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={cellStyle}>
        <Range
          defaultValue={30}
          step={5}
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo6

```


### 隐藏范围



```tsx
import React, { useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo7 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={cellStyle}>
        <Range
          defaultValue={30}
          maxDescription={null}
          minDescription={null}
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo7

```


### 隐藏标签



```tsx
import React, { useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo8 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={cellStyle}>
        <Range
          defaultValue={20}
          currentDescription={null}
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo8

```


### 禁用



```tsx
import React, { useMemo } from 'react'
import { Range, Cell } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo9 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])

  return (
    <Cell style={cellStyle}>
      <Range defaultValue={50} disabled />
    </Cell>
  )
}
export default Demo9

```


### 自定义样式



```tsx
import React, { useMemo } from 'react'
import { Range, ConfigProvider, Cell } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo10 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])

  return (
    <Cell
      style={{
        ...cellStyle,
        display: 'block',
      }}
    >
      <ConfigProvider
        theme={{
          nutuiRangeButtonBorder: '1px solid rgba(52,96,250,1)',
          nutuiRangeActiveColor:
            'linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)',
          nutuiRangeInactiveColor: 'rgba(163,184,255,1)',
          nutuiRangeMargin: '20px',
          nutuiRangeHeight: '6px',
        }}
      >
        <Range
          className="test-range"
          defaultValue={40}
          style={{ color: 'red' }}
          marks={{
            10: 10,
            20: 20,
          }}
        />
      </ConfigProvider>
    </Cell>
  )
}
export default Demo10

```


### 自定义按钮



```tsx
import React, { useMemo, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@dongdesign/ui'
import { rn, harmony, harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo11 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])

  const buttonNativeStyle = useMemo(() => {
    if (rn()) {
      return {
        transform: [
          { translateX: pxTransform(-13) },
          { translateY: pxTransform(3) },
        ],
      }
    }
    return {}
  }, [])
  const [value, setValue] = useState(60)
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={cellStyle}>
        <Range
          value={value}
          button={
            <View
              style={{
                position: 'absolute',
                display: 'flex',
                width: pxTransform(26),
                backgroundColor: 'red',
                borderRadius: pxTransform(10),
                justifyContent: 'center',
                top: '50%',
                left: '50%',
                // @ts-ignore
                transform: 'translate(-50%, -50%)',
                ...buttonNativeStyle,
              }}
            >
              <Text
                style={
                  harmony()
                    ? {
                        height: pxTransform(18),
                        color: 'white',
                        fontSize: pxTransform(10),
                        lineHeight: pxTransform(10),
                        textAlign: 'center',
                        paddingTop: pxTransform(4),
                        paddingBottom: pxTransform(4),
                      }
                    : {
                        color: 'white',
                        fontSize: pxTransform(10),
                        lineHeight: rn() ? pxTransform(18) : '18px',
                        textAlign: 'center',
                      }
                }
              >
                {value}
              </Text>
            </View>
          }
          onChange={(val: any) => setValue(val)}
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo11

```


### 垂直方向



```tsx
import React, { useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo12 = () => {
  const verticalStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          height: pxTransform(180),
          paddingTop: pxTransform(10),
          paddingBottom: pxTransform(10),
          paddingLeft: pxTransform(10),
          paddingRight: pxTransform(10),
        }
      : {
          height: '180px',
          padding: '10px',
        }
  }, [])
  const viewStyle = useMemo(
    () => ({ width: pxTransform(150), height: '100%' }),
    []
  )
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={verticalStyle}>
        <View style={viewStyle}>
          <Range
            defaultValue={20}
            vertical
            onEnd={(val) => showToast(`${val}`)}
          />
        </View>
        <View style={viewStyle}>
          <Range
            defaultValue={[20, 80]}
            vertical
            range
            onEnd={(val) => showToast(`${val}`)}
          />
        </View>
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo12

```


### 刻度标记



```tsx
import React, { useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { Range, Cell /* , Toast */ } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo13 = () => {
  const cellStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          paddingTop: pxTransform(40),
          paddingBottom: pxTransform(40),
          paddingLeft: pxTransform(18),
          paddingRight: pxTransform(18),
        }
      : {
          padding: '40px 18px',
        }
  }, [])
  const verticalStyle = useMemo(() => {
    return harmonyAndRn()
      ? {
          height: pxTransform(180),
          paddingTop: pxTransform(10),
          paddingBottom: pxTransform(10),
          paddingLeft: pxTransform(10),
          paddingRight: pxTransform(10),
        }
      : {
          height: '180px',
          padding: '10px',
        }
  }, [])
  const [marks] = useState({
    0: 'Start',
    20: 20,
    40: 40,
    60: 60,
    80: 80,
    100: 'End',
  })
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const showToast = (msg: string) => {
    setMsg(msg)
    setShow(true)
  }
  return (
    <View>
      <Cell style={cellStyle}>
        <Range
          defaultValue={60}
          maxDescription={null}
          minDescription={null}
          marks={marks}
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      <Cell style={cellStyle}>
        <Range
          defaultValue={[20, 80]}
          marks={marks}
          range
          onEnd={(val) => showToast(`${val}`)}
        />
      </Cell>
      <Cell style={verticalStyle}>
        <Range
          defaultValue={60}
          vertical
          maxDescription={null}
          minDescription={null}
          marks={marks}
          onEnd={(val) => showToast(`${val}`)}
          style={{ flex: 1 }}
        />
        <Range
          defaultValue={[20, 80]}
          vertical
          marks={marks}
          range
          onEnd={(val) => showToast(`${val}`)}
          style={{ flex: 1 }}
        />
      </Cell>
      {/* <Toast
        type="text"
        visible={show}
        content={msg}
        onClose={() => {
          setShow(false)
        }}
      /> */}
    </View>
  )
}
export default Demo13

```


## Range

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认进度百分比，非受控 | `number` \| `number[]` | `0` |
| value | 当前进度百分比，受控 | `number` \| `number[]` | `0` |
| range | 是否开启双滑块模式 | `boolean` | `false` |
| max | 最大值 | `number` | `100` |
| min | 最小值 | `number` | `0` |
| maxDescription | 最大值描述，传 `null` 表示隐藏 | `ReactNode` | `-` |
| minDescription | 最小值描述，传 `null` 表示隐藏 | `ReactNode` | `-` |
| currentDescription | 当前值描述，传 `null` 表示隐藏 | `((value) => ReactNode)` | `-` |
| step | 步长 | `number` | `1` |
| disabled | 是否禁用滑块 `boolean` | `false` | `-` |
| vertical | 是否竖向展示 | `boolean` | `false` |
| marks | 刻度标示 | `Object{key: number}` | `{}` |
| button | 自定义滑动按钮 | `ReactNode` | `-` |
| onChange | 进度实时变化，通常在受控方式中与 value 一起使用 | `(value) => void` | `-` |
| onStart | 开始拖动时触发 | `-` | `-` |
| onEnd | 结束拖动时触发 | `(value) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/docs/component/common/ConfigProvider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-range-color | 字体颜色 | `$color-title` |
| \--nutui-range-margin | 进度条外边距 | `15px` |
| \--nutui-range-height | 进度条的宽度 | `4px` |
| \--nutui-range-active-color | 激活颜色 | `$color-primary` |
| \--nutui-range-inactive-color | 未激活颜色 | `#fa958c` |
| \--nutui-range-button-background | 按钮背景 | `$white` |
| \--nutui-range-button-width | 按钮宽度 | `24px` |
| \--nutui-range-button-height | 按钮高度 | `24px` |
| \--nutui-range-button-border | 按钮边框 | `1px solid $color-primary` |