# Collapse 摺疊面闆

## 介紹

將內容放置在多個摺疊面闆中，點擊面闆標題可展開或收縮內容。

## 安裝

```tsx
import { Collapse } from 'nutui-react'
```

## 代碼演示

### 基礎用法

:::demo

```jsx
import  React from "react";
import { Collapse } from '@nutui/nutui-react';
import { DownArrow } from '@nutui/icons-react';

const App = () => {
  return (
    <>
    <Collapse defaultActiveName={['1', '2']} expandIcon={<DownArrow />}>
      <Collapse.Item title="標題1" name="1">
        京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
      </Collapse.Item>
      <Collapse.Item title="標題2" name="2">
        京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
      </Collapse.Item>
      <Collapse.Item title="標題3" name="3" disabled>
        京東“廠直優品計劃”首推“政府優品館”
      </Collapse.Item>
    </Collapse>
    </>
  );
};
export default App;
```

:::

### 受控方式

:::demo

```jsx
import React, {useState} from "react";
import { Collapse } from '@nutui/nutui-react';
import { DownArrow } from '@nutui/icons-react';

const App = () => {
  const [activeName, setActiveName] = useState(['1', '2'])
  const onChange = (activeName, name, status) => {
    setActiveName(activeName)
  }
  return (
    <Collapse activeName={activeName} onChange={onChange}>
      <Collapse.Item title="標題1" name="1">
        京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
      </Collapse.Item>
      <Collapse.Item title="標題2" name="2">
        京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
      </Collapse.Item>
      <Collapse.Item title="標題3" name="3">
        京東“廠直優品計劃”首推“政府優品館”
      </Collapse.Item>
    </Collapse>
  );
};
export default App;
```

:::

### 無icon樣式，綁定點擊事件

:::demo

```tsx
import React, { useState } from 'react'
import { Collapse} from '@nutui/nutui-react'
import { DownArrow } from '@nutui/icons-react'

const App = () => {
  const handleChange = (activeName, name, status) => {
    console.log(activeName, name, status)
  }
  return (  
  <Collapse defaultActiveName={['1', '2']} onChange={handleChange}>
    <Collapse.Item title="標題1" name="1">
      京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
    </Collapse.Item>
    <Collapse.Item title="標題2" name="2">
      京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
    </Collapse.Item>
    <Collapse.Item title="標題3" name="3">
      京東“廠直優品計劃”首推“政府優品館”
    </Collapse.Item>
  </Collapse>
  )
}
export default App;
```

:::

### 手風琴模式

:::demo

```tsx
import React from 'react'
import { Collapse} from '@nutui/nutui-react'
import { DownArrow } from '@nutui/icons-react'

const App = () => {
  return (  
  <Collapse defaultActiveName={['1']} accordion expandIcon={<DownArrow />}>
    <Collapse.Item title="標題1" name="1" extra="文本內容">
      京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
    </Collapse.Item>
    <Collapse.Item title="標題2" name="2">
      京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
    </Collapse.Item>
    <Collapse.Item title="標題3" name="3">
      京東“廠直優品計劃”首推“政府優品館”
    </Collapse.Item>
  </Collapse>
  )
}
export default App;
```

:::

### 自定義摺疊圖標

:::demo

```jsx
import React from 'react'
import { Collapse} from '@nutui/nutui-react'
import { DownArrow, Checked, HeartFill } from '@nutui/icons-react'

const App = () => {
  return (  
  <Collapse defaultActiveName={['1']} accordion expandIcon={<DownArrow />} rotate={90}>
    <Collapse.Item title="標題1" name="1" expandIcon={<Checked />}>
      京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
    </Collapse.Item>
    <Collapse.Item title="標題2" name="2" expandIcon={<HeartFill />}>
      京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
    </Collapse.Item>
    <Collapse.Item title="標題3" name="3">
      京東“廠直優品計劃”首推“政府優品館”
    </Collapse.Item>
  </Collapse>
  )
}
export default App;
```

:::

### 自定義 title 與 extra

:::demo

