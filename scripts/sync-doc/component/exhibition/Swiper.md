# Swiper 轮播

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

## 引入

```tsx
import { Swiper } from '@dongdesign/ui';
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Image } from '@tarojs/components'
import { Swiper } from '@dongdesign/ui'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const Demo1 = () => {
  return (
    <Swiper defaultValue={1} autoPlay indicator>
      {list.map((item, index) => (
        <Swiper.Item key={item}>
          <Image
            style={{ width: '100%', height: '100%' }}
            onClick={() => console.log(index)}
            src={item}
          />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo1

```

### 异步加载

```tsx
import React, { useEffect, useState } from 'react'
import { Image } from '@tarojs/components'
import { Swiper } from '@dongdesign/ui'

const Demo2 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]

  const [asyncList, setAsyncList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      setAsyncList(list)
    }, 3000)
  }, [])
  return asyncList.length ? (
    <Swiper defaultValue={0} indicator>
      {asyncList.map((item, index) => (
        <Swiper.Item key={item}>
          <Image style={{ width: '100%', height: '100%' }} src={item} />
        </Swiper.Item>
      ))}
    </Swiper>
  ) : null
}
export default Demo2

```

### 自定义大小

`width` 自定义轮播大小

```tsx
import React from 'react'
import { Image } from '@tarojs/components'
import { Swiper } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo3 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <Swiper
      width={pxTransform(300)}
      height={pxTransform(150)}
      defaultValue={0}
      indicator
    >
      {list.map((item) => (
        <Swiper.Item key={item}>
          <Image style={{ width: '100%', height: '100%' }} src={item} />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo3

```

### 自定义分页指示器

`pageContent` 表示自定义指示器

```tsx
import React, { useState } from 'react'
import { Swiper } from '@dongdesign/ui'
import { Image, View, Text } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo4 = () => {
  const [current, setCurrent] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <Swiper
      defaultValue={0}
      onChange={(e) => {
        setCurrent(e.detail.current)
      }}
      indicator={
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: '85%',
            top: pxTransform(120),
            width: pxTransform(46),
            height: pxTransform(22),
            backgroundColor: 'rgba(0, 0, 0, 0.33)',
            borderRadius: pxTransform(22),
            textAlign: 'center',
            fontSize: pxTransform(14),
            zIndex: 1,
          }}
        >
          <Text style={{ color: '#fff' }}>
            {current + 1}/{list.length}
          </Text>
        </View>
      }
    >
      {list.map((item) => (
        <Swiper.Item key={item}>
          <Image style={{ width: '100%', height: '100%' }} src={item} />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo4

```

### 手动切换

可通过 `API`(`prev`,`next`)进行手动切换

```tsx
import React, { useState } from 'react'
import { Swiper } from '@dongdesign/ui'
import { Image, Text, View } from '@tarojs/components'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

function Demo5() {
  const swiperRef = React.useRef<any>(null)
  const [current2, setCurrent2] = useState(0)

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const btnsStyle = {
    position: 'absolute',
    top: pxTransform(60),
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: pxTransform(30),
    zIndex: 1,
  }
  const spanStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: pxTransform(20),
    height: pxTransform(30),
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  }
  return (
    <View
      className="demo-box"
      style={{ height: pxTransform(150), position: 'relative' }}
    >
      <Swiper
        ref={swiperRef}
        defaultValue={0}
        onChange={(e) => {
          setCurrent2(e.detail.current)
        }}
        indicator={
          <View className="page">
            <Text>
              {current2 + 1}/{list.length}
            </Text>
          </View>
        }
      >
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <Image src={item} style={{ width: '100%', height: '100%' }} />
            </Swiper.Item>
          )
        })}
      </Swiper>
      <View style={btnsStyle as any}>
        <View style={spanStyle} onClick={(e) => swiperRef.current?.prev()}>
          {!harmonyAndRn() ? <ArrowLeft /> : null}
        </View>
        <View style={spanStyle} onClick={(e) => swiperRef.current?.next()}>
          {!harmonyAndRn() ? <ArrowRight /> : null}
        </View>
      </View>
    </View>
  )
}

export default Demo5

```

