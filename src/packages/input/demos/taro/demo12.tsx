import React from 'react'
import { Input, Toast } from '@nutui/nutui-react-taro'

const Demo12 = () => {
  return (
    <>
      <Input
        placeholder="事件"
        onClick={() =>
          Toast.show('click', {
            title: 'onClick',
          })
        }
        placeholderTextColor="#757575"
      />
    </>
  )
}
export default Demo12
