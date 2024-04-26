import React from 'react'
import { Cell, InputNumber, ConfigProvider } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const customTheme = {
    nutuiInputnumberButtonWidth: '30px',
    nutuiInputnumberButtonHeight: '30px',
    nutuiInputnumberButtonBorderRadius: '2px',
    nutuiInputnumberButtonBackgroundColor: `#f4f4f4`,
    nutuiInputnumberInputHeight: '30px',
    nutuiInputnumberInputMargin: '0 2px',
  }

  const customTheme2 = {
    nutuiInputnumberButtonWidth: '24px',
    nutuiInputnumberButtonHeight: '24px',
    nutuiInputnumberButtonBackgroundColor: `#f4f4f4`,
    nutuiInputnumberInputBackgroundColor: '#fff',
    nutuiInputnumberInputMargin: '0 2px',
  }

  return (
    <>
      <Cell>
        <ConfigProvider theme={customTheme}>
          <InputNumber defaultValue={1} />
        </ConfigProvider>
      </Cell>
      <Cell>
        <ConfigProvider theme={customTheme2}>
          <InputNumber defaultValue={1} />
        </ConfigProvider>
      </Cell>
    </>
  )
}
export default Demo6
