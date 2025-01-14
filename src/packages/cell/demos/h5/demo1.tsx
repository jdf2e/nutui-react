import React from 'react'
import { Cell, Toast } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo1 = ({ t }: propsType) => {
  const testClick = (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    Toast.show(t.clickEvent)
  }

  return (
    <>
      <Cell title={t.title} extra={t.descriptionText} />
      <Cell
        title={t.title}
        description={t.description}
        extra={t.descriptionText}
      />
      <Cell
        clickable
        title={t.clickTest}
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => testClick(event)}
      />
      <Cell title={t.setRadius} radius={0} />
    </>
  )
}

export default withTranslation(Demo1)
