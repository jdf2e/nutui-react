import React, { useState } from 'react'
import { Dialog, Cell, ResultPage } from '@nutui/nutui-react'

const Demo7 = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell title="弹窗内嵌结果反馈" onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        hideConfirmButton
        hideCancelButton
        style={{
          '--nutui-dialog-padding': '20px 24px',
          '--nutui-dialog-content-margin': '0',
        }}
      >
        <ResultPage
          title="反馈标题"
          description="内容描述可折行，建议最多不超过两行建议最多不超过两行"
          status="success"
          actions={[
            {
              text: '负向操作',
              onClick: () => {
                setVisible(false)
              },
            },
            {
              text: '建议操作',
              type: 'primary',
              onClick: () => {
                setVisible(false)
              },
            },
          ]}
        />
      </Dialog>
    </>
  )
}
export default Demo7
