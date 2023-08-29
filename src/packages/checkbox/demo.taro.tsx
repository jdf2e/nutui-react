import React, { useRef, useState } from 'react'
import Taro from '@tarojs/taro'
import { Checklist } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Button, Cell, Checkbox } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface T {
  uncontrolled: string
  controlled: string
  basic: string
  checkbox: string
  disbaled: string
  DisabledState: string
  selective: string
  disabledState: string
  disabledSelectiveState: string
  customSize: string
  customIcon: string
  triggerEvent: string
  uncheckedx: string
  checked: string
  cancel: string
  reverse: string
  selected: string
  options1: string
  Disabled: string
  selectAndCancel: string
  selectAll: string
  cancelSelection: string
  options: string
  max: string
  threeState: string
}

const CheckboxDemo = () => {
  const [translated] = useTranslate<T>({
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
      Disabled: '禁用',
      selectAndCancel: '全选和取消',
      selectAll: '全选',
      cancelSelection: '取消全选',
      reverse: '反选',
      options: '配置 options 渲染复选按钮',
      max: 'checkboxGroup使用，限制最大可选数（2个）',
      threeState: '全选/半选/取消',
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
      Disabled: '禁用',
      selectAndCancel: '全選和取消',
      selectAll: '全選',
      cancelSelection: '取消全選',
      reverse: '反選',
      options: '配置 options 渲染複選按鈕',
      max: 'checkboxGroup使用，限制最大可选数（2个）',
      threeState: '全选/半选/取消',
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
      Disabled: 'Disabled',
      selectAndCancel: 'All Select and Cancel',
      selectAll: 'Select All',
      reverse: 'reverse',
      cancelSelection: 'Cancel All Selection',
      options: 'Render radios by configuring options',
      max: 'Used by checkboxGroup, limit the maximum number of options (2)',
      threeState: 'Select All/Half/Cancel',
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
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.uncontrolled}</h2>
        <Cell className="nut-cell">
          <Checkbox
            className="test"
            label={translated.checkbox}
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
            <Checkbox value="3" label={optionsDemo1[2].label} />
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
            style={{
              '--nut-icon-width': '24px',
            }}
            label={translated.customSize}
          />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox
            style={{
              '--nut-icon-width': '12px',
            }}
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
        <h2>{translated.triggerEvent}</h2>
        <Cell className="nut-cell">
          <Checkbox
            defaultChecked={false}
            onChange={(state) => {
              if (state) {
                Taro.showToast({
                  icon: 'none',
                  title: translated.selected.replace('x', state.toString()),
                })
              } else {
                Taro.showToast({
                  icon: 'none',
                  title: translated.uncheckedx.replace('x', state.toString()),
                })
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
              Taro.showToast({
                icon: 'none',
                title: value.toString(),
              })
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
              Taro.showToast({
                icon: 'none',
                title: `${
                  value.length === 4
                    ? translated.selectAll
                    : translated.cancelSelection
                }`,
              })
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
            style={{ margin: '0 20px 0 0' }}
          >
            {translated.selectAll}
          </Button>
          <Button
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggle(false)
            }}
            style={{ margin: '0 20px 0 0' }}
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
            max={2}
            onChange={(value) => {
              Taro.showToast({
                title: value.toString(),
                icon: 'none',
              })
            }}
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
      </div>
    </>
  )
}

export default CheckboxDemo
