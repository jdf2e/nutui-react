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
          <MenuItem options={options1} value="a" />
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

| 参数                  | 说明                           | 类型                    | 默认值  |
|---------------------|--------------------------------|-------------------------|---------|
| activeColor         | Active color of title and option           | String                  | #F2270C |
| closeOnClickOverlay | Whether to close when overlay is clicked     | Boolean                 | true    |
| lockScroll          | Whether the background is locked                   | Boolean                 | true    |
| scrollFixed         | Whether to fixed when window is scrolled, fixed position can be set                   | Boolean、String、Number                 | true    |
| titleIcon           | Custome title icon                 | String                  | -       |

### MenuItem Props

| 参数                          | 说明                                    | 类型    | 默认值           |
|-------------------------------|-----------------------------------------|---------|------------------|
| title                         | Item title                              | String  | 当前选中项文字   |
| options                       | Options                                | Array   | -                |
| disabled                      | Whether to disable dropdown item                            | Boolean | false            |
| columns                          | Display how many options in one line          | Number  | 1                |
| optionsIcon          | Custome option icon                          | String  | 'Check'          |
| direction            | Expand direction, can be set to up                | String  | 'down'           |
| activeClassName    | Active custome title class              | String  | -                |
| inactiveClassName  | Inactive custome title class            | String  | -                |
| fontClassName       | Custom icon font base class name                 | string  | `nutui-iconfont` |
| iconClassPrefix          | Custom icon class name prefix for using custom icons | string  | `nut-icon`       |

### MenuItem Events

| Event      | Description                 | Arguments     |
|----------|----------------------|--------------|
| onChange | Emitted select option changed | Selected value |