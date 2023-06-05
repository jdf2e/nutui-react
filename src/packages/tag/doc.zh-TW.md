# Tag 標簽

## 介紹

用於標記和分類的標簽。

## 安裝

``` javascript
// react
import { Tag } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag type="primary">標簽</Tag>
      <Tag type="success">標簽</Tag>
      <Tag type="danger">標簽</Tag>
      <Tag type="warning">標簽</Tag>
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
      <Tag plain>標簽</Tag>
    </>
  )
}
export default App;
```

:::

### 圓角樣式

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag round type="primary">標簽</Tag>
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
      <Tag mark type="primary">標簽</Tag>
    </>
  )
}
export default App;
```

:::

### 可關閉標簽

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag  closeable onClose={()=>alert('Tag closed')}  type="primary">標簽</Tag>
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
      <Tag background="#FA685D">標簽</Tag>
      <Tag background="#E9E9E9" color="#999999">標簽</Tag>
      <Tag background="#FA2400" plain>標簽</Tag>
    </>
  )
}
export default App;
```

:::


### 點選事件

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag type='primary' onClick={()=>alert('Tag clicked')}>標簽</Tag>
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
        <Tag type='primary' onClick={()=>alert('Tag clicked')}>標簽</Tag>
      ):null
    }  
    <Button type='default' size="small" onClick={()=>{setIsShow(false)}} >點選刪除Tag</Button>
    </>
  )
  
}
export default App;
```

:::
## Tag

### Props

| 屬性 | 說明| 類型               | 預設值       |
|-------|-------------|------------|-----------|
| type               | 標簽類型，可選值為primary success danger warning | `string`         | `default` |
| background | 標簽顏色                                    | `string`         |  `-` |
| color           | 文本顏色，優先級高於color屬性                       | `string`         | `white`   |
| plain              | 是否為空心樣式                                 | `boolean`        | `false`   |
| round              | 是否為圓角樣式                                 | `boolean`        | `false`   |
| mark               | 是否為標記樣式                                 | `boolean`        | `false`   |
| closeable          | 是否為可關閉標簽                                | `boolean` | `false`   |
| closeIcon  | 關閉按鈕                                    | `ReactNode` | `null`    | `-` |
| onClick    | 點選事件 | `(e: MouseEvent) => void`    | `-` |
| onClose    | 關閉事件 | `(e?: any) => void`   | `-` |

## 主題定制

### 樣式變數

組件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 預設值 |
| --- | --- | --- |
| --nutui-tag-padding | padding 值 | ` 0 4px`|
| --nutui-tag-font-size | 字號 | ` 12px` |
| --nutui-tag-border-radius | 圓角 | `4px` |
| --nutui-tag-height | 高度 |` auto` |
| --nutui-tag-color | 字色 | ` #ffffff` |
| --nutui-tag-border-width | 邊寬 | ` 1px` |
| --nutui-tag-background-color | 背景色 | `  #000000` |
| --nutui-tag-primary-background-color | 主色背景色 | `  #3460fa` |
| --nutui-tag-success-background-color | 成功背景色 | `  #4fc08d` |
| --nutui-tag-warning-background-color | 警告背景色 | `  #f3812e` |
| --nutui-tag-round-border-radius | round模式下的圓角 | ` 8px` |
| --nutui-tag-mark-border-radius | mark模式下的圓角 | ` 0 12px 12px 0` |

