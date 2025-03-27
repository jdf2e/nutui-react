import React, { useState } from 'react'
import {
  Popover,
  Cell,
  Picker,
  Toast,
  PickerOnChangeCallbackParameter,
  FullPosition,
} from '@nutui/nutui-react'
import { Tips, Close } from '@nutui/icons-react'

const Demo = () => {
  const [baseDesc, setBaseDesc] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [customPositon, setCustomPosition] = useState(false)
  const [curPostion, setCurPostion] = useState<FullPosition>('top')

  const columns = [
    [
      { label: 'top', value: 'top' },
      { label: 'top-left', value: 'top-left' },
      { label: 'top-right', value: 'top-right' },
      { label: 'right', value: 'right' },
      { label: 'right-top', value: 'right-top' },
      { label: 'right-bottom', value: 'right-bottom' },
      { label: 'bottom', value: 'bottom' },
      { label: 'bottom-left', value: 'bottom-left' },
      { label: 'bottom-right', value: 'bottom-right' },
      { label: 'left', value: 'left' },
      { label: 'left-top', value: 'left-top' },
      { label: 'left-bottom', value: 'left-bottom' },
    ],
  ]
  const positionList = [
    {
      key: 'key1',
      name: '主要文案内容',
      icon: <Tips color="rgba(255, 255,255, 1)" />,
      action: {
        icon: <Close color="rgba(255, 255,255, 1)" />,
        onClick: (e: any) => {
          Toast.show('onclick 1')
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
        onConfirm={(list) => {
          let description = ''
          list.forEach((option: any) => {
            description += ` ${option.label}`
          })
          setBaseDesc(description)
        }}
        onChange={({ selectedOptions }: PickerOnChangeCallbackParameter) => {
          if (selectedOptions[0]?.value) {
            setCurPostion(selectedOptions[0].value as FullPosition)
          }
        }}
        onClose={() => {
          setShowPicker(false)
          setCustomPosition(false)
        }}
      >
        <div className="brickBox">
          <div className="brick" id="pickerTarget2" />
        </div>
      </Picker>
      <Popover
        theme="dark"
        visible={customPositon}
        targetId="pickerTarget2"
        list={positionList}
        location={curPostion}
      />
    </>
  )
}

export default Demo
