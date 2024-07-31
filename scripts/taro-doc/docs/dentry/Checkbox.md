---
sidebar_class_name: hasIcon
---

# Checkbox 复选按钮

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

多选按钮用于选择。

## 引入

```tsx
import { Checkbox } from '@dongdesign/ui'
```

## 示例代码

### 非受控

```tsx
import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Checklist } from '@nutui/icons-react-taro'
import { Cell, Checkbox } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [checked] = useState(false)
  return (
    <>
      <Cell className="nut-cell">
        <Checkbox className="test" label="复选框" defaultChecked={checked} />
      </Cell>
      <Cell className="nut-cell">
        <Checkbox
          style={{ marginInlineEnd: '8px' }}
          shape="button"
          className="test"
          label={
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <View>复选框</View>
              <View style={{ color: 'gray' }}>描述信息</View>
            </View>
          }
          defaultChecked={!checked}
        />
        <Checkbox
          style={{ marginInlineEnd: '8px' }}
          shape="button"
          activeIcon={
            <Checklist className="nut-checkbox-button-icon-checked" />
          }
          className="test"
          label={
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <View>复选框</View>
              <View style={{ color: 'gray' }}>描述信息</View>
            </View>
          }
          defaultChecked={checked}
        />
        <Checkbox
          shape="button"
          className="test"
          disabled
          label={
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <View>复选框</View>
              <View>描述信息</View>
            </View>
          }
          defaultChecked={checked}
        />
      </Cell>
    </>
  )
}
export default Demo1
```

### 受控

```tsx
import React, { useState } from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react-taro'
import { Checklist } from '@nutui/icons-react-taro'

const Demo2 = () => {
  const [controlled, setControlled] = useState(false)
  const [controlledGroup, setControlledGroup] = useState(['2'])
  const [optionsDemo1] = useState([
    {
      label: '选项 1',
      value: '1',
    },
    {
      label: '选项 2',
      value: '2',
      disabled: true,
    },
    {
      label: '选项 3',
      value: '3',
    },
  ])
  return (
    <>
      <Cell className="nut-cell">
        <Checkbox
          className="test"
          label="复选框"
          checked={controlled}
          onChange={(val) => setControlled(val)}
        />
      </Cell>
      <Cell className="nut-cell">
        <Checkbox.Group
          labelPosition="left"
          value={controlledGroup}
          onChange={(value) => setControlledGroup(value)}
        >
          <span>
            <Checkbox value="1" label={optionsDemo1[0].label} />
          </span>
          <Checkbox value="2" label={optionsDemo1[1].label} />
          <Checkbox value="3" disabled label={optionsDemo1[2].label} />
        </Checkbox.Group>
      </Cell>
      <Cell className="nut-cell">
        <Checkbox.Group
          labelPosition="left"
          value={controlledGroup}
          onChange={(value) => setControlledGroup(value)}
        >
          <Checkbox
            activeIcon={
              <Checklist className="nut-checkbox-button-icon-checked" />
            }
            shape="button"
            value="1"
            label={optionsDemo1[0].label}
          />
          <Checkbox
            activeIcon={
              <Checklist className="nut-checkbox-button-icon-checked" />
            }
            shape="button"
            value="2"
            label={optionsDemo1[1].label}
          />
          <Checkbox
            activeIcon={
              <Checklist className="nut-checkbox-button-icon-checked" />
            }
            shape="button"
            value="3"
            label={optionsDemo1[2].label}
            disabled
          />
        </Checkbox.Group>
      </Cell>
    </>
  )
}
export default Demo2
```

### 基础用法

```tsx
import React, { useState } from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [checked, setChecked] = useState(true)
  const [optionsDemo1] = useState([
    {
      label: '选项 1',
      value: '1',
    },
    {
      label: '选项 2',
      value: '2',
      disabled: true,
    },
    {
      label: '选项 3',
      value: '3',
    },
  ])
  return (
    <>
      <Cell className="nut-cell">
        <Checkbox
          className="test"
          labelPosition="left"
          label="复选框"
          defaultChecked={checked}
        />
      </Cell>
      <Cell className="nut-cell">
        <Checkbox.Group labelPosition="left" defaultValue={['1']}>
          <span>
            <Checkbox value="1" label={optionsDemo1[0].label} />
          </span>
          <Checkbox value="2" label={optionsDemo1[1].label} />
          <Checkbox value="3" label={optionsDemo1[2].label} />
        </Checkbox.Group>
      </Cell>
    </>
  )
}
export default Demo3
```

