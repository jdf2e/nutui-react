import React, { useState } from 'react'
import { Steps, Step, Button, ConfigProvider } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const customTheme = {
  nutuiStepsBaseLineWidth: '30%',
}

const Demo5 = () => {
  const [val, setVal] = useState(1)
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <Steps value={val} dot>
          <Step value={1} />
          <Step value={2} />
          <Step value={3} />
        </Steps>
      </ConfigProvider>
      <Button
        type="danger"
        onClick={() => setVal((val % 3) + 1)}
        style={{ marginLeft: pxTransform(30) }}
      >
        Next
      </Button>
    </>
  )
}
export default Demo5
