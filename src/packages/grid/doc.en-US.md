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
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
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
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns={3}>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
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
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns={3} square>
        <Grid.Item text="text"><Image /></Grid.Item>
        <Grid.Item text="text"><Image /></Grid.Item>
        <Grid.Item text="text"><Image /></Grid.Item>
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
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid gap={3}>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
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
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid reverse>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
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
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid direction="horizontal">
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
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
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid reverse direction="horizontal">
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
      <Grid.Item text="text"><Image /></Grid.Item>
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
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns="3">
      <Grid.Item text="text">
        <Image width={15} height={15} />
      </Grid.Item>
      <Grid.Item text="text">
        <Image color="red" />
      </Grid.Item>
      <Grid.Item text="text">
        <Image width={30} height={30} color="#478EF2" />
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
import { Grid, Image } from '@nutui/nutui-react'
import { Image as ImageIcon } from '@nutui/icons-react'

const App = () => {
  const imgSrc = "https://m.360buyimg.com/babel/jfs/t1/36973/29/11270/120042/5cf1fe3cEac2b5898/10c2722d0cc0bfa7.png"
  return (
    <Grid columns={3} square>
      <Grid.Item>
        <Image src={imgSrc} width="100%" height="100%" />
      </Grid.Item>
      <Grid.Item>
        <Image src={imgSrc} width="100%" height="100%" />
      </Grid.Item>
      <Grid.Item>
        <Image src={imgSrc} width="100%" height="100%" />
      </Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### Grid Item Click

:::demo

```tsx
import React from 'react'
import { Grid, Toast } from '@nutui/nutui-react'
import { Image as ImageIcon } from '@nutui/icons-react'

const App = () => {
  const onClick = (item: any, index: number) => {
    Toast.show(`clicked ${item.text}, index ${index}`)
  }
  return (
    <Grid direction="horizontal" onClick={onClick}>
      <Grid.Item text="text">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="text">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="text">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="text">
        <ImageIcon />
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
| \--nutui-grid-item-text-color | text color | `$color-title` |
| \--nutui-grid-item-text-font-size | text font size | `$font-size-small` |
