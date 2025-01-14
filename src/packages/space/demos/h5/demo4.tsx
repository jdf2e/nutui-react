import React from 'react'
import { Space, Button, ConfigProvider, Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo4 = ({ t }: propsType) => {
  return (
    <Cell>
      <ConfigProvider
        theme={{
          nutuiSpaceGap: '20px',
        }}
      >
        <Space direction="vertical">
          <Button>{t.button}1</Button>
          <Button>{t.button}2</Button>
          <Button>{t.button}3</Button>
        </Space>
      </ConfigProvider>
    </Cell>
  )
}

export default withTranslation(Demo4)
