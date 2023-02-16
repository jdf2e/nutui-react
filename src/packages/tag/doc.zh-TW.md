# Tag 標籤

### 介紹

用于标记和分类的標籤。

### 安裝

``` javascript
// react
import { Tag } from '@nutui/nutui-react';

```

## 代碼實例

### 基礎用法

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag type="primary">標籤</Tag>
      <Tag type="success">標籤</Tag>
      <Tag type="danger">標籤</Tag>
      <Tag type="warning">標籤</Tag>
    </>
  )
}
export default App;
```

:::

### 空心樣式

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag plain>標籤</Tag>
    </>
  )
}
export default App;
```

:::

### 圆角样式

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag round type="primary">標籤</Tag>
    </>
  )
}
export default App;
```

:::

### 標記樣式

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag mark type="primary">標籤</Tag>
    </>
  )
}
export default App;
```

:::

### 可关闭標籤

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag  closeable onClose={()=>alert('Tag closed')}  type="primary">標籤</Tag>
    </>
  )
}
export default App;
```

:::

### 自定義顏色

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag color="#FA685D">標籤</Tag>
      <Tag color="#E9E9E9" textColor="#999999">標籤</Tag>
      <Tag color="#FA2400" plain>標籤</Tag>
    </>
  )
}
export default App;
```



### 點擊事件

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag type='primary' onClick={()=>alert('Tag clicked')}>標籤</Tag>
    </>
  )
}
export default App;
```

:::

### 展示控制

:::demo

```tsx
import React, {useState} from "react";
import { Tag,Button } from '@nutui/nutui-react';

const App = () => {
  const  [isShow,setIsShow] = useState(true) // 是否展示Tag組件
  return (
    <>
    {
      isShow? (
        <Tag type='primary' onClick={()=>alert('Tag clicked')}>標籤</Tag>
      ):null
    }  
    <Button type='default' size="small" onClick={()=>{setIsShow(false)}} >點擊刪除Tag</Button>
    </>
  )
  
}
export default App;
```

:::
## API

### Props

| 字段       | 說明                                             | 類型    | 默認值    |
|------------|--------------------------------------------------|---------|-----------|
| type       | 標籤类型，可选值为primary success danger warning | String  | `default` |
| color      | 標籤颜色                                         | String  | -         |
| textColor | 文本顏色，優先級高於color屬性                    | String  | `white`   |
| plain      | 是否為空心樣式                                   | Boolean | `false`   |
| round      | 是否為圓角樣式                                   | Boolean | `false`   |
| mark       | 是否為標記樣式                                   | Boolean | `false`   |
| closeable  | 是否为可关闭標籤                                 | Boolean | `false`   |
| iconSize`v1.4.7` | 关闭标签的尺寸 | string | number | ` 12px`|

### Event

| 事件名稱| 說明     | 回調參數 |
|----------|----------|----------|
| onClick    | 點擊事件 | event    |
| onClose    | 關閉事件 | event    |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-tag-padding | ` 0 4px`|
| --nutui-tag-font-size | ` 12px` |
| --nutui-tag-default-border-radius | `  4px` |
| --nutui-tag-round-border-radius | ` 8px` |
| --nutui-tag-default-background-color | `  #000000` |
| --nutui-tag-primary-background-color | `  #3460fa` |
| --nutui-tag-success-background-color | `  #4fc08d` |
| --nutui-tag-danger-background-color-plain | `  #df3526` |
| --nutui-tag-warning-background-color | `  #f3812e` |
| --nutui-tag-default-color | ` #ffffff` |
| --nutui-tag-border-width | ` 1px` |
| --nutui-tag-height | ` auto` |
