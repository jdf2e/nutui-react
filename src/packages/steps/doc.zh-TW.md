# Steps 步驟條

### 介紹

拆分展示某項流程的步驟，引導用戶按流程完成任務或向用戶展示當前狀態。

### 安裝

```ts
import { Steps } from '@nutui/nutui-react';
```

### 基本用法

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react';

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
        <Step activeIndex={1} title="步驟一">1</Step>
        <Step activeIndex={2} title="步驟二">2</Step>
        <Step activeIndex={3} title="步驟三">3</Step>
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

### 標題和描述信息

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react';

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
        <Step activeIndex={1} title="步驟一" content="步驟描述">
          1
        </Step>
        <Step activeIndex={2} title="步驟二" content="步驟描述" />
        <Step activeIndex={3} title="步驟三" content="步驟描述" />
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

### 自定義圖標

:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react';

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
        <Step activeIndex={2} title="進行中" icon="people">
          2
        </Step>
        <Step activeIndex={3} title="未開始" icon="location2">
          3
        </Step>
      </Steps>
    </>
  )
}
export default App;
```
:::

### 豎向步驟條
:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react';

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
        <Step activeIndex={1} title="已完成" content="您的訂單已經打包完成，商品已發出">
          1
        </Step>
        <Step activeIndex={2} title="進行中" content="您的訂單正在配送途中">
          2
        </Step>
        <Step
          activeIndex={3}
          title="未開始"
          content="收貨地址為：北京市經濟技術開發區科創十一街18號院京東大廈"
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

### 點狀步驟和垂直方向
:::demo
```tsx
import React, { useState } from "react";
import { Steps, Step, Button } from '@nutui/nutui-react';

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
        <Step activeIndex={1} title="已完成" content="您的訂單已經打包完成，商品已發出">
          1
        </Step>
        <Step activeIndex={2} title="進行中" content="您的訂單正在配送途中">
          2
        </Step>
        <Step
          activeIndex={3}
          title="未開始"
          renderContent={() => (
            <>
              <p>收貨地址為：</p>
              <p>北京市經濟技術開發區科創十一街18號院京東大廈</p>
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

| 參數                   | 說明                                                        | 類型           | 默認值      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	顯示方向，`horizontal`,`vertical`  | String        | 'horizontal'  | 
| current	               | 	當前所在的步驟           | Number        | 0      |
| progressDot            |  點狀步驟條     | Boolean | false         |



#### Step

| 參數           | 說明                   | 類型     | 默認值      |
| ---------------- | ---------------------- | ------------ | ----------- |
| title            | 流程步驟的標題         | String | '' |
| content          | 流程步驟的描述性文字       | String | '' |
| icon          | 圖標       | String | '' |
| size          | 圖標尺寸大小       | String | '' |
| activeIndex          | 流程步驟的索引       | Number | 0 |
| renderContent         | 流程步驟的描述性文字的html結構      | React.ReactNode | - |