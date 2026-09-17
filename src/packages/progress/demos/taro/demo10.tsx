import React, { useState } from 'react'
import { Progress } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { PlayStart } from '@nutui/icons-react-taro'

const cardStyle = {
  padding: '16px 20px',
  background: '#111',
  borderRadius: '8px',
  marginBottom: '12px',
}

const labelStyle = {
  color: 'rgba(255,255,255,0.6)',
  fontSize: '12px',
  marginBottom: '8px',
}

const Demo10 = () => {
  const [percent, setPercent] = useState(20)
  return (
    <>
      <View style={cardStyle}>
        <View style={labelStyle}>默认（静态）</View>
        <Progress mode="video" status="static" percent={30} />
      </View>
      <View style={cardStyle}>
        <View style={labelStyle}>视频暂停</View>
        <Progress
          mode="video"
          status="paused"
          percent={55}
          pausedIcon={<PlayStart color="#fff" width={16} height={16} />}
        />
      </View>
      <View style={cardStyle}>
        <View style={labelStyle}>拖动</View>
        <Progress
          mode="video"
          percent={percent}
          draggable
          onChange={(p) => setPercent(p)}
        />
      </View>
    </>
  )
}
export default Demo10
