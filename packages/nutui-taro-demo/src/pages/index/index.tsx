import Taro from '@tarojs/taro'
import { useState } from 'react'
import {
  View,
  Image,
  Swiper,
  SwiperItem,
  Text,
  ScrollView,
  Button,
  Input,
  Video,
  Textarea,
} from '@tarojs/components'
import { SearchBar } from '@/packages/searchbar/searchbar.taro'
import pkg from '@/packages/../config.json'
import packageJson from '@/packages/../../package.json'
import './index.scss'

const navs = pkg.nav

// hack taro load button xml
console.log(Button, Input, Video, Image, Swiper, SwiperItem, Textarea)


const Index = () => {
  const [search, setSearch] = useState()
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
    <ScrollView className="index">
      <View className="index-header">
        <Image
          className="index-header-img"
          src="https://img14.360buyimg.com/imagetools/jfs/t1/117879/25/28831/6279/6329723bE66715a2f/5f099b8feca9e8cc.png"
        />
        <View className="index-header-info">
          <View className="index-header-info-h1">NutUI React</View>
          <View className="index-header-info-p">
            京东风格的轻量级小程序组件库 React 版
          </View>
          <View className="index-header-info-p">
            <Text className="index-header-info-text">
              v{packageJson?.version}
            </Text>
          </View>
        </View>
      </View>

      <View className='index-components'>
        {process.env.NODE_ENV === 'development' ? <>
          <SearchBar style={{ background: '#fff',borderRadius:'8px' }} placeholder='' value={search} onChange={(e) => {
            setSearch(e)
          }} />
          <View style={{ height: 25 }}></View>
          </> : null}
        {navs.map((nav) => (
          <View key={nav.enName} className="index-components-item">
            {nav.enName === 'dataentry' ? null : (
              <View className="index-components-item-title">{nav.name}</View>
            )}
            <View className="index-components-sublist">
              {nav.packages.map((com) =>
                com.show && com.taro && com.dd && (!search || new RegExp(search, 'ig').test(com.name.toLowerCase())) ? (
                  <View
                    key={com.name}
                    className="index-components-sublist-item"
                  >
                    <View
                      className="index-components-sublist-item-content"
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
  )
}

export default Index
