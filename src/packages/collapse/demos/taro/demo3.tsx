import React from 'react'
import { Collapse } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const handleChange = (
    activeName: string | string[],
    name: string,
    isOpen: boolean
  ) => {
    console.log(activeName, name, isOpen)
  }
  return (
    <Collapse defaultActiveName={['1', '2']} onChange={handleChange}>
      <Collapse.Item title="标题1" name="1">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        京东“厂直优品计划”首推“政府优品馆”
      </Collapse.Item>
    </Collapse>
  )
}
export default Demo3
