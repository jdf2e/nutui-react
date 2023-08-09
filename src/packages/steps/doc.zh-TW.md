# Steps 步驟條

## 介紹

拆分展示某項流程的步驟，引導用戶按流程完成任務或嚮用戶展示當前狀態。

## 安裝

```tsx
import { Steps } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎用法

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
      <Steps value={stepState.current1}>
        <Step value={1} title="步驟一">1</Step>
        <Step value={2} title="步驟二">2</Step>
        <Step value={3} title="步驟三">3</Step>
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

### 基礎用法：點狀

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
      <Steps value={stepState.current2}>
        <Step value={1} title="步驟一" description="步驟描述">
          1
        </Step>
        <Step value={2} title="步驟二" description="步驟描述" />
        <Step value={3} title="步驟三" description="步驟描述" />
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

### 自定義步驟條

:::demo

```tsx
import React, { useState } from "react";
import { Steps, Step, Button, ConfigProvider } from '@nutui/nutui-react';

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

### 自定義步驟條：點狀

:::demo

```tsx
import React, { useState } from "react";
import { Steps, Step, Button, ConfigProvider } from '@nutui/nutui-react';

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

### 自定義步驟條：點狀 + icon

:::demo

```tsx
import React, { useState } from "react";
import { Steps, Step, Button, ConfigProvider } from '@nutui/nutui-react';
import { People } from '@nutui/icons-react';

const customTheme3 = {
  nutuiStepsDotHeadMargin: '0 0 12px 0',
  nutuiBrandColorEnd: '#fff',
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

const App = () => {
  return (
    <>
      <ConfigProvider theme={customTheme3}>
        <Steps dot value={2}>
          <Step value={1} title="已完成">
            1
          </Step>
          <Step
            value={2}
            title="進行中"
            icon={
              <People
                width={20}
                height={20}
                style={{ color: 'red', flex: 'none' }}
              />
            }
          >
            2
          </Step>
          <Step value={3} title="未開始">
            3
          </Step>
        </Steps>
      </ConfigProvider>
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
import { Service, People, Location2 } from '@nutui/icons-react';

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
        <Step value={2} title="進行中" icon={<People />}>
          2
        </Step>
        <Step value={3} title="未開始" icon={<Location2 />}>
          3
        </Step>
      </Steps>
    </>
  )
}
export default App;
```

:::

### 豎嚮步驟條

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
      <Steps direction="vertical" value={2}>
        <Step value={1} title="已完成" description="您的訂單已經打包完成，商品已發出">
          1
        </Step>
        <Step value={2} title="進行中" description="您的訂單正在配送途中">
          2
        </Step>
        <Step
          value={3}
          title="未開始"
          description="收貨地址為：北京市經濟技術開發區科創十一街18號院京東大廈"
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

### 點狀步驟和垂直方嚮

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
      <Steps direction="vertical" dot value={2}>
        <Step value={1} title="已完成" description="您的訂單已經打包完成，商品已發出">
          1
        </Step>
        <Step value={2} title="進行中" description="您的訂單正在配送途中">
          2
        </Step>
        <Step
          value={3}
          title="未開始"
          description={<>
            <p>收貨地址為：</p>
            <p>北京市經濟技術開發區科創十一街18號院京東大廈</p>
          </>}
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| direction | 顯示方嚮 | `horizontal` \| `vertical` | `horizontal` |
| value | 當前所在的步驟 | `number` | `0` |
| dot | 點狀步驟條 | `boolean` | `false` |

## Step

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 流程步驟的標題 | `string` | `-` |
| description | 流程步驟的描述性文字 | `string` | `-` |
| icon | 圖標(來自Icon組件的name屬性) | `ReactNode` | `-` |
| value | 流程步驟的索引 | `number` | `0` |
| description | 流程步驟的描述性文字的html結構 | `React.ReactNode` | `-` |
| onStepClick | 點擊步驟的標題或圖標時觸發 | `(index: number) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-steps-base-icon-width | icon 容器的寬度 | `25px` |
| \--nutui-steps-base-icon-height | icon 容器的高度 | `25px` |
| \--nutui-steps-base-icon-line-height | icon 容器的行高 | `25px` |
| \--nutui-steps-base-icon-margin-bottom | icon 容器的底部外邊距 | `12px` |
| \--nutui-steps-base-icon-font-size | icon 容器的字號 | `13px` |
| \--nutui-steps-base-line-width | 分割線的寬度 | `100%` |
| \--nutui-steps-base-line-background | 分割線的背景色 | `#909ca4` |
| \--nutui-steps-base-title-font-size | 標題的字號 | `14px` |
| \--nutui-steps-base-title-color | 標題的顏色 | `$title-color` |
| \--nutui-steps-base-title-margin-bottom | 標題底部外邊距 | `10px` |
| \--nutui-steps-base-description-font-size | 描述文案的字號 | `14px` |
| \--nutui-steps-base-description-color | 描述文案的字體顏色 | `$title-color2` |
| \--nutui-steps-wait-icon-bg-color | 等待狀態的 icon 容器的背景色 | `#959fb1` |
| \--nutui-steps-wait-icon-color | 等待狀態的 icon 容器的字體顏色 | `$white` |
| \--nutui-steps-wait-title-color | 等待狀態標題字體顏色 | `$title-color2` |
| \--nutui-steps-wait-description-color | 等待狀態描述字體顏色 | `$title-color2` |
| \--nutui-steps-process-icon-bg-color | 進行中icon容器背景色 | `$primary-color` |
| \--nutui-steps-process-icon-color | 進行中icon容器字體顏色 | `$white` |
| \--nutui-steps-process-title-color | 進行中標題字體顏色 | `$primary-color` |
| \--nutui-steps-process-title-font-size | 進行中標題字號 | `14px` |
| \--nutui-steps-process-title-font-weight | 進行中標題字重 | `400` |
| \--nutui-steps-process-description-color | 進行中描述字體顏色 | `$primary-color` |
| \--nutui-steps-finish-icon-bg-color | 完成狀態icon 容器的背景色 | `$primary-text-color` |
| \--nutui-steps-finish-icon-color | 完成狀態icon 容器的字體顏色 | `$primary-color` |
| \--nutui-steps-finish-title-color | 完成狀態標題的字體顏色 | `$primary-color` |
| \--nutui-steps-finish-description-color | 完成狀態描述的字體顏色 | `$title-color2` |
| \--nutui-steps-finish-line-background | 完成狀態分割線的顏色 | `$primary-color` |
| \--nutui-steps-dot-icon-width | 點狀進度條點的寬度 | `6px` |
| \--nutui-steps-dot-icon-height | 點狀進度條點的高度 | `6px` |
| \--nutui-steps-dot-icon-border | 點狀進度條點的邊框 | `2px solid $primary-text-color` |
| \--nutui-steps-dot-head-margin | 點狀進度條點的外邊距 | `7px 0 0 0` |