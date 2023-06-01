import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { TimeSelect, Cell } from '@/packages/nutui.react.taro'
import { DateType, TimeType } from '@/packages/timeselect/index.taro'
import Header from '@/sites/components/header'

const TimeSelectDemo = () => {
  const [translated] = useTranslate<any>({
    'zh-CN': {
      text1: '您选择了',
      text2: '请选择配送时间',
      text3: '配送时间',
      text4: '5月20日(今天)',
      text5: '5月21日(星期三)',
    },
    'zh-TW': {
      text1: '您选择了',
      text2: '请选择配送时间',
      text3: '配送时间',
      text4: '5月20日(今天)',
      text5: '5月21日(星期三)',
    },
    'en-US': {
      text1: 'selected',
      text2: 'delivery time',
      text3: 'Pickup time',
      text4: 'May 20 (Today)',
      text5: 'May 21 (Wednesday)',
    },
  })

  const [visible1, SetVisible1] = useState(false)

  const optionKey = {
    valueKey: 'value1',
    textKey: 'text1',
    childrenKey: 'children1',
  }
  const options = [
    {
      value1: '20230520',
      text1: translated.text4,
      children1: [
        { value1: '09', text1: '09:00-10:00' },
        { value1: '10', text1: '10:00-11:00' },
        { value1: '11', text1: '11:00-12:00' },
      ],
    },
    {
      value1: '20230521',
      text1: translated.text5,
      children1: [
        { value1: '09', text1: '09:00-10:00' },
        { value1: '10', text1: '10:00-11:00' },
      ],
    },
  ]

  const defaultValue = [
    {
      value1: '20230521',
      children1: [{ value1: '10' }],
    },
  ]

  const handleClick = () => {
    SetVisible1(true)
  }
  // 点击弹层 X 或者弹层外区域触发事件
  const handleSelect = (value: DateType[]) => {
    SetVisible1(false)
    console.log(`您选择了: ${JSON.stringify(value)}`)
    // Toast.show(`您选择了: ${JSON.stringify(selectTimeData)}`)
  }
  // 选择日期触发回调事件
  const handleDateChange = (date: DateType, value: DateType[]) => {
    console.log('date, value: ', date, value)
  }
  // 选择配送时间触发回调事件
  const handleTimeChange = (time: TimeType, value: DateType[]) => {
    console.log('time, value: ', time, value)
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Cell title={translated.text2} onClick={handleClick} />
        <TimeSelect
          options={options}
          optionKey={optionKey}
          defaultValue={defaultValue}
          visible={visible1}
          style={{
            height: '50%',
          }}
          title={translated.text3}
          multiple
          onSelect={handleSelect}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
        />
      </div>
    </>
  )
}

export default TimeSelectDemo
