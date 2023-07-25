# Tour

### Intro

A bubble component used to guide the user through the product's capabilities.

## Install

```tsx
import { Tour } from '@nutui/nutui-react';
```

## Demo
### Basic Usage

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Switch, Tour } from '@nutui/nutui-react';

const App = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: '70+ high-quality components',
      target: 'target',
    },
  ]

  return (
    <>
      <Cell
        title="click to try"
        extra={
          <Switch
            id="target"
            onChange={() => {
              setShowTour(true)
            }}
          />
        }
      />
      <Tour
        className="nut-custom-tour nut-customword-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        type="tile"
        location="bottom-end"
      />
    </>
  )
}
export default App;
```

:::

### Custom Style

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Switch, Tour } from '@nutui/nutui-react';

const App = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: '70+ high-quality components',
      target: 'target',
    },
  ]

  return (
    <>
      <Cell
        title="click to try"
        extra={
          <Switch
            id="target"
            onChange={() => {
              setShowTour(true)
            }}
          />
        }
      />
      <Tour
        className="nut-custom-tour nut-customword-tour nut-customstyle-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        type="tile"
        location="bottom-end"
        style={{
          '--nutui-popover-content-background-color': 'rgb(255, 0, 0)',
          '--nutui-popover-primary-text-color': 'rgb(255, 255, 255)',
          '--nutui-popover-white-background-color': 'rgb(255, 0, 0)',
        }}
        offset={[0, 0]}
        maskWidth={50}
        maskHeight={50}
      />
    </>
  )
}
export default App;
```

:::

### Custom Offset

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Switch, Tour } from '@nutui/nutui-react';

const App = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: 'Support a set of codes to develop',
      target: 'target',
      popoverOffset: [40, 12],
      arrowOffset: -36,
    },
  ]

  return (
    <>
      <Cell
        title="click to try"
        extra={
          <div className="tour-demo-img">
            <img
              id="target2"
              src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
              alt=""
            />
            <img
              src="https://img10.360buyimg.com/imagetools/jfs/t1/31842/40/20385/1762/63998e3eE594254bb/98ff51da635ead4a.png"
              alt=""
            />
            <img
              src="https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png"
              alt=""
            />
          </div>
        }
      />
      <Tour
        className="nut-custom-tour nut-customword-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        type="tile"
        location="bottom-end"
        style={{
          '--nutui-popover-content-background-color': 'rgb(255, 0, 0)',
          '--nutui-popover-primary-text-color': 'rgb(255, 255, 255)',
          '--nutui-popover-white-background-color': 'rgb(255, 0, 0)',
        }}
        offset={[8, 8]}
      />
    </>
  )
}
export default App;
```

:::

### Custom Content

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Switch, Tour, Divider } from '@nutui/nutui-react';

const App = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      target: 'target',
    },
  ]

  return (
    <>
      <Cell
        title="click to try"
        extra={
          <Switch
            id="target"
            onChange={() => {
            setShowTour3(true)
            }}
          />
        }
      />
      <Tour
        className="nut-custom-tour nut-customword-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        type="tile"
        location="bottom-end"
        style={{
          '--nutui-popover-content-background-color': 'rgb(75, 76, 77)',
          '--nutui-popover-primary-text-color': 'rgb(255, 255, 255)',
          '--nutui-popover-white-background-color': 'rgb(75, 76, 77)',
        }}
        closeOnOverlayClick={false}
      >
        <div className="tour-demo-custom-content">
          <div>nutui 4.x will be released soon, so stay tuned</div>
          <Divider direction="vertical" />
          <div
            onClick={() => {
              setShowTour(false)
            }}
          >
            knew
          </div>
        </div>
      </Tour>
    </>
  )
}
export default App;
```

:::

### Steps

:::demo

```tsx
import React, { useState } from "react";
import { Cell, Tour, Tabbar } from '@nutui/nutui-react';

const App = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: '70+ high-quality components',
      target: 'target4',
    },
    {
      content: 'Support a set of codes to develop',
      target: 'target5',
    },
    {
      content: 'Based on JD APP 10.0',
      target: 'target6',
      location: 'top-end',
    },
    {
      content: 'Support custom theme, built-in 700+ theme variables',
      target: 'target7',
      location: 'top-end',
    },
  ]

  return (
    <>
      <Cell
        title="click to try"
        onClick={() => {
          setShowTour(true)
        }}
      />
      <Tabbar fixed>
        <Tabbar.Item id="target4" title='page' />
        <Tabbar.Item id="target5" title='sort' />
        <Tabbar.Item id="target6" title='cart' />
        <Tabbar.Item id="target7" title='mine' />
      </Tabbar>
      <Tour
        className="nut-custom-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        location="top-start"
        offset={[0, 0]}
        maskWidth={60}
        maskHeight={50}
      />
    </>
  )
}
export default App;
```

:::


## Tour

### Props


| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to display the boot eject layer | `boolean` | `false` |
| type | Tour type | `step` \| `tile` | `step` |
| list | Boot Step Content | `ListOptions[]` | `-` |
| offset | The offset of the hollow mask relative to the target element | `number[]` | `[8, 10]` |
| location | Location of popover[location ](https://nutui.jd.com/h5/react/2x/#/zh-CN/component/popover) | `string` | `bottom` |
| next | Next step text | `ReactNode` | `''` |
| prev | Next step text | `ReactNode` | `''` |
| complete | Complete text | `ReactNode` | `''` |
| mask | Whether to display cutout mask | `boolean` | `true` |
| maskWidth | Width of hollow mask | `number` \| `string` | `''` |
| maskHeight | Hollow mask height | `number` \| `string` | `''` |
| closeOnOverlayClick | Whether to close when clicking overlay,[closeOnClickOverlay](https://nutui.jd.com/h5/react/2x/#/zh-CN/component/popover) | `boolean` | `true` |
| showPrev | Whether to show prev button | `boolean` | `true` |
| title | Whether to show title bar | `ReactNode` | `''` |
| onClose | Emit when popover close | `(e: MouseEvent<HTMLDivElement>) => void` | `-` |
| onChange | Emit when step change | `(value: number) => void` | `-` |

### ListOptions


| Property | Description | Type | Default |
| --- | --- | --- | --- |
| target | 	target dom | `Element` \| `string` | `-` |
| content | popover content | `string` | `-` |
| location | Location of popover | `string` | `-` |
| popoverOffset | Offset of popopver | `number[]` | `-` |
| arrowOffset | Offset of arrow | `number` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-tour-mask-border-radius | The border-radius value of the mask layer | `10px` |
| \--nutui-tour-content-min-width | The min-width value of the content area | `200px` |
| \--nutui-tour-content-padding | The padding value of the content area | `10px 12px` |
| \--nutui-tour-content-inner-margin | The margin value inside the content area | `10px 0px` |
| \--nutui-tour-content-inner-font-size | The font-size value inside the content area | `14px` |
| \--nutui-tour-content-bottom-margin-top | margin-top value at the bottom of the content area | `10px` |
| \--nutui-tour-content-bottom-btn-margin-left | The margin-left value of the button at the bottom of the content area | `4px` |
| \--nutui-tour-content-bottom-btn-padding | The padding value of the button at the bottom of the content area | `2px 4px` |
| \--nutui-tour-content-bottom-btn-font-size | The font-size value of the button at the bottom of the content area | `12px` |
| \--nutui-tour-content-bottom-btn-border-radius | The border-radius value of the button at the bottom of the content area | `4px` |





