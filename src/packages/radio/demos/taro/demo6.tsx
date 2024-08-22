import React from 'react'
import { Radio, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Radio.Group defaultValue="1" direction="horizontal">
          <Radio value="1">选项1</Radio>
          <Radio disabled value="2">
            选项2
          </Radio>
          <Radio value="3">选项3</Radio>
        </Radio.Group>
      </Cell>
      <Cell>
        <Radio.Group
          defaultValue="1"
          labelPosition="left"
          direction="horizontal"
        >
          <Radio value="1">选项1</Radio>
          <Radio disabled value="2">
            选项2
          </Radio>
          <Radio value="3">选项3</Radio>
        </Radio.Group>
      </Cell>
      <Cell>
        <Radio.Group defaultValue="1" direction="horizontal">
          <Radio shape="button" value="1">
            选项1
          </Radio>
          <Radio shape="button" disabled value="2">
            选项2
          </Radio>
          <Radio shape="button" value="3">
            选项3
          </Radio>
        </Radio.Group>
      </Cell>
    </>
  )
}
export default Demo6
