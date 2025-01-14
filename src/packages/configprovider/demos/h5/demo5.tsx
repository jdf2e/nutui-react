import React from 'react'
import { ConfigProvider, Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo5 = ({ t }: propsType) => {
  return (
    <>
      <ConfigProvider direction="rtl">
        <Cell
          title={
            <div>
              <span>{t.title}</span>
            </div>
          }
          description={<span>{t.description}</span>}
          extra={t.descriptionText}
        />
      </ConfigProvider>
    </>
  )
}

export default withTranslation(Demo5)
