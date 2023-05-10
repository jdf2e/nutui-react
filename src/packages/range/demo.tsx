import React, { useState } from 'react'
import { Range } from './range'
import { Cell } from '../cell/cell'
import { useTranslate } from '../../sites/assets/locale'
import Toast from '../toast'
import './demo.scss'
import ConfigProvider from '../configprovider'

interface T {
  title: string
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
  title7: string
  title8: string
  title9: string
  title10: string
  title11: string
}

const RangeDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title: '基础用法',
      title1: '双滑块',
      title2: '指定范围',
      title3: '设置步长',
      title4: '隐藏范围',
      title5: '隐藏标签',
      title6: '禁用',
      title7: '自定义样式',
      title8: '自定义按钮',
      title9: '垂直方向',
      title10: '刻度标记',
      title11: '自定义描述',
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Dual thumb',
      title2: 'Range',
      title3: 'Step Size',
      title4: 'Hidden Range',
      title5: 'Hidden Tag',
      title6: 'Disabled',
      title7: 'Custom Style',
      title8: 'Custom Button',
      title9: 'Vertical',
      title10: 'Marks',
      title11: 'Range Desc',
    },
  })
  const cellStyle = {
    padding: '40px 18px',
  }
  const verticalStyle = {
    height: '180px',
    padding: '10px',
  }
  const [value0, SetValue0] = useState([30, 60])
  const [value1, SetValue1] = useState(30)
  const [value2, SetValue2] = useState(60)
  const [value3, SetValue3] = useState(20)
  const [value4, SetValue4] = useState([20, 80])
  const [value5, SetValue5] = useState(60)
  const [value6, SetValue6] = useState([20, 80])
  const [value7, SetValue7] = useState(60)
  const [value8, SetValue8] = useState([20, 80])
  const [value9, SetValue9] = useState(40)
  const [marks, SetMarks] = useState({
    0: 0,
    20: 20,
    40: 40,
    60: 60,
    80: 80,
    100: 100,
  })
  const change = (value: any, name?: string) => {
    // Toast.text(`当前值：${value}`)
    console.log('change', value, name)
    switch (name) {
      case 'value0':
        SetValue0(value)
        break
      case 'value1':
        SetValue1(value)
        break
      case 'value2':
        SetValue2(value)
        break
      case 'value3':
        SetValue3(value)
        break
      case 'value4':
        SetValue4(value)
        break
      case 'value5':
        SetValue5(value)
        break
      case 'value6':
        SetValue6(value)
        break
      case 'value7':
        SetValue7(value)
        break
      case 'value8':
        SetValue8(value)
        break
      case 'value9':
        SetValue9(value)
        break
      default:
        break
    }
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.title}</h2>
        <Cell style={cellStyle}>
          <Range modelValue={40} />
        </Cell>
        <h2>{translated.title11}</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={value9}
            minDescription="0%"
            maxDescription="100%"
            currentDescription={(value) => `${value}%`}
            onChange={(value: any) => {
              change(value, 'value9')
            }}
          />
        </Cell>
        <h2>{translated.title1}</h2>
        <Cell style={cellStyle}>
          <Range
            range
            modelValue={value0}
            onChange={(value: any) => {
              change(value, 'value0')
            }}
          />
        </Cell>
        <h2>{translated.title2}</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={0}
            max={10}
            min={-10}
            onChange={(value: any) => {
              change(value)
            }}
          />
        </Cell>
        <h2>{translated.title3}</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={value1}
            step={5}
            onChange={(value: any) => {
              change(value, 'value1')
            }}
          />
        </Cell>
        <h2>{translated.title4}</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={30}
            maxDescription={null}
            minDescription={null}
            onChange={(value: any) => {
              change(value)
            }}
          />
        </Cell>
        <h2>{translated.title5}</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={20}
            currentDescription={null}
            onChange={(value: any) => {
              change(value)
            }}
          />
        </Cell>
        <h2>{translated.title6}</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={50}
            disabled
            onChange={(value: any) => {
              change(value)
            }}
          />
        </Cell>
        <h2>{translated.title7}</h2>
        <Cell style={cellStyle}>
          <ConfigProvider
            theme={{
              [`--nutui-range-bar-btn-border`]: '1px solid rgba(52,96,250,1)',
            }}
          >
            <Range
              className="test-range"
              modelValue={40}
              inactiveColor="rgba(163,184,255,1)"
              activeColor="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
              style={{ color: 'red' }}
              onChange={(value: number) => {
                change(value)
              }}
            />
          </ConfigProvider>
        </Cell>
        <h2>{translated.title8}</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={value2}
            button={<div className="range-custom-button">{value2}</div>}
            onChange={(value: number) => {
              change(value, 'value2')
            }}
          />
        </Cell>
        <h2>{translated.title9}</h2>
        <Cell style={verticalStyle}>
          <div style={{ width: '150px', height: '100%' }}>
            <Range
              modelValue={value3}
              vertical
              onChange={(value: number) => {
                change(value, 'value3')
              }}
            />
          </div>
          <div style={{ width: '150px', height: '100%' }}>
            <Range
              modelValue={value4}
              vertical
              range
              onChange={(value: number) => {
                change(value, 'value4')
              }}
            />
          </div>
        </Cell>
        <h2>{translated.title10}</h2>
        <Cell style={cellStyle}>
          <Range
            modelValue={value5}
            maxDescription={null}
            minDescription={null}
            marks={marks}
            onChange={(value: number) => {
              change(value, 'value5')
            }}
          />
        </Cell>
        <Cell style={cellStyle}>
          <Range
            modelValue={value6}
            marks={marks}
            range
            onChange={(value: number) => {
              change(value, 'value6')
            }}
          />
        </Cell>

        <Cell style={verticalStyle}>
          <Range
            modelValue={value7}
            vertical
            maxDescription={null}
            minDescription={null}
            marks={marks}
            onChange={(value: number) => {
              change(value, 'value7')
            }}
          />
          <Range
            modelValue={value8}
            vertical
            marks={marks}
            range
            onChange={(value: number) => {
              change(value, 'value8')
            }}
          />
        </Cell>
      </div>
    </>
  )
}

export default RangeDemo
