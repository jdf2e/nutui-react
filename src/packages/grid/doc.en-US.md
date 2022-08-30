#  Grid

### Intro

Used to separate into equal-width blocks for page navigation.

### Install

```javascript
import { Grid ,GridItem } from '@nutui/nutui-react'
```


###  Basic Usage

:::demo
```tsx
import React from 'react'
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid>
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid columnNum={3}>
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
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

const App = () => {
  return (
    <Grid columnNum={3} square>
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
     <Grid gutter={3}>
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid reverse>
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid direction="horizontal">
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
        <GridItem icon="dongdong" text="text" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid columnNum="3" iconColor="#fa2c19">
        <GridItem icon="dongdong" text="text" />
        <GridItem
        icon="dongdong"
        text="text"
        iconColor="#478EF2"
        iconSize="40"
        />
        <GridItem icon="dongdong" text="text" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid border={false}>
        <GridItem icon="dongdong" text={<span>More</span>} />
        <GridItem
        text={
            <Avatar
            className="demo-avatar"
            icon="my"
            color="#fff"
            bgColor="#FA2C19"
            />
        }
        onClick={handleClick}
        />
        <GridItem
        icon={
            <Avatar
            className="demo-avatar"
            icon="my"
            color="#fff"
            bgColor="#FA2C19"
            />
        }
        />
        <GridItem>
        <Avatar
            size="large"
            icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
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
| iconSize     | Icon size,for example `20px` `2em` `2rem`          | number \| string        | `28px`     |
| iconColor    | Icon color                                  | string                 | -          |
| border        | Whether to show border                               | boolean                | `true`     |
| gutter        | Gutter,The default unit is `px`               | number \| string        | `0`        |
| center        | Whether to center content                      | boolean                | `true`      |
| square        | 	Whether to be square shape                      | boolean                | `false`     |
| reverse       | 	Whether to reverse the position of icon and text       | boolean                | `false`     |
| direction     | 	Content arrangement direction, can be set to  `horizontal`    | string                 | `vertical`  |

### GridItem Props

| Attribute   | Description                                              | Type   | Default |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|------------|
| text                 | text                                                                                     | string\| ReactNode              | -          |
| icon                 | Icon name or URL                                                            | string \| ReactNode     | -          |
| iconSize            | Icon size,for example `20px` `2em` `2rem`      | number \| string  |`28px`  |
| iconColor           | Icon color              | string            | -           |
