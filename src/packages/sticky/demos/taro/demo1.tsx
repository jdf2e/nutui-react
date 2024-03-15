import React from 'react'
import { Button, Sticky } from '@nutui/nutui-react-taro'
import { getEnv } from '@tarojs/taro'

const Demo1 = () => {
  const handleChange = (val: boolean) => {
    console.log('吸顶状态发生了改变,当前fixed为', val)
  }
  return (
    <>
      <Sticky
        threshold={getEnv() === 'WEB' ? 60 : 0}
        onChange={(val: boolean) => handleChange(val)}
      >
        <Button type="primary">吸顶</Button>
      </Sticky>
    </>
  )
}
export default Demo1
