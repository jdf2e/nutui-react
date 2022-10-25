#  Collapse 折叠面板

### Intro

Place the content in multiple folded panels, and click the panel title to expand or shrink the content.

### Install

`import { Collapse,CollapseItem } from 'nutui-react'`


## Code demonstration

### Basic Usage

:::demo
```jsx
import  React from "react";
import { Collapse,CollapseItem } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Collapse activeName={['1', '2']} icon="arrow-down" iconSize="16" iconColor="#999">
      <CollapseItem title="title1" name="1">
        Nutui-React is a lightweight React component library with JD style
      </CollapseItem>
      <CollapseItem title="title2" name="2">
        The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
      </CollapseItem>
      <CollapseItem title="title3" name="3" disabled>
        Full use of typescipt
      </CollapseItem>
    </Collapse>
    </>
  );
};
export default App;
```
:::
### No icon style

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
    <CollapseItem title="title1" name="1">
      Nutui-React is a lightweight React component library with JD style
    </CollapseItem>
    <CollapseItem title="title2" name="2">
      The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
    </CollapseItem>
    <CollapseItem title="title3" name="3">
      Full use of typescipt
    </CollapseItem>
  </Collapse>
  )
}
export default App;
```
:::

### accordion Mode

:::demo
```tsx
import React from 'react'
import { Collapse ,CollapseItem} from '@nutui/nutui-react'

const App = () => {
  return (  
  <Collapse activeName={['1']} accordion icon="arrow-down">
    <CollapseItem title="title1" name="1" subTitle="文本内容">
      Nutui-React is a lightweight React component library with JD style
    </CollapseItem>
    <CollapseItem title="title2" name="2">
      The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
    </CollapseItem>
    <CollapseItem title="title3" name="3">
      Full use of typescipt
    </CollapseItem>
  </Collapse>
  )
}
export default App;
```
:::
### Custom collapse Icon

:::demo
```jsx
import React from 'react'
import { Collapse ,CollapseItem} from '@nutui/nutui-react'

const App = () => {
  return (  
  <Collapse activeName={['1']} accordion icon="arrow-right2" rotate={90}>
    <CollapseItem title="title1" name="1" icon="arrow-down">
      Nutui-React is a lightweight React component library with JD style
    </CollapseItem>
    <CollapseItem title="title2" name="2" icon="arrow-down">
      The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
    </CollapseItem>
    <CollapseItem title="title3" name="3" icon="arrow-down">
      Full use of typescipt
    </CollapseItem>
  </Collapse>
  )
}
export default App;
```
:::
### Custom title Icon

:::demo
```jsx
import React from 'react'
import { Collapse ,CollapseItem} from '@nutui/nutui-react'

const App = () => {
  return (  
    <Collapse activeName={['1']} accordion icon="arrow-down">
      <CollapseItem
        title="title1"
        name="1"
        titleIcon="checked"
        titleIconSize="16"
        titleIconColor="red"
        titleIconPosition="left"
      >
        Nutui-React is a lightweight React component library with JD style
      </CollapseItem>
      <CollapseItem
        title="title2"
        name="2"
        titleIcon="heart-fill"
        titleIconColor="red"
        titleIconPosition="right"
      >
        The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
      </CollapseItem>
      <CollapseItem title="title3" name="3" icon="arrow-down">
        Full use of typescipt
      </CollapseItem>
    </Collapse>
  )
}
export default App;
```
:::
### Change Data

:::demo
```jsx
import React, { useState } from 'react'
import { Collapse ,CollapseItem} from '@nutui/nutui-react'

const App = () => {
  const [currIndex, setCurrIndex] = useState(2)
  const [domData, setDomData] = useState([
    {
      title: 'title1',
      name: '1',
      data: 'Nutui-React is a lightweight React component library with JD style',
    },
    {
      title: 'title2',
      name: '2',
      data: 'Nutui-React is a lightweight React component library with JD style',
    },
    {
      title: 'title3',
      name: '3',
      data: 'Nutui-React is a lightweight React component library with JD style',
    },
  ])
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  const changeData = () => {
    const newData = [
      {
        title: 'title21',
        name: '1',
        data: 'The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!',
      },
      {
        title: 'title22',
        name: '2',
        data: 'The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!',
      },
      {
        title: 'title23',
        name: '3',
        data: 'The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!',
      },
    ]
    setDomData(newData)
    setCurrIndex(3)
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
    <button type="button" onClick={() => changeData()}>点击我</button>
    </>
  )
}
  export default App;
```
:::


## API

### Collapse Prop

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| activeName   | Of the currently expanded panel name  | Accordion mode：string | number
Non accordion mode：(string | number)[] | - |
| accordion    | Whether to turn on accordion mode | boolean | false  |
| icon         | Icon link and / or icon using nutui | String | -                |
| iconSize     | Icon size                          | String      | '16px' |
| iconColor    | Icon color                          | String | ''              |
| rotate       | Click the rotation angle of collapse and expansion to take effect in the custom icon mode| string/number | 180 |


### CollapseItem Prop

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| name   | unique identifier, required                         |string \ number | - |
| title    | the content on the left side of the title bar supports slot incoming (props incoming has higher priority)  | string | ''  |
| disabled    | whether the title bar is disabled                 | boolean | false  |
| subTitle    | subtitle of title bar, support slot incoming (props incoming has higher priority)     | string | ''  |
| titleIcon    | Icon link and / or icon using nutui           | string | ''  |
| titleIconColor    | Icon color  of title     | string | ''  |
| titleIconSize    | Icon size  of title        | string | ''  |
| titleIconPosition    | Icon  position of title      | string | ''  |



### Events

| Attribute | Description  | Callback Arguments     |
|--------|----------------|--------------|
| change`abandon`  | Triggered when the panel is switched | isOpen:Whether it is open status；name：Name value currently clicked |
| onChange`v1.3.8`  | Triggered when the panel is switched | isOpen:Whether it is open status；name：Name value currently clicked |