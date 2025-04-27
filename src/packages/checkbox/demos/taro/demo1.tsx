import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Check } from '@nutui/icons-react-taro'
import { Cell, Checkbox, pxTransform } from '@nutui/nutui-react-taro'

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
          style={{
            marginInlineEnd: pxTransform(8),
            marginRight: pxTransform(8),
          }}
          shape="button"
          label={
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  ...fontSize,
                  height: pxTransform(20),
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                复选框
              </View>
              <View
                style={{
                  color: 'gray',
                  height: pxTransform(20),
                  display: 'flex',
                  alignItems: 'center',
                  ...fontSize,
                }}
              >
                描述信息
              </View>
            </View>
          }
          defaultChecked={!checked}
        />
        <Checkbox
          style={{ marginInlineEnd: '8px', marginRight: pxTransform(8) }}
          shape="button"
          activeIcon={<Check className="nut-checkbox-button-icon-checked" />}
          label={
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  ...fontSize,
                  height: pxTransform(20),
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                复选框
              </View>
              <View
                style={{
                  color: 'gray',
                  height: pxTransform(20),
                  display: 'flex',
                  alignItems: 'center',
                  ...fontSize,
                }}
              >
                描述信息
              </View>
            </View>
          }
          defaultChecked={checked}
        />
        <Checkbox
          shape="button"
          disabled
          label={
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  ...fontSize,
                  color: '#c2c4cc',
                  height: pxTransform(20),
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                复选框
              </View>
              <View
                style={{
                  color: '#c2c4cc',
                  height: pxTransform(20),
                  display: 'flex',
                  alignItems: 'center',
                  ...fontSize,
                }}
              >
                描述信息
              </View>
            </View>
          }
          defaultChecked={checked}
        />
      </Cell>
    </>
  )
}
export default Demo1
