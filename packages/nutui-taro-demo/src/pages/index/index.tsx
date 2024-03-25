import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView } from '@tarojs/components'
import pkg from '@/packages/../config.json'
import packageJson from '@/packages/../../package.json'
import './index.scss'
import Schema from 'async-validator'
//
const navs = pkg.nav
// console.log(navs)

try {
  console.log('xxx', Schema)
} catch (e) {}
// const Index = () => {
function Index() {
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
      <ScrollView className="index">
        <div className="index-header">
          <img
            className="img"
            src={`https://img14.360buyimg.com/imagetools/jfs/t1/117879/25/28831/6279/6329723bE66715a2f/5f099b8feca9e8cc.png`}
            alt=""
            srcSet=""
          />
          <div className="info">
            <h1 className="h1">NutUI React</h1>
            <p className="p">京东风格的轻量级小程序组件库 React 版</p>
            <p className="p">v{packageJson.version}</p>
          </div>
        </div>
        <div className="index-components">
          {navs.map((nav) => (
            <ol key={nav.enName} className="ol">
              {nav.enName === 'dentry1' ? null : (
                <li className="li">{nav.name}</li>
              )}
              <ul className="ul">
                {nav.packages.map((com) =>
                  com.show && com.taro ? (
                    <li key={com.name} className="li">
                      <a
                        className="a"
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
      </ScrollView>
    </>
  )
}

export default Index
