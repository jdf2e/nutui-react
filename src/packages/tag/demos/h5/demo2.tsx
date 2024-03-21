import React from 'react'
import { Failure } from '@nutui/icons-react'
import { Cell, Tag } from '@nutui/nutui-react'

const Demo2 = () => {
  return (
    <>
      <Cell.Group>
        <Cell title="plain" extra={<Tag plain>标签</Tag>} />
        <Cell
          title="round"
          extra={
            <Tag round type="primary">
              标签
            </Tag>
          }
        />
        <Cell
          title="mark"
          extra={
            <Tag mark type="primary">
              标签
            </Tag>
          }
        />
        <Cell
          title="closeable"
          extra={
            <Tag closeable onClose={() => alert('Tag closed')} type="primary">
              标签
            </Tag>
          }
        />
        <Cell
          title="closeable"
          extra={
            <Tag
              closeable
              closeIcon={<Failure width={8} height={8} />}
              onClose={() => alert('Tag closed')}
              type="primary"
            >
              标签
            </Tag>
          }
        />
      </Cell.Group>
    </>
  )
}
export default Demo2
