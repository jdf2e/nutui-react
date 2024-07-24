import React, { useState } from 'react'
import { Input } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Eye, Marshalling } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo9 = () => {
  const [inputType, setInputType] = useState('password')
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
        <Input
          type={inputType}
          placeholder="请输入密码"
          placeholderTextColor="#757575"
        />
        <View
          style={{
            display: 'flex',
            marginRight: pxTransform(10),
            alignItems: 'center',
          }}
          onClick={() =>
            setInputType(inputType === 'text' ? 'password' : 'text')
          }
        >
          {/* eslint-disable-next-line no-nested-ternary */}
          {inputType === 'text' ? (
            !harmonyAndRn() ? (
              <Eye color="var(--nutui-gray-7)" />
            ) : null
          ) : !harmonyAndRn() ? (
            <Marshalling color="var(--nutui-gray-7)" />
          ) : null}
        </View>
      </View>
    </>
  )
}
export default Demo9
