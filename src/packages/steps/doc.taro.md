# Steps 步骤条

### 介绍

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

### 安装

```ts
import { Steps } from '@nutui/nutui-react-taro';
```

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
      <Steps current={stepState.current1}>
        <Step activeIndex={1} title="步骤一">1</Step>
        <Step activeIndex={2} title="步骤二">2</Step>
        <Step activeIndex={3} title="步骤三">3</Step>
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
        current={stepState.current1}
        progressDot
        onClickStep={handleClickStep}
      >
        <Step activeIndex={1}>1</Step>
        <Step activeIndex={2}>2</Step>
        <Step activeIndex={3}>3</Step>
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
      <Steps current={stepState.current2}>
        <Step activeIndex={1} title="步骤一" content="步骤描述">
          1
        </Step>
        <Step activeIndex={2} title="步骤二" content="步骤描述" />
        <Step activeIndex={3} title="步骤三" content="步骤描述" />
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
        <Steps current={stepState.current2}>
          <Step
            activeIndex={1}
            title={translated['606ae3f5']}
            content={translated.db1b4ed6}
          >
            1
          </Step>
          <Step
            activeIndex={2}
            title={translated['3c6225eb']}
            content={translated.db1b4ed6}
          />
          <Step
            activeIndex={3}
            title={translated['979df428']}
            content={translated.db1b4ed6}
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
          current={stepState.current1}
          progressDot
          onClickStep={handleClickStep}
        >
          <Step activeIndex={1}>1</Step>
          <Step activeIndex={2}>2</Step>
          <Step activeIndex={3}>3</Step>
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
      <Steps current={1}>
        <Step activeIndex={1} title="已完成" icon="service">
          1
        </Step>
        <Step activeIndex={2} title="进行中" icon="people">
          2
        </Step>
        <Step activeIndex={3} title="未开始" icon="location2">
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


## API

### Props

#### Steps

| 参数                   | 说明                                                        | 类型           | 默认值      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	显示方向，`horizontal`,`vertical`  | String        | 'horizontal'  | 
| current	               | 	当前所在的步骤           | Number        | 0      |
| progressDot            |  点状步骤条     | Boolean | false         |


#### nut-steps events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| clickStep `v1.3.8 废弃` | 点击步骤的标题或图标时触发 | index: number |
| onClickStep `v1.3.8`  | 点击步骤的标题或图标时触发 | index: number |

#### Step

| 参数           | 说明                   | 类型     | 默认值      |
| ---------------- | ---------------------- | ------------ | ----------- |
| title            | 流程步骤的标题         | String | '' |
| content          | 流程步骤的描述性文字       | String | '' |
| icon          | 图标(来自Icon组件的name属性)       | String | '' |
| iconColor          | 图标颜色       | String | null |
| size          | 图标尺寸大小(来自Icon组件的size属性)       | String | '' |
| activeIndex          | 流程步骤的索引       | Number | 0 |
| renderContent         | 流程步骤的描述性文字的html结构      | React.ReactNode | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-steps-base-icon-width | ` 25px` |
| --nutui-steps-base-icon-height | ` 25px` |
| --nutui-steps-base-icon-line-height | `  25px` |
| --nutui-steps-base-icon-margin-bottom`v1.4.8` | ` 12px`|
| --nutui-steps-base-icon-font-size | `  13px` |
| --nutui-steps-base-line-width`v1.4.8` | ` 100%`|
| --nutui-steps-base-line-color`废弃 v1.4.8` | ` #909ca4` |
| --nutui-steps-base-line-background`v1.4.8` | ` #909ca4`|
| --nutui-steps-base-title-font-size | `  14px` |
| --nutui-steps-base-title-color | `  $title-color` |
| --nutui-steps-base-title-margin-bottom | `  10px` |
| --nutui-steps-base-content-font-size | `  14px` |
| --nutui-steps-base-content-color | `  $title-color2` |

| --nutui-steps-wait-icon-bg-color | `  #959fb1` |
| --nutui-steps-wait-icon-color | ` $white` |
| --nutui-steps-wait-head-color | ` #909ca4` |
| --nutui-steps-wait-head-border-color | `  #909ca4` |
| --nutui-steps-wait-title-color`v1.4.8` | `  $title-color2` |
| --nutui-steps-wait-content-color | `  $title-color2` |

| --nutui-steps-process-icon-bg-color`v1.4.8` | `  $primary-color` |
| --nutui-steps-process-icon-color`v1.4.8` | ` $white` |
| --nutui-steps-process-head-color | ` $primary-color` |
| --nutui-steps-process-head-border-color | ` $primary-color` |
| --nutui-steps-process-title-color | `  $primary-color` |
| --nutui-steps-process-title-font-size`v1.4.8` | ` 14px`|
| --nutui-steps-process-title-font-weight`v1.4.8` | ` 400`|
| --nutui-steps-process-content-color`v1.4.8` | `  $primary-color` |

| --nutui-steps-finish-icon-bg-color`v1.4.8` | `  $primary-text-color` |
| --nutui-steps-finish-icon-color`v1.4.8` | ` $primary-color` |
| --nutui-steps-finish-head-color | ` $primary-color` |
| --nutui-steps-finish-head-border-color | ` $primary-color` |
| --nutui-steps-finish-title-color | `  $primary-color` |
| --nutui-steps-finish-content-color`v1.4.8` | `  $title-color2` |
| --nutui-steps-finish-line-background | `  $primary-color` |

| --nutui-steps-dot-icon-width`v1.4.8` | `  6px` |
| --nutui-steps-dot-icon-height`v1.4.8` | `  6px` |
| --nutui-steps-dot-icon-border`v1.4.8` | `  2px solid $primary-text-color` |