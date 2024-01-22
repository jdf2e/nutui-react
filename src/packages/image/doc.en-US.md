# Image

## Intro

Enhanced img tag with multiple image fill modes, support for loading hint, loading failure hint.

## Install

```tsx
import { Image } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

The basic usage is the same as that of the native IMG tag. You can set the native attributes such as SRC, width, height, and Alt.

:::demo

```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';

const App = () => {
  const src = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return <>
    <Image
      src={src}
      onClick={() => {
        console.log('click image')
      }}
    />
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
import { Image, Row, Col } from '@nutui/nutui-react';

const App = () => {
  const fits = ['contain', 'cover', 'fill', 'none', 'scale-down']
  const src = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const imageText = {
    marginTop: 5,
    textAlign: 'center',
    color: '#999'
  }
  return <>
    <Row gutter={10} type="flex" wrap="wrap">
      {fits.map((i) => {
        return (
          <Col span="8" key={i}>
            <Image src={src} width="80" height="80" fit={i} />
            <div style={imageText}>{i}</div>
          </Col>
        )
      })}
    </Row>
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
import { Image, Row, Col } from '@nutui/nutui-react';

const App = () => {
  const position1 = ['left', 'center', 'right']
  const position2 = ['top', 'center', 'bottom']
  const src = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const imageText = {
    marginTop: 5,
    textAlign: 'center',
    color: '#999'
  }
  return <>
    <Row gutter={10} type="flex" wrap="wrap">
      {position2.map((i) => {
        return (
          <Col span="8" key={i}>
            <Image
              src={src}
              width="80"
              height="80"
              fit="contain"
              position={i}
            />
            <div style={imageText}>contain</div>
            <div style={imageText}>{i}</div>
          </Col>
        )
      })}
      {position1.map((i) => {
        return (
          <Col span="8" key={i}>
            <Image
              src={src}
              width="80"
              height="80"
              fit="cover"
              position={i}
            />
            <div style={imageText}>cover</div>
            <div style={imageText}>{i}</div>
          </Col>
        )
      })}
    </Row>
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
import { Image, Row, Col } from '@nutui/nutui-react';

const App = () => {
  const src = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const imageText = {
    marginTop: 5,
    textAlign: 'center',
    color: '#999'
  }
  return <>
    <Row gutter={10}>
      <Col span="8">
        <Image
          src={src}
          width="100"
          height="100"
          fit="contain"
          radius="50%"
        />
        <div style={imageText}>contain</div>
      </Col>
      <Col span="8">
        <Image
          src={src}
          width="100"
          height="100"
          fit="cover"
          radius="50%"
        />
        <div style={imageText}>cover</div>
      </Col>
      <Col span="8">
        <Image
          src={src}
          width="100"
          height="100"
          fit="cover"
          radius="10"
        />
        <div style={imageText}>cover</div>
      </Col>
    </Row>
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
import { Image, Row, Col } from '@nutui/nutui-react';
import { Loading } from '@nutui/icons-react';

const App = () => {
  const src = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const imageText = {
    marginTop: 5,
    textAlign: 'center',
    color: '#999'
  }
  return <>
    <Row gutter={10}>
      <Col span="8">
        <Image
          width="100"
          height="100"
          lazy
          onLoad={() => {
            console.log('image onload')
          }}
        />
        <div style={imageText}>Default</div>
      </Col>
      <Col span="8">
        <Image width="100" height="100" lazy loading={<Loading />} />
        <div style={imageText}>Custom</div>
      </Col>
    </Row>
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
import { Image, Row, Col } from '@nutui/nutui-react';
import { Failure } from '@nutui/icons-react';

const App = () => {
  const imageText = {
    marginTop: 5,
    textAlign: 'center',
    color: '#999'
  }
  return <>
    <Row gutter={10}>
      <Col span="8">
        <Image
          src="https://x"
          width="100"
          height="100"
          onError={() => {
            console.log('image error')
          }}
        />
        <div style={imageText}>Default</div>
      </Col>
      <Col span="8">
        <Image
          src="https://x"
          width="100"
          height="100"
          error={<Failure />}
        />
        <div style={imageText}>Custom</div>
      </Col>
    </Row>
  </>
}
export default App;
```

:::

### Image + text

`Image` and text

:::demo

```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Image
      src="http://m.360buyimg.com/babel/s181x181_jfs/t1/210178/19/10205/31538/619bbcd9E5071aed5/8e1b7eb632aeed49.png"
      width="30"
      height="30"
      style={{ marginRight: '10px' }}
      onError={() => {
        console.log('image error')
      }}
    />
    <div
      style={{
        width: '220px',
      }}
    >
      Chiffon, 2021, spring, the new easy-to-wear blouse
    </div>
  </>
}
export default App;
```

:::

### LazyLoad

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

## Image

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| src | image link | `string` | `-` |
| fit | image fill mode, equivalent to the native object-fit property | `ImageFit` | `fill` |
| position | Image position, equivalent to the original object-position attribute | `ImagePosition` | `center` |
| alt | alternative text | `string` | `-` |
| width | width, default unit `px` | `string` | `-` |
| height | height, default unit `px` | `string` | `-` |
| radius | rounded corner size | `string`  \|  `number` | `-` |
| error | Whether to display image loading failure | `boolean \| ReactNode` | `true` |
| loading | Whether to show loading images | `boolean \| ReactNode` | `true` |
| lazy | Whether to lazy load images | `boolean` | `false` |
| onClick | Triggered when an image is clicked | `(e: MouseEvent) => void` | `-` |
| onLoad | Triggered after the image is loaded | `() => void` | `-` |
| onError | Triggered when the image fails to load | `() => void` | `-` |

### ImageFit

| Property | Description |
| --- | --- |
| contain | Keep aspect ratio, fully display the long side of the image |
| cover | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill | Stretch and resize image to fill the content box |
| none | Not resize image |
| scale-down | Take the smaller of none or contain |

### ImagePosition

| Property | Description |
| --- | --- |
| center | Align Center |
| top | Align Top |
| right | Align Right |
| bottom | Align Bottom |
| left | Align Left |
