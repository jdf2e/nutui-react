# Cell 

### Intro

The cell is a single display item in the list.

### Install

```ts
// react
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
        icon={
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
import { My } from '@nutui/icons-react'

const App = () => {
  return <Cell title="Name" icon={<My />} desc="Description" isLink />
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
| title | Title | string | -      |
| desc  | Description | string | -      |
| titleSlot        | Custom`title`slot                        | ReactNode          | -  |
| descSlot        | Custom`desc`slot                         | ReactNode          | -  |

### Cell Prop

| Attribute         | Description                                                                                              | Type             | Default          |
|-------------------|----------------------------------------------------------------------------------------------------------|------------------|------------------|
| title             | Title                      |  ReactNode           | -      |
| subTitle          | Subtitle                           |  ReactNode           | -      |
| desc              | Description                                     | string      | -      |
| descTextAlign     | Right description text alignment [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp), is only available when displaying desc | string | `right`  |
| isLink            | Whether to show the right arrow and turn on click feedback            | boolean          | `false`  |
| to`v1.4.0 Abandon`       | C Target route of the link | string  | -      |
| replace           | If true, the navigation will not leave a history record                             | boolean          | `false`  |
| roundRadius`v1.2.0` | Corner radius                                      | string            | `6px`    |
| url               | Link                                         | string           | -      |
| icon              |  Custom Left `icon`              | ReactNode          | -      |
| center`v1.2.0`    | Whether to center content                                                                              | boolean          | `false`  |
| size`v1.2.0`      | Size, can be set to `large`                         | string          | -  |
| linkSlot`v1.2.0`  | Custom Right`link`                      | ReactNode          | -  |
| iconSlot`v1.5.0 deprecated`  |  Custom Left `icon`                        | ReactNode          | -  |



### Cell Event

| Event | Description                  | Arguments   |
|-------|------------------------------|-------------|
| onClick`v1.3.8` | Emitted when cell is clicked | `event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>` |



## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-cell-color | `$gray1` |
| --nutui-cell-title-font | `$font-size-2` |
| --nutui-cell-title-desc-font | `$font-size-1` |
| --nutui-cell-desc-font | `$font-size-2` |
| --nutui-cell-desc-color | `$gray2` |
| --nutui-cell-subtitle-color | `$gray2` |
| --nutui-cell-border-radius | `6px` |
| --nutui-cell-padding | `13px 16px` |
| --nutui-cell-line-height | `20px` |
| --nutui-cell-after-right | `16px` |
| --nutui-cell-after-border-bottom | `2px solid #f5f6f7` |
| --nutui-cell-default-icon-margin | `0 4px 0 0px` |
| --nutui-cell-large-title-font | `$font-size-large` |
| --nutui-cell-large-title-desc-font | `$font-size-base` |
| --nutui-cell-large-padding | `15px 16px` |
| --nutui-cell-background | `$gray6` |
| --nutui-cell-box-shaow | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| --nutui-cell-group-title-padding | `0 10px` |
| --nutui-cell-group-title-color | `#909ca4` |
| --nutui-cell-group-title-font-size | `$font-size-2` |
| --nutui-cell-group-title-line-height | `20px` |
| --nutui-cell-group-desc-padding | `0 10px` |
| --nutui-cell-group-desc-color | `#909ca4` |
| --nutui-cell-group-desc-font-size | `$font-size-1` |
| --nutui-cell-group-desc-line-height | `16px` |
| --nutui-cell-group-background-color | `$white` |
