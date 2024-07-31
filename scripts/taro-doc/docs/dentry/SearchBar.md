---
sidebar_class_name: hasIcon
---

# SearchBar组件

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用于搜索场景的输入框组件。

## 引入

```tsx
import { SearchBar } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

`SearchBar` 的 `placeholder` 属性支持自定义。

```tsx
import React from 'react'
import { SearchBar } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <SearchBar backable placeholder="上京东，购好物" />
    </>
  )
}
export default Demo1
```

### 搜索框形状及最大长度

`SearchBar` 的 `shape` 属性支持定义圆角直角，`maxLength` 可控制输入字符的最大长度。

```tsx
import React from 'react'
import { SearchBar } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <>
      <SearchBar shape="round" maxLength={5} />
    </>
  )
}
export default Demo2
```

### 搜索框内外背景设置

`SearchBar` 通过 CSS 变量设置。

```tsx
import React, { useState } from 'react'
import { SearchBar, ConfigProvider, Toast } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [show, SetShow] = useState(false)
  const toastShow = () => {
    SetShow(true)
  }
  return (
    <>
      <ConfigProvider
        theme={{
          nutuiSearchbarBackground: 'var(--nutui-color-primary)',
          nutuiSearchbarInputBackground: '#eee',
          nutuiSearchbarInputTextAlign: 'right',
        }}
      >
        <SearchBar onSearch={() => toastShow()} />
      </ConfigProvider>
      <Toast
        type="text"
        visible={show}
        content="search callback"
        onClose={() => {
          SetShow(false)
        }}
      />
    </>
  )
}
export default Demo3
```

### 搜索框文本设置

`SearchBar` 的 `left` 属性可以设置搜索框左侧内容，`right` 属性可以设置搜索框右侧内容

```tsx
import React, { useState } from 'react'
import { SearchBar, Toast } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [show, SetShow] = useState(false)
  const toastShow = () => {
    SetShow(true)
  }
  return (
    <>
      <SearchBar left="文本" right="测试" onSearch={() => toastShow()} />
      <Toast
        type="text"
        visible={show}
        content="search callback"
        onClose={() => {
          SetShow(false)
        }}
      />
    </>
  )
}
export default Demo4
```

### 自定义图标设置

`SearchBar` 的 `left` `right` `rightIn` 属性可以设置自定义图标

```tsx
import React from 'react'
import { SearchBar } from '@nutui/nutui-react-taro'
import {
  ArrowLeft,
  Photograph,
  More,
  Close,
  Star,
} from '@nutui/icons-react-taro'

const Demo5 = () => {
  return (
    <>
      <SearchBar
        left={
          <>
            <ArrowLeft size={20} />
            <Close size={20} />
          </>
        }
        right={
          <>
            <Star
              size={20}
              style={{
                color: 'var(--nutui-color-primary)',
              }}
            />
            <More size={20} />
          </>
        }
        rightIn={
          <Photograph
            size={16}
            onClick={() => {
              console.log('Photograph right in')
            }}
          />
        }
      />
    </>
  )
}
export default Demo5
```

### 自定义设置

`SearchBar` 的 `leftIn` 属性可以设置自定义内容

```tsx
import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { SearchBar, Popover } from '@nutui/nutui-react-taro'
import { ArrowDown } from '@nutui/icons-react-taro'

const Demo6 = () => {
  const itemList = [
    { name: 'option1' },
    { name: 'option2' },
    { name: 'option3' },
  ]
  const [lightTheme, setLightTheme] = useState(false)
  return (
    <>
      <SearchBar
        leftIn={
          <Popover
            visible={lightTheme}
            onClick={() => {
              lightTheme ? setLightTheme(false) : setLightTheme(true)
            }}
            list={itemList}
          >
            <View
              style={{
                fontSize: '12px',
                width: '50px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              更多
              <ArrowDown size={12} style={{ marginLeft: '5px' }} />
            </View>
          </Popover>
        }
      />
    </>
  )
}
export default Demo6
```

### 数据改变监听

`SearchBar` 的 `onChange` 可获取输入的内容。

```tsx
import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { SearchBar } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <SearchBar onChange={(val: string) => setValue(val)} maxLength={10} />
      <View
        style={{
          height: '40px',
          lineHeight: '40px',
          color: '#666',
          fontSize: '14px',
        }}
      >
        {value}
      </View>
    </>
  )
}
export default Demo7
```

## SearchBar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| value | 当前输入的值 | `string` | `-` |
| placeholder | 输入框默认暗纹 | `string` | `请输入` |
| shape | 搜索框形状，可选值为 `round` | `string` | `square` |
| disabled | 是否禁用输入框 | `boolean` | `false` |
| readOnly | 输入框只读 | `boolean` | `false` |
| maxLength | 最大输入长度 | `number` | `9999` |
| clearable | 是否展示清除按钮 | `boolean` | `true` |
| autoFocus | 是否自动聚焦 | `boolean` | `false` |
| backable | 是否展示返回按钮 | `boolean` | `false` |
| left | 搜索框左侧区域 | `ReactNode` | `-` |
| right | 搜搜框右侧区域 | `ReactNode` | `-` |
| leftIn | 输入框内左侧区域 | `ReactNode` | `<Search size="12" />` |
| rightIn | 输入框内右侧区域 | `ReactNode` | `-` |
| onChange | 输入内容时触发 | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | `-` |
| onFocus | 聚焦时触发 | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onBlur | 失焦时触发 | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onClear | 点击清空时触发 | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |
| onSearch | 确定搜索时触发 | `(val: string) => void` | `-` |
| onInputClick | 点击输入区域时触发 | `(event: MouseEvent<HTMLInputElement>) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-searchbar-width | 搜索框的宽度 | `100%` |
| \--nutui-searchbar-padding | 搜索框的padding值 | `6px 16px` |
| \--nutui-searchbar-background | 搜索框背景色 | `$color-background` |
| \--nutui-searchbar-color | 搜索框字色 | `$color-title` |
| \--nutui-searchbar-gap | 搜索框各个间距 | `16px` |
| \--nutui-searchbar-font-size | 搜索框字号 | `$font-size-base` |
| \--nutui-searchbar-content-padding | 搜索框中间内容区的padding值 | `0px 12px` |
| \--nutui-searchbar-content-background | 搜索框中间内容区的背景色 | `$color-background-overlay` |
| \--nutui-searchbar-content-border-radius | 搜索框内容区圆角 | `4px` |
| \--nutui-searchbar-content-round-border-radius | 搜索框内容区在round模式下的圆角 | `18px` |
| \--nutui-searchbar-input-height | 搜索框输入区高度 | `32px` |
| \--nutui-searchbar-input-padding | 搜索框输入区padding | `0 4px` |
| \--nutui-searchbar-input-text-color | 搜索框输入区字色 | `$color-title` |
| \--nutui-searchbar-input-curror-color | 搜索框输入区输入色 | `$color-title` |
| \--nutui-searchbar-input-text-align | 搜索框输入区对齐方式 | `left` |
