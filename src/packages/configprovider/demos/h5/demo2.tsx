import React from 'react'
import { ConfigProvider, TextArea, Cell } from '@nutui/nutui-react'
import enUS from '@nutui/nutui-react/dist/es/locale/en-US'

const Demo = () => {
  return (
    <>
      <ConfigProvider>
        <Cell>
          <TextArea disabled showCount maxLength={20} />
        </Cell>
      </ConfigProvider>
      <ConfigProvider locale={enUS}>
        <Cell>
          <TextArea disabled showCount maxLength={20} />
        </Cell>
      </ConfigProvider>
    </>
  )
}

export default Demo
