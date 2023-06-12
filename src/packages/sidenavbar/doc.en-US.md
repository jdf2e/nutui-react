# SideNavBar组件

## Intro

For content selection and switching

## Install

```tsx
// react
import { SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

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
          title="left"
          
          onClick={() => {
            changeNarBar(true, 'left')
          }}
        />
        <Cell
          title="right"
          
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
          <SubSideNavBar title="Level 1 title" value="1-0" >
            <SideNavBarItem title="Level 1 content-1" value="1-01" />
            <SideNavBarItem title="Level 1 content-2" value="1-02" />
            <SubSideNavBar title="Level 2 title" value="2-0">
              <SideNavBarItem title="Level 2 content-1" value="2-01" />
              <SideNavBarItem title="Level 2 content-2" value="2-02" />
            </SubSideNavBar>
          </SubSideNavBar>
        </SideNavBar>
    </>
  );
};  
export default App;

```

:::

### Nesting (up to three layers recommended)

:::demo

```tsx
import  React,{useState} from "react";
import {Cell,SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const changeNarBar = (visible) => {
   setVisible(visible)
  }
  const clickItem = ({ title, value }) => {
    Toast.show(`title=${title},value=${value}`)
  }
  const clickTitle = ({ title, value, isShow }) => {
    Toast.show(`title=${title},value=${value},isShow=${isShow}`)
  }
  return ( 
    <>  
      <Cell
          title="show"
          
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
          <SubSideNavBar title="Level 1 title" value="1-0" onClick={clickTitle}>
            <SideNavBarItem title="Level 1 content-1" value="1-01" onClick={clickItem} />
            <SideNavBarItem title="Level 1 content-2" value="1-02" />
            <SubSideNavBar title="Level 2 title" value="2-0">
              <SideNavBarItem title="Level 2 content-1" value="2-01" />
              <SideNavBarItem title="Level 2 content-2" value="2-02" />
                <SubSideNavBar title="Level 3 title" value="3-0">
                  <SideNavBarItem title="Level 3 content-1" value="3-01" />
                  <SideNavBarItem title="Level 3 content-2" value="3-02" />
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

## SideNavBar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | whether the component is visible | `boolean` | `false` |
| title | overall title | `string` | `-` |
| width | mask width in percentage | `string` | `80%` |
| position | popup position | `'left' \| 'right'` | `left` |
| indent | indent width | `number` | `20` |
| onClose | Triggered when the mask is closed | `-` | `-` |

## SubSideNavBar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier for navigation | `string \| number` | `-` |
| title | overall title | `string` | `-` |
| open | whether the navigation is expanded by default | `boolean` | `true` |
| onClick | Navigation click | `data: {title: string, value: string \| number, isShow: boolean}` | `-` |

## SideNavBarItem

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier for navigation | `string \| number` | `-` |
| title | overall title | `string` | `-` |
| onClick | Navigation click | `data: {title: string, value: string \| number}` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-sidenavbar-content-bg-color | sidebar navigation background color | `$white` |
| \--nutui-sidenavbar-item-height | The height of each item in the sidebar | `40px` |
| \--nutui-sidenavbar-title-padding | padding for title | `10px 8px 10px 20px` |
| \--nutui-sidenavbar-title-background | The background color of the title | `$gray4` |
| \--nutui-sidenavbar-title-color | The font color of the title | `$gray1` |
| \--nutui-sidenavbar-sub-title-padding | Padding of subtitle | `10px 8px 10px 35px` |
| \--nutui-sidenavbar-sub-title-background | Subtitle background color | `$gray5` |
| \--nutui-sidenavbar-sub-title-color | Subtitle font color | `$gray1` |
| \--nutui-sidenavbar-sub-list-background | option list background color | `$gray5` |
| \--nutui-sidenavbar-sub-list-color | option list font color | `$gray1` |