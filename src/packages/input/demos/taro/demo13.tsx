import React from 'react'
import { Button, Input } from '@nutui/nutui-react-taro'
import { Tips } from '@nutui/icons-react-taro'
import { Text, View } from '@tarojs/components'
import { harmonyAndRn } from '@/utils/platform-taro'
import '../../demo.scss'

const Demo13 = () => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
        }}
      >
        {!harmonyAndRn() ? <Tips className="nut-input-demo-tip" /> : null}
        <Input
          placeholder="请输入短信验证码"
          placeholderTextColor="#757575"
          style={{ '--nutui-input-padding': '10px' }}
        />
        <View
          className="nut-input-demo-code"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button type="primary" size="small" style={{ flexShrink: 1 }}>
            <Text
              className="nut-input-demo-code-text"
              style={{ color: '#ffffff' }}
            >
              获取验证码
            </Text>
          </Button>
        </View>
      </View>
    </>
  )
}
export default Demo13
