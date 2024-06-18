import React from 'react'
import { ConfigProvider, Cell, Rate, Button } from '@nutui/nutui-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'
// todo rate icon
const Demo1 = () => {
  return (
    <>
      <ConfigProvider>
        <Cell.Group>
          <Cell>{harmonyAndRn() ? null : <Rate defaultValue={3} />}</Cell>
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

export default Demo1
