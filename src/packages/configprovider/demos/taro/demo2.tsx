import React from 'react'
import { ConfigProvider, Pagination, Cell } from '@nutui/nutui-react-taro'
import enUS from '@nutui/nutui-react-taro/dist/es/locales/en-US'

const Demo = () => {
  return (
    <>
      <ConfigProvider>
        <Cell>
          <Pagination total={20} pageSize={5} />
        </Cell>
      </ConfigProvider>
      <ConfigProvider locale={enUS}>
        <Cell>
          <Pagination total={20} pageSize={5} />
        </Cell>
      </ConfigProvider>
    </>
  )
}

export default Demo
