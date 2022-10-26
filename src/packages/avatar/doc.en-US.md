# Avatar

### Intro

Avatars can be used to represent people or objects. It supports images, Icons, or letters.

### Install
``` ts
import { Avatar } from '@nutui/nutui-react';
```
### Basic usage

Support three sizes：small、normal、large

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar size="large" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />
      <Avatar size="normal" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />
      <Avatar size="small" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
       />  
    </>
  )
}
export default App;
```
:::

### Shape

Support two shapes：square、round

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar icon="my" shape="square" />
      <Avatar icon="my" shape="round" />
    </>
  )
}
export default App;
```
:::

### Type

Support three types：picture、icon、letter

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
      <Avatar icon="my" />
      <Avatar>N</Avatar>
    </>
  )
}
export default App;
```
:::

### Custom colors and background colors

Icon and letter types can have custom colors and background colors

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar className="demo-avatar" icon="my" color="#fff" bgColor="#FA2C19" />
      <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">U</Avatar>
    </>
  )
}
export default App;
```
:::

### Avatar with badge

:::demo
``` tsx
import React from "react";
import { Avatar, Badge } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Badge value="8">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon="my" shape="square" />
      </Badge>
    </>
  )
}
export default App;
```
:::

### Avatar group display

:::demo
``` tsx
import React from "react";
import { Avatar, AvatarGroup } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <AvatarGroup span="-4">
        <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon="my" />
        <Avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">
          U
        </Avatar>
      </AvatarGroup>

      <AvatarGroup maxCount="3" maxColor="#fff" maxBgColor="#498ff2">
        <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon="my" />
        <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon="my" />
      </AvatarGroup>
    </>
  )
}
export default App;
```
:::

### Avatar group to control hierarchy direction

:::demo
``` tsx
import React from "react";
import { Avatar, AvatarGroup } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <AvatarGroup maxCount="3" zIndex="right" maxContent="...">
        <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon="my" />
        <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon="my" />
      </AvatarGroup>
    </>
  )
}
export default App;
```
:::

### Click on the avatar to trigger the event

:::demo
``` tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  const activeAvatar = () => {
    console.log('Trigger click on avatar')
  }
  return (
    <>
      <Avatar icon="my" onActiveAvatar={activeAvatar} />
    </>
  )
}
export default App;
```
:::

### Prop

| Attribute     | Description                                                 | Type   | Default |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| size     | The size of the avatar,eg：`large`、`normal`、`small`,and numbers   | String | normal |
| shape    | The shape of avatar，eg：`square`、`round`           | String | round  |
| bgColor | The colors of Icon and letter types                   | String | #eee   |
| color    | The background colors of Icon and letter types                     | String | #666   |
| url      | The address of the image for an image avatar or image element       | String | -   |
| alt      | This attribute defines the alternative text describing the image    | String | -   |
| icon     | Custom icon type for an icon avatar, Refer to the name attribute of Icon component  | String | -     |

### avatarGroup
| Attribute     | Description                                                 | Type   | Default |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| maxCount     | Max avatars to show   | Number、String | - |
| maxContent  | When the number of avatars exceeds, a avatar folding element will appear，The content of this element can be `...`、`more`、`+N`。默认为 +N | 
| size         | The size of the avatar，eg：`large`、`normal`、`small`，supports direct input of numbers   | String | +N |
| shape        | The shape of avatar，eg：`square`、`round`            | String | round  |
| maxBgColor  | The colors of Icon and letter types                   | String | #eee   |
| maxColor    | The background colors of Icon and letter types                   | String | #666 |
| span         | Distance between avatars               | String | -8   |
| zIndex       | Hierarchy direction between avatar group，eg：`left`、`right` | String | left     |
### Events

| Event            | Description    | Type     | Arguments |
| ---------------- | ------------ | -------- | -------- |
| activeAvatar `v1.3.8(Abandon)` | Emitted when cell is clicked    | Function | event    |
| onActiveAvatar `v1.3.8` | Emitted when cell is clicked    | Function | event    |
| onError       | Handler when img load error   | Function | event    |