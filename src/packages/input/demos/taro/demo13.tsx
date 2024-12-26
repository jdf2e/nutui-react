import React from 'react'
import { Button, Input } from '@nutui/nutui-react-taro'
import { Tips } from '@nutui/icons-react-taro'
import { Text, View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo13 = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
      }}
    >
      <Tips style={{ marginLeft: pxTransform(10) }} />
      <Input
        placeholder="请输入短信验证码"
        style={{ '--nutui-input-padding': '10px' }}
      />
      <View
        style={{
          display: 'flex',
          width: pxTransform(100),
          marginRight: pxTransform(10),
          alignItems: 'center',
        }}
      >
        <Button type="primary" size="small" style={{ flexShrink: 1 }}>
          <Text style={{ fontSize: pxTransform(12), color: '#ffffff' }}>
            获取验证码
          </Text>
        </Button>
      </View>
    </View>
  )
}
export default Demo13
