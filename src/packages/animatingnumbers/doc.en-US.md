# AnimatingNumbers

## Intro

Digital animation collection

## Install

```tsx
import { AnimatingNumbers } from '@nutui/nutui-react'
```

## Demo

### AnimatingNumbers.CountUp - Basic Usage

:::demo

```tsx
import React from 'react'
import { AnimatingNumbers, Cell } from '@nutui/nutui-react'

const App = () => {
    return  <Cell title={<AnimatingNumbers.CountUp value="678.94" />} />
}
export default App
```

:::

### AnimatingNumbers.CountUp - Custom styles to dynamically modify data (maximum number of bits required)

:::demo

```tsx
import React, { useEffect, useState } from 'react'
import { AnimatingNumbers, Cell } from '@nutui/nutui-react'

const App = () => {
  const [value, setEndNumer] = useState('1570.99')
  useEffect(() => {
    setInterval(() => {
      setEndNumer(
        `${Math.floor(Math.random() * 999999)}.${Math.floor(
          Math.random() * 89 + 10
        )}`
      )
    }, 30000)
  }, [])
  return (
    <Cell
        title={
        <AnimatingNumbers.CountUp
            value={value}
            duration={1.2}
            length={6}
            className="custom-coutup"
        />
        }
    />
  )
}
export default App
```

:::

## AnimatingNumbers.CountUp

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| length | Set the maximum display length, the number of bits is not enough, the number of bits before the zero | `number` | `0` |
| value | The end value, | `string` | `number` |
| delay | Wait time for animation execution, in ms | `number` | `300` |
| duration | Animation execution time, in s | `number` | `1` |
| thousands | Whether there are thousands separators | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-countup-width | width of countup item | `auto` |
| \--nutui-countup-height | height of countup item | `32px` |
| \--nutui-countup-base-size | countup font size | `18px` |
| \--nutui-countup-border-radius | border radius of item | `4px` |
| \--nutui-countup-lr-margin | margin of item | `0` |
| \--nutui-countup-bg-color | background color of item | `inherit` |
| \--nutui-countup-color | color of item | `$color-title` |
