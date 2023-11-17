# SafeArea

## Intro

Provides adaptive margin adjustment in full screen.When the web page is displayed in full screen, automatic adaptation can be achieved with the help of the safe area.


## Install 

```tsx
import { SafeArea } from '@nutui/nutui-react';
```

## Code

### Basic Usage

:::demo

```tsx
import React from 'react'
import { SafeArea } from '@nutui/nutui-react'

function generateRandomTextArray(count) {
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  const textArray = []
  for (let j = 0; j < count; j++) {
    const randomLength = Math.floor(Math.random() * 5) + 4
    let randomText = ''
    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomText += characters.charAt(randomIndex)
    }
    textArray.push(randomText)
  }
  return textArray
}
const App = () => {
  return (
    <>
      <div>{generateRandomTextArray(900).join(' ')}</div>
      <SafeArea position="bottom" />
    </>
  )
}
export default App

```

:::


## SafeArea

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| position | Position of the safe area | `'top' \| 'bottom'` | `-` |

## Theme

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-safe-area-multiple | Displayed multiple | `1` |