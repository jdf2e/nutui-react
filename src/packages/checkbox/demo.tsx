import React, { useRef, useState } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Toast from '../toast'
import { Cell } from '../cell/cell'
import { Checkbox } from './checkbox'
import { CheckboxGroup } from '@/packages/checkboxgroup/checkboxgroup'
import Button from '@/packages/button'

interface T {
  '74fc5d8a': string
  '48b50759': string
  '7db1a8b2': string
  f3480b64: string
  f4e46058: string
  '8a2e2847': string
  '70ffa5d8': string
  '87941cd4': string
  '9bbfbbc7': string
  '45c21a9e': string
  '2cd0f3be': string
  b2dd27e8: string
  '4584d5bf': string
  '7df5c456': string
  '77fc8365': string
  '3a5040b6': string
  f4d4bae5: string
}

const CheckboxDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '74fc5d8a': '基本用法',
      '48b50759': '复选框',
      '7db1a8b2': '禁用状态',
      f3480b64: '未选时禁用状态',
      f4e46058: '选中时禁用状态',
      '8a2e2847': '自定义尺寸',
      '70ffa5d8': '自定义图标',
      '87941cd4': '点击触发事件',
      '9bbfbbc7': '您取消了x的勾选',
      '45c21a9e': '选中',
      '2cd0f3be': '取消',
      b2dd27e8: '您选中了x',
      '4584d5bf': '组合复选框',
      '7df5c456': '禁用',
      '77fc8365': '全选和取消',
      '3a5040b6': '全选',
      f4d4bae5: '取消全选',
    },
    'zh-TW': {
      '74fc5d8a': '基本用法',
      '48b50759': '複選框',
      '7db1a8b2': '禁用狀態',
      f3480b64: '未選時禁用狀態',
      f4e46058: '選中時禁用狀態',
      '8a2e2847': '自定義尺寸',
      '70ffa5d8': '自定義圖示',
      '87941cd4': '點擊觸發事件',
      '9bbfbbc7': '您取消了x的勾選',
      '45c21a9e': '選中',
      '2cd0f3be': '取消',
      b2dd27e8: '您選取了x',
      '4584d5bf': '組合複選框',
      '7df5c456': '禁用',
      '77fc8365': '全選和取消',
      '3a5040b6': '全選',
      f4d4bae5: '取消全選',
    },
    'en-US': {
      '74fc5d8a': 'Basic Usage',
      '48b50759': 'Checkbox',
      '7db1a8b2': 'Disabled State',
      f3480b64: 'Disabled state when not selected',
      f4e46058: 'Disabled state when selected',
      '8a2e2847': 'Custom size',
      '70ffa5d8': 'Custom Icon',
      '87941cd4': 'Click Trigger Event',
      '9bbfbbc7': 'You unchecked x',
      '45c21a9e': 'Checked',
      '2cd0f3be': 'Cancel',
      b2dd27e8: 'You selected x',
      '4584d5bf': 'Combination Checkbox',
      '7df5c456': 'Disabled',
      '77fc8365': 'All Select and Cancel',
      '3a5040b6': 'Select All',
      f4d4bae5: 'Cancel All Selection',
    },
  })

  const [checked, setChecked] = useState(true)
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  const [checkboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (
    <>
      <div className="demo">
        <h2
          onClick={() => {
            console.log('click')
            setChecked(false)
          }}
        >
          {translated['74fc5d8a']}
        </h2>
        <Cell className="nut-cell">
          <Checkbox
            className="test"
            textPosition="left"
            label={translated['48b50759']}
            checked={checked}
          />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox textPosition="right" label={translated['48b50759']} checked={false} />
        </Cell>
        <h2>{translated['7db1a8b2']}</h2>
        <Cell className="nut-cell">
          <Checkbox textPosition="right" label={translated.f3480b64} checked={false} disabled />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox textPosition="right" label={translated.f4e46058} checked disabled />
        </Cell>
        <h2>{translated['8a2e2847']}</h2>
        <Cell className="nut-cell">
          <Checkbox label={translated['8a2e2847']} iconSize={25} />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox label={translated['8a2e2847']} iconSize={10} />
        </Cell>
        <h2>{translated['70ffa5d8']}</h2>
        <Cell className="nut-cell">
          <Checkbox checked={false} iconName="checklist" iconActiveName="checklist">
            {translated['70ffa5d8']}
          </Checkbox>
        </Cell>
        <h2>{translated['87941cd4']}</h2>
        <Cell className="nut-cell">
          <Checkbox
            checked={false}
            onChange={(state, label) => {
              if (state) {
                Toast.text(translated.b2dd27e8.replace('x', label))
              } else {
                Toast.text(translated['9bbfbbc7'].replace('x', label))
              }
            }}
          >
            {translated['48b50759']}
          </Checkbox>
        </Cell>
        <h2>CheckboxGroup</h2>
        <Cell>
          <CheckboxGroup
            checkedValue={checkboxgroup1}
            onChange={(value) => {
              Toast.text(value)
              setCheckboxgroup1(value)
            }}
          >
            <Checkbox checked={false} label="1">
              {translated['4584d5bf']}
            </Checkbox>
            <Checkbox checked={false} label="2">
              {translated['4584d5bf']}
            </Checkbox>
            <Checkbox checked={false} label="3">
              {translated['4584d5bf']}
            </Checkbox>
            <Checkbox checked={false} label="4">
              {translated['4584d5bf']}
            </Checkbox>
          </CheckboxGroup>
        </Cell>
        <Cell>
          <span>
            {translated['45c21a9e']}：{checkboxgroup1.toString()}
          </span>
        </Cell>
        <h2>{translated['7df5c456']}</h2>
        <Cell>
          <CheckboxGroup checkedValue={checkboxgroup1} disabled>
            <Checkbox checked={false} label="1">
              {translated['4584d5bf']}
            </Checkbox>
            <Checkbox checked={false} label="2">
              {translated['4584d5bf']}
            </Checkbox>
            <Checkbox checked={false} label="3">
              {translated['4584d5bf']}
            </Checkbox>
            <Checkbox checked={false} label="4">
              {translated['4584d5bf']}
            </Checkbox>
          </CheckboxGroup>
        </Cell>
        <h2>{translated['77fc8365']}</h2>
        <Cell>
          <CheckboxGroup
            style={{}}
            ref={checkboxgroup2Ref}
            checkedValue={checkboxgroup2}
            onChange={(value) => {
              Toast.text(`${value.length === 2 ? translated['3a5040b6'] : translated.f4d4bae5}`)
            }}
          >
            <Checkbox checked={false} label="1">
              {translated['4584d5bf']}
            </Checkbox>
            <Checkbox checked={false} label="2">
              {translated['4584d5bf']}
            </Checkbox>
          </CheckboxGroup>
        </Cell>
        <Cell>
          <Button
            type="primary"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggleAll(true)
            }}
          >
            {translated['3a5040b6']}
          </Button>
          <Button
            type="info"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggleAll(false)
            }}
          >
            {translated['2cd0f3be']}
          </Button>
        </Cell>
      </div>
    </>
  )
}

export default CheckboxDemo
