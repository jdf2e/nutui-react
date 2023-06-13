# Steps

## Intro

Split and display the steps of a process, guide users to complete tasks according to the process, or show users the current status.

## Install

```tsx
import { Steps } from '@nutui/nutui-react';

```
## Demo
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
        <Step value={1} title="Step One">1</Step>
        <Step value={2} title="Step Two">2</Step>
        <Step value={3} title="Step Three">3</Step>
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
        dot
        onStepClick={handleClickStep}
      >
        <Step value={1}>1</Step>
        <Step value={2}>2</Step>
        <Step value={3}>3</Step>
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
        <Step value={1} title="Step One" description="Step description">
          1
        </Step>
        <Step value={2} title="Step Two" description="Step description" />
        <Step value={3} title="Step Three" description="Step description" />
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
          Next Step
        </Button>
      </div>
    </>
  )
}
export default App;
```
:::
### Custom Step Bar: Dot + icon

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
          <Step value={1} title="Completed">
            1
          </Step>
          <Step
            value={2}
            title="Progressing"
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
          <Step value={3} title="Wating">
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
        <Step value={1} title="Completed" icon="service">
          1
        </Step>
        <Step value={2} title="In progress" icon="people">
          2
        </Step>
        <Step value={3} title="Not started" icon="location2">
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
        <Step value={1} title="Completed" description="Your order has been packaged and the goods have been delivered">
          1
        </Step>
        <Step value={2} title="In progress" description="Your order is in transit">
          2
        </Step>
        <Step
          value={3}
          title="Not started"
          description="The receiving address is Jingdong building, yard 18, Kechuang 11th Street, Beijing Economic and Technological Development Zone"
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
      <Steps direction="vertical" dot current={2}>
        <Step value={1} title="Completed" description="Your order has been packaged and the goods have been delivered">
          1
        </Step>
        <Step value={2} title="In progress" description="Your order is in transit">
          2
        </Step>
        <Step
          value={3}
          title="Has not started"
          description={() => (
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


## Steps
### Props

| Property                   | Description                                                        | Type           | Default      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	Show direction，`horizontal`,`vertical`  | `string`        | `horizontal`  | 
| current	               | 	Current step           | `number`        | 0      |
| dot            |  Dot step bar     | `boolean` | false         |

## Step
### Props

| Property    | Description                   | Type            | Default      |
|--------------| ---------------------- |-----------------| ----------- |
| title        | Title of the process step         | `string`        | '' |
| description      | Descriptive text of process steps (supporting HTML structure)       | `string`        | '' |
| icon         | Icon       | `ReactNode`         | '' |
| value  | Index of process steps       | `number`        | 0 |
| onStepClick   | Fired when the title or icon of a step is clicked | `(index: number) => void` | - |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).


| Name | Description | Default |
| --- | --- | --- |
| --nutui-steps-base-icon-width | width of icon container | ` 25px` |
| --nutui-steps-base-icon-height | height of icon container | `25px` |
| --nutui-steps-base-icon-line-height | The line height of the icon container |` 25px` |
| --nutui-steps-base-icon-margin-bottom | The bottom margin of the icon container | `12px`|
| --nutui-steps-base-icon-font-size | The font size of the icon container | ` 13px` |
| --nutui-steps-base-line-width | The width of the dividing line | ` 100%`|
| --nutui-steps-base-line-background | The background color of the dividing line | ` #909ca4`|
| --nutui-steps-base-title-font-size | The font size of the title | ` 14px` |
| --nutui-steps-base-title-color | Title color |` $title-color` |
| --nutui-steps-base-title-margin-bottom | Title bottom margin | `10px` |
| --nutui-steps-base-description-font-size | The font size of the description text | ` 14px` |
| --nutui-steps-base-description-color | The font color of description text |` $title-color2` |
| --nutui-steps-wait-icon-bg-color | Background color of icon container in waiting state | ` #959fb1` |
| --nutui-steps-wait-icon-color | font color of icon container in waiting state | ` $white` |
| --nutui-steps-wait-title-color | wait state title font color | ` $title-color2` |
| --nutui-steps-wait-description-color | wait state description font color | ` $title-color2` |
| --nutui-steps-process-icon-bg-color | Process icon container background color | ` $primary-color` |
| --nutui-steps-process-icon-color | Process icon container font color | ` $white` |
| --nutui-steps-process-title-color | Process title font color | ` $primary-color` |
| --nutui-steps-process-title-font-size | Process title font size | ` 14px`|
| --nutui-steps-process-title-font-weight | Process title font weight | ` 400 `|
| --nutui-steps-process-description-color | Process description font color | ` $primary-color` |
| --nutui-steps-finish-icon-bg-color | background color of finish status icon container | ` $primary-text-color` |
| --nutui-steps-finish-icon-color | font color of finish status icon container | ` $primary-color` |
| --nutui-steps-finish-title-color | Font color of finish status title | ` $primary-color` |
| --nutui-steps-finish-description-color | Font color of finish state description | ` $title-color2` |
| --nutui-steps-finish-line-background | The color of the finishing line | ` $primary-color` |
| --nutui-steps-dot-icon-width | Width of dot progress bar dots | `6px` |
| --nutui-steps-dot-icon-height | Height of dot icon progress bar | `6px` |
| --nutui-steps-dot-icon-border | Dot progress bar dot border | ` 2px solid $primary-text-color` |
| --nutui-steps-dot-head-margin | Dot progress bar dot margin |  `  7px 0 0 0` |
