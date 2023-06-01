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
      basic: '基础用法',
      optionKey: '自定义数据 key',
      multiple: '支持多选',
      custom: '自定义使用场景',
      city: '请选择所在城市',
    },
    'zh-TW': {
      text1: '您选择了',
      text2: '请选择配送时间',
      text3: '配送时间',
      text4: '5月20日(今天)',
      text5: '5月21日(星期三)',
      basic: '基础用法',
      optionKey: '自定义数据 key',
      multiple: '支持多选',
      custom: '自定义使用场景',
      city: '请选择所在城市',
    },
    'en-US': {
      text1: 'selected',
      text2: 'delivery time',
      text3: 'Pickup time',
      text4: 'May 20 (Today)',
      text5: 'May 21 (Wednesday)',
      basic: 'Basic Usage',
      optionKey: 'Custom optionKey',
      multiple: 'Multiple Mode',
      custom: 'Custom Usage',
      city: 'Select your city',
    },
  })

  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const options1 = [
    {
      value: '20230520',
      text: translated.text4,
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
        { value: '11', text: '11:00-12:00' },
      ],
    },
    {
      value: '20230521',
      text: translated.text5,
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
      ],
    },
  ]

  const optionKey = {
    valueKey: 'value1',
    textKey: 'text1',
    childrenKey: 'children1',
  }
  const options2 = [
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
  const defaultValue2 = [
    {
      value1: '20230521',
      children1: [{ value1: '10' }],
    },
  ]
  const options4 = [
    {
      value: 'zhejiang',
      text: '浙江',
      children: [
        { value: 'hangzhou', text: '杭州' },
        { value: 'ningbo', text: '宁波' },
      ],
    },
    {
      value: 'jiangsu',
      text: '江苏',
      children: [
        { value: 'nanjing', text: '南京' },
        { value: 'suzhou', text: '苏州' },
        { value: 'yangzhou', text: '扬州' },
      ],
    },
  ]

  const handleClick1 = () => {
    setVisible1(true)
  }
  const handleClick2 = () => {
    setVisible2(true)
  }
  const handleClick3 = () => {
    setVisible3(true)
  }
  const handleClick4 = () => {
    setVisible4(true)
  }
  const handleSelect1 = (value: DateType[]) => {
    setVisible1(false)
    console.log(`${translated.text1}: ${JSON.stringify(value)}`)
  }
  const handleSelect2 = (value: DateType[]) => {
    setVisible2(false)
    console.log(`${translated.text1}: ${JSON.stringify(value)}`)
  }
  const handleSelect3 = (value: DateType[]) => {
    setVisible3(false)
    console.log(`${translated.text1}: ${JSON.stringify(value)}`)
  }
  const handleSelect4 = (value: DateType[]) => {
    setVisible4(false)
    console.log(`${translated.text1}: ${JSON.stringify(value)}`)
  }
  // 选择日期触发回调事件
  const handleDateChange = (date: DateType, value: DateType[]) => {
    console.log(date, value)
  }
  // 选择配送时间触发回调事件
  const handleTimeChange = (time: TimeType, value: DateType[]) => {
    console.log(time, value)
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell title={translated.text2} onClick={handleClick1} />
        <TimeSelect
          visible={visible1}
          options={options1}
          style={{
            height: '30%',
          }}
          onSelect={handleSelect1}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
        />

        <h2>{translated.optionKey}</h2>
        <Cell title={translated.text2} onClick={handleClick2} />
        <TimeSelect
          options={options2}
          optionKey={optionKey}
          defaultValue={defaultValue2}
          visible={visible2}
          style={{
            height: '30%',
          }}
          onSelect={handleSelect2}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
        />

        <h2>{translated.multiple}</h2>
        <Cell title={translated.text2} onClick={handleClick3} />
        <TimeSelect
          options={options1}
          visible={visible3}
          style={{
            height: '30%',
          }}
          multiple
          onSelect={handleSelect3}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
        />

        <h2>{translated.custom}</h2>
        <Cell title={translated.city} onClick={handleClick4} />
        <TimeSelect
          options={options4}
          visible={visible4}
          style={{
            height: '30%',
          }}
          title={translated.city}
          onSelect={handleSelect4}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
        />
      </div>
    </>
  )
}

export default TimeSelectDemo
