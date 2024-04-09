import React from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react'

const Demo6 = () => {
  return (
    <>
      <Cell className="nut-cell">
        <Checkbox
          style={{ '--nut-icon-width': '24px', '--nut-icon-height': '24px' }}
          label="自定义尺寸24"
        />
      </Cell>
      <Cell className="nut-cell">
        <Checkbox
          style={{ '--nut-icon-width': '12px', '--nut-icon-height': '12px' }}
          label="自定义尺寸12"
        />
      </Cell>
    </>
  )
}
export default Demo6
