import React, { useState } from 'react'
import { Steps, Step, Button, ConfigProvider } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const customTheme = {
  nutuiStepsBaseLineWidth: '70%',
  nutuiStepsProcessIconBgColor: '#3768FA',
  nutuiStepsProcessIconColor: '#fff',
  nutuiStepsProcessTitleColor: '#3768FA',
  nutuiStepsProcessTitleFontSize: '15px',
  nutuiStepsProcessTitleFontWeight: '500',
  nutuiStepsFinishIconColor: '#3768FA',
  nutuiStepsFinishTitleColor: '#3768FA',
  nutuiStepsFinishLineBackground: '#3768FA',
}

const Demo4 = () => {
  const [val, setVal] = useState(1)
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <Steps value={val}>
          <Step value={1} title="步骤一" description="步骤描述" />
          <Step value={2} title="步骤二" description="步骤描述" />
          <Step value={3} title="步骤三" description="步骤描述" />
        </Steps>
      </ConfigProvider>

      <Button
        type="danger"
        onClick={() => setVal((val % 3) + 1)}
        style={{ marginLeft: pxTransform(30), marginTop: pxTransform(10) }}
      >
        Next
      </Button>
    </>
  )
}
export default Demo4
