# Tag 標籤

### 介紹

用于标记和分类的標籤。

### 安裝

``` javascript
// react
import { Tag } from '@nutui/nutui-react';
// taro
import { Tag } from '@nutui/nutui-react-taro';
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


### Event

| 事件名稱| 說明     | 回調參數 |
|----------|----------|----------|
| onClick    | 點擊事件 | event    |
| onClose    | 關閉事件 | event    |