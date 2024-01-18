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
      <Tag type="info">Label</Tag>
      <Tag type="success">Label</Tag>
      <Tag type="danger">Label</Tag>
      <Tag type="warning">Label</Tag>
    </>
  )
}
export default App;
```

:::

### style

:::demo

```tsx
import React from "react";
import { Failure } from '@nutui/icons-react';
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag plain>Label</Tag>
      <Tag round type='primary'>Label</Tag>
      <Tag mark type='primary'>Label</Tag>
      <Tag closeable
           onClose={() => alert('Tag closed')}
           type='primary'>Label</Tag>
      <Tag closeable
           closeIcon={<Failure width={8} height={8} />}
           onClose={() => alert('Tag closed')}
           type='primary'>Label</Tag>
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

### image-text

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Tag type="info">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            height="10"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAMAAAAgsQpJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwAdEr+crtuABfTnao8pUMpddzJFO9SD9HUAAAFqSURBVDjLjVVbAoMgDBN5CfhC5P5XXYtuDilivyaEpg0p67oiJufnvmvF4FTEkOEZ52z8xrLVYb1EhJEjT1BXpV1gVzmsbxoN/PYVoIC9cTg/GJ6aSdycsw3Ab8juIYXIKlY0+V4kWGO0BNDfEgI5aDWVQJBmbS9BqPK4BhVeAR0JhKZDCRQFbiX0xbWN6EXd5WWWUJJTJvBEkbCmCpcoQh9G1AjNmIHyzpKvMrCaLuXB5awgtI8aiMvWN3K0514zuJmycxWLo2yWnR9jpK7ljM38NtHucqiO4WVe/ohLFjoul/bsxQ2Ev4yi/pysUKO8auR0TqbxOcm6jsta1Lmn1ySqXEfobWQZ7HhsrP535CZNgoprMdFEPt95ep/eQBP+LtUIuvKQuMLXdVGyqhZBnS0y8yQZFmAPgCwMW+SMeE2MGslyQjXOLm/9A8yI8Y0KT1MtiLa6Eei5NLsvApTc3iDTePauRa1hOD/vACHPGH6amQAAAABJRU5ErkJggg=="
            alt=""
          />
          {translated.tag}
        </div>
      </Tag>
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
| type | Label type | `primary` \| `default` \| `info` \| `success` \| `danger` \| `warning` | `default` |
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
| \--nutui-tag-padding | padding | `0 2px`| 
| \--nutui-tag-font-size | font size | `10px` | 
| \--nutui-tag-border-radius | border radius | `2px` | 
| \--nutui-tag-height | height | `14px` | 
| \--nutui-tag-color | color | `#ffffff` | 
| \--nutui-tag-border-width | border width | `1px` | 
| \--nutui-tag-background-color | background color | `$color-title` | 
| \--nutui-tag-primary-background-color |primary background color | `$color-primary-gradient-1` | 
| \--nutui-tag-success-background-color | success background color | `#4fc08d` | 
| \--nutui-tag-info-background-color | info background color | `$color-info` |
| \--nutui-tag-warning-background-color | warn background color | `#f3812e` | 
| \--nutui-tag-danger-background-color | danger background color | `$color-primary` |
| \--nutui-tag-round-border-radius | round border radius | `8px` | 
| \--nutui-tag-mark-border-radius | mark border radius | `0 8px 8px 0` |
