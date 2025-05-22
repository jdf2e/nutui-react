import React from 'react'
import { ConfigProvider, Cell, Rate, Button } from '@nutui/nutui-react'

const Demo = () => {
  const darkTheme = {
    nutuiColorPrimaryIcon: 'green',
    nutuiColorPrimaryStop1: 'green',
    nutuiColorPrimaryStop2: 'green',
  }
  return (
    <>
      <ConfigProvider>
        <Cell.Group>
          <Cell>
            <Rate defaultValue={3} />
          </Cell>
          <Cell>
            <Button type="primary" block>
              提交
            </Button>
          </Cell>
        </Cell.Group>
      </ConfigProvider>
      <ConfigProvider theme={darkTheme}>
        <Cell.Group>
          <Cell>
            <Rate defaultValue={3} />
          </Cell>
          <Cell>
            <Button type="primary" block>
              提交
            </Button>
          </Cell>
        </Cell.Group>
      </ConfigProvider>
    </>
  )
}

export default Demo
