---
sidebar_class_name: hasIcon
---

# Steps 步骤条

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

## 引入

```tsx
import { Steps } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Steps, Step, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <Steps value={val}>
        <Step value={1} title="步骤一" />
        <Step value={2} title="步骤二" />
        <Step value={3} title="步骤三" />
      </Steps>
      <View style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep()}>
          下一步
        </Button>
      </View>
    </>
  )
}
export default Demo1
```

### 基础用法：点状

```tsx
import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Steps, Step, Button } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  const handleClickStep = (value: number) => {
    console.log(value)
  }
  return (
    <>
      <Steps value={val} dot onStepClick={handleClickStep}>
        <Step value={1} />
        <Step value={2} />
        <Step value={3} />
      </Steps>
      <View style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep()}>
          下一步
        </Button>
      </View>
    </>
  )
}
export default Demo2
```

### 标题和描述信息

```tsx
import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Steps, Step, Button } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <Steps value={val}>
        <Step value={1} title="步骤一" description="步骤描述" />
        <Step value={2} title="步骤二" description="步骤描述" />
        <Step value={3} title="步骤三" description="步骤描述" />
      </Steps>
      <View style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep()}>
          下一步
        </Button>
      </View>
    </>
  )
}
export default Demo3
```

### 自定义步骤条

```tsx
import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Steps, Step, Button, ConfigProvider } from '@nutui/nutui-react-taro'

const customTheme = {
  nutuiStepsBaseLineWidth: '70%',
  nutuiStepsProcessIconBgColor: '#3768FA',
  nutuiStepsProcessIconColor: '#fff',
  nutuiStepsProcessTitleColor: '#3768FA',
  nutuiStepsProcessTitleFontSize: '15px',
  nutuiStepsProcessTitleFontWeight: '500',
  nutuiStepsFinishIconColor: '#3768FA',
  nutuiStepsFinishTitleColor: '#3768FA',
  nutuiStepsFinishLineBackground: '#3768FA',
}

const Demo4 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <Steps value={val}>
          <Step value={1} title="步骤一" description="步骤描述" />
          <Step value={2} title="步骤二" description="步骤描述" />
          <Step value={3} title="步骤三" description="步骤描述" />
        </Steps>
      </ConfigProvider>
      <View style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep()}>
          下一步
        </Button>
      </View>
    </>
  )
}
export default Demo4
```

### 自定义步骤条：点状

```tsx
import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Steps, Step, Button, ConfigProvider } from '@nutui/nutui-react-taro'

const customTheme = {
  nutuiStepsBaseLineWidth: '30%',
}

const Demo5 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <Steps value={val} dot>
          <Step value={1} />
          <Step value={2} />
          <Step value={3} />
        </Steps>
      </ConfigProvider>
      <View style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep()}>
          下一步
        </Button>
      </View>
    </>
  )
}
export default Demo5
```

### 自定义步骤条：点状 + icon

```tsx
import React from 'react'
import { Steps, Step, ConfigProvider } from '@nutui/nutui-react-taro'
import { People } from '@nutui/icons-react-taro'

const customTheme = {
  nutuiStepsDotHeadMargin: '0 0 12px 0',
  nutuiColorPrimaryStop2: '#fff',
  nutuiStepsDotIconBorder: '0',
  nutuiStepsBaseIconWidth: '6px',
  nutuiStepsBaseIconHeight: '6px',
  nutuiStepsBaseLineBackground: `#ddd`,
  nutuiStepsFinishIconBgColor: 'black',
  nutuiStepsFinishIconColor: 'black',
  nutuiStepsProcessIconBgColor: 'white',
  nutuiStepsWaitIconBgColor: '#ddd',
  nutuiStepsBaseLineWidth: '45px',
  nutuiStepsBaseLineHeight: '1px',
  nutuiStepsFinishLineBackground: `black`,
}

const Demo6 = () => {
  return (
    <>
      <ConfigProvider theme={customTheme} style={{ padding: '15px 0px' }}>
        <Steps dot value={2}>
          <Step value={1} title="已完成" />
          <Step
            value={2}
            title="进行中"
            icon={
              <People
                width={20}
                height={20}
                style={{ color: 'red', flex: 'none' }}
              />
            }
          />
          <Step value={3} title="未开始" />
        </Steps>
      </ConfigProvider>
    </>
  )
}
export default Demo6
```

### 自定义图标

```tsx
import React from 'react'
import { Steps, Step } from '@nutui/nutui-react-taro'
import { Service, People, Checklist } from '@nutui/icons-react-taro'

