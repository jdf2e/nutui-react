import React, { useState } from 'react'
import { Checklist } from '@nutui/icons-react'
import { Cell, Checkbox } from '@nutui/nutui-react'

const Demo1 = () => {
  const [checked] = useState(false)
  return (
    <>
      <Cell className="nut-cell">
        <Checkbox className="test" label="复选框" defaultChecked={checked} />
      </Cell>
      <Cell className="nut-cell">
        <Checkbox
          style={{ marginInlineEnd: '8px' }}
          shape="button"
          className="test"
          label={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div>复选框</div>
              <div style={{ color: 'gray' }}>描述信息</div>
            </div>
          }
          defaultChecked={!checked}
        />
        <Checkbox
          style={{ marginInlineEnd: '8px' }}
          shape="button"
          activeIcon={
            <Checklist className="nut-checkbox-button-icon-checked" />
          }
          className="test"
          label={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div>复选框</div>
              <div style={{ color: 'gray' }}>描述信息</div>
            </div>
          }
          defaultChecked={checked}
        />
        <Checkbox
          shape="button"
          className="test"
          disabled
          label={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div>复选框</div>
              <div>描述信息</div>
            </div>
          }
          defaultChecked={checked}
        />
      </Cell>
    </>
  )
}
export default Demo1
