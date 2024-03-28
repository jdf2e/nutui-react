import React from 'react'
import { ConfigProvider, TextArea } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const customTheme = {
    nutuiTextareaTextCurrorColor: `red`,
    nutuiTextareaLimitColor: `red`,
  }
  return (
    <ConfigProvider theme={customTheme}>
      <TextArea showCount maxLength={20} />
    </ConfigProvider>
  )
}
export default Demo5
