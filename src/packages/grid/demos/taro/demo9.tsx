import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
import { Image } from '@tarojs/components'
import { pxTransform } from '@tarojs/taro'

const Demo9 = () => {
  const style = {
    width: pxTransform(100),
    height: pxTransform(100),
  }
  const imgSrc =
    'https://m.360buyimg.com/babel/jfs/t1/36973/29/11270/120042/5cf1fe3cEac2b5898/10c2722d0cc0bfa7.png'
  return (
    <Grid columns={3}>
      <Grid.Item>
        <Image src={imgSrc} style={style} />
      </Grid.Item>
      <Grid.Item>
        <Image src={imgSrc} style={style} />
      </Grid.Item>
      <Grid.Item>
        <Image src={imgSrc} style={style} />
      </Grid.Item>
    </Grid>
  )
}
export default Demo9
