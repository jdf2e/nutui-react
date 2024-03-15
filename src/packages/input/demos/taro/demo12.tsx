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
      />
    </>
  )
}
export default Demo12
