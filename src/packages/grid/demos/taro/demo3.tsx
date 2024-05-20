import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'

const Image = () => <Text>T</Text>

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
