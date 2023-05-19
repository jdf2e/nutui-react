# Steps 步骤条

## 介绍

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

## 安装

```ts
import { Steps } from '@nutui/nutui-react-taro';
```
## 代码演示
### 基本用法

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <>
      <Steps value={stepState.current1}>
        <Step value={1} title="步骤一">1</Step>
        <Step value={2} title="步骤二">2</Step>
        <Step value={3} title="步骤三">3</Step>
      </Steps>
      <div className="steps-button" style={{ textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep('current1')}>
          下一步
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::

### 基本用法：点状

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <>
      <Steps
        value={stepState.current1}
        dot
        onStepClick={handleClickStep}
      >
        <Step value={1}>1</Step>
        <Step value={2}>2</Step>
        <Step value={3}>3</Step>
      </Steps>
      <div className="steps-button" style={{ textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep('current1')}>
          下一步
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::

### 标题和描述信息

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <>
      <Steps value={stepState.current2}>
        <Step value={1} title="步骤一" description="步骤描述">
          1
        </Step>
        <Step value={2} title="步骤二" description="步骤描述" />
        <Step value={3} title="步骤三" description="步骤描述" />
      </Steps>
      <div className="steps-button" style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep('current2')}>
          下一步
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::


### 自定义步骤条

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button, ConfigProvider } from '@nutui/nutui-react-taro';

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

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <Steps value={stepState.current2}>
          <Step
            value={1}
            title={translated['606ae3f5']}
            description={translated.db1b4ed6}
          >
            1
          </Step>
          <Step
            value={2}
            title={translated['3c6225eb']}
            description={translated.db1b4ed6}
          />
          <Step
            value={3}
            title={translated['979df428']}
            description={translated.db1b4ed6}
          />
        </Steps>
      </ConfigProvider>
      <div className="steps-button" style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep('current2')}>
          下一步
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::


### 自定义步骤条：点状

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button, ConfigProvider } from '@nutui/nutui-react-taro';

const customTheme2 = {
  nutuiStepsBaseLineWidth: '70%',
}

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <>
      <ConfigProvider theme={customTheme2}>
        <Steps
          value={stepState.current1}
          dot
          onStepClick={handleClickStep}
        >
          <Step value={1}>1</Step>
          <Step value={2}>2</Step>
          <Step value={3}>3</Step>
        </Steps>
      </ConfigProvider>
      <div className="steps-button" style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep('current2')}>
          下一步
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::
### 自定义图标

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react-taro';
import { Service, People, Location2 } from '@nutui/icons-react-taro';

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <>
      <Steps value={1}>
        <Step value={1} title="已完成" icon={<Service />}>
          1
        </Step>
        <Step value={2} title="进行中" icon={<People />}>
          2
        </Step>
        <Step value={3} title="未开始" icon={<Location2 />}>
          3
        </Step>
      </Steps>
    </>
  )
}
export default App;
```
:::

### 竖向步骤条
:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <div className="steps-wrapper" style={{ height: '300px', padding: '15px 30px' }}>
      <Steps direction="vertical" current={2}>
        <Step activeIndex={1} title="已完成" content="您的订单已经打包完成，商品已发出">
          1
        </Step>
        <Step activeIndex={2} title="进行中" content="您的订单正在配送途中">
          2
        </Step>
        <Step
          activeIndex={3}
          title="未开始"
          content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
        >
          3
        </Step>
      </Steps>
    </div>
  )
}
export default App;
```
:::

