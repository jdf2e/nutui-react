import React, { useState } from 'react'
import { Progress, Cell } from '@nutui/nutui-react'

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
    <Cell.Group>
      <Cell style={cardStyle} align="center">
        <Progress
          mode="video"
          status="static"
          percent={30}
          style={progressStyle}
        />
      </Cell>
      <Cell style={cardStyle}>
        <Progress
          mode="video"
          status="paused"
          percent={50}
          style={progressStyle}
        />
      </Cell>
      <Cell style={cardStyle}>
        <Progress
          mode="video"
          percent={percent}
          draggable
          onChange={(p) => setPercent(p)}
          style={progressStyle}
        />
      </Cell>
    </Cell.Group>
  )
}
export default Demo10
