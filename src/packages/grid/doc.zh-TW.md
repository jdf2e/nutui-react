# Grid 宮格

## 介紹

用於分隔成等寬區塊進行頁面導航。

## 安裝

```tsx
import { Grid } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 自定義列數

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns={3}>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 正方形格子

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns={3} square>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 格子間距

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid gap={3}>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 內容翻轉

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid reverse>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 內容橫向

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid direction="horizontal">
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 內容翻轉 + 橫向

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid reverse direction="horizontal">
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 圖標顏色/大小

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns="3">
      <Grid.Item text="文字">
        <Image width={15} height={15} />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image color="red" />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image width={30} height={30} color="#478EF2" />
      </Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 自定義內容

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
        <Image
          src={imgSrc}
          width="100%"
          height="100%"
        />
      </Grid.Item>
      <Grid.Item>
        <Image
          src={imgSrc}
          width="100%"
          height="100%"
        />
      </Grid.Item>
      <Grid.Item>
        <Image
          src={imgSrc}
          width="100%"
          height="100%"
        />
      </Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 點擊子項事件

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image as ImageIcon } from '@nutui/icons-react'

const App = () => {
  const onClick = (item: any, index: number) => {
    Toast.show(`clicked ${item.text}, index ${index}`)
  }
  return (
    <Grid direction="horizontal" onClick={onClick}>
      <Grid.Item text="文字">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="文字">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="文字">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="文字">
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| columns | 列數 | `number` \| `string` | `4` |
| gap | 格子之間的間距，默認單位為`px` | `number` \| `string` | `0` |
| center | 是否將格子內容居中顯示 | `boolean` | `true` |
| square | 是否將格子固定為正方形 | `boolean` | `false` |
| reverse | 內容翻轉 | `boolean` | `false` |
| direction | 格子內容排列的方向 | `horizontal` \| `vertical` | `vertical` |
| onClick | 宮格子項點擊事件 | `(index) => void` | `-` |

## Grid.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| text | 文字 | `string` \| `ReactNode` | `-` |
| onClick | 點擊格子時觸發 | `(event: Event) => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-grid-border-color | 邊框顏色 | `#f5f6f7` |
| \--nutui-grid-item-content-padding | 內邊距 | `16px 8px` |
| \--nutui-grid-item-content-bg-color | 背景 | `$white` |
| \--nutui-grid-item-text-margin | 外邊距 | `8px` |
| \--nutui-grid-item-text-color | 文字顏色 | `$color-title` |
| \--nutui-grid-item-text-font-size | 文字字體大小 | `$font-size-small` |
