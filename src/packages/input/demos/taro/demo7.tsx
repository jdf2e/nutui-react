import React, { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Button, Input } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo7 = () => {
  const [keyword, setKeyword] = useState('')
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
      <Input placeholder="受控下的清除" value={keyword} onChange={setKeyword} />
      <Button
        type="primary"
        size="small"
        onClick={() => {
          setKeyword('')
        }}
        style={{ marginRight: pxTransform(10) }}
      >
        <Text style={{ color: '#ffffff', fontSize: pxTransform(12) }}>
          点我清除
        </Text>
      </Button>
    </View>
  )
}
export default Demo7
