# Audio 音频播放器

## 介绍

用于音频播放

## 安装

```tsx
import { Audio } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { Audio } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Audio
        autoPlay={false}
        src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        type="icon"
        loop={false}
        preload="auto"
        muted={false}
        onEnd={() => alert('ended!')}
      />
    </>
  );
};
export default App;
```

:::

### 进度条播放

:::demo

```tsx
import  React from "react";
import { Audio } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Audio
        autoPlay={false}
        src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        type="progress"
        preload="auto"
        muted={false}
        onMute={(e) => {
          console.log('progress audio muted', e)
        }}
        onForward={() => console.log('forward')}
        onPause={(e) => {
          console.log('progress audio paused', e)
        }}
        onEnd={() => alert('progress audio ended!')}
      />
    </>
  );
};
export default App;
```

:::

### 自定义

:::demo

```tsx
import  React,{useState} from "react";
import { Audio,Icon } from '@nutui/nutui-react';

const App = () => {
  const [duration, setDuration] = useState(0)
  const [voiceIcon, setVoiceIcon] = useState('play-circle-fill')
  return (
    <>
     <Audio
      className="custom-voice-audio"
      id="custom-voice-audio"
      autoPlay={false}
      src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
      type="none"
      preload="auto"
      onCanPlay={(e: any) => {
        console.log('none-canplay', e)
        setDuration(e?.target?.duration.toFixed(0) || 0)
      }}
    >
      <div className="nut-voice">
        <Icon name={voiceIcon} />
        <div>{duration}&quot;</div>
      </div>
    </Audio>
    </>
  );
};
export default App;
```

:::

### 控件播放

:::demo

```tsx
import  React from "react";
import { Audio } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Audio
        autoPlay={false}
        src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        type="controls"
        preload="auto"
        muted={false}
        onPause={(e) => {
          console.log('paused', e)
        }}
        onEnd={() => alert('ended!')}
      />
    </>
  );
};
export default App;
```

:::


## Audio

### Props

| 属性 | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| src         | 语音资源链接               | `string` | -              |
| muted        | 是否静音                         | `boolean` | `false`             |
| autoPlay         | 是否自动播放 | `boolean` | `false`               |
| loop | 是否循环播放     | `boolean` | `false` |
| preload          | 是否预加载语音 枚举值：'none'、'metadata'、'auto'、''   | `string` | `auto`              |
| type         | 展示形式，可选值：controls 控制面板   progress 进度条  icon 图标 none 自定义 | `string` | `progress`              |
| onBack  | 语音快退回调，type = progress 时生效 | `(event：HTMLAudioElement) => void` | - |
| onForward  | 语音快进回调，type = progress 时生效 | `(event：HTMLAudioElement) => void` | - |
| onPause  | 暂停回调 | `(event：HTMLAudioElement) => void` | - |
| onEnd  | 语音播放完成，loop = false 时生效 | `(event：HTMLAudioElement) => void` | - |
| onMute  | 静音回调 | `(event：HTMLAudioElement) => void` | - |
| onCanPlay  | 可以播放媒体时触发 | `(event：HTMLAudioElement) => void` | - |
