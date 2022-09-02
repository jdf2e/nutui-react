# Popover 气泡弹出框

### 介绍

点击或在元素上悬停鼠标，弹出气泡卡片浮层。

### 安装

``` javascript
import { Popover } from '@nutui/nutui-react';
```

### 代码实例

### 基本用法
Popover 支持明朗和暗黑两种风格，默认为明朗风格，将 theme 属性设置为 dark 可切换为暗黑风格。

:::demo
```tsx

import  React, { useState, useRef  } from "react";
import { Popover,Button,Icon } from '@nutui/nutui-react';

const App = () => {
  const [lightTheme, setLightTheme] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const itemList = [
    {name: 'option1'},
    {name: 'option2'},
    {name: 'option3'},
  ]
  return (
    <>
      <Popover 
        visible={lightTheme} 
        onClick={()=>{lightTheme ? setLightTheme(false) : setLightTheme(true)}} 
        list={itemList}>
        <Button type="primary" shape="square">明朗风格</Button>
      </Popover>
      <Popover 
        visible={darkTheme} 
        theme="dark" 
        onClick={()=>{darkTheme ? setDarkTheme(false) : setDarkTheme(true)}} 
        list={itemList}>
        <Button type="primary" shape="square">暗黑风格</Button>
      </Popover>
    </>
  )
};

export default App;
```
:::

### 选项配置

:::demo
```tsx
import  React, { useState, useRef  } from "react";
import { Popover,Button,Icon } from '@nutui/nutui-react';

const App = () => {
  const [showIcon, setShowIcon] = useState(false)
  const [disableAction, setDisableAction] = useState(false)
  const iconItemList= [
    {name: 'option1',icon: 'my2'},
    {name: 'option2',icon: 'cart2'},
    {name: 'option3',icon: 'location2'}
  ];
  const itemListDisabled=[
    {name: 'option1',disabled: true},
    {name: 'option2', disabled: true},
    {name: 'option3'}
  ];

  return (
    <>
      <Popover
        visible={showIcon} 
        theme="dark" 
        onClick={()=>{showIcon ? setShowIcon(false) : setShowIcon(true)}} 
        list={iconItemList}>
        <Button type="primary" shape="square">展示图标</Button>
      </Popover>
      <Popover 
        visible={disableAction} 
        onClick={()=>{disableAction ? setDisableAction(false) : setDisableAction(true)}} 
        list={itemListDisabled}>
        <Button type="primary" shape="square">禁用选项</Button>
      </Popover>
    </>
  );
};

export default App;
```
:::

### 自定义内容

:::demo
```tsx
import  React, { useState, useRef  } from "react";
import { Popover,Button, Icon } from '@nutui/nutui-react';

const App = () => {
  const [customized, setCustomized] = useState(false)
  const selfContent= [
    {
      name: 'service',
      desc: 'option1'
    },
    {
      name: 'notice',
      desc: 'option2'
    },
    {
      name: 'location',
      desc: 'option3'
    },
    {
      name: 'category',
      desc: 'option4'
    },
    {
      name: 'scan2',
      desc: 'option5'
    },
    {
      name: 'message',
      desc: 'option6'
    }
  ];

  return (
    <>
      <Popover 
        visible={customized} 
        onClick={()=>{customized ? setCustomized(false) : setCustomized(true)}}>
        <Button type="primary" shape="square">自定义内容</Button>
        {
          customized ? 
          <div className="self-content" style={selfContentStyle}>
          {
            selfContent.map((item: any)=>{
              return <div className="self-content-item" style={selfContentItem} key={item.name}>
                <Icon name={item.name} size="15" />
                <div className="self-content-desc" style={selfContentDesc}>{ item.desc }</div>
              </div>
            })
          }
        </div> : ''
        }
      </Popover>
    </>
  )
}

export default App;
```
:::

### 位置自定义

通过 location 属性来控制气泡的弹出位置。可选值
```
top           # 顶部中间位置
left          # 左侧中间位置
right         # 右侧中间位置
bottom        # 底部中间位置
```
自 `v1.3.0` 起新增
```
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置 
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```

:::demo
```tsx
  import  React, { useState, useRef  } from "react";
  import { Popover,Button } from '@nutui/nutui-react';

const App = () => {
  const [topLocation, setTopLocation] = useState(false)
  const [rightLocation, setRightLocation] = useState(false)
  const [leftLocation, setLeftLocation] = useState(false)
  const iconItemList= [
    {name: 'option1',icon: 'my2'},
    {name: 'option2',icon: 'cart2'},
    {name: 'option3',icon: 'location2'}
  ];

  return (
    <>
      <Popover  
        visible={topLocation} 
        location="top" 
        theme="dark" 
        onClick={()=>{topLocation ? setTopLocation(false) : setTopLocation(true)}} 
        list={iconItemList}>
        <Button type="primary" shape="square">向上弹出</Button>
      </Popover>
    </>
  )
}
  
export default App;
```
:::

## API

### Props

| 字段            | 说明                            | 类型     | 默认值      |
|----------------|---------------------------------|---------|------------|
| list          | 选项列表                          | List[]   | []        |
| visible      | 是否展示气泡弹出层                 | boolean  | false     |
| theme          | 主题风格，可选值为 dark            | string   | `light`   |
| location       | 弹出位置  | string   | `bottom`  |
| offset `v1.3.0`       | 出现位置的偏移量  | number   | 20  |

### List 数据结构  

List 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名            | 说明                 | 类型      | 默认值  |
|----------------|----------------------|----------|--------|
| name           | 选项文字               | string   | -      |
| icon           | nut-icon 图标名称      | string   | -      |
| disabled       | 是否为禁用状态          | boolean  | false  | 

### Events

| 名称    | 说明         |
|---------|--------------|
| onClick | 点击菜单时触发 |
| onChoose | 点击选项时触发 |



