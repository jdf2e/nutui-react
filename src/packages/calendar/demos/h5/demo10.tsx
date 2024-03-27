import React, { useState, useRef } from 'react'
import { Cell, Calendar } from '@nutui/nutui-react'
import { Utils } from '@/utils/date'

const Demo10 = () => {
  const [date, setDate] = useState<string[]>(['2023-07-10', '2023-07-19'])

  const [isVisible, setIsVisible] = useState(false)

  const calendarRef = useRef<any>(null)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const setChooseValue = (param: string) => {
    setDate([...[param[0][3], param[1][3]]])
  }

  const goDate = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollToDate('2023-04-01')
    }
  }

  const clickBtn = () => {
    const date = [Utils.date2Str(new Date()), Utils.getDay(6)]
    setDate(date)
    if (calendarRef.current) {
      calendarRef.current.scrollToDate(date[0])
    }
  }

  const clickBtn1 = () => {
    const date = new Date()
    const year = date.getFullYear()
    let month: any = date.getMonth() + 1
    month = month < 10 ? `0${month}` : `${month}`
    const yearMonth = `${year}-${month}`
    const currMonthDays = Utils.getMonthDays(`${year}`, `${month}`)
    setDate([`${yearMonth}-01`, `${yearMonth}-${currMonthDays}`])
    if (calendarRef.current) {
      calendarRef.current.scrollToDate(`${yearMonth}-01`)
    }
  }

  const renderHeaderButtons = () => {
    return (
      <div className="wrapper">
        <div className="d_div">
          <span className="d_btn" onClick={goDate}>
            {/* {translated['781b07fd']} */}
            去某个月
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn}>
            {/* {translated['1076d771']} */}
            最近七天
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn1}>
            {/* {translated['6ab47cd2']} */}
            当月
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Cell
        title="自定义按钮"
        description={date ? `${date[0]}至${date[1]}` : '请选择'}
        onClick={openSwitch}
      />
      <Calendar
        ref={calendarRef}
        visible={isVisible}
        defaultValue={date}
        type="range"
        startDate="2022-12-22"
        endDate="2024-12-31"
        renderHeaderButtons={renderHeaderButtons}
        onClose={closeSwitch}
        onConfirm={setChooseValue}
      />
    </>
  )
}
export default Demo10
