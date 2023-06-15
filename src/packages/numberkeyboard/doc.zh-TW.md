# NumberKeyboard 數字鍵盤

## 介紹

虛擬數字鍵盤，用於輸入支付密碼的場景。

## 安裝

```tsx
import { NumberKeyboard } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`輸入：${number}`)
  }
  const onDelete = () => {
    Toast.show('刪除')
  }
  return (
    <>
      <Cell
        title="基礎用法"
        onClick={() => setVisible(true)}
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
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`輸入：${number}`)
  }
  const onDelete = () => {
    Toast.show('刪除')
  }
  return (
    <>
      <Cell
        title="帶右側欄鍵盤"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        type="rightColumn"
        custom={['.', 'x']}
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
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`輸入：${number}`)
  }
  const onDelete = () => {
    Toast.show('刪除')
  }
  return (
    <>
      <Cell
        title="隨機數鍵盤"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        random
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
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`輸入：${number}`)
  }
  const onDelete = () => {
    Toast.show('刪除')
  }
  return (
    <>
      <Cell
        title="帶標題欄鍵盤"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        title="標題"
        custom={['.']}
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
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`輸入：${number}`)
  }
  const onDelete = () => {
    Toast.show('刪除')
  }
  return (
    <>
      <Cell
        title="身份證鍵盤"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        custom={['X']}
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

### 透傳 Popup 屬性

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`enter:${number}`)
  }
  const onDelete = () => {
    Toast.show('delete')
  }
  return (
    <>
      <Cell
        title="Show IdNumber Keyboard"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
        duration={1}
        overlayClassName="number-keyboard-overlay"
        onOpen={() => {
          Toast.show('onOpen')
        }}
      />
    </>
  )
}
export default App;

```

:::

## NumberKeyboard

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否顯示鍵盤 | `boolean` | `false` |
| title | 鍵盤標題 | `ReactNode` | `-` |
| type | 鍵盤模式, default：默認樣式 rightColumn：帶右側欄 | `string` | `default` |
| random | 隨機數 | `boolean` | `false` |
| custom | 自定義鍵盤額外的鍵, 數組形式最多支持添加 2 個, 超出默認取前 2 項 | `string[]` | `-` |
| confirmText | 自定義完成按鈕文字，如"支付"，"下一步"，"提交"等 | `string` | `完成` |
| onChange | 點擊按鍵時觸發 | `(value: string) => void` | `-` |
| onDelete | 點擊刪除鍵時觸發 | `-` | `-` |
| onClose | 點擊關閉按鈕或非鍵盤區域時觸發 | `-` | `-` |
| onConfirm | 點擊確定按鈕時觸發 | `-` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-numberkeyboard-padding | 內邊距 | `0 0 22px 0` |
| \--nutui-numberkeyboard-background-color | 背景顏色 | `#f2f3f5` |
| \--nutui-numberkeyboard-header-height | 頭部高度 | `34px` |
| \--nutui-numberkeyboard-header-padding | 頭部內邊距 | `6px 0 0 0` |
| \--nutui-numberkeyboard-header-color | 頭部字體顏色 | `#646566` |
| \--nutui-numberkeyboard-header-font-size | 頭部字體大小 | `16px` |
| \--nutui-numberkeyboard-header-close-padding | 頭部完成按鈕內邊距 | `0 16px` |
| \--nutui-numberkeyboard-header-close-color | 頭部完成按鈕字體顏色 | `#576b95` |
| \--nutui-numberkeyboard-header-close-font-size | 頭部完成按鈕字體大小 | `14px` |
| \--nutui-numberkeyboard-header-close-background-color | 頭部完成按鈕背景顏色 | `transparent` |
| \--nutui-numberkeyboard-key-background-color | 按鍵背景顏色 | `#fff` |
| \--nutui-numberkeyboard-key-active-background-color | 按鈕激活背景顏色 | `#ebedf0` |
| \--nutui-numberkeyboard-key-height | 按鍵高度 | `48px` |
| \--nutui-numberkeyboard-key-line-height | 按鍵行高 | `1.5` |
| \--nutui-numberkeyboard-key-border-radius | 按鍵邊框 | `8px` |
| \--nutui-numberkeyboard-key-font-size | 按鍵字體大小 | `28px` |
| \--nutui-numberkeyboard-key-font-color | 按鍵字體顏色 | `#333` |
| \--nutui-numberkeyboard-key-confirm-font-size | 確認按鍵字體大小 | `16px` |
| \--nutui-numberkeyboard-key-confirm-font-color | 確認按鍵字體顏色 | `#fff` |
| \--nutui-numberkeyboard-key-confirm-background-color | 確認按鍵背景顏色 | `#1989fa` |