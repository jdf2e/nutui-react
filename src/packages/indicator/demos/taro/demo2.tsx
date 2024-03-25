import React from 'react'
import { Indicator, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Cell>
      <Indicator total={6} current={5}>
        <div
          style={{
            display: 'inline-block',
            width: '14px',
            height: '14px',
            lineHeight: '14px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#FFFFFF',
            border: '1px solid #FFFFFF',
            borderRadius: '50%',
            margin: '4px',
            background: `var(--nutui-color-primary)`,
            boxShadow: `0 0 1px 1px var(--nutui-color-primary)`,
          }}
        >
          {5}
        </div>
      </Indicator>
    </Cell>
  )
}
export default Demo2
