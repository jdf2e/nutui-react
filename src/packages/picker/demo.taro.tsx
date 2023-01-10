import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Cell, Picker } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: string
  children?: PickerOption[]
  className?: string | number
}

const PickerDemo = () => {
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
        text: '南京市',
      },
      {
        value: 2,
        text: '无锡市',
      },
      {
        value: 3,
        text: '海北藏族自治区',
      },
      {
        value: 4,
        text: '北京市',
      },
      {
        value: 5,
        text: '连云港市',
      },
      {
        value: 6,
        text: '浙江市',
      },
      {
        value: 7,
        text: '江苏市',
      },
      {
        value: 8,
        text: '大庆市',
      },
      {
        value: 9,
        text: '绥化市',
      },
      {
        value: 10,
        text: '潍坊市',
      },
      {
        value: 11,
        text: '请按市',
      },
      {
        value: 12,
        text: '乌鲁木齐市',
      },
    ],
  ]

  const listData2 = [
    // 第一列
    [
      { text: '周一', value: 'Monday' },
      { text: '周二', value: 'Tuesday' },
      { text: '周三', value: 'Wednesday' },
      { text: '周四', value: 'Thursday' },
      { text: '周五', value: 'Friday' },
    ],
    // 第二列
    [
      { text: '上午', value: 'Morning' },
      { text: '下午', value: 'Afternoon' },
      { text: '晚上', value: 'Evening' },
    ],
  ]

  const [custmerCityData, setCustmerCityData] = useState([
    {
      value: 1,
      text: '北京',
      children: [
        {
          value: 1,
          text: '朝阳区',
        },
        {
          value: 2,
          text: '海淀区',
        },
        {
          value: 3,
          text: '大兴区',
        },
        {
          value: 4,
          text: '东城区',
        },
        {
          value: 5,
          text: '西城区',
        },
        {
          value: 6,
          text: '丰台区',
        },
      ],
    },
    {
      value: 2,
      text: '上海',
      children: [
        {
          value: 1,
          text: '黄浦区',
        },
        {
          value: 2,
          text: '长宁区',
        },
        {
          value: 3,
          text: '普陀区',
        },
        {
          value: 4,
          text: '杨浦区',
        },
        {
          value: 5,
          text: '浦东新区',
        },
      ],
    },
  ])
  // 动态获取
  const [asyncData, setAsyncData] = useState([
    {
      value: 1,
      text: '北京',
      children: [
        {
          value: 1,
          text: '朝阳区',
        },
        {
          value: 2,
          text: '海淀区',
        },
        {
          value: 3,
          text: '大兴区',
        },
        {
          value: 4,
          text: '东城区',
        },
        {
          value: 5,
          text: '西城区',
        },
        {
          value: 6,
          text: '丰台区',
        },
      ],
    },
    {
      value: 2,
      text: '上海',
      children: [],
    },
  ])

  const setChooseValueCustmer = (
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    console.log('多级联动确定', values, options)
    const str = options.map((item) => item.text).join('-')
    setCityCustmer(str)
  }

  const setAsyncConfirm = (
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    console.log('异步获取确定', values, options)
    const str = options.map((item) => item.text).join('-')
    setasyncDesc(str)
  }

  const updateChooseValueCustmer = (
    columnIndex: number,
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    console.log('异步获取change', columnIndex, values, options)
    if (columnIndex === 0 && values[0] === 2) {
      setTimeout(() => {
        if (asyncData[1].children.length === 0) {
          asyncData[1].children = [
            { value: 1, text: '黄浦区' },
            { value: 2, text: '长宁区' },
            { value: 3, text: '普陀区' },
            { value: 4, text: '杨浦区' },
            { value: 5, text: '浦东新区' },
          ]

          setAsyncData([...asyncData])
        }
      }, 100)
    }
  }

  // 切换选择项
  const changePicker = (columnIndex: number, values: any, options: any[]) => {
    console.log('picker选择change', columnIndex, values, options)
  }
  // 确定选择
  const confirmPicker = (
    type: string,
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    console.log('picker选择确定', values, options)
    let desc = ''
    options.forEach((option: any) => {
      desc += option.text
    })
    if (type === 'base') {
      setBaseDesc(desc)
    }
    if (type === 'mutil') {
      setMutilDesc(desc)
    }

    if (type === 'default') {
      setbaseDefault(desc)
      setDefaultValue([options[0].value as number])
    }

    if (type === 'tile') {
      settileDesc(desc)
    }
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>基础用法</h2>
        <Cell
          title="请选择城市"
          desc={baseDesc}
          onClick={() => setIsVisible1(!isVisible1)}
        />
        <Picker
          title="请选择城市"
          isVisible={isVisible1}
          listData={listData1}
          onConfirm={(values, list) => confirmPicker('base', values, list)}
          onClose={() => setIsVisible1(false)}
          onChange={changePicker}
        />

        <h2>默认选中项</h2>
        <Cell
          title="请选择城市"
          desc={baseDefault}
          onClick={() => setIsVisible4(!isVisible4)}
        />
        <Picker
          isVisible={isVisible4}
          listData={listData1}
          onConfirm={(values, list) => confirmPicker('default', values, list)}
          defaultValueData={defaultValue}
          onClose={() => setIsVisible4(false)}
          onChange={changePicker}
        />

        <h2>多列用法</h2>
        <Cell
          title="多列用法"
          desc={mutilDesc}
          onClick={() => setIsVisible2(!isVisible2)}
        />
        <Picker
          isVisible={isVisible2}
          listData={listData2}
          onClose={() => setIsVisible2(false)}
          defaultValueData={['Wednesday']}
          onChange={changePicker}
          onConfirm={(values, list) => confirmPicker('mutil', values, list)}
        />
        <h2>平铺展示</h2>
        <Cell
          title="请选择城市"
          desc={tileDesc}
          onClick={() => setIsVisible6(!isVisible6)}
        />
        <Picker
          isVisible={isVisible6}
          listData={listData1}
          onConfirm={(values, list) => confirmPicker('tile', values, list)}
          defaultValueData={defaultValue}
          threeDimensional={false}
          swipeDuration={1000}
          onClose={() => setIsVisible6(false)}
          onChange={changePicker}
        />

        <h2>多级联动</h2>
        <Cell
          title="多级联动"
          desc={cityCustmer}
          onClick={() => setIsVisible3(!isVisible3)}
        />

        <Picker
          isVisible={isVisible3}
          listData={custmerCityData}
          onClose={() => setIsVisible3(false)}
          onConfirm={(values, list: PickerOption[]) =>
            setChooseValueCustmer(values, list)
          }
          onChange={(
            columnIndex: number,
            value: (string | number)[],
            options: PickerOption[]
          ) => console.log('多级联动', columnIndex, value, options)}
        />

        <h2>动态获取</h2>
        <Cell
          title="请选择城市"
          desc={asyncDesc}
          onClick={() => setIsVisible5(!isVisible5)}
        />

        <Picker
          isVisible={isVisible5}
          listData={asyncData}
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
