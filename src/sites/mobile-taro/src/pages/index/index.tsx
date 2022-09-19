import React from 'react'
import logo from '@/sites/assets/images/logo-red.png'
import Taro from '@tarojs/taro'
import pkg from '@/config.json'
import '@/sites/assets/styles/reset.scss'
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
          <img src={logo} alt="" srcSet="" />
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
