import React, { useState } from 'react'
import { Collapse } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [activeName, setActiveName] = useState(['1', '2'])
  const onChange = (
    activeName: string | string[],
    name: string,
    isOpen: boolean
  ) => {
    setActiveName(activeName as string[])
  }
  return (
    <Collapse activeName={activeName} onChange={onChange}>
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
export default Demo2
