import React from 'react'
import { Cell, Tag } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <>
      <Cell
        title="image-text"
        extra={
          <Tag type="info">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                height="10"
                src="https://img13.360buyimg.com/imagetools/jfs/t1/249078/11/8928/559/6641c6f6F823e1c5e/a90a3b3cab20caaa.png"
                alt=""
              />
              标签
            </div>
          </Tag>
        }
      />
    </>
  )
}
export default Demo4
