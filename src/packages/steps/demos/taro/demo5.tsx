import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Steps, Step, Button, ConfigProvider } from '@nutui/nutui-react-taro'

const customTheme = {
  nutuiStepsBaseLineWidth: '30%',
}

const Demo5 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <Steps value={val} dot>
          <Step value={1} />
          <Step value={2} />
          <Step value={3} />
        </Steps>
      </ConfigProvider>
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
export default Demo5
