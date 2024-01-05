# AvatarCropper 头像裁剪

## 介绍

用来对头像进行裁剪生成一张新的图片。

## 安装

```tsx
import { AvatarCropper } from '@nutui/nutui-react-taro';
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
import { Refresh, Retweet } from '@nutui/icons-react-taro'

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
        editText="修改"
        onConfirm={cutImage}
        toolbar={[
          <Button type="danger" key="cancel">
            取消
          </Button>,
          <Refresh key="reset" />,
          <Retweet key="rotate" />,
          <Button type="success" key="confirm">
            确认
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

### 圆形裁剪

设置裁剪展示的形状，裁剪后还是方形的，需要在展示的地方设置圆角

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
      <AvatarCropper shape="round" onConfirm={cutImage}>
        <Avatar size="large" shape="round" src={imageUrl} />
      </AvatarCropper>
    </>
  )
}
export default App;
```

:::

## AvatarCropper

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxZoom | 最大缩放倍数 | `number` | `3` |
| space | 裁剪区域两边预留的间隙 | `number` | `10` |
| editText | 中间的文字内容 | `ReactNode \| string` | `编辑` |
| size-type | 所选的图片的尺寸： 可选值：`original` `compressed` | `Array` | `['original', 'compressed']` |
| source-type | 选择图片的来源： 可选值：`album` `camera` | `Array` | `['album', 'camera']` |
| toolbar | 自定义裁剪区域工具栏 | `ReactNode[]` | `[<Button type="danger" key="cancel">取消</Button>, <Button type="info" key="reset">重置</Button>,<Button type="warning" key="rotate">旋转</Button>,<Button type="success" key="confirm">确认</Button>]` |
| toolbarPosition | 裁剪区域工具栏位置,可选值为：`top` `bottom` | `string` | `bottom` |
| shape | 裁剪形状,可选值为：`square` `round` | `string` | `square` |
| onConfirm | 裁剪后点击确认触发 | `(url: string) => void` | `-` |
| onCancel | 点击取消触发 | `-` | `-` |