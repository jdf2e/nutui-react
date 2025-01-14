import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo8 = ({ t }: propsType) => {
  return (
    <Grid columns={3} gap={7}>
      <Grid.Item text={t.text}>
        <Image width={15} height={15} />
      </Grid.Item>
      <Grid.Item text={t.text}>
        <Image color="red" />
      </Grid.Item>
      <Grid.Item text={t.text}>
        <Image width={30} height={30} color="#478EF2" />
      </Grid.Item>
    </Grid>
  )
}

export default withTranslation(Demo8)
