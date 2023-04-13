#  Grid 宮格

### 介紹

用于分隔成等寬區塊進行頁面導航。

### 安裝

```javascript
// react
import { Grid } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

:::demo
```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
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
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns={3}>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
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
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns={3} square>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
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
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid gutter={3}>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
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
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid reverse>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
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
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid direction="horizontal">
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
    </Grid>
  )
}
export default App
```
:::

### 内容翻转 + 横向

:::demo
```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid reverse direction="horizontal">
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
      <Grid.Item text="文字"><Dongdong /></Grid.Item>
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
import { Dongdong } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns="3">
      <Grid.Item text="文字">
        <Dongdong width={10} height={10} />
      </Grid.Item>
      <Grid.Item text="文字">
        <Dongdong color="red" />
      </Grid.Item>
      <Grid.Item text="文字">
        <Dongdong width={20} height={20} color="#478EF2" />
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
import { Grid, Avatar, Image } from '@nutui/nutui-react'
import { Dongdong, My } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid>
      <Grid.Item text={<span>More</span>}><Dongdong /></Grid.Item>
      <Grid.Item>
        <Avatar
          className="demo-avatar"
          icon={<My color="#fff" />}
          bgColor="#FA2C19"
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

## API

### Grid Props

| 參數 | 說明 | 類型 | 默認值 |
|-|-|-|-|
| columns | 列數 | number \| string | `4` |
| gutter | 格子之間的間距，默認單位為`px` | number \| string | `0` |
| center | 是否將格子內容居中顯示 | boolean | `true` |
| square | 是否將格子固定為正方形 | boolean | `false` |
| reverse | 內容翻轉 | boolean | `false` |
| direction | 格子內容排列的方向，可選值為 `horizontal` | string | `vertical` |

### Grid Events

| 字段 | 說明 | 回調參數 |
|-|-|-|
| onClick | 宮格子項點擊事件 | 點擊當前項數據, 索引 |

### Grid.Item Props

| 參數 | 說明 | 類型 | 默認值 |
|-|-|-|-|
| text | 文字 | string \| ReactNode | - |

### Grid.Item Events

| 參數 | 說明 | 回調參數 |
|-|-|-|
| onClick | 點擊格子時觸發 | `event: Event` |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-grid-border-color | `#f5f6f7` |
| --nutui-grid-item-content-padding | `16px 8px` |
| --nutui-grid-item-content-bg-color | `$white` |
| --nutui-grid-item-text-margin | `8px` |
| --nutui-grid-item-text-color | `$gray1` |
| --nutui-grid-item-icon-color | `$gray1` |
| --nutui-grid-item-text-font-size | `$font-size-1` |
