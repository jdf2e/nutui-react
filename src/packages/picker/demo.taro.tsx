import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Cell, Picker, ConfigProvider } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { Internation } from './doc.en'

interface T {
  [props: string]: string
}
interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
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
  const [isVisible7, setIsVisible7] = useState(false)
  const [isVisible8, setIsVisible8] = useState(false)

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
        disabled: true,
      },
      {
        value: 6,
        text: translated.wuhan,
      },
      {
        value: 7,
        text: translated.yangzhou,
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
        text: translated.shijiazhuang,
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

  const [custmerCityData] = useState([
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
  ])
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
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    console.log('多级联动确定', values, options)
    const str = options.map((item) => item.text).join('-')
    setCityCustmer(str)
  }

  const setAsyncConfirm = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    console.log('异步获取确定', values, options)
    const str = options.map((item) => item.text).join('-')
    setasyncDesc(str)
  }

  const updateChooseValueCustmer = (
    options: PickerOption[],
    values: (string | number)[],
    columnIndex: number
  ) => {
    console.log('updateChooseValueCustmer', columnIndex, values, options)
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
  const changePicker = (options: any[], values: any, columnIndex: number) => {
    console.log('picker onChange', columnIndex, values, options)
  }
  const [val, setVal] = useState<Array<number | string>>([])
  // 确定选择
  const confirmPicker = (
    type: string,
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    console.log('picker选择确定', values, options)
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.text}`
    })
    if (type === 'base') {
      setBaseDesc(description)
      setIsVisible1(false)
    }
    if (type === 'mutil') {
      setMutilDesc(description)
      setIsVisible2(false)
    }

    if (type === 'default') {
      setbaseDefault(description)
      setDefaultValue([options[0].value as number])
      setIsVisible4(false)
    }

    if (type === 'tile') {
      settileDesc(description)
      setIsVisible6(false)
    }
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.chooseCity}
          description={baseDesc}
          onClick={() => setIsVisible1(true)}
        />
        <Picker
          title={translated.chooseCity}
          visible={isVisible1}
          options={listData1}
          onConfirm={(list, values) => confirmPicker('base', list, values)}
          onClose={() => {
            setIsVisible1(false)
            console.log('onclose')
          }}
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
          onConfirm={(list, values) => confirmPicker('default', list, values)}
          defaultValue={defaultValue}
          onClose={() => setIsVisible4(false)}
          onChange={changePicker}
        />

        <h2>{translated.controlled}</h2>
        <Cell
          title={translated.chooseCity}
          description={baseDesc}
          onClick={() => setIsVisible7(!isVisible7)}
        />
        <Picker
          title={translated.chooseCity}
          visible={isVisible7}
          value={val}
          options={listData1}
          onConfirm={(list, values) => {
            confirmPicker('base', list, values)
            setIsVisible7(false)
            setVal(values)
          }}
          onClose={() => {
            setIsVisible7(false)
          }}
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
          onConfirm={(list, values) => confirmPicker('mutil', list, values)}
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
          onConfirm={(list, values) => confirmPicker('tile', list, values)}
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
          onConfirm={(list, values) => setChooseValueCustmer(list, values)}
          onChange={(
            options: PickerOption[],
            value: (string | number)[],
            columnIndex: number
          ) => console.log(asyncData, '多级联动', columnIndex, value, options)}
        />

        <h2>{translated.async}</h2>
        <Cell
          title={translated.chooseCity}
          description={asyncDesc}
          onClick={() => setIsVisible5(!isVisible5)}
        />

        <Picker
          visible={isVisible5}
          options={asyncData}
          onClose={() => setIsVisible5(false)}
          onConfirm={(list, values) => setAsyncConfirm(list, values)}
          onChange={(
            selectedOptions: PickerOption[],
            selectedValue: (string | number)[],
            columnIndex: number
          ) =>
            updateChooseValueCustmer(
              selectedOptions,
              selectedValue,
              columnIndex
            )
          }
        />

        <h2>{translated.theme}</h2>
        <Cell
          title={translated.chooseCity}
          description={asyncDesc}
          onClick={() => setIsVisible8(!isVisible8)}
        />
        <ConfigProvider
          theme={{
            nutuiPickerItemHeight: '48px',
            nutuiPickerItemActiveLineBorder:
              '1px dashed var(--nutui-brand-color)',
            nutuiPickerItemTextColor: 'var(--nutui-brand-color)',
          }}
        >
          <Picker
            title={translated.chooseCity}
            visible={isVisible8}
            options={listData1}
            onConfirm={(list, values) => confirmPicker('base', list, values)}
            onClose={() => {
              setIsVisible8(false)
              console.log('onclose')
            }}
          />
        </ConfigProvider>
      </div>
    </>
  )
}

export default PickerDemo
