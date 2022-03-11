/*
 * @Author: your name
 * @Date: 2021-12-23 11:15:50
 * @LastEditTime: 2021-12-27 10:16:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /nutui-react/src/packages/calendar/demo.tsx
 */
import React, { useState } from 'react'
import { Calendar } from './calendar'
import { Cell } from '@/packages/cell/cell'

const CalendarDemo = () => {
  const [date, setDate] = useState('')
  const [date1, setDate1] = useState(['2019-12-23', '2019-12-26'])
  const [date2, setDate2] = useState('2020-07-08')
  const [date3, setDate3] = useState('')
  const [dateWeek, setDateWeek] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const openSwitch1 = () => {
    setIsVisible1(true)
  }

  const openSwitch3 = () => {
    setIsVisible3(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const closeSwitch1 = () => {
    setIsVisible1(false)
  }

  const closeSwitch3 = () => {
    setIsVisible3(false)
  }

  const setChooseValue = (param: string) => {
    setDate(param[3])
    setDateWeek(param[4])
  }

  const setChooseValue1 = (param: string) => {
    setDate1([...[param[0][3], param[1][3]]])
  }

  const setChooseValue2 = (param: string) => {
    setDate2(param[3])
    console.log(param[3])
  }

  const setChooseValue3 = (param: string) => {
    setDate3(param[3])
  }

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell
          title="选择单个日期"
          desc={date ? `${date} ${dateWeek}` : '请选择'}
          onClick={openSwitch}
        />
        <Calendar
          visible={isVisible}
          defaultValue={date}
          startDate="2019-10-11"
          endDate="2029-11-11"
          onClose={closeSwitch}
          onChoose={setChooseValue}
        />
        <Cell
          title="选择日期区间"
          desc={date1 ? `${date1[0]}至${date1[1]}` : '请选择'}
          onClick={openSwitch1}
        />
        <Calendar
          visible={isVisible1}
          defaultValue={date1}
          type="range"
          startDate="2019-12-22"
          endDate="2021-01-08"
          onClose={closeSwitch1}
          onChoose={setChooseValue1}
        />
        <h2>自定义日历-自动回填</h2>
        <Cell title="选择日期" desc={date3 ? `${date3}` : '请选择'} onClick={openSwitch3} />
        <Calendar
          visible={isVisible3}
          defaultValue={date3}
          startDate=""
          endDate=""
          isAutoBackFill
          onClose={closeSwitch3}
          onChoose={setChooseValue3}
        />
        <h2>平铺展示</h2>
        <div
          className="test-calendar-wrapper"
          style={{ display: 'flex', width: '100%', height: '613px', overflow: 'hidden' }}
        >
          <Calendar
            poppable={false}
            defaultValue={date2}
            isAutoBackFill
            onChoose={setChooseValue2}
          />
        </div>
      </div>
    </>
  )
}

export default CalendarDemo
