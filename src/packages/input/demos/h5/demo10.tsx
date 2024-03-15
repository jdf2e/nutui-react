/*
 * @Author: yeyu98
 * @Date: 2024-03-15 12:26:16
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-03-15 12:44:30
 * @Description:
 */
import React from 'react'
import { Input } from '@nutui/nutui-react'

const Demo10 = () => {
  const formatter = (value: string) => value.replace(/\d/g, '')
  return (
    <>
      <Input formatter={formatter} placeholder="在输入时移除数字" />
      <Input
        formatter={formatter}
        formatTrigger="onBlur"
        placeholder="在失焦时移除数字"
      />
    </>
  )
}
export default Demo10
