#  Grid 宮格

### 介紹

用于分隔成等寬區塊進行頁面導航。

### 安裝

```javascript
// react
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
import { Grid,GridItem,Avatar } from '@nutui/nutui-react'

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
| center        | 是否將格子內容居中顯示                      | boolean                | `true`      |
| square        | 是否將格子固定為正方形                      | boolean                | `false`     |
| reverse       | 內容翻轉                                  | boolean                | `false`     |
| direction     | 格子內容排列的方向，可選值為 `horizontal`    | string                 | `vertical`  |

## Grid Event

| 字段       | 說明         | 回調參數                                           |
|----------|--------------|----------------------------------------------------|
| onClick | 宮格子項點擊事件 | 點擊當前項數據, 索引 |

### GridItem Props

| 參數                  | 說明                                                                                     | 類型               | 默認值      |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|------------|
| text                 | 文字                                                                                     | string \| ReactNode   | -          |
| fontSize `1.4.4`     | 文字大小                                                                                  | string \| number   | -          |
| color `1.4.4`        | 文字顏色                                                                                  | string   | -          |
| icon                 | [圖標名稱](#/icon) 或圖片鏈接                                                              | string  \| ReactNode   | -          |
| iconSize            | 圖標大小，如 `20px` `2em` `2rem`                                                          | number \| string   | `28px`     |
| iconColor           | 圖標顏色                                                                                  | string            | -           |

### GridItem Event

| 參數                  | 說明                                                                                     | 回調參數    |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|
| onClick `1.3.14`                 | 點擊格子時觸發                                                                         | event: Event      |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-grid-border-color | ` #f5f6f7` |
| --nutui-grid-item-content-padding | `  16px 8px` |
| --nutui-grid-item-content-bg-color | `  $white` |
| --nutui-grid-item-text-margin | ` 8px` |
| --nutui-grid-item-text-color | ` $gray1` |
| --nutui-grid-item-icon-color | ` $gray1` |
| --nutui-grid-item-text-font-size | `  $font-size-1` |
