import React, { useState } from 'react'
import { VideoProgress, Progress, Cell } from '@nutui/nutui-react'
import { Play } from '@nutui/icons-react'

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
      {/* 1. status="static" */}
      <Cell style={cardStyle}>
        <div style={labelStyle}>
          1. 静态播放中状态：status=&apos;static&apos;（弱化细轨展示）
        </div>
        <VideoProgress status="static" percent={30} style={progressStyle} />
      </Cell>

      {/* 2. status="paused" + pausedIcon */}
      <Cell style={cardStyle}>
        <div style={labelStyle}>
          2. 暂停状态：status=&apos;paused&apos; +
          pausedIcon（高亮加粗带播放图标）
        </div>
        <div style={{ paddingLeft: 20 }}>
          <VideoProgress
            status="paused"
            percent={50}
            pausedIcon={<Play size={12} color="#ffffff" />}
            style={progressStyle}
          />
        </div>
      </Cell>

      {/* 3. draggable + onChange */}
      <Cell style={cardStyle}>
        <div style={labelStyle}>
          {`3. 手势拖拽受控交互：draggable + onChange（当前: ${percent}%）`}
        </div>
        <VideoProgress
          percent={percent}
          draggable
          onChange={(p) => setPercent(p)}
          style={progressStyle}
        />
      </Cell>

      {/* 4. 子组件调用 Progress.Video */}
      <Cell style={cardStyle}>
        <div style={labelStyle}>{'4. 子组件调用形式：<Progress.Video />'}</div>
        <Progress.Video
          percent={percent}
          draggable
          onChange={(p) => setPercent(p)}
          style={progressStyle}
        />
      </Cell>

      {/* 5. 向下兼容 mode="video" */}
      <Cell style={cardStyle}>
        <div style={labelStyle}>
          {'5. 向下兼容旧写法：<Progress mode="video" />'}
        </div>
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
