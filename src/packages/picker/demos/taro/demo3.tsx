import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo3 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
  const [val, setVal] = useState<Array<number | string>>([])
  const options = [
    [
      { value: 1, text: '南京市' },
      { value: 2, text: '无锡市' },
      { value: 3, text: '海北藏族自治区' },
      { value: 4, text: '北京市' },
      { value: 5, text: '连云港市' },
      { value: 8, text: '大庆市' },
      { value: 9, text: '绥化市' },
      { value: 10, text: '潍坊市' },
      { value: 12, text: '乌鲁木齐市' },
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
    setBaseDesc(description)
  }
  return (
    <>
      <Cell
        title="请选择城市"
        description={baseDesc}
        onClick={() => setIsVisible(!isVisible)}
      />
      <Picker
        title="请选择城市"
        visible={isVisible}
        value={val}
        options={options}
        onConfirm={(list, values) => {
          confirmPicker(list, values)
          setVal(values)
        }}
        onClose={() => {
          setIsVisible(false)
        }}
      />
    </>
  )
}
export default Demo3
