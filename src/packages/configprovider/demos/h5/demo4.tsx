import React from 'react'
import { ConfigProvider, TextArea } from '@nutui/nutui-react'
import enUS from '@nutui/nutui-react/dist/locale/enUS'

const Demo4 = () => {
  return (
    <>
      <ConfigProvider locale={enUS}>
        <TextArea disabled showCount maxLength={20} />
      </ConfigProvider>
    </>
  )
}

export default Demo4
