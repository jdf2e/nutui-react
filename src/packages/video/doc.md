#  Video 视频播放器

### 介绍

原生video实现的视频播放器

### 安装

``` ts
import { Video } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo
```tsx
import React, { useState } from "react";
import { Cell, Video } from '@nutui/nutui-react';

const App = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
  }
  const play = (elm: HTMLVideoElement) => console.log('play', elm)
  const pause = (elm: HTMLVideoElement) => console.log('pause', elm)
  const playend = (elm: HTMLVideoElement) => console.log('playend', elm)
  return (
    <>
      <h2>基础用法</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          onPlayFuc={play}
          onPauseFuc={pause}
          onPlayend={playend}
         />
      </Cell>
    </>
  )
}
export default App;
```
:::

### 自动播放
autoplay 属性设置视频自动播放

:::demo
```tsx
import React, { useState } from "react";
import { Cell, Video } from '@nutui/nutui-react';

const App = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    autoplay: true,
    muted: true,
    controls: true,
  }
  const play = (elm: HTMLVideoElement) => console.log('play', elm)
  const pause = (elm: HTMLVideoElement) => console.log('pause', elm)
  const playend = (elm: HTMLVideoElement) => console.log('playend', elm)
  return (
    <>
      <h2>自动播放</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          onPlayFuc={play}
          onPauseFuc={pause}
          onPlayend={playend}
         />
      </Cell>
    </>
  )
}
export default App;
```
:::

### 初始化静音
muted属性设置视频初始化静音

:::demo
```tsx
import React, { useState } from "react";
import { Cell, Video } from '@nutui/nutui-react';

const App = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    muted: true,
    controls: true,
  }
  const play = (elm: HTMLVideoElement) => console.log('play', elm)
  const pause = (elm: HTMLVideoElement) => console.log('pause', elm)
  const playend = (elm: HTMLVideoElement) => console.log('playend', elm)
  return (
    <>
      <h2>初始化静音</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          onPlayFuc={play}
          onPauseFuc={pause}
          onPlayend={playend}
         />
      </Cell>
    </>
  )
}
export default App;
```
:::

### 视频封面海报设置
poster 属性设置视频海报

:::demo
```tsx
import React, { useState } from "react";
import { Cell, Video } from '@nutui/nutui-react';

const App = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
    poster:
      'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp',
  }
  const play = (elm: HTMLVideoElement) => console.log('play', elm)
  const pause = (elm: HTMLVideoElement) => console.log('pause', elm)
  const playend = (elm: HTMLVideoElement) => console.log('playend', elm)
  return (
    <>
      <h2>视频封面海报设置</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          onPlayFuc={play}
          onPauseFuc={pause}
          onPlayend={playend}
         />
      </Cell>
    </>
  )
}
export default App;
```

:::

### 行内播放
playsinline 属性设置移动端视频行内播放，阻止新打开页面播放（兼容 ios，兼容部分安卓机）

:::demo
```tsx
import React, { useState } from "react";
import { Cell, Video } from '@nutui/nutui-react';

const App = () => {
  const [source, setSource] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
    playsinline: true,
  }
  const play = (elm: HTMLVideoElement) => console.log('play', elm)
  const pause = (elm: HTMLVideoElement) => console.log('pause', elm)
  const playend = (elm: HTMLVideoElement) => console.log('playend', elm)
  return (
    <>
      <h2>行内播放</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          onPlayFuc={play}
          onPauseFuc={pause}
          onPlayend={playend}
         />
      </Cell>
    </>
  )
}
export default App;
```
:::

### 视频背景图
当设置视频为背景图时需要将 muted 静音、 disabled 禁止操作、loop 循环播放、autoplay 自动播放设置为 true，移动端需要设置 playsinline 行内展示

:::demo
```tsx
import React, { useState } from "react";
import { Cell, Video } from '@nutui/nutui-react';

const App = () => {
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
  const play = (elm: HTMLVideoElement) => console.log('play', elm)
  const pause = (elm: HTMLVideoElement) => console.log('pause', elm)
  const playend = (elm: HTMLVideoElement) => console.log('playend', elm)
  return (
    <>
      <h2>设置视频为背景图</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          onPlayFuc={play}
          onPauseFuc={pause}
          onPlayend={playend}
         />
      </Cell>
    </>
  )
}
export default App;
```
:::

### 视频切换
当视频地址发生变化时，重置视频

:::demo
```tsx
import React, { useState } from "react";
import { Cell, Video, Button } from '@nutui/nutui-react';

const App = () => {
  const [source1, setSource1] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/legao-%E6%9D%A8%E8%BF%9B%E5%86%9B.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
  }
  const play = (elm: HTMLVideoElement) => console.log('play', elm)
  const pause = (elm: HTMLVideoElement) => console.log('pause', elm)
  const playend = (elm: HTMLVideoElement) => console.log('playend', elm)

  const changeVideo = () => {
    setSource1({...source1, src: 'https://vjs.zencdn.net/v/oceans.mp4'})
  }
  return (
    <>
      <h2>视频切换</h2>
      <Cell className='cell'>
        <Video
          source={source1}
          options={options}
          onPlayFuc={play}
          onPauseFuc={pause}
          onPlayend={playend}
         />
      </Cell>
      <Button type="primary" className="m-b" onClick={changeVideo}>视频切换</Button>
    </>
  )
}
export default App;
```
:::


## API

### Props

| 字段                | 说明                                       | 类型    | 默认值   |
| ------------------- | ------------------------------------------ | ------- | -------- |
| source             | 视频地址和类型设置                         | Object   | -        |
| options             | 控制视频播放属性                           | Object  | required |
| options.autoplay    | 是否自动播放                               | Boolean | false    |
| options.poster      | 海报设置                                   | String  | -        |
| options.loop        | 是否循环播放                               | Boolean | false    |
| options.controls    | 是否展示操作栏                             | Boolean | true     |
| options.muted       | 是否静音                                   | Boolean | false    |
| options.playsinline | 是否设置为行内播放元素（解决安卓兼容问题） | Boolean | false    |

### Events

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| play `v1.3.8废弃`     | 播放         | --       |
| pause `v1.3.8废弃`    | 暂停         | --       |
| playend `v1.3.8废弃`  | 播放完成回调 | --       |
| onPlayFuc `v1.3.8`     | 播放         | --       |
| onPauseFuc `v1.3.8`    | 暂停         | --       |
| onPlayend `v1.3.8`  | 播放完成回调 | --       |