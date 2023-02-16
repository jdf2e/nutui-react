# Audio 音頻播放器

### 介紹

用於音頻播放

### 安裝

```javascript
// react
import { Audio } from '@nutui/nutui-react'

```

## 代碼演示

### 基本用法

:::demo

```tsx
import  React from "react";
import { Audio } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Audio
        autoplay={false}
        url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        type="icon"
        loop={false}
        preload="auto"
        muted={false}
        onPlayEnd={() => alert('ended!')}
      />
    </>
  );
};
export default App;
```

:::

### 自定義

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
      autoplay={false}
      url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
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

### 進度條播放

:::demo

```tsx
import  React from "react";
import { Audio } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Audio
        autoplay={false}
        url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
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
        onPlayEnd={() => alert('progress audio ended!')}
      />
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
        autoplay={false}
        url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        type="controls"
        preload="auto"
        muted={false}
        onPause={(e) => {
          console.log('paused', e)
        }}
        onPlayEnd={() => alert('ended!')}
      />
    </>
  );
};
export default App;
```

:::


## API

### Props

| 參數         | 說明                             | 類型   | 默認值           |
|--------------|----------------------------------|--------|------------------|
| className       | 類名               | String | ''              |
| style       | css樣式               | CSSProperties | {}           |
| url         | 語音資源鏈接               | String | ''              |
| muted        | 是否靜音                         | Boolean | false             |
| autoplay         | 是否自動播放 | Boolean | false               |
| loop | 是否循環播放     | Boolean | false |
| preload          | 是否預加載語音 枚舉值：'none'、'metadata'、'auto'、''   | String | 'auto'              |
| type         | 展示形式，可選值：controls 控制面板   progress 進度條  icon 圖標 none 自定義 | String | 'progress'              |


### Events

| 事件名 | 說明           | 回調參數     |
|--------|----------------|--------------|
| onFastBack  | 語音快退回調,type=progress時生效 | event：HTMLAudioElement |
| onForward  | 语音快进回调,type=progress時生效 | event：HTMLAudioElement |
| onPause  | 暫停回調 | event：HTMLAudioElement |
| onPlayEnd  | 語音播放完成，loop=false時生效 | event：HTMLAudioElement|
| onMute  | 靜音回調 | event：HTMLAudioElement|
| onCanPlay  | 可以播放媒體時觸發 | event：HTMLAudioElement |
