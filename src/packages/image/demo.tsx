import React from 'react'
import { Image } from './image'
import { useTranslate } from '../../sites/assets/locale'
import Row from '@/packages/row'
import Col from '@/packages/col'
import Icon from '@/packages/icon'
import Cell from '@/packages/cell'

const ImageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基本用法',
      fill: '填充模式',
      position: '图片位置',
      circle: '圆形图片',
      loading: '加载中提示',
      error: '加载失败',
      lazyload: '图片懒加载',
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
      lazyload: 'Lazyload',
      default: 'Default',
      custom: 'Custom',
    },
  })
  const src =
    'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  const placeholderImg =
    'https://img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png'

  const fits = ['contain', 'cover', 'fill', 'none', 'scale-down']
  const position1 = ['left', 'center', 'right']
  const position2 = ['top', 'center', 'bottom']
  const imageData = [1, 2, 3, 4, 5, 6]

  const style = `
 .demo .image-text {
    margin-top: 5px;
    text-align: center;
    color: #999;
  }
 .demo .nut-row-flex-wrap .nut-col {
    margin-bottom: 20px;
  }
   .lazy-box .nut-image{
    margin-bottom: 10px;
  }
  .lazy-box{width:100%}
`
  return (
    <>
      <style>{style}</style>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Image
            src={src}
            width="100"
            height="100"
            onClick={() => {
              console.log('click image')
            }}
          />
        </Cell>

        <h2>{translated.fill}</h2>
        <Cell>
          <Row gutter={10} type="flex" wrap="wrap">
            {fits.map((i) => {
              return (
                <Col span="8" key={i}>
                  <Image src={src} width="100" height="100" fit={i} />
                  <div className="image-text">{i}</div>
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
                    width="100"
                    height="100"
                    fit="contain"
                    position={i}
                  />
                  <div className="image-text">contain</div>
                  <div className="image-text">{i}</div>
                </Col>
              )
            })}
            {position1.map((i) => {
              return (
                <Col span="8" key={i}>
                  <Image
                    src={src}
                    width="100"
                    height="100"
                    fit="cover"
                    position={i}
                  />
                  <div className="image-text">cover</div>
                  <div className="image-text">{i}</div>
                </Col>
              )
            })}
          </Row>
        </Cell>

        <h2>{translated.circle}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image src={src} width="100" height="100" fit="contain" round />
              <div className="image-text">contain</div>
            </Col>
            <Col span="8">
              <Image src={src} width="100" height="100" fit="cover" round />
              <div className="image-text">cover</div>
            </Col>
            <Col span="8">
              <Image
                src={src}
                width="100"
                height="100"
                fit="cover"
                radius="10"
                round
              />
              <div className="image-text">cover</div>
            </Col>
          </Row>
        </Cell>

        <h2>{translated.loading}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image
                width="100"
                height="100"
                showLoading
                isLazy
                onLoad={() => {
                  console.log('image onload')
                }}
              />
              <div className="image-text">{translated.default}</div>
            </Col>
            <Col span="8">
              <Image
                width="100"
                height="100"
                isLazy
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
              <Image
                src="https://x"
                width="100"
                height="100"
                showError
                onError={() => {
                  console.log('image error')
                }}
              />
              <div className="image-text">{translated.default}</div>
            </Col>
            <Col span="8">
              <Image src="https://x" width="100" height="100" showError>
                <Icon name="circle-close" />
              </Image>
              <div className="image-text">{translated.custom}</div>
            </Col>
          </Row>
        </Cell>
        <h2>{translated.lazyload}</h2>
        <Cell>
          <div className="lazy-box">
            {imageData.map((item) => {
              return (
                <Image
                  key={item}
                  height="150"
                  src={src}
                  isLazy
                  showError
                  showLoading
                  loadingImg={placeholderImg}
                  errorImg={placeholderImg}
                />
              )
            })}
          </div>
        </Cell>
      </div>
    </>
  )
}

export default ImageDemo
