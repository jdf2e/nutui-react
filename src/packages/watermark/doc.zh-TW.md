# Watermark 浮水印

### 介紹

頁面上添加特定的文字或圖案，可用於防止資訊盜用。

### 安裝

```ts
// react
import { WaterMark } from '@nutui/nutui-react';
```

### 基礎用法

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
        <Button onClick={showTextMark}>文字浮水印</Button>
        <Button onClick={showImageMark}>圖片浮水印</Button>
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

### 局部用法

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

| 參數          | 說明                             | 類型   | 預設值           |
|--------------|----------------------------------|--------|------------------|
| width       | 浮水印的寬度                                           | `number`           | `120`                |
| height      | 浮水印的高度                                           | `number`           | `64`                 |
| rotate      | 浮水印繪製時，旋轉的角度                  | `number`           | `-22`                |
| image       | 圖片源，建議匯出2倍或3倍圖，優先使用圖片渲染浮水印 | `string`           | -                    |
| imageWidth  | 圖片寬度                                             | `number`           | `120`                |
| imageHeight | 圖片高度                                             | `number`           | `64`                 |
| zIndex      | 追加的浮水印元素的z-index                             | `number`           | `2000`               |
| content     | 浮水印文字內容                                       | `string`           | -                    |
| fontColor   | 浮水印文字顏色                                         | `string`           | `rgba(0, 0, 0, .15)` |
| fontSize    | 文字大小                                             | `string \| number` | `16`                 |
| gapX        | 浮水印之間的水准間距                                   | `number`           | `24`                 |
| gapY       | 浮水印之間的垂直間距                                   | `number`           | `48`                 |
| fullPage    | 是否覆蓋整個頁面                                     | `boolean`          | `true`               |
| fontFamily  | 浮水印文字字體                                     | `boolean`          | `true`               |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-watermark-z-index | `  $mask-content-z-index` |
