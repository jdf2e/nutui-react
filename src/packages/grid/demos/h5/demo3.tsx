import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const Demo3 = () => {
  return (
    <Grid columns={3} square>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
    </Grid>
  )
}
export default Demo3
