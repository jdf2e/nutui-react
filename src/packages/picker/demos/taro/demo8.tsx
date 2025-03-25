import React, { useState } from 'react'
import {
  Picker,
  Cell,
  ConfigProvider,
  PickerOption,
  PickerOptions,
  PickerValue,
} from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [visible, setVisible] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
  const options = [
    [
      { value: 1, label: '南京市' },
      { value: 2, label: '无锡市' },
      { value: 3, label: '海北藏族自治区' },
      { value: 4, label: '北京市' },
      { value: 5, label: '连云港市' },
      { value: 8, label: '大庆市' },
      { value: 9, label: '绥化市' },
      { value: 10, label: '潍坊市' },
      { value: 12, label: '乌鲁木齐市' },
    ],
  ]

  const confirmPicker = (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => {
    console.log('confirmPicker', selectedOptions, selectedValue)
    let description = ''
    selectedOptions.forEach((option: PickerOption) => {
      description += ` ${option.label}`
    })
    setBaseDesc(description)
  }
  return (
    <>
      <Cell
        title="请选择城市"
        description={baseDesc}
        onClick={() => setVisible(!visible)}
      />
      <ConfigProvider
        theme={{
          nutuiPickerItemActiveLineBorder:
            '1px dashed var(--nutui-color-primary)',
          nutuiPickerItemTextColor: 'var(--nutui-color-primary)',
          nutuiPickerItemHeight: '28px',
        }}
      >
        <Picker
          style={{ '--nutui-picker-item-height': '28px' }}
          title="请选择城市"
          visible={visible}
          options={options}
          onConfirm={confirmPicker}
          onClose={() => setVisible(false)}
        />
      </ConfigProvider>
    </>
  )
}
export default Demo8
