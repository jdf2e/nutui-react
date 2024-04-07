import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo6 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const customCityData = [
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
          text: '黄埔区',
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
  const [asyncData] = useState([
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
  const [cityCustom, setCityCustom] = useState('')

  const setChooseValueCustom = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    const str = options.map((item) => item.text).join('-')
    setCityCustom(str)
  }
  return (
    <>
      <Cell
        title="多级联动"
        description={cityCustom}
        onClick={() => setIsVisible(!isVisible)}
      />

      <Picker
        visible={isVisible}
        options={customCityData}
        onClose={() => setIsVisible(false)}
        onConfirm={(list, values) => setChooseValueCustom(list, values)}
        onChange={(
          options: PickerOption[],
          value: (string | number)[],
          columnIndex: number
        ) => console.log(asyncData, '多级联动', columnIndex, value, options)}
      />
    </>
  )
}
export default Demo6
