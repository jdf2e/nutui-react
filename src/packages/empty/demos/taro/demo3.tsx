import React from 'react'
import { Empty } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo3 = () => {
  return <Empty description="无数据" imageSize={pxTransform(80)} />
}
export default Demo3
