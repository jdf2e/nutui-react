import React from 'react'
import { Cell, ConfigProvider, InputNumber } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const customTheme = {
    nutuiInputnumberButtonWidth: '36px',
    nutuiInputnumberButtonHeight: '36px',
    nutuiInputnumberButtonBorderRadius: '2px',
    nutuiInputnumberButtonBackgroundColor: `#f4f4f4`,
    nutuiInputnumberInputHeight: '36px',
    nutuiInputnumberDividerWidth: '1px',
  }

  const customTheme2 = {
    nutuiInputnumberButtonWidth: '32px',
    nutuiInputnumberButtonHeight: '32px',
    nutuiInputnumberButtonBackgroundColor: `#f4f4f4`,
    nutuiInputnumberInputBackgroundColor: '#fff',
    nutuiInputnumberDividerWidth: '1px',
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
