# TimeSelect 配送时间

### 介绍

用于配送时间选择

### 安装

``` javascript
import { TimeSelect } from '@nutui/nutui-react';
```

### 基本用法

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
      date: '5月20日(今天)',
    },
    {
      'pannel-key': '1',
      date: '5月21日(星期三)',
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
    Toast.text(`您选择了: ${JSON.stringify(selectTimeData)}`)
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
        <h2>用法</h2>
        <Cell title="请选择配送时间" click={handleClick} />
        <TimeSelect
          visible={visible1}
          height="50%"
          title="取件时间 1"
          multiple
          currentKey={currentKey}
          dates={dates}
          times={times}
          select={handleSelect}
          pannelChange={handlePannelChange}
          timeChange={handleTimeChange}
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

| 字段                   | 说明                                                | 是否必传             | 类型    | 默认值 |
|------------------------|----------------------------------------------------|--------|------------|---------|
| visible                 | 是否显示弹层                                      | 是       | Boolean  | `false`|
| height                 | 弹层的高度                                         | 否     | String  | `20%`|
| title                 | 弹层标题                                         | 否      | String  | `取件时间`|
| multiple              | 是否选择多个日期时间                               | 否        | String  | `false`|
| currentKey           | 唯一标识                                    | 否        | String、Number  | `0` |
| dates            | 选择日期面板的数据                                 | 是       | []        | ``       |
| times            | 选择时间面板的数据                                  | 是     | []        | ``       |

### dates

| 字段                   | 说明                                                             | 类型    | 默认值 |
|------------------------|----------------------------------------------------------------|---------|------|
| date                 | 显示的名称                                            | String  | ``|
| pannel-key           | 唯一标识，和 currentKey 一起标识当前选择的天            | Number、String  | `0`|

### times

| 字段                   | 说明                                                             | 类型    | 默认值 |
|------------------------|----------------------------------------------------------------|---------|------|
| key                 | 唯一标识，和 pannel-key、currentKey 一起标识当前选择的天              | Array  | `[]`|
| list                 | 可选时间列表                                                        | Array  | `[]`|

### TimeSelect Event

| 名称  | 说明    | 是否必传       | 回调参数    |
|-------|----------|--------|-------------|
| select | 关闭遮罩之后的回调 | 是 | `list: []` |
| pannelChange | 点击左栏日期回调，内部通过 setCurrentKey、setCurrentTime 更新数据 | 否 | `pannelKey: string 、number, list: []` |
| timeChange | 点击时间回调，内部通过 setCurrentKey、setCurrentTime 更新数据 | 否 | `time: string, list: []` |