## 半选状态

```tsx
import React from 'react'
import { Cell, Checkbox } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Cell>
      <Checkbox value="1" label="复选框1" checked indeterminate />
    </Cell>
  )
}
export default Demo4
```

## 禁用状态

```tsx
import React from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <>
      <Cell className="nut-cell">
        <Checkbox
          labelPosition="right"
          label="未选时禁用状态"
          checked={false}
          disabled
        />
      </Cell>
      <Cell className="nut-cell">
        <Checkbox
          labelPosition="right"
          label="半选时禁用状态"
          checked
          disabled
          indeterminate
        />
      </Cell>
      <Cell className="nut-cell">
        <Checkbox
          labelPosition="right"
          label="选中时禁用状态"
          checked
          disabled
        />
      </Cell>
    </>
  )
}
export default Demo5
```

## 自定义尺寸

```tsx
import React from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <>
      <Cell className="nut-cell">
        <Checkbox
          style={{
            '--nut-icon-width': '24px',
          }}
          label="自定义尺寸24"
        />
      </Cell>
      <Cell className="nut-cell">
        <Checkbox
          style={{
            '--nut-icon-width': '12px',
          }}
          label="自定义尺寸12"
        />
      </Cell>
    </>
  )
}
export default Demo6
```

## 自定义图标

这里建议同时设置 `icon` 和 `activeIcon` 属性

```tsx
import React from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react-taro'
import { Checklist } from '@nutui/icons-react-taro'

const Demo7 = () => {
  return (
    <>
      <Cell className="nut-cell">
        <Checkbox
          defaultChecked={false}
          icon={<Checklist />}
          activeIcon={<Checklist className="nut-checkbox-icon-checked" />}
        >
          自定义图标
        </Checkbox>
      </Cell>
      <Cell className="nut-cell">
        <Checkbox.Group
          labelPosition="left"
          defaultValue={['1']}
          style={{ width: '100%' }}
        >
          <Checkbox
            value="1"
            defaultChecked={false}
            icon={<Checklist />}
            activeIcon={<Checklist className="nut-checkbox-icon-checked" />}
          >
            自定义图标
          </Checkbox>
          <Checkbox
            value="2"
            defaultChecked={false}
            icon={<Checklist />}
            activeIcon={<Checklist className="nut-checkbox-icon-checked" />}
          >
            自定义图标
          </Checkbox>
        </Checkbox.Group>
      </Cell>
    </>
  )
}
export default Demo7
```

## change事件

值发生变化时，将触发change事件

```tsx
import React, { useState } from 'react'
import { Checkbox, Toast, Cell } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [showToast, setShowToast] = useState(false)
  const [content, setContent] = useState('')
  const handleChange = (state: any) => {
    if (state) {
      setContent('选中')
    } else {
      setContent('取消选中')
    }
    setShowToast(true)
  }
  return (
    <>
      <Toast
        content={content}
        visible={showToast}
        onClose={() => {
          setShowToast(false)
        }}
      />
      <Checkbox
        defaultChecked={false}
        onChange={(state) => handleChange(state)}
      >
        change复选框
      </Checkbox>
      <Cell className="nut-cell">
        <Checkbox
          defaultChecked={false}
          onChange={(state) => handleChange(state)}
        >
          复选框
        </Checkbox>
      </Cell>
    </>
  )
}
export default Demo8
```

## Checkbox.Group 使用

```tsx
import React, { useState } from 'react'
import { Checkbox, Toast, Cell } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  const [showToast, setShowToast] = useState(false)
  const [content, setContent] = useState('')
  const handleChange = (value: any) => {
    setContent(value.toString())
    setShowToast(true)
    setCheckboxgroup1(value)
  }
  return (
    <>
      <Cell>
        <Toast
          content={content}
          visible={showToast}
          onClose={() => {
            setShowToast(false)
          }}
        />
        <Checkbox.Group
          defaultValue={checkboxgroup1}
          direction="horizontal"
          onChange={(value) => handleChange(value)}
        >
          <Checkbox value="1">选项</Checkbox>
          <Checkbox value="2">选项</Checkbox>
          <Checkbox value="3">选项</Checkbox>
          <Checkbox value="4">选项</Checkbox>
        </Checkbox.Group>
      </Cell>
      <Cell>
        <span>选中：{checkboxgroup1.toString()}</span>
      </Cell>
    </>
  )
}
export default Demo9
```

