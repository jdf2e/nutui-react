import React from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react'
import { Checklist } from '@nutui/icons-react'

const Demo7 = () => {
  return (
    <>
      <Cell className="nut-cell">
        <Checkbox
          defaultChecked={false}
          icon={<Checklist />}
          activeIcon={<Checklist className="nut-checkbox-icon-checked" />}
        >
          自定义图标
        </Checkbox>
      </Cell>
      <Cell className="nut-cell">
        <Checkbox.Group
          labelPosition="left"
          defaultValue={['1']}
          style={{ width: '100%' }}
        >
          <Checkbox
            value="1"
            defaultChecked={false}
            icon={<Checklist />}
            activeIcon={<Checklist className="nut-checkbox-icon-checked" />}
          >
            自定义图标
          </Checkbox>
          <Checkbox
            value="2"
            defaultChecked={false}
            icon={<Checklist />}
            activeIcon={<Checklist className="nut-checkbox-icon-checked" />}
          >
            自定义图标
          </Checkbox>
        </Checkbox.Group>
      </Cell>
    </>
  )
}
export default Demo7
