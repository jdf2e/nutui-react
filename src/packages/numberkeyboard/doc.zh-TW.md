#  NumberKeyboard

### 介紹

虛擬數字鍵盤，用於輸入支付密碼的場景。

### 安裝
```ts
// react
import { NumberKeyboard } from '@nutui/nutui-react';

```


## 代碼演示

### 基礎用法
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`輸入：${number}`)
  }
  const onDelete = () => {
    Toast.text('刪除')
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
        <NumberKeyboard
        visible={visible}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
      />
     </>
  )
}
export default App;

```
:::

### 帶右側欄鍵盤
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`輸入：${number}`)
  }
  const onDelete = () => {
    Toast.text('刪除')
  }
  return (
     <>
       <Cell
        title="帶右側欄鍵盤"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <NumberKeyboard
        visible={visible}
        type="rightColumn"
        customKey={['.', 'x']}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
      />
     </>
  )
}
export default App;

```
:::

### 隨機數鍵盤
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`輸入：${number}`)
  }
  const onDelete = () => {
    Toast.text('刪除')
  }
  return (
     <>
       <Cell
        title="隨機數鍵盤"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <NumberKeyboard
         visible={visible}
        randomKeys
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
      />
     </>
  )
}
export default App;

```
:::
### 帶標題欄鍵盤
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`輸入：${number}`)
  }
  const onDelete = () => {
    Toast.text('刪除')
  }
  return (
     <>
       <Cell
        title="帶標題欄鍵盤"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <NumberKeyboard
        visible={visible}
        title="標題"
        customKey={['.']}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
      />
     </>
  )
}
export default App;

```
:::
### 身份證鍵盤
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`輸入：${number}`)
  }
  const onDelete = () => {
    Toast.text('刪除')
  }
  return (
     <>
       <Cell
        title="身份證鍵盤"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <NumberKeyboard
        visible={visible}
        customKey={['X']}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
      />
     </>
  )
}
export default App;

```
:::



## API

### Props

| 字段 | 說明 | 類型 | 預設值           |
|----- | ----- | ----- | ----- |
| visible | 是否顯示鍵盤 | Boolean | false | 
| title | 鍵盤標題 | String | - |
| type | 鍵盤模式  | String | `default`：默認樣式 `rightColumn`：帶右側欄 |
| randomKeys | 隨機數  | Boolean | false |
| customKey | 自定義鍵盤額外的鍵  | String [] | 數組形式最多支持添加2個,超出默認取前2項 |
| confirmText  | 自定義完成按鈕文字，如"支付"，"下一步"，"提交"等 | String | 完成 |
| pop-class    | 自定義彈框類名     | String         | -             |


### Event

| 字段 | 說明 | 回調參數
|----- | ----- | -----
| onChange  | 點擊按鍵時觸發                 | value: string |
| onDelete | 點擊刪除鍵時觸發               | -             |
| onClose  | 點擊關閉按鈕或非鍵盤區域時觸發  | -             |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-numberkeyboard-padding | `  0 0 22px 0` |
| --nutui-numberkeyboard-background-color | `  #f2f3f5` |
| --nutui-numberkeyboard-header-height | `  34px` |
| --nutui-numberkeyboard-header-padding | `  6px 0 0 0` |
| --nutui-numberkeyboard-header-color | `  #646566` |
| --nutui-numberkeyboard-header-font-size | `  16px` |
| --nutui-numberkeyboard-header-close-padding | `  0 16px` |
| --nutui-numberkeyboard-header-close-color | `  #576b95` |
| --nutui-numberkeyboard-header-close-font-size | `  14px` |
| --nutui-numberkeyboard-header-close-background-color | `  transparent` |
| --nutui-numberkeyboard-key-background-color | `  #fff` |
| --nutui-numberkeyboard-key-active-background-color | `  #ebedf0` |
| --nutui-numberkeyboard-key-height | `  48px` |
| --nutui-numberkeyboard-key-line-height | `  1.5` |
| --nutui-numberkeyboard-key-border-radius | `  8px` |
| --nutui-numberkeyboard-key-font-size | `  28px` |
| --nutui-numberkeyboard-key-font-color | `  #333` |
| --nutui-numberkeyboard-key-finish-font-size | `  16px` |
| --nutui-numberkeyboard-key-finish-font-color | `  #fff` |
| --nutui-numberkeyboard-key-finish-background-color | `  #1989fa` |
