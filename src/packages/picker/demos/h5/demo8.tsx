import React, { useState } from 'react'
import { Picker, Cell, ConfigProvider } from '@nutui/nutui-react'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo8 = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  const [baseDesc, setBaseDesc] = useState('')

  const confirmPicker = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    console.log('demo 确定', options, values)
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.text}`
    })
    setBaseDesc(description)
    setIsVisible(false)
  }

  return (
    <>
      <Cell
        title="请选择城市"
        description={baseDesc}
        onClick={() => setIsVisible(!isVisible)}
      />
      <ConfigProvider
        theme={{
          nutuiPickerItemHeight: '48px',
          nutuiPickerItemActiveLineBorder:
            '1px dashed var(--nutui-color-primary)',
          nutuiPickerItemTextColor: 'var(--nutui-color-primary)',
        }}
      >
        <Picker
          title="请选择城市"
          visible={isVisible}
          options={options}
          onConfirm={(list, values) => confirmPicker(list, values)}
          onClose={() => {
            setIsVisible(false)
            console.log('onclose')
          }}
        />
      </ConfigProvider>
    </>
  )
}
export default Demo8
