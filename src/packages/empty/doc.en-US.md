#  Empty

### Introduce

Placeholder prompt when empty

### Install

```javascript
// react
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
      <Empty image="empty" description="No Content" />
      <Empty image="error" description="Load Failed" />
      <Empty image="network" description="No Network" />
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
    <Empty image="error" description="Failed to load">
      <div style={{marginTop: "10px"}}>
        <Button icon="refresh" type="primary">重试</Button>
      </div>
    </Empty>
  );
};
export default App;
```
:::
## API

### Props

| Props    | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| image         | Image type, the optional value is `error` `network` `empty`, which supports incoming image URLs             | ReactNode       |
| imageSize        | Image size, the unit of Number type is px                       | Number \| String | -       |
| description         | Description text below the image | ReactNode | No Data                |




## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-empty-padding | ` 32px 0` |
| --nutui-empty-image-size | ` 170px` |
| --nutui-empty-description-margin-top | `  4px` |
| --nutui-empty-description-color | `  #666666` |
| --nutui-empty-description-font-size | `  14px` |
| --nutui-empty-description-line-height | `  20px` |
| --nutui-empty-description-padding | `  0 40px` |
