# Tag 标签

### 介绍

用于标记和分类的标签。

### 安装

``` javascript
import { Tag } from '@nutui/nutui-react';
```

## 代码实例

### 基础用法

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag type="primary">标签</Tag>
      <Tag type="success">标签</Tag>
      <Tag type="danger">标签</Tag>
      <Tag type="warning">标签</Tag>
    </>
  )
}
export default App;
```

:::

### 空心样式

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag plain>标签</Tag>
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
      <Tag round type="primary">标签</Tag>
    </>
  )
}
export default App;
```

:::

### 标记样式

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag mark type="primary">标签</Tag>
    </>
  )
}
export default App;
```

:::

### 可关闭标签

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag  closeable onClose={()=>alert('Tag closed')}  type="primary">标签</Tag>
    </>
  )
}
export default App;
```

:::

### 自定义颜色

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag color="#FA685D">标签</Tag>
      <Tag color="#E9E9E9" textColor="#999999">标签</Tag>
      <Tag color="#FA2400" plain>标签</Tag>
    </>
  )
}
export default App;
```

:::


### 点击事件

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag type='primary' onClick={()=>alert('Tag clicked')}>标签</Tag>
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
  const  [isShow,setIsShow] = useState(true) // 是否展示Tag组件
  return (
    <>
    {
      isShow? (
        <Tag type='primary' onClick={()=>alert('Tag clicked')}>标签</Tag>
      ):null
    }  
    <Button type='default' size="small" onClick={()=>{setIsShow(false)}} >点击删除Tag</Button>
    </>
  )
  
}
export default App;
```

:::
## API

### Props

| 字段       | 说明                                             | 类型    | 默认值    |
|------------|--------------------------------------------------|---------|-----------|
| type       | 标签类型，可选值为primary success danger warning | String  | `default` |
| color      | 标签颜色                                         | String  | -         |
| texColor | 文本颜色，优先级高于color属性                    | String  | `white`   |
| plain      | 是否为空心样式                                   | Boolean | `false`   |
| round      | 是否为圆角样式                                   | Boolean | `false`   |
| mark       | 是否为标记样式                                   | Boolean | `false`   |
| closeable  | 是否为可关闭标签                                 | Boolean | `false`   |

### Event

| 事件名称 | 说明     | 回调参数 |
|----------|----------|----------|
| onClick`v1.2.2`    | 点击事件 | event    |
| onClose    | 关闭事件 | event    |

