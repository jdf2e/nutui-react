import React from 'react'
import { Indicator } from './indicator'
import Cell from '@/packages/cell'
import Row from '@/packages/row'
import Col from '@/packages/col'
import Button from '@/packages/button'
import { useTranslate } from '../../sites/assets/locale'
import '@/packages/indicator/demo.scss'

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  c123sda1: string
}
const IndicatorDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '主要按钮',
      b840c88f: 'block用法',
      a74a1fd4: '不补0',
      c123sda1: '竖向展示',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '主要按鈕',
      b840c88f: 'block用法',
      a74a1fd4: '不補0',
      c123sda1: '豎向展示',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'Button',
      b840c88f: 'Block usage',
      a74a1fd4: "Not Add '0'",
      c123sda1: 'Vertical display',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <Cell>
          <Indicator className="demo1" size={3} current={3} />
        </Cell>
        <Cell>
          <Row>
            <Col span="12">
              <Button size="small" type="primary">
                {translated.c38a08ef}
              </Button>
            </Col>
            <Col span="12">
              <Indicator block align="right" size={6} current={5} />
            </Col>
          </Row>
        </Cell>
        <h2>{translated.b840c88f}</h2>
        <Cell>
          <Indicator block align="center" size={6} current={5} />
        </Cell>
        <Cell>
          <Indicator block align="left" size={6} current={1} />
        </Cell>
        <Cell>
          <Indicator block align="right" size={6} current={5} />
        </Cell>
        <h2>{translated.a74a1fd4}</h2>
        <Cell>
          <Indicator fillZero={false} size={6} current={5} />
        </Cell>
        <h2>{translated.c123sda1}</h2>
        <Cell>
          <div className="vertical_cell">
            <Indicator fillZero={false} size={6} current={5} vertical />
          </div>
          <div className="vertical_cell">
            <Indicator size={6} current={2} vertical />
          </div>
        </Cell>
      </div>
    </>
  )
}

export default IndicatorDemo
