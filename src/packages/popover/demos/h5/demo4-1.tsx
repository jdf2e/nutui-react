import React, { useState } from 'react'
import { Popover, Cell, Picker, Toast } from '@nutui/nutui-react'
import { Tips, Close } from '@nutui/icons-react'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

const Demo41 = () => {
  const [baseDesc, setBaseDesc] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [customPositon, setCustomPosition] = useState(false)
  const [curPostion, setCurPostion] = useState('')

  const columns = [
    { text: 'top', value: 'top' },
    { text: 'top-start', value: 'top-start' },
    { text: 'top-end', value: 'top-end' },
    { text: 'bottom', value: 'bottom' },
    { text: 'bottom-start', value: 'bottom-start' },
    { text: 'bottom-end', value: 'bottom-end' },
  ]
  const positionList = [
    {
      key: 'key1',
      name: 'option1',
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
        <div className="brickBox">
          <div className="brick" id="pickerTarget2" />
        </div>
      </Picker>
      <Popover
        className="custom-color"
        visible={customPositon}
        targetId="pickerTarget2"
        list={positionList}
        location={curPostion}
      />
    </>
  )
}

export default Demo41
