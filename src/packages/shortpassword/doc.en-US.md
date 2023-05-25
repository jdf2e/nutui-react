# ShortPassword

## Intro

Short password input box, which can be used to enter passwords, SMS verification codes, etc.

## Install

```ts
// react
import { ShortPassword } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

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
      <Cell title="Basic Usage" onClick={() => setVisible1(true)} />
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

### Display Plaintext

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
      <Cell title="Display Plaintext" onClick={() => setVisible2(true)} />
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

### Show Button Group

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
      <Cell title="显示按钮组" onClick={() => setVisible3(true)} />
      <ShortPassword
        visible={visible3}
        value={value}
        tips={
          <>
            <HeartFill1 width={11} height={11} />
            自定义提示语
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

### Custom Password Length

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
      <Cell title="Custom Password Length" onClick={() => setVisible4(true)} />
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

### Forget password callback

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
    console.log("Forget password callback")
  }
  return (
    <>
      <Cell title="Forget password callback" onClick={() => setVisible5(true)} />
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

### Auto Focus

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
      <Cell title="Auto Focus" onClick={() => setVisible6(true)} />
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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | password value | `string` | - |
| visible | Whether to show shortpassword | `boolean` | `false` |
| plain | Whether to show plaintext | `boolean` | `false` |
| title | title | `ReactNode` | `Please input a password` |
| description | description | `ReactNode` | `Verify` |
| tips | tips | `ReactNode` | `Forget password` |
| hideFooter | whether to hide the bottom button | `boolean` | `true` |
| length | ShortPassword lenght The value is 4~6 | `number` | `6` |
| error | Error message | `ReactNode` | - |
| autoFocus | Be focused when ShortPassword is displayed | `boolean` | `false` |
| onChange | Trigger event when password is entered | `(value) => void` | - |
| onConfirm | Trigger event when true is clicked | `(value) => void` | - |
| onCancel | Trigger an event when the popup layer is clicked or canceled | `() => void` | - |
| onClose | Trigger an event when the close icon is clicked | `() => void` | - |
| onTips | Trigger an event when the forget password is clicked | `() => void` | - |
| onComplete | Input complete callback | `(value) => void` | - |
| onFocus | input focus | `() => void` | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-shortpassword-background-color | backgroundColor | `rgba(245, 245, 245, 1)` |
| \--nutui-shortpassword-border-color | border color | `#ddd` |
| \--nutui-shortpassword-error | error color | `$primary-color` |
| \--nutui-shortpassword-forget | forget color | `rgba(128, 128, 128, 1)` |
