import React, { useState } from 'react'
import { TimeSelect, Cell, Toast } from '@/packages/nutui.react.taro'

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
  // 点击弹层 X 或者弹层外区域触发事件
  const handleSelect = (selectTimeData: any) => {
    SetVisible1(false)
    Toast.text(`您选择了: ${JSON.stringify(selectTimeData)}`)
  }
  // 选择日期触发回调事件
  const handlePannelChange = (pannelKey: any, selectTimeData: any) => {
    console.log('pannelKey, selectTimeData: ', pannelKey, selectTimeData)
  }
  // 选择配送时间触发回调事件
  const handleTimeChange = (time: any, selectTimeData: any) => {
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
