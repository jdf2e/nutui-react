import React, { useState } from 'react'
import {
  Popover,
  Cell,
  Picker,
  PickerOnChangeCallbackParameter,
} from '@nutui/nutui-react'

const Demo4 = () => {
  const [baseDesc, setBaseDesc] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [customPositon, setCustomPosition] = useState(false)
  const [curPostion, setCurPostion] = useState('')

  const columns = [
    [
      { label: 'top', value: 'top' },
      { label: 'top-start', value: 'top-start' },
      { label: 'top-end', value: 'top-end' },
      { label: 'right', value: 'right' },
      { label: 'right-start', value: 'right-start' },
      { label: 'right-end', value: 'right-end' },
      { label: 'bottom', value: 'bottom' },
      { label: 'bottom-start', value: 'bottom-start' },
      { label: 'bottom-end', value: 'bottom-end' },
      { label: 'left', value: 'left' },
      { label: 'left-start', value: 'left-start' },
      { label: 'left-end', value: 'left-end' },
    ],
  ]
  const positionList = [
    {
      key: 'key1',
      name: 'option1',
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
            setCurPostion(selectedOptions[0].value as string)
          }
        }}
        onClose={() => {
          setShowPicker(false)
          setCustomPosition(false)
        }}
      >
        <div className="brickBox">
          <div className="brick" id="pickerTarget" />
        </div>
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