## Checkbox.Group 禁用

```tsx
import React, { useState } from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const [checkboxgroup1] = useState(['1'])
  return (
    <Cell>
      <Checkbox.Group
        defaultValue={checkboxgroup1}
        disabled
        direction="horizontal"
      >
        <Checkbox value="1">选项</Checkbox>
        <Checkbox value="2">选项</Checkbox>
        <Checkbox value="3">选项</Checkbox>
        <Checkbox value="4">选项</Checkbox>
      </Checkbox.Group>
    </Cell>
  )
}
export default Demo10
```

## Checkbox.Group 全选/取消

```tsx
import React, { useState, useRef } from 'react'
import { Checkbox, Button, Toast, Cell } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  const [showToast, setShowToast] = useState(false)
  const [content, setContent] = useState('')
  const handleChange = (value: any) => {
    setContent(`${value.length === 4 ? '全选' : '取消全选'}`)
    setShowToast(true)
  }
  return (
    <>
      <Cell>
        <Toast
          content={content}
          visible={showToast}
          onClose={() => {
            setShowToast(false)
          }}
        />
        <Checkbox.Group
          labelPosition="left"
          direction="horizontal"
          ref={checkboxgroup2Ref}
          defaultValue={checkboxgroup2}
          onChange={(value) => handleChange(value)}
        >
          <Checkbox value="1">选项</Checkbox>
          <Checkbox value="2">选项</Checkbox>
          <Checkbox value="3">选项</Checkbox>
          <Checkbox value="4">选项</Checkbox>
        </Checkbox.Group>
      </Cell>
      <Cell>
        <Button
          type="primary"
          onClick={() => {
            ;(checkboxgroup2Ref.current as any).toggle(true)
          }}
          style={{ marginInlineEnd: '20px' }}
        >
          全选
        </Button>
        <Button
          onClick={() => {
            ;(checkboxgroup2Ref.current as any).toggle(false)
          }}
          style={{ marginInlineEnd: '20px' }}
        >
          取消
        </Button>
        <Button
          type="warning"
          onClick={() => {
            ;(checkboxgroup2Ref.current as any).reverse()
          }}
        >
          反选
        </Button>
      </Cell>
    </>
  )
}
export default Demo11
```

## checkboxGroup使用，限制最大可选数（3个）, 至少选择数（1个）

```tsx
import React, { useState } from 'react'
import { Checkbox, Toast, Cell } from '@nutui/nutui-react-taro'

const Demo12 = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const [showToast, setShowToast] = useState(false)
  const [content, setContent] = useState('')
  const handleLimit = (type: any) => {
    setContent(type === 'max' ? '最多选择3项' : '至少选择1项')
    setShowToast(true)
  }
  return (
    <Cell>
      <Toast
        content={content}
        visible={showToast}
        onClose={() => {
          setShowToast(false)
        }}
      />
      <Checkbox.Group
        defaultValue={checkboxgroup2}
        max={3}
        min={1}
        onLimit={(type) => handleLimit(type)}
      >
        <Checkbox value="1">选项</Checkbox>
        <Checkbox value="2">选项</Checkbox>
        <Checkbox value="3">选项</Checkbox>
        <Checkbox value="4">选项</Checkbox>
      </Checkbox.Group>
    </Cell>
  )
}
export default Demo12
```

## 全选/半选/取消

```tsx
import React, { useState, useRef } from 'react'
import { View } from '@tarojs/components'
import { Checkbox, Cell } from '@nutui/nutui-react-taro'

const Demo13 = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  const [checkbox1, setCheckbox1] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  return (
    <>
      <Cell>
        <View style={{ width: '50%' }}>
          <Checkbox
            checked={checkbox1}
            indeterminate={indeterminate}
            onChange={(state) => {
              if (state) {
                setIndeterminate(false)
              }
              setCheckbox1(state)
              ;(checkboxgroup2Ref.current as any).toggle(state)
            }}
          >
            全选
          </Checkbox>
        </View>

        <Checkbox.Group
          ref={checkboxgroup2Ref}
          direction="horizontal"
          defaultValue={checkboxgroup2}
          onChange={(value) => {
            if (value.length === 4) {
              setIndeterminate(false)
              setCheckbox1(true)
            } else if (value.length && value.length < 4) {
              setIndeterminate(true)
              setCheckbox1(true)
            } else {
              setCheckbox1(false)
            }
          }}
        >
          <Checkbox value="1">选项</Checkbox>
          <Checkbox value="2">选项</Checkbox>
          <Checkbox value="3">选项</Checkbox>
          <Checkbox value="4">选项</Checkbox>
        </Checkbox.Group>
      </Cell>
    </>
  )
}
export default Demo13
```

