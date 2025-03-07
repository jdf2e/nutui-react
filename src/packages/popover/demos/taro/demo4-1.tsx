import React, { useState } from 'react'
import { View } from '@tarojs/components'
import {
  Popover,
  Cell,
  Picker,
  Toast,
  PickerOnChangeCallbackParameter,
} from '@nutui/nutui-react-taro'
import { Tips, Close } from '@nutui/icons-react-taro'

const Demo4 = () => {
  const [baseDesc, setBaseDesc] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [customPositon, setCustomPosition] = useState(false)
  const [curPostion, setCurPostion] = useState('')
  const [showToast, SetShowToast] = useState(false)

  const columns = [
    [
      { label: 'top', value: 'top' },
      { label: 'top-start', value: 'top-start' },
      { label: 'top-end', value: 'top-end' },
      { label: 'right', value: 'right' },
      { label: 'bottom', value: 'bottom' },
      { label: 'bottom-start', value: 'bottom-start' },
      { label: 'bottom-end', value: 'bottom-end' },
      { label: 'left', value: 'left' },
    ],
  ]
  const positionList = [
    {
      key: 'key1',
      name: 'option1',
      icon: <Tips color="rgba(255, 255,255, 1)" />,
      action: {
        icon: <Close color="rgba(255, 255,255, 1)" />,
        onClick: (e: any) => {
          SetShowToast(true)
        },
      },
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
            description += ` ${option.label}`
          })
          setBaseDesc(description)
        }}
        onChange={({ selectedOptions }: PickerOnChangeCallbackParameter) => {
          if (selectedOptions[0]?.value) {
            setCurPostion(selectedOptions[0].value as string)
          }
        }}
        onClose={() => {
          setShowPicker(false)
          setCustomPosition(false)
        }}
      >
        <View className="brickBox">
          <View className="brick" id="pickerTarget2" />
        </View>
      </Picker>
      <Popover
        className="custom-color"
        visible={customPositon}
        targetId="pickerTarget2"
        list={positionList}
        location={curPostion}
      />
      <Toast
        content="option1"
        visible={showToast}
        onClose={() => {
          SetShowToast(false)
        }}
      />
    </>
  )
}

export default Demo4
