import React from 'react'
import { Space, Button, Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo2 = ({ t }: propsType) => {
  return (
    <Cell>
      <Space wrap>
        <Button>{t.button}1</Button>
        <Button>{t.button}2</Button>
        <Button>{t.button}3</Button>
        <Button>{t.button}4</Button>
        <Button>{t.button}5</Button>
        <Button>{t.button}6</Button>
      </Space>
    </Cell>
  )
}

export default withTranslation(Demo2)
