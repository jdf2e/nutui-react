import React from 'react'
import { Grid, Toast } from '@nutui/nutui-react'
import { Image as ImageIcon } from '@nutui/icons-react'

const Demo10 = () => {
  const onClick = (item: any, index: number) => {
    Toast.show(`点击了${item.text}，第${index}个`)
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
