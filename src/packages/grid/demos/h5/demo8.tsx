import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const Demo8 = () => {
  return (
    <Grid columns="3">
      <Grid.Item text="文字">
        <Image width={15} height={15} />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image color="red" />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image width={30} height={30} color="#478EF2" />
      </Grid.Item>
    </Grid>
  )
}
export default Demo8
