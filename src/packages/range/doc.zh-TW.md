# Range 区间选择器

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 安装

```javascript
// react
import { Range } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { Range, Cell } from '@nutui/nutui-react';

const App = () => {
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
            <Range modelValue={40} />
        </Cell>
    </>
    )
};

export default App;
```
:::


### 自定义描述

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const [value, SetValue] = useState(40)
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
        SetValue(value)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
           <Range
            modelValue={value}
            minDesc="0%"
            maxDesc="100%"
            curValueDesc={`${value}%`}
            onChange={(value) => {
              change(value)
            }}
          />
        </Cell>
    </>
    )
};
export default App;
```
:::
### 双滑块

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const [value0, SetValue0] = useState([30, 60])
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
        SetValue0(value)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            range
            modelValue={value0}
            onChange={(value) => {
                change(value)
            }}
        />
        </Cell>
    </>
    )
};
export default App;
```
:::

### 指定范围

:::demo

```tsx
import  React from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={0}
            max={10}
            min={-10}
            onChange={(value) => {
                change(value)
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::

### 设置步长

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const [value1, SetValue1] = useState(40)
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
        SetValue1(value)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={value1}
            step={5}
            onChange={(value: any) => {
                change(value, 'value1')
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::


### 隐藏范围

:::demo

```tsx
import  React  from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={30}
            hiddenRange
            onChange={(value: any) => {
                change(value)
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::


### 隐藏标签

:::demo

```tsx
import  React from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={20}
            hiddenTag
            onChange={(value: any) => {
                change(value)
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::


### 禁用

:::demo

```tsx
import  React from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={50}
            disabled
            onChange={(value: any) => {
                change(value)
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::

### 自定义样式

:::demo

```tsx
import  React from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={40}
            inactiveColor="rgba(163,184,255,1)"
            buttonColor="rgba(52,96,250,1)"
            activeColor="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
            onChange={(value: number) => {
                change(value)
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::


### 自定义按钮

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';
import "./demo.scss"

const App = () => {
    const [value2, SetValue2] = useState(60)
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
        SetValue2(value)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            modelValue={value2}
            button={<div className="range-custom-button">{value2}</div>}
            onChange={(value: number) => {
                change(value, 'value2')
            }}
            />
        </Cell>
    </>
    )
};
export default App;
```
:::

### 垂直方向

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const [value3, SetValue3] = useState(20)
    const [value4, SetValue4] = useState([20, 80])
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
        switch (name) {
        case 'value3':
            SetValue3(value)
            break
        case 'value4':
            SetValue4(value)
            break
        default:
            break
        }
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    const verticalStyle = {
        height: '180px',
        padding: '10px',
    }
    return (
    <Cell style={verticalStyle}>
        <div style={{ width: '150px' }}>
        <Range
            modelValue={value3}
            vertical
            onChange={(value: number) => {
               change(value, 'value3')
            }}
        />
        </div>
        <div style={{ width: '150px' }}>
        <Range
            modelValue={value4}
            vertical
            range
            onChange={(value: number) => {
               change(value, 'value4')
            }}
        />
        </div>
    </Cell>
    )
};
export default App;
```
:::

### 刻度标记

:::demo

```tsx
import  React, {useState} from "react";
import { Range,Cell,Toast } from '@nutui/nutui-react';

const App = () => {
    const [value5, SetValue5] = useState(60)
    const [value6, SetValue6] = useState([20, 80])
    const [value7, SetValue7] = useState(60)
    const [value8, SetValue8] = useState([20, 80])
    const [marks, SetMarks] = useState({
        0: 0,
        20: 20,
        40: 40,
        60: 60,
        80: 80,
        100: 100,
    })
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
        switch (name) {
            case 'value5':
                SetValue5(value)
                break
            case 'value6':
                SetValue6(value)
                break
            case 'value7':
                SetValue7(value)
                break
            case 'value8':
                SetValue8(value)
                break
            default:
                break
        }
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    const verticalStyle = {
        height: '180px',
        padding: '10px',
    }
    return (
    <>
        <Cell style={cellStyle}>
          <Range
            modelValue={value5}
            hiddenRange
            marks={marks}
            onChange={(value: number) => {
              change(value, 'value5')
            }}
          />
        </Cell>
        <Cell style={cellStyle}>
          <Range
            modelValue={value6}
            marks={marks}
            range
            onChange={(value: number) => {
              change(value, 'value6')
            }}
          />
        </Cell>
        <Cell style={verticalStyle}>
          <Range
            modelValue={value7}
            vertical
            hiddenRange
            marks={marks}
            onChange={(value: number) => {
              change(value, 'value7')
            }}
          />
          <Range
            modelValue={value8}
            vertical
            marks={marks}
            range
            onChange={(value: number) => {
              change(value, 'value8')
            }}
          />
        </Cell>
    </>
    )
};
export default App;
```
:::

## API

### Props

| 参数          | 说明                 | 类型             | 默认值                   |
| ------------- | ------------------- | ---------------- | ------------------------ |
| modelValue    | 当前进度百分比     | number \| number[] | `0`                      |
| range         | 是否开启双滑块模式 | boolean          | `false`                  |
| max           | 最大值             | number \| string   | `100`                    |
| min           | 最小值             | number \| string   | `0`                      |
| maxDesc`v1.3.12`     | 最大值描述          | number \| string   | -                    |
| minDesc`v1.3.12`     | 最小值描述          | number \| string   | -                      |
| curValueDesc`v1.3.12` | 当前值描述          | number \| string   | -                    |
| step          | 步长               | number \| string   | `1`                      |
| disabled      | 是否禁用滑块       | boolean          | `false`                  |
| vertical`v1.2.2` | 是否竖向展示 | boolean | `false` |
| hiddenRange   | 是否隐藏范围值     | boolean          | `false`                  |
| hiddenTag     | 是否隐藏标签       | boolean          | `false`                  |
| activeColor   | 进度条激活态颜色   | string           | `rgba(250, 44, 25, 1)`   |
| inactiveColor | 进度条非激活态颜色 | string           | `rgba(255, 163, 154, 1)` |
| buttonColor   | 按钮颜色           | string           | `rgba(250, 44, 25, 1)`   |
| marks`v1.2.2` | 刻度标示| Object{key: number}    | `{}` |

### Events

| 事件名    | 说明                     | 回调参数        |
| --------- | ------------------------ | --------------- |
| onChange `v1.3.8`   | 进度变化且结束拖动后触发 | value: 当前进度 |
| onDragStart `v1.3.8` | 开始拖动时触发           | -               |
| onDragEnd `v1.3.8`  | 结束拖动时触发           | -               |

### Slots

| 名称   | 说明           |
| ------ | -------------- |
| button | 自定义滑动按钮 |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-range-tip-font-color | `$gray1` |
| --nutui-range-bg-color | `rgba(#fa2c19, 0.5)` |
| --nutui-range-bg-color-tick | `#fa958c` |
| --nutui-range-bar-btn-bg-color | `$white` |
| --nutui-range-bar-btn-width | `24px` |
| --nutui-range-bar-btn-height | `24px` |
| --nutui-range-bar-btn-border | `1px solid $primary-color` |
