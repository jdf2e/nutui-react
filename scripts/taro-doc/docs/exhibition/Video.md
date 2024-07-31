---
sidebar_class_name: hasIcon
---

# Video 视频播放器

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

借助 Taro Video 标签实现的视频播放器，可以透传使用 Taro Video 的属性。

## 引入

```tsx
import { Video } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useState } from 'react'
import { Cell, Video } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
  }
  const play = (elm: any) => console.log('play', elm)
  const pause = (elm: any) => console.log('pause', elm)
  const playend = (elm: any) => console.log('playend', elm)
  return (
    <>
      <Cell style={{ padding: '0' }}>
        <Video
          source={source}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
          style={{ height: '163px' }}
        />
      </Cell>
    </>
  )
}
export default Demo1
```

### 自动播放

autoplay 属性设置视频自动播放

```tsx
import React, { useState } from 'react'
import { Cell, Video } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    autoplay: true,
    muted: true,
    controls: true,
  }
  const play = (elm: any) => console.log('play', elm)
  const pause = (elm: any) => console.log('pause', elm)
  const playend = (elm: any) => console.log('playend', elm)
  return (
    <>
      <Cell style={{ padding: '0' }}>
        <Video
          source={source}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
          style={{ height: '163px' }}
        />
      </Cell>
    </>
  )
}
export default Demo2
```

### 初始化静音

muted属性设置视频初始化静音

```tsx
import React, { useState } from 'react'
import { Cell, Video } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    muted: true,
    controls: true,
  }
  const play = (elm: any) => console.log('play', elm)
  const pause = (elm: any) => console.log('pause', elm)
  const playend = (elm: any) => console.log('playend', elm)
  return (
    <>
      <Cell style={{ padding: '0' }}>
        <Video
          source={source}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
          style={{ height: '163px' }}
        />
      </Cell>
    </>
  )
}
export default Demo3
```

### 视频封面海报设置

poster 属性设置视频海报

```tsx
import React, { useState } from 'react'
import { Cell, Video } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
    poster:
      'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp',
  }
  const play = (elm: any) => console.log('play', elm)
  const pause = (elm: any) => console.log('pause', elm)
  const playend = (elm: any) => console.log('playend', elm)
  return (
    <>
      <Cell style={{ padding: '0' }}>
        <Video
          source={source}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
          style={{ height: '163px' }}
        />
      </Cell>
    </>
  )
}
export default Demo4
```

### 行内播放

playsinline 属性设置移动端视频行内播放，阻止新打开页面播放（兼容 ios，兼容部分安卓机）

```tsx
import React, { useState } from 'react'
import { Cell, Video } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
    playsinline: true,
  }
  const play = (elm: any) => console.log('play', elm)
  const pause = (elm: any) => console.log('pause', elm)
  const playend = (elm: any) => console.log('playend', elm)
  return (
    <>
      <Cell style={{ padding: '0' }}>
        <Video
          source={source}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
          style={{ height: '163px' }}
        />
      </Cell>
    </>
  )
}
export default Demo5
```

### 视频背景图

当设置视频为背景图时需要将 muted 静音、 disabled 禁止操作、loop 循环播放、autoplay 自动播放设置为 true，移动端需要设置 playsinline 行内展示

```tsx
import React, { useState } from 'react'
import { Cell, Video } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: false,
    autoplay: true,
    disabled: true,
    muted: true,
    playsinline: true,
    loop: true,
  }
  const play = (elm: any) => console.log('play', elm)
  const pause = (elm: any) => console.log('pause', elm)
  const playend = (elm: any) => console.log('playend', elm)
  return (
    <>
      <Cell style={{ padding: '0' }}>
        <Video
          source={source}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
          style={{ height: '163px' }}
        />
      </Cell>
    </>
  )
}
export default Demo6
```

### 视频切换

当视频地址发生变化时，重置视频

```tsx
import React, { useState } from 'react'
import { Cell, Video, Button } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [source1, setSource1] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/legao-%E6%9D%A8%E8%BF%9B%E5%86%9B.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
  }
  const play = (elm: any) => console.log('play', elm)
  const pause = (elm: any) => console.log('pause', elm)
  const playend = (elm: any) => console.log('playend', elm)

  const changeVideo = () => {
    setSource1({ ...source1, src: 'https://vjs.zencdn.net/v/oceans.mp4' })
  }
  return (
    <>
      <Cell style={{ padding: '0' }}>
        <Video
          source={source1}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
          style={{ height: '163px' }}
        />
      </Cell>
      <Button
        type="primary"
        style={{ marginBottom: '60px' }}
        onClick={changeVideo}
      >
        视频切换
      </Button>
    </>
  )
}
export default Demo7
```

## Video

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| source | 视频地址和类型设置 | `object` | `{type: {}, src: ''}` |
| options | 控制视频播放属性 | `object` | `-` |
| options.autoplay | 是否自动播放 | `boolean` | `false` |
| options.poster | 海报设置 | `string` | `-` |
| options.loop | 是否循环播放 | `boolean` | `false` |
| options.controls | 是否展示操作栏 | `boolean` | `true` |
| options.muted | 是否静音 | `boolean` | `false` |
| options.playsinline | 是否设置为行内播放元素（解决安卓兼容问题） | `boolean` | `false` |
| onPlay | 播放 | `(event: BaseEventOrig<any>) => void` | `-` |
| onPause | 暂停 | `(event: BaseEventOrig<any>) => void` | `-` |
| onPlayEnd | 播放完成回调 | `(event: BaseEventOrig<any>) => void` | `-` |
