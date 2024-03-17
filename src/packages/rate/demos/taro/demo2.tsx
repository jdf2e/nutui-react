import React, { useState } from 'react'
import { Rate } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [score, setScore] = useState(2)
  return <Rate value={score} onChange={(value) => setScore(value)} />
}
export default Demo2