const Demo7 = () => {
  return (
    <>
      <Steps value={1}>
        <Step
          value={1}
          title="已完成"
          icon={<Service width={14} height={14} />}
        />
        <Step
          value={2}
          title="进行中"
          icon={<People width={14} height={14} />}
        />
        <Step
          value={3}
          title="未开始"
          icon={<Checklist width={14} height={14} />}
        />
      </Steps>
    </>
  )
}
export default Demo7
```

### 竖向步骤条

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { Steps, Step } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  return (
    <View style={{ height: '300px', padding: '15px 30px' }}>
      <Steps direction="vertical" value={2}>
        <Step
          value={1}
          title="已完成"
          description="您的订单已经打包完成，商品已发出"
        />
        <Step value={2} title="进行中" description="您的订单正在配送途中" />
        <Step
          value={3}
          title="未开始"
          description="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
        />
      </Steps>
    </View>
  )
}
export default Demo8
```

### 点状步骤和垂直方向

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { Steps, Step } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  return (
    <View style={{ height: '300px', padding: '15px 30px' }}>
      <Steps direction="vertical" dot value={2}>
        <Step
          value={1}
          title="已完成"
          description="您的订单已经打包完成，商品已发出"
        />
        <Step value={2} title="进行中" description="您的订单正在配送途中" />
        <Step
          value={3}
          title="未开始"
          description={
            <>
              <p>收货地址为：</p>
              <p>北京市经济技术开发区科创十一街18号院京东大厦</p>
            </>
          }
        />
      </Steps>
    </View>
  )
}
export default Demo9
```

## Steps

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| direction | 显示方向 | `horizontal` \| `vertical` | `horizontal` |
| value | 当前所在的步骤 | `number` | `0` |
| dot | 点状步骤条 | `boolean` | `false` |

## Step

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 流程步骤的标题 | `string` | `-` |
| description | 流程步骤的描述性文字 | `string` | `-` |
| icon | 图标(来自Icon组件的name属性) | `ReactNode` | `-` |
| value | 流程步骤的索引 | `number` | `0` |
| description | 流程步骤的描述性文字的html结构 | `React.ReactNode` | `-` |
| onStepClick | 点击步骤的标题或图标时触发 | `(index: number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-steps-base-icon-width | icon 容器的宽度 | `25px` |
| \--nutui-steps-base-icon-height | icon 容器的高度 | `25px` |
| \--nutui-steps-base-icon-line-height | icon 容器的行高 | `25px` |
| \--nutui-steps-base-icon-margin-bottom | icon 容器的底部外边距 | `12px` |
| \--nutui-steps-base-icon-font-size | icon 容器的字号 | `$font-size-small` |
| \--nutui-steps-base-line-width | 分割线的宽度 | `100%` |
| \--nutui-steps-base-line-background | 分割线的背景色 | `$color-text-help` |
| \--nutui-steps-base-title-font-size | 标题的字号 | `$font-size-base` |
| \--nutui-steps-base-title-color | 标题的颜色 | `$color-title` |
| \--nutui-steps-base-title-margin-bottom | 标题底部外边距 | `10px` |
| \--nutui-steps-base-description-font-size | 描述文案的字号 | `$font-size-small` |
| \--nutui-steps-base-description-color | 描述文案的字体颜色 | `$color-text` |
| \--nutui-steps-wait-icon-bg-color | 等待状态的 icon 容器的背景色 | `$color-text-help` |
| \--nutui-steps-wait-icon-color | 等待状态的 icon 容器的字体颜色 | `$white` |
| \--nutui-steps-wait-title-color | 等待状态标题字体颜色 | `$color-title` |
| \--nutui-steps-wait-description-color | 等待状态描述字体颜色 | `$color-text` |
| \--nutui-steps-process-icon-bg-color | 进行中icon容器背景色 | `$color-primary` |
| \--nutui-steps-process-icon-color | 进行中icon容器字体颜色 | `$white` |
| \--nutui-steps-process-title-color | 进行中标题字体颜色 | `$color-primary` |
| \--nutui-steps-process-title-font-size | 进行中标题字号 | `$font-size-base` |
| \--nutui-steps-process-title-font-weight | 进行中标题字重 | `$font-weight-bold` |
| \--nutui-steps-process-description-color | 进行中描述字体颜色 | `$color-text` |
| \--nutui-steps-finish-icon-bg-color | 完成状态icon 容器的背景色 | `$color-primary-text` |
| \--nutui-steps-finish-icon-color | 完成状态icon 容器的字体颜色 | `$color-primary` |
| \--nutui-steps-finish-title-color | 完成状态标题的字体颜色 | `$color-primary` |
| \--nutui-steps-finish-description-color | 完成状态描述的字体颜色 | `$color-text` |
| \--nutui-steps-finish-line-background | 完成状态分割线的颜色 | `$color-primary` |
| \--nutui-steps-dot-icon-width | 点状进度条点的宽度 | `6px` |
| \--nutui-steps-dot-icon-height | 点状进度条点的高度 | `6px` |
| \--nutui-steps-dot-icon-border | 点状进度条点的边框 | `2px solid $white` |
| \--nutui-steps-dot-head-margin | 点状进度条点的外边距 | `7px 0 0 0` |
| \--nutui-steps-process-icon-before-bg-color | 进行中点状进度条点的外边颜色 | `$color-primary-stop-2` |
