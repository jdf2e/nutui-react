import React from 'react'
import { Range, ConfigProvider, Cell } from '@nutui/nutui-react-taro'
import { rn } from '@/utils/platform-taro'

const cellStyle = !rn()
  ? {
      padding: '40px 18px',
    }
  : {
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 18,
      paddingRight: 18,
    }

const Demo10 = () => {
  return (
    <Cell
      style={{
        ...cellStyle,
        display: 'block',
      }}
    >
      <ConfigProvider
        theme={{
          nutuiRangeButtonBorder: '1px solid rgba(52,96,250,1)',
          nutuiRangeActiveColor:
            'linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)',
          nutuiRangeInactiveColor: 'rgba(163,184,255,1)',
          nutuiRangeMargin: '20px',
          nutuiRangeHeight: '6px',
        }}
      >
        <Range
          className="test-range"
          defaultValue={40}
          style={{ color: 'red' }}
          marks={{
            10: 10,
            20: 20,
          }}
        />
      </ConfigProvider>
    </Cell>
  )
}
export default Demo10
