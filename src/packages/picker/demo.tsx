import React, { useState } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { Internation } from './doc.en'
import Picker from './picker'
import Cell from '@/packages/cell'

interface T {
  [props: string]: string
}
interface PickerOption {
  text: string | number
  value: string | number
  disabled?: string
  children?: PickerOption[]
  className?: string | number
}

const PickerDemo = () => {
  const [translated] = useTranslate<T>(Internation)

  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [isVisible4, setIsVisible4] = useState(false)
  const [isVisible5, setIsVisible5] = useState(false)
  const [isVisible6, setIsVisible6] = useState(false)

  const [cityCustmer, setCityCustmer] = useState('')
  const [baseDesc, setBaseDesc] = useState('')
  const [baseDefault, setbaseDefault] = useState('')
  const [mutilDesc, setMutilDesc] = useState('')
  const [asyncDesc, setasyncDesc] = useState('')
  const [tileDesc, settileDesc] = useState('')

  const [defaultValue, setDefaultValue] = useState([2])

  const listData1 = [
    [
      {
        value: 1,
        text: translated.nanJing,
      },
      {
        value: 2,
        text: translated.wuXi,
      },
      {
        value: 3,
        text: translated.zangZu,
      },
      {
        value: 4,
        text: translated.beiJing,
      },
      {
        value: 5,
        text: translated.lianYunGang,
      },
      {
        value: 6,
        text: translated.zheJiang,
      },
      {
        value: 7,
        text: translated.jiangSu,
      },
      {
        value: 8,
        text: translated.daQing,
      },
      {
        value: 9,
        text: translated.suiHua,
      },
      {
        value: 10,
        text: translated.weiFang,
      },
      {
        value: 11,
        text: translated.anshi,
      },
      {
        value: 12,
        text: translated.wlmq,
      },
    ],
  ]

  const listData2 = [
    // 第一列
    [
      { text: translated.monday, value: 'Monday' },
      { text: translated.tuesday, value: 'Tuesday' },
      { text: translated.wednesday, value: 'Wednesday' },
      { text: translated.thursday, value: 'Thursday' },
      { text: translated.friday, value: 'Friday' },
    ],
    // 第二列
    [
      { text: translated.morning, value: 'Morning' },
      { text: translated.afternoon, value: 'Afternoon' },
      { text: translated.evening, value: 'Evening' },
    ],
  ]

  const custmerCityData = [
    {
      value: 1,
      text: translated.beiJing,
      children: [
        {
          value: 1,
          text: translated.chaoYang,
        },
        {
          value: 2,
          text: translated.haiDian,
        },
        {
          value: 3,
          text: translated.daXing,
        },
        {
          value: 4,
          text: translated.dongCheng,
        },
        {
          value: 5,
          text: translated.xiCheng,
        },
        {
          value: 6,
          text: translated.fengTai,
        },
      ],
    },
    {
      value: 2,
      text: translated.shangHai,
      children: [
        {
          value: 1,
          text: translated.huangPu,
        },
        {
          value: 2,
          text: translated.changNing,
        },
        {
          value: 3,
          text: translated.puTuo,
        },
        {
          value: 4,
          text: translated.yangPu,
        },
        {
          value: 5,
          text: translated.puDong,
        },
      ],
    },
  ]

  // 动态获取
  const [asyncData, setAsyncData] = useState([
    {
      value: 1,
      text: translated.beiJing,
      children: [
        {
          value: 1,
          text: translated.chaoYang,
        },
        {
          value: 2,
          text: translated.haiDian,
        },
        {
          value: 3,
          text: translated.daXing,
        },
        {
          value: 4,
          text: translated.dongCheng,
        },
        {
          value: 5,
          text: translated.xiCheng,
        },
        {
          value: 6,
          text: translated.fengTai,
        },
      ],
    },
    {
      value: 2,
      text: translated.shangHai,
      children: [],
    },
  ])

  const setChooseValueCustmer = (
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    console.log(values, options)
    const str = options.map((item) => item.text).join('-')
    setCityCustmer(str)
  }

  const setAsyncConfirm = (
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    console.log(values, options)
    const str = options.map((item) => item.text).join('-')
    setasyncDesc(str)
  }

  const updateChooseValueCustmer = (
    columnIndex: number,
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    console.log(columnIndex, values, options)
    if (columnIndex === 0 && values[0] === 2) {
      setTimeout(() => {
        if (asyncData[1].children.length === 0) {
          asyncData[1].children = [
            {
              value: 1,
              text: translated.huangPu,
            },
            {
              value: 2,
              text: translated.changNing,
            },
            {
              value: 3,
              text: translated.puTuo,
            },
            {
              value: 4,
              text: translated.yangPu,
            },
            {
              value: 5,
              text: translated.puDong,
            },
          ]

          setAsyncData([...asyncData])
        }
      }, 100)
    }
  }

  // 切换选择项
  const changePicker = (columnIndex: number, values: any, options: any[]) => {}
  // 确定选择
  const confirmPicker = (
    type: string,
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    console.log('demo 确定')
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.text}`
    })
    if (type === 'base') {
      setBaseDesc(description)
    }
    if (type === 'mutil') {
      setMutilDesc(description)
    }

    if (type === 'default') {
      setbaseDefault(description)
      setDefaultValue([options[0].value as number])
    }

    if (type === 'tile') {
      settileDesc(description)
    }
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.chooseCity}
          description={baseDesc}
          onClick={() => setIsVisible1(!isVisible1)}
        />
        <Picker
          title={translated.chooseCity}
          visible={isVisible1}
          options={listData1}
          onConfirm={(values, list) => confirmPicker('base', values, list)}
          onClose={() => setIsVisible1(false)}
          onChange={changePicker}
        />

        <h2>{translated.defaultSelected}</h2>
        <Cell
          title={translated.chooseCity}
          description={baseDefault}
          onClick={() => setIsVisible4(!isVisible4)}
        />
        <Picker
          visible={isVisible4}
          options={listData1}
          onConfirm={(values, list) => confirmPicker('default', values, list)}
          defaultValue={defaultValue}
          onClose={() => setIsVisible4(false)}
          onChange={changePicker}
        />

        <h2>{translated.multipleColumns}</h2>
        <Cell
          title={translated.multipleColumns}
          description={mutilDesc}
          onClick={() => setIsVisible2(!isVisible2)}
        />
        <Picker
          visible={isVisible2}
          options={listData2}
          onClose={() => setIsVisible2(false)}
          defaultValue={['Wednesday']}
          onChange={changePicker}
          onConfirm={(values, list) => confirmPicker('mutil', values, list)}
        />
        <h2>{translated.tileDesc}</h2>
        <Cell
          title={translated.chooseCity}
          description={tileDesc}
          onClick={() => setIsVisible6(!isVisible6)}
        />
        <Picker
          visible={isVisible6}
          options={listData1}
          onConfirm={(values, list) => confirmPicker('tile', values, list)}
          defaultValue={defaultValue}
          threeDimensional={false}
          duration={1000}
          onClose={() => setIsVisible6(false)}
          onChange={changePicker}
        />

        <h2>{translated.cascade}</h2>
        <Cell
          title={translated.cascade}
          description={cityCustmer}
          onClick={() => setIsVisible3(!isVisible3)}
        />

        <Picker
          visible={isVisible3}
          options={custmerCityData}
          onClose={() => setIsVisible3(false)}
          onConfirm={(values, list: PickerOption[]) =>
            setChooseValueCustmer(values, list)
          }
          onChange={(
            columnIndex: number,
            value: (string | number)[],
            options: PickerOption[]
          ) =>
            console.log(
              asyncData,
              translated.cascade,
              columnIndex,
              value,
              options
            )
          }
        />

        <h2>{translated.async}</h2>
        <Cell
          title={translated.chooseCity}
          description={asyncDesc}
          onClick={() => setIsVisible5(!isVisible5)}
        />

        <Picker
          visible={isVisible5}
          options={custmerCityData}
          onClose={() => setIsVisible5(false)}
          onConfirm={(values, list: PickerOption[]) =>
            setAsyncConfirm(values, list)
          }
          onChange={(
            columnIndex: number,
            value: (string | number)[],
            options: PickerOption[]
          ) => updateChooseValueCustmer(columnIndex, value, options)}
        />
      </div>
    </>
  )
}

export default PickerDemo
