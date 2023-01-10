import React, { useState } from 'react'
import { Cell, DatePicker } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: string
  children?: PickerOption[]
  className?: string | number
}

const DatePickerDemo = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [desc1, setDesc1] = useState('2012年 01月 01日')
  const [desc2, setDesc2] = useState('05-10')
  const [desc3, setDesc3] = useState('2022-05-10 10:10')
  const [desc4, setDesc4] = useState('10:10:00')
  const [desc5, setDesc5] = useState('2020年 05月 10日 10:10')
  const [desc6, setDesc6] = useState('10:10:00')
  const [desc7, setDesc7] = useState('2022年05月10日 00时')

  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)

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
        op.text += '月'
        break
      case 'day':
        op.text += '日'
        break
      case 'hour':
        op.text += '时'
        break
      case 'minute':
        op.text += '分'
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
        op.text += `年`
        break
      case 'month':
        op.text += `月`
        break
      case 'day':
        op.text += `日`
        break
      case 'hour':
        op.text += `时`
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
        <h2>选择日期</h2>
        <Cell title="显示中文" desc={desc1} onClick={() => setShow1(true)} />
        <h2>选择月日</h2>
        <Cell
          title="限制开始结束时间"
          desc={desc2}
          onClick={() => setShow2(true)}
        />

        <h2>选择年月日时分</h2>
        <Cell
          title="日期时间选择"
          desc={desc3}
          onClick={() => setShow3(true)}
        />

        <h2>选择时分秒</h2>
        <Cell title="时间选择" desc={desc4} onClick={() => setShow4(true)} />

        <h2>格式化选项</h2>
        <Cell title="时间选择" desc={desc5} onClick={() => setShow5(true)} />

        <h2>分钟数递增步长设置</h2>
        <Cell title="时间选择" desc={desc6} onClick={() => setShow6(true)} />

        <h2>过滤选项</h2>
        <Cell title="时间选择" desc={desc7} onClick={() => setShow7(true)} />

        {/* 选择日期 */}
        <DatePicker
          title="日期选择"
          visible={show1}
          isShowChinese
          onCloseDatePicker={() => setShow1(false)}
          threeDimensional={false}
          onConfirmDatePicker={(values, options) => confirm1(values, options)}
        />
        {/* 选择月日 */}
        <DatePicker
          title="日期选择"
          minDate={new Date(2022, 0, 1)}
          maxDate={new Date(2022, 7, 1)}
          type="month-day"
          visible={show2}
          onCloseDatePicker={() => setShow2(false)}
          onConfirmDatePicker={(values, options) => confirm2(values, options)}
        />
        {/* 选择年月日时分 */}
        <DatePicker
          title="日期时间选择"
          minDate={minDate}
          maxDate={maxDate}
          visible={show3}
          type="datetime"
          onCloseDatePicker={() => setShow3(false)}
          onConfirmDatePicker={(values, options) => confirm3(values, options)}
        />
        {/* 选择时分秒 */}
        <DatePicker
          title="时间选择"
          type="time"
          minDate={minDate}
          maxDate={maxDate}
          visible={show4}
          onCloseDatePicker={() => setShow4(false)}
          onConfirmDatePicker={(values, options) => confirm4(values, options)}
        />

        {/* 格式化选项 */}
        <DatePicker
          title="时间选择"
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
          title="时间选择"
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
          title="时间选择"
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
