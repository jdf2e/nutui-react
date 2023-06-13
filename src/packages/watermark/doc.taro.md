# Watermark 水印

## 介绍

页面上添加特定的文字或图案，可用于防止信息盗用。

## 安装

```tsx
import { Watermark } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState, useRef } from "react";
import { WaterMark, Cell, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const [flag, setFlag] = useState(false)
  const imgSrc = useRef(
    '//m.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'
  )
  return (
    <Cell>
      <Button onClick={() => setFlag(false)}>Text WaterMark</Button>
      <Button onClick={() => setFlag(true)}>Image WaterMark</Button>
      {!flag && <WaterMark zIndex={200} content="NutUI-WaterMark" />}
      {flag && (
        <WaterMark
          zIndex={200}
          content="NutUI-WaterMark"
          rotate={22}
          imageWidth={60}
          imageHeight={23}
          image={imgSrc.current}
        />
      )}
    </Cell>
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
    '//m.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  )
  return (
    <Cell>
      <img src={src.current} alt="" width="100%" height="100%" />
      <WaterMark fullPage={false} color="red" content="nutui" />
    </Cell>
  )
}
export default App;
```

:::

## WaterMark

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 水印的宽度 | `number` | `120` |
| height | 水印的高度 | `number` | `64` |
| rotate | 水印绘制时，旋转的角度 | `number` | `-22` |
| image | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | `string` | - |
| imageWidth | 图片宽度 | `number` | `120` |
| imageHeight | 图片高度 | `number` | `64` |
| zIndex | 追加的水印元素的 z-index | `number` | `2000` |
| content | 水印文字内容 | `string` | - |
| color | 水印文字颜色 | `string` | `rgba(0, 0, 0, .15)` |
| fontSize | 文字大小 | `string`  \|  `number` | `16` |
| gapX | 水印之间的水平间距 | `number` | `24` |
| gapY | 水印之间的垂直间距 | `number` | `48` |
| fullPage | 是否覆盖整个页面 | `boolean` | `true` |
| fontFamily | 水印文字字体 | `string` | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-watermark-z-index | zIndex | `$mask-content-z-index` |
