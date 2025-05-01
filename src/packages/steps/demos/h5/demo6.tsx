import React from 'react'
import { ConfigProvider, Cell } from '@nutui/nutui-react'

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
      <ConfigProvider theme={customTheme}>
        <Cell />
      </ConfigProvider>
    </>
  )
}
export default Demo6
