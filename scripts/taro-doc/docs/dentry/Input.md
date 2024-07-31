---
sidebar_class_name: hasIcon
---

# Input 输入框

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用户可以在文本框里输入内容。

## 引入

```tsx
import { Input } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Input
        placeholder="请输入文本"
        placeholderTextColor="#757575"
        onChange={(v) => {
          console.log('onChange', v)
        }}
      />
    </>
  )
}
export default Demo1
```

### 非受控

```tsx
import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <>
      <Input
        defaultValue="NutUI React"
        placeholder="请输入文本"
        placeholderTextColor="#757575"
      />
    </>
  )
}
export default Demo2
```

### 受控

```tsx
import React, { useState } from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [val, setVal] = useState('NutUI React')
  return (
    <>
      <Input
        value={val}
        onChange={(val) => setVal(val)}
        placeholder="请输入文本"
        placeholderTextColor="#757575"
      />
    </>
  )
}
export default Demo3
```

### 自定义类型

```tsx
import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <>
      <Input
        type="text"
        placeholder="请输入文本"
        placeholderTextColor="#757575"
      />
      <Input
        type="password"
        placeholder="请输入密码"
        placeholderTextColor="#757575"
      />
      <Input
        type="digit"
        placeholder="请输入数字"
        placeholderTextColor="#757575"
      />
      <Input
        type="number"
        placeholder="请输入整数"
        placeholderTextColor="#757575"
      />
    </>
  )
}
export default Demo4
```

### 禁用和只读

```tsx
import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <>
      <Input readOnly placeholder="输入框只读" placeholderTextColor="#757575" />
      <Input disabled placeholder="输入框禁用" placeholderTextColor="#757575" />
    </>
  )
}
export default Demo5
```

### 显示清除图标

```tsx
import React from 'react'
import { Input } from '@nutui/nutui-react-taro'
import { Close } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo6 = () => {
  return (
    <>
      <Input
        clearable
        placeholder="显示清除图标"
        placeholderTextColor="#757575"
      />
      <Input
        clearable
        clearIcon={!harmonyAndRn() ? <Close /> : null}
        placeholder="显示清除图标"
        placeholderTextColor="#757575"
      />
    </>
  )
}
export default Demo6
```

### 受控下的清除

```tsx
import React, { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Button, Input } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo7 = () => {
  const [keyword, setKeyword] = useState('')
  return (
    <View
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
      }}
    >
      <Input
        placeholder="受控下的清除"
        value={keyword}
        onChange={setKeyword}
        placeholderTextColor="#757575"
      />
      <Button
        type="primary"
        size="small"
        onClick={() => {
          setKeyword('')
        }}
        style={{ marginRight: pxTransform(10) }}
      >
        <Text style={{ color: '#ffffff', fontSize: pxTransform(12) }}>
          点我清除
        </Text>
      </Button>
    </View>
  )
}
export default Demo7
```

### 字数统计

```tsx
import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Input } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo8 = () => {
  const [currentLength, setCurrentLength] = useState(0)
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
        }}
      >
        <Input
          type="text"
          maxLength={20}
          onChange={(val) => setCurrentLength(val.length)}
          placeholderTextColor="#757575"
        />
        <View
          style={{
            marginRight: pxTransform(10),
          }}
        >
          <Text
            style={{
              width: pxTransform(40),
              fontSize: pxTransform(12),
            }}
          >
            {currentLength} / 20
          </Text>
        </View>
      </View>
    </>
  )
}
export default Demo8
```

### 带密码可见

```tsx
import React, { useState } from 'react'
import { Input } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Eye, Marshalling } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo9 = () => {
  const [inputType, setInputType] = useState('password')
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
        }}
      >
        <Input
          type={inputType}
          placeholder="请输入密码"
          placeholderTextColor="#757575"
        />
        <View
          style={{
            display: 'flex',
            marginRight: pxTransform(10),
            alignItems: 'center',
          }}
          onClick={() =>
            setInputType(inputType === 'text' ? 'password' : 'text')
          }
        >
          {/* eslint-disable-next-line no-nested-ternary */}
          {inputType === 'text' ? (
            !harmonyAndRn() ? (
              <Eye color="var(--nutui-gray-7)" />
            ) : null
          ) : !harmonyAndRn() ? (
            <Marshalling color="var(--nutui-gray-7)" />
          ) : null}
        </View>
      </View>
    </>
  )
}
export default Demo9
```

### 格式化输入内容

