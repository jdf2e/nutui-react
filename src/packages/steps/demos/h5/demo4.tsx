import React, { useState } from 'react'
import { Steps, Step, Button, ConfigProvider } from '@nutui/nutui-react'

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
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <Steps value={val}>
          <Step value={1} title="步骤一" description="步骤描述" />
          <Step value={2} title="步骤二" description="步骤描述" />
          <Step value={3} title="步骤三" description="步骤描述" />
        </Steps>
      </ConfigProvider>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep()}>
          下一步
        </Button>
      </div>
    </>
  )
}
export default Demo4
