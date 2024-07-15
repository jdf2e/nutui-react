import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Image } from '@tarojs/components'
import pkg from '@/packages/../config.json'
import packageJson from '@/packages/../../package.json'
import './index.scss'
import Schema from 'async-validator'

const navs = pkg.nav
// console.log(navs)

try {
  console.log('xxx', Schema)
} catch (e) {}

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
        <View className="index-header">
          <Image
            className="img"
            src={`https://img14.360buyimg.com/imagetools/jfs/t1/117879/25/28831/6279/6329723bE66715a2f/5f099b8feca9e8cc.png`}
            alt=""
            srcSet=""
          />
          <View className="info">
            <View className="h1">NutUI React</View>
            <View className="p">京东风格的轻量级小程序组件库 React 版</View>
            <View className="p">v{packageJson.version}</View>
          </View>
        </View>
        <View className="index-components">
          {navs.map((nav) => (
            <View key={nav.enName} className="ol">
              {nav.enName === 'dataentry' ? null : (
                <View className="li">{nav.name}</View>
              )}
              <View className="ul">
                {nav.packages.map((com) =>
                  com.show && com.taro ? (
                    <View key={com.name} className="li">
                      <View
                        className="a"
                        key={com.name}
                        onClick={() => gotoNext(com.name, nav.enName)}
                      >
                        {com.name}
                      </View>
                    </View>
                  ) : null
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default Index
