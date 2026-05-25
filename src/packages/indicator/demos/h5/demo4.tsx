import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <>
      <Cell>
        <Indicator total={6} current={5} direction="vertical">
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
              background: `var(--nutui-color-primary, #ff0f23)`,
              boxShadow: `0 0 1px 1px var(--nutui-color-primary, #ff0f23)`,
            }}
          >
            {5}
          </div>
        </Indicator>
        <Indicator
          total={6}
          current={2}
          direction="vertical"
          style={{
            marginLeft: '50px',
          }}
        />

        <Indicator
          total={6}
          current={5}
          direction="vertical"
          type="slide"
          style={{
            marginLeft: '50px',
          }}
        />
      </Cell>
      <Cell style={{ background: 'var(--nutui-color-text-disabled, #c2c4cc)' }}>
        <Indicator
          total={6}
          current={2}
          direction="vertical"
          color="default"
          style={{
            marginLeft: '50px',
          }}
        />
      </Cell>
    </>
  )
}
export default Demo4
