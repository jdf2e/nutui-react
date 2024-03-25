import React from 'react'
import { Cell, Tag } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Cell.Group>
        <Cell title="primary" extra={<Tag type="primary">标签</Tag>} />
        <Cell title="info" extra={<Tag type="info">标签</Tag>} />
        <Cell title="success" extra={<Tag type="success">标签</Tag>} />
        <Cell title="danger" extra={<Tag type="danger">标签</Tag>} />
        <Cell title="warning" extra={<Tag type="warning">标签</Tag>} />
      </Cell.Group>
    </>
  )
}
export default Demo1
