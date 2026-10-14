import React from 'react'
import { ResultPage, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <Cell>
      <ResultPage
        description="内容描述可折行，建议最多不超过两行建议最多不超过两行"
        status="warning"
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
export default Demo1
