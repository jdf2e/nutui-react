# Popover

### Intro

Click or hover over the element to pop up the bubble card overlay.

### Install

``` javascript
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



