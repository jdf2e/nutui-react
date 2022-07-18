# Steps

### Intro

Split and display the steps of a process, guide users to complete tasks according to the process, or show users the current status.

### Install

```ts
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