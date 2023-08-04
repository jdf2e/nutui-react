# Collapse 折叠面板

## 介绍

将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。

## 安装

```tsx
import { Collapse } from 'nutui-react-taro'
```

## 代码演示

### 基础用法

:::demo

```jsx
import  React from "react";
import { Collapse } from '@nutui/nutui-react-taro';
import { DownArrow } from '@nutui/icons-react-taro'

const App = () => {
  return (
    <>
    <Collapse defaultActiveName={['1', '2']} expandIcon={<DownArrow />}>
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
  );
};
export default App;
```

:::

### 受控方式

:::demo

```jsx
import React, {useState} from "react";
import { Collapse } from '@nutui/nutui-react-taro';
import { DownArrow } from '@nutui/icons-react-taro';

const App = () => {
  const [activeName, setActiveName] = useState(['1', '2'])
  const onChange = (activeName, name, status) => {
    setActiveName(activeName)
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
  );
};
export default App;
```

:::

### 无icon样式，绑定点击事件

:::demo

```tsx
import React, { useState } from 'react'
import { Collapse} from '@nutui/nutui-react-taro'

const App = () => {
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  return (  
  <Collapse defaultActiveName={['1', '2']} change={(isOpen, name) => changeEnv(isOpen, name)}>
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
export default App;
```

:::

### 手风琴模式

:::demo

```tsx
import React from 'react'
import { Collapse} from '@nutui/nutui-react-taro'
import { DownArrow } from '@nutui/icons-react-taro'

const App = () => {
  return (  
  <Collapse defaultActiveName={['1']} accordion expandIcon={<DownArrow />}>
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
export default App;
```

:::

### 自定义折叠图标

:::demo

```jsx
import React from 'react'
import { Collapse} from '@nutui/nutui-react-taro'
import { DownArrow, Checked, HeartFill } from '@nutui/icons-react-taro'

const App = () => {
  return (  
  <Collapse defaultActiveName={['1']} accordion expandIcon={<DownArrow />} rotate={90}>
    <Collapse.Item title="标题1" name="1" expandIcon={<Checked />}>
      京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
    </Collapse.Item>
    <Collapse.Item title="标题2" name="2" expandIcon={<HeartFill />}>
      京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
    </Collapse.Item>
    <Collapse.Item title="标题3" name="3">
      京东“厂直优品计划”首推“政府优品馆”
    </Collapse.Item>
  </Collapse>
  )
}
export default App;
```

:::

### 自定义title图标

:::demo

```jsx
import React from 'react'
import { Collapse } from '@nutui/nutui-react-taro'
import { DownArrow, Checked, HeartFill } from '@nutui/icons-react-taro'

const App = () => {
  return (  
    <Collapse defaultActiveName={['1']} accordion expandIcon={<DownArrow />}>
      <Collapse.Item
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checked />标题1
          </div>
        }
        name="1"
      >
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item
        title="标题2"
        name="2"
        extra={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            标题2<HeartFill color="red" />
          </div>
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
export default App;
```

:::

### 动态改变数据

:::demo

```jsx
import React, { useState } from 'react'
import { Collapse, Button} from '@nutui/nutui-react-taro'

const oldDate = [
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
const newDate = [
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

const App = () => {
  const [domData, setDomData] = useState(oldDate)
  const changeNewData = () => {
    setDomData(newDate)
  }
  const changeOldData = () => {
    setDomData(oldDate)
  }
  return (
    <>
      <Collapse defaultActiveName="2" accordion>
        {domData.map((item, index) => {
          return (
            <Collapse.Item title={item.title} name={item.name} key={index}>
              {item.data}
            </Collapse.Item>
          )
        })}
      </Collapse>
      <Button type="primary" size="small" onClick={() => changeNewData()}>
        改变数据
      </Button>
      <Button type="info" size="small" onClick={() => changeOldData()}>
        还原数据
      </Button>
    </>
  )
}
  export default App;
```

:::

## Collapse

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultActiveName | 默认展开面板的 name，非受控 | `Array<string>` \| `string`  | `-` |
| activeName | 当前展开面板的 name，受控 | `Array<string>` \| `string`  | `-` |
| accordion | 是否开启手风琴模式 | `boolean` | `false` |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | `string` \| `number`  | `180` |
| expandIcon | 自定义展开图标 | `ReactNode` | `-` |

## Collapse.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 唯一标识符，必填 | `string` | `-` |
| title | 标题栏左侧内容 | `ReactNode` | `-` |
| disabled | 标题栏是否禁用 | `boolean` | `false` |
| extra | 标题栏副标题 | `ReactNode` | `-` |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | `string` \| `number`  | `180` |
| expandIcon | 自定义展开图标 | `ReactNode` | `-` |
| onChange | 切换面板时触发 | `(activeName, name, status) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-collapse-item-padding | 内边距 | `13px 36px 13px 26px` |
| \--nutui-collapse-item-font-size | 字体大小 | `$font-text` |
| \--nutui-collapse-item-line-height | 行高 | `24px` |
| \--nutui-collapse-item-color | 字体颜色 | `#666666` |
| \--nutui-collapse-item-disabled-color | 禁用颜色 | `$color-text-disable` |
| \--nutui-collapse-item-extra-color | Extra 字体颜色 | `#666666` |
| \--nutui-collapse-wrapper-content-background-color | 背景颜色 | `$white` |
| \--nutui-collapse-wrapper-content-color | 内容字体颜色 | `#666666` |
| \--nutui-collapse-wrapper-content-font-size | 内容字体大小 | `$font-text` |
| \--nutui-collapse-wrapper-content-line-height | 内容行高 | `1.5` |
| \--nutui-collapse-wrapper-content-padding | 内容内边距 | `12px 26px` |