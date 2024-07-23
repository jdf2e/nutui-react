import React from 'react'
import { Progress, Image, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Cell>
      <Progress percent={60} showText>
        <Image
          style={{ position: 'relative', right: '10px' }}
          width="30px"
          height="30px"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
        />
      </Progress>
    </Cell>
  )
}
export default Demo4
