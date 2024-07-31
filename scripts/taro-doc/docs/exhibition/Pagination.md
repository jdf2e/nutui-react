---
sidebar_class_name: hasIcon
---

# Pagination 分页

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

当数据量较多时，采用分页的形式分隔长列表。

## 引入

```tsx
import { Pagination } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

通过 value 来绑定当前页码时，组件为受控状态，分页显示取决于传入的 value，一般搭配 onChange 使用。 不需要受控时，可通过 defaultValue 指定当前页码

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [currentPage1, setCurrentPage1] = useState(1)
  const pageChange1 = (v: number) => {
    const c = v
    setCurrentPage1(c)
  }
  return (
    <Pagination
      value={currentPage1}
      total={20}
      pageSize={5}
      onChange={pageChange1}
    />
  )
}
export default Demo1
```

### 简单模式

将 mode 设置为 "simple" 来切换到简单模式，此时分页器不会展示具体的页码按钮。

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [currentPage2, setCurrentPage2] = useState(1)
  const pageChange2 = (v: number) => {
    const c = v
    setCurrentPage2(c)
  }
  return (
    <Pagination
      value={currentPage2}
      total={12}
      pageSize={1}
      mode="simple"
      onChange={pageChange2}
    />
  )
}
export default Demo2
```

### 极简模式

将 mode 设置为 "lite" 来切换到极简模式，可用于主图切换。

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [currentPage2, setCurrentPage2] = useState(1)
  const pageChange2 = (v: number) => {
    const c = v
    setCurrentPage2(c)
  }
  return (
    <Pagination
      value={currentPage2}
      total={12}
      pageSize={1}
      mode="lite"
      onChange={pageChange2}
    />
  )
}
export default Demo3
```

### 显示省略号

设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [currentPage3, setCurrentPage3] = useState(1)
  const pageChange3 = (v: number) => {
    const c = v
    setCurrentPage3(c)
  }
  return (
    <Pagination
      value={currentPage3}
      total={125}
      itemSize={2}
      ellipse
      onChange={pageChange3}
    />
  )
}
export default Demo4
```

### 自定义按钮

通过itemRender传入自定义方法，入参数为`page: { number:页数, text:"文本", active:"选中状态" }`

```tsx
import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Pagination } from '@nutui/nutui-react-taro'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo5 = () => {
  const [currentPage4, setCurrentPage4] = useState(1)
  const pageChange4 = (v: number) => {
    const c = v
    setCurrentPage4(c)
  }
  const itemRender = (page: any, current: number) => {
    return (
      <View style={{ color: current === page.number ? '#fff' : '#ff0f23' }}>
        {page.number === 3 ? 'hot' : page.text}
      </View>
    )
  }
  return (
    <Pagination
      value={currentPage4}
      total={500}
      itemSize={5}
      onChange={pageChange4}
      itemRender={itemRender}
      prev={!harmonyAndRn() ? <ArrowLeft /> : null}
      next={!harmonyAndRn() ? <ArrowRight /> : null}
    />
  )
}
export default Demo5
```

### 非受控方式

```tsx
import React from 'react'
import { Pagination } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const pageChange5 = (v: number) => {
    console.log(v)
  }
  return (
    <Pagination
      defaultValue={15}
      total={500}
      pageSize={10}
      itemSize={3}
      onChange={pageChange5}
    />
  )
}
export default Demo6
```

## Pagination

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| value | 当前页码，受控值，与 onChange 搭配使用 | `number` | `-` |
| defaultValue | 默认页码，非受控值 | `number` | `1` |
| mode | 显示模式,可选值为：multi，simple, lite | `multi` \| `simple` \| `lite` | `multi` |
| prev | 自定义上一页按钮内容 | `ReactNode` | `上一页` |
| next | 自定义下一页按钮内容 | `ReactNode` | `下一页` |
| total | 总记录数 | `number` | `50` |
| pageSize | 每页记录数 | `number` | `10` |
| itemSize | 显示的页码个数 | `number` | `5` |
| ellipse | 是否显示省略号 | `boolean` | `false` |
| itemRender | 用于自定义页码的结构 | `(page: {number, text}) => ReactNode` | `-` |
| onChange | 页码改变时触发 | `(value) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-pagination-color | 页码字色 | `$color-primary` |
| \--nutui-pagination-font-size | 页码字号 | `$font-size-base` |
| \--nutui-pagination-item-border-color | 边框颜色 | `$color-border` |
| \--nutui-pagination-active-background-color | 当前页码的背景色 | `$color-primary` |
| \--nutui-pagination-disable-color | 不可用色 | `$color-text-disabled` |
| \--nutui-pagination-disable-background-color | 不可用背景色 | `#f7f8fa` |
| \--nutui-pagination-item-border-width | 边框宽度 | `1px` |
| \--nutui-pagination-item-border-radius | 边框圆角 | `2px` |
| \--nutui-pagination-prev-next-padding | padding 值 | `0 11px` |
| \--nutui-pagination-lite-width | lite模式下的宽度 | `40px` |
| \--nutui-pagination-lite-height | lite模式下的高度 | `20px` |
| \--nutui-pagination-lite-radius | lite模式下的圆角 | `12px` |
| \--nutui-pagination-lite-background-color | lite模式下的默认背景色 | `var(--nutui-black-7)` |
| \--nutui-pagination-lite-active-background-color | lite模式下的当前选中的背景色 | `var(--nutui-black-5)` |
