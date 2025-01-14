import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo3 = ({ t }: propsType) => {
  return (
    <Grid
      square={false}
      gap={0}
      style={{
        '--nutui-grid-border-width': '1px',
      }}
    >
      {Array.from({ length: 4 }, (_, index) => (
        <Grid.Item key={index} text={t.text}>
          <Image />
        </Grid.Item>
      ))}
    </Grid>
  )
}

export default withTranslation(Demo3)
