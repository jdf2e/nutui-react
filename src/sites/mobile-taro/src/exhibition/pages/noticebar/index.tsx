import React from 'react'
import { NoticeBar, Icon } from '@/packages/nutui.react.taro'

const NoticeBarDemo = () => {
  const horseLamp1 = [
    '惊喜红包免费领',
    '爆款准点秒',
    '买超值优惠',
    '赢百万京豆',
  ]
  const horseLamp2 = [
    '惊喜红包免费领',
    '爆款准点秒',
    '买超值优惠',
    '赢百万京豆',
  ]
  const horseLamp3 = [
    '惊喜红包免费领1',
    '爆款准点秒2',
    '买超值优惠3',
    '赢百万京豆4',
  ]
  const horseLamp4 = [
    '惊喜红包免费领',
    '爆款准点秒',
    '买超值优惠',
    '赢百万京豆',
  ]
  const text =
    '华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！'

  const demoStyles: React.CSSProperties = {
    padding: '0 10px',
    background: 'rgba(251, 248, 220, 1)',
    color: '#d9500b',
  }

  const hello = () => {
    console.log('hello world')
  }
  const go = (item: any) => {
    console.log(item)
  }

  return (
    <>
      <div className="demo" style={{ paddingBottom: '30px' }}>
        <h2>基础用法</h2>
        <NoticeBar
          text={text}
          background="rgba(251, 248, 220, 1)"
          color="#D9500B"
        />

        <h2>禁用滚动</h2>
        <NoticeBar
          text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
          scrollable={false}
          background="rgba(251, 248, 220, 1)"
          color="#D9500B"
        />

        <h2>通告栏模式--关闭模式</h2>
        <NoticeBar
          closeMode
          click={hello}
          background="rgba(251, 248, 220, 1)"
          color="#D9500B"
        >
          华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI
          WATCH等好礼，更多产品信息请持续关注！
        </NoticeBar>

        <h2>通告栏模式--链接模式</h2>
        <NoticeBar
          leftIcon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
          background="rgba(251, 248, 220, 1)"
          color="#D9500B"
        >
          <a href="https://www.jd.com">京东商城</a>
        </NoticeBar>

        <h2>纵向滚动</h2>
        <div style={demoStyles}>
          <NoticeBar
            direction="vertical"
            list={horseLamp1}
            speed={10}
            standTime={1000}
            click={(item: any) => {
              go(item)
            }}
            closeMode
            background="rgba(251, 248, 220, 1)"
            color="#D9500B"
          />
        </div>

        <h2>纵向复杂滚动动画</h2>
        <div style={demoStyles}>
          <NoticeBar
            direction="vertical"
            list={horseLamp2}
            speed={10}
            standTime={2000}
            complexAm
          />
        </div>

        <h2>纵向自定义滚动内容</h2>
        <div style={demoStyles}>
          <NoticeBar
            direction="vertical"
            height={50}
            speed={10}
            standTime={1000}
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

        <h2>纵向自定义右侧图标</h2>
        <div style={demoStyles}>
          <NoticeBar
            className="custom"
            direction="vertical"
            list={horseLamp4}
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
