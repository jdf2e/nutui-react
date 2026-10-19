import React from 'react'
import Taro from '@tarojs/taro'
import { Image, Text, View } from '@tarojs/components'
import { NavBar, Space } from '@nutui/nutui-react-taro'
import { ArrowLeft, Close, More, Share } from '@nutui/icons-react-taro'
import { MaterialView } from '../../../materialview/materialview.taro'

const subBarData = [
  {
    icon: 'https://img10.360buyimg.com/img/jfs/t1/533282/19/6137/1741/6abb63a4F641617b0/027602e02e213bbf.png',
    title: '会话',
  },
  {
    icon: 'https://img12.360buyimg.com/img/jfs/t1/532014/35/7258/1619/6abb63e2Ff618d2b0/027603003099f9df.png',
    title: '物流',
  },
  {
    icon: 'https://img11.360buyimg.com/img/jfs/t1/528558/31/10904/1404/6abb63efF3c871ddf/0276030030ebce6d.png',
    title: '提醒',
  },
  {
    icon: 'https://img30.360buyimg.com/img/jfs/t1/531341/18/8252/1460/6abb63feF5c5123e0/027603003083f264.png',
    title: '优惠',
    active: true,
  },
  {
    icon: 'https://img14.360buyimg.com/img/jfs/t1/525760/23/13203/2133/6abb6409Feea7d676/0276030030076299.png',
    title: '互动',
  },
]

const Demo4 = () => {
  return (
    <Space direction="vertical">
      <NavBar
        title={
          <View className="navbar-title-twoline">
            <Text>默认样式</Text>
            <Text>背景透明</Text>
          </View>
        }
        left={
          <MaterialView className="navbar-iOS26-button" scene="top-solid">
            <ArrowLeft />
            <Close />
          </MaterialView>
        }
        right={
          <MaterialView className="navbar-iOS26-button" scene="top-solid">
            <Share onClick={() => Taro.showToast({ title: 'icon' })} />
          </MaterialView>
        }
        className="navbar-iOS26"
        zIndex={0}
      />
      <NavBar
        back={
          <MaterialView className="navbar-iOS26-button" scene="top-solid">
            <ArrowLeft />
          </MaterialView>
        }
        right={
          <MaterialView className="navbar-iOS26-button" scene="top-solid">
            <Share onClick={() => Taro.showToast({ title: 'icon' })} />
          </MaterialView>
        }
        onBackClick={() => Taro.showToast({ title: '返回' })}
        className="navbar-iOS26 nut-navbar-sticky"
        zIndex={0}
      >
        <View className="navbar-title-twoline">
          <Text>吸顶样式</Text>
          <Text>有背景色</Text>
        </View>
      </NavBar>
      <NavBar
        right={
          <MaterialView className="navbar-iOS26-button" scene="top-solid">
            <Text>清除未读</Text>
            <More onClick={() => Taro.showToast({ title: 'icon' })} />
          </MaterialView>
        }
        onBackClick={() => Taro.showToast({ title: '返回' })}
        className="navbar-iOS26 nut-navbar-sticky"
        subBar={
          <View className="navbar-subbar">
            {subBarData.map((item) => (
              <View
                className={`navbar-subbar-item ${item.active ? 'navbar-subbar-item-active' : ''}`}
                key={item.title}
              >
                <View>
                  {item.icon && (
                    <Image className="navbar-subbar-icon" src={item.icon} />
                  )}
                </View>
                <Text>{item.title}</Text>
              </View>
            ))}
          </View>
        }
        zIndex={0}
      >
        二级楼层
      </NavBar>
    </Space>
  )
}

export default Demo4
