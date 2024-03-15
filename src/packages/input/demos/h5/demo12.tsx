/*
 * @Author: yeyu98
 * @Date: 2024-03-15 12:45:23
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-03-15 12:48:08
 * @Description:
 */
import React from 'react'
import { Input } from '@nutui/nutui-react'
import Toast from '@/packages/toast'

const Demo12 = () => {
  return (
    <>
      <Input placeholder="事件" onClick={() => Toast.show('onClick')} />
    </>
  )
}
export default Demo12
