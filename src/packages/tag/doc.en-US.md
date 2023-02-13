# Tag

### introduce

Label for labeling and classification.

### Install

``` javascript
// react
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
  return (
    <>
      <Tag  closeable onClose={()=>alert('Tag closed')}  type="primary">标签</Tag>
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
      <Tag color="#E9E9E9" textColor="#999999">Label</Tag>
      <Tag color="#FA2400" plain>Label</Tag>
    </>
  )
}
export default App;
```

:::

### Click event

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag type='primary' onClick={()=>alert('Tag clicked')}>Tag</Tag>
    </>
  )
}
export default App;
```

:::

### Display control

:::demo

```tsx
import React, {useState} from "react";
import { Tag,Button } from '@nutui/nutui-react';

const App = () => {
  const  [isShow,setIsShow] = useState(true) // Whether to display a tag component
  return (
    <>
    {
      isShow? (
        <Tag type='primary' onClick={()=>alert('Tag clicked')}>Label</Tag>
      ):null
    }  
    <Button type='default' size="small" onClick={()=>{setIsShow(false)}} >delete</Button>
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
| texColor | Text color, priority is higher than the color attribute  | String  | `white`   |
| plain      | Whether it is hollow                               | Boolean | `false`   |
| round      | Whether it is a rounded style                      | Boolean | `false`   |
| mark       | Whether it is a tag style                          | Boolean | `false`   |
| closeable  | Whether it can be closed label                     | Boolean | `false`   |
| iconSize`v1.4.7` | the size of closed label  | string | number | ` 12px`|

### Event

| Event name | illustrate  | Callback parameter |
|----------|----------|----------|
| onClick    | Click event | event    |
| onClose    | Close event | event    |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-tag-padding | ` 0 4px`|
| --nutui-tag-font-size | ` 12px` |
| --nutui-tag-default-border-radius | `  4px` |
| --nutui-tag-round-border-radius | ` 8px` |
| --nutui-tag-default-background-color | `  #000000` |
| --nutui-tag-primary-background-color | `  #3460fa` |
| --nutui-tag-success-background-color | `  #4fc08d` |
| --nutui-tag-danger-background-color-plain | `  #df3526` |
| --nutui-tag-warning-background-color | `  #f3812e` |
| --nutui-tag-default-color | ` #ffffff` |
| --nutui-tag-border-width | ` 1px` |
| --nutui-tag-height | ` auto` |
