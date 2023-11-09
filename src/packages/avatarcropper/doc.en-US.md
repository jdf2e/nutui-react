# AvatarCropper Head cropping

## introduce

Used to cut the profile picture to create a new image.

## install

```tsx
import { AvatarCropper } from '@nutui/nutui-react';
```

## Code demonstration

### Grammar and Usage

Use the avatar component directly in the middle, and the image content will be replaced with the new one after cropping.

:::demo

```tsx
import React, { useState } from "react";
import { Avatar, AvatarCropper } from '@nutui/nutui-react';

const App = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
  )
  const cutImage = (data: any) => {
    setImageUrl(data)
  }
  return (
    <>
      <AvatarCropper onConfirm={cutImage}>
        <Avatar size="large" src={imageUrl} />
      </AvatarCropper>
    </>
  )
}
export default App;
```

:::

### Clipping region toolbar slots

Customize the clipping area toolbar, and toolbar-position controls the toolbar position

:::demo

```tsx
import React, { useState } from "react";
import { Avatar, AvatarCropper, Button } from '@nutui/nutui-react';
import { Refresh2, Retweet } from '@nutui/icons-react-taro'

const App = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
  )
  const cutImage = (data: any) => {
    setImageUrl(data)
  }
  return (
    <>
      <AvatarCropper
        toolbarPosition="top"
        editText="Modify"
        onConfirm={cutImage}
        toolbar={[
          <Button type="danger" key="cancel">
            Cancel
          </Button>,
          <Refresh2 key="reset" />,
          <Retweet key="rotate" />,
          <Button type="success" key="confirm">
            Confirm
          </Button>,
        ]}
        >
        <Avatar size="large" src={imageUrl} />
      </AvatarCropper>
    </>
  )
}
export default App;
```

:::

## AvatarCropper

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| max-zoom | Maximum zoom | `number` | `3` |
| space | The gap reserved on both sides of the clipping area | `number` | `20` |
| edit-text | The text content in the middle | `ReactNode \| string` | `编辑` |
| toolbar | Customize the clipping area toolbar, after setting this content | `ReactNode[]` | `[<Button type="danger" key="cancel">取消</Button>, <Button type="info" key="reset">重置</Button>,<Button type="warning" key="rotate">旋转</Button>,<Button type="success" key="confirm">确认</Button>]` |
| toolbar-position | Location of the toolbar in the clipping area. The optional value is：`top` `bottom` | `string` | `bottom` |
| onConfirm | Click Confirm to trigger after cropping | `(url: string) => void` | `-` |
| onCancel | Click cancel trigger | `-` | `-` |