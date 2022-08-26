# Menu

### Intro

The menu list that pops down downwards.

### Install

``` javascript
import { Menu, MenuItem } from '@nutui/nutui-react';
```

### Basic Usage

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  const [options1] = useState([
    { text: 'Default Sort', value: 'a' },
    { text: 'Praise Sort', value: 'b' },
    { text: 'Sales Volume Sort', value: 'c' }
  ])
  return (
    <>
      <div className="demo full">
        <h2>Basic Usage</h2>
        <Menu>
          <MenuItem options={options} value={0} />
          <MenuItem options={options1} value={'a'} />
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### Custom Menu Content

Popup can be closed with toggle method in menu instance.

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  return (
    <>
      <div className="demo full">
        <Menu>
          <MenuItem options={options} value={0} />
          <MenuItem title="筛选">
            <div>Custom content</div>
            <Button>Confirm</Button>
          </MenuItem>
        </Menu>
      </div>
    </>
  )
}
export default App

```

:::

### Two Cols In One Line

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'Product1', value: 1 },
    { text: 'Product2', value: 2 },
    { text: 'Product3', value: 3 },
    { text: 'Product4', value: 4 },
    { text: 'Product5', value: 5 },
    { text: 'Product6', value: 6 },
    { text: 'Product7', value: 7 },
    { text: 'Product8', value: 8 },
    { text: 'Product9', value: 9 },
    { text: 'Product10', value: 10 },
    { text: 'Product11', value: 11 },
    { text: 'Product12', value: 12 },
    { text: 'Product13', value: 13 },
    { text: 'Product14', value: 14 },
    { text: 'Product15', value: 15 },
    { text: 'Product16', value: 16 },
    { text: 'Product17', value: 17 }
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

### Custom Active Color

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  const [options1] = useState([
    { text: 'Default Sort', value: 'a' },
    { text: 'Praise Sort', value: 'b' },
    { text: 'Sales Volume Sort', value: 'c' }
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

### Custom Icons

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  const [options1] = useState([
    { text: 'Default Sort', value: 'a' },
    { text: 'Praise Sort', value: 'b' },
    { text: 'Sales Volume Sort', value: 'c' }
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

### Expand Directions

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  const [options1] = useState([
    { text: 'Default Sort', value: 'a' },
    { text: 'Praise Sort', value: 'b' },
    { text: 'Sales Volume Sort', value: 'c' }
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

### Disable Menu

:::demo

```tsx
import React from 'react';
import { Menu, MenuItem } from '@nutui/nutui-react';

const App = () => {
  const [options] = useState([
    { text: 'All Products', value: 0 },
    { text: 'New Products', value: 1 },
    { text: 'Activity Products', value: 2 }
  ])
  const [options1] = useState([
    { text: 'Default Sort', value: 'a' },
    { text: 'Praise Sort', value: 'b' },
    { text: 'Sales Volume Sort', value: 'c' }
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

| 参数                             | 说明                           | 类型                    | 默认值  |
|----------------------------------|--------------------------------|-------------------------|---------|
| activeColor                     | 选项的选中态图标颜色           | String                  | #F2270C |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单     | Boolean                 | true    |
| scrollFixed           | 滚动后是否固定，可设置固定位置 | Boolean、String、Number | false   |
| lockScroll            | 背景是否锁定                   | Boolean                 | true    |
| titleIcon               | 自定义标题图标                 | String                  | -       |

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