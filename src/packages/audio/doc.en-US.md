# Audio 

### introduce

Used for audio playback

### Install

```javascript
import { Audio } from '@nutui/nutui-react'
```

## Code demonstration

### Basic usage

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

### customize

:::demo

```tsx
import  React from "react";
import { Audio,Icon } from '@nutui/nutui-react';

const App = () => {
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

### Progressive Play

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

### Control

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

| parameter         | illustrate                             | type   | Defaults           |
|--------------|----------------------------------|--------|------------------|
| className       | Classification               | String | ''              |
| style       | CSS Properties              | CSSProperties | {}           |
| url         | Voice resource link               | String | ''              |
| muted        | Whether it is mute                         | Boolean | false             |
| autoplay         | Whether to play automatically | Boolean | false               |
| loop | Whether to circulate     | Boolean | false |
| preload          | Whether the pronunciation is pre -loaded: 'None', 'Metadata', 'Auto', ''  | String | 'auto'              |
| type         | Display form, optional value：controls、panel、progress、icon、none  | String | 'progress'              |


### Events

| Incident name | illustrate           | Callback parameter     |
|--------|----------------|--------------|
| onFastBack  | Voice will be retreated, type = progress takes effect | event：HTMLAudioElement |
| onForward  | Voice fast -moving back, type = progress | event：HTMLAudioElement |
| onPause  | Suspension | event：HTMLAudioElement |
| onPlayEnd  | The voice playback is complete, loop=false takes effect | event：HTMLAudioElement|
| onMute  | Mute | event：HTMLAudioElement|
| onCanPlay  | Can be triggered when the media can be played | event：HTMLAudioElement |
