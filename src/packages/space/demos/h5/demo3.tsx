import React from 'react'
import { Space, Button, Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo3 = ({ t }: propsType) => {
  return (
    <Cell>
      <Space direction="vertical">
        <Button>{t.button}1</Button>
        <Button>{t.button}2</Button>
        <Button>{t.button}3</Button>
      </Space>
    </Cell>
  )
}

export default withTranslation(Demo3)
