import React from 'react'
import { Space, Button, Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo6 = ({ t }: propsType) => {
  return (
    <Cell>
      <Space align="end" wrap>
        <Button>{t.button}1</Button>
        <Space direction="vertical">
          <Button>{t.button}2</Button>
          <Button>{t.button}2</Button>
        </Space>
        <Space direction="vertical">
          <Button>{t.button}3</Button>
          <Button>{t.button}3</Button>
          <Button>{t.button}3</Button>
        </Space>
      </Space>
    </Cell>
  )
}

export default withTranslation(Demo6)
