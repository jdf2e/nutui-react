import React from 'react'
import { Collapse } from '@nutui/nutui-react'
import { ArrowDown, Checked } from '@nutui/icons-react'

const Demo6 = () => {
  return (
    <Collapse defaultActiveName={['1']} accordion expandIcon={<ArrowDown />}>
      <Collapse.Item
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checked />
            标题1
          </div>
        }
        name="1"
      >
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item
        title="标题2"
        name="2"
        extra={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            标题2
            <Checked color="red" />
          </div>
        }
      >
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        京东“厂直优品计划”首推“政府优品馆”
      </Collapse.Item>
    </Collapse>
  )
}
export default Demo6
