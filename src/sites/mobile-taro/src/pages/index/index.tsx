import React from 'react'
import Taro from '@tarojs/taro'
import pkg from '@/config.json'
import './index.scss'

const navs = pkg.nav
const Index = () => {
  const gotoNext = (name: string, enName: string) => {
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: `/${enName}/pages/${name.toLocaleLowerCase()}/index`,
    })
  }

  const onShareAppMessage = (res) => {
    return {
      title: 'NutUI React 小程序',
      path: 'pages/index/index',
    }
  }

  const onShareTimeline = () => {
    console.log('onShareTimeline')
    return {
      title: 'NutUI React 小程序',
      path: 'pages/index/index',
    }
  }

  return (
    <>
      <div className="index">
        <div className="index-header">
          <img
            src={`https://img14.360buyimg.com/imagetools/jfs/t1/117879/25/28831/6279/6329723bE66715a2f/5f099b8feca9e8cc.png`}
            alt=""
            srcSet=""
          />
          <div className="info">
            <h1>NutUI React</h1>
            <p>京东风格的轻量级小程序组件库 React 版</p>
          </div>
        </div>
        <div className="index-components">
          {navs.map((nav) => (
            <ol key={nav.name}>
              <li>{nav.name}</li>
              <ul>
                {nav.packages.map((com) =>
                  com.show && com.taro ? (
                    <li key={com.name}>
                      <a
                        key={com.name}
                        onClick={() => gotoNext(com.name, nav.enName)}
                      >
                        {com.name}
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            </ol>
          ))}
        </div>
      </div>
    </>
  )
}

export default Index
