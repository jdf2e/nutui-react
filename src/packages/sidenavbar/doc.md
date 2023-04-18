
#  SideNavBar组件

### 介绍

用于内容选择和切换

### 安装
```tsx
// react
import { SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react';
```
## 代码演示
### 基础用法

:::demo
```tsx
import  React,{useState} from "react";
import {Cell, SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react';

const App = () => {
    const [navBarState, setNavBarState] = useState({
    visible: false,
    position: 'left',
  })
  const changeNarBar = (visible, position= navBarState.position) => {
    setNavBarState({
      visible,
      position,
    })
  }
 
  return ( 
    <>   
    <Cell
          title="左侧弹出"
          
          onClick={() => {
            changeNarBar(true, 'left')
          }}
        />
        <Cell
          title="右侧弹出"
          
          onClick={() => {
            changeNarBar(true, 'right')
          }}
        />
        <SideNavBar
          title="首页"
          visible={navBarState.visible}
          position={navBarState.position}
          handleClose={() => {
            changeNarBar(false)
          }}
        >
          <SubSideNavBar title="一级标题" key="1-0" >
            <SideNavBarItem title="一级内容1" key="1-01" />
            <SideNavBarItem title="一级内容2" key="1-02" />
            <SubSideNavBar title="二级标题" key="2-0">
              <SideNavBarItem title="二级内容1" key="2-01" />
              <SideNavBarItem title="二级内容2" key="2-02" />
            </SubSideNavBar>
          </SubSideNavBar>
        </SideNavBar>
    </>
  );
};  
export default App;

```
:::

### 嵌套及回调

:::demo
```tsx
import  React,{useState} from "react";
import {Cell,SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const changeNarBar = (visible) => {
   setVisible(visible)
  }
  const clickItem = ({ title, key }) => {
    Toast.text(`title=${title},key=${key}`)
  }
  const clickTitle = ({ title, key, isShow }) => {
    Toast.text(`title=${title},key=${key},isShow=${isShow}`)
  }
  return ( 
    <>  
      <Cell
          title="显示"
          
          onClick={() => {
            changeNarBar(true)
          }}
        /> 
    <SideNavBar
          title="首页"
          visible={visible}
          position='left'
          handleClose={() => {
            changeNarBar(false)
          }}
        >
          <SubSideNavBar title="一级标题" key="1-0" onClick={clickTitle}>
            <SideNavBarItem title="一级内容1" key="1-01" onClick={clickItem} />
            <SideNavBarItem title="一级内容2" key="1-02" />
            <SubSideNavBar title="二级标题" key="2-0">
              <SideNavBarItem title="二级内容1" key="2-01" />
              <SideNavBarItem title="二级内容2" key="2-02" />
                <SubSideNavBar title="三级标题" key="3-0">
                  <SideNavBarItem title="三级内容1" key="3-01" />
                  <SideNavBarItem title="三级内容2" key="3-02" />
                </SubSideNavBar>
            </SubSideNavBar>
          </SubSideNavBar>
        </SideNavBar>
    </>
  );
};  
export default App;

```
:::



## API

### 1、SideNavBar

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| visible      | 组件是否显示                       | boolean | `false`           |
| title        | 整体标题                           | string  | -               |
| width        | 遮罩宽度百分比                      | string   | `80%`          |
| position     | 弹出位置                           | 'left' \| 'right' | `left`  |
| offset       | 缩进宽度                           | number  | `20`              |

### 2、SubSideNavBar

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| key `v2.0.0`        | 导航唯一标识                       | string \| number |          |
| title        | 整体标题                           | string  | -              |
| open         | 导航是否默认展开                     | boolean  | `true`         |
### 3、SideNavBarItem

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| key `v2.0.0`        | 导航唯一标识                       | string \| number |          |
| title        | 整体标题                           | string  | -               |

## Events
### 1、SideNavBar Events

| 事件名                       | 说明                                          | 回调参数     |
|---------------------------|---------------------------------------------|--------------|
| onClose | 关闭遮罩时触发, handleClose 事件从 1.3.8 之后改为 onClose | -           |

### 2、SubSideNavBar Events

| 事件名           | 说明                                                             | 回调参数     |
|---------------|----------------------------------------------------------------|--------------|
| onClick | 导航点击, titleClick 事件从 1.3.8 之后改为 onClick | `data: {title: string, key: string \| number, isShow: boolean}`           |

### 3、SideNavBarItem Events

| 事件名    | 说明                                                  | 回调参数     |
|--------|-----------------------------------------------------|--------------|
| onClick | 导航点击, click 事件从 1.3.8 之后改为 onClick | `data: {title: string, key: string \| number}`           |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-sidenavbar-content-bg-color | `$white` |
| --nutui-sidenavbar-sub-title-border-color | `#f6f6f6` |
| --nutui-sidenavbar-sub-title-bg-color | `#f6f6f6` |
| --nutui-sidenavbar-sub-title-font-size | `$font-size-large` |
| --nutui-sidenavbar-sub-title-radius | `0` |
| --nutui-sidenavbar-sub-title-border | `0` |
| --nutui-sidenavbar-sub-title-height | `40px` |
| --nutui-sidenavbar-sub-title-text-line-height | `40px` |
| --nutui-sidenavbar-sub-title-text-color | `$title-color` |
| --nutui-sidenavbar-item-title-color | `#333` |
| --nutui-sidenavbar-item-title-bg-color | `$white` |
| --nutui-sidenavbar-item-height | `40px` |
| --nutui-sidenavbar-item-line-height | `40px` |
| --nutui-sidenavbar-item-font-size | `16px` |
