/*
 * @Author: your name
 * @Date: 2021-12-23 11:15:50
 * @LastEditTime: 2021-12-27 10:16:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /nutui-react/src/packages/calendar/demo.tsx
 */
import React, { useState } from 'react'
import { Cascader } from './cascader'
import { Cell } from '@/packages/cell/cell'
import { Input } from '@/packages/input/input'

const CascaderDemo = () => {
  const [date, setDate] = useState('')
  const [dateWeek, setDateWeek] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [value, setValue] = useState([])
  const [options, setOptions] = useState([
    {
      value: '浙江',
      text: '浙江',
      children: [
        {
          value: '杭州',
          text: '杭州',
          disabled: true,
          children: [
            { value: '西湖区', text: '西湖区' },
            { value: '余杭区', text: '余杭区' },
          ],
        },
        {
          value: '温州',
          text: '温州',
          children: [
            { value: '鹿城区', text: '鹿城区' },
            { value: '瓯海区', text: '瓯海区' },
          ],
        },
      ],
    },
    {
      value: '湖南',
      text: '湖南',
      disabled: true,
      children: [
        {
          value: '长沙',
          text: '长沙',
          disabled: true,
          children: [
            { value: '西湖区', text: '西湖区' },
            { value: '余杭区', text: '余杭区' },
          ],
        },
        {
          value: '温州',
          text: '温州',
          children: [
            { value: '鹿城区', text: '鹿城区' },
            { value: '瓯海区', text: '瓯海区' },
          ],
        },
      ],
    },
    {
      value: '福建',
      text: '福建',
      children: [
        {
          value: '福州',
          text: '福州',
          children: [
            { value: '鼓楼区', text: '鼓楼区' },
            { value: '台江区', text: '台江区' },
          ],
        },
      ],
    },
  ])

  const openSwitch = () => {
    setIsVisible(true)
  }

  const closeSwitch = () => {
    setIsVisible(false)
  }

  const change = (value) => {
    // console.log('value1', ...value)
    // console.log('value2', value)
    setValue(value)
  }

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell title="选择地址" desc={value ? value : '请选择'} onClick={openSwitch}></Cell>
        <Cascader
          visible={isVisible}
          value={value}
          onClose={closeSwitch}
          title="地址选择"
          options={options}
          onChange={change}
        />
      </div>
    </>
  )
}

export default CascaderDemo
