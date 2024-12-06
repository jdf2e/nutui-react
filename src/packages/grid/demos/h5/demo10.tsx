import React from 'react'
import { Grid, Toast } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const Demo10 = () => {
  const onClick = (item: any, index: number) => {
    Toast.show(`点击了${item.text}，第${index}个`)
  }
  return (
    <Grid direction="horizontal" onClick={onClick}>
      {Array.from({ length: 4 }, (_, index) => (
        <Grid.Item key={index} text="文字">
          <Image />
        </Grid.Item>
      ))}
    </Grid>
  )
}
export default Demo10
