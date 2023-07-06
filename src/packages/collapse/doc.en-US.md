# Collapse 折叠面板

## Intro

Place the content in multiple folded panels, and click the panel title to expand or shrink the content.

## Install

```tsx
import { Collapse } from 'nutui-react'
```

## Code demonstration

### Basic Usage

:::demo

```jsx
import  React from "react";
import { Collapse } from '@nutui/nutui-react';
import { DownArrow } from '@nutui/icons-react';

const App = () => {
  return (
    <>
    <Collapse defaultActiveName={['1', '2']} expandIcon={<DownArrow />}>
      <Collapse.Item title="title1" name="1">
        Nutui-React is a lightweight React component library with JD style
      </Collapse.Item>
      <Collapse.Item title="title2" name="2">
        The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
      </Collapse.Item>
      <Collapse.Item title="title3" name="3" disabled>
        Full use of typescipt
      </Collapse.Item>
    </Collapse>
    </>
  );
};
export default App;
```

:::

### 受控方式

:::demo

```jsx
import React, {useState} from "react";
import { Collapse } from '@nutui/nutui-react-taro';
import { DownArrow } from '@nutui/icons-react-taro';

const App = () => {
  const [activeName, setActiveName] = useState(['1', '2'])
  const onChange = (activeName, name, status) => {
    setActiveName(activeName)
  }
  return (
    <Collapse activeName={activeName} onChange={onChange}>
      <Collapse.Item title="title1" name="1">
        Nutui-React is a lightweight React component library with JD style
      </Collapse.Item>
      <Collapse.Item title="title2" name="2">
        Nutui-React is a lightweight React component library with JD style
      </Collapse.Item>
      <Collapse.Item title="title3" name="3">
        Nutui-React is a lightweight React component library with JD style
      </Collapse.Item>
    </Collapse>
  );
};
export default App;
```

:::

### No icon style

:::demo

```tsx
import React, { useState } from 'react'
import { Collapse } from '@nutui/nutui-react'

const App = () => {
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  return (  
  <Collapse defaultActiveName={['1', '2']} change={(isOpen, name) => changeEnv(isOpen, name)}>
    <Collapse.Item title="title1" name="1">
      Nutui-React is a lightweight React component library with JD style
    </Collapse.Item>
    <Collapse.Item title="title2" name="2">
      The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
    </Collapse.Item>
    <Collapse.Item title="title3" name="3">
      Full use of typescipt
    </Collapse.Item>
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
import { Collapse} from '@nutui/nutui-react'
import { DownArrow } from '@nutui/icons-react';

const App = () => {
  return (  
  <Collapse defaultActiveName={['1']} accordion expandIcon={<DownArrow />}>
    <Collapse.Item title="title1" name="1" extra="文本内容">
      Nutui-React is a lightweight React component library with JD style
    </Collapse.Item>
    <Collapse.Item title="title2" name="2">
      The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
    </Collapse.Item>
    <Collapse.Item title="title3" name="3">
      Full use of typescipt
    </Collapse.Item>
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
import { Collapse } from '@nutui/nutui-react'
import { DownArrow, Checked, HeartFill } from '@nutui/icons-react';

const App = () => {
  return (  
  <Collapse defaultActiveName={['1']} accordion expandIcon={<DownArrow />} rotate={90}>
    <Collapse.Item title="title1" name="1" expandIcon={<Checked />}>
      Nutui-React is a lightweight React component library with JD style
    </Collapse.Item>
    <Collapse.Item title="title2" name="2" expandIcon={<HeartFill />}>
      The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
    </Collapse.Item>
    <Collapse.Item title="title3" name="3">
      Full use of typescipt
    </Collapse.Item>
  </Collapse>
  )
}
export default App;
```

:::

### Custom title & extra

:::demo

```jsx
import React from 'react'
import { Collapse } from '@nutui/nutui-react'
import { DownArrow, Checked, HeartFill } from '@nutui/icons-react';

const App = () => {
  return (  
    <Collapse defaultActiveName={['1']} accordion expandIcon={<DownArrow />}>
      <Collapse.Item
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
      </Collapse.Item>
      <Collapse.Item
        title="title2"
        name="2"
        extra={
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
      </Collapse.Item>
      <Collapse.Item title="title3" name="3">
        Full use of typescipt
      </Collapse.Item>
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
import { Collapse, Button } from '@nutui/nutui-react'

const oldDate = [
  {
    title: 'title1',
    name: '1',
    data: 'Nutui-React is a lightweight React component library with JD style',
  },
  {
    title: 'title12',
    name: '2',
    data: 'Nutui-React is a lightweight React component library with JD style',
  },
  {
    title: 'title13',
    name: '3',
    data: 'Nutui-React is a lightweight React component library with JD style',
  },
]
const newDate = [
  {
    title: 'title21',
    name: '1',
    data: 'Nutui-React is a lightweight React component library with JD style',
  },
  {
    title: 'title22',
    name: '2',
    data: 'Nutui-React is a lightweight React component library with JD style',
  },
]

const App = () => {
  const [domData, setDomData] = useState(oldDate)
  const changeNewData = () => {
    setDomData(newDate)
  }
  const changeOldData = () => {
    setDomData(oldDate)
  }
  return (
    <>
      <Collapse defaultActiveName="2" accordion>
        {domData.map((item, index) => {
          return (
            <Collapse.Item title={item.title} name={item.name} key={index}>
              {item.data}
            </Collapse.Item>
          )
        })}
      </Collapse>
      <Button type="primary" size="small" onClick={() => changeNewData()}>
        change
      </Button>
      <Button type="info" size="small" onClick={() => changeOldData()}>
        reset
      </Button>
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
| defaultActiveName | Default active name, uncontrolled | `Array<string>` \| `string`  | `-` |
| activeName | Of the currently expanded panel name, controlled | `Array<string>` \| `string`  | `-` |
| accordion | Whether to turn on accordion mode | `boolean` | `false` |
| rotate | Click the rotation angle of collapse and expansion to take effect in the custom icon mode | `string` \| `number`  | `180` |
| expandIcon | Icon | `ReactNode` | `-` |

## Collapse.Item

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | unique identifier, required | `string` | `-` |
| title | the content on the left side of the title bar supports slot incoming (props incoming has higher priority) | `ReactNode` | `-` |
| disabled | whether the title bar is disabled | `boolean` | `false` |
| extra | extra of title bar, support slot incoming (props incoming has higher priority) | `ReactNode` | `-` |
| rotate | Click the rotation angle of collapse and expansion to take effect in the custom icon mode | `string` \| `number`  | `180` |
| expandIcon | Icon | `ReactNode` | `-` |
| onChange | Triggered when the panel is switched | `(activeName, name, status) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-collapse-item-padding | padding | `13px 36px 13px 26px` |
| \--nutui-collapse-item-font-size | fontSize | `$font-size-2` |
| \--nutui-collapse-item-line-height | lineHeight | `24px` |
| \--nutui-collapse-item-color | font color | `#666666` |
| \--nutui-collapse-item-disabled-color | disabled color | `$gray3` |
| \--nutui-collapse-item-extra-color | Extra font color | `#666666` |
| \--nutui-collapse-wrapper-content-background-color | background | `$white` |
| \--nutui-collapse-wrapper-content-color | content font color | `#666666` |
| \--nutui-collapse-wrapper-content-font-size | content fontSize | `$font-size-2` |
| \--nutui-collapse-wrapper-content-line-height | content lineHeight | `1.5` |
| \--nutui-collapse-wrapper-content-padding | content padding | `12px 26px` |