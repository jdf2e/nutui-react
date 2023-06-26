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
    <Empty description="No Data" />
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

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty
      description="No Coupon" 
      image={<img src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png" alt=""/>}
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
        <Button icon="refresh" type="primary">重试</Button>
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
| description | Description text below the image | `ReactNode` | `-` |
| status | The Default error type | `empty` \| `error` \| `network` | `empty` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-empty-padding | The padding value of the Empty component image | `32px 0` |
| \--nutui-empty-image-size | The size of the Empty component image | `170px` |
| \--nutui-empty-description-margin-top | Empty component image description margin-top value | `4px` |
| \--nutui-empty-description-color | Empty component image description color value | `#666666` |
| \--nutui-empty-description-font-size | Empty component image description font-size value size | `14px` |
| \--nutui-empty-description-line-height | Empty component image description row height | `20px` |
| \--nutui-empty-description-padding | Empty component picture description padding value | `0 40px` |