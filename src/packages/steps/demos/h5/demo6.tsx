import React from 'react'
import { Steps, Step, ConfigProvider } from '@nutui/nutui-react'
import { People } from '@nutui/icons-react'

const customTheme = {
  nutuiStepsDotHeadMargin: '0 0 12px 0',
  nutuiColorPrimaryStop2: '#fff',
  nutuiStepsDotIconBorder: '0',
  nutuiStepsBaseIconWidth: '6px',
  nutuiStepsBaseIconHeight: '6px',
  nutuiStepsBaseLineBackground: `#ddd`,
  nutuiStepsFinishIconBgColor: 'black',
  nutuiStepsFinishIconColor: 'black',
  nutuiStepsProcessIconBgColor: 'white',
  nutuiStepsWaitIconBgColor: '#ddd',
  nutuiStepsBaseLineWidth: '45px',
  nutuiStepsBaseLineHeight: '1px',
  nutuiStepsFinishLineBackground: `black`,
}

const Demo6 = () => {
  return (
    <>
      <ConfigProvider theme={customTheme} style={{ padding: '15px 0px' }}>
        <Steps dot value={2}>
          <Step value={1} title="已完成" />
          <Step
            value={2}
            title="进行中"
            icon={
              <People
                width={20}
                height={20}
                style={{ color: 'red', flex: 'none' }}
              />
            }
          />
          <Step value={3} title="未开始" />
        </Steps>
      </ConfigProvider>
    </>
  )
}
export default Demo6
