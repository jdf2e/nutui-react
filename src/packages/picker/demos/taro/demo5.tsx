import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [visible, setIsVisible] = useState(false)
  const [cityCustmer, setCityCustmer] = useState('')
  const [custmerCityData, setCustmerCityData] = useState([
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
      children: [
        { value: 1, text: '黄浦区' },
        { value: 2, text: '长宁区' },
        { value: 3, text: '普陀区' },
        { value: 4, text: '杨浦区' },
        { value: 5, text: '浦东新区' },
      ],
    },
  ])
  const setChooseValueCustmer = (
    values: (string | number)[],
    chooseData: PickerOption[]
  ) => {
    const str = chooseData.map((item) => item.text).join('-')
    setCityCustmer(str)
  }

  return (
    <>
      <Cell
        title="多级联动"
        description={cityCustmer}
        onClick={() => setIsVisible(!visible)}
      />
      <Picker
        visible={visible}
        options={custmerCityData}
        onClose={() => setIsVisible(false)}
        onConfirm={(list, values) => setChooseValueCustmer(list, values)}
        onChange={(
          options: PickerOption[],
          value: (string | number)[],
          columnIndex: number
        ) => console.log(asyncData, '选择用户', columnIndex, value, options)}
      />
    </>
  )
}
export default Demo5
