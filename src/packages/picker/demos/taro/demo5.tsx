import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  label: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo5 = () => {
  const [tileDesc, settileDesc] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const listData1 = [
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
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.text}`
    })
    settileDesc(description)
    setIsVisible(false)
  }
  const changePicker = (options: any[], values: any, columnIndex: number) => {
    console.log('picker onChange', columnIndex, values, options)
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
        options={listData1}
        onConfirm={(list, values) => confirmPicker(list, values)}
        defaultValue={[2]}
        threeDimensional={false}
        duration={1000}
        onClose={() => setIsVisible(false)}
        onChange={changePicker}
      />
    </>
  )
}
export default Demo5