```jsx
import React from 'react'
import { Collapse, Button} from '@nutui/nutui-react'
import { DownArrow, Checked, HeartFill } from '@nutui/icons-react'

const App = () => {
  return (  
    <Collapse defaultActiveName={['1']} accordion expandIcon={<DownArrow />}>
      <Collapse.Item
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checked />標題1
          </div>
        }
        name="1"
      >
        京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
      </Collapse.Item>
      <Collapse.Item
        title="標題2"
        name="2"
        extra={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            標題2<HeartFill color="red" />
          </div>
        }
      >
        京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府
      </Collapse.Item>
      <Collapse.Item title="標題3" name="3">
        京東“廠直優品計劃”首推“政府優品館”
      </Collapse.Item>
    </Collapse>
  )
}
export default App;
```

:::

### 動態改變數據

:::demo

```jsx
import React, { useState } from 'react'
import { Collapse, Button } from '@nutui/nutui-react'

const oldDate = [
  {
    title: '標題1',
    name: '1',
    data: '京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府',
  },
  {
    title: '標題12',
    name: '2',
    data: '京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府',
  },
  {
    title: '標題13',
    name: '3',
    data: '京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府',
  },
]
const newDate = [
  {
    title: '標題21',
    name: '1',
    data: '京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府',
  },
  {
    title: '標題22',
    name: '2',
    data: '京東“廠直優品計劃”首推“政府優品館” 3年覆蓋80%鎮級政府',
  },
]

const App = () => {
  const [domData, setDomData] = useState(oldDate)
  const changeNewData = () => {
    setDomData(newDate)
  }
  const changeOldData = () => {
    setDomData(oldDate)
  }
  return (
    <>
      <Collapse defaultActiveName="2" accordion>
        {domData.map((item, index) => {
          return (
            <Collapse.Item title={item.title} name={item.name} key={index}>
              {item.data}
            </Collapse.Item>
          )
        })}
      </Collapse>
      <Button type="primary" size="small" onClick={() => changeNewData()}>
        改變數據
      </Button>
      <Button type="info" size="small" onClick={() => changeOldData()}>
        還原數據
      </Button>
    </>
  )
}
  export default App;
```

:::

## Collapse

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultActiveName | 默認展開面闆的 name，非受控 | `Array<string>` \| `string`  | `-` |
| activeName | 當前展開面闆的 name，受控 | `Array<string>` \| `string`  | `-` |
| accordion | 是否開啟手風琴模式 | `boolean` | `false` |
| rotate | 點擊摺疊和展開的旋轉角度,在自定義圖標模式下生效 | `string` \| `number`  | `180` |
| expandIcon | 自定義展開圖標 | `ReactNode` | `-` |

## Collapse.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| name | 唯一標識符，必填 | `string` | `-` |
| title | 標題欄左側內容 | `ReactNode` | `-` |
| disabled | 標題欄是否禁用 | `boolean` | `false` |
| extra | 標題欄副標題 | `ReactNode` | `-` |
| rotate | 點擊摺疊和展開的旋轉角度,在自定義圖標模式下生效 | `string` \| `number`  | `180` |
| expandIcon | 自定義展開圖標 | `ReactNode` | `-` |
| onChange | 切換面闆時觸發 | `(activeName, name, status) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-collapse-item-padding | 內邊距 | `13px 36px 13px 26px` |
| \--nutui-collapse-item-font-size | 字體大小 | `$font-size-2` |
| \--nutui-collapse-item-line-height | 行高 | `24px` |
| \--nutui-collapse-item-color | 字體顏色 | `#666666` |
| \--nutui-collapse-item-disabled-color | 禁用顏色 | `$color-disabled` |
| \--nutui-collapse-item-extra-color | Extra 字體顏色 | `#666666` |
| \--nutui-collapse-wrapper-content-background-color | 背景顏色 | `$white` |
| \--nutui-collapse-wrapper-content-color | 內容字體顏色 | `#666666` |
| \--nutui-collapse-wrapper-content-font-size | 內容字體大小 | `$font-size-2` |
| \--nutui-collapse-wrapper-content-line-height | 內容行高 | `1.5` |
| \--nutui-collapse-wrapper-content-padding | 內容內邊距 | `12px 26px` |