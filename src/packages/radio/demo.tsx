import React, { useState } from 'react'
import { Checklist } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import Radio from '@/packages/radio'
import Cell from '@/packages/cell'
import CellGroup from '@/packages/cellgroup'
import Toast from '@/packages/toast'

interface T {
  '74fc5d8a': string
  bb7486f4: string
  c1bae1ec: string
  '8a2e2847': string
  '70ffa5d8': string
  '0f261484': string
  '6b1f669d': string
  disableOne: string
  disableAll: string
  options: string
}

const RadioDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '74fc5d8a': '基础用法',
      bb7486f4: '选项',
      c1bae1ec: '水平使用',
      '8a2e2847': '自定义尺寸',
      '70ffa5d8': '自定义图标',
      '0f261484': '触发事件',
      '6b1f669d': '当前选中值',
      disableOne: 'Group 模式下禁用某一项',
      disableAll: 'Group 模式下禁用全部选项',
      options: '配置 options 渲染单选按钮',
    },
    'zh-TW': {
      '74fc5d8a': '基础用法',
      bb7486f4: '選項',
      c1bae1ec: '水準使用',
      '8a2e2847': '自定義尺寸',
      '70ffa5d8': '自定義圖示',
      '0f261484': '觸發事件',
      '6b1f669d': '當前選中值',
      disableOne: 'Group 模式下禁用某一项',
      disableAll: 'Group 模式下禁用全部选项',
      options: '配置 options 渲染單選按鈕',
    },
    'en-US': {
      '74fc5d8a': 'Basic Usage',
      bb7486f4: 'Options',
      c1bae1ec: 'Horizontal use',
      '8a2e2847': 'Custom size',
      '70ffa5d8': 'Custom Icon',
      '0f261484': 'Trigger Event',
      '6b1f669d': 'Currently selected',
      disableOne: 'Disable an item in Group mode',
      disableAll: 'Disable all options in Group mode',
      options: 'Render radios by configuring options',
    },
  })
  const [checkedValue] = useState(1)
  const [radioVal, setRadioVal] = useState<string | number>('1')
  const [optionsDemo1] = useState([
    {
      label: '选项1',
      value: '1',
    },
    {
      label: '选项2',
      value: '2',
      disabled: true,
    },
    {
      label: '选项3',
      value: '3',
    },
  ])
  const handleChange = (v: string | number) => {
    setRadioVal(v)
  }
  return (
    <>
      <div className="demo">
        <h2>{translated['74fc5d8a']}</h2>
        <CellGroup>
          <Cell>
            <Radio defaultChecked>{translated.bb7486f4}1</Radio>
          </Cell>
          <Cell>
            <Radio defaultChecked disabled>
              {translated.bb7486f4}1
            </Radio>
          </Cell>
        </CellGroup>
        <h2>{translated.disableOne}</h2>
        <Cell>
          <Radio.Group defaultValue="1">
            <Radio value="1" disabled>
              {translated.bb7486f4}1
            </Radio>
            <Radio value="2">{translated.bb7486f4}2</Radio>
            <Radio value="3">{translated.bb7486f4}3</Radio>
          </Radio.Group>
        </Cell>
        <h2>{translated.disableAll}</h2>
        <Cell>
          <Radio.Group disabled defaultValue="1">
            <Radio value="1">{translated.bb7486f4}1</Radio>
            <Radio value="2">{translated.bb7486f4}2</Radio>
            <Radio value="3">{translated.bb7486f4}3</Radio>
          </Radio.Group>
        </Cell>
        <h2>{translated.disableOne}</h2>
        <Cell>
          <Radio.Group defaultValue="1">
            <Radio shape="button" disabled value="1">
              {translated.bb7486f4}1
            </Radio>
            <Radio shape="button" value="2">
              {translated.bb7486f4}2
            </Radio>
            <Radio shape="button" value="3">
              {translated.bb7486f4}3
            </Radio>
          </Radio.Group>
        </Cell>
        <h2>{translated.disableAll}</h2>
        <Cell>
          <Radio.Group disabled defaultValue="1">
            <Radio shape="button" value="1">
              {translated.bb7486f4}1
            </Radio>
            <Radio shape="button" value="2">
              {translated.bb7486f4}2
            </Radio>
            <Radio shape="button" value="3">
              {translated.bb7486f4}3
            </Radio>
          </Radio.Group>
        </Cell>
        <h2>{translated.c1bae1ec}</h2>
        <Cell>
          <Radio.Group defaultValue="1" direction="horizontal">
            <Radio value="1">{translated.bb7486f4}1</Radio>
            <Radio disabled value="2">
              {translated.bb7486f4}2
            </Radio>
            <Radio value="3">{translated.bb7486f4}3</Radio>
          </Radio.Group>
        </Cell>
        <Cell>
          <Radio.Group
            defaultValue="1"
            labelPosition="left"
            direction="horizontal"
          >
            <Radio value="1">{translated.bb7486f4}1</Radio>
            <Radio disabled value="2">
              {translated.bb7486f4}2
            </Radio>
            <Radio value="3">{translated.bb7486f4}3</Radio>
          </Radio.Group>
        </Cell>
        <Cell>
          <Radio.Group defaultValue="1" direction="horizontal">
            <Radio shape="button" value="1">
              {translated.bb7486f4}1
            </Radio>
            <Radio shape="button" disabled value="2">
              {translated.bb7486f4}2
            </Radio>
            <Radio shape="button" value="3">
              {translated.bb7486f4}3
            </Radio>
          </Radio.Group>
        </Cell>
        <h2>{translated['8a2e2847']}</h2>
        <Cell>
          <Radio
            style={{
              '--nut-icon-width': '12px',
              '--nut-icon-height': '12px',
            }}
          >
            {translated['8a2e2847']}
          </Radio>
        </Cell>
        <h2>{translated['70ffa5d8']}</h2>
        <Cell>
          <Radio
            icon={<Checklist />}
            activeIcon={<Checklist style={{ color: 'red' }} />}
          >
            {translated['70ffa5d8']}
          </Radio>
        </Cell>
        <h2>{translated['0f261484']}</h2>
        <CellGroup>
          <Cell>
            <Radio.Group
              defaultValue={checkedValue}
              onChange={(value) => Toast.show(`${value}`)}
            >
              <Radio value={1}>{translated['0f261484']}</Radio>
              <Radio value={2}>{translated['0f261484']}</Radio>
            </Radio.Group>
          </Cell>
        </CellGroup>
        <h2>{translated.options}</h2>
        <Cell>
          <Radio.Group
            options={optionsDemo1}
            value={radioVal}
            onChange={handleChange}
          />
        </Cell>
      </div>
    </>
  )
}

export default RadioDemo
