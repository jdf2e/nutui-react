import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'
import { pxTransform } from '@tarojs/taro'

const Demo8 = () => {
  return (
    <Grid columns="3">
      <Grid.Item text="文字">
        {/* <Image size={16} /> */}
        <Text style={{ fontSize: pxTransform(16) }}>T</Text>
      </Grid.Item>
      <Grid.Item text="文字">
        {/* <Image color="red" /> */}
        <Text style={{ color: 'red' }}>T</Text>
      </Grid.Item>
      <Grid.Item text="文字">
        {/* <Image size={30} color="#478EF2" /> */}
        <Text style={{ color: '#478EF2', fontSize: pxTransform(30) }}>T</Text>
      </Grid.Item>
      <Grid.Item text="文字">
        {/* <Image size={16} /> */}
        <Text style={{ fontSize: pxTransform(16) }}>T</Text>
      </Grid.Item>
      <Grid.Item text="文字">
        {/* <Image color="red" /> */}
        <Text style={{ color: 'red' }}>T</Text>
      </Grid.Item>
      <Grid.Item text="文字">
        {/* <Image size={30} color="#478EF2" /> */}
        <Text style={{ color: '#478EF2', fontSize: pxTransform(30) }}>T</Text>
      </Grid.Item>
    </Grid>
  )
}
export default Demo8
