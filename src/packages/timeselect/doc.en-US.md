# TimeSelect 配送时间

### Intro

For delivery time selection

### Install

``` javascript
// react
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
        <Cell title="delivery time" onClick={handleClick} />
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


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-timeselect-title-font-size | `  $font-size-2` |
| --nutui-timeselect-title-color | `  $title-color` |
| --nutui-timeselect-title-height | ` 50px` |
| --nutui-timeselect-title-line-height | `  50px` |
| --nutui-timeselect-pannel-bg-color | `  #f6f7f9` |
| --nutui-timeselect-timepannel-text-color | `  $title-color2` |
| --nutui-timeselect-timepannel-font-size | `  $font-size-2` |
| --nutui-timeselect-timepannel-cur-bg-color | `  $white` |
| --nutui-timeselect-timepannel-cur-text-color | `  #333333` |
| --nutui-timeselect-timepannel-width | `  140px` |
| --nutui-timeselect-timepannel-height | `  40px` |
| --nutui-timeselect-timepannel-padding | `  15px` |
| --nutui-timeselect-timedetail-padding | `  0 5px 50px 13px` |
| --nutui-timeselect-timedetail-item-width | `  100px` |
| --nutui-timeselect-timedetail-item-height | `  50px` |
| --nutui-timeselect-timedetail-item-line-height | `  50px` |
| --nutui-timeselect-timedetail-item-bg-color | `  #f6f7f9` |
| --nutui-timeselect-timedetail-item-border-radius | `  5px` |
| --nutui-timeselect-timedetail-item-text-color | `  #333333` |
| --nutui-timeselect-timedetail-item-text-font-size | `  $font-size-2` |
| --nutui-timeselect-timedetail-item-cur-bg-color | `  rgba($primary-color, 0.15)` |
| --nutui-timeselect-timedetail-item-cur-border | `  $primary-color` |
| --nutui-timeselect-timedetail-item-cur-text-color | `  $primary-color` |
| --nutui-timeselect-timedetail-time-text-color | `  #999` |
| --nutui-timeselect-timedetail-time-font-size | `  $font-size-1` |
