import React, { useState } from 'react'
import { VideoProgress, Progress, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Play } from '@nutui/icons-react-taro'

const cardStyle: React.CSSProperties = {
  padding: '15px 18px',
  background: '#333',
  borderRadius: 8,
  marginBottom: 12,
}

const progressStyle: React.CSSProperties = {
  height: 38,
}

const Demo10 = () => {
  const [percent, setPercent] = useState(25)

  return (
    <Cell.Group>
      {/* 1. 独立全新组件 VideoProgress：播放中（静态弱化） */}
      <View style={cardStyle}>
        <VideoProgress status="static" percent={30} style={progressStyle} />
      </View>

      {/* 2. 独立全新组件 VideoProgress：暂停状态（增强高亮 + 暂停播放图标） */}
      <View style={cardStyle}>
        <VideoProgress
          status="paused"
          percent={50}
          pausedIcon={<Play size={10} color="#000" />}
          style={progressStyle}
        />
      </View>

      {/* 3. 独立全新组件 VideoProgress：支持滑块拖动手势交互 */}
      <View style={cardStyle}>
        <VideoProgress
          percent={percent}
          draggable
          onChange={(p) => setPercent(p)}
          style={progressStyle}
        />
      </View>

      {/* 4. 子组件 Progress.Video 形式 */}
      <View style={cardStyle}>
        <Progress.Video
          percent={percent}
          draggable
          onChange={(p) => setPercent(p)}
          style={progressStyle}
        />
      </View>

      {/* 5. 向下兼容写法：Progress mode="video" */}
      <View style={cardStyle}>
        <Progress
          mode="video"
          status="static"
          percent={60}
          style={progressStyle}
        />
      </View>
    </Cell.Group>
  )
}

export default Demo10
