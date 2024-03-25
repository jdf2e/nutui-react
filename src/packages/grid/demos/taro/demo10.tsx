import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
import { Image as ImageIcon } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'

const Demo10 = () => {
  const imgSrc =
    'https://m.360buyimg.com/babel/jfs/t1/36973/29/11270/120042/5cf1fe3cEac2b5898/10c2722d0cc0bfa7.png'
  const onClick = (item: any, index: number) => {
    Taro.showToast({ title: `点击了${item.text}，第${index}个` })
  }
  return (
    <Grid direction="horizontal" onClick={onClick}>
      <Grid.Item text="文字">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="文字">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="文字">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="文字">
        <ImageIcon />
      </Grid.Item>
    </Grid>
  )
}
export default Demo10
