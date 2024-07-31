---
sidebar_class_name: hasIcon
---

# TextArea 文本域

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

文本框内输入或编辑文字，支持限制输入数量。

## 引入

```tsx
import { TextArea } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { TextArea } from '@nutui/nutui-react-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo1 = () => {
  return (
    <TextArea
      defaultValue="基础用法"
      className="text-1"
      style={{ fontSize: pxTransform(12) }}
      onChange={(value) => console.log('change', value)}
      onBlur={() => console.log('blur')}
      onFocus={() => console.log('focus')}
    />
  )
}
export default Demo1
```

### 受控方式

```tsx
import React, { useState } from 'react'
import { TextArea } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [value, setValue] = useState('')
  return <TextArea value={value} onChange={(value) => setValue(value)} />
}
export default Demo2
```

### 显示字数统计

```tsx
import React from 'react'
import { TextArea } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return <TextArea showCount maxLength={20} />
}
export default Demo3
```

### 自定义行数，设置自动高度

```tsx
import React from 'react'
import { TextArea } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return <TextArea rows={1} autoSize />
}
export default Demo4
```

### 自定义字数统计样式

```tsx
import React from 'react'
import { ConfigProvider, TextArea } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const customTheme = {
    nutuiTextareaTextCurrorColor: `red`,
    nutuiTextareaLimitColor: `red`,
  }
  return (
    <ConfigProvider theme={customTheme}>
      <TextArea showCount maxLength={20} />
    </ConfigProvider>
  )
}
export default Demo5
```

### 只读

```tsx
import React from 'react'
import { TextArea } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <>
      <TextArea readOnly defaultValue="textarea只读状态" />
    </>
  )
}
export default Demo6
```

### 禁用

```tsx
import React from 'react'
import { TextArea } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  return (
    <>
      <TextArea
        disabled
        defaultValue="textarea禁用状态"
        showCount
        maxLength={20}
      />
    </>
  )
}
export default Demo7
```

### 文本位置

```tsx
import React from 'react'
import { TextArea } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  return (
    <TextArea
      defaultValue="文本居右"
      style={{
        textAlign: 'right',
      }}
    />
  )
}
export default Demo8
```

## TextArea

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| value | 输入框内容，受控 | `string` | `-` |
| defaultValue | 初始默认值，非受控 | `string` | `-` |
| placeholder | 设置占位提示文字 | `string` | `请输入内容` |
| maxLength | 限制最长输入字符，-1 表示无限制 | `number` | `140` |
| rows | textarea 的行数（仅支持H5） | `number` | `2` |
| showCount | textarea 是否展示输入字符。须配合`maxLength`使用 | `boolean` | `false` |
| autoSize | 高度是否可拉伸 | `boolean` | `false` |
| readOnly | 只读属性 | `boolean` | `false` |
| disabled | 禁用属性 | `boolean` | `false` |
| onChange | 输入内容时触发 | `(value) => void` | `-` |
| onFocus | 聚焦时触发 | `(event) => void` | `-` |
| onBlur | 失焦时触发 | `(event) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-textarea-font | 字体大小 | `$font-size-base` |
| \--nutui-textarea-padding | 内边距 | `10px 25px` |
| \--nutui-textarea-limit-color | 字数统计颜色 | `$color-text` |
| \--nutui-textarea-text-color | 文本颜色 | `$color-title` |
| \--nutui-textarea-text-curror-color | 光标颜色 | `$color-title` |
| \--nutui-textarea-disabled-color | 禁用颜色 | `$color-text-disabled` |
