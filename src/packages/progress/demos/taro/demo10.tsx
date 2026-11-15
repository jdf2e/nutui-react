import React, { useState } from 'react'
import { VideoProgress, Progress, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Play } from '@nutui/icons-react-taro'

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  color: '#8c8c8c',
  marginBottom: 8,
}

const cardStyle: React.CSSProperties = {
  flexDirection: 'column',
  alignItems: 'stretch',
  padding: '12px 16px',
  background: '#2c2c2e',
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
      {/* 1. 静态播放状态 */}
      <View style={cardStyle}>
        <View style={labelStyle}>
          1. 静态播放状态：status=&apos;static&apos;（弱化细轨展示）
        </View>
        <VideoProgress status="static" percent={30} style={progressStyle} />
      </View>

      {/* 2. 暂停状态与自定义图标 */}
      <View style={cardStyle}>
        <View style={labelStyle}>
          2. 暂停状态：status=&apos;paused&apos; +
          pausedIcon（高亮加粗带播放图标）
        </View>
        <View style={{ paddingLeft: 20 }}>
          <VideoProgress
            status="paused"
            percent={50}
            pausedIcon={<Play size={12} color="#ffffff" />}
            style={progressStyle}
          />
        </View>
      </View>

      {/* 3. 交互拖拽寻道（同时展示 Progress.Video 子组件形式） */}
      <View style={cardStyle}>
        <View style={labelStyle}>
          {`3. 手势拖拽受控交互：<Progress.Video draggable />（当前: ${percent}%）`}
        </View>
        <Progress.Video
          percent={percent}
          draggable
          onChange={(p) => setPercent(p)}
          style={progressStyle}
        />
      </View>
    </Cell.Group>
  )
}

export default Demo10
