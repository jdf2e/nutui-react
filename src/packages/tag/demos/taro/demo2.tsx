import React from 'react'
import { Failure } from '@nutui/icons-react-taro'
import { Cell, Tag } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

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
            <Tag
              closeable
              onClose={() => Taro.showToast({ title: 'Tag closed' })}
              type="primary"
            >
              标签
            </Tag>
          }
        />
        <Cell
          title="closeable"
          extra={
            <Tag
              closeable
              closeIcon={<Failure size={8} />}
              onClose={() => Taro.showToast({ title: 'Tag closed' })}
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
