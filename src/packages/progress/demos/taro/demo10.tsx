import React, { useState } from 'react'
import { Progress } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const cardStyle: React.CSSProperties = {
  padding: '15px 18px',
  background: '#999',
  borderRadius: 8,
  marginBottom: 12,
}

const progressStyle: React.CSSProperties = {
  height: 38,
}
const Demo10 = () => {
  const [percent, setPercent] = useState(20)
  return (
    <>
      <View style={cardStyle}>
        <Progress
          mode="video"
          status="static"
          percent={30}
          style={progressStyle}
        />
      </View>
      <View style={cardStyle}>
        <Progress
          mode="video"
          status="paused"
          percent={55}
          style={progressStyle}
        />
      </View>
      <View style={cardStyle}>
        <Progress
          mode="video"
          percent={percent}
          draggable
          onChange={(p) => setPercent(p)}
          style={progressStyle}
        />
      </View>
    </>
  )
}
export default Demo10
