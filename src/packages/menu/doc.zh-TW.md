# Menu 菜單

### 介紹

向下彈出的菜單列表

### 安裝

``` javascript
import { Menu, MenuItem } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value='a' />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 自定義菜單內容

使用實例上的 toggle 方法可以手動關閉彈框。

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem, Button } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <MenuItem options={options} value={0} />
          <MenuItem title="篩選">
            <div>自定義內容</div>
            <Button>確認</Button>
          </MenuItem>
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 一行兩列

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  
  return (
    <>
      <div className="demo full">
        <Menu>
          <MenuItem options={options} value={0} columns={2} />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 自定義選中態顏色

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu activeColor="green">
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 自定義圖標

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu titleIcon="joy-smile">
          <MenuItem options={options} value={0} optionsIcon="success" />
          <MenuItem options={options1} value="a" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 向上展開

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <MenuItem options={options} value={0} direction="up" />
          <MenuItem options={options1} value="a" direction="up" />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 禁用菜單

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活動商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默認排序', value: 'a' },
    { text: '好評排序', value: 'b' },
    { text: '銷量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <MenuItem options={options} value={0} disabled />
          <MenuItem options={options1} value="a" disabled />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

## API

### Menu Props

| 參數                  | 說明                           | 類型                    | 默認值  |
|---------------------|--------------------------------|-------------------------|---------|
| activeColor         | 選項的選中態圖標顏色           | String                  | #F2270C |
| closeOnClickOverlay | 是否在點擊遮罩層後關閉菜單     | Boolean                 | true    |
| lockScroll          | 背景是否鎖定                   | Boolean                 | true    |
| scrollFixed         | 滾動後是否固定，可設置固定位置                   | Boolean、String、Number                 | true    |
| titleIcon           | 自定義標題圖標                 | String                  | -       |

### MenuItem Props

| 參數                          | 說明                                    | 類型    | 默認值           |
|-------------------------------|-----------------------------------------|---------|------------------|
| title                         | 菜單項標題                              | String  | 當前選中項文字   |
| options                       | 選項數組                                | Array   | -                |
| disabled                      | 是否禁用菜單                            | Boolean | false            |
| columns                          | 可以設置一行展示多少列 options          | Number  | 1                |
| optionsIcon          | 自定義選項圖標                          | String  | 'Check'          |
| direction            | 菜單展開方向，可選值為up                | String  | 'down'           |
| activeClassName    | 選項選中時自定義標題樣式類              | String  | -                |
| inactiveClassName  | 選項非選中時自定義標題樣式類            | String  | -                |
| fontClassName       | 自定義icon 字體基礎類名                 | string  | `nutui-iconfont` |
| iconClassPrefix          | 自定義icon 類名前綴，用於使用自定義圖標 | string  | `nut-icon`       |

### MenuItem Events

| 事件名      | 說明                 | 回調參數     |
|----------|----------------------|--------------|
| onChange | 選擇 option 之後觸發 | 選擇的 value |