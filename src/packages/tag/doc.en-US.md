# Tag

### introduce

Label for labeling and classification.

### Install

``` javascript
import { Tag } from '@nutui/nutui-react';
```

## Code instance

### Basic usage

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag type="primary">Label</Tag>
      <Tag type="success">Label</Tag>
      <Tag type="danger">Label</Tag>
      <Tag type="warning">Label</Tag>
    </>
  )
}
export default App;
```

:::

### Hollow style

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag plain>Label</Tag>
    </>
  )
}
export default App;
```

:::

### Rounded style

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag round type="primary">Label</Tag>
    </>
  )
}
export default App;
```

:::

### Label style

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag mark type="primary">Label</Tag>
    </>
  )
}
export default App;
```

:::

### Can close label

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  const [isShow, setIsShow] = useState(true)
  const close = () => {
    setIsShow(false)
  }
  return (
    <>
      <Tag isShow={isShow} closeable onClick={close} type="primary">Label</Tag>
    </>
  )
}
export default App;
```

:::

### Custom color

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag color="#FA685D">Label</Tag>
      <Tag color="#E9E9E9" text-color="#999999">Label</Tag>
      <Tag color="#FA2400" plain>Label</Tag>
    </>
  )
}
export default App;
```

:::

## API

### Props

| Field       | illustrate                                      | type    | Defaults    |
|------------|--------------------------------------------------|---------|-----------|
| type       | Label type, the optional value is primary success danger warning | String  | `default` |
| color      | Label color                                         | String  | -         |
| text-color | Text color, priority is higher than the color attribute  | String  | `white`   |
| plain      | Whether it is hollow                               | Boolean | `false`   |
| round      | Whether it is a rounded style                      | Boolean | `false`   |
| mark       | Whether it is a tag style                          | Boolean | `false`   |
| closeable  | Whether it can be closed label                     | Boolean | `false`   |

### Event

| Event name | illustrate  | Callback parameter |
|----------|----------|----------|
| close    | Close event | event    |

