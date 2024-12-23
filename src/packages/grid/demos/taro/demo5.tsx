import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
import { Image } from '@nutui/icons-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo5 = () => {
  const style = { height: pxTransform(100) }
  return (
    <Grid reverse style={style}>
      {Array.from({ length: 4 }, (_, index) => (
        <Grid.Item key={index} text="文字">
          <Image />
        </Grid.Item>
      ))}
    </Grid>
  )
}
export default Demo5
