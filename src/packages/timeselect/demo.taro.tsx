import React, { useState } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { TimeSelect, Cell } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

export interface TimeType {
  key?: string | number
  list: string[]
}

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
  const currentKey = 0

  const dates = [
    {
      'pannel-key': '0',
      date: translated.text4,
    },
    {
      'pannel-key': '1',
      date: translated.text5,
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
  // 点击弹层 X 或者弹层外区域触发事件
  const handleSelect = (selectTimeData: TimeType[]) => {
    SetVisible1(false)
    console.log(`您选择了: ${JSON.stringify(selectTimeData)}`)
    // Toast.text(`您选择了: ${JSON.stringify(selectTimeData)}`)
  }
  // 选择日期触发回调事件
  const handlePannelChange = (
    pannelKey: string | number,
    selectTimeData: TimeType[]
  ) => {
    console.log('pannelKey, selectTimeData: ', pannelKey, selectTimeData)
  }
  // 选择配送时间触发回调事件
  const handleTimeChange = (time: string, selectTimeData: TimeType[]) => {
    console.log('time, selectTimeData: ', time, selectTimeData)
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Cell title={translated.text2} onClick={handleClick} />
        <TimeSelect
          visible={visible1}
          height="50%"
          title={translated.text3}
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
