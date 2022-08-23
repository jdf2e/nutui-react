#  Grid 宫格

### 介绍

用于分隔成等宽区块进行页面导航。

### 安装

```javascript
import { Grid ,GridItem } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

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

### 自定义列数

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


### 格子间距

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

### 内容翻转

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

### 内容横向

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

### 图标颜色/大小

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

### 自定义内容

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

| 参数          | 说明                                      | 类型                    | 默认值      |
|---------------|------------------------------------------|------------------------|------------|
| columnNum    | 列数                                     | number \| string         | `4`        |
| iconSize     | 图标大小，如 `20px` `2em` `2rem`          | number \| string        | `28px`     |
| iconColor    | 图标颜色                                  | string                 | -          |
| border        | 是否显示边框                               | boolean                | `true`     |
| gutter        | 格子之间的间距，默认单位为`px`               | number \| string        | `0`        |
| center        | 是否将格子内容居中显示                      | boolean                | `true`      |
| square        | 是否将格子固定为正方形                      | boolean                | `false`     |
| reverse       | 内容翻转                                  | boolean                | `false`     |
| direction     | 格子内容排列的方向，可选值为 `horizontal`    | string                 | `vertical`  |

### GridItem Props

| 参数                  | 说明                                                                                     | 类型               | 默认值      |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|------------|
| text                 | 文字                                                                                     | string \| ReactNode   | -          |
| icon                 | [图标名称](#/icon) 或图片链接                                                              | string  \| ReactNode   | -          |
| iconSize            | 图标大小，如 `20px` `2em` `2rem`                                                          | number \| string   | `28px`     |
| iconColor           | 图标颜色                                                                                  | string            | -           |
