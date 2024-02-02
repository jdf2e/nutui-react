# SideNavBar组件

## Intro

For content selection and switching

## Install

```tsx
import { SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

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
        title='Left Pop Up'
        onClick={() => {
          changeNarBar(true, 'left')
        }}
      />
      <Cell
        title='Right Pop Up'
        onClick={() => {
          changeNarBar(true, 'right')
        }}
      />
      <SideNavBar
        title='Front Page'
        visible={navBarState.visible}
        position={navBarState.position}
        onClose={() => {
          changeNarBar(false)
        }}>
        <SubSideNavBar title='Level One Title' value='1-0' onClick={clickTitle}>
          <SideNavBarItem title='Level One Content1' value='1-01' onClick={clickItem} />
          <SideNavBarItem title='Level One Content2' value='1-02' />
          <SubSideNavBar title='Level Two Title' value='2-0'>
            <SideNavBarItem title='Level Two Content1' value='2-01' />
            <SideNavBarItem title='Level Two Content2' value='2-02' />
            {showThird ? (
              <SubSideNavBar title='Level Three Title' value='3-0'>
                <SideNavBarItem title='Level Three Content1' value='3-01' />
                <SideNavBarItem title='Level Three Content2' value='3-02' />
              </SubSideNavBar>
            ) : null}
          </SubSideNavBar>
        </SubSideNavBar>
        <SubSideNavBar open={false} title='Level One Title-2' value='1-1'>
          <SideNavBarItem title='Level One Content2-1' value='1-11' />
          <SideNavBarItem title='Level One Content2-2' value='1-12' />
        </SubSideNavBar>
      </SideNavBar>
    </>
  )
}
export default App

```

:::

### Navigation Nesting (Up To Three Levels Recommended)

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
        title="Show"
        onClick={() => {
          changeNarBar(true)
        }}
      /> 
      <SideNavBar
        title='Front Page'
        visible={navBarState.visible}
        position={navBarState.position}
        onClose={() => {
          changeNarBar(false)
        }}>
        <SubSideNavBar title='Level One Title' value='1-0' onClick={clickTitle}>
          <SideNavBarItem title='Level One Content1' value='1-01' onClick={clickItem} />
          <SideNavBarItem title='Level One Content2' value='1-02' />
          <SubSideNavBar title='Level Two Title' value='2-0'>
            <SideNavBarItem title='Level Two Content1' value='2-01' />
            <SideNavBarItem title='Level Two Content2' value='2-02' />
            {showThird ? (
              <SubSideNavBar title='Level Three Title' value='3-0'>
                <SideNavBarItem title='Level Three Content1' value='3-01' />
                <SideNavBarItem title='Level Three Content2' value='3-02' />
              </SubSideNavBar>
            ) : null}
          </SubSideNavBar>
        </SubSideNavBar>
        <SubSideNavBar open={false} title='Level OneTitle-2' value='1-1'>
          <SideNavBarItem title='Level One Content2-1' value='1-11' />
          <SideNavBarItem title='Level One Content2-2' value='1-12' />
        </SubSideNavBar>
      </SideNavBar>
    </>
  );
};  
export default App;

```

:::

## SideNavBar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | whether the component is visible | `boolean` | `false` |
| title | overall title | `string` | `-` |
| width | mask width in percentage | `string` | `80%` |
| position | popup position | `left` \| `right` | `left` |
| indent | indent width | `number` | `20` |
| onClose | Triggered when the mask is closed | `-` | `-` |

## SubSideNavBar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier for navigation | `string`  \|  `number` | `-` |
| title | overall title | `string` | `-` |
| open | whether the navigation is expanded by default | `boolean` | `true` |
| onClick | Navigation click | `({title: string, value: string \| number, isShow: boolean}) => void` | `-` |

## SideNavBarItem

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier for navigation | `string`  \|  `number` | `-` |
| title | overall title | `string` | `-` |
| onClick | Navigation click | `({title: string, value: string \| number}) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-sidenavbar-content-bg-color | sidebar navigation background color | `$white` |
| \--nutui-sidenavbar-item-height | The height of each item in the sidebar | `40px` |
| \--nutui-sidenavbar-title-padding | padding for title | `10px 8px 10px 20px` |
| \--nutui-sidenavbar-title-background | The background color of the title | `$color-background` |
| \--nutui-sidenavbar-title-color | The font color of the title | `$color-title` |
| \--nutui-sidenavbar-sub-title-padding | Padding of subtitle | `10px 8px 10px 35px` |
| \--nutui-sidenavbar-sub-title-background | Subtitle background color | `$color-background-sunken` |
| \--nutui-sidenavbar-sub-title-color | Subtitle font color | `$color-title` |
| \--nutui-sidenavbar-sub-list-background | option list background color | `$color-background-sunken` |
| \--nutui-sidenavbar-sub-list-color | option list font color | `$color-title` |