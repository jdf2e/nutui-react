import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [visible, setIsVisible] = useState(false)
  const [asyncDesc, setasyncDesc] = useState('')
  const [asyncData, setCustmerCityData] = useState([
    {
      value: 1,
      text: '北京市',
      children: [
        { value: 1, text: '朝阳区' },
        { value: 2, text: '海淀区' },
        { value: 3, text: '大兴区' },
        { value: 4, text: '东城区' },
        { value: 5, text: '西城区' },
        { value: 6, text: '丰台区' },
      ],
    },
    {
      value: 2,
      text: '上海市',
      children: [],
    },
  ])
  const setAsyncConfirm = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    const str = options.map((item) => item.text).join('-')
    setasyncDesc(str)
  }
  const updateChooseValueCustmer = (
    options: PickerOption[],
    values: (string | number)[],
    columnIndex: number
  ) => {
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

  return (
    <>
      <Cell
        title="请选择城市"
        description={asyncDesc}
        onClick={() => setIsVisible(!visible)}
      />
      <Picker
        visible={visible}
        options={asyncData}
        onClose={() => setIsVisible(false)}
        onConfirm={(list, values) => setAsyncConfirm(list, values)}
        onChange={(
          selectedOptions: PickerOption[],
          selectedValue: (string | number)[],
          columnIndex: number
        ) =>
          updateChooseValueCustmer(selectedOptions, selectedValue, columnIndex)
        }
      />
    </>
  )
}
export default Demo6
