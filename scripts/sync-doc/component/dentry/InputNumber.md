# InputNumber 数字输入框

通过点击按钮控制数字增减。

## 引入

```tsx
import { InputNumber } from '@dongdesign/ui';
```

## 示例代码

### 基础用法

初始化一个默认值



```tsx
import React from 'react'
import { Cell, InputNumber } from '@dongdesign/ui'

const Demo1 = () => {
  return (
    <Cell>
      <InputNumber defaultValue={1} allowEmpty />
    </Cell>
  )
}
export default Demo1

```


### 步长设置

设置步长 `step` 5



```tsx
import React from 'react'
import { Cell, InputNumber } from '@dongdesign/ui'

const Demo2 = () => {
  return (
    <Cell>
      <InputNumber defaultValue={0} min={0} step={5} />
    </Cell>
  )
}
export default Demo2

```


### 限制输入范围

`min` 和 `max` 属性分别表示最小值和最大值



```tsx
import React, { useState } from 'react'
import { Cell, InputNumber } from '@dongdesign/ui'

const Demo3 = () => {
  const overlimit = () => {
    toastShow('超出限制事件触发', 'warn')
  }
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const [toastType, SetToastType] = useState('text')

  const toastShow = (msg: any, type: string) => {
    SetToastMsg(msg)
    SetToastType(type)
    SetShow(true)
  }

  return (
    <>
      <Cell>
        <InputNumber
          defaultValue={10}
          min={10}
          max={20}
          onOverlimit={overlimit}
        />
      </Cell>
      {/* <Toast
        type={toastType}
        visible={show}
        content={toastMsg}
        onClose={() => {
          SetShow(false)
        }}
      /> */}
    </>
  )
}
export default Demo3

```


### 禁用状态

`disabled` 禁用状态下无法点击按钮或修改输入框。



```tsx
import React from 'react'
import { Cell, InputNumber } from '@dongdesign/ui'

const Demo4 = () => {
  return (
    <Cell>
      <InputNumber defaultValue={0} disabled />
    </Cell>
  )
}
export default Demo4

```


### 只读禁用输入框

`readOnly` 设置只读禁用输入框输入行为



```tsx
import React from 'react'
import { Cell, InputNumber } from '@dongdesign/ui'

const Demo5 = () => {
  return (
    <Cell>
      <InputNumber defaultValue={1} readOnly />
    </Cell>
  )
}
export default Demo5

```


### 设置按钮样式

可使用`ConfigProvider`组件来设置按钮样式。



```tsx
import React from 'react'
import { Cell, ConfigProvider, InputNumber } from '@dongdesign/ui'

const Demo6 = () => {
  const customTheme = {
    nutuiInputnumberButtonWidth: '30px',
    nutuiInputnumberButtonHeight: '30px',
    nutuiInputnumberButtonBorderRadius: '2px',
    nutuiInputnumberButtonBackgroundColor: `#f4f4f4`,
    nutuiInputnumberInputHeight: '30px',
    nutuiInputnumberInputMargin: '0 2px',
  }

  const customTheme2 = {
    nutuiInputnumberButtonWidth: '24px',
    nutuiInputnumberButtonHeight: '24px',
    nutuiInputnumberButtonBackgroundColor: `#f4f4f4`,
    nutuiInputnumberInputBackgroundColor: '#fff',
    nutuiInputnumberInputMargin: '0 2px',
  }

  return (
    <>
      <Cell>
        <ConfigProvider theme={customTheme}>
          <InputNumber defaultValue={1} />
        </ConfigProvider>
      </Cell>
      <Cell>
        <ConfigProvider theme={customTheme2}>
          <InputNumber defaultValue={1} />
        </ConfigProvider>
      </Cell>
    </>
  )
}
export default Demo6

```


### 支持小数点

设置步长 `step` 0.1 `decimal-places` 小数保留1位



```tsx
import React from 'react'
import { Cell, InputNumber } from '@dongdesign/ui'

const Demo7 = () => {
  return (
    <Cell>
      <InputNumber defaultValue={5.5} step={0.1} digits={1} readOnly />
    </Cell>
  )
}
export default Demo7

```


### 支持异步修改

通过 `change` 事件和 `model-value` 进行异步修改



```tsx
import React, { useState } from 'react'
import { Cell, InputNumber } from '@dongdesign/ui'

