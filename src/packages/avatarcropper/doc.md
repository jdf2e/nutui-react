# AvatarCropper 头像剪切

## 介绍

用来对头像进行剪切生成一张新的图片。

## 安装

```tsx
import { AvatarCropper } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

中间直接使用avatar组件，裁剪后图片内容会被替换为新的。

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

### 裁剪区域toolbar插槽

自定义裁剪区域工具栏，toolbar-position控制工具栏位置

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

## AvatarCropper

### Props

| 参数             | 说明                                        | 类型   | 默认值 |
| ---------------- | ------------------------------------------- | ------ | ------ |
| maxZoom         | 最大缩放倍数                                | `number` | `3`      |
| space            | 裁剪区域两边预留的间隙                      | `number` | `10`     |
| toolbarPosition | 裁剪区域工具栏位置,可选值为：`top` `bottom` | `string` | `bottom` |
| editText        | 中间的文字内容                              | `string` | `编辑`   |
| cancelText      | 取消按钮的文字                              | `string` | `取消`   |
| cancelConfirm   | 确认按钮的文字                              | `string` | `确认`   |
| toolbar         | 自定义裁剪区域工具栏                       |  `ReactNode`   |  `-` |
| onConfirm       | 裁剪后点击确认触发                    | `(url: string) => void` |  `-` |
| onCancel        | 点击取消触发                          | `-`                |  `-` |

### Ref

| 事件名  | 说明      |  类型 |
| ------- | --------- | ----- |
| cancel  | 取消裁剪  | `() => void` |
| reset   | 重置为0度 | `() => void` |
| rotate  | 旋转90度  | `() => void` |
| confirm | 确定裁剪  | `() => void` |
