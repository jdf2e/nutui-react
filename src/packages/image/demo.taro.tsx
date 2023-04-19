import React from 'react'
import Taro from '@tarojs/taro'
import { CircleClose, Loading } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Image, Cell, Row, Col } from '@/packages/nutui.react.taro'
import '@/packages/image/demo.scss'
import Header from '@/sites/components/header'

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
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell>
          <Image src={src} width="100%" />
        </Cell>

        <h2>{translated.loading}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image width="80" height="80" />
              <div className="image-text">{translated.default}</div>
            </Col>
            <Col span="8">
              <Image
                width="80"
                height="80"
                slotLoding={<Loading className="nut-icon-loading" />}
              />
              <div className="image-text">{translated.custom}</div>
            </Col>
          </Row>
        </Cell>

        <h2>{translated.error}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image src="https://x" width="80" height="80" />
              <div className="image-text">{translated.default}</div>
            </Col>
            <Col span="8">
              <Image
                src="https://x"
                width="100"
                height="100"
                slotError={<CircleClose />}
              />
              <div className="image-text">{translated.custom}</div>
            </Col>
          </Row>
        </Cell>
      </div>
    </>
  )
}

export default ImageDemo
