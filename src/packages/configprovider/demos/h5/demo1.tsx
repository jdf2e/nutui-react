import React from 'react'
import { ConfigProvider, Cell, Rate, Button } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo1 = ({ t }: propsType) => {
  return (
    <>
      <ConfigProvider>
        <Cell.Group>
          <Cell>
            <Rate defaultValue={3} />
          </Cell>
          <Cell>
            <Button type="primary" block>
              {t.submit}
            </Button>
          </Cell>
        </Cell.Group>
      </ConfigProvider>
    </>
  )
}

export default withTranslation(Demo1)
