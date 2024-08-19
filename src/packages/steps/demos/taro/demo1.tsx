import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Steps, Step, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <Steps value={val}>
        <Step value={1} title="步骤一" />
        <Step value={2} title="步骤二" />
        <Step value={3} title="步骤三" />
      </Steps>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button type="danger" onClick={() => handleStep()}>
          下一步
        </Button>
      </View>
    </>
  )
}
export default Demo1
