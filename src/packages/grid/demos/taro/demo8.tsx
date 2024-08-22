import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
import { Image } from '@nutui/icons-react-taro'

const Demo8 = () => {
  return (
    <Grid columns="3">
      <Grid.Item text="文字">
        <Image size={16} />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image color="red" />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image size={30} color="#478EF2" />
      </Grid.Item>
    </Grid>
  )
}
export default Demo8
