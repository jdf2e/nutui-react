# Image 图片

增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。

## 引入

```tsx
import { Image } from '@dongdesign/ui';
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Image } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo1 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <Image src={src} height={pxTransform(200)} />
    </>
  )
}
export default Demo1

```

### 圆形图片

通过 radius 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。

```tsx
import React from 'react'
import { Image } from '@dongdesign/ui'
import { View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo2 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        <View style={{ width: pxTransform(98) }}>
          <Image
            src={src}
            mode="aspectFit"
            width={pxTransform(80)}
            height={pxTransform(80)}
            radius={pxTransform(40)}
          />
        </View>
        <View style={{ width: pxTransform(98) }}>
          <Image
            src={src}
            mode="scaleToFill"
            width={pxTransform(80)}
            height={pxTransform(80)}
            radius={pxTransform(40)}
          />
        </View>
        <View style={{ width: pxTransform(98) }}>
          <Image
            src={src}
            mode="scaleToFill"
            width={pxTransform(80)}
            height={pxTransform(80)}
            radius={pxTransform(10)}
          />
        </View>
      </View>
    </>
  )
}
export default Demo2

```

### 加载中提示

`Image` 组件提供了默认的加载中提示，支持通过 `loading` 自定义内容。

```tsx
import React from 'react'
import { Image } from '@dongdesign/ui'
import { Loading } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'

const Demo3 = () => {
  const imageText: React.CSSProperties = {
    width: 80,
    marginTop: 5,
    textAlign: 'center',
    color: '#999',
  }
  return (
    <>
      <View style={{ display: 'flex', flexWrap: 'wrap' }}>
        <View style={{ width: 98 }}>
          <Image width="80" height="80" />
          <View style={imageText}>默认</View>
        </View>
        <View style={{ width: 98 }}>
          <Image
            width="80"
            height="80"
            loading={<Loading className="nut-icon-loading" />}
          />
          <View style={imageText}>自定义</View>
        </View>
      </View>
    </>
  )
}
export default Demo3

```

### 加载失败

`Image` 组件提供了默认的加载失败提示，支持通过 `error` 自定义内容。

```tsx
import React from 'react'
import { Image } from '@dongdesign/ui'
import { Failure } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'

const Demo4 = () => {
  const imageText: React.CSSProperties = {
    width: 80,
    marginTop: 5,
    textAlign: 'center',
    color: '#999',
  }
  return (
    <>
      <View style={{ display: 'flex', flexWrap: 'wrap' }}>
        <View style={{ width: 98 }}>
          <Image src="https://x" width="80" height="80" />
          <View style={imageText}>默认</View>
        </View>
        <View style={{ width: 98 }}>
          <Image src="https://x" width="80" height="80" error={<Failure />} />
          <View style={imageText}>自定义</View>
        </View>
      </View>
    </>
  )
}
export default Demo4

```

### Image + text 模式

`Image` 组件和文本组合。

```tsx
import React from 'react'
import { Image } from '@dongdesign/ui'
import { View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo5 = () => {
  return (
    <>
      <Image
        src="http://m.360buyimg.com/babel/s181x181_jfs/t1/210178/19/10205/31538/619bbcd9E5071aed5/8e1b7eb632aeed49.png"
        width={pxTransform(30)}
        height={pxTransform(30)}
      />
      <View
        style={{
          width: pxTransform(200),
          marginLeft: pxTransform(10),
        }}
      >
        雪纺衫女2021年春季新款洋气轻熟上衣
      </View>
    </>
  )
}
export default Demo5

```

### 填充模式

```tsx
import React from 'react'
import { Image } from '@dongdesign/ui'
import { View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo6 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const modes = [
    'scaleToFill',
    'aspectFit',
    'aspectFill',
    'widthFix',
    'heightFix',
  ]

  return (
    <>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        {modes.map((mode) => {
          return (
            <View
              style={{
                width: pxTransform(90),
                height: pxTransform(90),
              }}
              key={mode}
            >
              <Image
                src={src}
                mode={mode as any}
                width={pxTransform(80)}
                height={pxTransform(80)}
              />
            </View>
          )
        })}
      </View>
    </>
  )
}
export default Demo6

```

### 图片位置

```tsx
import React from 'react'
import { Image } from '@dongdesign/ui'
import { View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo7 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const modes = [
    'top',
    'bottom',
    'center',
    'left',
    'right',
    'top left',
    'top right',
    'bottom left',
    'bottom right',
  ]

  return (
    <>
      <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        {modes.map((mode) => {
          return (
            <View
              style={{
                width: pxTransform(90),
                height: pxTransform(90),
              }}
              key={mode}
            >
              <Image
                src={src}
                mode={mode as any}
                width={pxTransform(80)}
                height={pxTransform(80)}
              />
            </View>
          )
        })}
      </View>
    </>
  )
}
export default Demo7

```

### 图片懒加载

```tsx
import React from 'react'
import { Image } from '@dongdesign/ui'
import { ScrollView } from '@tarojs/components'

const Demo8 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <ScrollView style={{ height: '350px' }} scrollY>
        {[
          ...new Array(3).fill(src),
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        ].map((_) => {
          return <Image key={_} src={_} lazyLoad width="100%" height="150" />
        })}
      </ScrollView>
    </>
  )
}
export default Demo8

```

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

