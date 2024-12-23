import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const Demo3 = () => {
  return (
    <Grid
      square={false}
      gap={0}
      style={{
        '--nutui-grid-border-width': '1px',
      }}
    >
      {Array.from({ length: 4 }, (_, index) => (
        <Grid.Item key={index} text="文字">
          <Image />
        </Grid.Item>
      ))}
    </Grid>
  )
}
export default Demo3
