import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Radio, Cell, CellGroup } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface T {
  '74fc5d8a': string
  bb7486f4: string
  c1bae1ec: string
  '8a2e2847': string
  '70ffa5d8': string
  '0f261484': string
  '6b1f669d': string
  options: string
}

const RadioDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '74fc5d8a': '基本用法',
      bb7486f4: '选项',
      c1bae1ec: '水平使用',
      '8a2e2847': '自定义尺寸',
      '70ffa5d8': '自定义图标',
      '0f261484': '触发事件',
      '6b1f669d': '当前选中值',
      options: '配置 options 渲染单选按钮',
    },
    'zh-TW': {
      '74fc5d8a': '基本用法',
      bb7486f4: '選項',
      c1bae1ec: '水準使用',
      '8a2e2847': '自定義尺寸',
      '70ffa5d8': '自定義圖示',
      '0f261484': '觸發事件',
      '6b1f669d': '當前選中值',
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
      options: 'Render radios by configuring options',
    },
  })

  const [checked1] = useState(true)
  const [radioVal, setRadioVal] = useState(1)
  const [radioVal1, setRadioVal1] = useState('1')
  const [optionsDemo1, setOptionsDemo1] = useState([
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

  function handleChange(val: number | string | boolean) {
    console.log(val)
    setRadioVal(val as number)
  }

  function handleChange1(val: number | string | boolean) {
    console.log(val)
    setRadioVal1(val as string)
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated['74fc5d8a']}</h2>
        <CellGroup>
          <Cell>
            <Radio checked={checked1} value="1">
              {translated.bb7486f4}1
            </Radio>
          </Cell>
        </CellGroup>
        <h2>{translated['74fc5d8a']}</h2>
        <CellGroup>
          <Cell>
            <Radio.RadioGroup value="1">
              <Radio value="1">{translated.bb7486f4}1</Radio>
              <Radio disabled value="2">
                {translated.bb7486f4}
                {translated.bb7486f4}
                {translated.bb7486f4}2
              </Radio>
              <Radio value="3">{translated.bb7486f4}3</Radio>
            </Radio.RadioGroup>
          </Cell>
          <Cell>
            <Radio.RadioGroup value="2" textPosition="left">
              <Radio value="1">{translated.bb7486f4}1</Radio>
              <Radio disabled value="2">
                {translated.bb7486f4}2
              </Radio>
              <Radio value="3">{translated.bb7486f4}3</Radio>
            </Radio.RadioGroup>
          </Cell>
          <Cell>
            <Radio.RadioGroup value="3">
              <Radio shape="button" value="1">
                {translated.bb7486f4}1
              </Radio>
              <Radio disabled shape="button" value="2">
                {translated.bb7486f4}2
              </Radio>
              <Radio shape="button" value="3">
                {translated.bb7486f4}3
              </Radio>
            </Radio.RadioGroup>
          </Cell>
        </CellGroup>
        <h2>{translated.c1bae1ec}</h2>
        <CellGroup>
          <Cell>
            <Radio.RadioGroup value="1" direction="horizontal">
              <Radio value="1">{translated.bb7486f4}1</Radio>
              <Radio value="2">
                {translated.bb7486f4}
                {translated.bb7486f4}
                {translated.bb7486f4}
                {translated.bb7486f4}
                {translated.bb7486f4}2
              </Radio>
              <Radio value="3">{translated.bb7486f4}3</Radio>
            </Radio.RadioGroup>
          </Cell>
          <Cell>
            <Radio.RadioGroup
              value="2"
              textPosition="left"
              direction="horizontal"
            >
              <Radio value="1">{translated.bb7486f4}1</Radio>
              <Radio value="2">{translated.bb7486f4}2</Radio>
              <Radio value="3">{translated.bb7486f4}3</Radio>
            </Radio.RadioGroup>
          </Cell>
          <Cell>
            <Radio.RadioGroup value="3" direction="horizontal">
              <Radio shape="button" value="1">
                {translated.bb7486f4}1
              </Radio>
              <Radio shape="button" value="2">
                {translated.bb7486f4}2
              </Radio>
              <Radio shape="button" value="3">
                {translated.bb7486f4}3
              </Radio>
            </Radio.RadioGroup>
          </Cell>
        </CellGroup>
        <h2>{translated['8a2e2847']}</h2>
        <CellGroup>
          <Cell>
            <Radio.RadioGroup value="2">
              <Radio value="1" iconSize="15">
                {translated['8a2e2847']}15
              </Radio>
              <Radio value="2" iconSize="12">
                {translated['8a2e2847']}12
              </Radio>
            </Radio.RadioGroup>
          </Cell>
        </CellGroup>
        <h2>Radio{translated['70ffa5d8']}</h2>
        <CellGroup>
          <Cell>
            <Radio.RadioGroup value="1">
              <Radio value="1" iconName="checklist" iconActiveName="checklist">
                {translated['70ffa5d8']}
              </Radio>
              <Radio value="2" iconName="checklist" iconActiveName="checklist">
                <div>{translated['70ffa5d8']}</div>
                <div style={{ fontSize: '12px', color: '#8c8c8c' }}>
                  {translated['70ffa5d8']}
                </div>
              </Radio>
            </Radio.RadioGroup>
          </Cell>
        </CellGroup>
        <h2>{translated['0f261484']}</h2>
        <CellGroup>
          <Cell>
            <Radio.RadioGroup
              value={radioVal}
              onChange={(e) => handleChange(e)}
            >
              <Radio value={1}>{translated['0f261484']}</Radio>
              <Radio value={2}>{translated['0f261484']}</Radio>
            </Radio.RadioGroup>
          </Cell>
          <Cell title={translated['6b1f669d']} desc={radioVal.toString()} />
        </CellGroup>
        <h2>{translated.options}</h2>
        <CellGroup>
          <Cell>
            <Radio.RadioGroup
              options={optionsDemo1}
              value={radioVal1}
              onChange={(e) => handleChange1(e)}
            />
          </Cell>
        </CellGroup>
      </div>
    </>
  )
}

export default RadioDemo
