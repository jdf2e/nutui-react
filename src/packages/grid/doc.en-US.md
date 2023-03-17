#  Grid

### Intro

Used to separate into equal-width blocks for page navigation.

### Install

```javascript
// react
import { Grid, GridItem } from '@nutui/nutui-react'
```


###  Basic Usage

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid>
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
    </Grid>
  )
}
export default App
```
:::

### Column Num

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columnNum={3}>
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
    </Grid>
  )
}
export default App
```
:::

### Square

:::demo
```tsx
import React from 'react'
import { Grid,GridItem } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columnNum={3} square>
        <GridItem icon={<Dongdong />} text="text" />
        <GridItem icon={<Dongdong />} text="text" />
        <GridItem icon={<Dongdong />} text="text" />
    </Grid>
  )
}
export default App
```
:::


### Gutter

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid gutter={3}>
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
    </Grid>
  )
}
export default App
```
:::

### Reverse

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid reverse>
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
    </Grid>
  )
}
export default App
```
:::

### Horizontal

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid direction="horizontal">
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem icon={<Dongdong />} text="text" />
    </Grid>
  )
}
export default App
```
:::

### Icon Style

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columnNum="3">
      <GridItem icon={<Dongdong />} text="text" />
      <GridItem
        icon={<Dongdong width={40} height={40} color="#478EF2" />}
        text="text"
      />
      <GridItem icon={<Dongdong />} text="text" />
    </Grid>
  )
}
export default App
```
:::

### Custom Content

:::demo
```tsx
import React from 'react'
import { Grid, GridItem, Avatar, Image } from '@nutui/nutui-react'
import { Dongdong, My } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid border={false}>
      <GridItem icon={<Dongdong />} text={<span>More</span>} />
      <GridItem
        text={
          <Avatar
            className="demo-avatar"
            icon={<My color="#fff" />}
            bgColor="#FA2C19"
          />
        }
        onClick={handleClick}
      />
      <GridItem
        icon={
          <Avatar
            className="demo-avatar"
            icon={<My color="#fff" />}
            bgColor="#FA2C19"
          />
        }
      />
      <GridItem>
        <Avatar
          size="large"
          icon={<Image src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />}
        />
      </GridItem>
    </Grid>
  )
}
export default App
```
:::

## API

### Props

| Attribute   | Description                                              | Type   | Default |
|---------------|------------------------------------------|------------------------|------------|
| columnNum    | Column Num                                     | number \| string         | `4`        |
| border        | Whether to show border                               | boolean                | `true`     |
| gutter        | Gutter,The default unit is `px`               | number \| string        | `0`        |
| center        | Whether to center content                      | boolean                | `true`      |
| square        | 	Whether to be square shape                      | boolean                | `false`     |
| reverse       | 	Whether to reverse the position of icon and text       | boolean                | `false`     |
| direction     | 	Content arrangement direction, can be set to  `horizontal`    | string                 | `vertical`  |
| iconSize`v2.0.0 deprecated`     | Icon size,for example `20px` `2em` `2rem`          | number \| string        | `28px`     |
| iconColor`v2.0.0 deprecated`    | Icon color                                  | string                 | -          |


## Grid Event

| 字段       | 说明         | 回调参数                                           |
|----------|--------------|----------------------------------------------------|
| onClick | GridItem Click Event | currentGridItem, index |

### GridItem Props

| Attribute   | Description                                              | Type   | Default |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|------------|
| text                 | text                                                                                     | string\| ReactNode              | -          |
| fontSize `1.4.4`     | text size                                                                                | string \| number   | -          |
| color `1.4.4`        | text color                                                                               | string   | -          |
| icon                 | Icon                                                            | ReactNode     | -          |
| iconSize`v2.0.0 deprecated`            | Icon size,for example `20px` `2em` `2rem`      | number \| string  |`28px`  |
| iconColor`v2.0.0 deprecated`           | Icon color              | string            | -           |

### GridItem Event

| Event                  | Description                                                                                     | Arguments    |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|
| onClick `1.3.14`                 | GridItem Click Event    | `event: Event`      |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-grid-border-color | `#f5f6f7` |
| --nutui-grid-item-content-padding | `16px 8px` |
| --nutui-grid-item-content-bg-color | `$white` |
| --nutui-grid-item-text-margin | `8px` |
| --nutui-grid-item-text-color | `$gray1` |
| --nutui-grid-item-icon-color | `$gray1` |
| --nutui-grid-item-text-font-size | `$font-size-1` |
