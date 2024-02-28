# SideNavBar组件

## 介绍

用于内容选择和切换

## 安装

```tsx
import { SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState } from 'react'
import { Cell, SideNavBar, SubSideNavBar, SideNavBarItem, Toast } from '@nutui/nutui-react'

const App = () => {
  type Position = 'left' | 'right'
  type NavBarState = {
    visible: boolean
    position: Position
  }
  const [navBarState, setNavBarState] = useState<NavBarState>({
    visible: false,
    position: 'left',
  })
  const [showThird, setShowThird] = useState(false)
  const changeNarBar = (visible: boolean, position: Position = navBarState.position) => {
    setNavBarState({
      visible,
      position,
    })
    setShowThird(false)
  }
  const clickItem = (data: any) => {
    const { title, value } = data
    showThird && Toast.show(`title=${title},value=${value}`)
  }
  const clickTitle = (data: any) => {
    const { title, value, isShow } = data
    showThird && Toast.show(`title=${title},value=${value},isShow=${isShow}`)
  }
  return (
    <>
      <Cell
        title='左侧弹出'
        onClick={() => {
          changeNarBar(true, 'left')
        }}
      />
      <Cell
        title='右侧弹出'
        onClick={() => {
          changeNarBar(true, 'right')
        }}
      />
      <SideNavBar
        title='首页'
        visible={navBarState.visible}
        position={navBarState.position}
        onClose={() => {
          changeNarBar(false)
        }}>
        <SubSideNavBar title='一级标题' value='1-0' onClick={clickTitle}>
          <SideNavBarItem title='一级内容1' value='1-01' onClick={clickItem} />
          <SideNavBarItem title='一级内容2' value='1-02' />
          <SubSideNavBar title='二级标题' value='2-0'>
            <SideNavBarItem title='二级内容1' value='2-01' />
            <SideNavBarItem title='二级内容2' value='2-02' />
            {showThird ? (
              <SubSideNavBar title='三级标题' value='3-0'>
                <SideNavBarItem title='三级内容1' value='3-01' />
                <SideNavBarItem title='三级内容2' value='3-02' />
              </SubSideNavBar>
            ) : null}
          </SubSideNavBar>
        </SubSideNavBar>
        <SubSideNavBar open={false} title='一级标题-2' value='1-1'>
          <SideNavBarItem title='一级内容2-1' value='1-11' />
          <SideNavBarItem title='一级内容2-2' value='1-12' />
        </SubSideNavBar>
      </SideNavBar>
    </>
  )
}
export default App
```

:::

### 导航嵌套（建议最多三层）

:::demo

```tsx
import React, { useState } from 'react'
import { Cell, SideNavBar, SubSideNavBar, SideNavBarItem, Toast } from '@nutui/nutui-react'

const App = () => {
  type Position = 'left' | 'right'
  type NavBarState = {
    visible: boolean
    position: Position
  }
  const [navBarState, setNavBarState] = useState<NavBarState>({
    visible: false,
    position: 'left',
  })
  const [showThird, setShowThird] = useState(false)
  const changeNarBar = (visible: boolean, position: Position = navBarState.position) => {
    setNavBarState({
      visible,
      position,
    })
    setShowThird(false)
  }
  const clickItem = (data: any) => {
    const { title, value } = data
    showThird && Toast.show(`title=${title},value=${value}`)
  }
  const clickTitle = (data: any) => {
    const { title, value, isShow } = data
    showThird && Toast.show(`title=${title},value=${value},isShow=${isShow}`)
  }
  return (
    <>
      <Cell
        title='显示'
        onClick={() => {
          changeNarBar(true, 'right')
          setShowThird(true)
        }}
      />
      <SideNavBar
        title='首页'
        visible={navBarState.visible}
        position={navBarState.position}
        onClose={() => {
          changeNarBar(false)
        }}>
        <SubSideNavBar title='一级标题' value='1-0' onClick={clickTitle}>
          <SideNavBarItem title='一级内容1' value='1-01' onClick={clickItem} />
          <SideNavBarItem title='一级内容2' value='1-02' />
          <SubSideNavBar title='二级标题' value='2-0'>
            <SideNavBarItem title='二级内容1' value='2-01' />
            <SideNavBarItem title='二级内容2' value='2-02' />
            {showThird ? (
              <SubSideNavBar title='三级标题' value='3-0'>
                <SideNavBarItem title='三级内容1' value='3-01' />
                <SideNavBarItem title='三级内容2' value='3-02' />
              </SubSideNavBar>
            ) : null}
          </SubSideNavBar>
        </SubSideNavBar>
        <SubSideNavBar open={false} title='一级标题-2' value='1-1'>
          <SideNavBarItem title='一级内容2-1' value='1-11' />
          <SideNavBarItem title='一级内容2-2' value='1-12' />
        </SubSideNavBar>
      </SideNavBar>
    </>
  )
}
export default App

```

:::

## SideNavBar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 组件是否显示 | `boolean` | `false` |
| title | 整体标题 | `string` | `-` |
| width | 遮罩宽度百分比 | `string` | `80%` |
| position | 弹出位置 | `left` \| `right` | `left` |
| indent | 缩进宽度 | `number` | `20` |
| onClose | 关闭遮罩时触发 | `-` | `-` |

## SubSideNavBar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 导航唯一标识 | `string`  \|  `number` | `-` |
| title | 整体标题 | `string` | `-` |
| open | 导航是否默认展开 | `boolean` | `true` |
| onClick | 导航点击 | `({title: string, value: string \| number, isShow: boolean}) => void` | `-` |

## SideNavBarItem

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 导航唯一标识 | `string`  \|  `number` | `-` |
| title | 整体标题 | `string` | `-` |
| onClick | 导航点击 | `({title: string, value: string \| number}) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-sidenavbar-content-bg-color | 侧边栏导航背景色 | `$white` |
| \--nutui-sidenavbar-item-height | 侧边栏每项的高度 | `40px` |
| \--nutui-sidenavbar-title-padding | 标题的内边距 | `10px 8px 10px 20px` |
| \--nutui-sidenavbar-title-background | 标题的背景色 | `$color-background` |
| \--nutui-sidenavbar-title-color | 标题的字体颜色 | `$color-title` |
| \--nutui-sidenavbar-sub-title-padding | 子标题的内边距 | `10px 8px 10px 35px` |
| \--nutui-sidenavbar-sub-title-background | 子标题背景色 | `$color-background-sunken` |
| \--nutui-sidenavbar-sub-title-color | 子标题字体颜色 | `$color-title` |
| \--nutui-sidenavbar-sub-list-background | 选项列表背景色 | `$color-background-sunken` |
| \--nutui-sidenavbar-sub-list-color | 选项列表字体颜色 | `$color-title` |
