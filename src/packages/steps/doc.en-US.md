# Steps

### Intro

Split and display the steps of a process, guide users to complete tasks according to the process, or show users the current status.

### Install

```ts
// react
import { Steps } from '@nutui/nutui-react';

```

### Basic Usage

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
        <Step activeIndex={1} title="Step One">1</Step>
        <Step activeIndex={2} title="Step Two">2</Step>
        <Step activeIndex={3} title="Step Three">3</Step>
      </Steps>
      <div className="steps-button" style={{ textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep('current1')}>
          Next Step
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::


### Basic Usage: Dot

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
          Next Step
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::

### Title and description information

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
        <Step activeIndex={1} title="Step One" content="Step description">
          1
        </Step>
        <Step activeIndex={2} title="Step Two" content="Step description" />
        <Step activeIndex={3} title="Step Three" content="Step description" />
      </Steps>
      <div className="steps-button" style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep('current2')}>
          Next Step
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::

### Custom Step Bar

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
          Next Step
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::


### Custom Step Bar: Dot

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
          Next Step
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::

### Custom icon

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
        <Step activeIndex={1} title="Completed" icon="service">
          1
        </Step>
        <Step activeIndex={2} title="In progress" icon="people">
          2
        </Step>
        <Step activeIndex={3} title="Not started" icon="location2">
          3
        </Step>
      </Steps>
    </>
  )
}
export default App;
```
:::

### Vertical step bar
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
        <Step activeIndex={1} title="Completed" content="Your order has been packaged and the goods have been delivered">
          1
        </Step>
        <Step activeIndex={2} title="In progress" content="Your order is in transit">
          2
        </Step>
        <Step
          activeIndex={3}
          title="Not started"
          content="The receiving address is Jingdong building, yard 18, Kechuang 11th Street, Beijing Economic and Technological Development Zone"
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

### Point step and vertical direction
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
        <Step activeIndex={1} title="Completed" content="Your order has been packaged and the goods have been delivered">
          1
        </Step>
        <Step activeIndex={2} title="In progress" content="Your order is in transit">
          2
        </Step>
        <Step
          activeIndex={3}
          title="Has not started"
          renderContent={() => (
            <>
              <p>The receiving address is：</p>
              <p>Jingdong building, yard 18, Kechuang 11th Street, Beijing Economic and Technological</p>
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

| Attribute                   | Description                                                        | Type           | Default      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	Show direction，`horizontal`,`vertical`  | String        | 'horizontal'  | 
| current	               | 	Current step           | Number        | 0      |
| progressDot            |  Dot step bar     | Boolean | false         |



#### Step

| Attribute           | Description                   | Type     | Default      |
| ---------------- | ---------------------- | ------------ | ----------- |
| title            | Title of the process step         | String | '' |
| content          | Descriptive text of process steps (supporting HTML structure)       | String | '' |
| icon          | Icon       | String | '' |
| size          | Icon size       | String | '' |
| activeIndex          | Index of process steps       | Number | 0 |
| renderContent         | The html structure of the descriptive text of the process steps      | React.ReactNode | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
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
