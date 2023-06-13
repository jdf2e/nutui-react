# Tag

## Intro

Label for labeling and classification.

## Install

```tsx
import { Tag } from '@nutui/nutui-react';

```

## Demo

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
      <Tag background="#FA685D">Label</Tag>
      <Tag background="#E9E9E9" color="#999999">Label</Tag>
      <Tag background="#FA2400" plain>Label</Tag>
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

## Tag

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Label type | `primary` \| `success` \| `danger` \| `warning` | `default` |
| background | Label background | `string` | `-` |
| color | Text color, priority is higher than the color attribute | `string` | `white` |
| plain | Whether it is hollow | `boolean` | `false` |
| round | Whether it is a rounded style | `boolean` | `false` |
| mark | Whether it is a tag style | `boolean` | `false` |
| closeable | Whether it can be closed label | `boolean` | `false` |
| closeIcon | close icon | `ReactNode` | `null` |
| onClick | Click event | `(e: MouseEvent) => void` | `-` |
| onClose | Close event | `(e?: any) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default | 
| --- | --- | --- | 
| --nutui-tag-padding | padding | `0 4px`| 
| --nutui-tag-font-size | font size | `12px` | 
| --nutui-tag-border-radius | border radius | `4px` | 
| --nutui-tag-height | height | `auto` | | --nutui-tag-color | color | `#ffffff` | 
| --nutui-tag-border-width | border width | `1px` | | --nutui-tag-background-color | background color | `#000000` | 
| --nutui-tag-primary-background-color |primary background color | `#3460fa` | 
| --nutui-tag-success-background-color | success background color | `#4fc08d` | 
| --nutui-tag-warning-background-color | warn background color | `#f3812e` | 
| --nutui-tag-round-border-radius | round border radius | `8px` | 
| --nutui-tag-mark-border-radius | mark border radius | `0 12px 12px 0` |