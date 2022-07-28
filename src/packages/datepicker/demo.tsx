import React, { useState } from 'react'
import { DatePicker } from './datepicker'
import Cell from '@/packages/cell'

const DatePickerDemo = () => {
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 10, 1)
  const [desc1, setDesc1] = useState('2020-1-1')
  const [desc2, setDesc2] = useState('2020-1-1')
  const [desc3, setDesc3] = useState('2020年-1月-1日-0时-0分')
  const [desc4, setDesc4] = useState('0时-0分-0秒')
  const [desc5, setDesc5] = useState('0时-0分-0秒')
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)

  return (
    <>
      <div className="demo">
        <h2>选择日期</h2>
        <Cell title="显示中文" desc={desc1} onClick={() => setShow1(true)} />
        <h2>选择月日</h2>
        <Cell
          title="限制开始结束时间"
          desc={desc2}
          onClick={() => setShow2(true)}
        />
        <h2>限制开始结束时间（有默认值）</h2>
        <Cell
          title="日期时间选择"
          desc={desc3}
          onClick={() => setShow3(true)}
        />
        <h2>限制开始结束小时</h2>
        <Cell title="时间选择" desc={desc4} onClick={() => setShow4(true)} />
        <h2>分钟数递增步长设置</h2>
        <Cell title="时间选择" desc={desc5} onClick={() => setShow5(true)} />

        {/* <DatePicker
          title="日期选择"
          visible={show1}
          isShowChinese
          onCloseDatePicker={() => setShow1(false)}
          onConfirmDatePicker={(list) => setDesc1(list.join('-'))}
        />

        <DatePicker
          title="日期选择"
          minDate={new Date(2022, 0, 1)}
          maxDate={new Date(2022, 7, 1)}
          type="month-day"
          visible={show2}
          isShowChinese
          onCloseDatePicker={() => setShow2(false)}
          onConfirmDatePicker={(list) => setDesc2(list.join('-'))}
        /> */}

        <DatePicker
          title="日期时间选择"
          minDate={minDate}
          maxDate={maxDate}
          visible={show3}
          type="datetime"
          onCloseDatePicker={() => setShow3(false)}
          onConfirmDatePicker={(list) => setDesc3(list.join('-'))}
        />

        <DatePicker
          title="时间选择"
          type="time"
          minDate={minDate}
          maxDate={maxDate}
          visible={show4}
          onCloseDatePicker={() => setShow4(false)}
          onConfirmDatePicker={(list) => setDesc4(list.join('-'))}
        />

        {/* <DatePicker
          title="时间选择"
          type="time"
          minDate={minDate}
          maxDate={maxDate}
          visible={show5}
          minuteStep={5}
          onCloseDatePicker={() => setShow5(false)}
          onConfirmDatePicker={(list) => setDesc5(list.join('-'))}
        /> */}
      </div>
    </>
  )
}

export default DatePickerDemo
