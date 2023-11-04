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
import React, { useState, useRef } from "react";
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
          旋轉
        </Button>
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.confirm()}
        >
          確認
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

| 參數             | 說明                                        | 類型   | 預設值 |
| ---------------- | ------------------------------------------- | ------ | ------ |
| maxZoom         | 最大縮放倍數                                | `number` | `3`      |
| space            | 裁剪區域兩邊預留的間隙                      | `number` | `10`     |
| toolbarPosition | 裁剪區域工具欄位置,可選值為：`top` `bottom` | `string` | `bottom` |
| editText        | 中間的文字內容                              | `string` | `編輯`   |
| cancelText      | 取消按鈕的文字                              | `string` | `取消`   |
| cancelConfirm   | 確認按鈕的文字                              | `string` | `確認`   |
| toolbar         | 自定義裁剪區域工具欄，設置該內容後，屬性`cancelText``cancelConfirm`將失效  |  `ReactNode`   |  `-` |
| onConfirm       | 裁剪後點擊確認觸發                    | `(url: string) => void` |  `-` |
| onCancel        | 點擊取消觸發                          | `-`                |  `-` |

### Ref

| 事件名  | 說明      |  類型 |
| ------- | --------- | ----- |
| cancel  | 取消裁剪  | `() => void` |
| reset   | 重置為0度 | `() => void` |
| rotate  | 旋轉90度  | `() => void` |
| confirm | 確定裁剪  | `() => void` |
