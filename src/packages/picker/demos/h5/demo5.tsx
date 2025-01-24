import React, { useState } from 'react'
import { Picker, Cell, PickerOptions, PickerValue } from '@nutui/nutui-react'

const Demo5 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [tileDesc, settileDesc] = useState('无锡市')
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

  const confirmPicker = (options: PickerOptions, values: PickerValue[]) => {
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.label}`
    })
    settileDesc(description)
    setIsVisible(false)
  }
  return (
    <>
      <Cell
        title="请选择城市"
        description={tileDesc}
        onClick={() => setIsVisible(!isVisible)}
      />
      <Picker
        visible={isVisible}
        options={options}
        onConfirm={confirmPicker}
        defaultValue={[2]}
        threeDimensional={false}
        duration={1000}
        onClose={() => setIsVisible(false)}
      />
    </>
  )
}
export default Demo5
