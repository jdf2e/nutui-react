import React, { useState } from 'react'
import {
  Steps,
  Step,
  Button,
  ConfigProvider,
  Cell,
  Space,
} from '@nutui/nutui-react'

const customTheme = {
  nutuiStepsBusinessHeadTextColor: '#3768FA',
  nutuiStepsBusinessTitleColor: '#3768FA',
  nutuiStepsBusinessDescriptionColor: '#3768FA',
  // nutuiStepsBusinessHeadBackgroundColor: '#C5D9FF',
  // nutuiStepsBusinessHeadIconColor: '#FFFFFF',
  nutuiStepsBusinessHeadDotBackgroundColor: '#3768FA',
  nutuiSpaceGap: '20px',
  nutuiStepsProcessTitleColor: '#00d900',
  nutuiStepsProcessDescriptionColor: '#00d900',
  nutuiStepsProcessLineColor: '#00d900',
  nutuiStepsProcessHeadBackgroundColor: '#00d900',
  nutuiStepsEnhancedFinishHeadBackgroundColor: '#a3d9a3',
  nutuiStepsEnhancedFinishHeadTextColor: '#FFFFFF',
}

const Demo4 = () => {
  const data = [
    {
      value: 1,
      title: '步骤一',
      description: '步骤描述信息',
    },
    {
      value: 2,
      title: '步骤二',
      description: '步骤描述信息',
    },
    {
      value: 3,
      title: '步骤三',
      description: '步骤描述信息',
    },
  ]
  const [val, setVal] = useState(2)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <Cell>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Steps value={val} status="business" layout="double" type="dot">
              {data.map((item) => (
                <Step
                  key={item.value}
                  value={item.value}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Steps>
            <Steps value={val} status="enhanced" layout="double">
              {data.map((item) => (
                <Step
                  key={item.value}
                  value={item.value}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Steps>
          </Space>
        </Cell>
      </ConfigProvider>

      <Button size="small" type="danger" onClick={() => handleStep()}>
        下一步
      </Button>
    </>
  )
}
export default Demo4
