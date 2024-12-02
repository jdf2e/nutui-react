import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const Demo4 = () => {
  return (
    <Grid gap={3}>
      {Array.from({ length: 8 }, (_, index) => (
        <Grid.Item key={index} text="文字">
          <Image />
        </Grid.Item>
      ))}
    </Grid>
  )
}
export default Demo4
