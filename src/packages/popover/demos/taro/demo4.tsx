import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Popover, Cell, Picker } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo4 = () => {
  const [baseDesc, setBaseDesc] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [customPositon, setCustomPosition] = useState(false)
  const [curPostion, setCurPostion] = useState('')

  const columns = [
    { text: 'top', value: 'top' },
    { text: 'top-start', value: 'top-start' },
    { text: 'top-end', value: 'top-end' },
    { text: 'right', value: 'right' },
    { text: 'right-start', value: 'right-start' },
    { text: 'right-end', value: 'right-end' },
    { text: 'bottom', value: 'bottom' },
    { text: 'bottom-start', value: 'bottom-start' },
    { text: 'bottom-end', value: 'bottom-end' },
    { text: 'left', value: 'left' },
    { text: 'left-start', value: 'left-start' },
    { text: 'left-end', value: 'left-end' },
  ]
  const positionList = [
    {
      key: 'key1',
      name: 'option1',
    },
    {
      key: 'key2',
      name: 'option2',
    },
  ]

  const handlePicker = () => {
    setShowPicker(true)
    setTimeout(() => {
      setCustomPosition(true)
    }, 500)
  }

  return (
    <>
      <Cell
        title="点击查看更多方向"
        description={baseDesc}
        onClick={handlePicker}
      />
      <Picker
        visible={showPicker}
        options={columns}
        duration="500"
        title=""
        onConfirm={(list) => {
          let description = ''
          list.forEach((option: any) => {
            description += ` ${option.text}`
          })
          setBaseDesc(description)
        }}
        onChange={(options: PickerOption[]) => {
          if (options[0]?.value) {
            setCurPostion(options[0].value as string)
          }
        }}
        onClose={() => {
          setShowPicker(false)
          setCustomPosition(false)
        }}
      >
        <View className="brickBox">
          <View className="brick" id="pickerTarget" />
        </View>
      </Picker>
      <Popover
        className="custom-color"
        visible={customPositon}
        targetId="pickerTarget"
        list={positionList}
        location={curPostion}
      />
    </>
  )
}

export default Demo4
