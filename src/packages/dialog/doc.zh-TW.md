# Dialog 對話框

## 介紹

模態對話框，在浮層中顯示，引導用戶進行相關操作，常用於消息提示、消息確認，或在當前頁面內完成特定的交互操作。

彈出框組件支持函數調用和組件調用兩種方式。

## 安裝

```tsx
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
            className: 'dialog-func',
            title: '基礎彈框',
            content: '支持函數調用和組件調用兩種方式。',
          });
        }} />
      <Cell title="無標題彈框、不鎖背景滾動" onClick={() => {
          Dialog.alert({
            content: '無標題彈框',
            confirmText: '確認',
            cancelText: '取消',
            lockScroll: false
          });
        }} 
      />
      <Cell title="提示彈框" onClick={() => {
          Dialog.alert({
              title: '提示',
              content: '支持函數調用和組件調用兩種方式。',
              hideCancelButton: true,
              confirmText: '確認'
          });
        }} 
      />
      <Cell title="底部按鈕 垂直布局 使用" onClick={() => {
          Dialog.alert({
            title: '提示',
            content: '支持函數調用和組件調用兩種方式。',
            footerDirection: 'vertical',
            confirmText: '確認',
            cancelText: '取消',
          });
        }} 
      />
      <Cell title="打開彈框 3s 後調用關閉方法" onClick={() => {
          const dialog = Dialog.confirm({
            content: '打開彈框 3s 後調用關閉方法',
            confirmText: '確認',
            cancelText: '取消',
          });
          setTimeout(() => {
            dialog.close()
          }, 3000);
        }} 
      />
      <Cell title="打開彈框 3s 後調用關閉方法" onClick={() => {
          const dialog = Dialog.confirm({
            content: '打開彈框 3s 後調用關閉方法',
          });
          setTimeout(() => {
            dialog.update({
              content: '打開彈框 3s 後調用關閉方法 我是更新',
            })
          }, 3000);
        }} 
      />
    </>
  )
}
export default App;
```

:::

### 標籤式使用

:::demo

```tsx
import React, {useState} from "react";
import { Cell,Dialog,Image } from '@nutui/nutui-react';
import { ArrowCornerLeft } from '@nutui/icons-react'

const App = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);
  return (
    <>
      <Cell title="基礎彈框" onClick={() => setVisible1(true)} />
      <Dialog 
        title="標籤式使用"
        visible={visible1}
        onConfirm={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}
      >
        如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
      </Dialog>
      <Cell title="底部按鈕 垂直布局 使用" onClick={() => setVisible2(true)} />
      <Dialog 
        title="標籤式使用"
        visible={visible2}
        footerDirection='vertical'
        onConfirm={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
      >
        如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
      </Dialog>
      <Cell title="底部 Footer 為 Button 時，點擊遮罩不關閉" onClick={() => setVisible2(true)} />
      <Dialog 
        title="底部 Footer 為 Button 時，點擊遮罩不關閉"
        visible={visible2}
        lockScroll={false}
        footerDirection='vertical'
        closeOnOverlayClick={false}
        onConfirm={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
      >
        如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
      </Dialog>
      <Cell title="無底部 Footer 區域" onClick={() => setVisible2(true)} />
      <Dialog 
        title="無底部 Footer 區域"
        visible={visible2}
        footer={null}
        onClose={() => {
          setVisible2(false)
        }}
      >
        如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
      </Dialog>
      <Cell title="點擊取消時，攔截" onClick={() => setVisible3(true)} />
      <Dialog 
        title="點擊取消時，攔截"
        visible={visible3}
        closeOnOverlayClick={false}
        beforeCancel={() => {
          console.log('stop close')
          return false
        }}
        onClose={() => {
          setVisible3(false)
        }}
      >
        如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
      </Dialog>
      <Cell
        title="頂部帶插圖"
        onClick={() => {
          setVisible7(true)
        }}
      />
      <Dialog
        className="test-dialog"
        title="頂部帶插圖"
        visible={visible7}
        header={
          <Image src="https://img13.360buyimg.com/imagetools/jfs/t1/219330/27/30033/11784/6544af3fF5c0fd98f/64c41bb05ef09189.png" />
        }
        onConfirm={() => setVisible7(false)}
        onCancel={() => setVisible7(false)}
      >
        如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
      </Dialog>
      <Cell
          title="頂部帶關閉按鈕"
          onClick={() => {
            setVisible8(true)
          }}
        />
        <Dialog
          className="test-dialog"
          title="頂部帶關閉按鈕"
          visible={visible8}
          closeIcon
          onConfirm={() => setVisible8(false)}
          onCancel={() => setVisible8(false)}
        >
          {translated.content}
        </Dialog>
        <Cell
          title="自定義頂部關閉按鈕"
          onClick={() => {
            setVisible9(true)
          }}
        />
        <Dialog
          className="test-dialog"
          title="自定義頂部關閉按鈕"
          visible={visible9}
          closeIcon={<ArrowCornerLeft width="16px" height="16px" />}
          closeIconPosition="top-left"
          onConfirm={() => setVisible9(false)}
          onCancel={() => setVisible9(false)}
          style={{
            '--nutui-dialog-close-top': '10px',
            '--nutui-dialog-close-left': '10px',
            '--nutui-dialog-close-color': 'red',
          }}
        >
          {translated.content}
        </Dialog>
    </>
  )
}
export default App;
```

