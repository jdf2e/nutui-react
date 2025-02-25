import React, { useState } from 'react'
import {
  Picker,
  Cell,
  PickerOptions,
  PickerValue,
  PickerOption,
} from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [value, setValue] = useState<PickerValue[]>([2])
  const [cityCustom, setCityCustom] = useState('上海')
  const customCityData = [
    [
      {
        value: 1,
        label: '北京',
        children: [
          {
            value: 1,
            label: '朝阳区',
          },
          {
            value: 2,
            label: '海淀区',
          },
          {
            value: 3,
            label: '大兴区',
          },
          {
            value: 4,
            label: '东城区',
          },
          {
            value: 5,
            label: '西城区',
          },
          {
            value: 6,
            label: '丰台区',
          },
        ],
      },
      {
        value: 2,
        label: '上海',
        children: [
          {
            value: 1,
            label: '黄埔区',
          },
          {
            value: 2,
            label: '长宁区',
          },
          {
            value: 3,
            label: '普陀区',
          },
          {
            value: 4,
            label: '杨浦区',
          },
          {
            value: 5,
            label: '浦东新区',
          },
        ],
      },
    ],
  ]

  const setChooseValueCustom = (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => {
    console.log('onconfirm', selectedOptions, selectedValue)
    const city = selectedOptions
      .map((item: PickerOption) => item.label)
      .join('-')
    setCityCustom(city)
    setValue(selectedValue)
  }

  return (
    <>
      <Cell
        title="请选择城市"
        description={cityCustom}
        onClick={() => setIsVisible(!isVisible)}
      />

      <Picker
        visible={isVisible}
        options={customCityData}
        value={value}
        onClose={() => setIsVisible(false)}
        onConfirm={setChooseValueCustom}
        onChange={({ value, index, selectedOptions }) =>
          console.log('多级联动', value, index, selectedOptions)
        }
      />
    </>
  )
}
export default Demo6
