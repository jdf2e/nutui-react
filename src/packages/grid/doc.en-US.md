# Grid

## Intro

Used to separate into equal-width blocks for page navigation.

## Install

```tsx
import { Grid } from '@nutui/nutui-react'
```

## Code

### Basic Usage

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
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
import { Grid } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns={3}>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
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
import { Grid } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns={3} square>
        <Grid.Item text="text"><Dongdong /></Grid.Item>
        <Grid.Item text="text"><Dongdong /></Grid.Item>
        <Grid.Item text="text"><Dongdong /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### Gap

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid gap={3}>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
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
import { Grid } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid reverse>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
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
import { Grid } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid direction="horizontal">
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### Reverse & Horizontal

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid reverse direction="horizontal">
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
      <Grid.Item text="text"><Dongdong /></Grid.Item>
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
import { Grid } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns="3">
      <Grid.Item text="text">
        <Dongdong width={10} height={10} />
      </Grid.Item>
      <Grid.Item text="text">
        <Dongdong color="red" />
      </Grid.Item>
      <Grid.Item text="text">
        <Dongdong width={20} height={20} color="#478EF2" />
      </Grid.Item>
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
import { Grid, Avatar, Image } from '@nutui/nutui-react'
import { Dongdong, My } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid>
      <Grid.Item text={<span>More</span>}>
        <Dongdong />
      </Grid.Item>
      <Grid.Item>
        <Avatar
          className="demo-avatar"
          icon={<My color="#fff" />}
          background="#FA2C19"
        />
      </Grid.Item>
      <Grid.Item>
        <Avatar
          size="large"
          icon={<Image src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />}
        />
      </Grid.Item>
    </Grid>
  )
}
export default App
```

:::

## Grid

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| columns | Column Num | `number` \| `string` | `4` |
| gap | Gap. The default unit is `px` | `number` \| `string` | `0` |
| center | Whether to center content | `boolean` | `true` |
| square | Whether to be square shape | `boolean` | `false` |
| reverse | Whether to reverse the position of icon and text | `boolean` | `false` |
| direction | Content arrangement direction | `horizontal` \| `vertical` | `vertical` |
| onClick | Grid.Item Click Event | `(item: GridItem, index) => void` | `-` |

## Grid.Item

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| text | text | `string\| ReactNode` | `-` |
| onClick | Grid.Item Click Event | `(event: Event) => void` | `-` |

## Theme

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-grid-border-color | border color | `#f5f6f7` |
| \--nutui-grid-item-content-padding | padding | `16px 8px` |
| \--nutui-grid-item-content-bg-color | background | `$white` |
| \--nutui-grid-item-text-margin | margin | `8px` |
| \--nutui-grid-item-text-color | text color | `$title-color` |
| \--nutui-grid-item-text-font-size | text font size | `$font-size-1` |