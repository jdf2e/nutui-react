---
sidebar_class_name: hasIcon
---

# ImagePreview组件

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

支持全屏预览视频和图片，可函数式调用

## 引入

```tsx
import { ImagePreview } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useState } from 'react'
import { ImagePreview, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const images = [
    {
      src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
    },
  ]
  const [showPreview, setShowPreview] = useState(false)
  return (
    <>
      <ImagePreview
        autoPlay
        images={images}
        visible={showPreview}
        onClose={() => setShowPreview(false)}
      />
      <Cell title="展示图片预览" onClick={() => setShowPreview(true)} />
    </>
  )
}
export default Demo1
```

### 点击缩略图切换

```tsx
import React, { useState } from 'react'
import { ImagePreview, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const images = [
    {
      src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
    },
  ]
  const [init, setInit] = useState(0)
  const [showPreview, setShowPreview] = useState(false)
  return (
    <>
      <Cell style={{ position: 'relative' }}>
        {images.map((image, index) => (
          <span
            key={image.src}
            onClick={() => {
              setShowPreview(true)
              setInit(index + 1)
            }}
            style={{ marginRight: '10px' }}
          >
            <img width="30px" height="30px" src={image.src} alt={image.src} />
          </span>
        ))}
      </Cell>
      <ImagePreview
        autoPlay
        images={images}
        visible={showPreview}
        defaultValue={init}
        onClose={() => setShowPreview(false)}
        indicator
      />
    </>
  )
}
export default Demo2
```

### 设置初始页码

```tsx
import React, { useState } from 'react'
import { ImagePreview, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const images = [
    {
      src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
    },
  ]
  const [showPreview, setShowPreview] = useState(false)
  const [init, setInit] = useState<any>(2)
  return (
    <>
      <ImagePreview
        autoPlay
        images={images}
        visible={showPreview}
        defaultValue={init}
        onClose={() => setShowPreview(false)}
      />

      <Cell title="设置初始页码" onClick={() => setShowPreview(true)} />
    </>
  )
}
export default Demo3
```

### 受控模式

```tsx
import React, { useState } from 'react'
import { ImagePreview, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const images = [
    {
      src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
    },
  ]
  const [init, setInit] = useState<any>(1)
  const [showPreview, setShowPreview] = useState(false)
  return (
    <>
      <ImagePreview
        autoPlay
        images={images}
        visible={showPreview}
        value={init}
        defaultValue={init}
        indicator
        onChange={(value) => {
          console.log('demo onChange', value)
          setInit(value)
        }}
        onClose={() => setShowPreview(false)}
      />
      <Cell title="受控模式" onClick={() => setShowPreview(true)} />
    </>
  )
}
export default Demo4
```

### 设置轮播指示器及颜色

```tsx
import React, { useState } from 'react'
import { ImagePreview, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const images = [
    {
      src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
    },
  ]
  const [showPreview, setShowPreview] = useState(false)
  return (
    <>
      <ImagePreview
        autoPlay
        images={images}
        visible={showPreview}
        indicator
        indicatorColor="red"
        onClose={() => setShowPreview(false)}
      />
      <Cell title="设置轮播指示器及颜色" onClick={() => setShowPreview(true)} />
    </>
  )
}
export default Demo5
```

### 视频、图片预览

```tsx
import React, { useState } from 'react'
import { ImagePreview, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const images = [
    {
      src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
    },
  ]

  const videos = [
    {
      source: {
        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
        type: 'video/mp4',
      },
      options: {
        muted: true,
        controls: true,
      },
    },
    {
      source: {
        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
        type: 'video/mp4',
      },
      options: {
        muted: true,
        controls: true,
      },
    },
  ]
  const [showPreview, setShowPreview] = useState(false)
  return (
    <>
      <ImagePreview
        autoPlay={false}
        images={images}
        videos={videos}
        visible={showPreview}
        onClose={() => setShowPreview(false)}
      />
      <Cell title="视频、图片预览" onClick={() => setShowPreview(true)} />
    </>
  )
}
export default Demo6
```

### 关闭按钮

```tsx
import React, { useState } from 'react'
import { ImagePreview, Cell } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const images = [
    {
      src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
    },
  ]
  const [showPreview, setShowPreview] = useState(false)
  return (
    <>
      <ImagePreview
        autoPlay={false}
        images={images}
        visible={showPreview}
        closeIcon
        closeIconPosition="bottom"
        onClose={() => setShowPreview(false)}
      />
      <Cell title="关闭按钮" onClick={() => setShowPreview(true)} />
    </>
  )
}
export default Demo7
```

## ImagePreview

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| visible | 是否展示预览图片 | `boolean` | `false` |
| videos | 预览的视频数组（视频自动放到图片之前） | `Array<Object>` | `[]` |
| images | 预览图片数组 | `{ src: string }[]` | `[]` |
| autoPlay | 自动轮播时长，0表示不会自动轮播 | `number` \| `string` | `3000` |
| defaultValue | 初始页码 | `number` | `1` |
| value | 页码，受控 | `number` | `1` |
| pagination | 分页是否展示 | `boolean` | `true` |
| indicator | 分页指示器是否展示 | `boolean` | `false` |
| indicatorColor | 分页指示器选中的颜色 | `string` | `#fff` |
| showMenuByLongpress | 开启长按图片显示识别小程序码菜单 | `boolean` | `false` |
| closeOnContentClick | 点击图片可以退出预览 | `boolean` | `false` |
| closeIcon | 关闭按钮 | `boolean` \| `ReactNode` | `false` |
| closeIconPosition | 关闭按钮位置 | `top-right` \| `top-left` \| `bottom` | `top-right` |
| onChange | 切换时触发 | `(value:number) => void` | `-` |
| onClose | 点击遮罩关闭图片预览时触发 | `() => void` | `-` |
