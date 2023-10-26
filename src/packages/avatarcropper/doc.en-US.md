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

const App = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
  )
  const avatarCropperRef = useRef(null)
  const cutImage = (data: any) => {
    setImageUrl(data)
  }
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  }
  const Toolbar = () => {
    return (
      <div style={styles}>
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.cancel()}
        >
          取消
        </Button>
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.reset()}
        >
          重置
        </Button>
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.rotate()}
        >
          旋转
        </Button>
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.confirm()}
        >
          确认
        </Button>
      </div>
    )
  }
  return (
    <>
      <AvatarCropper ref={avatarCropperRef} toolbar-position="top" edit-text="修改" onConfirm={cutImage} toolbar={<Toolbar />}>
        <Avatar size="large" src={imageUrl} />
      </AvatarCropper>
    </>
  )
}
export default App;
```

:::

## API

### AvatarCropper Props

| Attribute        | Description                                                                         | Type   | Default |
| ---------------- | ----------------------------------------------------------------------------------- | ------ | ------- |
| max-zoom         | Maximum zoom                                                                        | number | 3       |
| space            | The gap reserved on both sides of the clipping area                                 | number | 20      |
| toolbar-position | Location of the toolbar in the clipping area. The optional value is：`top` `bottom` | string | bottom  |
| edit-text        | The text content in the middle                                                      | string | 编辑    |
| cancel-text      | Cancel button text                                                                  | string | 取消    |
| cancel-confirm   | Confirm button text                                                                 | string | 确认    |
| toolbar         | After selecting the file, crop the bottom element of the pop-up window can be customized, and invoke the method of the component through ref                       |  ReactNode   |  - |
| onConfirm       | Click Confirm to trigger after cropping                    | Function(url: string) |  - |
| onCancel        | Click cancel trigger                  | -                |  - |


### AvatarCropper Ref

| Event   | Explain            |  type |
| ------- | ------------------ | ----- |
| cancel  | uncrop             | () => void |
| reset   | Reset to 0 degrees | () => void |
| rotate  | Rotate 90 degrees  | () => void |
| confirm | Definite cut       | () => void |
