import React from 'react'
import { Cell, Checkbox } from '@nutui/nutui-react'
import { ConfigI, TipsI } from '@nutui/icons-react'

const Demo3 = () => {
  const titleNode = (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span>标题文案</span>
      <TipsI width={12} height={12} style={{ marginLeft: 4 }} />
    </div>
  )

  const descriptionNode = (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>二级信息</span>
        <TipsI width={12} height={12} style={{ marginLeft: 4 }} />
      </div>
    </div>
  )

  return (
    <Cell
      leading={<ConfigI />}
      title={titleNode}
      description={descriptionNode}
      extra={
        <Checkbox
          style={{ marginRight: 'calc(-8px * var(--nut-scale-f, 1))' }}
        />
      }
    />
  )
}
export default Demo3
