import React, { useState } from 'react'
import { VideoProgress, Progress, Cell } from '@nutui/nutui-react'
import { Play } from '@nutui/icons-react'

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
      <Cell style={cardStyle} align="center">
        <VideoProgress status="static" percent={30} style={progressStyle} />
      </Cell>

      {/* 2. 独立全新组件 VideoProgress：暂停状态（增强高亮 + 暂停播放图标） */}
      <Cell style={cardStyle}>
        <VideoProgress
          status="paused"
          percent={50}
          pausedIcon={<Play size={10} color="#000" />}
          style={progressStyle}
        />
      </Cell>

      {/* 3. 独立全新组件 VideoProgress：支持滑块拖动手势交互 */}
      <Cell style={cardStyle}>
        <VideoProgress
          percent={percent}
          draggable
          onChange={(p) => setPercent(p)}
          style={progressStyle}
        />
      </Cell>

      {/* 4. 子组件 Progress.Video 形式 */}
      <Cell style={cardStyle}>
        <Progress.Video
          percent={percent}
          draggable
          onChange={(p) => setPercent(p)}
          style={progressStyle}
        />
      </Cell>

      {/* 5. 向下兼容写法：Progress mode="video" */}
      <Cell style={cardStyle}>
        <Progress
          mode="video"
          status="static"
          percent={60}
          style={progressStyle}
        />
      </Cell>
    </Cell.Group>
  )
}

export default Demo10
