# Audio 

## Intro

Used for audio playback

## Install

```tsx
import { Audio } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

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

### Progress Mode

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

### Custom Mode

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

### Control Mode

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

| Property         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| src         | Voice resource link               | `string` | -              |
| muted        | Whether it is mute                         | `boolean` | `false`             |
| autoPlay         | Whether to play automatically | `boolean` | `false`               |
| loop | Whether to circulate     | `boolean` | `false` |
| preload          | Whether the pronunciation is pre -loaded: 'None', 'Metadata', 'Auto', ''  | `string` | `auto`              |
| type         | Display form, optional value：controls、panel、progress、icon、none  | `string` | `progress`              |
| onBack  | Voice will be retreated, type = progress takes effect | `(event：HTMLAudioElement) => void` | - |
| onForward  | Voice fast -moving back, type = progress | `(event：HTMLAudioElement) => void` | - |
| onPause  | Suspension | `(event：HTMLAudioElement) => void` | - |
| onEnd  | The voice playback is complete, loop=false takes effect | `(event：HTMLAudioElement) => void` | - |
| onMute  | Mute | `(event：HTMLAudioElement) => void` | - |
| onCanPlay  | Can be triggered when the media can be played | `(event：HTMLAudioElement) => void` | - |
