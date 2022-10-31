#  Collapse 折叠面板

### 介绍

将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。

### 安装

`import { Collapse,CollapseItem } from 'nutui-react'`


## 代码演示

### 基础用法

:::demo
```jsx
import  React from "react";
import { Collapse,CollapseItem } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Collapse activeName={['1', '2']} icon="arrow-down" iconSize="16" iconColor="#999">
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
import { Collapse ,CollapseItem} from '@nutui/nutui-react'

const App = () => {
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  return (  
  <Collapse activeName={['1', '2']} change={(isOpen, name) => changeEnv(isOpen, name)}>
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
import { Collapse ,CollapseItem} from '@nutui/nutui-react'

const App = () => {
  return (  
  <Collapse activeName={['1']} accordion icon="arrow-down">
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
import { Collapse ,CollapseItem} from '@nutui/nutui-react'

const App = () => {
  return (  
  <Collapse activeName={['1']} accordion icon="arrow-right2" rotate={90}>
    <CollapseItem title="标题1" name="1" icon="arrow-down">
      京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
    </CollapseItem>
    <CollapseItem title="标题2" name="2" icon="arrow-down">
      京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
    </CollapseItem>
    <CollapseItem title="标题3" name="3" icon="arrow-down">
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
import { Collapse ,CollapseItem, Button} from '@nutui/nutui-react'

const App = () => {
  return (  
    <Collapse activeName={['1']} accordion icon="arrow-down">
      <CollapseItem
        title="标题1"
        name="1"
        titleIcon="checked"
        titleIconSize="16"
        titleIconColor="red"
        titleIconPosition="left"
      >
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </CollapseItem>
      <CollapseItem
        title="标题2"
        name="2"
        titleIcon="heart-fill"
        titleIconColor="red"
        titleIconPosition="right"
      >
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </CollapseItem>
      <CollapseItem title="标题3" name="3" icon="arrow-down">
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
import { Collapse ,CollapseItem,Button} from '@nutui/nutui-react'

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
    <Collapse activeName={currIndex} accordion>
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
| activeName   | 当前展开面板的 name               | 手风琴模式：string/number 非手风琴模式：(string/number)[] | - |
| accordion    | 是否开启手风琴模式                 | boolean | false  |
| icon         | 图标链接/或使用 NutUI 的 icon      | String | -                |
| iconSize     | 图标大小                          | String      | '16px' |
| iconColor    | 图标颜色                          | String | ''              |
| rotate       | 点击折叠和展开的旋转角度,在自定义图标模式下生效| string/number | 180 |


### CollapseItem Prop

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name   | 唯一标识符，必填                         |string \ number | - |
| title    | 标题栏左侧内容                 | string | ''  |
| disabled    | 标题栏是否禁用                 | boolean | false  |
| subTitle    | 标题栏副标题             | string | ''  |
| titleIcon    | 标题图标链接/或使用 NutUI 的 icon             | string | ''  |
| titleIconColor    | 标题图标颜色        | string | ''  |
| titleIconSize    | 标题图标大小        | string | ''  |
| titleIconPosition    | 标题图标位置             | string | ''  |



### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change`废弃`  | 切换面板时触发 | isOpen:是否打开状态；name：当前点击的name值 |
| onChange`v1.3.8`  | 切换面板时触发 | isOpen:是否打开状态；name：当前点击的name值 |
