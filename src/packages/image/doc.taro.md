# Image 图片

## 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。

## 安装

```tsx
import { Image } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。

:::demo

```tsx
import React from "react";
import { Image } from '@nutui/nutui-react-taro';

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

### 圆形图片

通过 radius 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。

:::demo

```tsx
import React from "react";
import { Image } from '@nutui/nutui-react-taro';

const App = () => {
  const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image
      src={src}
      mode="scaleToFill"
      width="100"
      height="100"
      radius="50%"
    />
    <Image
      src={src}
      mode="scaleToFill"
      width="80"
      height="80"
      radius="50%"
    />
    <Image
      src={src}
      mode="scaleToFill"
      width="80"
      height="80"
      radius="10px"
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
import { Image } from '@nutui/nutui-react-taro';
import { Loading } from '@nutui/icons-react-taro';

const App = () => {
  const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image
      width="100"
      height="100"
    />
    <Image
      width="80"
      height="80"
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
import { Image } from '@nutui/nutui-react-taro';
import { CircleClose } from '@nutui/icons-react-taro';

const App = () => {
  return <>
    <Image src="https://x" width="80" height="80" />
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

### 填充模式

:::demo

```tsx
import React from "react";
import { Cell, Col, Image } from '@nutui/nutui-react-taro';
import { CircleClose } from '@nutui/icons-react-taro';

const App = () => {
  return <>
    <Cell style={{ flexWrap: 'wrap' }}>
      {[
        'scaleToFill',
        'aspectFit',
        'aspectFill',
        'widthFix',
        'heightFix',
      ].map((mode) => {
        return (
          <Col span="8" key={mode}>
            <Image src={src} mode={mode as any} width="80" height="80" />
          </Col>
        )
      })}
    </Cell>
  </>
}
export default App;
```

:::

### 图片位置

:::demo

```tsx
import React from "react";
import { Cell, Col, Image } from '@nutui/nutui-react-taro';
import { CircleClose } from '@nutui/icons-react-taro';

const App = () => {
  return <>
    <Cell style={{ flexWrap: 'wrap' }}>
      {[
        'top',
        'bottom',
        'center',
        'left',
        'right',
        'top left',
        'top right',
        'bottom left',
        'bottom right',
      ].map((mode) => {
        return (
          <Col span="8" key={mode}>
            <Image src={src} mode={mode as any} width="80" height="80" />
          </Col>
        )
      })}
    </Cell>
  </>
}
export default App;
```

:::


### 图片位置

:::demo

```tsx
import React from 'react'
import { Image } from '@nutui/nutui-react-taro'
import { ScrollView } from '@tarojs/components'

const App = () => {
  return <>
    <ScrollView style={{ height: '350px' }} scrollY>
      {[
        ...new Array(3).fill(src),
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
      ].map((_) => {
        return <Image key={_} src={_} lazyLoad width='100%' height='150' />
      })}
    </ScrollView>
  </>
}
export default App
```

:::

## Image

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | `string` | `-` |
| width | 宽度，默认单位`px` | `string` | `-` |
| height | 高度，默认单位`px` | `string` | `-` |
| radius | 圆角大小 | `string`  \|  `number` | `-` |
| error | 是否展示图片加载失败 | `boolean \| ReactNode` | `true` |
| loading | 是否展示加载中图片 | `boolean \| ReactNode` | `true` |
| onLoad | 图片加载完后触发 | `() => void` | `-` |
| onError | 图片加载失败后触发 | `() => void` | `-` |


### 直接使用 Taro 现有 Image 组件开发 [参考文档](https://taro-docs.jd.com/docs/components/media/image)
