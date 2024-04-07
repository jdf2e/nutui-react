import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [visible, setVisible] = useState(false)
  const [baseDefault, setbaseDefault] = useState('')
  const [defaultValue, setDefaultValue] = useState([2])
  const listData1 = [
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
      description += option.text
    })
    setbaseDefault(description)
  }
  return (
    <>
      <Cell
        title="请选择城市"
        description={baseDefault}
        onClick={() => setVisible(!visible)}
      />
      <Picker
        visible={visible}
        options={listData1}
        defaultValue={defaultValue}
        onConfirm={(list, values) => confirmPicker(list, values)}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo2
