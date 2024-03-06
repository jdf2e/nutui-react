# Empty

## Intro

Placeholder prompt when empty

## Install

```tsx
import { Empty } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Empty
        title="title"
        description="No Data"
        actions={[
          { text: "Button" },
          { text: "Button" },
        ]}
      />
      <Empty
        description="No Data"
        actions={[{ text: "Button" }]}
        style={{ marginTop: '10px' }}
      />
      <Empty description="No Data" />
    </>
  );
};
export default App;
```

:::

### Size is small

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty description="No Data" size="small" />
  );
};
export default App;
```

:::

### Custom content size

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty description="No Data" imageSize={100} />
  );
};
export default App;
```

:::

### Picture type, 3 built-in

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <div className="show">
      <Empty status="empty" description="No Content" />
      <Empty status="error" description="Load Failed" />
      <Empty status="network" description="No Network" />
    </div>
  );
};
export default App;
```

:::

### Custom image

> If you are inner user in JD, you can get the image links from us for default types.

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty
      description="Store is closed" 
      image={<img src="https://storage.360buyimg.com/imgtools/44f3cc10c4-0cf9a7e0-c0ac-11ee-8375-193101bb1a46.png" alt=""/>}
     />
  );
};
export default App;
```

:::

### Bottom content

:::demo

```tsx
import  React from "react";
import { Empty, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty status="error" description="Failed to load">
      <div style={{marginTop: "10px"}}>
        <Button icon="refresh" type="primary" size="small">重试</Button>
      </div>
    </Empty>
  );
};
export default App;
```

:::

## Empty

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| image | Image type, supports incoming image URLs | `ReactNode` | `-` |
| imageSize | Image size, the unit of number type is px | `number` \| `string` | `-` |
| title | Title below the image | `ReactNode` | `-` |
| description | Description below the image | `ReactNode` | `-` |
| size | Size of component,used by full screen or half screen | `small` \| `base` | `base` |
| status | The Default error type | `empty` \| `error` \| `network` | `empty` |
| actions | Actions of operation | `Array` | `[]` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-empty-padding | The padding value of the Empty component image | `32px 40px` |
| \--nutui-empty-image-size | The size of the Empty component image | `160px` |
| \--nutui-empty-image-small-size | The size of the Empty component image when the size is small | `120px` |
| \--nutui-empty-title-margin-top | Empty component image title margin-top value | `0px` |
| \--nutui-empty-title-margin-top | Empty component image title margin-top value | `8px` |
| \--nutui-empty-title-line-height | Empty component image title row height | `$font-size-base` |
| \--nutui-empty-description-margin-top | Empty component image description margin-top value | `4px` |
| \--nutui-empty-description-line-height | Empty component image description row height | `1.2` |