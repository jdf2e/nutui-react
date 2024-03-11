import React from 'react'
import { ConfigProvider, Cell, Rate, Button } from '@nutui/nutui-react'

const Demo1 = () => {
  const darkTheme = {
    nutuiColorPrimary: 'green',
    nutuiColorPrimaryStop1: 'green',
    nutuiColorPrimaryStop2: 'green',
  }
  return (
    <>
      <h2>默认主题</h2>
      <ConfigProvider>
        <Cell.Group>
          <Cell>
            <Rate defaultValue={3} />
          </Cell>
          <Cell>
            <Button type="primary" size="large">
              提交
            </Button>
          </Cell>
        </Cell.Group>
      </ConfigProvider>
      <h2>定制主题</h2>
      <ConfigProvider theme={darkTheme}>
        <Cell.Group>
          <Cell>
            <Rate defaultValue={3} />
          </Cell>
          <Cell>
            <Button type="primary" size="large">
              提交
            </Button>
          </Cell>
        </Cell.Group>
      </ConfigProvider>
    </>
  )
}

export default Demo1
