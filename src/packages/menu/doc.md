# Menu 菜单

### 介绍

向下弹出的菜单列表

### 安装

``` javascript
import { Menu, MenuItem } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
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

### 自定义菜单内容

使用实例上的 toggle 方法可以手动关闭弹框。

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <MenuItem options={options} value={0} />
          <MenuItem title="筛选">
            <div>自定义内容</div>
            <Button>确认</Button>
          </MenuItem>
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### 一行两列

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
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

### 自定义选中态颜色

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
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

### 自定义图标

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
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

### 向上展开

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
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

### 禁用菜单

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
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

| 参数                  | 说明                           | 类型                    | 默认值  |
|---------------------|--------------------------------|-------------------------|---------|
| activeColor         | 选项的选中态图标颜色           | String                  | #F2270C |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单     | Boolean                 | true    |
| lockScroll          | 背景是否锁定                   | Boolean                 | true    |
| scrollFixed         | 滚动后是否固定，可设置固定位置                   | Boolean、String、Number                 | true    |
| titleIcon           | 自定义标题图标                 | String                  | -       |

### MenuItem Props

| 参数                          | 说明                                    | 类型    | 默认值           |
|-------------------------------|-----------------------------------------|---------|------------------|
| title                         | 菜单项标题                              | String  | 当前选中项文字   |
| options                       | 选项数组                                | Array   | -                |
| disabled                      | 是否禁用菜单                            | Boolean | false            |
| columns                          | 可以设置一行展示多少列 options          | Number  | 1                |
| optionsIcon          | 自定义选项图标                          | String  | 'Check'          |
| direction            | 菜单展开方向，可选值为up                | String  | 'down'           |
| activeClassName    | 选项选中时自定义标题样式类              | String  | -                |
| inactiveClassName  | 选项非选中时自定义标题样式类            | String  | -                |
| fontClassName       | 自定义icon 字体基础类名                 | string  | `nutui-iconfont` |
| iconClassPrefix          | 自定义icon 类名前缀，用于使用自定义图标 | string  | `nut-icon`       |

### MenuItem Events

| 事件名      | 说明                 | 回调参数     |
|----------|----------------------|--------------|
| onChange | 选择 option 之后触发 | 选择的 value |