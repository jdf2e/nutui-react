# TimeSelect 配送时间

### 介绍

用于配送时间选择

### 安装

``` javascript
// react
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
        <Cell title="请选择配送时间" onClick={handleClick} />
        <TimeSelect
          visible={visible1}
          height="50%"
          title="取件时间 1"
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
| select`废弃`                 | 关闭遮罩之后的回调 | 是 | `list: []` |
| pannelChange`废弃`           | 点击左栏日期回调，内部通过 setCurrentKey、setCurrentTime 更新数据 | 否 | `pannelKey: string 、number, list: []` |
| timeChange`废弃`         | 点击时间回调，内部通过 setCurrentKey、setCurrentTime 更新数据 | 否 | `time: string, list: []` |
| onSelect`v1.3.8`       | 关闭遮罩之后的回调 | 是 | `list: []` |
| onPannelChange`v1.3.8` | 点击左栏日期回调，内部通过 setCurrentKey、setCurrentTime 更新数据 | 否 | `pannelKey: string 、number, list: []` |
| onTimeChange`v1.3.8`   | 点击时间回调，内部通过 setCurrentKey、setCurrentTime 更新数据 | 否 | `time: string, list: []` |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
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
