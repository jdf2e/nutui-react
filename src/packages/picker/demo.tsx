import React, { useState } from 'react'
import Picker from './picker'
import Cell from '@/packages/cell'

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
  const APIData = [
    {
      value: 1,
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
  ]
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
    chooseData: PickerOption[]
  ) => {
    const str = chooseData.map((item) => item.text).join('-')
    setCityCustmer(str)
  }

  const setAsyncConfirm = (
    values: (string | number)[],
    chooseData: PickerOption[]
  ) => {
    const str = chooseData.map((item) => item.text).join('-')
    setasyncDesc(str)
  }

  const updateChooseValueCustmer = (
    columnIndex: number,
    option: PickerOption
  ) => {
    if (columnIndex === 0) {
      const { value, text } = option
      setTimeout(() => {
        const resItems = APIData.find((item) => item.value === value)
        if (resItems && resItems.children.length) {
          setAsyncData(custmerCityData)
        }
      }, 100)
    }
  }

  // 切换选择项
  const changePicker = (columnIndex: number, option: any, list: any[]) => {
    console.log(columnIndex, option)
  }
  // 确定选择
  const confirmPicker = (
    type: string,
    values: (string | number)[],
    options: PickerOption[]
  ) => {
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
      <div className="demo">
        <h2>基础用法</h2>
        <Cell
          title="请选择城市"
          desc={baseDesc}
          onClick={() => setIsVisible1(!isVisible1)}
        />
        <Picker
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
          onChange={(index: number, value: PickerOption, list: any[]) =>
            console.log('选择用户')
          }
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
          onChange={(columnIndex: number, option: PickerOption) =>
            updateChooseValueCustmer(columnIndex, option)
          }
        />
      </div>
    </>
  )
}

export default PickerDemo
