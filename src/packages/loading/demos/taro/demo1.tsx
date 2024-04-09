import React from 'react'
import { Loading, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell>
      <Loading type="circular" />
      <Loading type="spinner" />
    </Cell>
  )
}
export default Demo1
