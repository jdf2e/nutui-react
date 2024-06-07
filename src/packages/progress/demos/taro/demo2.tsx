import React from 'react'
import { Cell, Progress } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

const Demo2 = () => {
  return (
    <Cell>
      <Progress
        percent={30}
        color={
          ['HARMONY', 'RN'].includes(Taro.getEnv())
            ? '#FF0F23'
            : 'var(--nutui-color-primary)'
        }
        background={
          ['HARMONY', 'RN'].includes(Taro.getEnv())
            ? '#FFEAE8'
            : 'var(--nutui-brand-1)'
        }
        strokeWidth="15"
      />
    </Cell>
  )
}
export default Demo2