## 配置 options 渲染复选按钮

```tsx
import React, { useState } from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react-taro'

const Demo14 = () => {
  const [checkboxVal] = useState(['1'])
  const [optionsDemo1] = useState([
    {
      label: '选项1',
      value: '1',
    },
    {
      label: '选项2',
      value: '2',
      disabled: true,
    },
    {
      label: '选项3',
      value: '3',
    },
  ])
  return (
    <Cell>
      <Checkbox.Group options={optionsDemo1} defaultValue={checkboxVal} />
    </Cell>
  )
}
export default Demo14
```

## 列表

```tsx
import React from 'react'
import { Checkbox } from '@nutui/nutui-react-taro'

const Demo15 = () => {
  return (
    <Checkbox.Group defaultValue={['1']} labelPosition="left" list>
      <Checkbox value="1" label="选项1" />
      <Checkbox value="2" label="选项2" />
      <Checkbox value="3" label="选项3" />
    </Checkbox.Group>
  )
}
export default Demo15
```

## Checkbox

### props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| checked | 是否选中 | `boolean` | `false` |
| defaultChecked | 初始是否选中 | `boolean` | `false` |
| disabled | 是否禁用选择 | `boolean` | `false` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| icon | 选中前 | `ReactNode` | `'CheckNormal'` |
| activeIcon | 选中后 | `ReactNode` | `'Checked'` |
| indeterminateIcon | 半选状态 | `ReactNode` | `'CheckDisabled'` |
| label | 复选框的文本内容 | `string` | `-` |
| value | 标识值，用于 Group 模式 | `string` \| `number` | `-` |
| shape | 形状 | `button` \| `round` | `round` |
| onChange | 值变化时触发 | `(value: boolean) => void` | `-` |

## Checkbox.Group

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| value | 当前选中项的标识符 | `string` \| `number` | `-` |
| defaultValue | 初始选中项的标识符 | `string` \| `number` | `-` |
| disabled | 是否禁用选择,将用于其下的全部复选框 | `boolean` | `false` |
| max | 限制最大可选数 | `number` | `-` |
| min | 限制至少选择数 | `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| direction | 使用横纵方向 可选值 horizontal、vertical | `string` | `vertical` |
| options | 配置 options 渲染复选按钮 | `Array<{ label: string value: string disabled?: boolean }>` | `-` |
| list | 列表模式 | `boolean` | `false` |
| onChange | 值变化时触发 | `(value: string[]) => void` | `-` |

### Ref

| 方法名 | 说明 | 参数 |
| :--- | :--- | :--- |
| toggle | 全选/取消 | 传 `true`,表示全选，传 `false`,表示取消全选 |
| reverse | 反选 | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-checkbox-label-color | label 的文本颜色 | `$color-title` |
| \--nutui-checkbox-label-margin-left | label 的左边距 | `15px` |
| \--nutui-checkbox-label-font-size | label 的字号 | `14px` |
| \--nutui-checkbox-button-font-size | shape为button的字号 | `12px` |
| \--nutui-checkbox-button-color | 字体颜色 | `$color-text` |
| \--nutui-checkbox-button-background | shape为button的背景色 | `$color-background` |
| \--nutui-checkbox-label-button-border-color | shape为button的边框颜色 | `$color-primary` |
| \--nutui-checkbox-button-active-border | shape为button选中态的边框 | `1px solid $color-primary` |
| \--nutui-checkbox-button-padding | shape为button的内边距 | `5px 18px` |
| \--nutui-checkbox-button-border-radius | shape为button的圆角 | `15px` |
| \--nutui-checkbox-list-background-colors | 列表背景色 | `15px` |
| \--nutui-checkbox-list-item-border | 列表项的边框 | `15px` |
| \--nutui-checkbox-list-padding | 列表的padding | `15px` |
| \--nutui-checkbox-list-item-padding | 列表项的padding | `15px` |
