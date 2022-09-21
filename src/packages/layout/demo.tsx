import React from 'react'
import Row from '@/packages/row'
import Col from '@/packages/col'
import { useTranslate } from '../../sites/assets/locale'
import './demo.scss'

type TLayoutDemo = {
  title1: string
  title2: string
  title3: string
}

const LayoutDemo = () => {
  const [translated] = useTranslate<TLayoutDemo>({
    'zh-CN': {
      title1: '基础布局',
      title2: '搜索框形状及最大长度',
      title3: '搜索框内外背景设置',
    },
    'zh-TW': {
      title1: '基礎佈局',
      title2: '分欄間隔',
      title3: 'Flex佈局',
    },
    'en-US': {
      title1: 'Basic layout',
      title2: 'column interval',
      title3: 'Flex layout',
    },
    'id-ID': {
      title1: 'Tata letak dasar',
      title2: 'interval kolom',
      title3: 'Tata letak fleksibel',
    },
  })
  return (
    <>
      <div className="demo full">
        <h2>{translated.title1}</h2>
        <div className="box-item">
          <Row>
            <Col span="24">
              <div className="flex-content">span:24</div>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <div className="flex-content">span:12</div>
            </Col>
            <Col span="12">
              <div className="flex-content flex-content-light">span:12</div>
            </Col>
          </Row>
          <Row>
            <Col span="8">
              <div className="flex-content">span:8</div>
            </Col>
            <Col span="8">
              <div className="flex-content flex-content-light">span:8</div>
            </Col>
            <Col span="8">
              <div className="flex-content">span:8</div>
            </Col>
          </Row>
          <Row>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
          </Row>
        </div>
        <h2>{translated.title2}</h2>
        <div className="box-item">
          <Row gutter="10">
            <Col span="8">
              <div className="flex-content">span:8</div>
            </Col>
            <Col span="8">
              <div className="flex-content flex-content-light">span:8</div>
            </Col>
            <Col span="8">
              <div className="flex-content">span:8</div>
            </Col>
          </Row>
        </div>
        <h2>{translated.title3}</h2>
        <div className="box-item">
          <Row type="flex" wrap="nowrap">
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
          </Row>
          <Row type="flex" justify="end">
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
          </Row>
          <Row type="flex" justify="space-between">
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
          </Row>
          <Row type="flex" justify="space-around">
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content flex-content-light">span:6</div>
            </Col>
            <Col span="6">
              <div className="flex-content">span:6</div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default LayoutDemo