### 垂直方向

`direction` 自定义轮播方向

```tsx
import React from 'react'
import { Image } from '@tarojs/components'
import { Swiper } from '@dongdesign/ui'

const Demo6 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <Swiper defaultValue={0} direction="vertical" indicator>
      {list.map((item) => (
        <Swiper.Item key={item}>
          <Image style={{ width: '100%', height: '100%' }} src={item} />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo6

```

### 水平居中展示

`isCenter` 代表可居中，同时必须传 `width`

```tsx
import React, { useState } from 'react'
import { Swiper } from '@dongdesign/ui'
import { Image } from '@tarojs/components'

const Demo7 = () => {
  const [initPage8, setInitPage8] = useState(0)
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <Swiper defaultValue={0} loop previousMargin="20px" nextMargin="20px">
      {list.map((item) => (
        <Swiper.Item key={item}>
          <Image style={{ width: '100%', height: '100%' }} src={item} />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo7

```

### 垂直居中展示

```tsx
import React from 'react'
import { Swiper } from '@dongdesign/ui'
import { Image, View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo8 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <View className="demo-box vertical-center">
      <Swiper
        defaultValue={0}
        direction="vertical"
        height={pxTransform(220)}
        previousMargin="20px"
        nextMargin="20px"
        indicator
      >
        {list.map((item) => (
          <Swiper.Item key={item}>
            <Image style={{ width: '100%', height: '100%' }} src={item} />
          </Swiper.Item>
        ))}
      </Swiper>
    </View>
  )
}
export default Demo8

```

### 一屏多个数据时

`center` 代表可居中，同时必须传 `height`

```tsx
import React from 'react'
import { Swiper } from '@dongdesign/ui'
import { Text, View } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo9 = () => {
  return (
    <Swiper
      height={pxTransform(120)}
      loop
      autoPlay
      style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <Swiper.Item>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            flexWrap: 'nowrap',
          }}
        >
          <View style={{ width: '25%' }}>Item1</View>
          <Text style={{ width: '25%' }}>Item2</Text>
          <Text style={{ width: '25%' }}>Item3</Text>
          <Text style={{ width: '25%' }}>Item4</Text>
        </View>
      </Swiper.Item>
      <Swiper.Item>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            flexWrap: 'nowrap',
          }}
        >
          <Text style={{ width: '25%' }}>Item1</Text>
          <Text style={{ width: '25%' }}>Item2</Text>
          <Text style={{ width: '25%' }}>Item3</Text>
          <Text style={{ width: '25%' }}>Item4</Text>
        </View>
      </Swiper.Item>
      <Swiper.Item>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            flexWrap: 'nowrap',
          }}
        >
          <Text style={{ width: '25%' }}>Item1</Text>
          <Text style={{ width: '25%' }}>Item2</Text>
          <Text style={{ width: '25%' }}>Item3</Text>
          <Text style={{ width: '25%' }}>Item4</Text>
        </View>
      </Swiper.Item>
    </Swiper>
  )
}
export default Demo9

```

## Swiper

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 轮播卡片的宽度 | `number` | `-` |
| height | 轮播卡片的高度 | `number` | `-` |
| direction | 轮播方向 | `horizontal` \| `vertical` | `horizontal` |
| indicator | 分页指示器是否展示 | `boolean` | `false` |
| loop | 是否循环轮播 | `boolean` | `true` |
| autoPlay | 自动轮播 | `boolean` | `false` |
| defaultValue | 初始化索引值 | `number` | `0` |
| onChange | 卡片切换后的回调 | `(current: number) => void` | `-` |

> Swiper 是对 Taro Swiper 进行的封装，可以支持 Taro Swiper 属性的透传。具体支持属性可参考[https://taro-docs.jd.com/docs/components/viewContainer/swiper](https://taro-docs.jd.com/docs/components/viewContainer/swiper)

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| prev | 切换到上一页 | `()=>void` |
| next | 切换到下一页 | `()=>void` |
| to | 切换到指定轮播 | `(index: number)=>void` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/docs/component/common/ConfigProvider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | 分页器距离底部的距离 | `12px` |
