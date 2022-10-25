#  Video 

### Intro

Video player implemented by native video

### Install

``` ts
import { Video } from '@nutui/nutui-react';
```

### Basic Usage

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
      <h2>Basic Usage</h2>
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

### Auto play
autoplay Property to set video autoplay

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
      <h2>Auto play</h2>
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

### Initialize mute
The muted property sets the initial mute of the video

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
      <h2>Initialize mute</h2>
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

### Video cover poster settings
The poster property sets the video poster

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
      <h2>Video cover poster settings</h2>
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

### play inline
The playsinline property sets the mobile terminal video to play in line and prevents the newly opened page from playing (compatible with IOS and some Android machines)

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
      <h2>play inline</h2>
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

### Set video as background
When setting the video as the background image, it is necessary to set muted, disabled, operation prohibited, loop, loop and autoplay to true, and the mobile terminal needs to set playinline for in-line display

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
      <h2>Set video as background</h2>
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

### Video switching
Reset the video when the video address changes

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
      <h2>Video switching</h2>
      <Cell className='cell'>
        <Video
          source={source1}
          options={options}
          onPlayFuc={play}
          onPauseFuc={pause}
          onPlayend={playend}
         />
      </Cell>
      <Button type="primary" className="m-b" onClick={changeVideo}>Video switching</Button>
    </>
  )
}
export default App;
```
:::


## API

### Props

| Attribute                | Description                                       | Type    | Default   |
| ------------------- | ------------------------------------------ | ------- | -------- |
| source             | Video url and type settings                         | Object   | -        |
| options             | Control video playback properties                          | Object  | required |
| options.autoplay    | Auto play                               | Boolean | false    |
| options.poster      | Poster settings                                | String  | -        |
| options.loop        | Poster loop                             | Boolean | false    |
| options.controls    | Show operation control                             | Boolean | true     |
| options.muted       | Mute                                   | Boolean | false    |
| options.playsinline | Whether to set as inline playback element (solve Android compatibility problem) | Boolean | false    |

### Events

| Event | Description	         | Arguments |
| -------- | ------------ | -------- |
| play `v1.3.8(Abandon)`     | play event         | --       |
| pause `v1.3.8(Abandon)`    | pause event         | --       |
| playend `v1.3.8(Abandon)`  | Playback completion callback | --       |
| onPlayFuc `v1.3.8`     | play event         | --       |
| onPauseFuc `v1.3.8`    | pause event         | --       |
| onPlayend `v1.3.8`  | Playback completion callback | --       |
