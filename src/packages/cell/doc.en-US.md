# Cell 

### Intro

The cell is a single display item in the list.

### Install

```ts
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
      <Cell title="Title" extra="extra" />
      <Cell title="Title" description="Subtitle extra" extra="extra" />
      <Cell
        title="Click Test"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => testClick(event)}
      />
      <Cell title="Round Radius 0" radius={0} />
    </>
  )
}
export default App
```

:::

### Customize Content

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell>
        <div>Customize Content</div>
    </Cell>
  )
}
export default App
```

:::

### Customize the title area

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'
import { My } from '@nutui/icons-react'

const App = () => {
  return (
    <Cell
        title={
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <My />
            Title<span style={{ marginLeft: '5px' }}>Subtitle extra</span>
        </div>
        }
        description={
        <span>Subtitle extra<b style={{ color: 'red' }}>1</b></span>
        }
        extra="extra"
    />
  )
}
export default App
```

:::

### Customize the right area

:::demo

```tsx
import React from 'react'
import { CellGroup, Cell, Switch } from '@nutui/nutui-react'

const App = () => {
  return (
    <CellGroup title="Customize the right arrow area">
      <Cell title="Switch" extra={<Switch checked />} />
    </CellGroup>
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
import { Right } from '@nutui/icons-react'

const App = () => {
  const onJumpclick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string
  ) => {
    const replace = false
    if (url) {
      replace ? window.location.replace(url) : (window.location.href = url)
    }
  }
  return (
    <>
      <CellGroup
        title="Link | CellGroup Usage"
        extra="Usage nut-cell-group support title extra"
      >
        <Cell 
        lassName="nutui-cell--clickable"
        title="Link Usage"
        align="center"
        extra={<Right />}
        />
        <Cell
          className="nutui-cell--clickable"
          title="URL Jump"
          extra={
            <>
            <span style={{ marginRight: '5px' }}>https://jd.com</span>
            <Right />
            </>
        }
        align="center"
        onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => onJumpclick(event, 'https://jd.com')}
        />
      </CellGroup>
    </>
  )
}
export default App
```

:::

### Vertical Center

You can align the left and right contents of the cell vertically through the 'center' attribute.

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell align="center"  title="Title" description="Subtitle extra" extra="Desc" />
  )
}
export default App
```

:::

## API


### CellGroup Prop

| Attribute | Description | Type   | Default |
|-------|----------|--------|--------|
| title | Title | string | -      |
| description  | ReactNode | string | -      |

### Cell Prop

| Attribute         | Description                                                                                              | Type             | Default          |
|-------------------|----------------------------------------------------------------------------------------------------------|------------------|------------------|
| title             | Title                      |  ReactNode           | -      |
| description          | Description                           |  ReactNode           | -      |
| extra              | Extra                                     | ReactNode      | -      |
| radius | Corner radius                                      | string            | `6px`    |
| align    | Alignment in the vertical direction, with an optional value of`flex-start`、`center`、`flex-end` | string          | `flex-start`  |


### Cell Event

| Event | Description                  | Arguments   |
|-------|------------------------------|-------------|
| onClick | Emitted when cell is clicked | `event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>` |



## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-cell-color | `$gray1` |
| --nutui-cell-title-font | `$font-size-2` |
| --nutui-cell-title-description-font | `$font-size-1` |
| --nutui-cell-description-font | `$font-size-2` |
| --nutui-cell-description-color | `$gray2` |
| --nutui-cell-subtitle-color | `$gray2` |
| --nutui-cell-border-radius | `6px` |
| --nutui-cell-padding | `13px 16px` |
| --nutui-cell-line-height | `20px` |
| --nutui-cell-after-right | `16px` |
| --nutui-cell-after-border-bottom | `2px solid #f5f6f7` |
| --nutui-cell-default-icon-margin | `0 4px 0 0px` |
| --nutui-cell-background | `$gray6` |
| --nutui-cell-box-shaow | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| --nutui-cell-group-title-padding | `0 10px` |
| --nutui-cell-group-title-color | `#909ca4` |
| --nutui-cell-group-title-font-size | `$font-size-2` |
| --nutui-cell-group-title-line-height | `20px` |
| --nutui-cell-group-description-padding | `0 10px` |
| --nutui-cell-group-description-color | `#909ca4` |
| --nutui-cell-group-description-font-size | `$font-size-1` |
| --nutui-cell-group-description-line-height | `16px` |
| --nutui-cell-group-background-color | `$white` |
