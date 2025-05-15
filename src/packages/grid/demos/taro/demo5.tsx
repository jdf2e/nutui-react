import React from 'react'
import { Grid, pxTransform } from '@nutui/nutui-react-taro'
import { Image } from '@nutui/icons-react-taro'

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
