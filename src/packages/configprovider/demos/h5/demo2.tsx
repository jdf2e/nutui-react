import React from 'react'
import { ConfigProvider, Cell, Rate, Button } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo2 = ({ t }: propsType) => {
  const darkTheme = {
    nutuiColorPrimaryIcon: 'green',
    nutuiColorPrimaryStop1: 'green',
    nutuiColorPrimaryStop2: 'green',
  }

  return (
    <>
      <ConfigProvider theme={darkTheme}>
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

export default withTranslation(Demo2)
