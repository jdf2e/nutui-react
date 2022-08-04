# Tag 標籤

### 介紹

用於標記和分類的標籤。

### 安裝

``` javascript
import { Tag } from '@nutui/nutui-react';
```

## 代碼實例

### 基礎用法

```tsx
<Tag type="primary">標籤</Tag>
<Tag type="success">標籤</Tag>
<Tag type="danger">標籤</Tag>
<Tag type="warning">標籤</Tag>
```

### 空心樣式

```tsx
<Tag plain>標籤</Tag>
```

### 圓角樣式

```tsx
<Tag round type="primary">標籤</Tag>
```

### 標記樣式

```tsx
<Tag mark type="primary">標籤</Tag>
```

### 可关闭標籤

```tsx
<Tag isShow={true} closeable  type="primary">標籤</Tag>
```

### 自定義顏色

```tsx
<Tag color="#FA685D">標籤</Tag>
<Tag color="#E9E9E9" textColor="#999999">標籤</Tag>
<Tag color="#FA2400" plain>標籤</Tag>
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