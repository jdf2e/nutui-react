#  Image

### Intro

Enhanced img tag with multiple image fill modes, support for loading hint, loading failure hint.

### Install

``` javascript
// react
import { Image } from '@nutui/nutui-react';
```

### Basic Usage

The basic usage is the same as that of the native IMG tag. You can set the native attributes such as SRC, width, height, and Alt.

:::demo
```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';

const App = () => {
  const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image src={src} width="100" height="100" />
  </>
}
export default App;

```
:::

### Object Fill

The `fit` attribute is used to set the image filling mode, which is equivalent to the original `Object-fit` attribute.

:::demo
```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';

const App = () => {
  const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image
      src={src}
      width="100"
      height="100"
      fit="contain"
    />
  </>
}
export default App;
```
:::

### Object Position

The position property can be used to set the position of the picture, which is equivalent to the original Object-position property when combined with the FIT property.

:::demo
```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';

const App = () => {
  const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image
      src={src}
      width="100"
      height="100"
      fit="contain"
      position="left"
    />
  </>
}
export default App;
```
:::

### Round

The round attribute allows you to set the image to be round. Note that if the image is not contained and fit is contained or scale-down, a full circle cannot be contained.

:::demo
```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';

const App = () => {
  const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image
      src={src}
      width="100"
      height="100"
      round
    />
  </>
}
export default App;
```
:::

### Loading

The Image component provides a default loading prompt and supports custom content through `slotLoading`.

:::demo
```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';
import { Loading } from '@nutui/icons-react';

const App = () => {
  const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image
      width="100"
      height="100"
      loading={<Loading className="nut-icon-loading" />}
    />
  </>
}
export default App;
```
:::

### Error

The Image component provides a default loading failure warning and supports custom content through `slotError`.

:::demo
```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';
import { CircleClose } from '@nutui/icons-react';

const App = () => {
  return <>
    <Image
      src="https://x"
      width="100"
      height="100"
      error={<CircleClose />}
    />
  </>
}
export default App;
```
:::

### Image LazyLoad

The Image component provides lazy loading of images, which can be realized by configuring `isLazy`, which is not enabled by default.

:::demo
```tsx
import React from "react";
import { Image,Cell } from '@nutui/nutui-react';

const App = () => {
  const src =
      '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  const imageData = [1, 2, 3, 4, 5, 6]
  const placeholderImg = 'https://img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png'
  const style = `
  .lazy-box{
    width:100%
  }
  .lazy-box .nut-image{
    margin-bottom: 10px;
  }
`
  return <>
    <style>{style}</style>
    <Cell>
      <div className="lazy-box">
        {imageData.map((item) => {
          return (
            <Image
              key={item}
              height="150"
              src={src}
              lazy
              loading={placeholderImg}
              error={placeholderImg}
            />
          )
        })}
      </div>
    </Cell>
  </>
}
export default App;
```
:::

## API

### Props

| Property | Description | Type | Default |
|---------------------|--------------------------- -------|-------|------------------|
| src | image link | `string` | - |
| fit | image fill mode, equivalent to the native object-fit property | `ImageFit` | `fill` |
| position | Image position, equivalent to the original object-position attribute | `ImagePosition` | `center` |
| alt | alternative text | `string` | - |
| width | width, default unit `px` | `string` | - |
| height | height, default unit `px` | `string` | - |
| radius | rounded corner size | `string \| number` | - |
| error | Whether to display image loading failure | `boolean \| ReactNode` | `true` |
| loading | Whether to show loading images | `boolean \| ReactNode` | `true` |
| lazy | Whether to lazy load images | `boolean` | `false` |
| onClick | Triggered when an image is clicked | `(e: MouseEvent) => void` | - |
| onLoad | Triggered after the image is loaded | `() => void` | - |
| onError | Triggered when the image fails to load | `() => void` | - |


| Property         | Description                  |
|--------------|----------------------------------|
| contain         | Keep aspect ratio, fully display the long side of the image    |
| cover         | Keep aspect ratio, fully display the short side of the image, cutting the long side     |
| fill    | Stretch and resize image to fill the content box  |
| none    | Not resize image  |
| scale-down    | Take the smaller of none or contain  |

### ImagePosition 

| Property         | Description                  |
|--------------|----------------------------------|
| center         | Align Center    |
| top         | Align Top     |
| right    | Align Right  |
| bottom    | Align Bottom  |
| left   | Align Left  |


