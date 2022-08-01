#  Video 視頻播放器

### 介紹

原生video實現的視頻播放器

### 安裝

``` ts
import { Video } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

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
    controls: true,cd
  }
  const play = (elm: HTMLVideoElement) => console.log('play', elm)
  const pause = (elm: HTMLVideoElement) => console.log('pause', elm)
  const playend = (elm: HTMLVideoElement) => console.log('playend', elm)
  return (
    <>
      <h2>基礎用法</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          play={play}
          pause={pause}
          playend={playend}
        ></Video>
      </Cell>
    </>
  )
}
export default App;
```
:::

### 自動播放
autoplay 屬性設置視頻自動播放

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
      <h2>自動播放</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          play={play}
          pause={pause}
          playend={playend}
        ></Video>
      </Cell>
    </>
  )
}
export default App;
```
:::

### 初始化靜音
muted屬性設置視頻初始化靜音

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
      <h2>初始化靜音</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          play={play}
          pause={pause}
          playend={playend}
        ></Video>
      </Cell>
    </>
  )
}
export default App;
```
:::

### 視頻封面海報設置
poster 屬性設置視頻海報

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
      <h2>視頻封面海報設置</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          play={play}
          pause={pause}
          playend={playend}
        ></Video>
      </Cell>
    </>
  )
}
export default App;
```

:::

### 行內播放
playsinline 屬性設置移動端視頻行內播放，阻止新打開頁面播放（兼容 ios，兼容部分安卓機）

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
      <h2>行內播放</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          play={play}
          pause={pause}
          playend={playend}
        ></Video>
      </Cell>
    </>
  )
}
export default App;
```
:::

### 視頻背景圖
當設置視頻為背景圖時需要將 muted 靜音、 disabled 禁止操作、loop 循環播放、autoplay 自動播放設置為 true，移動端需要設置 playsinline 行內展示


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
      <h2>設置視頻為背景圖</h2>
      <Cell className='cell'>
        <Video
          source={source}
          options={options}
          play={play}
          pause={pause}
          playend={playend}
        ></Video>
      </Cell>
    </>
  )
}
export default App;
```
:::

### 視頻切換
當視頻地址發生變化時，重置視頻

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
      <h2>視頻切換</h2>
      <Cell className='cell'>
        <Video
          source={source1}
          options={options}
          play={play}
          pause={pause}
          playend={playend}
        ></Video>
      </Cell>
      <Button type="primary" className="m-b" onClick={changeVideo}>視頻切換</Button>
    </>
  )
}
export default App;
```
:::


## API

### Props

| 字段                | 說明                                       | 類型    | 默認值   |
| ------------------- | ------------------------------------------ | ------- | -------- |
| source             | 視頻地址和類型設置                         | Object   | -        |
| options             | 控制視頻播放屬性                           | Object  | required |
| options.autoplay    | 是否自動播放                               | Boolean | false    |
| options.poster      | 海報設置                                   | String  | -        |
| options.loop        | 是否循環播放                               | Boolean | false    |
| options.controls    | 是否展示操作欄                             | Boolean | true     |
| options.muted       | 是否靜音                                   | Boolean | false    |
| options.playsinline | 是否設置為行內播放元素（解決安卓兼容問題） | Boolean | false    |

### Events

| 事件名稱 | 說明         | 回調參數 |
| -------- | ------------ | -------- |
| play     | 播放         | --       |
| pause    | 暫停         | --       |
| playend  | 播放完成回調 | --       |