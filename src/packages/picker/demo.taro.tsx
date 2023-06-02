import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Cell, Picker } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
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
  const [isVisible7, setIsVisible7] = useState(false)

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
  const changePicker = (options: any[], values: any, columnIndex: number) => {
    console.log('picker选择change', columnIndex, values, options)
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
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>基础用法</h2>
        <Cell
          title="请选择城市"
          description={baseDesc}
          onClick={() => setIsVisible1(!isVisible1)}
        />
        <Picker
          title="请选择城市"
          visible={isVisible1}
          options={listData1}
          onConfirm={(list, values) => confirmPicker('base', list, values)}
          onClose={() => setIsVisible1(false)}
          onChange={changePicker}
        />

        <h2>默认选中项</h2>
        <Cell
          title="请选择城市"
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

        <h2>受控</h2>
        <Cell
          title="请选择城市"
          description={baseDesc}
          onClick={() => setIsVisible7(!isVisible7)}
        />
        <Picker
          title="请选择城市"
          visible={isVisible7}
          value={val}
          options={listData1}
          onConfirm={(list, values) => {
            confirmPicker('base', list, values)
            setVal(values)
          }}
          onClose={() => {
            setIsVisible7(false)
          }}
        />

        <h2>多列用法</h2>
        <Cell
          title="多列用法"
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
        <h2>平铺展示</h2>
        <Cell
          title="请选择城市"
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

        <h2>多级联动</h2>
        <Cell
          title="多级联动"
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

        <h2>动态获取</h2>
        <Cell
          title="请选择城市"
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
      </div>
    </>
  )
}

export default PickerDemo
