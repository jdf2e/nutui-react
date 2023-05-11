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
  controlled: string
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
      controlled: '受控方式',
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
      controlled: 'Controlled',
    },
  })
  const cellStyle = {
    padding: '40px 18px',
  }
  const verticalStyle = {
    height: '180px',
    padding: '10px',
  }
  const [value1, setValue1] = useState(40)
  const [value2, setValue2] = useState(60)
  const [marks] = useState({
    0: 0,
    20: 20,
    40: 40,
    60: 60,
    80: 80,
    100: 100,
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.title}</h2>
        <Cell style={cellStyle}>
          <Range defaultValue={40} onEnd={(val) => Toast.text(`${val}`)} />
        </Cell>
        <h2>{translated.controlled}</h2>
        <Cell style={cellStyle}>
          <Range value={value1} onChange={(val: any) => setValue1(val)} />
        </Cell>
        <h2>{translated.title11}</h2>
        <Cell style={cellStyle}>
          <Range
            defaultValue={40}
            minDescription="0%"
            maxDescription="100%"
            currentDescription={(value) => `${value}%`}
            onEnd={(val) => Toast.text(`${val}`)}
          />
        </Cell>
        <h2>{translated.title1}</h2>
        <Cell style={cellStyle}>
          <Range
            defaultValue={[20, 80]}
            range
            onEnd={(val) => Toast.text(`${val}`)}
          />
        </Cell>
        <h2>{translated.title2}</h2>
        <Cell style={cellStyle}>
          <Range
            defaultValue={0}
            max={10}
            min={-10}
            onEnd={(val) => Toast.text(`${val}`)}
          />
        </Cell>
        <h2>{translated.title3}</h2>
        <Cell style={cellStyle}>
          <Range
            defaultValue={30}
            step={5}
            onEnd={(val) => Toast.text(`${val}`)}
          />
        </Cell>
        <h2>{translated.title4}</h2>
        <Cell style={cellStyle}>
          <Range
            defaultValue={30}
            maxDescription={null}
            minDescription={null}
            onEnd={(val) => Toast.text(`${val}`)}
          />
        </Cell>
        <h2>{translated.title5}</h2>
        <Cell style={cellStyle}>
          <Range
            defaultValue={20}
            currentDescription={null}
            onEnd={(val) => Toast.text(`${val}`)}
          />
        </Cell>
        <h2>{translated.title6}</h2>
        <Cell style={cellStyle}>
          <Range defaultValue={50} disabled />
        </Cell>
        <h2>{translated.title7}</h2>
        <Cell
          style={{
            ...cellStyle,
            display: 'block',
          }}
        >
          <ConfigProvider
            theme={{
              [`--nutui-range-bar-btn-border`]: '1px solid rgba(52,96,250,1)',
              [`--nutui-range-active-color`]:
                'linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)',
              [`--nutui-range-inactive-color`]: 'rgba(163,184,255,1)',
            }}
          >
            <Range
              className="test-range"
              defaultValue={40}
              style={{ color: 'red' }}
              marks={{
                10: 10,
                20: 20,
              }}
            />
          </ConfigProvider>
        </Cell>
        <h2>{translated.title8}</h2>
        <Cell style={cellStyle}>
          <Range
            value={value2}
            button={<div className="range-custom-button">{value2}</div>}
            onChange={(val: any) => setValue2(val)}
            onEnd={(val) => Toast.text(`${val}`)}
          />
        </Cell>
        <h2>{translated.title9}</h2>
        <Cell style={verticalStyle}>
          <div style={{ width: '150px', height: '100%' }}>
            <Range
              defaultValue={20}
              vertical
              onEnd={(val) => Toast.text(`${val}`)}
            />
          </div>
          <div style={{ width: '150px', height: '100%' }}>
            <Range
              defaultValue={[20, 80]}
              vertical
              range
              onEnd={(val) => Toast.text(`${val}`)}
            />
          </div>
        </Cell>
        <h2>{translated.title10}</h2>
        <Cell style={cellStyle}>
          <Range
            defaultValue={60}
            maxDescription={null}
            minDescription={null}
            marks={marks}
            onEnd={(val) => Toast.text(`${val}`)}
          />
        </Cell>
        <Cell style={cellStyle}>
          <Range
            defaultValue={[20, 80]}
            marks={marks}
            range
            onEnd={(val) => Toast.text(`${val}`)}
          />
        </Cell>

        <Cell style={verticalStyle}>
          <Range
            defaultValue={60}
            vertical
            maxDescription={null}
            minDescription={null}
            marks={marks}
            onEnd={(val) => Toast.text(`${val}`)}
          />
          <Range
            defaultValue={[20, 80]}
            vertical
            marks={marks}
            range
            onEnd={(val) => Toast.text(`${val}`)}
          />
        </Cell>
      </div>
    </>
  )
}

export default RangeDemo
