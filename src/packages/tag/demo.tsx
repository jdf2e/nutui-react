import React from 'react'
import { Tag } from './tag'
import Cell from '@/packages/cell'
import CellGroup from '@/packages/cellgroup'

const TagDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <CellGroup>
          <Cell title="primary类型" linkSlot={<Tag type="primary">标签</Tag>} />
          <Cell title="success类型" linkSlot={<Tag type="success">标签</Tag>} />
          <Cell title="danger类型" linkSlot={<Tag type="danger">标签</Tag>} />
          <Cell title="warning类型" linkSlot={<Tag type="warning">标签</Tag>} />
        </CellGroup>

        <h2>样式风格</h2>
        <CellGroup>
          <Cell title="空心样式" linkSlot={<Tag plain>标签</Tag>} />
          <Cell
            title="圆角样式"
            linkSlot={
              <Tag round type="primary">
                标签
              </Tag>
            }
          />
          <Cell
            title="标记样式"
            linkSlot={
              <Tag mark type="primary">
                标签
              </Tag>
            }
          />
          <Cell
            title="可关闭标签"
            linkSlot={
              <Tag
                closeable
                iconSize="14px"
                onClose={() => alert('Tag closed')}
                type="primary"
              >
                标签
              </Tag>
            }
          />
        </CellGroup>

        <h2>自定义</h2>
        <CellGroup>
          <Cell title="背景颜色" linkSlot={<Tag color="#FA685D">标签</Tag>} />
          <Cell
            title="文字颜色"
            linkSlot={
              <Tag color="#E9E9E9" textColor="#999999">
                标签
              </Tag>
            }
          />
          <Cell
            title="空心颜色"
            linkSlot={
              <Tag color="#FA2400" plain>
                标签
              </Tag>
            }
          />
        </CellGroup>
      </div>
    </>
  )
}

export default TagDemo
