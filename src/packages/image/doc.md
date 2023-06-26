# Image组件

## 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。

## 安装

```tsx
import { Image } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。

:::demo

```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';

const App = () => {
  const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image src={src} width="100%" />
  </>
}
export default App;
```

:::

### 填充模式

通过 fit 属性可以设置图片填充模式，等同于原生的 object-fit 属性，可选值见下方表格。

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

### 图片位置

通过 position 属性可以设置图片位置，结合 fit 属性使用，等同于原生的 object-position 属性。

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

### 圆形图片

通过 radius 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。

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

### 加载中图片

`Image` 组件提供了默认的加载中提示，支持通过 `loading` 自定义内容。

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

### 加载失败

`Image` 组件提供了默认的加载失败提示，支持通过 `error` 自定义内容。

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

### 图片懒加载

`Image` 组件提供了懒加载图片功能，支持通过配置 `lazy` 来实现，默认不开启。

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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | `string` | `-` |
| fit | 图片填充模式，等同于原生的 object-fit 属性 | `ImageFit` | `fill` |
| position | 图片位置，等同于原生的 object-position 属性 | `ImagePosition` | `center` |
| alt | 替代文本 | `string` | `-` |
| width | 宽度，默认单位`px` | `string` | `-` |
| height | 高度，默认单位`px` | `string` | `-` |
| radius | 圆角大小 | `string`  \|  `number` | `-` |
| error | 是否展示图片加载失败 | `boolean \| ReactNode` | `true` |
| loading | 是否展示加载中图片 | `boolean \| ReactNode` | `true` |
| lazy | 是否为懒加载图片 | `boolean` | `false` |
| onClick | 点击图片时触发 | `(e: MouseEvent) => void` | `-` |
| onLoad | 图片加载完后触发 | `() => void` | `-` |
| onError | 图片加载失败后触发 | `() => void` | `-` |

### ImageFit 图片填充模式

| 属性 | 说明 |
| --- | --- |
| contain | 保持宽高缩放图片，使图片的长边能完全显示出来 |
| cover | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill | 拉伸图片，使图片填满元素 |
| none | 保持图片原有尺寸 |
| scale-down | 取 none 或 contain 中较小的一个 |

### ImagePosition 图片位置

| 属性 | 说明 |
| --- | --- |
| center | 居中对齐 |
| top | 顶部对齐 |
| right | 右侧对齐 |
| bottom | 底部对齐 |
| left | 左侧对齐 |