### 点状步骤和垂直方向
:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <div className="steps-wrapper" style={{ height: '300px', padding: '15px 30px' }}>
      <Steps direction="vertical" progressDot current={2}>
        <Step activeIndex={1} title="已完成" content="您的订单已经打包完成，商品已发出">
          1
        </Step>
        <Step activeIndex={2} title="进行中" content="您的订单正在配送途中">
          2
        </Step>
        <Step
          activeIndex={3}
          title="未开始"
          renderContent={() => (
            <>
              <p>收货地址为：</p>
              <p>北京市经济技术开发区科创十一街18号院京东大厦</p>
            </>
          )}
        >
          3
        </Step>
      </Steps>
    </div>
  )
}
export default App;
```
:::


## Steps

### Props

| 属性                   | 说明                                                        | 类型           | 默认值      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	显示方向，`horizontal`,`vertical`  | `string`        | `horizontal`  | 
| value	               | 	当前所在的步骤           | `number`        | `0`      |
| dot            |  点状步骤条     | `boolean` | `false`       |

## Step
### Props

| 属性           | 说明                | 类型                | 默认值 |
| ---------------- |-------------------|-------------------|-----|
| title            | 流程步骤的标题           | `string`          | ''  |
| description          | 流程步骤的描述性文字        | `string`          | ''  |
| icon          | 图标(来自Icon组件的name属性)       | `ReactNode`       | ''  |
| value          | 流程步骤的索引           | `number`          | 0   |
| description         | 流程步骤的描述性文字的html结构 | `React.ReactNode` | -   |
| onStepClick   | 点击步骤的标题或图标时触发 | `(index: number) => void` | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。


| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| --nutui-steps-base-icon-width | icon 容器的宽度 | ` 25px` |
| --nutui-steps-base-icon-height | icon 容器的高度 | ` 25px` |
| --nutui-steps-base-icon-line-height |  icon 容器的行高 |`  25px` |
| --nutui-steps-base-icon-margin-bottom | icon 容器的底部外边距 | ` 12px`|
| --nutui-steps-base-icon-font-size | icon 容器的字号 | `  13px` |
| --nutui-steps-base-line-width | 分割线的宽度 | ` 100%`|
| --nutui-steps-base-line-background | 分割线的背景色 | ` #909ca4`|
| --nutui-steps-base-title-font-size | 标题的字号 | `  14px` |
| --nutui-steps-base-title-color | 标题的颜色 |`  $title-color` |
| --nutui-steps-base-title-margin-bottom | 标题底部外边距 | `  10px` |
| --nutui-steps-base-description-font-size | 描述文案的字号 | `  14px` |
| --nutui-steps-base-description-color | 描述文案的字体颜色 |`  $title-color2` |
| --nutui-steps-wait-icon-bg-color | 等待状态的 icon 容器的背景色 | `  #959fb1` |
| --nutui-steps-wait-icon-color | 等待状态的 icon 容器的字体颜色 | ` $white` |
| --nutui-steps-wait-title-color | 等待状态标题字体颜色 | `  $title-color2` |
| --nutui-steps-wait-description-color | 等待状态描述字体颜色 | `  $title-color2` |
| --nutui-steps-process-icon-bg-color | 进行中icon容器背景色 | `  $primary-color` |
| --nutui-steps-process-icon-color | 进行中icon容器字体颜色 | ` $white` |
| --nutui-steps-process-title-color | 进行中标题字体颜色 | `  $primary-color` |
| --nutui-steps-process-title-font-size | 进行中标题字号 | ` 14px`|
| --nutui-steps-process-title-font-weight | 进行中标题字重 | ` 400`|
| --nutui-steps-process-description-color | 进行中描述字体颜色 | `  $primary-color` |
| --nutui-steps-finish-icon-bg-color | 完成状态icon 容器的背景色 | `  $primary-text-color` |
| --nutui-steps-finish-icon-color | 完成状态icon 容器的字体颜色 | ` $primary-color` |
| --nutui-steps-finish-title-color | 完成状态标题的字体颜色 | `  $primary-color` |
| --nutui-steps-finish-description-color | 完成状态描述的字体颜色 | `  $title-color2` |
| --nutui-steps-finish-line-background | 完成状态分割线的颜色 | `  $primary-color` |
| --nutui-steps-dot-icon-width | 点状进度条点的宽度 | `  6px` |
| --nutui-steps-dot-icon-height | 点状进度条点的高度 | `  6px` |
| --nutui-steps-dot-icon-border | 点状进度条点的边框 |  `  2px solid $primary-text-color` |
