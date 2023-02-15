#  NumberKeyboard 数字键盘

### 介绍

虚拟数字键盘，用于输入支付密码的场景。

### 安装
```ts

import { NumberKeyboard } from '@nutui/nutui-react-taro';
```


## 代码演示

### 基础用法
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible,setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`输入：${number}`)
  }
  const onDelete = () => {
    Toast.text('删除')
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

### 带右侧栏键盘
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible,setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`输入：${number}`)
  }
  const onDelete = () => {
    Toast.text('删除')
  }
  return (
     <>
       <Cell
        title="带右侧栏键盘"
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

### 随机数键盘
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible,setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`输入：${number}`)
  }
  const onDelete = () => {
    Toast.text('删除')
  }
  return (
     <>
       <Cell
        title="随机数键盘"
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
### 带标题栏键盘
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible,setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`输入：${number}`)
  }
  const onDelete = () => {
    Toast.text('删除')
  }
  return (
     <>
       <Cell
        title="带标题栏键盘"
        isLink
        onClick={() => {
          setVisible(true)
        }}
       />
        <NumberKeyboard
        visible={visible}
        title="标题"
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
### 身份证键盘
:::demo
```tsx
import React, { useState } from "react";
import { Cell,NumberKeyboard,Toast } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible,setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.text(`输入：${number}`)
  }
  const onDelete = () => {
    Toast.text('删除')
  }
  return (
     <>
       <Cell
        title="身份证键盘"
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

| 字段 | 说明 | 类型 | 默认值 |
|----- | ----- | ----- | ----- |
| visible | 是否显示键盘 | Boolean | false | 
| title | 键盘标题 | String | - |
| type | 键盘模式  | String | `default`：默认样式 `rightColumn`：带右侧栏 |
| randomKeys | 随机数  | Boolean | false |
| customKey | 自定义键盘额外的键  | String [] | 数组形式最多支持添加2个,超出默认取前2项 |
| confirmText  | 自定义完成按钮文字，如"支付"，"下一步"，"提交"等 | String | 完成 |
| pop-class    | 自定义弹框类名     | String         | -             |


### Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| onChange  | 点击按键时触发                 | value: string |
| onDelete | 点击删除键时触发               | -             |
| onClose  | 点击关闭按钮或非键盘区域时触发  | -             |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
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
