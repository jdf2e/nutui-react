#  ShortPassword 短密码

### 介绍

短密码输入框，可用于输入密码、短信验证码等

### 安装
```js
import { ShortPassword } from '@nutui/nutui-react';
```


## 代码演示

### 基础用法
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
  return (
     <>
       <Cell
        title="基础用法"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        modelValue={value}
        onClose={() => setVisible(false)}
        change={(value) => change(value)}
       />
     </>
  )
}
export default App;

```

### 显示按钮组
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const change = (value)=>{
     setValue(value)
  }
  return (
     <>
       <Cell
        title="显示按钮组"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        onClose={() => setVisible(false)}
        noButton={false}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
       />
     </>
  )
}
export default App;

```

### 自定义密码长度4
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const change = (value)=>{
     setValue(value)
  }
  return (
     <>
       <Cell
        title="自定义密码长度4"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <ShortPassword
        visible={visible}
        onClose={() => setVisible(false)}
        length={4}
       />
     </>
  )
}
export default App;

```
### 忘记密码提示语事件回调
```tsx
import React, { useState } from "react";
import { Cell,ShortPassword,Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  const change = (value)=>{
     setValue(value)
  }
   const onTips = () => {
    Toast.text('执行忘记密码提示语')
  }
  return (
     <>
       <Cell
        title="忘记密码提示语事件回调"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
       <ShortPassword
        visible={visible}
        onClose={() => setVisible(false)}
        onTips={() => onTips()}
       />
     </>
  )
}
export default App;

```



## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| modelValue         | 密码初始值               | String｜Number | -                |
| visible        | 是否展示短密码框                         | Boolean | false              |
| title                  | 标题                | String         | 请输入密码                   |
| desc                   | 密码框描述          | String         | 您使用了虚拟资产，请进行验证 |
| tips                   | 提示语              | String         | 忘记密码                     |
| closeOnClickOverlay | 是否点击遮罩关闭    | Boolean        | true                         |
| noButton              | 是否隐藏底部按钮    | Boolean        | true                         |
| length                 | 密码长度，取值为4~6 | String｜Number | 6                            |
| errorMsg              | 错误信息提示        | String         | ''                           |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change   | 输入密码时触发事件     |  当前输入框值value    |
| onOk       | 点击确实时触发事件     | 当前输入框值value    |
| onCancel   | 点击取消时触发事件     | -    |
| onClose    | 点击关闭图标和遮罩时触发事件 | -    |
| onTips    | 点击忘记密码时触发事件 | -    |
| complete | 输入完成的回调         | 当前输入框值value    |
