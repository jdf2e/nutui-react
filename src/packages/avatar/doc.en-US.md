# Avatar

## Intro

Avatars can be used to represent people or objects. It supports images, Icons, or letters.

## Install

```ts
import { Avatar } from '@nutui/nutui-react';
```

## Demo

### Basic usage

Support three sizes：small、normal、large

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar
        size="large"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
      <Avatar
        size="normal"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
      <Avatar
        size="small"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
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

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Avatar icon={<My />} shape="square" />
      <Avatar icon={<My />} shape="round" />
    </>
  )
}
export default App;
```

:::

### Type

Support three types：picture、icon、letter

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
      <Avatar icon={<My />} />
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

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Avatar
        className="demo-avatar"
        color="#fff"
        background="#FA2C19"
        icon={<My />}
      />
      <Avatar color="rgb(245, 106, 0)" background="rgb(253, 227, 207)">U</Avatar>
    </>
  )
}
export default App;
```

:::

### Avatar with badge

:::demo

```tsx
import React from "react";
import { Avatar, Badge } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Badge value="8">
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon={<My />} shape="square" />
      </Badge>
    </>
  )
}
export default App;
```

:::

### Avatar group display

:::demo

```tsx
import React from "react";
import { Avatar, AvatarGroup } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <AvatarGroup gap="-4">
        <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" background="rgb(253, 227, 207)">
          U
        </Avatar>
      </AvatarGroup>

      <AvatarGroup max="3" maxColor="#fff" maxBackground="#498ff2">
        <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" background="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon={<My />} />
      </AvatarGroup>
    </>
  )
}
export default App;
```

:::

### Avatar group to control hierarchy direction

:::demo

```tsx
import React from "react";
import { Avatar, AvatarGroup } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <AvatarGroup max="3" level="right" maxContent="...">
        <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" background="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon={<My />} />
      </AvatarGroup>
    </>
  )
}
export default App;
```

:::

### Click on the avatar to trigger the event

:::demo

```tsx
import React from "react";
import { Avatar, Toast } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  const activeAvatar = () => {
    Toast.show('触发点击头像')
  }
  return (
    <>
      <Avatar icon={<My />} onClick={activeAvatar} />
    </>
  )
}
export default App;
```

:::

## Avatar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| size | The size of the avatar | `large` \| `normal` \| `small` \| `numbers` | `-` |
| shape | The shape of avatar | `round` \| `square` | `round` |
| background | The colors of Icon and letter types | `string` | `#eee` |
| color | The background colors of Icon and letter types | `string` | `#666` |
| fit | The fill mode of the image | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` \| `cover` | `-` |
| src | The address of the image for an image avatar or image element | `string` | `-` |
| alt | This attribute defines the alternative text describing the image | `string` | `-` |
| icon | Custom icon type for an icon avatar | `ReactNode` | `-` |
| onClick | Emitted when cell is clicked | `(e: MouseEvent) => void` | `-` |
| onError | Handler when img load error | `() => void` | `-` |

## AvatarGroup

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| max | Max avatars to show | `string` \| `number`  | `-` |
| maxContent | When the number of avatars exceeds, a avatar folding element will appear，The content of this element can be ...、more、+N。 | `string` | `-` |
| size | The size of the avatar，supports direct input of numbers | `large` \| `normal`  \| `small`  | `-` |
| shape | The shape of avatar | `string` \| `round`  | `-` |
| maxBackground | The colors of Icon and letter types | `string` | `#eee` |
| maxColor | The background colors of Icon and letter types | `string` | `#666` |
| gap | Distance between avatars | `string` | `-8` |
| level | Hierarchy direction between avatar group | `left` \| `right`  | `left` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-avatar-square | The rounded corners of square avatars | `5px` |
| \--nutui-avatar-large-width | The width of the large avatar | `60px` |
| \--nutui-avatar-large-height | The height of the large avatar | `60px` |
| \--nutui-avatar-small-width | Small avatar width | `32px` |
| \--nutui-avatar-small-height | The height of small avatars | `32px` |
| \--nutui-avatar-normal-width | The width of a normal size avatar | `40px` |
| \--nutui-avatar-normal-height | Height of normal size avatar | `40px` |