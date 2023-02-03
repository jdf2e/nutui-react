# Watermark 水印

### 介绍

页面上添加特定的文字或图案，可用于防止信息盗用。

### 安装

```ts

import { Watermark } from '@nutui/nutui-react-taro';
```

### 基础用法

:::demo

```tsx
import React, { useState, useRef } from "react";
import { Watermark } from '@nutui/nutui-react-taro';

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
        <Button onClick={showTextMark}>文字水印</Button>
        <Button onClick={showImageMark}>图片水印</Button>
        {!flag && (
        <WaterMark
            className="mark1"
            zIndex={1}
            content="nut-ui-water-mark"
        ></WaterMark>
        )}
        {flag && (
        <WaterMark
            className="mark1"
            zIndex={1}
            content="nut-ui-water-mark"
            imageWidth={60}
            imageHeight={23}
            image={imgSrc.current}
        ></WaterMark>
        )}
      </Cell>
    </>
  )
}
export default App;
```
:::

### 局部用法

:::demo

```tsx
import React, { useRef } from "react";
import { Watermark } from '@nutui/nutui-react-taro';

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
        ></WaterMark>
      </Cell>
    </>
  )
}
export default App;
```
:::

## API

### Props

| 参数          | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| width       | 水印的宽度                                           | `number`           | `120`                |
| height      | 水印的高度                                           | `number`           | `64`                 |
| rotate      | 水印绘制时，旋转的角度                  | `number`           | `-22`                |
| image       | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | `string`           | -                    |
| imageWidth  | 图片宽度                                             | `number`           | `120`                |
| imageHeight | 图片高度                                             | `number`           | `64`                 |
| zIndex      | 追加的水印元素的 z-index                             | `number`           | `2000`               |
| content     | 水印文字内容                                         | `string`           | -                    |
| fontColor   | 水印文字颜色                                         | `string`           | `rgba(0, 0, 0, .15)` |
| fontSize    | 文字大小                                             | `string \| number` | `16`                 |
| gapX        | 水印之间的水平间距                                   | `number`           | `24`                 |
| gapY       | 水印之间的垂直间距                                   | `number`           | `48`                 |
| fullPage    | 是否覆盖整个页面                                     | `boolean`          | `true`               |
| fontFamily  | 水印文字字体                                     | `boolean`          | `true`               |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-watermark-z-index | `  $mask-content-z-index` |
