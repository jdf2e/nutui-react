# AvatarCropper 头像剪裁

## 介紹

用來對頭像進行剪裁生成一張新圖片。

## 安裝

```tsx
import { AvatarCropper } from '@nutui/nutui-react';
```

## 代码演示

### 基礎用法

中間直接使用 avatar 組件，裁剪後圖片內容會被替換為新的。

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

### 裁剪區域工具欄插槽

自定義裁剪區域工具欄，toolbar-position 控制工具欄位置

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
        editText="修改"
        onConfirm={cutImage}
        toolbar={[
          <Button type="danger" key="cancel">
            取消
          </Button>,
          <Refresh2 key="reset" />,
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

## AvatarCropper

### Props

| 參數 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| maxZoom | 最大縮放倍數 | `number` | `3` |
| space | 裁剪區域兩邊預留的間隙 | `number` | `10` |
| toolbarPosition | 裁剪區域工具欄位置,可選值為：`top` `bottom` | `string` | `bottom` |
| editText | 中間的文字內容 | `ReactNode \| string` | `編輯` |
| toolbar | 自定義裁剪區域工具欄 | `ReactNode[]` | `[<Button type="danger" key="cancel">取消</Button>, <Button type="info" key="reset">重置</Button>,<Button type="warning" key="rotate">旋转</Button>,<Button type="success" key="confirm">确认</Button>]` |
| onConfirm | 裁剪後點擊確認觸發 | `(url: string) => void` | `-` |
| onCancel | 點擊取消觸發 | `-` | `-` |