# TimeSelect 配送时间

### Intro

For delivery time selection

### Install

``` javascript
import { TimeSelect } from '@nutui/nutui-react';
```

### Basic Usage

:::demo

```tsx
import React, { useState } from 'react'
import { TimeSelect, Cell, Toast } from '@nutui/nutui-react'

const TimeSelectDemo = () => {
  const [visible1, SetVisible1] = useState(false)
  const currentKey = 0

  const dates = [
    {
      'pannel-key': '0',
      date: 'May 20 (Today)',
    },
    {
      'pannel-key': '1',
      date: 'May 21 (Wednesday)',
    },
  ]
  const times = [
    {
      key: '0',
      list: ['9:00-10:00', '10:00-11:00', '11:00-12:00'],
    },
    {
      key: '1',
      list: ['9:00-10:00', '10:00-11:00'],
    },
  ]

  const handleClick = () => {
    SetVisible1(true)
  }
  const handleSelect = (selectTimeData) => {
    SetVisible1(false)
    Toast.text(`selected: ${JSON.stringify(selectTimeData)}`)
  }
  const handlePannelChange = (pannelKey, selectTimeData) => {
    console.log('pannelKey, selectTimeData: ', pannelKey, selectTimeData)
  }
  const handleTimeChange = (time, selectTimeData) => {
    console.log('time, selectTimeData: ', time, selectTimeData)
  }
  return (
    <>
      <div className="demo">
        <h2>Demo</h2>
        <Cell title="delivery time" click={handleClick} />
        <TimeSelect
          visible={visible1}
          height="50%"
          title="Pickup time"
          multiple
          currentKey={currentKey}
          dates={dates}
          times={times}
          onSelect={handleSelect}
          onPannelChange={handlePannelChange}
          onTimeChange={handleTimeChange}
        />
      </div>
    </>
  )
}

export default TimeSelectDemo
```

:::

## API

### TimeSelect Prop

| Props                   | Description                 | required | Type    | Default |
|------------------------|-----------------------------|----------|------------|---------|
| visible                 | display the popup           | true     | Boolean  | `false`|
| height                 | height of the popup         | false        | String  | `20%`|
| title                 | popup title                 | false                | String  | `Pickup time`|
| multiple              | Select multiple datetimes   | false                | String  | `false`|
| currentKey           | Uniquely identifies         | false                | String、Number  | `0` |
| dates            | Select data for date panel  | true     | []        | ``       |
| times            | Select data for time panel  | true     | []        | ``       |

### dates

| Props                   | Description                                                             | Type    | Default |
|------------------------|----------------------------------------------------------------|---------|------|
| date                 | display name                                            | String  | ``|
| pannel-key           | Unique identifier, together with currentKey to identify the currently selected day            | Number、String  | `0`|

### times

| Props                   | Description                                                                                       | Type    | Default |
|------------------------|---------------------------------------------------------------------------------------------------|---------|------|
| key                 | Unique identifier, together with pannel-key and currentKey to identify the currently selected day | Array  | `[]`|
| list                 | Optional time list                                                                                | Array  | `[]`|

### TimeSelect Event

| Event                  | Description                                                                                                       | required | callback args                         |
|------------------------|-------------------------------------------------------------------------------------------------------------------|----------|---------------------------------------|
| onSelect`v1.3.8`       | Callback after closing the mask                                                                                   | true     | `list: []`                            |
| onPannelChange`v1.3.8` | Click the date callback in the left column, and internally update the data through setCurrentKey, setCurrentTime  | false    | `pannelKey: string 、number, list: []` |
| onTimeChange`v1.3.8`         | Click the time callback, and internally update the data through setCurrentKey, setCurrentTime                                                                     | false                | `time: string, list: []`              |
