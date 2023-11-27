# ShortPassword 短密碼

## 介紹

短密碼輸入框，可用於輸入密碼、短信驗證碼等

## 安裝

```tsx
import { ShortPassword } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react';

const App = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  return (
    <>
      <Cell title="基礎用法" onClick={() => setVisible1(true)} />
      <ShortPassword
        visible={visible1}
        value={value}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible1(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  )
}
export default App;

```

:::

### 顯示明文

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react';

const App = () => {
  const [visible2, setVisible2] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  return (
    <>
      <Cell title="顯示明文" onClick={() => setVisible2(true)} />
      <ShortPassword
        visible={visible2}
        value={value}
        plain
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible2(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
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
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react';
import { HeartFill1 } from '@nutui/icons-react';

const App = () => {
  const [visible3, setVisible3] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  return (
    <>
      <Cell title="顯示按鈕組" onClick={() => setVisible3(true)} />
      <ShortPassword
        visible={visible3}
        value={value}
        tips={
          <>
            <HeartFill1 width={11} height={11} />
            自定義提示語
          </>
        }
        hideFooter={false}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible3(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        onConfirm={() => setVisible3(false)}
        onCancel={() => setVisible3(false)}
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  )
}
export default App;

```

:::

### 自定義密碼長度4

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react';

const App = () => {
  const [visible4, setVisible4] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  return (
    <>
      <Cell title="自定義密碼長度: 4" onClick={() => setVisible4(true)} />
      <ShortPassword
        visible={visible4}
        value={value}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible4(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        length={4}
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
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
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react';

const App = () => {
  const [visible5, setVisible5] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  const onTips = () => {
    console.log("忘記密碼提示語事件回調")
  }
  return (
    <>
      <Cell title="忘記密碼提示語事件回調" onClick={() => setVisible5(true)} />
      <ShortPassword
        visible={visible5}
        value={value}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible5(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        onTips={() => onTips()}
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  )
}
export default App;

```

:::

### 自動聚焦

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ShortPassword, NumberKeyboard } from '@nutui/nutui-react';

const App = () => {
  const [visible6, setVisible6] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const onChange = (v: string) => {
    setValue((value) => value + v)
  }
  const onDelete = () => {
    setValue((value) => value.slice(0, -1))
  }
  return (
    <>
      <Cell title="自動聚焦" onClick={() => setVisible6(true)} />
      <ShortPassword
        visible={visible6}
        value={value}
        onFocus={() => setVisible(true)}
        onClose={() => {
          setVisible6(false)
          setValue('')
        }}
        onChange={(value) => setValue(value)}
        autoFocus
      />
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  )
}
export default App;

```

:::

## ShortPassword

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 密碼字符串 | `string` | `-` |
| visible | 是否展示短密碼框 | `boolean` | `false` |
| plain | 是否展示明文 | `boolean` | `false` |
| title | 標題 | `ReactNode` | `請輸入密碼` |
| description | 密碼框描述 | `ReactNode` | `您使用了虛擬資產，請進行驗證` |
| tips | 提示語 | `ReactNode` | `忘記密碼` |
| hideFooter | 是否隱藏底部按鈕 | `boolean` | `true` |
| length | 密碼長度，取值為4~6 | `number` | `6` |
| error | 錯誤信息提示 | `ReactNode` | `-` |
| autoFocus | 自動聚焦 | `boolean` | `false` |
| onChange | 輸入密碼時觸發事件 | `(value) => void` | `-` |
| onConfirm | 點擊確認時觸發事件 | `(value) => void` | `-` |
| onCancel | 點擊取消時觸發事件 | `() => void` | `-` |
| onClose | 點擊關閉圖標和遮罩時觸發事件 | `() => void` | `-` |
| onTips | 點擊忘記密碼時觸發事件 | `() => void` | `-` |
| onComplete | 輸入完成的回調 | `(value) => void` | `-` |
| onFocus | 輸入框聚焦 | `() => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-shortpassword-background-color | 背景顏色 | `rgba(245, 245, 245, 1)` |
| \--nutui-shortpassword-border-color | 邊框顏色 | `#ddd` |
| \--nutui-shortpassword-error | 錯誤提示字體顏色 | `$color-primary` |
| \--nutui-shortpassword-forget | 忘記密碼字體顏色 | `rgba(128, 128, 128, 1)` |