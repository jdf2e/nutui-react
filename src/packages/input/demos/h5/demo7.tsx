/*
 * @Author: yeyu98
 * @Date: 2024-03-15 12:26:16
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-03-15 12:41:56
 * @Description:
 */
import React from 'react'
import { Input } from '@nutui/nutui-react'
import Form from '@/packages/form'

const Demo7 = () => {
  return (
    <>
      <Form>
        <Form.Item label="文本" name="username">
          <Input
            className="nut-input-text"
            placeholder="请输入文本"
            type="text"
            onChange={(val) => {
              console.log('change value:', val)
            }}
          />
        </Form.Item>
      </Form>
    </>
  )
}
export default Demo7
