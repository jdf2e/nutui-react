import React from 'react'
import { View } from '@tarojs/components'
import { Indicator } from '@nutui/nutui-react-taro'

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
      <View style={{ marginBottom: '20px' }}>
        <View style={containerStyle} />
        <Indicator total={4} current={1} placement="outside" />
      </View>
      <View style={{ position: 'relative', ...containerStyle }}>
        <Indicator total={4} current={2} placement="inside-top-right" />
      </View>
      <View style={{ position: 'relative', ...containerStyle }}>
        <Indicator total={4} current={0} placement="inside-bottom-center" />
      </View>
      <View style={{ position: 'relative', ...containerStyle }}>
        <Indicator total={4} current={3} placement="inside-bottom-left" />
      </View>
    </>
  )
}
export default Demo7
