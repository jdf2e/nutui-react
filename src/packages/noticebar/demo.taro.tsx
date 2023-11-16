import React from 'react'
import Taro from '@tarojs/taro'
import { Failure, Fabulous } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { NoticeBar } from '@/packages/nutui.react.taro'
import '@/packages/noticebar/demo.scss'
import Header from '@/sites/components/header'
import ConfigProvider from '../configprovider'

const NoticeBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础使用',
      customTheme: '自定义主题',
      scrollable: '滚动播放',
      mode: '通告栏--关闭模式',
      multiline: '多行展示',
      vertical: '垂直滚动',
      complexAm: '纵向--自定义左侧图标',
      customAm: '纵向--自定义滚动内容',
      customRightIcon: '纵向--自定义右侧图标',
      text: 'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。',
      textShort: 'NutUI-React 是移动端组件库',
      horseLamp: [
        'NoticeBar 公告栏',
        'Cascader 级联选择',
        'DatePicker 日期选择器',
        'CheckBox 复选按钮',
      ],
      jd: '京东商城',
    },
    'en-US': {
      basic: 'Basic Usage',
      customTheme: 'custom theme',
      scrollable: 'Scrollable',
      mode: 'Mode',
      multiline: 'wrap',
      vertical: 'Vertical Scroll',
      complexAm: 'Vertical Scroll Complex Animation',
      customAm: 'Vertical Scroll Custom Style',
      customRightIcon: 'Vertical Scroll Custom Right Icon',
      text: 'Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.',
      textShort: 'Nutui is a mobile terminal component library.',
      horseLamp: ['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox'],
      jd: 'Jingdong',
    },
  })
  const horseLamp1 = translated.horseLamp
  const horseLamp2 = translated.horseLamp
  const horseLamp3 = ['NoticeBar', 'Cascader ', 'DatePicker ', 'CheckBox']

  const hello = () => {
    console.log('hello world')
  }
  const go = (item: any) => {
    console.log(item)
  }

  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ paddingBottom: '30px' }}
      >
        <h2>{translated.basic}</h2>
        <NoticeBar content={translated.text} />

        <h2>{translated.customTheme}</h2>
        <ConfigProvider
          theme={{
            nutuiNoticebarBackground: '#EDF4FF',
            nutuiNoticebarColor: '#3768FA',
          }}
        >
          <NoticeBar content={translated.text} />
        </ConfigProvider>

        <h2>{translated.scrollable}</h2>
        <NoticeBar content={translated.textShort} scrollable />
        <br style={{ display: 'block', height: '10px' }} />
        <NoticeBar content={translated.text} scrollable={false} />

        <h2>{translated.mode}</h2>
        <NoticeBar closeable onClick={hello}>
          {translated.text}
        </NoticeBar>
        <br style={{ display: 'block', height: '10px' }} />
        <NoticeBar closeable rightIcon={<Failure />} onClick={hello}>
          {translated.text}
        </NoticeBar>
        <br style={{ display: 'block', height: '10px' }} />
        <NoticeBar
          leftIcon={
            <img
              alt="notice"
              width="16px"
              height="16px"
              src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
            />
          }
        >
          <a href="https://www.jd.com" style={{ color: '#4d88ff' }}>
            {translated.jd}
          </a>
        </NoticeBar>

        <h2>{translated.multiline}</h2>
        <NoticeBar content={translated.text} wrap />

        <h2>{translated.vertical}</h2>
        <div className="interstroll-list">
          <NoticeBar
            direction="vertical"
            list={horseLamp1}
            speed={10}
            duration={1000}
            onClick={(e) => {
              go(e.target.innerHTML)
            }}
            closeable
          />
        </div>

        <h2>{translated.complexAm}</h2>
        <div className="interstroll-list">
          <NoticeBar
            direction="vertical"
            list={horseLamp2}
            speed={10}
            duration={2000}
            leftIcon={
              <img
                alt="notice"
                width="16px"
                height="16px"
                src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
              />
            }
            onClick={(e) => {
              console.log('listClick', e.target)
            }}
            onItemClick={(e, val) => {
              console.log('dom', e.target)
              console.log('value', val)
            }}
          />
        </div>

        <h2>{translated.customAm}</h2>
        <div className="interstroll-list">
          <NoticeBar
            direction="vertical"
            height={50}
            speed={10}
            duration={1000}
            closeable
            onClose={() => {
              console.log('close')
            }}
          >
            {horseLamp3.map((item, index) => {
              return (
                <div
                  className="custom-item"
                  style={{ height: '50px', lineHeight: '50px' }}
                  key={index}
                  onClick={() => {
                    console.log('inner', item)
                  }}
                >
                  {item}
                </div>
              )
            })}
          </NoticeBar>
        </div>

        <h2>{translated.customRightIcon}</h2>
        <div className="interstroll-list">
          <NoticeBar
            className="custom"
            direction="vertical"
            list={horseLamp1}
            speed={10}
            duration={1000}
            onItemClick={(e, v) => {
              console.log('onclick-custom', v)
            }}
            rightIcon={<Fabulous size={16} color="#f0250f" />}
          />
        </div>
      </div>
    </>
  )
}

export default NoticeBarDemo