```tsx
import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const formatter = (value: string) => value.replace(/\d/g, '')
  return (
    <>
      <Input
        formatter={formatter}
        placeholder="在输入时执行格式化"
        placeholderTextColor="#757575"
      />
      <Input
        formatter={formatter}
        formatTrigger="onBlur"
        placeholder="在失焦时执行格式化"
        placeholderTextColor="#757575"
      />
    </>
  )
}
export default Demo10
```

### 对齐方式

```tsx
import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  return (
    <>
      <Input
        align="left"
        placeholder="文本内容对齐"
        placeholderTextColor="#757575"
      />
      <Input
        align="right"
        placeholder="文本内容对齐"
        placeholderTextColor="#757575"
      />
    </>
  )
}
export default Demo11
```

### 事件

```tsx
import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo12 = () => {
  return (
    <>
      <Input placeholder="事件" placeholderTextColor="#757575" />
    </>
  )
}
export default Demo12
```

### 布局

```tsx
import React from 'react'
import { Button, Input } from '@nutui/nutui-react-taro'
import { Tips } from '@nutui/icons-react-taro'
import { Text, View } from '@tarojs/components'
import { harmonyAndRn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo13 = () => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
        }}
      >
        {!harmonyAndRn() ? (
          <Tips style={{ marginLeft: pxTransform(10) }} />
        ) : null}
        <Input
          placeholder="请输入短信验证码"
          placeholderTextColor="#757575"
          style={{ '--nutui-input-padding': '10px' }}
        />
        <View
          style={{
            display: 'flex',
            width: pxTransform(100),
            marginRight: pxTransform(10),
            alignItems: 'center',
          }}
        >
          <Button type="primary" size="small" style={{ flexShrink: 1 }}>
            <Text style={{ fontSize: pxTransform(12), color: '#ffffff' }}>
              获取验证码
            </Text>
          </Button>
        </View>
      </View>
    </>
  )
}
export default Demo13
```

### 边框

```tsx
import React from 'react'
import { Input } from '@nutui/nutui-react-taro'

const Demo11 = () => {
  return (
    <>
      <Input
        style={{ '--nutui-input-border-bottom-width': '1px' }}
        placeholder="边框"
        placeholderTextColor="#757575"
      />
    </>
  )
}
export default Demo11
```

## Input

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| defaultValue | 初始默认值 | `string` | `-` |
| value | 初始默认值 | `string` | `-` |
| type | 输入框类型，支持原生 `input` 标签的所有 `type` 属性，另外还支持 `number` `digit` | `string` | `text` |
| name | 组件名字，用于表单提交获取数据 | `string` | `-` |
| placeholder | 输入框为空时占位符 | `string` | `-` |
| align | 输入框内容对齐方式，可选值 `left`、`center`、`right` | `string` | `left` |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| autoFocus | 是否自动获得焦点，iOS 系统不支持该属性 | `boolean` | `false` |
| maxLength | 限制最长输入字符 | `string` \| `number` | `-` |
| clearable | 展示清除 Icon | `boolean` | `false` |
| clearIcon | 清除图标 Icon <a href="#/icon">可参考 Icon </a> | `ReactNode` | `MaskClose` |
| confirmType | 键盘右下角按钮的文字，仅在type='text'时生效,可选值 send：发送、search：搜索、next：下一个、go：前往、done：完成 | `string` | `done` |
| formatter | 输入内容格式化函数 | `(val: string) => string` | `-` |
| formatTrigger | 格式化函数触发的时机，可选值为 `onChange`、`onBlur` | `string` | `-` |
| onChange | 输入框内容变化时触发 | `(value: string) => void` | `-` |
| onBlur | 失去焦点后触发 | `(value: string) => void` | `-` |
| onFocus | 获得焦点后触发 | `(value: string) => void` | `-` |
| onClear | 点击清空按钮时触发 | `(value: string) => void` | `-` |
| onClick | 点击 input 容器触发 | `(value: MouseEvent<HTMLDivElement>) => void` | `-` |

此外还支持 Taro 中的 [Input 属性](https://docs.taro.zone/docs/components/forms/input/)

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-input-border-bottom | 边框颜色 | `#eaf0fb` |
| \--nutui-input-border-bottom-width | 边框宽度 | `0px` |
| \--nutui-input-color | 文本颜色 | `$color-title` |
| \--nutui-input-disabled-color | 禁用的文本颜色 | `#c8c9cc` |
| \--nutui-input-background-color | 输入框背景颜色 | `$color-background-overlay` |
| \--nutui-input-border-radius | 输入框圆角 | `0` |
| \--nutui-input-font-size | 文本字号 | `$font-size-base` |
| \--nutui-input-padding | 输入框容器的内边距 | `10px 25px` |
