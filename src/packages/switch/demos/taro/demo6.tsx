import React, { useState } from 'react'
import { Cell, Switch, Toast } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [value, setValue] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const onChange = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    setValue(value)
    setShowToast(true)
  }
  return (
    <>
      <Cell>
        <Switch
          defaultChecked
          onChange={(value, event) => onChange(value, event)}
        />
      </Cell>
      <Toast
        type="text"
        content={`触发了onChange事件，开关状态：${value}`}
        visible={showToast}
        onClose={() => {
          setShowToast(false)
        }}
      />
    </>
  )
}
export default Demo6
