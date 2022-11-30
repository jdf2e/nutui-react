import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Image, Cell, Row, Col, Icon } from '@/packages/nutui.react.taro'
import '@/packages/image/demo.scss'

const ImageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基本用法',
      fill: '填充模式',
      position: '图片位置',
      circle: '圆形图片',
      loading: '加载中提示',
      error: '加载失败',
    },
    'en-US': {
      basic: 'Basic Usage',
      fill: 'Object Fill',
      position: 'Object Position',
      circle: 'Round',
      loading: 'Loading',
      error: 'Error',
    },
  })
  const src =
    'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'

  const fits = ['contain', 'cover', 'fill', 'none', 'scale-down']
  const position1 = ['left', 'center', 'right']
  const position2 = ['top', 'center', 'bottom']

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Image src={src} width="80" height="80" />
        </Cell>

        <h2>{translated.fill}</h2>
        <Cell>
          <Row gutter={10} type="flex" wrap="wrap">
            {fits.map((i) => {
              return (
                <Col span="8" key={i}>
                  <Image src={src} width="80" height="80" fit={i} />
                  <div className="text">{i}</div>
                </Col>
              )
            })}
          </Row>
        </Cell>

        <h2>{translated.position}</h2>
        <Cell>
          <Row gutter={10} type="flex" wrap="wrap">
            {position2.map((i) => {
              return (
                <Col span="8" key={i}>
                  <Image
                    src={src}
                    width="80"
                    height="80"
                    fit="contain"
                    position={i}
                  />
                  <div className="text">contain</div>
                  <div className="text">{i}</div>
                </Col>
              )
            })}
            {position1.map((i) => {
              return (
                <Col span="8" key={i}>
                  <Image
                    src={src}
                    width="80"
                    height="80"
                    fit="cover"
                    position={i}
                  />
                  <div className="text">cover</div>
                  <div className="text">{i}</div>
                </Col>
              )
            })}
          </Row>
        </Cell>

        <h2>{translated.circle}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image src={src} width="80" height="80" fit="contain" round />
              <div className="text">contain</div>
            </Col>
            <Col span="8">
              <Image src={src} width="80" height="80" fit="cover" round />
              <div className="text">cover</div>
            </Col>
            <Col span="8">
              <Image
                src={src}
                width="80"
                height="80"
                fit="cover"
                radius="10"
                round
              />
              <div className="text">cover</div>
            </Col>
          </Row>
        </Cell>

        <h2>{translated.loading}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image width="80" height="80" showLoading />
              <div className="text">默认</div>
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
              <div className="text">自定义</div>
            </Col>
          </Row>
        </Cell>

        <h2>{translated.error}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image src="#" width="80" height="80" showError />
              <div className="text">默认</div>
            </Col>
            <Col span="8">
              <Image src="#" width="80" height="80" showError>
                <Icon name="circle-close" />
              </Image>
              <div className="text">自定义</div>
            </Col>
          </Row>
        </Cell>
      </div>
    </>
  )
}

export default ImageDemo
