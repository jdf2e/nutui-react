import React from 'react'
import { Grid, Image } from '@nutui/nutui-react'

const Demo9 = () => {
  const imgSrc =
    'https://m.360buyimg.com/babel/jfs/t1/36973/29/11270/120042/5cf1fe3cEac2b5898/10c2722d0cc0bfa7.png'
  return (
    <Grid>
      {Array.from({ length: 4 }, (_, index) => (
        <Grid.Item key={index}>
          <Image src={imgSrc} width="100%" height="100%" />
        </Grid.Item>
      ))}
    </Grid>
  )
}
export default Demo9
