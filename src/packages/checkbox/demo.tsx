import React, { useRef, useState } from 'react'
import { Checklist } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import Toast from '../toast'
import { Cell } from '../cell/cell'
import { Checkbox } from './checkbox'
import Button from '@/packages/button'

const CheckboxDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      uncontrolled: '非受控',
      controlled: '受控',
      basic: '基础用法',
      checkbox: '复选框',
      disbaled: '禁用状态',
      DisabledState: '未选时禁用状态',
      selective: '半选状态',
      disabledState: '选中时禁用状态',
      disabledSelectiveState: '半选时禁用状态',
      customSize: '自定义尺寸',
      customIcon: '自定义图标',
      triggerEvent: '点击触发事件',
      uncheckedx: '取消选中',
      checked: '选中',
      cancel: '取消',
      selected: '选中',
      options1: '选项',
      description: '描述信息',
      Disabled: '禁用',
      selectAndCancel: '全选和取消',
      selectAll: '全选',
      cancelSelection: '取消全选',
      reverse: '反选',
      options: '配置 options 渲染复选按钮',
      max: 'checkboxGroup使用，限制最大可选数（3个）, 至少选择数（1个）',
      threeState: '全选/半选/取消',
      list: '列表',
    },
    'zh-TW': {
      uncontrolled: '非受控',
      controlled: '受控',
      basic: '基础用法',
      checkbox: '複選框',
      disbaled: '禁用狀態',
      DisabledState: '未選時禁用狀態',
      selective: '半选状态',
      disabledState: '選中時禁用狀態',
      disabledSelectiveState: '半選時禁用狀態',
      customSize: '自定義尺寸',
      customIcon: '自定義圖示',
      triggerEvent: '點擊觸發事件',
      uncheckedx: '取消选中',
      checked: '選中',
      cancel: '取消',
      selected: '您選取了x',
      options1: '選項',
      description: '描述信息',
      Disabled: '禁用',
      selectAndCancel: '全選和取消',
      selectAll: '全選',
      cancelSelection: '取消全選',
      reverse: '反選',
      options: '配置 options 渲染複選按鈕',
      max: 'checkboxGroup使用，限制最大可选数（2个）, 至少选择数（1个）',
      threeState: '全选/半选/取消',
      list: '列表',
    },
    'en-US': {
      uncontrolled: 'uncontrolled',
      controlled: 'controlled',
      basic: 'Basic Usage',
      checkbox: 'Checkbox',
      disbaled: 'Disabled State',
      DisabledState: 'Disabled state',
      selective: 'Semi selective',
      disabledState: 'Disabled state',
      disabledSelectiveState: 'Semi selective Disabled',
      customSize: 'Custom size',
      customIcon: 'Custom Icon',
      triggerEvent: 'Click Trigger Event',
      uncheckedx: 'You unchecked x',
      checked: 'Checked',
      cancel: 'Cancel',
      selected: 'You selected x',
      options1: 'Options',
      description: 'Description',
      Disabled: 'Disabled',
      selectAndCancel: 'All Select and Cancel',
      selectAll: 'Select All',
      reverse: 'reverse',
      cancelSelection: 'Cancel All Selection',
      options: 'Render radios by configuring options',
      max: 'Used by checkboxGroup, limit the maximum number of options (2), minimum number of options (1)',
      threeState: 'Select All/Half/Cancel',
      list: 'List model',
    },
  })

  const [checked] = useState(false)
  const [checkbox1, setCheckbox1] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  const [checkboxgroup2] = useState(['1'])
  const [checkboxgroup3] = useState(['1'])
  const [checkboxgroup4] = useState([])
  const [checkboxgroup5] = useState<string[]>([])
  const checkboxgroup2Ref = useRef(null)
  const checkboxgroup3Ref = useRef(null)
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

  const [controlled, setControlled] = useState(false)
  const [controlledGroup, setControlledGroup] = useState(['2'])

  return (
    <>
      <div className="demo">
        <h2>{translated.uncontrolled}</h2>
        <Cell className="nut-cell">
          <Checkbox
            className="test"
            label={translated.checkbox}
            defaultChecked={checked}
          />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox
            style={{ marginInlineEnd: '8px' }}
            shape="button"
            className="test"
            label={
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div>{translated.checkbox}</div>
                <div style={{ color: 'gray' }}>{translated.description}</div>
              </div>
            }
            defaultChecked={!checked}
          />
          <Checkbox
            style={{ marginInlineEnd: '8px' }}
            shape="button"
            activeIcon={
              <Checklist className="nut-checkbox-button-icon-checked" />
            }
            className="test"
            label={
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div>{translated.checkbox}</div>
                <div style={{ color: 'gray' }}>{translated.description}</div>
              </div>
            }
            defaultChecked={checked}
          />
          <Checkbox
            shape="button"
            className="test"
            disabled
            label={
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div>{translated.checkbox}</div>
                <div>{translated.description}</div>
              </div>
            }
            defaultChecked={checked}
          />
        </Cell>
        <h2>{translated.controlled}</h2>
        <Cell className="nut-cell">
          <Checkbox
            className="test"
            label={translated.checkbox}
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
        <h2>{translated.basic}</h2>
        <Cell className="nut-cell">
          <Checkbox
            className="test"
            labelPosition="left"
            label={translated.checkbox}
            defaultChecked={checked}
          />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox.Group labelPosition="left" defaultValue={['1']}>
            <span>
              <Checkbox value="1" label={optionsDemo1[0].label} />
            </span>
            <Checkbox value="2" label={optionsDemo1[1].label} />
            <Checkbox value="3" label={optionsDemo1[2].label} />
          </Checkbox.Group>
        </Cell>
        <h2>{translated.selective}</h2>
        <Cell>
          <Checkbox
            value="1"
            checked
            label={`${translated.checkbox}1`}
            indeterminate
          />
        </Cell>
        <h2>{translated.disbaled}</h2>
        <Cell className="nut-cell">
          <Checkbox
            labelPosition="right"
            label={translated.DisabledState}
            checked={false}
            disabled
          />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox
            labelPosition="right"
            label={translated.disabledSelectiveState}
            checked
            disabled
            indeterminate
          />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox
            labelPosition="right"
            label={translated.disabledState}
            checked
            disabled
          />
        </Cell>
        <h2>{translated.customSize}</h2>
        <Cell className="nut-cell">
          <Checkbox
            style={{ '--nut-icon-width': '24px', '--nut-icon-height': '24px' }}
            label={translated.customSize}
          />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox
            style={{ '--nut-icon-width': '12px', '--nut-icon-height': '12px' }}
            label={translated.customSize}
          />
        </Cell>
        <h2>{translated.customIcon}</h2>
        <Cell className="nut-cell">
          <Checkbox
            defaultChecked={false}
            icon={<Checklist />}
            activeIcon={<Checklist className="nut-checkbox-icon-checked" />}
          >
            {translated.customIcon}
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
              {translated.customIcon}
            </Checkbox>
            <Checkbox
              value="2"
              defaultChecked={false}
              icon={<Checklist />}
              activeIcon={<Checklist className="nut-checkbox-icon-checked" />}
            >
              {translated.customIcon}
            </Checkbox>
          </Checkbox.Group>
        </Cell>
        <h2>{translated.triggerEvent}</h2>
        <Cell className="nut-cell">
          <Checkbox
            defaultChecked={false}
            onChange={(state) => {
              if (state) {
                Toast.show(translated.selected.replace('x', state.toString()))
              } else {
                Toast.show(translated.uncheckedx.replace('x', state.toString()))
              }
            }}
          >
            {translated.checkbox}
          </Checkbox>
        </Cell>
        <h2>Checkbox.Group</h2>
        <Cell>
          <Checkbox.Group
            defaultValue={checkboxgroup1}
            direction="horizontal"
            onChange={(value) => {
              setCheckboxgroup1(value)
            }}
          >
            <Checkbox value="1">{translated.options1}</Checkbox>
            <Checkbox value="2">{translated.options1}</Checkbox>
            <Checkbox value="3">{translated.options1}</Checkbox>
            <Checkbox value="4">{translated.options1}</Checkbox>
          </Checkbox.Group>
        </Cell>
        <Cell>
          <span>
            {translated.checked}：{checkboxgroup1.toString()}
          </span>
        </Cell>
        <h2>{translated.Disabled}</h2>
        <Cell>
          <Checkbox.Group
            defaultValue={checkboxgroup1}
            disabled
            direction="horizontal"
          >
            <Checkbox value="1">{translated.options1}</Checkbox>
            <Checkbox value="2">{translated.options1}</Checkbox>
            <Checkbox value="3">{translated.options1}</Checkbox>
            <Checkbox value="4">{translated.options1}</Checkbox>
          </Checkbox.Group>
        </Cell>
        <h2>{translated.selectAndCancel}</h2>
        <Cell>
          <Checkbox.Group
            labelPosition="left"
            direction="horizontal"
            ref={checkboxgroup2Ref}
            defaultValue={checkboxgroup2}
            onChange={(value) => {
              Toast.show(
                `${
                  value.length === 4
                    ? translated.selectAll
                    : translated.cancelSelection
                }`
              )
            }}
          >
            <Checkbox value="1">{translated.options1}</Checkbox>
            <Checkbox value="2">{translated.options1}</Checkbox>
            <Checkbox value="3">{translated.options1}</Checkbox>
            <Checkbox value="4">{translated.options1}</Checkbox>
          </Checkbox.Group>
        </Cell>
        <Cell>
          <Button
            type="primary"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggle(true)
            }}
            style={{ marginInlineEnd: '20px' }}
          >
            {translated.selectAll}
          </Button>
          <Button
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggle(false)
            }}
            style={{ marginInlineEnd: '20px' }}
          >
            {translated.cancel}
          </Button>
          <Button
            type="warning"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).reverse()
            }}
          >
            {translated.reverse}
          </Button>
        </Cell>
        <h2>{translated.max}</h2>
        <Cell>
          <Checkbox.Group
            defaultValue={checkboxgroup3}
            max={3}
            min={1}
            onLimit={(type) =>
              Toast.show(type === 'max' ? '最多选择3项' : '至少选择1项')
            }
          >
            <Checkbox value="1">{translated.options1}</Checkbox>
            <Checkbox value="2">{translated.options1}</Checkbox>
            <Checkbox value="3">{translated.options1}</Checkbox>
            <Checkbox value="4">{translated.options1}</Checkbox>
          </Checkbox.Group>
        </Cell>
        <h2>{translated.threeState}</h2>
        <Cell>
          <div style={{ width: '50%' }}>
            <Checkbox
              checked={checkbox1}
              indeterminate={indeterminate}
              onChange={(state) => {
                if (state) {
                  setIndeterminate(false)
                }
                setCheckbox1(state)
                ;(checkboxgroup3Ref.current as any).toggle(state)
              }}
            >
              {translated.selectAll}
            </Checkbox>
          </div>

          <Checkbox.Group
            ref={checkboxgroup3Ref}
            direction="horizontal"
            defaultValue={checkboxgroup4}
            onChange={(value) => {
              if (value.length === 4) {
                setIndeterminate(false)
                setCheckbox1(true)
              } else if (value.length && value.length < 4) {
                setIndeterminate(true)
                setCheckbox1(true)
              } else {
                setCheckbox1(false)
              }
            }}
          >
            <Checkbox value="1">{translated.options1}</Checkbox>
            <Checkbox value="2">{translated.options1}</Checkbox>
            <Checkbox value="3">{translated.options1}</Checkbox>
            <Checkbox value="4">{translated.options1}</Checkbox>
          </Checkbox.Group>
        </Cell>
        <h2>{translated.options}</h2>
        <Cell>
          <Checkbox.Group
            options={optionsDemo1}
            defaultValue={checkboxgroup5}
          />
        </Cell>
        <h2>{translated.list}</h2>
        <Checkbox.Group defaultValue={['1']} labelPosition="left" list>
          <Checkbox value="1" label={optionsDemo1[0].label} />
          <Checkbox value="2" label={optionsDemo1[1].label} />
          <Checkbox value="3" label={optionsDemo1[2].label} />
        </Checkbox.Group>
      </div>
    </>
  )
}

export default CheckboxDemo
