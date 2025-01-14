import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo4 = ({ t }: propsType) => {
  return (
    <Grid gap={3}>
      {Array.from({ length: 8 }, (_, index) => (
        <Grid.Item key={index} text={t.text}>
          <Image />
        </Grid.Item>
      ))}
    </Grid>
  )
}

export default withTranslation(Demo4)
