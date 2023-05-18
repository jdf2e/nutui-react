# Collapse 折叠面板

## Intro

Place the content in multiple folded panels, and click the panel title to expand or shrink the content.

## Install

```ts
// react
import { Collapse, CollapseItem } from 'nutui-react'
```

## Code demonstration

### Basic Usage

:::demo

```jsx
import  React from "react";
import { Collapse, CollapseItem } from '@nutui/nutui-react';
import { DownArrow } from '@nutui/icons-react';

const App = () => {
  return (
    <>
    <Collapse activeKey={['1', '2']} expandIcon={<DownArrow />}>
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
import { Collapse, CollapseItem } from '@nutui/nutui-react'

const App = () => {
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  return (  
  <Collapse activeKey={['1', '2']} change={(isOpen, name) => changeEnv(isOpen, name)}>
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
import { Collapse, CollapseItem} from '@nutui/nutui-react'
import { DownArrow } from '@nutui/icons-react';

const App = () => {
  return (  
  <Collapse activeKey={['1']} accordion expandIcon={<DownArrow />}>
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
import { Collapse, CollapseItem } from '@nutui/nutui-react'
import { DownArrow, Checked, HeartFill } from '@nutui/icons-react';

const App = () => {
  return (  
  <Collapse activeKey={['1']} accordion expandIcon={<DownArrow />} rotate={90}>
    <CollapseItem title="title1" name="1" expandIcon={<Checked />}>
      Nutui-React is a lightweight React component library with JD style
    </CollapseItem>
    <CollapseItem title="title2" name="2" expandIcon={<HeartFill />}>
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

### Custom title & subTitle

:::demo

```jsx
import React from 'react'
import { Collapse, CollapseItem } from '@nutui/nutui-react'
import { DownArrow, Checked, HeartFill } from '@nutui/icons-react';

const App = () => {
  return (  
    <Collapse activeKey={['1']} accordion expandIcon={<DownArrow />}>
      <CollapseItem
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checked />title1
          </div>
        }
        name="1"
      >
        Nutui-React is a lightweight React component library with JD style
      </CollapseItem>
      <CollapseItem
        title="title2"
        name="2"
        subTitle={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            title2<HeartFill color="red" />
          </div>
        }
      >
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

### Change Data

:::demo

```jsx
import React, { useState } from 'react'
import { Collapse, CollapseItem, Button } from '@nutui/nutui-react'

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
    <Collapse activeKey={currIndex} accordion>
      {domData.map((item, index) => {
        return (
          <CollapseItem title={item.title} name={item.name} key={index}>
            {item.data}
          </CollapseItem>
        )
      })}
    </Collapse>
    <Button type="button" onClick={() => changeData()}>点击我</Button>
    </>
  )
}
  export default App;
```

:::

## Collapse

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| activeKey | Of the currently expanded panel name | `Accordion mode：string \| number Non accordion mode：(string | number)[]` | - |
| accordion | Whether to turn on accordion mode | `boolean` | `false` |
| rotate | Click the rotation angle of collapse and expansion to take effect in the custom icon mode | `string \| number` | `180` |
| expandIcon | Icon | `ReactNode` | - |

## Collapse.Item

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | unique identifier, required | `string \| number` | - |
| title | the content on the left side of the title bar supports slot incoming (props incoming has higher priority) | `ReactNode` | - |
| disabled | whether the title bar is disabled | `boolean` | `false` |
| subTitle | subtitle of title bar, support slot incoming (props incoming has higher priority) | `ReactNode` | - |
| onChange | Triggered when the panel is switched | `(isOpen, name) => void` | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| \--nutui-collapse-item-padding | `13px 36px 13px 26px` |
| \--nutui-collapse-item-font-size | `$font-size-2` |
| \--nutui-collapse-item-line-height | `24px` |
| \--nutui-collapse-item-color | `#666666` |
| \--nutui-collapse-item-disabled-color | `#c8c9cc` |
| \--nutui-collapse-item-icon-color | `#666666` |
| \--nutui-collapse-item-icon-margin-right | `5px` |
| \--nutui-collapse-item-icon-margin-left | `5px` |
| \--nutui-collapse-item-sub-title-color | `#666666` |
| \--nutui-collapse-wrapper-content-background-color | `$white` |
| \--nutui-collapse-wrapper-content-color | `#666666` |
| \--nutui-collapse-wrapper-content-font-size | `$font-size-2` |
| \--nutui-collapse-wrapper-content-line-height | `1.5` |
| \--nutui-collapse-wrapper-content-padding | `12px 26px` |
| \--nutui-collapse-wrapper-empty-content-padding | `0 26px` |