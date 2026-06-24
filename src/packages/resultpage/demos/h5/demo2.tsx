import React from 'react'
import { ResultPage, Cell } from '@nutui/nutui-react'

const Demo2 = () => {
  return (
    <Cell>
      <ResultPage
        title="失败反馈"
        description="内容描述可折行，建议最多不超过两行建议最多不超过两行"
        status="error"
        actions={[
          {
            text: '负向操作',
          },
          {
            text: '建议操作',
            type: 'primary',
          },
        ]}
      />
    </Cell>
  )
}
export default Demo2
