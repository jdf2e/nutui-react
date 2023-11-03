import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Cell, DatePicker } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

interface T {
  [props: string]: string
}

const DatePickerDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '选择日期',
      showChinese: '显示中文-非受控',
      showChineseControl: '显示中文-受控',
      mmdd: '选择月日',
      showAll: '选择年月日时分',
      time: '选择时分秒',
      hourMinutes: '选择时分',
      format: '格式化选项',
      stepMins: '分钟数递增步长设置',
      filter: '过滤选项',
      setStartEnd: '限制开始结束时间',
      chooseDate: '日期时间选择',
      chooseTime: '时间选择',
      forever: '永远有效',
      year: '年',
      month: '月',
      day: '日',
      hour: '时',
      min: '分',
      seconds: '秒',
    },
    'zh-TW': {
      basic: '選擇日期',
      showChinese: '顯示中文-非受控',
      showChineseControl: '顯示中文-受控',
      mmdd: '選擇月日',
      showAll: '選擇年月日時分',
      time: '選擇時分秒',
      hourMinutes: '選擇時分',
      format: '格式化选项',
      stepMins: '分鐘數遞增步長設置',
      filter: '過濾選項',
      setStartEnd: '限制開始結束時間',
      chooseDate: '日期時間選擇',
      chooseTime: '時間選擇',
      forever: '永遠有效',
      year: '年',
      month: '月',
      day: '日',
      hour: '時',
      min: '分',
      seconds: '秒',
    },
    'en-US': {
      basic: 'Choose Date',
      showChinese: 'Show Chinese unControlled',
      showChineseControl: 'Show Chinese controlled',
      mmdd: 'Choose Month-Day',
      showAll: 'Choose DateTime',
      time: 'Choose Time',
      hourMinutes: 'Selective time',
      format: 'Option Formatter',
      stepMins: 'Option Steps',
      filter: 'Option Filter',
      setStartEnd: 'Limit the start and end time',
      chooseDate: 'Choose Time',
      chooseTime: 'Choose Time',
      forever: 'Forever',
      year: 'Year',
      month: 'Month',
      day: 'Day',
      hour: 'Hour',
      min: 'Minute',
      seconds: 'Second',
    },
  })

  const startDate = new Date(2020, 0, 1)
  const endDate = new Date(2025, 10, 1)
  const defaultValue = new Date()
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`
  const [desc1, setDesc1] = useState(defaultDescription)
  const [desc10, setDesc10] = useState('')
  const [desc2, setDesc2] = useState(
    `${defaultValue.getMonth() + 1}-${defaultValue.getDate()}`
  )
  const [desc3, setDesc3] = useState(`${defaultDescription} 11:08`)
  const [desc4, setDesc4] = useState('10:10:00')
  const [desc5, setDesc5] = useState(`${defaultDescription} 10:10`)
  const [desc6, setDesc6] = useState('10:10:00')
  const [desc7, setDesc7] = useState(`${defaultDescription} 00`)
  const [desc8, setDesc8] = useState('10:10')

  const [show1, setShow1] = useState(false)
  const [show10, setShow10] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)
  const [show8, setShow8] = useState(false)

  const [value, setValue] = useState('2023/01/01')

  const confirm1 = (options: PickerOption[], values: (string | number)[]) => {
    console.log('options confirm1', options)
    setDesc1(options.map((option) => option.text).join(' '))
  }

  const confirm10 = (options: PickerOption[], values: (string | number)[]) => {
    console.log('options confirm1', options)
    setValue(options.map((option) => option.text).join(' '))
    setDesc10(options.map((option) => option.text).join(' '))
  }

  const confirm2 = (options: PickerOption[], values: (string | number)[]) => {
    setDesc2(options.map((option) => option.text).join('-'))
  }

  const confirm3 = (options: PickerOption[], values: (string | number)[]) => {
    const date = values.slice(0, 3).join('-')
    const time = values.slice(3).join(':')
    setDesc3(`${date} ${time}`)
  }

  const confirm4 = (options: PickerOption[], values: (string | number)[]) => {
    setDesc4(options.map((option) => option.text).join(':'))
  }

  const confirm5 = (options: PickerOption[], values: (string | number)[]) => {
    const date = options
      .slice(1, 3)
      .map((op) => op.text)
      .join('')
    const time = options
      .slice(3)
      .map((op) => op.value)
      .join(':')
    setDesc5(`${options[0].text}年${date} ${time}`)
  }

  const confirm6 = (options: PickerOption[], values: (string | number)[]) => {
    setDesc6(options.map((option) => option.text).join(':'))
  }

  const confirm7 = (options: PickerOption[], values: (string | number)[]) => {
    setDesc7(options.map((option) => option.text).join(' '))
  }

  const confirm8 = (options: PickerOption[], values: (string | number)[]) => {
    setDesc8(options.map((option) => option.text).join(':'))
  }

  const filter = (type: string, options: PickerOption[]) => {
    if (type === 'hour') {
      return options.filter((option) => Number(option.value) % 6 === 0)
    }
    return options
  }

  const formatter = (type: string, option: PickerOption) => {
    const op = option
    switch (type) {
      case 'year':
        op.text += ''
        break
      case 'month':
        op.text += translated.month
        break
      case 'day':
        op.text += translated.day
        break
      case 'hour':
        op.text += translated.hour
        break
      case 'minute':
        op.text += translated.min
        break
      default:
        op.text += ''
    }
    return op
  }

  const formatter1 = (type: string, option: PickerOption) => {
    const op = option
    switch (type) {
      case 'year':
        op.text += translated.year
        break
      case 'month':
        op.text += translated.month
        break
      case 'day':
        op.text += translated.day
        break
      case 'hour':
        op.text += translated.hour
        break
      default:
        op.text += ''
    }
    return op
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.showChinese}
          description={desc1}
          onClick={() => setShow1(true)}
        />
        <Cell
          title={translated.showChineseControl}
          description={desc10}
          onClick={() => setShow10(true)}
        />
        <h2>{translated.mmdd}</h2>
        <Cell
          title={translated.setStartEnd}
          description={desc2}
          onClick={() => setShow2(true)}
        />
        <h2>{translated.showAll}</h2>
        <Cell
          title={translated.chooseDate}
          description={desc3}
          onClick={() => setShow3(true)}
        />
        <h2>{translated.time}</h2>
        <Cell
          title={translated.time}
          description={desc4}
          onClick={() => setShow4(true)}
        />
        <h2>{translated.hourMinutes}</h2>
        <Cell
          title={translated.hourMinutes}
          description={desc8}
          onClick={() => setShow8(true)}
        />
        <h2>{translated.format}</h2>
        <Cell
          title={translated.time}
          description={desc5}
          onClick={() => setShow5(true)}
        />
        <h2>{translated.stepMins}</h2>
        <Cell
          title={translated.time}
          description={desc6}
          onClick={() => setShow6(true)}
        />
        <h2>{translated.filter}</h2>
        <Cell
          title={translated.time}
          description={desc7}
          onClick={() => setShow7(true)}
        />
        {/* 选择日期 */}
        <DatePicker
          title={translated.basic}
          visible={show1}
          pickerProps={{
            popupProps: { zIndex: 1220 },
          }}
          defaultValue={new Date(`${defaultDescription}`)}
          showChinese
          onClose={() => setShow1(false)}
          threeDimensional={false}
          onConfirm={(options, values) => confirm1(options, values)}
        />
        {/* 选择日期 */}
        <DatePicker
          title={translated.basic}
          visible={show10}
          value={new Date(value)}
          showChinese
          onClose={() => setShow10(false)}
          threeDimensional={false}
          onConfirm={(options, values) => confirm10(options, values)}
        />
        {/* 选择月日 */}
        <DatePicker
          title={translated.basic}
          startDate={new Date(2023, 6, 4)}
          endDate={new Date(2025, 7, 1)}
          defaultValue={defaultValue}
          type="month-day"
          visible={show2}
          onClose={() => setShow2(false)}
          onConfirm={(options, values) => confirm2(options, values)}
        />
        {/* 选择年月日时分 */}
        <DatePicker
          title={translated.chooseDate}
          startDate={startDate}
          endDate={endDate}
          visible={show3}
          defaultValue={new Date(desc3)}
          type="datetime"
          onClose={() => setShow3(false)}
          onConfirm={(options, values) => confirm3(options, values)}
        />
        {/* 选择时分秒 */}
        <DatePicker
          title={translated.chooseTime}
          type="time"
          startDate={startDate}
          endDate={endDate}
          defaultValue={new Date(`${defaultDescription} ${desc4}`)}
          visible={show4}
          onClose={() => setShow4(false)}
          onConfirm={(options, values) => confirm4(options, values)}
        />
        {/* 选择时分 */}
        <DatePicker
          title={translated.chooseTime}
          type="hour-minutes"
          startDate={startDate}
          endDate={endDate}
          defaultValue={new Date(`${defaultDescription} ${desc8}`)}
          visible={show8}
          onClose={() => setShow8(false)}
          onConfirm={(options, values) => confirm8(options, values)}
        />
        {/* 格式化选项 */}
        <DatePicker
          title={translated.chooseTime}
          type="datetime"
          startDate={new Date(2023, 0, 1)}
          endDate={new Date(2024, 10, 1)}
          defaultValue={new Date(desc5)}
          visible={show5}
          formatter={formatter}
          onClose={() => setShow5(false)}
          onConfirm={(options, values) => confirm5(options, values)}
        />
        {/* 分钟步长 */}
        <DatePicker
          title={translated.chooseTime}
          type="time"
          startDate={startDate}
          endDate={endDate}
          visible={show6}
          defaultValue={new Date(`${defaultDescription} ${desc6}`)}
          minuteStep={15}
          onClose={() => setShow6(false)}
          onConfirm={(options, values) => confirm6(options, values)}
        />
        {/* 过滤选项 */}
        <DatePicker
          title={translated.chooseTime}
          type="datehour"
          startDate={startDate}
          endDate={endDate}
          visible={show7}
          defaultValue={new Date(`${defaultDescription}`)}
          formatter={formatter1}
          minuteStep={5}
          filter={filter}
          onClose={() => setShow7(false)}
          onConfirm={(options, values) => confirm7(options, values)}
        />
      </div>
    </>
  )
}

export default DatePickerDemo
