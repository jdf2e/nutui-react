#  Collapse 折叠面板

### 介绍

将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。

### 安装

```ts
import { Collapse, CollapseItem } from 'nutui-react-taro'
```


## 代码演示

### 基础用法

:::demo
```jsx
import  React from "react";
import { Collapse, CollapseItem } from '@nutui/nutui-react-taro';
import { DownArrow } from '@nutui/icons-react-taro'

const App = () => {
  return (
    <>
    <Collapse activeKey={['1', '2']} expandIcon={<DownArrow />}>
      <CollapseItem title="标题1" name="1">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </CollapseItem>
      <CollapseItem title="标题2" name="2">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </CollapseItem>
      <CollapseItem title="标题3" name="3" disabled>
        京东“厂直优品计划”首推“政府优品馆”
      </CollapseItem>
    </Collapse>
    </>
  );
};
export default App;
```
:::
### 无icon样式，绑定点击事件

:::demo
```tsx
import React, { useState } from 'react'
import { Collapse, CollapseItem} from '@nutui/nutui-react-taro'

const App = () => {
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  return (  
  <Collapse activeKey={['1', '2']} change={(isOpen, name) => changeEnv(isOpen, name)}>
    <CollapseItem title="标题1" name="1">
      京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
    </CollapseItem>
    <CollapseItem title="标题2" name="2">
      京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
    </CollapseItem>
    <CollapseItem title="标题3" name="3">
      京东“厂直优品计划”首推“政府优品馆”
    </CollapseItem>
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
import { Collapse, CollapseItem} from '@nutui/nutui-react-taro'
import { DownArrow } from '@nutui/icons-react-taro'

const App = () => {
  return (  
  <Collapse activeKey={['1']} accordion expandIcon={<DownArrow />}>
    <CollapseItem title="标题1" name="1" subTitle="文本内容">
      京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
    </CollapseItem>
    <CollapseItem title="标题2" name="2">
      京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
    </CollapseItem>
    <CollapseItem title="标题3" name="3">
      京东“厂直优品计划”首推“政府优品馆”
    </CollapseItem>
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
import { Collapse, CollapseItem} from '@nutui/nutui-react-taro'
import { DownArrow, Checked, HeartFill } from '@nutui/icons-react-taro'

const App = () => {
  return (  
  <Collapse activeKey={['1']} accordion expandIcon={<DownArrow />} rotate={90}>
    <CollapseItem title="标题1" name="1" expandIcon={<Checked />}>
      京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
    </CollapseItem>
    <CollapseItem title="标题2" name="2" expandIcon={<HeartFill />}>
      京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
    </CollapseItem>
    <CollapseItem title="标题3" name="3">
      京东“厂直优品计划”首推“政府优品馆”
    </CollapseItem>
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
import { Collapse, CollapseItem } from '@nutui/nutui-react-taro'
import { DownArrow, Checked, HeartFill } from '@nutui/icons-react-taro'

const App = () => {
  return (  
    <Collapse activeKey={['1']} accordion expandIcon={<DownArrow />}>
      <CollapseItem
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
      </CollapseItem>
      <CollapseItem
        title="标题2"
        name="2"
        subTitle={
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
      </CollapseItem>
      <CollapseItem title="标题3" name="3">
        京东“厂直优品计划”首推“政府优品馆”
      </CollapseItem>
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
import { Collapse, CollapseItem, Button} from '@nutui/nutui-react-taro'
import { DownArrow } from '@nutui/icons-react-taro'

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
  {
    title: '标题23',
    name: '3',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
]

const App = () => {
  const [currIndex, setCurrIndex] = useState(2)
  const [domData, setDomData] = useState(oldDate)
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  const changeNewData = () => {
    setDomData(newDate)
    setCurrIndex(3)
  }
  const changeOldData = () => {
    setDomData(oldDate)
    setCurrIndex(2)
  }
  return (
    <>
    <Collapse activeKey={currIndex} accordion>
      {domData.map((item, index) => {
        return (
          <CollapseItem title={item.title} name={item.name} key={index}>
            {item.data}
          </CollapseItem>
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


## API

### Collapse Prop

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| activeKey   | 当前展开面板的 name               | 手风琴模式：string \| number 非手风琴模式：(string \| number)[] | - |
| accordion    | 是否开启手风琴模式                 | boolean | `false`  |
| rotate       | 点击折叠和展开的旋转角度,在自定义图标模式下生效| string \| number | `180` |
| expandIcon`v2.0.0`         | 自定义展开图标      | ReactNode | -                |
| icon`v2.0.0 废弃`         | 使用 expandIcon      | string | -                |
| iconSize`v2.0.0 废弃`     | 图标大小                          | string      | `16px` |
| iconColor`v2.0.0 废弃`    | 图标颜色                          | string | -              |


### CollapseItem Prop

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name   | 唯一标识符，必填                         |string \| number | - |
| title    | 标题栏左侧内容                 | ReactNode | -  |
| disabled    | 标题栏是否禁用                 | boolean | `false`  |
| subTitle    | 标题栏副标题             | ReactNode | -  |
| titleIcon`v2.0.0 废弃`    | 标题图标链接/或使用 NutUI 的 icon             | string | -  |
| titleIconColor`v2.0.0 废弃`    | 标题图标颜色        | string | -  |
| titleIconSize`v2.0.0 废弃`    | 标题图标大小        | string | -  |
| titleIconPosition`v2.0.0 废弃`    | 标题图标位置             | string | -  |



### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change`废弃`  | 切换面板时触发 | isOpen:是否打开状态；name：当前点击的name值 |
| onChange  | 切换面板时触发 | isOpen:是否打开状态；name：当前点击的name值 |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-collapse-item-padding`v1.4.8` | `13px 36px 13px 26px` |
| --nutui-collapse-item-font-size`v1.4.8` | `$font-size-2` |
| --nutui-collapse-item-line-height`v1.4.8` | `24px` |
| --nutui-collapse-item-color`v1.4.8` | `#666666` |
| --nutui-collapse-item-disabled-color`v1.4.8` | `#c8c9cc` |
| --nutui-collapse-item-icon-color`v1.4.8` | `#666666` |
| --nutui-collapse-item-icon-margin-right`v1.4.8` | `5px` |
| --nutui-collapse-item-icon-margin-left`v1.4.8` | `5px` |
| --nutui-collapse-item-sub-title-color`v1.4.8` | `#666666` |
| --nutui-collapse-wrapper-content-background-color`v1.4.8` | `$white` |
| --nutui-collapse-wrapper-content-color`v1.4.8` | `#666666` |
| --nutui-collapse-wrapper-content-font-size`v1.4.8` | `$font-size-2` |
| --nutui-collapse-wrapper-content-line-height`v1.4.8` | `1.5` |
| --nutui-collapse-wrapper-content-padding`v1.4.8` | `12px 26px` |
| --nutui-collapse-wrapper-empty-content-padding`v1.4.8` | `0 26px` |
