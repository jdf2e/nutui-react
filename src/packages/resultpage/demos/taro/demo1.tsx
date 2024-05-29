import React from 'react'
import { ResultPage, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell>
      <ResultPage
        title="成功反馈"
        description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
        status="success"
        icon="https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/107428/12/47849/72538/664b772fFb388af70/6a17be01484bb02a.jpg"
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
