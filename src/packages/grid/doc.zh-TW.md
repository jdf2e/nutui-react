#  Grid 宮格

### 介紹

用于分隔成等寬區塊進行頁面導航。

### 安裝

```javascript
import { Grid ,GridItem } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

:::demo
```tsx
import React from 'react'
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid>
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid columnNum={3}>
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid columnNum={3} square>
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
     <Grid gutter={3}>
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid reverse>
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid direction="horizontal">
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
        <GridItem icon="dongdong" text="文字" />
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
import { Grid,GridItem } from '@nutui/nutui-react'

const App = () => {
  return (
    <Grid columnNum="3" iconColor="#fa2c19">
        <GridItem icon="dongdong" text="文字" />
        <GridItem
        icon="dongdong"
        text="文字"
        iconColor="#478EF2"
        iconSize="40"
        />
        <GridItem icon="dongdong" text="文字" />
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

| 參數          | 說明                                      | 類型                    | 默認值      |
|---------------|------------------------------------------|------------------------|------------|
| columnNum    | 列數                                     | number \| string         | `4`        |
| iconSize     | 圖標大小，如 `20px` `2em` `2rem`          | number \| string        | `28px`     |
| iconColor    | 圖標顏色                                  | string                 | -          |
| border        | 是否顯示邊框                               | boolean                | `true`     |
| gutter        | 格子之間的間距，默認單位為`px`               | number \| string        | `0`        |
| center        | 是否將格子內容居中顯示                   