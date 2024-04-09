import React from 'react'
import { Collapse } from '@nutui/nutui-react'
import { ArrowDown, Checked } from '@nutui/icons-react'

const Demo5 = () => {
  return (
    <Collapse
      defaultActiveName={['1']}
      accordion
      expandIcon={<ArrowDown />}
      rotate={90}
    >
      <Collapse.Item title="标题1" name="1" expandIcon={<Checked />}>
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2" expandIcon={<Checked />}>
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        京东“厂直优品计划”首推“政府优品馆”
      </Collapse.Item>
    </Collapse>
  )
}
export default Demo5
