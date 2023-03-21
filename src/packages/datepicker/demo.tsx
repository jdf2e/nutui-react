import React, { useState } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { DatePicker } from './datepicker'
import Cell from '@/packages/cell'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: string
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
      showChinese: '显示中文',
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
      showChinese: '顯示中文',
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
      showChinese: 'Show Chinese',
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

  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [desc1, setDesc1] = useState(`2012-01-01`)
  const [desc2, setDesc2] = useState('05-10')
  const [desc3, setDesc3] = useState('2022-05-10 10:10')
  const [desc4, setDesc4] = useState('10:10:00')
  const [desc5, setDesc5] = useState('2020 05 10 10:10')
  const [desc6, setDesc6] = useState('10:10:00')
  const [desc7, setDesc7] = useState('2022-05-10 00')
  const [desc8, setDesc8] = useState('10:10')

  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)
  const [show8, setShow8] = useState(false)

  const confirm1 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc1(options.map((option) => option.text).join(' '))
  }

  const confirm2 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc2(options.map((option) => option.text).join('-'))
  }

  const confirm3 = (values: (string | number)[], options: PickerOption[]) => {
    const date = values.slice(0, 3).join('-')
    const time = values.slice(3).join(':')
    setDesc3(`${date} ${time}`)
  }

  const confirm4 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc4(options.map((option) => option.text).join(':'))
  }

  const confirm5 = (values: (string | number)[], options: PickerOption[]) => {
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

  const confirm6 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc6(options.map((option) => option.text).join(':'))
  }

  const confirm7 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc7(options.map((option) => option.text).join(' '))
  }

  const confirm8 = (values: (string | number)[], options: PickerOption[]) => {
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
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.showChinese}
          description={desc1}
          onClick={() => setShow1(true)}
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
          isShowChinese
          onCloseDatePicker={() => setShow1(false)}
          threeDimensional={false}
          onConfirmDatePicker={(values, options) => confirm1(values, options)}
        />
        {/* 选择月日 */}
        <DatePicker
          title={translated.basic}
          minDate={new Date(2022, 0, 1)}
          maxDate={new Date(2022, 7, 1)}
          type="month-day"
          visible={show2}
          onCloseDatePicker={() => setShow2(false)}
          onConfirmDatePicker={(values, options) => confirm2(values, options)}
        />
        {/* 选择年月日时分 */}
        <DatePicker
          title={translated.chooseDate}
          minDate={minDate}
          maxDate={maxDate}
          visible={show3}
          type="datetime"
          onCloseDatePicker={() => setShow3(false)}
          onConfirmDatePicker={(values, options) => confirm3(values, options)}
        />
        {/* 选择时分秒 */}
        <DatePicker
          title={translated.chooseTime}
          type="time"
          minDate={minDate}
          maxDate={maxDate}
          visible={show4}
          onCloseDatePicker={() => setShow4(false)}
          onConfirmDatePicker={(values, options) => confirm4(values, options)}
        />
        {/* 选择时分 */}
        <DatePicker
          title={translated.chooseTime}
          type="hour-minutes"
          minDate={minDate}
          maxDate={maxDate}
          visible={show8}
          onCloseDatePicker={() => setShow8(false)}
          onConfirmDatePicker={(values, options) => confirm8(values, options)}
        />
        {/* 格式化选项 */}
        <DatePicker
          title={translated.chooseTime}
          type="datetime"
          minDate={new Date(2022, 0, 1)}
          maxDate={new Date(2022, 10, 1)}
          visible={show5}
          formatter={formatter}
          onCloseDatePicker={() => setShow5(false)}
          onConfirmDatePicker={(values, options) => confirm5(values, options)}
        />
        {/* 分钟步长 */}
        <DatePicker
          title={translated.chooseTime}
          type="time"
          minDate={minDate}
          maxDate={maxDate}
          visible={show6}
          minuteStep={5}
          onCloseDatePicker={() => setShow6(false)}
          onConfirmDatePicker={(values, options) => confirm6(values, options)}
        />
        {/* 过滤选项 */}
        <DatePicker
          title={translated.chooseTime}
          type="datehour"
          minDate={minDate}
          maxDate={maxDate}
          visible={show7}
          formatter={formatter1}
          minuteStep={5}
          filter={filter}
          onCloseDatePicker={() => setShow7(false)}
          onConfirmDatePicker={(values, options) => confirm7(values, options)}
        />
      </div>
    </>
  )
}

export default DatePickerDemo
