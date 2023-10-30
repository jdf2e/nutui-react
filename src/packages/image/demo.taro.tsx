import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { CircleClose, Loading } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Image, Cell, Row, Col } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

const ImageDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
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
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const errorSrc =
    'https://storage.3601buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell>
          <Image src={src} height={200} />
        </Cell>
        <h2>{translated.circle}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image
                src={src}
                mode="aspectFit"
                width="80"
                height="80"
                radius="50%"
              />
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span="8">
              <Image
                src={src}
                mode="scaleToFill"
                width="80"
                height="80"
                radius="50%"
              />
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span="8">
              <Image
                src={src}
                mode="scaleToFill"
                width="80"
                height="80"
                radius="10px"
              />
            </Col>
          </Row>
        </Cell>
        <h2>{translated.loading}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image width="80" height="80" />
              <View style={{ textAlign: 'left' }}>{translated.default}</View>
            </Col>
            <Col span="8">
              <Image
                width="80"
                height="80"
                loading={<Loading className="nut-icon-loading" />}
              />
              <View style={{ textAlign: 'left' }}>{translated.custom}</View>
            </Col>
          </Row>
        </Cell>

        <h2>{translated.error}</h2>
        <Cell>
          <Row gutter={10}>
            <Col span="8">
              <Image src="https://x" width="80" height="80" />
              <View style={{ textAlign: 'left' }}>{translated.default}</View>
            </Col>
            <Col span="8">
              <Image
                src="https://x"
                width="80"
                height="80"
                error={<CircleClose />}
              />
              <View style={{ textAlign: 'left' }}>{translated.custom}</View>
            </Col>
          </Row>
        </Cell>
        <h2>{translated.fill}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          {[
            'scaleToFill',
            'aspectFit',
            'aspectFill',
            'widthFix',
            'heightFix',
          ].map((mode) => {
            return (
              <Col span="8" key={mode}>
                <Image src={src} mode={mode as any} width="80" height="80" />
                <View style={{ textAlign: 'left' }}>{mode}</View>
              </Col>
            )
          })}
        </Cell>
        <h2>{translated.position}</h2>
        <Cell style={{ flexWrap: 'wrap' }}>
          {[
            'top left',
            'top',
            'top right',
            'left',
            'center',
            'right',
            'bottom left',
            'bottom',
            'bottom right',
          ].map((mode) => {
            return (
              <Col span={8} key={mode}>
                <Image src={src} mode={mode as any} width="80" height="80" />
                <View style={{ textAlign: 'left' }}>{mode}</View>
              </Col>
            )
          })}
        </Cell>
        <h2>{translated.lazyload}11</h2>
        <ScrollView style={{ height: '350px' }} scrollY>
          {[
            ...new Array(3).fill(src),
            'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
            'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          ].map((_) => {
            return <Image key={_} src={_} lazyLoad width="100%" height="150" />
          })}
        </ScrollView>
      </div>
    </>
  )
}

export default ImageDemo
