import React from 'react'
import { Divider } from '@nutui/nutui-react-taro'
import { rn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo5 = () => {
  return (
    <>
      <Divider
        style={{
          color: '#1989fa',
          paddingLeft: pxTransform(16),
          paddingRight: pxTransform(16),
          borderColor: '#1989fa',
          borderStyle: rn() ? 'solid' : 'dashed',
        }}
      >
        文本
      </Divider>
    </>
  )
}
export default Demo5
