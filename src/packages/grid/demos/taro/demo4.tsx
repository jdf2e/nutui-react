import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
import { Image } from '@nutui/icons-react-taro'

const Demo4 = () => {
  return (
    <Grid gap={3}>
      {[...Array(8)].map((_, index) => (
        <Grid.Item key={index} text="文字">
          <Image />
        </Grid.Item>
      ))}
    </Grid>
  )
}
export default Demo4
