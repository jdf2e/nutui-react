# Cell 

### Intro

The cell is a single display item in the list.

### Install

```javascript
import { Cell, CellGroup } from '@nutui/nutui-react'
```

## Demo

###  Basic Usage

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  const testClick = (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    console.log('Click Test')
  }
  return (
    <>
      <Cell title="Title" desc="Description" />
      <Cell title="Title" subTitle="Subtitle Description" desc="Description" />
      <Cell
        title="Click Test"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => testClick(event)}
      />
      <Cell title="Round Radius 0" roundRadius={0} />
    </>
  )
}
export default App
```

:::

### Size setting large

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <Cell size="large" title="Title" desc="Description" />
      <Cell
        size="large"
        title="Title"
        subTitle="Subtitle Description"
        desc="Description"
      />
    </>
  )
}
export default App
```

:::

### Use Slots

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <Cell>
        <div>Content</div>
      </Cell>
    </>
  )
}
export default App
```

:::

### Use Slots(title slots)

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell
      title={
        <span>
          Title <b style={{ color: 'red' }}>1</b>
        </span>
      }
      desc="Description"
    />
  )
}
export default App
```

:::

### Link | CellGroup Usage

:::demo

```tsx
import React from 'react'
import { CellGroup, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <CellGroup
        title="Link | CellGroup Usage"
        desc="Usage nut-cell-group support title desc slots"
      >
        <Cell title="Link Usage" isLink />
        <Cell
          title="URL Jump"
          desc="https://jd.com"
          isLink
          url="https://jd.com"
        />
        <Cell title="Router Jump ’/‘ " to="/" />
      </CellGroup>
    </>
  )
}
export default App
```

:::

### Customize the right arrow area

:::demo

```tsx
import React from 'react'
import { CellGroup, Cell, Switch } from '@nutui/nutui-react'

const App = () => {
  return (
    <CellGroup title="Customize the right arrow area">
      <Cell title="Switch" linkSlot={<Switch checked />} />
    </CellGroup>
  )
}
export default App
```

:::

### Customize the left Icon area

:::demo

```tsx
import React from 'react'
import { CellGroup, Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <CellGroup title="Customize the left Icon area">
      <Cell
        title="Image"
        iconSlot={
          <img
            className="nut-icon"
            alt=""
            src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          />
        }
      />
    </CellGroup>
  )
}
export default App
```

:::

### Cell Display Icon

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  return <Cell title="Name" icon="my" desc="Description" isLink />
}
export default App
```

:::

### Only display desc , you can adjust the content position through desc-text-align

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  return <Cell descTextAlign="left" desc="Description" />
}
export default App
```

:::

### Vertical Center

You can center the left and right contents of the cell vertically through the 'center' attribute.

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell center title="Title" subTitle="Subtitle Description" desc="Desc" />
  )
}
export default App
```

:::

## API


### CellGroup Prop

| Attribute | Description | Type   | Default |
|-------|----------|--------|--------|
| title | Title | String | -      |
| desc  | Description | String | -      |
| titleSlot        | Custom`title`slot                        | React.ReactNode          | -  |
| descSlot        | Custom`desc`slot                         | React.ReactNode          | -  |

### Cell Prop

| Attribute               | Description                                                                                              | Type             | Default          |
|-------------------------|----------------------------------------------------------------------------------------------------------|------------------|------------------|
| title            | Title                      |  React.ReactNode           | -      |
| subTitle         | Subtitle                           |  React.ReactNode           | -      |
| desc             | Description                                     | String      | -      |
| descTextAlign    | Right description text alignment [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp) | String | right  |
| isLink           | Whether to show the right arrow and turn on click feedback            | Boolean          | false  |
| to               | C Target route of the link | String  | -      |
| replace          | If true, the navigation will not leave a history record                             | Boolean          | false  |
| roundRadius`v1.2.0`    | Corner radius                                      | String            | 6px    |
| url              | Link                                         | String           | -      |
| icon             |  Left [icon name](#/icon) or image              | String           | -      |
| center`v1.2.0`   | Whether to center content                                                                              | Boolean          | false  |
| size`v1.2.0`     | Size, can be set to `large`                         | String          | -  |
| iconSlot`v1.2.0` |  Custom Left `icon`                        | React.ReactNode          | -  |
| linkSlot`v1.2.0` | Custom Right`link`                      | React.ReactNode          | -  |



### Cell Event

| Event | Description                  | Arguments   |
|-------|------------------------------|-------------|
| click`v1.3.8废弃` | Emitted when cell is clicked | event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent> |
| onClick`v1.3.8` | Emitted when cell is clicked | event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent> |

