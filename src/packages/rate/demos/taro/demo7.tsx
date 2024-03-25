import React from 'react'
import { Rate } from '@nutui/nutui-react-taro'
import { HeartFill } from '@nutui/icons-react-taro'

const Demo7 = () => {
  return (
    <Rate
      defaultValue={3}
      checkedIcon={<HeartFill color="rgb(255, 200, 0)" />}
    />
  )
}
export default Demo7
