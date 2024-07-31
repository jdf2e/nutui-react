---
sidebar_class_name: hasIcon
---

# Collapse 折叠面板

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。

## 引入

```tsx
import { Collapse } from 'nutui-react-taro'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Collapse } from '@dongdesign/ui'
import { ArrowDown } from '@nutui/icons-react-taro'

const Demo1 = () => {
  return (
    <>
      <Collapse defaultActiveName={['1', '2']} expandIcon={<ArrowDown />}>
        <Collapse.Item title="标题1" name="1">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </Collapse.Item>
        <Collapse.Item title="标题2" name="2">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </Collapse.Item>
        <Collapse.Item title="标题3" name="3" disabled>
          京东“厂直优品计划”首推“政府优品馆”
        </Collapse.Item>
      </Collapse>
    </>
  )
}
export default Demo1
```

### 受控方式

```tsx
import React, { useState } from 'react'
import { Collapse } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [activeName, setActiveName] = useState(['1', '2'])
  const onChange = (
    activeName: string | string[],
    name: string,
    isOpen: boolean
  ) => {
    setActiveName(activeName as string[])
  }
  return (
    <Collapse activeName={activeName} onChange={onChange}>
      <Collapse.Item title="标题1" name="1">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        京东“厂直优品计划”首推“政府优品馆”
      </Collapse.Item>
    </Collapse>
  )
}
export default Demo2
```

### 无icon样式，绑定点击事件

```tsx
import React from 'react'
import { Collapse } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const handleChange = (
    activeName: string | string[],
    name: string,
    isOpen: boolean
  ) => {
    console.log(activeName, name, isOpen)
  }
  return (
    <Collapse defaultActiveName={['1', '2']} onChange={handleChange}>
      <Collapse.Item title="标题1" name="1">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        京东“厂直优品计划”首推“政府优品馆”
      </Collapse.Item>
    </Collapse>
  )
}
export default Demo3
```

### 手风琴模式

```tsx
import React from 'react'
import { Collapse } from '@nutui/nutui-react-taro'
import { ArrowDown } from '@nutui/icons-react-taro'

const Demo4 = () => {
  return (
    <Collapse defaultActiveName={['1']} accordion expandIcon={<ArrowDown />}>
      <Collapse.Item title="标题1" name="1" extra="文本内容">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        京东“厂直优品计划”首推“政府优品馆”
      </Collapse.Item>
    </Collapse>
  )
}
export default Demo4
```

### 自定义折叠图标

```tsx
import React from 'react'
import { Collapse } from '@nutui/nutui-react-taro'
import { ArrowDown, Checked } from '@nutui/icons-react-taro'

const Demo5 = () => {
  return (
    <Collapse
      defaultActiveName={['1']}
      accordion
      expandIcon={<ArrowDown />}
      rotate={90}
    >
      <Collapse.Item title="标题1" name="1" expandIcon={<Checked />}>
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2" expandIcon={<Checked />}>
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        京东“厂直优品计划”首推“政府优品馆”
      </Collapse.Item>
    </Collapse>
  )
}
export default Demo5
```

### 自定义title图标

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { Collapse } from '@nutui/nutui-react-taro'
import { ArrowDown, Checked } from '@nutui/icons-react-taro'

const Demo6 = () => {
  return (
    <Collapse defaultActiveName={['1']} accordion expandIcon={<ArrowDown />}>
      <Collapse.Item
        title={
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checked />
            标题1
          </View>
        }
        name="1"
      >
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item
        title="标题2"
        name="2"
        extra={
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            标题2
            <Checked color="red" />
          </View>
        }
      >
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        京东“厂直优品计划”首推“政府优品馆”
      </Collapse.Item>
    </Collapse>
  )
}
export default Demo6
```

### 动态改变数据

```tsx
import React, { useState } from 'react'
import { Collapse, Button, Space } from '@nutui/nutui-react-taro'

const oldData = [
  {
    title: '标题1',
    name: '1',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
  {
    title: '标题12',
    name: '2',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
  {
    title: '标题13',
    name: '3',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
]
const newData = [
  {
    title: '标题21',
    name: '1',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
  {
    title: '标题22',
    name: '2',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
]

const Demo7 = () => {
  const [data, setData] = useState(oldData)
  const changeNewData = () => {
    setData(newData)
  }
  const changeOldData = () => {
    setData(oldData)
  }
  return (
    <>
      <Collapse defaultActiveName="2" accordion>
        {data.map((item, index) => {
          return (
            <Collapse.Item title={item.title} name={item.name} key={index}>
              {item.data}
            </Collapse.Item>
          )
        })}
      </Collapse>
      <Space style={{ margin: '10px' }}>
        <Button type="primary" size="small" onClick={() => changeNewData()}>
          改变数据
        </Button>
        <Button type="info" size="small" onClick={() => changeOldData()}>
          还原数据
        </Button>
      </Space>
    </>
  )
}
export default Demo7
```

## Collapse

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| defaultActiveName | 默认展开面板的 name，非受控 | `Array<string>` \| `string` | `-` |
| activeName | 当前展开面板的 name，受控 | `Array<string>` \| `string` | `-` |
| accordion | 是否开启手风琴模式 | `boolean` | `false` |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | `string` \| `number` | `180` |
| expandIcon | 自定义展开图标 | `ReactNode` | `-` |

## Collapse.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 唯一标识符，必填 | `string` | `-` |
| title | 标题栏左侧内容 | `ReactNode` | `-` |
| disabled | 标题栏是否禁用 | `boolean` | `false` |
| extra | 标题栏副标题 | `ReactNode` | `-` |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | `string` \| `number` | `180` |
| expandIcon | 自定义展开图标 | `ReactNode` | `-` |
| onChange | 切换面板时触发 | `(activeName, name, status) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-collapse-item-padding | 内边距 | `13px 26px` |
| \--nutui-collapse-item-font-size | 字体大小 | `$font-size-base` |
| \--nutui-collapse-item-line-height | 行高 | `24px` |
| \--nutui-collapse-item-color | 字体颜色 | `#666666` |
| \--nutui-collapse-item-disabled-color | 禁用颜色 | `$color-text-disabled` |
| \--nutui-collapse-item-extra-color | Extra 字体颜色 | `#666666` |
| \--nutui-collapse-item-border-bottom | Item 底部边框 | `none` |
| \--nutui-collapse-item-header-border-bottom | Item header 底部边框 | `1px solid $color-border` |
| \--nutui-collapse-wrapper-content-background-color | 背景颜色 | `$white` |
| \--nutui-collapse-wrapper-content-color | 内容字体颜色 | `#666666` |
| \--nutui-collapse-wrapper-content-font-size | 内容字体大小 | `$font-size-base` |
| \--nutui-collapse-wrapper-content-line-height | 内容行高 | `1.5` |
| \--nutui-collapse-wrapper-content-padding | 内容内边距 | `12px 26px` |
