import React from 'react'
import { Indicator } from '@nutui/nutui-react'

const Demo7 = () => {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '120px',
    background: 'var(--nutui-color-background-overlay, #f5f5f5)',
    borderRadius: '8px',
    marginBottom: '12px',
  }
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <div style={containerStyle} />
        <Indicator total={4} current={1} placement="outside" />
      </div>
      <div style={{ position: 'relative', ...containerStyle }}>
        <Indicator total={4} current={2} placement="inside-top-right" />
      </div>
      <div style={{ position: 'relative', ...containerStyle }}>
        <Indicator total={4} current={0} placement="inside-bottom-center" />
      </div>
      <div style={{ position: 'relative', ...containerStyle }}>
        <Indicator total={4} current={3} placement="inside-bottom-left" />
      </div>
    </>
  )
}
export default Demo7
