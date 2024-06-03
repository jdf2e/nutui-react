import React from 'react'
import { ResultPage, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell>
      <ResultPage
        title="二次确认"
        description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
        status="waiting"
      />
    </Cell>
  )
}
export default Demo1
