import React, { useState } from 'react'
import { Rate } from '@nutui/nutui-react'

const Demo2 = () => {
  const [score, setScore] = useState(2)
  return <Rate value={score} showScore onChange={(value) => setScore(value)} />
}
export default Demo2
