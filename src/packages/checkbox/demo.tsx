import React, { useRef, useState } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Toast from '../toast'
import { Cell } from '../cell/cell'
import { Checkbox } from './checkbox'
import Button from '@/packages/button'

interface T {
  basic: string
  checkbox: string
  disbaled: string
  DisabledState: string
  selective: string
  disabledState: string
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
      basic: '基本用法',
      checkbox: '复选框',
      disbaled: '禁用状态',
      DisabledState: '未选时禁用状态',
      selective: '半选状态',
      disabledState: '选中时禁用状态',
      customSize: '自定义尺寸',
      customIcon: '自定义图标',
      triggerEvent: '点击触发事件',
      uncheckedx: '您取消了x的勾选',
      checked: '选中',
      cancel: '取消',
      selected: '您选中了x',
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
      basic: '基本用法',
      checkbox: '複選框',
      disbaled: '禁用狀態',
      DisabledState: '未選時禁用狀態',
      selective: '半选状态',
      disabledState: '選中時禁用狀態',
      customSize: '自定義尺寸',
      customIcon: '自定義圖示',
      triggerEvent: '點擊觸發事件',
      uncheckedx: '您取消了x的勾選',
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
      basic: 'Basic Usage',
      checkbox: 'Checkbox',
      disbaled: 'Disabled State',
      DisabledState: 'Disabled state',
      selective: 'Semi selective',
      disabledState: 'Disabled state',
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

  const [checked] = useState(true)
  const [checkbox1, setCheckbox1] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  const [checkboxgroup2] = useState(['1'])
  const [checkboxgroup3] = useState(['1'])
  const [checkboxgroup4] = useState([])
  const [checkboxgroup5, setCheckboxgroup5] = useState<string[]>([])
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

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell className="nut-cell">
          <Checkbox
            className="test"
            textPosition="left"
            label={translated.checkbox}
            checked={checked}
          />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox.Group textPosition="left" checkedValue={['选项 1']}>
            <span>
              <Checkbox label={optionsDemo1[0].label} checked={false} />
            </span>
            <Checkbox label={optionsDemo1[1].label} checked={false} />
            <Checkbox label={optionsDemo1[2].label} checked={false} />
          </Checkbox.Group>
        </Cell>
        <h2>{translated.selective}</h2>
        <Cell>
          <Checkbox.Group checkedValue={checkboxgroup1}>
            <Checkbox label={`${translated.checkbox}1`} checked indeterminate />
          </Checkbox.Group>
        </Cell>
        <h2>{translated.disbaled}</h2>
        <Cell className="nut-cell">
          <Checkbox
            textPosition="right"
            label={translated.DisabledState}
            checked={false}
            disabled
          />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox
            textPosition="right"
            label={translated.disabledState}
            checked
            disabled
          />
        </Cell>
        <h2>{translated.customSize}</h2>
        <Cell className="nut-cell">
          <Checkbox label={translated.customSize} iconSize={25} />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox label={translated.customSize} iconSize={10} />
        </Cell>
        <h2>{translated.customIcon}</h2>
        <Cell className="nut-cell">
          <Checkbox.Group>
            <Checkbox
              checked={false}
              label={1}
              iconName="checklist"
              iconActiveName="checklist"
            >
              {translated.customIcon}
            </Checkbox>
            <Checkbox
              checked={false}
              label={2}
              iconName="checklist"
              iconActiveName="checklist"
            >
              <div>{translated.customIcon}1</div>
              <div style={{ fontSize: '12px', color: '#8c8c8c' }}>
                {translated.customIcon}1
              </div>
            </Checkbox>
          </Checkbox.Group>
        </Cell>
        <h2>{translated.triggerEvent}</h2>
        <Cell className="nut-cell">
          <Checkbox
            checked={false}
            onChange={(state, label) => {
              if (state) {
                Toast.text(translated.selected.replace('x', label))
              } else {
                Toast.text(translated.uncheckedx.replace('x', label))
              }
            }}
          >
            {translated.checkbox}
          </Checkbox>
        </Cell>
        <h2>Checkbox.Group</h2>
        <Cell>
          <Checkbox.Group
            checkedValue={checkboxgroup1}
            direction="horizontal"
            onChange={(value) => {
              Toast.text(value)
              setCheckboxgroup1(value)
            }}
          >
            <Checkbox checked={false} label="1">
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="2">
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="3">
              {translated.options1}
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="4">
              {translated.options1}
            </Checkbox>
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
            checkedValue={checkboxgroup1}
            disabled
            direction="horizontal"
          >
            <Checkbox label="1">{translated.options1}</Checkbox>
            <Checkbox label="2">{translated.options1}</Checkbox>
            <Checkbox label="3">{translated.options1}</Checkbox>
            <Checkbox label="4">{translated.options1}</Checkbox>
          </Checkbox.Group>
        </Cell>
        <h2>{translated.selectAndCancel}</h2>
        <Cell>
          <Checkbox.Group
            textPosition="left"
            direction="horizontal"
            ref={checkboxgroup2Ref}
            checkedValue={checkboxgroup2}
            onChange={(value) => {
              Toast.text(
                `${
                  value.length === 4
                    ? translated.selectAll
                    : translated.cancelSelection
                }`
              )
            }}
          >
            <Checkbox checked={false} label="1">
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="2">
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="3">
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="4">
              {translated.options1}
            </Checkbox>
          </Checkbox.Group>
        </Cell>
        <Cell>
          <Button
            type="primary"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggleAll(true)
            }}
            style={{ margin: '0 20px 0 0' }}
          >
            {translated.selectAll}
          </Button>
          <Button
            type="info"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggleAll(false)
            }}
            style={{ margin: '0 20px 0 0' }}
          >
            {translated.cancel}
          </Button>
          <Button
            type="warning"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggleReverse()
            }}
          >
            {translated.reverse}
          </Button>
        </Cell>
        <h2>{translated.max}</h2>
        <Cell>
          <Checkbox.Group
            checkedValue={checkboxgroup3}
            max={2}
            onChange={(value) => {
              Toast.text(value)
            }}
          >
            <Checkbox checked={false} label="1">
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="2">
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="3">
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="4">
              {translated.options1}
            </Checkbox>
          </Checkbox.Group>
        </Cell>
        <h2>{translated.threeState}</h2>
        <Cell>
          <div style={{ width: '50%' }}>
            <Checkbox
              checked={checkbox1}
              indeterminate={indeterminate}
              onChange={(state, label) => {
                if (state) {
                  setIndeterminate(false)
                }
                setCheckbox1(state)
                ;(checkboxgroup3Ref.current as any).toggleAll(state)
              }}
            >
              {translated.selectAll}
            </Checkbox>
          </div>

          <Checkbox.Group
            ref={checkboxgroup3Ref}
            direction="horizontal"
            checkedValue={checkboxgroup4}
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
            <Checkbox checked={false} label="1">
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="2">
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="3">
              {translated.options1}
            </Checkbox>
            <Checkbox checked={false} label="4">
              {translated.options1}
            </Checkbox>
          </Checkbox.Group>
        </Cell>
        <h2>{translated.options}</h2>
        <Cell>
          <Checkbox.Group
            options={optionsDemo1}
            checkedValue={checkboxgroup5}
            onChange={(val) => {
              console.log(val)
              setCheckboxgroup5(val)
            }}
          />
        </Cell>
      </div>
    </>
  )
}

export default CheckboxDemo
