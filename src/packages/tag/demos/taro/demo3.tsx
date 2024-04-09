import React from 'react'
import { Cell, Tag } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <>
      <Cell.Group>
        <Cell title="background" extra={<Tag background="#FA685D">标签</Tag>} />
        <Cell
          title="color"
          extra={
            <Tag background="#E9E9E9" color="#999999">
              标签
            </Tag>
          }
        />
        <Cell
          title="plain"
          extra={
            <Tag background="#FA2400" plain>
              标签
            </Tag>
          }
        />
      </Cell.Group>
    </>
  )
}
export default Demo3
