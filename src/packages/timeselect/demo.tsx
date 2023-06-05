import React, { useState } from 'react'
import TimeSelect, { DateType, TimeType } from '@/packages/timeselect'
import Cell from '@/packages/cell'
import Toast from '@/packages/toast'
import { useTranslate } from '@/sites/assets/locale'

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
      zhejiang: '浙江',
      hangzhou: '杭州',
      ningbo: '宁波',
      jiangsu: '江苏',
      nanjing: '南京',
      suzhou: '苏州',
      yangzhou: '扬州',
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
      zhejiang: '浙江',
      hangzhou: '杭州',
      ningbo: '宁波',
      jiangsu: '江苏',
      nanjing: '南京',
      suzhou: '苏州',
      yangzhou: '扬州',
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
      zhejiang: 'ZheJiang',
      hangzhou: 'HangZhou',
      ningbo: 'NingBo',
      jiangsu: 'JiangSu',
      nanjing: 'NanJing',
      suzhou: 'SuZhou',
      yangzhou: 'YangZhou',
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
      text: translated.zhejiang,
      children: [
        { value: 'hangzhou', text: translated.hangzhou },
        { value: 'ningbo', text: translated.ningbo },
      ],
    },
    {
      value: 'jiangsu',
      text: translated.jiangsu,
      children: [
        { value: 'nanjing', text: translated.nanjing },
        { value: 'suzhou', text: translated.suzhou },
        { value: 'yangzhou', text: translated.yangzhou },
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
    Toast.show(`${translated.text1}: ${JSON.stringify(value)}`)
  }
  const handleSelect2 = (value: DateType[]) => {
    setVisible2(false)
    Toast.show(`${translated.text1}: ${JSON.stringify(value)}`)
  }
  const handleSelect3 = (value: DateType[]) => {
    setVisible3(false)
    Toast.show(`${translated.text1}: ${JSON.stringify(value)}`)
  }
  const handleSelect4 = (value: DateType[]) => {
    setVisible4(false)
    Toast.show(`${translated.text1}: ${JSON.stringify(value)}`)
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
      <div className="demo">
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
