import React, { useState } from 'react'
import { Radio } from '@nutui/nutui-react'

const Demo11 = () => {
  const [radioVal, setRadioVal] = useState('1')
  const [optionsDemo1, setOptionsDemo1] = useState([
    {
      label: '选项1',
      value: '1',
    },
    {
      label: '选项2',
      value: '2',
      disabled: true,
    },
    {
      label: '选项3',
      value: '3',
    },
  ])
  const handleChange = (v: string | number) => {
    setRadioVal(v.toString())
  }
  return (
    <Radio.Group
      options={optionsDemo1}
      value={radioVal}
      onChange={handleChange}
    />
  )
}
export default Demo11
