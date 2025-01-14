import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo6 = ({ t }: propsType) => {
  return (
    <Grid direction="horizontal">
      {Array.from({ length: 4 }, (_, index) => (
        <Grid.Item key={index} text={t.text}>
          <Image />
        </Grid.Item>
      ))}
    </Grid>
  )
}

export default withTranslation(Demo6)
