import React, { useState } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Cell, Calendar } from '@/packages/nutui.react.taro'

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
  '7db1a8b2': string
  a52bef0c: string
  d04fcbda: string
  '0aaad620': string
  '60a53514': string
  b8a453e3: string
  '248be9e1': string
  ea3d02f2: string
  c9e6df49: string
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
      cfbdc781: '自定义日历-自动回填',
      c3a3a1d2: '选择日期',
      e51e4582: '平铺展示',
      '7db1a8b2': '禁用状态',
      a52bef0c: '加载状态',
      d04fcbda: '加载中',
      '0aaad620': '按钮尺寸',
      '60a53514': '收藏',
      b8a453e3: '大号按钮',
      '248be9e1': '普通按钮',
      ea3d02f2: '小型按钮',
      c9e6df49: '块级元素',
      '781b07fd': '自定义颜色',
      '1076d771': '单色按钮',
      '6ab47cd2': '渐变按钮',
    },
    'zh-TW': {
      ce5c5446: '基礎翻譯',
      c38a08ef: '選擇日期',
      b840c88f: '請選擇',
      a74a1fd4: '選擇日期區間',
      '8dab2f66': '至',
      cfbdc781: '自定義日曆-自動回填',
      c3a3a1d2: '選擇日期',
      e51e4582: '平鋪展示',
      '7db1a8b2': '禁用狀態',
      a52bef0c: '載入狀態',
      d04fcbda: '載入中',
      '0aaad620': '按鈕尺寸',
      '60a53514': '收藏',
      b8a453e3: '大號按鈕',
      '248be9e1': '普通按鈕',
      ea3d02f2: '小型按鈕',
      c9e6df49: '塊級元素',
      '781b07fd': '自定義顏色',
      '1076d771': '單色按鈕',
      '6ab47cd2': '漸變按鈕',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'select a single date',
      b840c88f: 'please choose',
      a74a1fd4: 'Select date range',
      '8dab2f66': 'to',
      cfbdc781: 'Custom Calendar - Auto Backfill',
      c3a3a1d2: 'select date',
      e51e4582: 'Tiled display',
      '7db1a8b2': 'Disabled State',
      a52bef0c: 'Load State',
      d04fcbda: 'Loading',
      '0aaad620': 'Button size',
      '60a53514': 'Favorite',
      b8a453e3: 'Large button',
      '248be9e1': 'Normal Button',
      ea3d02f2: 'Mini Button',
      c9e6df49: 'Block-level elements',
      '781b07fd': 'Custom Colors',
      '1076d771': 'Monochrome button',
      '6ab47cd2': 'Gradient button',
    },
  })
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
        <h2>{translated.ce5c5446}</h2>
        <Cell
          title={translated.c38a08ef}
          desc={date ? `${date} ${dateWeek}` : translated.b840c88f}
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
          title={translated.a74a1fd4}
          desc={
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
          startDate="2019-12-22"
          endDate="2021-01-08"
          onClose={closeSwitch1}
          onChoose={setChooseValue1}
        />
        <h2>{translated.cfbdc781}</h2>
        <Cell
          title={translated.c3a3a1d2}
          desc={date3 ? `${date3}` : translated.b840c88f}
          onClick={openSwitch3}
        />
        <Calendar
          visible={isVisible3}
          defaultValue={date3}
          startDate=""
          endDate=""
          isAutoBackFill
          onClose={closeSwitch3}
          onChoose={setChooseValue3}
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
