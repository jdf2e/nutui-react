import React from 'react'
import { ResultPage, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell>
      <ResultPage
        description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
        status="warning"
        actions={[
          {
            text: '次要按钮',
          },
          {
            text: '主要按钮',
            type: 'primary',
          },
        ]}
      />
    </Cell>
  )
}
export default Demo1
