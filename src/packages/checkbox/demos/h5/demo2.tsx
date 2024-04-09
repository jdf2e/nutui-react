import React, { useState } from 'react'
import { Checkbox, Cell } from '@nutui/nutui-react'
import { Checklist } from '@nutui/icons-react'

const Demo2 = () => {
  const [controlled, setControlled] = useState(false)
  const [controlledGroup, setControlledGroup] = useState(['2'])
  const [optionsDemo1] = useState([
    {
      label: '选项 1',
      value: '1',
    },
    {
      label: '选项 2',
      value: '2',
      disabled: true,
    },
    {
      label: '选项 3',
      value: '3',
    },
  ])
  return (
    <>
      <Cell className="nut-cell">
        <Checkbox
          className="test"
          label="复选框"
          checked={controlled}
          onChange={(val) => setControlled(val)}
        />
      </Cell>

      <Cell className="nut-cell">
        <Checkbox.Group
          labelPosition="left"
          value={controlledGroup}
          onChange={(value) => setControlledGroup(value)}
        >
          <span>
            <Checkbox value="1" label={optionsDemo1[0].label} />
          </span>
          <Checkbox value="2" label={optionsDemo1[1].label} />
          <Checkbox value="3" disabled label={optionsDemo1[2].label} />
        </Checkbox.Group>
      </Cell>
      <Cell className="nut-cell">
        <Checkbox.Group
          labelPosition="left"
          value={controlledGroup}
          onChange={(value) => setControlledGroup(value)}
        >
          <Checkbox
            activeIcon={
              <Checklist className="nut-checkbox-button-icon-checked" />
            }
            shape="button"
            value="1"
            label={optionsDemo1[0].label}
          />
          <Checkbox
            activeIcon={
              <Checklist className="nut-checkbox-button-icon-checked" />
            }
            shape="button"
            value="2"
            label={optionsDemo1[1].label}
          />
          <Checkbox
            activeIcon={
              <Checklist className="nut-checkbox-button-icon-checked" />
            }
            shape="button"
            value="3"
            label={optionsDemo1[2].label}
            disabled
          />
        </Checkbox.Group>
      </Cell>
    </>
  )
}
export default Demo2