const Demo8 = () => {
  const [inputValue, setInputValue] = useState(0)
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const [toastType, SetToastType] = useState('text')

  const toastShow = (msg: any, type: string) => {
    SetToastMsg(msg)
    SetToastType(type)
    SetShow(true)
  }
  const onChange = (value: string | number) => {
    toastShow('异步演示 2 秒后更改', 'loading')
    setTimeout(() => {
      setInputValue(Number(value))
      SetShow(false)
    }, 2000)
  }
  return (
    <>
      <Cell>
        <InputNumber value={inputValue} min="-6" onChange={onChange} async />
      </Cell>
      {/* <Toast
        type={toastType}
        visible={show}
        content={toastMsg}
        onClose={() => {
          SetShow(false)
        }}
      /> */}
    </>
  )
}
export default Demo8

```


### 支持formatter



```tsx
import React, { useState } from 'react'
import { Cell, ConfigProvider, InputNumber } from '@dongdesign/ui'

const Demo9 = () => {
  const customTheme3 = {
    nutuiInputnumberInputWidth: '60px',
  }
  const [toastType, SetToastType] = useState('text')
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  return (
    <>
      <Cell>
        <ConfigProvider theme={customTheme3}>
          <InputNumber
            className="format-width"
            defaultValue={1000}
            min={10}
            max={15020}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
          />
        </ConfigProvider>
      </Cell>
      <Cell>
        <ConfigProvider theme={customTheme3}>
          <InputNumber
            className="format-width"
            defaultValue={100}
            min={0}
            max={100}
            formatter={(value) => `${value}%`}
          />
        </ConfigProvider>
      </Cell>
      {/* <Toast
        type={toastType}
        visible={show}
        content={toastMsg}
        onClose={() => {
          SetShow(false)
        }}
      /> */}
    </>
  )
}
export default Demo9

```


## InputNumber

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowEmpty | 是否允许内容为空 | `boolean` | `false` |
| defaultValue | 默认值 | `string`  \|  `number` | `0` |
| value | 当前值，受控值 | `string`  \|  `number` | `-` |
| min | 最小值限制 | `string`  \|  `number` | `1` |
| max | 最大值限制 | `string`  \|  `number` | `9999` |
| type | input 的类型 | `digit`  \|  `number` | `digit` |
| step | 步长 | `string`  \|  `number` | `1` |
| digits | 设置保留的小数位 | `string`  \|  `number` | `0` |
| disabled | 禁用所有功能 | `boolean` | `false` |
| readOnly | 只读状态禁用输入框操作行为 | `boolean` | `false` |
| async | 支持异步修改 | `boolean` | `false` |
| formatter | 指定输入框展示值的格式 | `function(value: number \| string): string` | `-` |
| onPlus | 点击增加按钮时触发 | `(e: MouseEvent) => void` | `-` |
| onMinus | 点击减少按钮时触发 | `(e: MouseEvent) => void` | `-` |
| onOverlimit | 点击不可用的按钮时触发 | `(e: MouseEvent) => void` | `-` |
| onChange | 值改变时触发 | `(param: string \| number, e: MouseEvent \| ChangeEvent<HTMLInputElement>) => void` | `-` |
| onFocus | 输入框获得焦点时触发 | `(e: FocusEvent<HTMLInputElement>) => void` | `-` |
| onBlur | 输入框失去焦点时触发 | `(e: ChangeEvent<HTMLInputElement>) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/docs/component/common/ConfigProvider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-inputnumber-input-width | 数字输入框中input的宽度 | `40px` |
| \--nutui-inputnumber-input-height | 数字输入框中input的高度 | `24px` |
| \--nutui-inputnumber-input-background-color | 数字输入框中input的背景颜色 | `$color-background` |
| \--nutui-inputnumber-input-font-color | 数字输入框中input的字号颜色 | `$color-title` |
| \--nutui-inputnumber-input-font-size | 数字输入框中input的字号大小 | `14px` |
| \--nutui-inputnumber-input-border | 数字输入框中input的border值 | `0` |
| \--nutui-inputnumber-input-border-radius | 数字输入框中input的圆角 | `6px` |
| \--nutui-inputnumber-input-margin | 数字输入框中input的margin值 | `0` |
| \--nutui-inputnumber-button-width | 数字输入框左右按钮的宽度 | `14px` |
| \--nutui-inputnumber-button-height | 数字输入框左右按钮的高度 | `16px` |
| \--nutui-inputnumber-button-border-radius | 数字输入框左右按钮的圆角 | `30px` |
| \--nutui-inputnumber-button-background-color | 数字输入框左右按钮的背景色 | `transparent` |
| \--nutui-inputnumber-icon-color | 数字输入框中icon的颜色 | `$color-text` |
| \--nutui-inputnumber-icon-size | 数字输入框中icon的大小 | `8px` |
| \--nutui-inputnumber-disabled-color | 数字输入框禁用色 | `$color-text-disabled` |
