#  Dialog 對話框

### 介紹

模態對話框，在浮層中顯示，引導用戶進行相關操作，常用於消息提示、消息確認，或在當前頁面內完成特定的交互操作。
彈出框組件支持函數調用和組件調用兩種方式。

### 安裝

```js
import { Dialog } from '@nutui/nutui-react'
```


## 代碼演示

### 函數式調用

:::demo

```tsx
import React from "react";
import { Cell,Dialog } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Cell title="基礎彈框" onClick={() => {
        Dialog.alert({
            title: '基礎彈框',
            content: '支持函數調用和組件調用兩種方式。'
        });
        }} />
      <Cell title="無標題彈框" onClick={() => {
            Dialog.alert({
            content: '無標題彈框'
        });
        }} />
      <Cell title="提示彈框" onClick={() => {
        Dialog.alert({
            title: '溫馨提示',
            content: '支持函數調用和組件調用兩種方式。',
            noCancelBtn: true
        });
        }} />
      <Cell title="底部按鈕 垂直調用" onClick={() => {
        Dialog.alert({
            title: '溫馨提示',
            content: '支持函數調用和組件調用兩種方式。',
            footerDirection: 'vertical'
        });
        }} />
    </>
  )
}
export default App;
```

:::

### 組件調用

:::demo

```tsx
import React, {useState} from "react";
import { Cell,Dialog } from '@nutui/nutui-react';

const App = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <>
    <Cell title="基礎彈框" onClick={() => setVisible1(true)} />
    <Dialog 
        title="組件調用"
        visible={visible1}
        onOk={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}
    >
        如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
    </Dialog>
    <Cell title="底部按鈕 垂直調用" onClick={() => setVisible2(true)} />
    <Dialog 
        title="組件調用"
        visible={visible2}
        lockScroll
        footerDirection='vertical'
        onOk={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
    >
        如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
    </Dialog>
    </>
  )
}
export default App;
```

:::

## API

### Props

| 參數         | 說明                             | 類型   | 默認值           |
|--------------|----------------------------------|--------|------------------|
| visible         |對話框是否可見             | boolean | -                |
| title        | 標題                         | ReactNode | -                |
| content         | 對話框的內容，適用於函數式調用 | ReactNode | -                |
| footer | 自定義頁腳，傳入 null 則不顯示     | ReactNode | - |
| okText          | 確認按鈕文案                        | ReactNode | '確定'              |
| cancelText          | 取消按鈕文案                        | ReactNode | '取消'              |
| mask          | 是否展示遮罩                        | boolean | true              |
| noOkBtn          | 是否隱藏確定按鈕                        | boolean | false              |
| noCancelBtn          | 是否隱藏取消按鈕                        | boolean | false              |
| okBtnDisabled          | 禁用確定按鈕                        | boolean | false              |
| noFooter          | 是否隱藏底部按鈕欄                        | boolean | false              |
| closeOnClickOverlay          | 點擊蒙層是否關閉對話框                        | boolean | true              |
| cancelAutoClose          | 取消按鈕是否默認關閉彈窗                        | boolean | true              |
| textAlign          | 文字對齊方向，可選值同 css 的 text-align                        | string | 'center'              |
| footerDirection          | 使用橫縱方向 可選值 horizontal、vertical                        | string | 'horizontal'              |
| lockScroll          | 背景是否鎖定                        | boolean | false              |

### Events

| 事件名 | 說明           | 回調參數     |
|--------|----------------|--------------|
| onOk  | 確定按鈕回調 | (e?: MouseEvent) => Promise | void |
| onCancel  | 取消按鈕回調 | () => void |
| onClosed  | 關閉回調，任何情況關閉彈窗都會觸發 | () => void |
| onClickSelf  | 點擊自身回調 | () => void |
