import React from 'react'
import { ResultPage, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <ResultPage
          title="信息反馈"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="info"
          actions={[
            {
              text: '主要操作',
              type: 'primary',
            },
          ]}
        />
      </Cell>
      <Cell>
        <ResultPage
          title="信息反馈"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="info"
          actions={[
            {
              text: '次要操作',
            },
          ]}
        />
      </Cell>
    </>
  )
}
export default Demo1
