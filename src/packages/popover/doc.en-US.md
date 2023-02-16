# Popover

### Intro

Click or hover over the element to pop up the bubble card overlay.

### Install

``` javascript
// react
import { Popover } from '@nutui/nutui-react';

```

### Basic Usage
Popover supports both light and dark styles. The default is light style. Set the theme property to `dark` to switch to dark style.

```tsx
<Popover 
  visible={lightTheme} 
  onClick={()=>{lightTheme ? setLightTheme(false) : setLightTheme(true)}} 
  list={itemList}>
  <Button type="primary" shape="square">Light</Button>
</Popover>
<Popover 
  visible={darkTheme} 
  theme="dark" 
  onClick={()=>{darkTheme ? setDarkTheme(false) : setDarkTheme(true)}} 
  list={itemList}>
  <Button type="primary" shape="square">Dark</Button>
</Popover>
```

```javascript

  const [lightTheme, setLightTheme] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const itemList = [
    {name: 'option1'},
    {name: 'option2'},
    {name: 'option3'}];

```

### Option Configuration

```tsx
<Popover
  visible={showIcon} 
  theme="dark" 
  onClick={()=>{showIcon ? setShowIcon(false) : setShowIcon(true)}} 
  list={iconItemList}>
  <Button type="primary" shape="square">Show Ico</Button>
</Popover>
<Popover 
  visible={disableAction} 
  onClick={()=>{disableAction ? setDisableAction(false) : setDisableAction(true)}} 
  list={itemListDisabled}>
  <Button type="primary" shape="square">Disabled</Button>
</Popover>
```

```javascript

  const [showIcon, setShowIcon] = useState(false)
  const [disableAction, setDisableAction] = useState(false)
 const iconItemList= [
    {name: 'o'p't'i'o'n's',icon: 'my2'},
    {name: 'option2',icon: 'cart2'},
    {name: 'option3',icon: 'location2'}
  ];
  const itemListDisabled=[
    {name: 'option1',disabled: true},
    {name: 'option2', disabled: true},
    {name: 'option3'}
  ];

```

### Custom Content

```tsx
 <Popover 
  visible={customized} 
  onClick={()=>{customized ? setCustomized(false) : setCustomized(true)}}>
  <Button type="primary" shape="square">custom content</Button>
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
```
```javascript

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

```

### Placement

Use the location property to control where the bubble pops up. optional value

```
top           # Top middle 
left          # Left middle 
right         # Right middle 
bottom        # Bottom middle 
```
New since `v1.3.0`
```
top-start     # Top left
top-end       # Top right 
left-start    # Left top
left-end      # Left bottom
right-start   # Right top
right-end     # Right bottom
bottom-start  # Bottom left
bottom-end    # Bottom right
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
        <Button type="primary" shape="square">Top</Button>
      </Popover>
    </>
  )
}
  
export default App;
```
:::

## API

### Props

| Attribute | Description | Type | Default |
|----------------|---------------------------------|---------|------------|
| list          | list of options                          | List[]   | []        |
| visible      | whether to show                 | boolean  | false     |
| theme          | Theme style, can be set to `dark` `light`          | string   | `light`   |
| location       | pop-up location  | string   | `bottom`  |
| offset `v1.3.0`       | the offset of the occurrence position  | number   | 20  |

### List data structure  

The List property is an array of objects, each object in the array is configured with a column, and the object can contain the following values:

| Key            | Description                 | Type      | Default  |
|----------------|----------------------|----------|--------|
| name           | option text               | string   | -      |
| icon           | `nut-icon` name      | string   | -      |
| disabled       | whether to disable          | boolean  | false  | 

### Events

| 名称    | 说明         |
|---------|--------------|
| onClick | Triggered when an option is clicked |
| onChoose | Triggered when an option item is clicked |





## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-popover-border-radius`v1.4.8` | ` 8px`|
| --nutui-popover-font-size`v1.4.8` | ` $font-size-1` |
| --nutui-popover-menu-item-height`v1.4.8` | ` 30px` |
| --nutui-popover-menu-item-name-margin`v1.4.8` | ` 0px 10px` |
| --nutui-popover-menu-item-hover-background-color`v1.4.8` | `  $primary-color`|
| --nutui-popover-menu-item-hover-text-color`v1.4.8` | ` $primary-text-color`|
| --nutui-popover-menu-item-border-width`v1.4.8` | ` 80%`|
| --nutui-popover-menu-item-border-height`v1.4.8` | ` 1px`|
| --nutui-popover-menu-item-border-left`v1.4.8` | ` 10%`|
| --nutui-popover-menu-item-border-bottom`v1.4.8` | ` 2%`|
| --nutui-popover-white-background-color | `  rgba(255, 255, 255, 1)` |
| --nutui-popover-dark-background-color | `  rgba(75, 76, 77, 1)` |
| --nutui-popover-border-bottom-color | `  rgba(229, 229, 229, 1)` |
| --nutui-popover-primary-text-color | `  rgba(51, 51, 51, 1)` |
| --nutui-popover-disable-color | `  rgba(154, 155, 157, 1)` |
| --nutui-popover-menu-item-padding | `  8px 0` |
| --nutui-popover-menu-item-margin | `  0 8px` |
| --nutui-popover-menu-name-line-height | `  normal` |
