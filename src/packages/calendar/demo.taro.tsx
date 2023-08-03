import React, { useState, useRef } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Cell, Calendar, DatePicker } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { Utils } from '@/utils/date'
import '@/packages/calendar/demo.scss'

interface Day {
  day: string | number
  type: string
}
interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  '8dab2f67': string
  '8dab2f68': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
  '7db1a8b2': string
  '7db1a8b3': string
  '7db1a8b4': string
  '7db1a8b5': string
  a52bef0c: string
  d04fcbda: string
  '0aaad620': string
  '60a53514': string
  '781b07fd': string
  '1076d771': string
  '6ab47cd2': string
}

const CalendarDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '选择单个日期',
      b840c88f: '请选择',
      a74a1fd4: '选择日期区间',
      '8dab2f66': '至',
      '8dab2f67': '请选择起始时间',
      '8dab2f68': '请选择截止时间',
      cfbdc781: '快捷选择',
      c3a3a1d2: '选择日期',
      e51e4582: '平铺展示',
      '7db1a8b2': '选择多个日期',
      '7db1a8b3': '选择周',
      '7db1a8b4': '日期不可选',
      '7db1a8b5': '日期区间',
      a52bef0c: '已选择',
      d04fcbda: '自定义日历',
      '0aaad620': '自定义按钮',
      '60a53514': '自定义时间文案',
      '781b07fd': '去某个月',
      '1076d771': '最近七天',
      '6ab47cd2': '当月',
    },
    'zh-TW': {
      ce5c5446: '基礎翻譯',
      c38a08ef: '選擇日期',
      b840c88f: '請選擇',
      a74a1fd4: '選擇日期區間',
      '8dab2f66': '至',
      '8dab2f67': '请选择起始时间',
      '8dab2f68': '请选择截止时间',
      cfbdc781: '快捷選擇',
      c3a3a1d2: '選擇日期',
      e51e4582: '平鋪展示',
      '7db1a8b2': '選擇多個日期',
      '7db1a8b3': '選擇周',
      '7db1a8b4': '日期不可選',
      '7db1a8b5': '日期区间',
      a52bef0c: '已選擇',
      d04fcbda: '自定義日曆',
      '0aaad620': '自定義按鈕',
      '60a53514': '自定義時間文案',
      '781b07fd': '去某個月',
      '1076d771': '最近七天',
      '6ab47cd2': '當月',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'select a single date',
      b840c88f: 'please choose',
      a74a1fd4: 'Select date range',
      '8dab2f66': 'to',
      '8dab2f67': 'Select start Time',
      '8dab2f68': 'Select end time',
      cfbdc781: 'quick selection',
      c3a3a1d2: 'select date',
      e51e4582: 'Tiled display',
      '7db1a8b2': 'select multiple dates',
      '7db1a8b3': 'select week',
      '7db1a8b4': 'disable date',
      '7db1a8b5': 'date range',
      a52bef0c: 'chosen',
      d04fcbda: 'custom calendar',
      '0aaad620': 'custom button',
      '60a53514': 'Custom time copy',
      '781b07fd': 'Go Date',
      '1076d771': 'Last Seven Days',
      '6ab47cd2': 'This Month',
    },
  })
  const d = new Date()
  const currDay = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  const [date, setDate] = useState(currDay)
  const [date1, setDate1] = useState(['2023-01-23', '2023-11-26'])
  const [date3, setDate3] = useState('')
  const [date4, setDate4] = useState<string[]>([])
  const [date40, setDate40] = useState<string[]>([])
  const [date41, setDate41] = useState<string[]>([])
  const [date42, setDate42] = useState<string[]>([])
  const [date5, setDate5] = useState<string[]>(['2023-03-23', '2023-11-26'])
  const [date6, setDate6] = useState<string[]>(['2023-06-12', '2023-06-16'])
  const [date7, setDate7] = useState<string[]>(['2023-07-10', '2023-07-19'])
  const [date8, setDate8] = useState<string[]>(['2023-06-03', '2023-06-16'])
  const [dateWeek, setDateWeek] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [isVisible4, setIsVisible4] = useState(false)
  const [isVisible40, setIsVisible40] = useState(false)
  const [isVisible41, setIsVisible41] = useState(false)
  const [isVisible42, setIsVisible42] = useState(false)
  const [isVisible5, setIsVisible5] = useState(false)
  const [isVisible6, setIsVisible6] = useState(false)
  const [isVisible7, setIsVisible7] = useState(false)

  const calendarRef = useRef<any>(null)

  const openSwitch = () => {
    setIsVisible(true)
  }

  const openSwitch1 = () => {
    setIsVisible1(true)
  }

  const openSwitch3 = () => {
    setIsVisible3(true)
  }
  const openSwitch4 = () => {
    setIsVisible4(true)
  }
  const openSwitch40 = () => {
    setIsVisible40(true)
  }
  const openSwitch41 = () => {
    setIsVisible41(true)
  }
  const openSwitch42 = () => {
    setIsVisible42(true)
  }
  const openSwitch5 = () => {
    setIsVisible5(true)
  }
  const openSwitch6 = () => {
    setIsVisible6(true)
  }
  const openSwitch7 = () => {
    setIsVisible7(true)
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

  const closeSwitch4 = () => {
    setIsVisible4(false)
  }
  const closeSwitch40 = () => {
    setIsVisible40(false)
  }
  const closeSwitch41 = () => {
    setIsVisible41(false)
  }
  const closeSwitch42 = () => {
    setIsVisible42(false)
  }
  const closeSwitch5 = () => {
    setIsVisible5(false)
  }

  const closeSwitch6 = () => {
    setIsVisible6(false)
  }

  const closeSwitch7 = () => {
    setIsVisible7(false)
  }

  const setChooseValue = (param: string) => {
    setDate(param[3])
    setDateWeek(param[4])
  }

  const setChooseValue1 = (param: string) => {
    setDate1([...[param[0][3], param[1][3]]])
  }
  const setChooseValue3 = (param: string) => {
    setDate3(param[3])
  }

  const setChooseValue4 = (chooseData: any) => {
    const dateArr = chooseData.map((item: any) => {
      return item[3]
    })
    setDate4([...dateArr])
  }
  const setChooseValue40 = (chooseData: any) => {
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate40([...dateArr])
  }
  const setChooseValue41 = (chooseData: any) => {
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate41([...dateArr])
  }

  const setChooseValue42 = (chooseData: any) => {
    console.log(
      'setChooseValue42',
      [...[chooseData[0][3], chooseData[1][3]]],
      chooseData
    )
    const dateArr = [...[chooseData[0][3], chooseData[1][3]]]
    setDate42([...dateArr])
  }
  const setChooseValue5 = (param: string) => {
    setDate5([...[param[0][3], param[1][3]]])
  }

  const setChooseValue6 = (param: string) => {
    setDate6([...[param[0][3], param[1][3]]])
  }

  const setChooseValue7 = (param: string) => {
    setDate7([...[param[0][3], param[1][3]]])
  }

  const setChooseValue8 = (param: string) => {
    setDate8([...[param[0][3], param[1][3]]])
  }
  const select = (param: string) => {
    console.log(param)
  }

  const yearMonthChange = (param: string) => {
    console.log(param)
  }

  const goDate = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollToDate('2023-04-01')
    }
  }

  const clickBtn = () => {
    const date = [Utils.date2Str(new Date()), Utils.getDay(6)]
    setDate7(date)
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
    setDate7([`${yearMonth}-01`, `${yearMonth}-${currMonthDays}`])
    if (calendarRef.current) {
      calendarRef.current.scrollToDate(`${yearMonth}-01`)
    }
  }
  const disableDate = (date: Day) => {
    return date.day === 25 || date.day === 20 || date.day === 22
  }
  const padZero = (d: number | string) => {
    return d <= 9 ? `0${d}` : d
  }

  const renderDay = (date: Day) => {
    return <>{padZero(date.day)}</>
  }
  const renderDayTop = (date: Day) => {
    let currDate = ''
    if (date && date.day === 10) {
      currDate = '☺'
    }
    return <span className="info">{currDate}</span>
  }

  const renderDayBottom = (date: Day) => {
    let currDate = ''
    if (date && date.day === 10) {
      currDate = '纪念日'
    }
    return <span className="info">{currDate}</span>
  }

  const renderHeaderButtons = () => {
    return (
      <div className="wrapper">
        <div className="d_div">
          <span className="d_btn" onClick={goDate}>
            {translated['781b07fd']}
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn}>
            {translated['1076d771']}
          </span>
        </div>
        <div className="d_div">
          <span className="d_btn" onClick={clickBtn1}>
            {translated['6ab47cd2']}
          </span>
        </div>
      </div>
    )
  }

  const [show1, setShow1] = useState(false)
  const [dpAbled, setDatePickerAbled] = useState([false, false])
  const [desc1, setDesc1] = useState('10:00:00')
  const [desc2, setDesc2] = useState('20:00:00')
  const desc = useRef(0)
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
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.ce5c5446}</h2>
        <Cell
          title={translated.c38a08ef}
          description={date ? `${date} ${dateWeek}` : translated.b840c88f}
          onClick={openSwitch}
        />
        <Calendar
          visible={isVisible}
          showTitle={false}
          defaultValue={date}
          endDate="2023-11-30"
          onClose={closeSwitch}
          onConfirm={setChooseValue}
          onDayClick={select}
        />
        <Cell
          title={translated.a74a1fd4}
          description={
            date1
              ? `${date1[0]}${translated['8dab2f66']}${date1[1]}`
              : translated.b840c88f
          }
          onClick={openSwitch1}
        />
        <Calendar
          visible={isVisible1}
          defaultValue={date1}
          type="range"
          startDate="2022-12-22"
          endDate="2024-01-08"
          onClose={closeSwitch1}
          onConfirm={setChooseValue1}
          onDayClick={select}
        />
        <Cell
          title={translated['7db1a8b2']}
          description={
            date4 && date4.length
              ? `${translated.a52bef0c}${date4.length}`
              : translated.b840c88f
          }
          onClick={openSwitch4}
        />
        <Calendar
          visible={isVisible4}
          defaultValue={date4}
          type="multiple"
          startDate="2023-01-01"
          endDate="2024-09-10"
          onClose={closeSwitch4}
          onConfirm={setChooseValue4}
        />
        <Cell
          title={translated['7db1a8b3']}
          description={
            date40 && date40.length
              ? `${date40[0]}${translated['8dab2f66']}${date40[1]}`
              : translated.b840c88f
          }
          onClick={openSwitch40}
        />
        <Calendar
          visible={isVisible40}
          defaultValue={date40}
          type="week"
          startDate="2023-01-01"
          endDate="2024-09-10"
          firstDayOfWeek={1}
          onClose={closeSwitch40}
          onConfirm={setChooseValue40}
        />

        <Cell
          title={translated['7db1a8b4']}
          description={
            date41 && date41.length
              ? `${date41[0]}${translated['8dab2f66']}${date41[1]}`
              : translated.b840c88f
          }
          onClick={openSwitch41}
        />
        <Calendar
          visible={isVisible41}
          defaultValue={date41}
          type="week"
          startDate="2023-01-01"
          endDate="2024-09-10"
          disableDate={disableDate}
          firstDayOfWeek={1}
          onClose={closeSwitch41}
          onConfirm={setChooseValue41}
        />

        <Cell
          title={translated['7db1a8b5']}
          description={
            <div className="desc-box">
              <div className="desc" onClick={openSwitch42}>
                {date42 && date42.length
                  ? `${date42[0]} ${desc1}`
                  : translated['8dab2f67']}
              </div>
              <div className="desc1">-</div>
              <div className="desc" onClick={openSwitch42}>
                {date42 && date42.length
                  ? `${date42[1]} ${desc2}`
                  : translated['8dab2f68']}
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

        <h2>{translated.cfbdc781}</h2>
        <Cell
          title={translated.c3a3a1d2}
          description={date3 ? `${date3}` : translated.b840c88f}
          onClick={openSwitch3}
        />
        <Calendar
          visible={isVisible3}
          defaultValue={date3}
          startDate=""
          endDate=""
          autoBackfill
          onClose={closeSwitch3}
          onConfirm={setChooseValue3}
        />
        <Cell
          title={translated.a74a1fd4}
          description={
            date1
              ? `${date5[0]}${translated['8dab2f66']}${date5[1]}`
              : translated.b840c88f
          }
          onClick={openSwitch5}
        />
        <Calendar
          visible={isVisible5}
          defaultValue={date5}
          type="range"
          autoBackfill
          startDate="2022-12-22"
          endDate="2024-01-08"
          onClose={closeSwitch5}
          onConfirm={setChooseValue5}
          onDayClick={select}
        />
        <h2>{translated.d04fcbda}</h2>
        <Cell
          title={translated['60a53514']}
          description={
            date6
              ? `${date6[0]}${translated['8dab2f66']}${date6[1]}`
              : translated.b840c88f
          }
          onClick={openSwitch6}
        />
        <Calendar
          visible={isVisible6}
          defaultValue={date6}
          type="range"
          startDate="2023-2-22"
          endDate="2024-01-08"
          confirmText="submit"
          startText="enter"
          endText="leave"
          renderDay={renderDay}
          renderDayTop={renderDayTop}
          renderDayBottom={renderDayBottom}
          showToday
          onClose={closeSwitch6}
          onConfirm={setChooseValue6}
        />

        <Cell
          title={translated['0aaad620']}
          description={
            date7
              ? `${date7[0]}${translated['8dab2f66']}${date7[1]}`
              : translated.b840c88f
          }
          onClick={openSwitch7}
        />
        <Calendar
          ref={calendarRef}
          visible={isVisible7}
          defaultValue={date7}
          type="range"
          startDate="2022-12-22"
          endDate="2024-12-31"
          renderHeaderButtons={renderHeaderButtons}
          onClose={closeSwitch7}
          onConfirm={setChooseValue7}
        />
        <h2>{translated.e51e4582}</h2>
        <div
          className="test-calendar-wrapper"
          style={{
            display: 'flex',
            width: '100%',
            height: '613px',
            overflow: 'hidden',
          }}
        >
          <Calendar
            popup={false}
            defaultValue={date8}
            type="range"
            startDate="2023-5-23"
            endDate="2023-08-01"
            startText={<div>test</div>}
            endText="leave"
            autoBackfill
            onConfirm={setChooseValue8}
            onPageChange={yearMonthChange}
          />
        </div>
      </div>
    </>
  )
}

export default CalendarDemo
