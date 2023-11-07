# NumberKeyboard 数字键盘

## 介绍

虚拟数字键盘，用于输入支付密码的场景。

## 安装

```tsx
import { NumberKeyboard } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`输入：${number}`)
  }
  const onDelete = () => {
    Toast.show('删除')
  }
  return (
    <>
      <Cell
        title="基础用法"
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

### 带右侧栏键盘

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`输入：${number}`)
  }
  const onDelete = () => {
    Toast.show('删除')
  }
  return (
    <>
      <Cell
        title="带右侧栏键盘"
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

### 随机数键盘

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`输入：${number}`)
  }
  const onDelete = () => {
    Toast.show('删除')
  }
  return (
    <>
      <Cell
        title="随机数键盘"
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

### 带标题栏键盘

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`输入：${number}`)
  }
  const onDelete = () => {
    Toast.show('删除')
  }
  return (
    <>
      <Cell
        title="带标题栏键盘"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard
        visible={visible}
        title="标题"
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

### 身份证键盘

:::demo

```tsx
import React, { useState } from "react";
import { Cell, NumberKeyboard, Toast } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    Toast.show(`输入：${number}`)
  }
  const onDelete = () => {
    Toast.show('删除')
  }
  return (
    <>
      <Cell
        title="身份证键盘"
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

### 透传 Popup 属性

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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示键盘 | `boolean` | `false` |
| title | 键盘标题 | `ReactNode` | `-` |
| type | 键盘模式, default：默认样式 rightColumn：带右侧栏 | `'default' \| 'rightColumn'` | `default` |
| random | 随机数 | `boolean` | `false` |
| custom | 自定义键盘额外的键, 数组形式最多支持添加 2 个, 超出默认取前 2 项 | `string[]` | `-` |
| confirmText | 自定义完成按钮文字，如"支付"，"下一步"，"提交"等 | `string` | `完成` |
| onChange | 点击按键时触发 | `(value: string) => void` | `-` |
| onDelete | 点击删除键时触发 | `-` | `-` |
| onClose | 点击关闭按钮或非键盘区域时触发 | `-` | `-` |
| onConfirm | 点击确定按钮时触发 | `-` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-numberkeyboard-padding | 内边距 | `0 0 22px 0` |
| \--nutui-numberkeyboard-header-close-padding | 头部完成按钮内边距 | `0 16px` |
| \--nutui-numberkeyboard-header-close-color | 头部完成按钮字体颜色 | `#576b95` |
| \--nutui-numberkeyboard-header-close-font-size | 头部完成按钮字体大小 | `14px` |
| \--nutui-numberkeyboard-header-close-background-color | 头部完成按钮背景颜色 | `transparent` |
| \--nutui-numberkeyboard-key-background-color | 按键背景颜色 | `#fff` |
| \--nutui-numberkeyboard-key-active-background-color | 按钮激活背景颜色 | `#ebedf0` |
| \--nutui-numberkeyboard-wrapper-background-color | 按键容器背景色 | `$color-background-sunken` |
| \--nutui-numberkeyboard-key-border | 按键边框 | `none` |
| \--nutui-numberkeyboard-key-height | 按键高度 | `48px` |
| \--nutui-numberkeyboard-key-line-height | 按键行高 | `1.5` |
| \--nutui-numberkeyboard-key-border-radius | 按键边框圆角 | `8px` |
| \--nutui-numberkeyboard-key-font-size | 按键字体大小 | `28px` |
| \--nutui-numberkeyboard-key-font-color | 按键字体颜色 | `#333` |
| \--nutui-numberkeyboard-key-confirm-font-size | 确认按键字体大小 | `16px` |
| \--nutui-numberkeyboard-key-confirm-font-color | 确认按键字体颜色 | `#fff` |
| \--nutui-numberkeyboard-key-confirm-background-color | 确认按键背景颜色 | `#1989fa` |
| \--nutui-numberkeyboard-background-color | 键盘容器背景色 | `$color-background` |