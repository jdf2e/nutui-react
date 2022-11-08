
#  SideNavBar组件

### 介绍

用于内容选择和切换

### 安装
```tsx
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
          isLink
          onClick={() => {
            changeNarBar(true, 'left')
          }}
        />
        <Cell
          title="右侧弹出"
          isLink
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
          <SubSideNavBar title="一级标题" ikey="1-0" >
            <SideNavBarItem title="一级内容1" ikey="1-01" />
            <SideNavBarItem title="一级内容2" ikey="1-02" />
            <SubSideNavBar title="二级标题" ikey="2-0">
              <SideNavBarItem title="二级内容1" ikey="2-01" />
              <SideNavBarItem title="二级内容2" ikey="2-02" />
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
  const clickItem = ({ title, ikey }) => {
    Toast.text(`title=${title},ikey=${ikey}`)
  }
  const clickTitle = ({ title, ikey, isShow }) => {
    Toast.text(`title=${title},ikey=${ikey},isShow=${isShow}`)
  }
  return ( 
    <>  
      <Cell
          title="显示"
          isLink
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
          <SubSideNavBar title="一级标题" ikey="1-0" titleClick={clickTitle}>
            <SideNavBarItem title="一级内容1" ikey="1-01" click={clickItem} />
            <SideNavBarItem title="一级内容2" ikey="1-02" />
            <SubSideNavBar title="二级标题" ikey="2-0">
              <SideNavBarItem title="二级内容1" ikey="2-01" />
              <SideNavBarItem title="二级内容2" ikey="2-02" />
                <SubSideNavBar title="三级标题" ikey="3-0">
                  <SideNavBarItem title="三级内容1" ikey="3-01" />
                  <SideNavBarItem title="三级内容2" ikey="3-02" />
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
| visible      | 组件是否显示                       | boolean | false           |
| title        | 整体标题                           | String  | -               |
| width        | 遮罩宽度百分比                      | String   | '80%'          |
| position     | 弹出位置                           | 'left'、'right' | 'left'  |
| offset       | 缩进宽度                           | number  | 20              |

### 2、SubSideNavBar

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| ikey         | 导航唯一标识                       | String、Number |          |
| title        | 整体标题                           | String  | -              |
| open         | 导航是否默认展开                     | Boolean  | true         |
### 3、SideNavBarItem

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| ikey         | 导航唯一标识                       | String、Number |          |
| title        | 整体标题                           | String  | -               |

## Events
### 1、SideNavBar Events

| 事件名                       | 说明                                          | 回调参数     |
|---------------------------|---------------------------------------------|--------------|
| onClose`v1.3.8` | 关闭遮罩时触发, handleClose 事件从 1.3.8 之后改为 onClose | -           |

### 2、SubSideNavBar Events

| 事件名           | 说明                                                             | 回调参数     |
|---------------|----------------------------------------------------------------|--------------|
| onClick`v1.3.8` | 导航点击,对象形式返回点击{ title,ikey,isShow}, titleClick 事件从 1.3.8 之后改为 onClick | -           |

### 3、SideNavBarItem Events

| 事件名    | 说明                                                  | 回调参数     |
|--------|-----------------------------------------------------|--------------|
| onClick | 导航点击,对象形式返回点击{ title,ikey} , click 事件从 1.3.8 之后改为 onClick | -           |
