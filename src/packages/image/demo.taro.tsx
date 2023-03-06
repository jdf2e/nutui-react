import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Image, Cell, Row, Col, Icon } from '@/packages/nutui.react.taro'
import '@/packages/image/demo.scss'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

const ImageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基本用法',
      fill: '填充模式',
      position: '图片位置',
      circle: '圆形图片',
      loading: '加载中提示',
      error: '加载失败',
      default: '默认',
      custom: '自定义',
    },
    'en-US': {
      basic: 'Basic Usage',
      fill: 'Object Fill',
      position: 'Object Position',
      circle: 'Round',
      loading: 'Loading',
      error: 'Error',
      default: 'Default',
      custom: 'Custom',
    },
  })
  const src =
    'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell>
          <Image src={src} width="80" height="80" />
        </Cell>

        <h2>{translated.loading}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image width="80" height="80" showLoading />
              <div className="image-text">{translated.default}</div>
            </Col>
            <Col span="8">
              <Image
                width="80"
                height="80"
                slotLoding={
                  <>
                    <Icon name="loading" />
                  </>
                }
              />
              <div className="image-text">{translated.custom}</div>
            </Col>
          </Row>
        </Cell>

        <h2>{translated.error}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image src="#" width="80" height="80" showError />
              <div className="image-text">{translated.default}</div>
            </Col>
            <Col span="8">
              <Image src="#" width="80" height="80" showError>
                <Icon name="circle-close" />
              </Image>
              <div className="image-text">{translated.custom}</div>
            </Col>
          </Row>
        </Cell>
      </div>
    </>
  )
}

export default ImageDemo
