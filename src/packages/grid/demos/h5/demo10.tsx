import React from 'react'
import { Grid, Toast } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo10 = ({ t }: propsType) => {
  const onClick = (item: any, index: number) => {
    Toast.show(`Click${t.text} ${index}`)
  }

  return (
    <Grid direction="horizontal" onClick={onClick}>
      {Array.from({ length: 4 }, (_, index) => (
        <Grid.Item key={index} text={t.text}>
          <Image />
        </Grid.Item>
      ))}
    </Grid>
  )
}

export default withTranslation(Demo10)
