import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Checklist } from '@nutui/icons-react-taro'
import { Cell, Checkbox } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [checked] = useState(false)
  const fontSize = { fontSize: 12 }
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
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <View style={fontSize}>复选框</View>
              <View style={{ color: 'gray', ...fontSize }}>描述信息</View>
            </View>
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
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <View style={fontSize}>复选框</View>
              <View style={{ color: 'gray', ...fontSize }}>描述信息</View>
            </View>
          }
          defaultChecked={checked}
        />
        <Checkbox
          shape="button"
          className="test"
          disabled
          label={
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <View style={fontSize}>复选框</View>
              <View style={fontSize}>描述信息</View>
            </View>
          }
          defaultChecked={checked}
        />
      </Cell>
    </>
  )
}
export default Demo1
