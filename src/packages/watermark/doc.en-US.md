# Watermark

### Intro

Add specific words or patterns on the page to prevent information theft.

### Intro

```ts
// react
import { WaterMark } from '@nutui/nutui-react';
```

### Install

:::demo

```tsx
import React, { useState, useRef } from "react";
import { WaterMark, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  const [flag, setFlag] = useState(false)
  const imgSrc = useRef(
    '//img11.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'
  )

  const showTextMark = () => {
    setFlag(false)
  }

  const showImageMark = () => {
    setFlag(true)
  }
  return (
    <>
      <Cell className="wrap">
        <Button onClick={showTextMark}>Text WaterMark</Button>
        <Button onClick={showImageMark}>Image WaterMark</Button>
        {!flag && (
        <WaterMark
            className="mark1"
            zIndex={1}
            content="nut-ui-water-mark"
         />
        )}
        {flag && (
        <WaterMark
            className="mark1"
            zIndex={1}
            content="nut-ui-water-mark"
            imageWidth={60}
            imageHeight={23}
            image={imgSrc.current}
         />
        )}
      </Cell>
    </>
  )
}
export default App;
```
:::

### Basic Usage

:::demo

```tsx
import React, { useRef } from "react";
import { WaterMark, Cell } from '@nutui/nutui-react';

const App = () => {
  const src = useRef(
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  )

  return (
    <>
      <Cell className="wrap wrap2">
        <img src={src.current} alt="" />
        <WaterMark
          fullPage={false}
          fontColor="#fa2c19"
          content="nut-ui"
         />
      </Cell>
    </>
  )
}
export default App;
```
:::

## API

### Props
| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| width       | Width of watermark     | `number`           | `120`                |
| height      | Height of watermark               | `number`           | `64`                 |
| rotate      | Rotation angle when drawing watermark   | `number`           | `-22`                |
| image       | Image source, it is recommended to export 2x or 3x images, and the image rendering watermark is preferred | `string`           | -                    |
| imageWidth  | Width of image                                             | `number`           | `120`                |
| imageHeight | Height of image                                             | `number`           | `64`                 |
| zIndex      | Z-index of the appended watermark element                             | `number`           | `2000`               |
| content     | Watermark text content                                         | `string`           | -                    |
| fontColor   | Watermark text color                                         | `string`           | `rgba(0, 0, 0, .15)` |
| fontSize    | Watermark text font size                                             | `string \| number` | `16`                 |
| gapX        | Horizontal spacing between watermarks                                   | `number`           | `24`                 |
| gapY        | Vertical spacing between watermarks                                   | `number`           | `48`                 |
| fullPage    | Overwrite entire page                                     | `boolean`          | `true`               |
| fontFamily  | Watermark text font family                  | `boolean`          | `true`               |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-watermark-z-index | `  $mask-content-z-index` |
