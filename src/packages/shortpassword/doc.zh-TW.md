#  ShortPassword

### 介紹

短密碼輸入框，可用於輸入密碼、短信驗證碼等

### 安裝
```ts
// react
import { ShortPassword } from '@nutui/nutui-react';

```


## 代碼演示

### 基礎用法
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="基礎用法"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        modelValue={value}
        onClose={() => close()}
        onChange={(value) => setValue(value)}
       />
     </>
  )
}
export default App;

```
:::


### 顯示按鈕組
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const change = (value)=>{
     setValue(value)
  }
   const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="顯示按鈕組"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        modelValue={value}
        onClose={() => close()}
        noButton={false}
        onChange={(value) => setValue(value)}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
       />
     </>
  )
}
export default App;

```
:::

### 自定義密碼長度
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const change = (value)=>{
     setValue(value)
  }
   const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="自定義密碼長度"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        modelValue={value}
        onChange={(value) => setValue(value)}
        onClose={() => close()}
        length={4}
       />
     </>
  )
}
export default App;

```
:::
### 忘記密碼提示語事件回調
:::demo
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
   const onTips = () => {
    Toast.text('執行忘記密碼提示語')
  }
   const close = ()=>{
    setVisible(false)
    setValue('')
  }
  return (
     <>
       <Cell
        title="忘記密碼提示語事件回調"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
       <ShortPassword
        visible={visible}
        modelValue={value}
        onChange={(value) => setValue(value)}
        onClose={() => close()}
        onTips={() => onTips()}
       />
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
| modelValue         | 內容               | String｜Number | -                |
| visible        | 是否展示短密碼框                         | Boolean | false              |
| title                  | 標題                | String         | 請輸入密碼                   |
| desc                   | 密碼框描述          | String         | 您使用了虛擬資產，請進行驗證|
| tips                   | 提示語              | String         | 忘記密碼                     |
| closeOnClickOverlay | 是否點擊遮罩關閉    | Boolean        | true                         |
| noButton              | 是否隱藏底部按鈕    | Boolean        | true                         |
| length                 | 密碼長度，取值為4~6 | String｜Number | 6                            |
| errorMsg              | 錯誤信息提示        | String         | ''                           |
| autoFocus              | 自動聚焦        | Boolean         | false                           |

### Events

| 事件名 | 說明           | 回調參數     |
|--------|----------------|--------------|
| onChange   | 輸入密碼時觸發事件     |  value    |
| onOk       | 點擊確認時觸發事件     | value    |
| onCancel   | 點擊取消時觸發事件     | -    |
| onClose    | 點擊關閉圖標和遮罩時觸發事件 | -    |
| onTips    | 點擊忘記密碼時觸發事件 | -    |
| onComplete | 輸入完成的回調         | value    |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-shortpassword-background-color | `  rgba(245, 245, 245, 1)` |
| --nutui-shortpassword-border-color | `  #ddd` |
| --nutui-shortpassword-error | ` $primary-color` |
| --nutui-shortpassword-forget | `  rgba(128, 128, 128, 1)` |
