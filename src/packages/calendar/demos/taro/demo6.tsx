import React, { useRef, useState } from 'react'
import { Cell, Calendar, DatePicker } from '@nutui/nutui-react-taro'
import { padZero } from '@/utils/pad-zero'

interface Day {
  day: string | number
  type: string
}

const Demo6 = () => {
  const [date42, setDate42] = useState<string[]>([])
  const [isVisible42, setIsVisible42] = useState(false)

  const disableDate = (date: Day) => {
    return date.day === 25 || date.day === 20 || date.day === 22
  }

  const [show1, setShow1] = useState(false)
  const [dpAbled, setDatePickerAbled] = useState([false, false])
  const [desc1, setDesc1] = useState('10:00:00')
  const [desc2, setDesc2] = useState('20:00:00')
  const desc = useRef(0)
  // const padZero = (d: number | string) => {
  //   return d <= 9 ? `0${d}` : d
  // }
  const setChooseValue42 = (chooseData: any) => {
    console.log(
      'setChooseValue42',
      [...[chooseData[0][3], chooseData[1][3]]],
      chooseData
    )
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate42([...dateArr])
  }
  const confirm1 = (values: (string | number)[], options: any[]) => {
    if (desc.current === 1) {
      setDesc1(
        options.map((option) => padZero(parseInt(option.text))).join(':')
      )
    } else {
      setDesc2(
        options.map((option) => padZero(parseInt(option.text))).join(':')
      )
    }
  }

  const showDatePicker = (e: any, index: number) => {
    if (dpAbled[index - 1]) {
      e.stopPropagation()
      setShow1(true)
      desc.current = index
    }
  }

  const openSwitch42 = () => {
    setIsVisible42(true)
  }

  const closeSwitch42 = () => {
    setIsVisible42(false)
  }

  return (
    <>
      <Cell
        title="日期区间"
        description={
          <div className="desc-box">
            <div className="desc" onClick={openSwitch42}>
              {date42 && date42.length
                ? `${date42[0]} ${desc1}`
                : '请选择起始时间'}
            </div>
            <div className="desc1">-</div>
            <div className="desc" onClick={openSwitch42}>
              {date42 && date42.length
                ? `${date42[1]} ${desc2}`
                : '请选择截止时间'}
            </div>
          </div>
        }
      />
      <Calendar
        visible={isVisible42}
        defaultValue={date42}
        type="range"
        startDate="2023-01-01"
        endDate="2024-09-10"
        disableDate={disableDate}
        firstDayOfWeek={1}
        onDayClick={(date) => {
          let d = [false, false]
          if (date.length > 1) {
            d = [true, true]
          } else if (date.length > 0) {
            d = [true, false]
          }
          setDatePickerAbled(d)
        }}
        onClose={closeSwitch42}
        onConfirm={setChooseValue42}
      >
        <div className="nut-calendar-btns">
          <div
            className={`nut-calendar-date ${dpAbled[0] ? '' : 'disabled'}`}
            onClick={(e) => {
              showDatePicker(e, 1)
            }}
          >
            开始时间：{desc1}
          </div>
          -
          <div
            className={`nut-calendar-date ${dpAbled[1] ? '' : 'disabled'}`}
            onClick={(e) => {
              showDatePicker(e, 2)
            }}
          >
            结束时间：{desc2}
          </div>
        </div>
        <DatePicker
          title="时间选择"
          type="time"
          visible={show1}
          showChinese
          onClose={() => setShow1(false)}
          onConfirm={(options, values) => confirm1(values, options)}
        />
      </Calendar>
    </>
  )
}
export default Demo6
