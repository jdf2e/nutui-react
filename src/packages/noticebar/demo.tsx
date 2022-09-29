import React from 'react'
import { NoticeBar } from './noticebar'
import { useTranslate } from '../../sites/assets/locale'
import Icon from '../icon'
import './demo.scss'

const NoticeBarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础使用',
      scrollable: '滚动播放',
      mode: '通告栏--关闭模式',
      multiline: '多行展示',
      vertical: '垂直滚动',
      complexAm: '纵向--复杂滚动动画',
      customAm: '纵向--自定义滚动内容',
      customRightIcon: '纵向--自定义右侧图标',
      text: 'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。',
      textShort: 'NutUI 是移动端组件库',
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
      scrollable: 'Scrollable',
      mode: 'Mode',
      multiline: 'Wrapable',
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
      <div className="demo" style={{ paddingBottom: '30px' }}>
        <h2>{translated.basic}</h2>
        <NoticeBar text={translated.text} />

        <h2>{translated.scrollable}</h2>
        <NoticeBar text={translated.textShort} scrollable />
        <br />
        <NoticeBar text={translated.text} scrollable={false} />

        <h2>{translated.mode}</h2>
        <NoticeBar closeMode click={hello}>
          {translated.text}
        </NoticeBar>
        <br />
        <NoticeBar closeMode rightIcon="circle-close" click={hello}>
          {translated.text}
        </NoticeBar>
        <br />
        <NoticeBar leftIcon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png">
          <a href="https://www.jd.com">{translated.jd}</a>
        </NoticeBar>

        <h2>{translated.multiline}</h2>
        <NoticeBar text={translated.text} wrapable />

        <h2>{translated.vertical}</h2>
        <div className="interstroll-list">
          <NoticeBar
            direction="vertical"
            list={horseLamp1}
            speed={10}
            standTime={1000}
            click={(item: any) => {
              go(item)
            }}
            closeMode
          />
        </div>

        <h2>{translated.complexAm}</h2>
        <div className="interstroll-list">
          <NoticeBar
            direction="vertical"
            list={horseLamp2}
            speed={10}
            standTime={2000}
            complexAm
          />
        </div>

        <h2>{translated.customAm}</h2>
        <div className="interstroll-list">
          <NoticeBar
            direction="vertical"
            height={50}
            speed={10}
            standTime={1000}
            click={(item: any) => {
              go(item)
            }}
          >
            {horseLamp3.map((item, index) => {
              return (
                <div
                  className="custom-item"
                  style={{ height: '50px', lineHeight: '50px' }}
                  key={index}
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
            standTime={1000}
            rightIcon={<Icon name="fabulous" size="16" color="#f0250f" />}
          />
        </div>
      </div>
    </>
  )
}

export default NoticeBarDemo
