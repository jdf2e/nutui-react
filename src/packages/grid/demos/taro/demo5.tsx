import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'

const Image = () => <Text>T</Text>

const Demo5 = () => {
  return (
    <Grid reverse>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
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
export default Demo5
