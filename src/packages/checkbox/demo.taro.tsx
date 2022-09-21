import React, { useRef, useState } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import {
  Button,
  Cell,
  Checkbox,
  CheckboxGroup,
  Toast,
} from '@/packages/nutui.react.taro'
import '@/packages/checkbox/demo.scss'

interface T {
  '74fc5d8a': string
  '48b50759': string
  '7db1a8b2': string
  f3480b64: string
  f3480b646: string
  f4e46058: string
  '8a2e2847': string
  '70ffa5d8': string
  '87941cd4': string
  '9bbfbbc7': string
  '45c21a9e': string
  '2cd0f3be': string
  '2cd0f3be1': string
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
      f3480b646: '半选状态',
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
      '2cd0f3be1': '反选',
    },
    'zh-TW': {
      '74fc5d8a': '基本用法',
      '48b50759': '複選框',
      '7db1a8b2': '禁用狀態',
      f3480b64: '未選時禁用狀態',
      f3480b646: '半选状态',
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
      '2cd0f3be1': '反選',
    },
    'en-US': {
      '74fc5d8a': 'Basic Usage',
      '48b50759': 'Checkbox',
      '7db1a8b2': 'Disabled State',
      f3480b64: 'Disabled state',
      f3480b646: 'Semi selective',
      f4e46058: 'Disabled state',
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
      '2cd0f3be1': 'reverse',
      f4d4bae5: 'Cancel All Selection',
    },
  })

  const [checked, setChecked] = useState(true)
  const [checkbox1, setCheckbox1] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  const [checkboxgroup2] = useState(['1'])
  const [checkboxgroup3] = useState(['1'])
  const [checkboxgroup4] = useState([])
  const checkboxgroup2Ref = useRef(null)
  const checkboxgroup3Ref = useRef(null)
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }
  return (
    <>
      <div className="demo">
        <Toast
          type="text"
          visible={show}
          msg={toastMsg}
          onClose={() => {
            SetShow(false)
          }}
        />
        <h2>{translated['74fc5d8a']}</h2>
        <Cell className="nut-cell">
          <Checkbox
            className="test"
            textPosition="left"
            label={translated['48b50759']}
            checked={checked}
          />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox
            textPosition="right"
            label={translated['48b50759']}
            checked={false}
          />
        </Cell>
        <h2>{translated.f3480b646}</h2>
        <Cell>
          <Checkbox label={translated['48b50759']} checked indeterminate />
          <Checkbox
            label={translated['48b50759']}
            checked={false}
            indeterminate
          />
        </Cell>
        <h2>{translated['7db1a8b2']}</h2>
        <Cell className="nut-cell">
          <Checkbox
            textPosition="right"
            label={translated.f3480b64}
            checked={false}
            disabled
          />
        </Cell>
        <Cell className="nut-cell">
          <Checkbox
            textPosition="right"
            label={translated.f4e46058}
            checked
            disabled
          />
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
          <Checkbox
            checked={false}
            iconName="checklist"
            iconActiveName="checklist"
          >
            {translated['70ffa5d8']}
          </Checkbox>
        </Cell>
        <h2>{translated['87941cd4']}</h2>
        <Cell className="nut-cell">
          <Checkbox
            checked={false}
            onChange={(state, label) => {
              if (state) {
                // Toast.text(translated.b2dd27e8.replace('x', label))
                toastShow(translated.b2dd27e8.replace('x', label))
              } else {
                // Toast.text(translated['9bbfbbc7'].replace('x', label))
                toastShow(translated['9bbfbbc7'].replace('x', label))
              }
            }}
          >
            {translated['48b50759']}
          </Checkbox>
        </Cell>
        <h2>checkboxGroup</h2>
        <Cell>
          <CheckboxGroup
            checkedValue={checkboxgroup1}
            onChange={(value) => {
              //   Toast.text(value)
              toastShow(value)
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
            <Checkbox label="1">{translated['4584d5bf']}</Checkbox>
            <Checkbox label="2">{translated['4584d5bf']}</Checkbox>
            <Checkbox label="3">{translated['4584d5bf']}</Checkbox>
            <Checkbox label="4">{translated['4584d5bf']}</Checkbox>
          </CheckboxGroup>
        </Cell>
        <h2>{translated['77fc8365']}</h2>
        <Cell>
          <CheckboxGroup
            style={{}}
            ref={checkboxgroup2Ref}
            checkedValue={checkboxgroup2}
            onChange={(value) => {
              //   Toast.text(
              //     `${
              //       value.length === 4
              //         ? translated['3a5040b6']
              //         : translated.f4d4bae5
              //     }`
              //   )
              toastShow(
                `${
                  value.length === 4
                    ? translated['3a5040b6']
                    : translated.f4d4bae5
                }`
              )
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
          <Button
            type="primary"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggleAll(true)
            }}
            style={{ margin: '0 20px 0 0' }}
          >
            {translated['3a5040b6']}
          </Button>
          <Button
            type="info"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggleAll(false)
            }}
            style={{ margin: '0 20px 0 0' }}
          >
            {translated['2cd0f3be']}
          </Button>
          <Button
            type="warning"
            onClick={() => {
              ;(checkboxgroup2Ref.current as any).toggleReverse()
            }}
          >
            {translated['2cd0f3be1']}
          </Button>
        </Cell>
        <h2>checkboxGroup使用，限制最大可选数（2个）</h2>
        <Cell>
          <CheckboxGroup
            checkedValue={checkboxgroup3}
            max={2}
            onChange={(value) => {
              //   Toast.text(value)
              toastShow(value)
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
        <h2>全选/半选/取消</h2>
        <Cell>
          <Checkbox
            checked={checkbox1}
            indeterminate={indeterminate}
            onChange={(state, label) => {
              if (state) {
                setIndeterminate(false)
              }
              ;(checkboxgroup3Ref.current as any).toggleAll(state)
            }}
          >
            {translated['3a5040b6']}
          </Checkbox>
          <CheckboxGroup
            ref={checkboxgroup3Ref}
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
      </div>
    </>
  )
}

export default CheckboxDemo
