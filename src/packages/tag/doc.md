# Tag 标签

## 介绍

用于标记和分类的标签。

## 安装

```tsx
import { Tag } from '@nutui/nutui-react';

```

## 代码演示

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
      <Tag type="info">标签</Tag>
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
      <Tag background="#FA685D">标签</Tag>
      <Tag background="#E9E9E9" color="#999999">标签</Tag>
      <Tag background="#FA2400" plain>标签</Tag>
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

## Tag

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 标签类型 | `primary` \| `success` \| `danger` \| `warning` | `default` |
| background | 标签颜色 | `string` | `-` |
| color | 文本颜色，优先级高于color属性 | `string` | `white` |
| plain | 是否为空心样式 | `boolean` | `false` |
| round | 是否为圆角样式 | `boolean` | `false` |
| mark | 是否为标记样式 | `boolean` | `false` |
| closeable | 是否为可关闭标签 | `boolean` | `false` |
| closeIcon | 关闭按钮 | `ReactNode` | `null` |
| onClick | 点击事件 | `(e: MouseEvent<HTMLDivElement>) => void` | `-` |
| onClose | 关闭事件 | `(e?: any) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-tag-padding | padding 值 | `0 4px` |
| \--nutui-tag-font-size | 字号 | `12px` |
| \--nutui-tag-border-radius | 圆角 | `4px` |
| \--nutui-tag-height | 高度 | `auto` |
| \--nutui-tag-color | 字色 | `#ffffff` |
| \--nutui-tag-border-width | 边宽 | `1px` |
| \--nutui-tag-background-color | 背景色 | `#000000` |
| \--nutui-tag-primary-background-color | 主色背景色 | `#3460fa` |
| \--nutui-tag-success-background-color | 成功背景色 | `#4fc08d` |
| \--nutui-tag-info-background-color | 信息背景色 | `$brand-info-color` |
| \--nutui-tag-warning-background-color | 警告背景色 | `#f3812e` |
| \--nutui-tag-round-border-radius | round模式下的圆角 | `8px` |
| \--nutui-tag-mark-border-radius | mark模式下的圆角 | `0 12px 12px 0` |