:::

## Dialog

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 對話框是否可見 | `boolean` | `-` |
| header | 自定義頁頭，傳入 null 則不顯示 | `ReactNode` | `-` |
| title | 標題 | `ReactNode` | `-` |
| content | 對話框的內容，適用於函數式調用 | `ReactNode` | `-` |
| footer | 自定義頁腳，傳入 null 則不顯示 | `ReactNode` | `-` |
| confirmText | 確認按鈕文案 | `ReactNode` | `確定` |
| cancelText | 取消按鈕文案 | `ReactNode` | `取消` |
| overlay | 是否展示遮罩 | `boolean` | `true` |
| hideConfirmButton | 是否隱藏確定按鈕 | `boolean` | `false` |
| hideCancelButton | 是否隱藏取消按鈕 | `boolean` | `false` |
| disableConfirmButton | 禁用確定按鈕 | `boolean` | `false` |
| closeIcon | 關閉按鈕 | `boolean` \| `ReactNode` | `false` |
| closeIconPosition | 關閉按鈕位置 | `top-left` \| `top-right` | `top-right` |
| closeOnOverlayClick | 點擊蒙層是否關閉對話框 | `boolean` | `true` |
| footerDirection | 使用橫縱方向 可選值 horizontal、vertical | `string` | `horizontal` |
| lockScroll | 背景是否鎖定 | `boolean` | `true` |
| beforeCancel | 取消前回調，點擊取消時觸發 | `() => boolean` | `-` |
| beforeClose | 關閉前回調 | `() => boolean` | `-` |
| onConfirm | 確定按鈕回調 | `(e?: MouseEvent) => Promise \| void` | `-` |
| onCancel | 取消按鈕回調 | `() => void` | `-` |
| onClose | 關閉回調，任何情況關閉彈窗都會觸發 | `() => void` | `-` |
| onClick | 點擊自身回調 | `() => void` | `-` |
| onOverlayClick | 點擊蒙層觸發 | `() => void` | `-` |

對於**指令式**創建出來的 Dialog，**並不會感知父組件的重渲染和其中 state 的更新**，因此下面這種寫法是錯誤的：

```tsx
import React from 'react'
import { Dialog, Input, Button } from '@nutui/nutui-react'

export default function App() {
  const [captcha, setCaptcha] = useState<string>("");
  const showCaptcha = () => {
    return Dialog.confirm({
      content: (
          <Input
            placeholder="請輸入驗證碼"
            value={captcha} // App 中 captcha 的更新是不會傳遞到 Dialog 中的
            onChange={(v) => {
              setCaptcha(v)
            }}
          />
      )
    });
  };
  return (
    <div>
      <Button onClick={showCaptcha}>Show</Button>
    </div>
  );
}
```

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-dialog-z-index | 對話框的z-index | `$mask-content-z-index` |
| \--nutui-dialog-width | 對話框寬度 | `295px` |
| \--nutui-dialog-padding | 對話框padding | `24px` |
| \--nutui-dialog-min-height | 對話框最小高度 | `156px` |
| \--nutui-dialog-border-radius | 對話框圓角 | `16px` |
| \--nutui-dialog-content-margin | 對話框內容 margin | `5px 0 24px 0` |
| \--nutui-dialog-content-max-height | 對話框內容最大高度 | `268px` |
| \--nutui-dialog-content-line-height | 對話框內容行高 | `20px` |
| \--nutui-dialog-content-text-align | 對話框內容文本對齊方式 | `left` |
| \--nutui-dialog-header-font-size | 對話框標題字體大小 | `$font-size-large` |
| \--nutui-dialog-header-font-weight | 對話框標題字重 | `normal` |
| \--nutui-dialog-footer-justify-content | 對話框底部按鈕排布 | `space-around` |
| \--nutui-dialog-footer-button-min-width | 對話框底部按鈕最小寬度 | `117px` |
| \--nutui-dialog-footer-cancel-margin-right | 對話框取消按鈕的margin-right | `12px` |
| \--nutui-dialog-footer-ok-max-width | 對話框確認按鈕的最大寬度 | `128px` |
| \--nutui-dialog-vertical-footer-ok-margin-top | 對話框底部按鈕縱向排布時的margin值 | `5px` |
| \--nutui-dialog-close-width | 對話框關閉按鈕的寬度 | `18px` |
| \--nutui-dialog-close-height | 對話框關閉按鈕的高度 | `18px` |
| \--nutui-dialog-close-color | 對話框關閉按鈕的顏色 | `#8c8c8c` |
| \--nutui-dialog-close-top | 對話框關閉按鈕的top值 | `16px` |
| \--nutui-dialog-close-left | 對話框關閉按鈕的left值 | `16px` |
| \--nutui-dialog-close-right | 對話框關閉按鈕的right值 | `16px` |

