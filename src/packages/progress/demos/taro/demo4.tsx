import React from 'react'
import { Progress, Image } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Progress percent={60} showText>
      <Image
        width="30px"
        height="30px"
        src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      />
    </Progress>
  )
}
export default Demo4
