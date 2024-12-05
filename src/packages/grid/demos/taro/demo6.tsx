import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
import { Image } from '@nutui/icons-react-taro'

const Demo6 = () => {
  return (
    <Grid direction="horizontal">
      {Array.from({ length: 4 }, (_, index) => (
        <Grid.Item key={index} text="文字">
          <Image />
        </Grid.Item>
      ))}
    </Grid>
  )
}
export default Demo6
