import React, { useState } from 'react'
import { Cell, Switch, Toast } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [value, setValue] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const onChange = (value: boolean) => {
    setValue(value)
    setShowToast(true)
  }
  return (
    <>
      <Cell>
        <Switch defaultChecked onChange={(value) => onChange(value)} />
      </Cell>
      <Toast
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
