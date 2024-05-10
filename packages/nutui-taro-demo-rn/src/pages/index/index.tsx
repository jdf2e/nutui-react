import Taro from '@tarojs/taro'
import pkg from '@/packages/../config.json'
import packageJson from '@/packages/../../package.json'
import './index.scss'
import { View, Image, ScrollView } from '@tarojs/components'

import adapted from '../../../scripts/taro/adapted.js'

const navs = pkg.nav
// console.log(navs)

const Index = () => {
  const gotoNext = (name: string, enName: string) => {
    // 跳转到目的页面，打开新页面
    // alert(`/${enName}/pages/${name.toLocaleLowerCase()}/index`)
    Taro.navigateTo({
      url: `/${enName}/pages/${name.toLocaleLowerCase()}/index`,
    })
  }

  return (
    <ScrollView className='index'>
      <View className='index_header'>
        <Image
          className='index_header_img'
          src='https://img14.360buyimg.com/imagetools/jfs/t1/117879/25/28831/6279/6329723bE66715a2f/5f099b8feca9e8cc.png'
        />
        <View className='index_header_info'>
          <View className='index_header_info_h1'>NutUI React</View>
          <View className='index_header_info_p'>
            京东风格的轻量级小程序组件库 React 版
          </View>
          <View className='index_header_info_p'>v2.0.0000</View>
        </View>
      </View>
      <View className='index_components'>
        {navs.map((nav) => (
          <View key={nav.enName} className='index_components_item'>
            {nav.enName === 'dentry1' ? null : (
              <View className='index_components_item_title'>{nav.name}</View>
            )}
            <View className='index_components_sublist'>
              {nav.packages.map((com) =>
                com.show && com.taro && adapted.includes(com.name.toLowerCase()) ? (
                  <View
                    key={com.name}
                    className='index_components_sublist_item'
                  >
                    <View
                      className='index_components_sublist_item_content'
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
