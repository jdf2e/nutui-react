import React from 'react'
import { Cell, Divider } from '@nutui/nutui-react-taro'
import { rn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo5 = () => {
  return (
    <Cell>
      <Divider
        style={{
          color: '#0073ff',
          paddingLeft: pxTransform(16),
          paddingRight: pxTransform(16),
          borderColor: '#0073ff',
          borderStyle: rn() ? 'solid' : 'dashed',
        }}
      >
        文本
      </Divider>
    </Cell>
  )
}
export default Demo5
